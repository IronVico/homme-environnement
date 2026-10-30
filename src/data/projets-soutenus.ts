/**
 * Page « Autres projets soutenus » : chiffres, pays et projets, d'après le PDF remis par
 * l'ONG le 30/10/2026. Les textes (titres des projets, noms des pays) sont dans src/i18n,
 * clé `autresProjets`, sous les mêmes identifiants.
 */

/** Programme mené avec les entreprises. TODO ONG : la page L'ONG annonce 2010-2015, 20+ projets et 15 pays. */
export const PROGRAMME = {
  from: 2010,
  to: 2019,
  /** TODO ONG : 21 projets annoncés, 16 détaillés dans le PDF. */
  projects: 21,
  /** TODO ONG : 17 pays annoncés, 12 sur la carte. */
  countries: 17,
};

/** Entreprises partenaires. TODO ONG : orthographe de « Maisons Comeca » à confirmer. */
export const COMPANIES = [
  'Maisons du Monde',
  'Chanel',
  "L'Occitane",
  'Mane',
  'Pure Trade',
  'Melvita',
  'Technicoflor',
  'Léa Nature',
  'Phytodess',
  'Maisons Comeca',
];

/**
 * Pays de la carte, dans l'ordre des filtres.
 * left, top : repère du pays, en % de la carte.
 * x, y, anchor : nom du pays dans le repère du SVG (src/lib/world-map.ts).
 */
export const SUPPORTED_COUNTRIES = [
  { id: 'co', left: 13.33, top: 50, x: 168, y: 296 },
  { id: 'ma', left: 38.15, top: 19.57, x: 462, y: 115 },
  { id: 'sn', left: 35.19, top: 38.59, x: 407, y: 226, anchor: 'end' },
  { id: 'ci', left: 38.33, top: 46.2, x: 442, y: 297, anchor: 'end' },
  { id: 'bf', left: 40, top: 40.76, x: 486, y: 239 },
  { id: 'gh', left: 40.37, top: 46.74, x: 480, y: 310, anchor: 'middle' },
  { id: 'cm', left: 45.19, top: 48.37, x: 547, y: 288 },
  { id: 'cd', left: 49.26, top: 57.61, x: 595, y: 354 },
  { id: 'mg', left: 58.15, top: 75.54, x: 702, y: 461 },
  { id: 'in', left: 69.63, top: 32.61, x: 836, y: 194 },
  { id: 'my', left: 78.52, top: 50, x: 920, y: 294, anchor: 'end' },
  { id: 'id', left: 85.19, top: 56.52, x: 1021, y: 349 },
] as const;

export type SupportedCountry = (typeof SUPPORTED_COUNTRIES)[number]['id'];

/** Pictogramme d'un projet ; correspondance avec les icônes Lucide dans AutresProjetsPage. */
export type SupportedIcon = 'faune' | 'foret' | 'femmes' | 'filiere' | 'miel';

/**
 * Projets, dans l'ordre du PDF. countries vide : pays à confirmer par l'ONG,
 * le projet n'apparaît que dans « Tous les pays ».
 */
export const SUPPORTED_PROJECTS = [
  { id: 'tamarin', icon: 'faune', countries: ['co'] },
  { id: 'saloum', icon: 'femmes', countries: ['sn'] },
  { id: 'argan', icon: 'miel', countries: ['ma'] },
  { id: 'balanites', icon: 'filiere', countries: ['bf'] },
  { id: 'karite', icon: 'faune', countries: [] },
  { id: 'kwabre-tanoe', icon: 'faune', countries: ['ci', 'gh'] },
  { id: 'nord-sud', icon: 'femmes', countries: [] },
  { id: 'produits-foret', icon: 'foret', countries: [] },
  { id: 'cross-river', icon: 'filiere', countries: ['cm'] },
  { id: 'dja', icon: 'filiere', countries: ['cm'] },
  { id: 'oku', icon: 'miel', countries: ['cm'] },
  { id: 'bonobo', icon: 'faune', countries: ['cd'] },
  { id: 'lemur', icon: 'faune', countries: ['mg'] },
  { id: 'loris', icon: 'faune', countries: ['in'] },
  // TODO ONG : « Sungai Yu » écrit pour « Sangai Yu » dans le PDF, à confirmer.
  { id: 'tigre', icon: 'faune', countries: ['my'] },
  { id: 'rotin', icon: 'foret', countries: ['id'] },
] as const satisfies readonly { id: string; icon: SupportedIcon; countries: readonly SupportedCountry[] }[];
