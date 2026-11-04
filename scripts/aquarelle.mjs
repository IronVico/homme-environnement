/**
 * Génère les masques du lavis aquarelle des cartes pays (voir src/lib/aquarelle.ts) dans
 * public/cartes/aquarelle/, en WebP sans perte. Lancer : npm run aquarelle.
 *
 * Rendu par Chrome sans interface (protocole DevTools, sans dépendance) plutôt que par
 * resvg au build : resvg déplace la forme autrement que les navigateurs (feDisplacementMap),
 * le lavis n'aurait plus le même contour. Les images sont commitées : le build et
 * l'hébergement (Vercel, OVH) n'ont besoin ni de Chrome ni d'aucun calcul.
 * Chrome : chemin macOS par défaut, ou variable d'environnement CHROME.
 */
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import sharp from 'sharp';
import { createServer } from 'vite';

const OUT = 'public/cartes/aquarelle';
const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// La bibliothèque est en TypeScript : Vite la charge comme le fait Astro.
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { AQUARELLE_SCALE, aquarelleImages } = await vite.ssrLoadModule('/src/lib/aquarelle.ts');
await vite.close();

const profile = mkdtempSync(join(tmpdir(), 'aquarelle-'));
const port = 9222 + Math.floor(Math.random() * 1000);
const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  '--no-first-run',
  'about:blank',
]);

try {
  const page = await connect(port);
  await page.send('Page.enable');
  await page.send('Emulation.setDefaultBackgroundColorOverride', { color: { r: 0, g: 0, b: 0, a: 0 } });
  const { frameTree } = await page.send('Page.getFrameTree');

  mkdirSync(OUT, { recursive: true });
  for (const { name, svg, width, height } of aquarelleImages()) {
    await page.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: AQUARELLE_SCALE, mobile: false });
    await page.send('Page.setDocumentContent', {
      frameId: frameTree.frame.id,
      html: `<!doctype html><style>html,body{margin:0;background:transparent}svg{display:block}</style>${svg}`,
    });
    await page.evaluate('new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))');
    const { data } = await page.send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width, height, scale: 1 },
      captureBeyondViewport: true,
    });
    const webp = await sharp(Buffer.from(data, 'base64')).webp({ lossless: true, effort: 6 }).toBuffer();
    writeFileSync(join(OUT, `${name}.webp`), webp);
    console.log(`${OUT}/${name}.webp  ${Math.round(webp.length / 1024)} Ko`);
  }
  page.close();
} finally {
  const exited = new Promise((r) => chrome.once('exit', r));
  chrome.kill();
  await exited;
  rmSync(profile, { recursive: true, force: true });
}

/** Connexion DevTools minimale à la page ouverte par Chrome. */
async function connect(debugPort) {
  let targets;
  for (let attempt = 0; !targets; attempt++) {
    try {
      targets = await (await fetch(`http://127.0.0.1:${debugPort}/json`)).json();
    } catch (error) {
      if (attempt > 50) throw error;
      await new Promise((r) => setTimeout(r, 200));
    }
  }
  const socket = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => socket.addEventListener('open', r));
  let id = 0;
  const pending = new Map();
  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    pending.get(message.id)?.(message);
    pending.delete(message.id);
  });
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const messageId = ++id;
      pending.set(messageId, (m) => (m.error ? reject(new Error(`${method} : ${m.error.message}`)) : resolve(m.result)));
      socket.send(JSON.stringify({ id: messageId, method, params }));
    });
  const evaluate = (expression) => send('Runtime.evaluate', { expression, awaitPromise: true });
  return { send, evaluate, close: () => socket.close() };
}
