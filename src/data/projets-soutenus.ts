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
 * px, py : repère du pays (Côte d'Ivoire, Burkina Faso et Ghana écartés pour garder 24px entre deux cibles à 1440px) ; x, y, anchor : nom du pays. Dans le repère du SVG (src/lib/world-map.ts).
 */
export const SUPPORTED_COUNTRIES = [
  { id: 'co', px: 158, py: 300, x: 178, y: 296 },
  { id: 'ma', px: 452, py: 117, x: 472, y: 115 },
  { id: 'sn', px: 417, py: 232, x: 397, y: 226, anchor: 'end' },
  { id: 'ci', px: 444, py: 277, x: 428, y: 297, anchor: 'end' },
  { id: 'bf', px: 474, py: 238, x: 494, y: 239 },
  { id: 'gh', px: 484, py: 282, x: 484, y: 312, anchor: 'middle' },
  { id: 'cm', px: 535, py: 290, x: 557, y: 288 },
  { id: 'cd', px: 583, py: 346, x: 605, y: 354 },
  { id: 'mg', px: 688, py: 453, x: 712, y: 461 },
  { id: 'in', px: 824, py: 196, x: 846, y: 194 },
  { id: 'my', px: 930, py: 300, x: 910, y: 294, anchor: 'end' },
  { id: 'id', px: 1009, py: 339, x: 1031, y: 349 },
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
