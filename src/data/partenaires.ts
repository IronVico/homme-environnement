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
  /**
   * Version monochrome du logo (src/assets/logos/partenaires-mono/<id>.png, fond transparent),
   * utilisée comme masque en mode sombre. Rattachée automatiquement par identifiant.
   */
  logoMono?: ImageMetadata;
  /** Monogramme affiché sans logo, quand les initiales calculées ne conviennent pas. */
  monogram?: string;
}

const RAW_PARTNERS: Partner[] = [
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
    url: 'https://www.univ-antananarivo.mg/',
  },
  {
    id: 'universite-mahajanga',
    name: 'Université de Mahajanga',
    type: 'recherche',
    role: 'Formation et recherche dans le Nord-Ouest de Madagascar.',
    // TODO URL (univ-mahajanga.mg n'est plus le site de l'université)
    url: 'https://www.mahajanga-univ.mg/',
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
  // TODO ONG : rôles, sites et liens des partenaires ci-dessous (ajoutés avec les logos du 26/10/2026),
// et confirmation des types marqués « type à confirmer ».
  {
    id: 'sos-lemurs',
    name: 'SOS Lemurs (UICN)',
    type: 'bailleurs',
    url: 'https://www.iucnsos.org/initiative/sos-lemurs/',
  },
  {
    id: 'franklinia',
    name: 'Fondation Franklinia',
    type: 'bailleurs',
    url: 'https://fondationfranklinia.org/',
  },
  {
    id: 'oif',
    name: 'Organisation internationale de la Francophonie',
    type: 'bailleurs',
    url: 'https://www.francophonie.org/',
  },
  {
    id: 'catholic-relief-services',
    name: 'Catholic Relief Services',
    type: 'bailleurs',
    url: 'https://www.crs.org/',
  },
  {
    id: 'ministere-environnement',
    name: "Ministère de l'Environnement et du Développement durable",
    type: 'bailleurs', // type à confirmer (institution publique malgache)
    url: 'https://www.environnement.mg/',
  },
  {
    id: 'ministere-tourisme',
    name: "Ministère du Tourisme et de l'Artisanat",
    type: 'bailleurs', // type à confirmer (institution publique malgache)
    url: 'https://www.mta.gov.mg/',
  },
  {
    id: 'office-tourisme-alaotra-mangoro',
    name: 'Office régional du tourisme Alaotra-Mangoro',
    type: 'bailleurs', // type à confirmer (institution publique malgache)
    sites: ['vohimana'],
  },
  {
    id: 'parc-zoologique-paris',
    name: 'Parc zoologique de Paris (MNHN)',
    type: 'recherche',
    url: 'https://www.parczoologiquedeparis.fr/fr',
  },
  {
    id: 'pure-trade',
    name: 'Pure Trade',
    type: 'entreprises',
    sites: ['vohimana'],
  },
  {
    id: 'tam-tam-phyto-aroma',
    name: 'Tam Tam Phyto Aroma',
    type: 'entreprises',
    monogram: 'TT',
    sites: ['vohimana'],
  },
  {
    id: 'bourrelier-group',
    name: 'Bourrelier Group',
    type: 'entreprises',
    sites: ['vohimana'],
    url: 'https://www.bourrelier-group.com/',
  },
  { id: 'amare-global', name: 'Amare Global', type: 'entreprises' },
  { id: 'bougies-denis-fils', name: 'Bougies Denis & Fils', type: 'entreprises' },
  { id: 'efficite', name: 'EffiCité', type: 'entreprises' },
  { id: 'floribis', name: 'Floribis', type: 'entreprises' },
  { id: 'humy', name: 'Humy', type: 'entreprises' },
  { id: 'imagin', name: "Imag'in", type: 'entreprises' }, // type à confirmer
  { id: 'laboratoires-teane', name: 'Laboratoires Tēane', type: 'entreprises' },
  { id: 'mahay-expedition', name: 'Mahay Expédition', type: 'entreprises' },
  { id: 'marmalade-fish', name: 'Marmalade Fish', type: 'entreprises' },
  { id: 'perfumista', name: 'Perfumista', type: 'entreprises' },
  { id: 'univet-nature', name: 'Univet Nature', type: 'entreprises' },
  { id: 'films-de-pierre', name: 'Les Films de Pierre', type: 'entreprises' },
  { id: 'behave', name: 'Behave', type: 'entreprises' }, // type à confirmer
  { id: 'ravenala', name: 'Ravenala', type: 'entreprises' }, // type à confirmer
  { id: 'misa', name: 'MISA', type: 'entreprises' }, // type à confirmer
  {
    id: 'cameleon-center',
    name: 'Caméléon Center Conservation',
    type: 'associations',
    sites: ['vohimana'],
  },
  {
    id: 'sages-femmes-sans-frontieres',
    name: 'Sages-femmes sans frontières',
    type: 'associations',
    url: 'https://www.sfsf.fr/',
  },
  { id: 'amis-de-coralie', name: 'Les Amis de Coralie', type: 'associations' },
  { id: 'madagascar-voakajy', name: 'Madagascar Voakajy', type: 'associations' },
  {
    id: 'maison-familiale-rurale',
    name: 'Maison familiale rurale de Vohimana',
    type: 'associations',
    sites: ['vohimana'],
  },
  { id: 'rugby-french-flair', name: 'Rugby French Flair', type: 'associations' }, // type à confirmer
];

/** Logos fournis par l'ONG (src/assets/logos/partenaires/<id>.png|jpg), rattachés par identifiant. */
const partnerLogos = import.meta.glob<ImageMetadata>('../assets/logos/partenaires/*.{png,jpg}', {
  import: 'default',
  eager: true,
});

function logoFor(id: string): ImageMetadata | undefined {
  return partnerLogos[`../assets/logos/partenaires/${id}.png`] ?? partnerLogos[`../assets/logos/partenaires/${id}.jpg`];
}

const partnerMonoLogos = import.meta.glob<ImageMetadata>('../assets/logos/partenaires-mono/*.png', {
  import: 'default',
  eager: true,
});

export const PARTNERS: Partner[] = RAW_PARTNERS.map((partner) => ({
  ...partner,
  logo: partner.logo ?? logoFor(partner.id),
  logoMono: partnerMonoLogos[`../assets/logos/partenaires-mono/${partner.id}.png`],
}));

/**
 * Logos provisoires de la maquette (src/assets/logos/partenaires-provisoires) : ce ne sont PAS
 * les logos des organisations. Désactivés depuis la livraison des vrais logos par l'ONG (26/10/2026) :
 * un partenaire sans logo fourni affiche son monogramme.
 */
export const SHOW_PROVISIONAL_LOGOS = false;

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
