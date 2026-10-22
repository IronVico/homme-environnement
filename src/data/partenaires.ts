/**
 * Partenaires et bailleurs de l'ONG (page /ong/partenaires), dans l'ordre de la maquette.
 * Les libellés des types sont dans src/i18n (partenaires.types).
 */
import type { ImageMetadata } from 'astro';

export const PARTNER_TYPES = ['bailleurs', 'recherche', 'entreprises', 'associations'] as const;
export type PartnerType = (typeof PARTNER_TYPES)[number];

export interface Partner {
  /** Identifiant stable (filtres, liste des partenaires de recherche de la page L'ONG). */
  id: string;
  name: string;
  type: PartnerType;
  /** Rôle en une phrase. Absent : rôle à préciser par l'ONG, la ligne n'est pas affichée. */
  role?: string;
  /** Sites concernés (clé = nom du fichier dans src/content/sites). */
  sites?: string[];
  /** Site de l'organisation, ouvert dans un nouvel onglet. */
  url?: string;
  /**
   * Logo fourni par l'ONG (src/assets/logos/partenaires/…). Absent : logo provisoire de la
   * maquette (voir SHOW_PROVISIONAL_LOGOS), sinon monogramme aux initiales.
   */
  logo?: ImageMetadata;
  /** Monogramme affiché sans logo, quand les initiales calculées ne conviennent pas. */
  monogram?: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 'rainforest-trust',
    name: 'Rainforest Trust',
    type: 'bailleurs',
    role: 'Fondation américaine qui finance la protection de forêts tropicales menacées.',
    sites: ['vohimana'],
    url: 'https://www.rainforesttrust.org/',
  },
  {
    id: 'rewild',
    name: 'Re:wild',
    type: 'bailleurs',
    role: 'Organisation internationale de conservation des espèces et des milieux sauvages.',
    url: 'https://www.rewild.org/',
    monogram: 'RW',
  },
  {
    id: 'la-guilde',
    name: 'La Guilde',
    type: 'bailleurs',
    role: 'Association qui soutient des microprojets de solidarité internationale.',
    sites: ['vohimana'],
    url: 'https://la-guilde.org/',
  },
  {
    id: 'cirad',
    name: 'CIRAD',
    type: 'recherche',
    role: 'Recherche agronomique pour le développement durable des régions tropicales.',
    url: 'https://www.cirad.fr/',
  },
  {
    id: 'cnrs',
    name: 'CNRS',
    type: 'recherche',
    role: 'Centre national de la recherche scientifique.',
    url: 'https://www.cnrs.fr/',
  },
  {
    id: 'mnhn',
    name: "Muséum national d'Histoire naturelle",
    type: 'recherche',
    role: 'Inventaires de la faune et de la flore, sciences naturelles.',
    sites: ['vohimana'],
    url: 'https://www.mnhn.fr/',
  },
  {
    id: 'universite-antananarivo',
    name: "Université d'Antananarivo",
    type: 'recherche',
    role: 'Formation et recherche à Madagascar.',
    // TODO URL (univ-antananarivo.mg ne répond pas en octobre 2026)
  },
  {
    id: 'universite-mahajanga',
    name: 'Université de Mahajanga',
    type: 'recherche',
    role: 'Formation et recherche dans le Nord-Ouest de Madagascar.',
    // TODO URL (univ-mahajanga.mg n'est plus le site de l'université)
  },
  {
    id: 'cnarp',
    name: 'CNARP',
    type: 'recherche',
    role: "Centre national d'application des recherches pharmaceutiques, Madagascar.",
    url: 'https://cnarp.mg/',
  },
  {
    id: 'pharmacie-montpellier',
    name: 'Faculté de pharmacie de Montpellier',
    type: 'recherche',
    role: 'Recherche sur les plantes médicinales.',
    url: 'https://pharmacie.edu.umontpellier.fr/',
  },
  // TODO ONG : rôle des entreprises et de Caméléon Center Conservation (« à préciser » sur la maquette).
  {
    id: 'pure-trade',
    name: 'Pure Trade',
    type: 'entreprises',
    sites: ['vohimana'],
    // TODO URL
  },
  {
    id: 'tam-tam-phyto-aroma',
    name: 'Tam Tam Phyto Aroma',
    type: 'entreprises',
    monogram: 'TT',
    sites: ['vohimana'],
    // TODO URL
  },
  {
    id: 'bourrelier-group',
    name: 'Bourrelier Group',
    type: 'entreprises',
    sites: ['vohimana'],
    url: 'https://www.bourrelier-group.com/',
  },
  {
    id: 'cameleon-center',
    name: 'Caméléon Center Conservation',
    type: 'associations',
    sites: ['vohimana'],
    // TODO URL
  },
];

/**
 * Logos provisoires de la maquette (src/assets/logos/partenaires-provisoires, nom = id du
 * partenaire) : pictogramme et nom dessinés pour la maquette, ce ne sont PAS les logos des
 * organisations. Affichés en ligne à la demande de Victor, en attendant les vrais fichiers.
 * TODO avant la mise en production : remplacer par les logos fournis par l'ONG (champ `logo`)
 * ou passer cette constante à false (monogrammes).
 */
export const SHOW_PROVISIONAL_LOGOS = true;

const provisionalLogos = import.meta.glob<string>('../assets/logos/partenaires-provisoires/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
});

/** Logo provisoire d'un partenaire (SVG en ligne, couleur du texte), ou undefined. */
export function provisionalLogo(partner: Partner): string | undefined {
  if (!SHOW_PROVISIONAL_LOGOS) return undefined;
  return provisionalLogos[`../assets/logos/partenaires-provisoires/${partner.id}.svg`];
}

// Petits mots ignorés pour les initiales, sauf en tête : « Université d'Antananarivo » → « UA », « La Guilde » → « LG ».
const MINOR_WORDS = new Set(['de', 'du', 'des', 'la', 'le', 'les', 'et', 'of', 'the']);

/**
 * Monogramme d'un partenaire sans logo : le sigle tel quel (« CIRAD », « CNRS »),
 * sinon les initiales du premier et du dernier mot significatif (« Rainforest Trust » → « RT »).
 */
export function partnerMonogram(partner: Partner): string {
  if (partner.monogram) return partner.monogram;
  const { name } = partner;
  if (/^[A-Z]{2,6}$/.test(name)) return name;
  const words = name
    .split(/\s+/)
    .map((word) => word.replace(/^[dl]['’]/i, ''))
    .filter((word, i) => word && (i === 0 || !MINOR_WORDS.has(word.toLowerCase())));
  const first = words[0] ?? name;
  const last = words.length > 1 ? words[words.length - 1]! : '';
  return (first.charAt(0) + last.charAt(0)).toLocaleUpperCase('fr');
}

/** Partenaire par identifiant ; erreur au build si l'identifiant n'existe pas. */
export function getPartner(id: string): Partner {
  const partner = PARTNERS.find((entry) => entry.id === id);
  if (!partner) throw new Error(`Partenaire « ${id} » absent de src/data/partenaires.ts.`);
  return partner;
}
