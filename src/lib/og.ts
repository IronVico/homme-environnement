/**
 * Images de partage (Open Graph) : une image 1200×630 par page et par langue, générée au build
 * (Satori → SVG, resvg → PNG), sans service externe : le site reste 100 % statique.
 * Composition « topo » : logo et titre de la page à gauche, courbes de niveau sauge à droite.
 *
 * Les titres viennent de l'i18n (hero de chaque page) et des collections (projets, sites).
 * Une page absente de la liste (404, 500…) reçoit l'image de l'accueil (voir ogImageFor).
 */
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { Resvg } from '@resvg/resvg-js';
import { getCollection } from 'astro:content';
import satori from 'satori';
import logoEnRaw from '../assets/logos/logo-couleur-en.svg?raw';
import logoFrRaw from '../assets/logos/logo-couleur.svg?raw';
import { PAGES } from '../data/navigation';
import { defaultLang, languages, t, type Lang } from '../i18n';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

/** Titre en deux temps, comme le hero de la page ; `light` absent : titre en gras seul. */
export interface OgTitle {
  strong: string;
  light?: string;
}

export interface OgPage extends OgTitle {
  /** Chemin de l'image sans extension, sous /og/ : « index », « en/projets/reboisement ». */
  key: string;
  lang: Lang;
}

/** Clé d'image d'une page : « /en/projets/ » → « en/projets », accueil → « index » / « en/index ». */
function keyOf(lang: Lang, path: string): string {
  const prefix = lang === defaultLang ? '' : `${lang}/`;
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `${prefix}${clean || 'index'}`;
}

/** Toutes les pages qui ont leur propre image, dans les deux langues. */
export async function ogPages(): Promise<OgPage[]> {
  const projets = await getCollection('projets');
  const sites = await getCollection('sites');
  const pages: OgPage[] = [];

  for (const lang of Object.keys(languages) as Lang[]) {
    const dict = t(lang);
    const add = (path: string, title: OgTitle) => pages.push({ key: keyOf(lang, path), lang, ...title });

    add('', { strong: dict.home.hero.titleStrong, light: dict.home.hero.titleLight });
    for (const [page, path] of Object.entries(PAGES) as [keyof typeof PAGES, string][]) {
      const { hero } = dict[page];
      add(path, { strong: hero.titleStrong, light: hero.titleLight });
    }
    // Fiches : nom puis accroche, comme leur hero ; sans accroche, le nom seul.
    for (const { id, data } of projets) {
      const name = data.shortTitle ?? data.title;
      add(`${PAGES.projets}/${id}`, data.tagline ? { strong: `${name},`, light: data.tagline } : { strong: name });
    }
    for (const { id, data } of sites) {
      const country = data.country === 'burkina-faso' ? PAGES.burkina : PAGES.madagascar;
      add(`${country}/${id}`, data.tagline ? { strong: `${data.name},`, light: data.tagline } : { strong: data.name });
    }
  }
  return pages;
}

/** Image de partage d'une page (URL relative) et son texte alternatif ; repli sur l'accueil. */
export async function ogImageFor(lang: Lang, pathname: string): Promise<{ src: string; alt: string }> {
  const path = pathname.replace(/^\/+/, '').replace(/^en(\/|$)/, '');
  const pages = await ogPages();
  const page = pages.find((p) => p.key === keyOf(lang, path)) ?? pages.find((p) => p.key === keyOf(lang, ''))!;
  const title = [page.strong, page.light].filter(Boolean).join(' ');
  // Deux-points précédé d'une espace en français seulement.
  const colon = lang === 'fr' ? ' :' : ':';
  return { src: `/og/${page.key}.png`, alt: `${t(lang).meta.siteName}${colon} ${title}` };
}

// --- Rendu ---------------------------------------------------------------------------------------

const require = createRequire(import.meta.url);
const SAUGE = '#97A785';
const BASALTE = '#434840';

/** Rubik (la police du site) aux trois graisses de la composition. */
let fonts: Promise<{ name: string; data: Buffer; weight: 300 | 500 | 800; style: 'normal' }[]> | undefined;
function loadFonts() {
  fonts ??= Promise.all(
    ([300, 500, 800] as const).map(async (weight) => ({
      name: 'Rubik',
      weight,
      style: 'normal' as const,
      data: await readFile(require.resolve(`@fontsource/rubik/files/rubik-latin-${weight}-normal.woff`)),
    })),
  );
  return fonts;
}

/**
 * Logo en data URI, cadré sur le dessin : le viewBox d'origine (432×174) garde des marges
 * intérieures, retirées ici pour que l'isotype s'aligne à gauche sur le titre.
 */
const LOGO_BOX = { x: 43.9, y: 36, width: 388.1, height: 101.3 };
function logoUri(lang: Lang): string {
  const svg = (lang === 'en' ? logoEnRaw : logoFrRaw).replace(
    /viewBox="[^"]*"/,
    `viewBox="${LOGO_BOX.x} ${LOGO_BOX.y} ${LOGO_BOX.width} ${LOGO_BOX.height}"`,
  );
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/** Courbes de niveau (même tracé que la maquette), estompées vers la gauche par un masque. */
const TOPO_PATHS = [
  'M932.2 330.0C940.1 377.6 894.9 441.2 852.3 482.4C809.7 523.6 740.2 562.2 676.5 577.0C612.8 591.8 544.1 565.1 470.0 571.5C395.9 577.8 297.3 629.0 231.8 614.9C166.3 600.7 100.5 534.1 77.2 486.6C53.9 439.1 84.3 379.0 92.2 330.0C100.1 281.0 97.4 234.9 124.8 192.4C152.2 149.8 199.0 108.2 256.5 74.7C314.1 41.2 404.1 -14.9 470.0 -8.5C535.9 -2.2 596.0 78.4 651.8 112.6C707.6 146.8 757.9 160.3 804.7 196.6C851.4 232.8 924.3 282.4 932.2 330.0Z',
  'M878.1 330.0C883.3 373.2 849.1 430.3 810.8 465.9C772.6 501.5 705.4 529.8 648.6 543.5C591.8 557.3 536.0 540.8 470.0 548.5C404.0 556.2 308.9 603.9 252.7 589.9C196.6 575.8 153.4 507.6 133.1 464.3C112.9 421.0 126.3 372.7 131.4 330.0C136.6 287.3 140.2 246.9 164.2 208.1C188.2 169.3 224.3 126.3 275.2 97.1C326.2 67.9 411.5 25.2 470.0 32.9C528.5 40.6 574.4 114.4 626.0 143.4C677.7 172.3 737.8 175.4 779.8 206.5C821.8 237.6 872.9 286.8 878.1 330.0Z',
  'M823.9 330.0C826.9 368.6 803.1 419.2 769.3 449.3C735.5 479.5 671.2 498.0 621.3 511.0C571.4 523.9 527.4 518.6 470.0 527.0C412.6 535.3 324.2 575.0 276.7 561.1C229.3 547.2 203.1 482.0 185.4 443.4C167.7 404.9 167.6 366.6 170.6 330.0C173.6 293.4 182.8 258.7 203.5 223.8C224.2 188.8 250.2 144.9 294.6 120.3C339.1 95.6 418.5 67.5 470.0 75.8C521.5 84.2 556.5 146.8 603.4 170.4C650.3 194.1 714.5 191.3 751.2 217.9C788.0 244.5 820.9 291.4 823.9 330.0Z',
  'M770.6 330.0C772.0 363.6 756.3 407.5 727.1 432.5C697.9 457.5 638.2 467.7 595.3 479.9C552.5 492.1 518.7 497.4 470.0 505.6C421.3 513.8 342.7 542.9 303.3 529.3C263.9 515.8 249.1 457.4 233.7 424.2C218.2 391.0 209.2 360.8 210.6 330.0C212.0 299.2 224.7 270.0 242.1 239.2C259.6 208.3 277.3 165.1 315.3 145.0C353.3 125.0 425.3 110.7 470.0 118.9C514.7 127.2 541.9 175.8 583.3 194.5C624.8 213.1 687.4 208.3 718.6 230.9C749.9 253.5 769.2 296.4 770.6 330.0Z',
  'M718.6 330.0C718.9 358.3 708.6 395.2 684.0 415.3C659.5 435.5 606.7 439.5 571.0 450.8C535.3 462.1 509.9 475.7 470.0 483.1C430.1 490.6 363.6 508.3 331.6 495.5C299.6 482.7 291.4 434.1 278.1 406.5C264.8 378.9 251.6 355.4 251.9 330.0C252.2 304.6 265.6 280.6 279.9 254.2C294.2 227.8 306.0 187.3 337.7 171.8C369.4 156.2 432.1 153.5 470.0 160.9C507.9 168.4 529.6 202.4 564.9 216.4C600.3 230.5 656.6 226.5 682.2 245.4C707.8 264.3 718.3 301.7 718.6 330.0Z',
  'M667.9 330.0C667.5 352.8 660.1 382.2 640.2 397.9C620.3 413.5 576.9 413.8 548.5 423.9C520.2 434.0 501.3 452.3 470.0 458.5C438.7 464.6 385.8 472.1 360.7 460.7C335.6 449.3 330.3 411.9 319.3 390.1C308.3 368.3 295.0 350.2 294.6 330.0C294.2 309.8 305.7 290.5 316.9 269.0C328.1 247.4 336.3 212.1 361.9 200.7C387.4 189.3 439.1 194.6 470.0 200.7C500.9 206.8 518.6 227.4 547.4 237.5C576.1 247.5 622.5 245.8 642.6 261.2C662.7 276.6 668.3 307.2 667.9 330.0Z',
  'M618.3 330.0C617.5 347.1 611.2 368.8 596.1 380.3C581.0 391.8 548.7 390.6 527.7 399.0C506.7 407.5 493.0 426.4 470.0 430.9C447.0 435.4 408.4 435.4 389.7 426.0C371.1 416.6 366.7 390.6 358.2 374.6C349.6 358.6 339.0 345.2 338.3 330.0C337.5 314.8 345.4 300.0 353.6 283.6C361.9 267.2 368.3 239.3 387.7 231.6C407.1 223.9 446.3 233.1 470.0 237.6C493.7 242.1 508.0 251.8 529.7 258.6C551.5 265.3 585.9 266.0 600.6 277.9C615.4 289.8 619.0 312.9 618.3 330.0Z',
  'M569.1 330.0C568.3 341.3 562.7 355.3 552.5 362.9C542.3 370.5 521.9 369.4 508.1 375.6C494.4 381.8 485.0 397.3 470.0 400.1C455.0 402.9 430.3 399.0 417.9 392.3C405.5 385.5 401.6 370.0 395.7 359.6C389.8 349.2 383.2 340.2 382.4 330.0C381.6 319.8 385.4 309.4 390.8 298.4C396.2 287.4 401.6 268.5 414.8 264.0C428.0 259.4 453.9 268.4 470.0 271.2C486.1 274.0 496.7 276.7 511.2 280.7C525.8 284.7 547.7 287.0 557.4 295.2C567.0 303.4 569.9 318.7 569.1 330.0Z',
  'M519.8 330.0C519.2 335.6 515.3 342.2 510.2 346.0C505.1 349.8 495.9 349.5 489.2 352.9C482.5 356.3 477.4 365.1 470.0 366.3C462.6 367.5 451.0 363.8 444.7 360.2C438.5 356.6 435.8 349.9 432.8 344.8C429.7 339.8 427.0 335.2 426.5 330.0C425.9 324.8 426.7 319.3 429.4 313.8C432.0 308.3 435.7 299.1 442.5 297.1C449.3 295.1 461.8 300.6 470.0 301.8C478.2 303.1 484.2 302.6 491.4 304.4C498.7 306.2 508.9 308.4 513.6 312.6C518.3 316.9 520.4 324.4 519.8 330.0Z',
];
const TOPO_OPACITIES = [0.63, 0.65, 0.68, 0.7, 0.73, 0.75, 0.78, 0.8, 0.83];

// Le SVG (viewBox 900×640) occupe 1000×711 px, calé à droite (x = 500) : le masque, transparent
// jusqu'à 240 px puis opaque à 400 px de son bord gauche, devient 216 → 360 en unités du viewBox.
const TOPO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 640" width="1000" height="711">
<defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="216" y1="0" x2="360" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff"/></linearGradient>
<mask id="m" maskUnits="userSpaceOnUse" x="-100" y="-100" width="1100" height="840"><rect x="-100" y="-100" width="1100" height="840" fill="url(#g)"/></mask></defs>
<g mask="url(#m)" fill="none" stroke="${SAUGE}" stroke-width="2.2">${TOPO_PATHS.map((d, i) => `<path d="${d}" stroke-opacity="${TOPO_OPACITIES[i]}"/>`).join('')}</g>
</svg>`;
const TOPO_URI = `data:image/svg+xml;base64,${Buffer.from(TOPO_SVG).toString('base64')}`;

/** Corps du titre : 60 px comme la maquette, réduit pour les titres longs (fiches, Équipe). */
function titleSize({ strong, light = '' }: OgTitle): number {
  const length = strong.length + light.length;
  if (length <= 48) return 60;
  if (length <= 66) return 54;
  return 46;
}

type Node = { type: string; props: Record<string, unknown> & { style?: Record<string, unknown> } };
const h = (type: string, style: Record<string, unknown>, children?: unknown, props: Record<string, unknown> = {}): Node => ({
  type,
  props: { ...props, style, children },
});

/** PNG 1200×630 d'une page. */
export async function renderOgImage(page: OgTitle & { lang: Lang }): Promise<Buffer> {
  const size = titleSize(page);
  const tree = h(
    'div',
    { width: OG_WIDTH, height: OG_HEIGHT, display: 'flex', position: 'relative', background: '#FFFFFF', color: BASALTE, fontFamily: 'Rubik' },
    [
      h('img', { position: 'absolute', left: 500, top: -30, width: 1000, height: 711 }, undefined, { src: TOPO_URI, width: 1000, height: 711 }),
      h(
        'div',
        { position: 'absolute', top: 0, left: 0, bottom: 0, width: 760, padding: '56px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40 },
        [
          h('img', { width: 285.9, height: 74.6 }, undefined, { src: logoUri(page.lang), width: 285.9, height: 74.6 }),
          h('div', { display: 'flex', flexDirection: 'column', gap: 28 }, [
            h('div', { display: 'flex', flexDirection: 'column', fontSize: size, lineHeight: 1.02, letterSpacing: size * -0.025, textWrap: 'balance' }, [
              h('span', { fontWeight: 800 }, page.strong),
              ...(page.light ? [h('span', { fontWeight: 300 }, page.light)] : []),
            ]),
            h('div', { width: 72, height: 6, borderRadius: 3, background: SAUGE }),
            h('span', { fontSize: 20, fontWeight: 500, letterSpacing: 0.4 }, 'homme-environnement.org'),
          ]),
        ],
      ),
    ],
  );
  const svg = await satori(tree as never, { width: OG_WIDTH, height: OG_HEIGHT, fonts: await loadFonts() });
  return new Resvg(svg, { fitTo: { mode: 'width', value: OG_WIDTH } }).render().asPng();
}
