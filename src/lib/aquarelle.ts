/**
 * Lavis aquarelle sous les cartes pays (MadagascarMap, BurkinaMap), précalculé en images.
 *
 * Le rendu vient du filtre SVG « lhe-aq2 » (canvas v116) : déformation par bruit, bords
 * plus foncés, grain fin. WebKit (Safari, et Chrome sur iPhone) calcule ce filtre sur le
 * processeur et le recalcule au défilement et au zoom : la carte mettait du temps à
 * s'afficher (issue #44). Le filtre est donc rendu une fois, par Chrome, en images de
 * transparence WebP sans perte (scripts/aquarelle.mjs → public/cartes/aquarelle/), puis
 * affiché en mask-image sur des aplats en tokens de rôle (composant Aquarelle) : le lavis
 * suit toujours le mode clair / sombre.
 *
 * Le filtre produit, pour chaque couche de lavis, deux calques empilés :
 * - la forme grainée, en --accent : forme déformée et floutée (« forme ») × grain ;
 * - le bord, en --aquarelle-bord : la forme moins son érosion, floutée (« bord »).
 * Les masques sont normalisés par l'opacité de la couche en mode clair : l'opacité
 * revient en CSS (--aquarelle-1, --aquarelle-2), ×1,1 pour le bord comme dans le filtre.
 * Le grain ne dépend pas de la forme : c'est une tuile répétée, croisée avec la forme
 * (mask-composite: intersect), bien plus légère qu'un grain pleine taille.
 *
 * À relancer (npm run aquarelle) après tout changement du contour, des transformations
 * ou des paramètres ci-dessous.
 */
import { COUNTRY_CENTER, COUNTRY_HEIGHT, COUNTRY_PATH, COUNTRY_WIDTH } from './burkina';
import { ISLAND_HEIGHT, ISLAND_PATH, ISLAND_WIDTH } from './madagascar';

/** Pixels par unité du repère de la carte : 2× la largeur d'affichage maximale (470px pour 399). */
export const AQUARELLE_SCALE = 2.4;
/** Côté de la tuile de grain, en unités du repère (300px). */
export const GRAIN_TILE = 125;
/** Opacité des couches en mode clair (tokens.css) : les masques en sont divisés. */
const LIGHT_OPACITY = [0.16, 0.14];
/**
 * Débord du lavis autour de la forme transformée : déformation (échelle 52, soit ±26)
 * et deux flous (écarts-types 2,5 et 1,6, à 3 σ). Arrondi au-dessus.
 */
const MARGIN = 40;

interface Wash {
  /** Transformation de la forme, comme dans la maquette. */
  transform: string;
}

interface CountryMap {
  path: string;
  width: number;
  height: number;
  washes: Wash[];
}

const around = (cx: number, cy: number, sx: number, sy = sx, rotate = 0) =>
  `translate(${cx} ${cy}) rotate(${rotate}) scale(${sx} ${sy}) translate(${-cx} ${-cy})`;

export const AQUARELLE_MAPS = {
  madagascar: {
    path: ISLAND_PATH,
    width: ISLAND_WIDTH,
    height: ISLAND_HEIGHT,
    washes: [{ transform: around(222.4, 352.1, 1.24, 1.09) }, { transform: around(222.4, 352.1, 1.1, 1.03, 4) }],
  },
  burkina: {
    path: COUNTRY_PATH,
    width: COUNTRY_WIDTH,
    height: COUNTRY_HEIGHT,
    washes: [
      { transform: around(COUNTRY_CENTER.x, COUNTRY_CENTER.y, 1.12, 1.16) },
      { transform: around(COUNTRY_CENTER.x, COUNTRY_CENTER.y, 1.05, 1.07, 3) },
    ],
  },
} satisfies Record<string, CountryMap>;

export type AquarelleMap = keyof typeof AQUARELLE_MAPS;
export type AquarelleKind = 'forme' | 'bord';

/** Zone couverte par les images d'une carte, en unités de son repère. */
export interface Region {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Points de contrôle d'un tracé en coordonnées absolues (M, L, C) : leur enveloppe contient la forme. */
function pathPoints(path: string): [number, number][] {
  const numbers = path.match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
  const points: [number, number][] = [];
  for (let i = 0; i + 1 < numbers.length; i += 2) points.push([numbers[i], numbers[i + 1]]);
  return points;
}

/** Applique une chaîne translate / rotate / scale (SVG) à un point. */
function applyTransform(transform: string, [x, y]: [number, number]): [number, number] {
  const ops = [...transform.matchAll(/(translate|rotate|scale)\(([^)]+)\)/g)].map(([, op, args]) => ({
    op,
    args: args.trim().split(/[\s,]+/).map(Number),
  }));
  // La transformation la plus à droite s'applique en premier.
  for (const { op, args } of ops.reverse()) {
    if (op === 'translate') [x, y] = [x + args[0], y + (args[1] ?? 0)];
    else if (op === 'scale') [x, y] = [x * args[0], y * (args[1] ?? args[0])];
    else {
      const a = (args[0] * Math.PI) / 180;
      [x, y] = [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a)];
    }
  }
  return [x, y];
}

/** Zone commune à toutes les couches d'une carte : la même position pour chaque image. */
export function aquarelleRegion(map: AquarelleMap): Region {
  const { path, washes } = AQUARELLE_MAPS[map];
  const points = washes.flatMap(({ transform }) => pathPoints(path).map((p) => applyTransform(transform, p)));
  const x = Math.floor(Math.min(...points.map(([px]) => px)) - MARGIN);
  const y = Math.floor(Math.min(...points.map(([, py]) => py)) - MARGIN);
  const right = Math.ceil(Math.max(...points.map(([px]) => px)) + MARGIN);
  const bottom = Math.ceil(Math.max(...points.map(([, py]) => py)) + MARGIN);
  return { x, y, width: right - x, height: bottom - y };
}

/** Garde seulement la transparence, multipliée par `gain`. */
const alphaOnly = (input: string, gain: number) =>
  `<feColorMatrix in="${input}" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 ${gain} 0"/>`;

/** Filtre « lhe-aq2 » jusqu'à la forme floutée (soft) et au bord flouté (rimS). */
const WASH_FILTER = `
  <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="4" seed="7" result="warp"/>
  <feDisplacementMap in="SourceGraphic" in2="warp" scale="52" xChannelSelector="R" yChannelSelector="G" result="shape"/>
  <feGaussianBlur in="shape" stdDeviation="2.5" result="soft"/>
  <feMorphology in="soft" operator="erode" radius="6" result="inner"/>
  <feComposite in="soft" in2="inner" operator="out" result="rim"/>
  <feGaussianBlur in="rim" stdDeviation="1.6" result="rimS"/>`;

/** Masque d'une couche : « forme » (à croiser avec le grain) ou « bord ». */
function washMaskSvg(map: AquarelleMap, wash: number, kind: AquarelleKind): string {
  const { path, washes } = AQUARELLE_MAPS[map];
  const { x, y, width, height } = aquarelleRegion(map);
  const opacity = LIGHT_OPACITY[wash];
  const output = kind === 'forme' ? alphaOnly('soft', 1 / opacity) : alphaOnly('rimS', 1 / opacity);
  // Zone du filtre en unités du repère : couvre toute l'image (le filtre d'origine déborde de 30 %).
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x} ${y} ${width} ${height}" width="${width}" height="${height}">
    <filter id="f" filterUnits="userSpaceOnUse" x="${x}" y="${y}" width="${width}" height="${height}" color-interpolation-filters="sRGB">${WASH_FILTER}${output}</filter>
    <g filter="url(#f)"><g transform="${washes[wash].transform}"><path d="${path}" fill="#000" fill-opacity="${opacity}"/></g></g>
  </svg>`;
}

/** Tuile de grain (même bruit que le filtre, raccordé sur ses bords). */
function grainTileSvg(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${GRAIN_TILE} ${GRAIN_TILE}" width="${GRAIN_TILE}" height="${GRAIN_TILE}">
    <filter id="g" filterUnits="userSpaceOnUse" x="0" y="0" width="${GRAIN_TILE}" height="${GRAIN_TILE}" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="3" stitchTiles="stitch" result="grain"/>
      <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.4 1.25"/>
    </filter>
    <rect width="${GRAIN_TILE}" height="${GRAIN_TILE}" filter="url(#g)"/>
  </svg>`;
}

const washImageName = (map: AquarelleMap, wash: number, kind: AquarelleKind) => `${map}-${wash + 1}-${kind}`;
const imageUrl = (name: string) => `/cartes/aquarelle/${name}.webp`;
export const GRAIN_URL = imageUrl('grain');

/** URL d'un masque : /cartes/aquarelle/madagascar-1-forme.webp. */
export const washImageUrl = (map: AquarelleMap, wash: number, kind: AquarelleKind) =>
  imageUrl(washImageName(map, wash, kind));

/** Toutes les images à générer (scripts/aquarelle.mjs) : nom, SVG du filtre et taille en unités. */
export function aquarelleImages(): { name: string; svg: string; width: number; height: number }[] {
  const washes = (Object.keys(AQUARELLE_MAPS) as AquarelleMap[]).flatMap((map) =>
    AQUARELLE_MAPS[map].washes.flatMap((_, wash) =>
      (['forme', 'bord'] as const).map((kind) => ({
        name: washImageName(map, wash, kind),
        svg: washMaskSvg(map, wash, kind),
        ...aquarelleRegion(map),
      })),
    ),
  );
  return [...washes, { name: 'grain', svg: grainTileSvg(), width: GRAIN_TILE, height: GRAIN_TILE }];
}
