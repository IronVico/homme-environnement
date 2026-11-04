/**
 * Écran d'ouverture (Intro.astro), seulement quand la page a besoin de charger : si la
 * photo principale est prête avant GRACE_MS, l'écran disparaît sans s'être joué. Sinon
 * l'isotype se dessine et le rideau attend la photo, puis se lève, au plus tard à
 * MAX_MS. Joué une fois par session : la clé n'est posée que s'il s'est vraiment joué.
 *
 * Sans ce script, le CSS retire l'écran de lui-même (animation intro-secours).
 */

const GRACE_MS = 400; // à garder égal au délai du dessin dans Intro.astro
const DRAWN_MS = 1070; // isotype dessiné et rempli
const MAX_MS = 3500;

/** Résolue quand la page apparaît : tout de suite, ou quand le rideau commence à se lever. */
let revealed: Promise<void> = Promise.resolve();
export const whenPageRevealed = () => revealed;

const heroLoaded = () =>
  Promise.all(
    [...document.querySelectorAll<HTMLImageElement>('img[fetchpriority="high"]')]
      .filter((img) => !img.complete)
      .map((img) => new Promise((done) => {
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
      })),
  );

const wait = (ms: number) => new Promise((done) => setTimeout(done, Math.max(0, ms)));

export function initIntro() {
  const intro = document.querySelector<HTMLElement>('.intro');
  if (!intro || getComputedStyle(intro).display === 'none') {
    intro?.remove();
    return;
  }

  revealed = (async () => {
    // Compté depuis l'arrivée de la page : la lenteur du serveur ne dit rien de la photo, déjà en cache au retour.
    const [navigation] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const arrival = navigation?.responseStart ?? 0;
    const elapsed = () => performance.now() - arrival;
    const ready = await Promise.race([heroLoaded().then(() => true), wait(GRACE_MS - elapsed()).then(() => false)]);
    if (ready && elapsed() <= GRACE_MS) {
      intro.remove();
      return;
    }
    try {
      sessionStorage.setItem('lhe-intro', '1');
    } catch {}
    await Promise.race([heroLoaded(), wait(MAX_MS - elapsed())]);
    await wait(DRAWN_MS - elapsed());
    intro.querySelector('.intro__bande')?.addEventListener('animationend', () => intro.remove());
    intro.classList.add('intro--lever');
  })();
}
