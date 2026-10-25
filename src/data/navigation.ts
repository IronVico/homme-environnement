import { localeUrl, t, type Lang } from '../i18n';

export interface NavLink {
  label: string;
  href: string;
}

/** Rubriques du menu principal, dans l'ordre de nav.main (src/i18n). */
export const MAIN_SECTIONS = ['ong', 'sites', 'projets', 'engager', 'ressources', 'contact'] as const;
export type MainSection = (typeof MAIN_SECTIONS)[number];

export interface MainNavLink extends NavLink {
  section: MainSection;
  /** Sous-pages affichées dans le sous-menu déroulant (vide : lien direct). */
  children: NavLink[];
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

/** Chemins des pages existantes, sans préfixe de langue (voir pagePath). */
export const PAGES = {
  ong: 'ong',
  madagascar: 'sites/madagascar',
  projets: 'projets',
  stages: 's-engager/stages-volontariat',
  equipe: 'ong/equipe',
  partenaires: 'ong/partenaires',
  don: 's-engager/faire-un-don',
  mentionsLegales: 'mentions-legales',
  confidentialite: 'confidentialite',
} as const;

/** Adresse de candidature aux stages et au volontariat (bouton mailto, jamais affichée en texte sur la page). */
export const STAGES_EMAIL = 'contact.vsc@homme-environnement.org';

/**
 * Adresse des demandes de partenariat (bouton « Nous écrire » de la page Partenaires, mailto).
 * TODO ONG : confirmer l'adresse (celle de la maquette).
 */
export const PARTNERS_EMAIL = 'contact@homme-environnement.org';

/**
 * Section « S'engager » de l'accueil : destination des liens S'engager tant que la page
 * S'engager (et ses pages Particuliers, Entreprises) n'existe pas.
 */
const HOME_ENGAGE = '/#s-engager';

/** URL de la section S'engager de l'accueil dans une langue (« /#s-engager », « /en/#s-engager »). */
export function engagePath(lang: Lang): string {
  return resolve(lang, HOME_ENGAGE);
}

/** URL d'une page dans une langue : « sites/madagascar » → « /en/sites/madagascar ». */
export function pagePath(lang: Lang, page: keyof typeof PAGES): string {
  return localeUrl(lang, PAGES[page]);
}

/** URL de la fiche d'un site de Madagascar : « vohimana » → « /sites/madagascar/vohimana ». */
export function sitePath(lang: Lang, site: string): string {
  return localeUrl(lang, `${PAGES.madagascar}/${site}`);
}

/**
 * Lien vers un projet : sa carte dans la page « Nos projets ».
 * TODO fiche projet : renvoyer vers localeUrl(lang, `projets/${project}`).
 */
export function projectPath(lang: Lang, project: string): string {
  return `${pagePath(lang, 'projets')}#projet-${project}`;
}

/** Page « Nos projets » filtrée sur un thème (paramètre lu par le filtre de la page). */
const projectsByTheme = (theme: string) => `${PAGES.projets}?theme=${theme}`;

/**
 * Destinations des menus. « # » : page pas encore créée. Les autres valeurs sont
 * des chemins sans préfixe de langue, résolus pour la langue de la page.
 * Les libellés sont dans src/i18n ; ici, seulement les destinations, dans le même ordre.
 */
/** Boutons « Faire un don » (pêche) : la page Faire un don, qui envoie ensuite vers HelloAsso. */
export function donatePath(lang: Lang): string {
  return pagePath(lang, 'don');
}

/**
 * « Venir sur le terrain » : la page Stages et volontariat, à la section des sites.
 * TODO offre de séjour (écotourisme) : renvoyer vers la section du site (`site` est déjà passé).
 */
export function fieldPath(lang: Lang, _site?: string): string {
  return `${pagePath(lang, 'stages')}#sites`;
}

export const SOCIAL_URLS = {
  linkedin: '#', // TODO URL de la page LinkedIn de l'ONG
  facebook: '#', // TODO URL de la page Facebook de l'ONG
};

/** Sections de la page L'ONG (ancres) : footer, sous-menu du header et accueil. */
export const ONG_ANCHORS = { approach: 'approche', history: 'histoire' } as const;

/** URL d'une section de la page L'ONG : « /ong/#histoire ». */
export function ongPath(lang: Lang, section: keyof typeof ONG_ANCHORS): string {
  return `${pagePath(lang, 'ong')}#${ONG_ANCHORS[section]}`;
}

const MAIN_HREFS = [PAGES.ong, '#', PAGES.projets, HOME_ENGAGE, '#', '#'];
const FOOTER_HREFS = [
  [`${PAGES.ong}#${ONG_ANCHORS.approach}`, `${PAGES.ong}#${ONG_ANCHORS.history}`, PAGES.equipe, PAGES.partenaires],
  [PAGES.madagascar, '#'],
  // « Plantes aromatiques » : thème Filières durables (ylang-ylang), en attendant d'aligner le libellé.
  [
    projectsByTheme('conservation'),
    projectsByTheme('reboisement'),
    projectsByTheme('sante'),
    projectsByTheme('filieres'),
    PAGES.projets,
  ],
  // TODO pages Particuliers et Entreprises.
  [HOME_ENGAGE, PAGES.stages, HOME_ENGAGE],
  ['#', '#', '#'],
];
const LEGAL_HREFS = [PAGES.mentionsLegales, PAGES.confidentialite];

/**
 * Sous-menus du header : les sous-pages de chaque rubrique sont celles de la
 * colonne correspondante du footer (column), éventuellement tronquée (count) :
 * « Contact » est déjà une entrée du menu, on ne la répète pas sous Ressources.
 */
const SUBMENUS: Partial<Record<MainSection, { column: number; count?: number }>> = {
  ong: { column: 0 },
  sites: { column: 1 },
  projets: { column: 2 },
  engager: { column: 3 },
  ressources: { column: 4, count: 2 },
};

// « # » seul : page pas encore créée. Sinon chemin sans préfixe de langue, avec query et ancre éventuelles.
function resolve(lang: Lang, href: string | undefined): string {
  if (!href || href.startsWith('#')) return '#';
  const [target = '', hash] = href.split('#');
  const [path = '', query] = target.split('?');
  const url = localeUrl(lang, path.replace(/^\//, ''));
  return `${url}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`;
}

const zip = (lang: Lang, labels: string[], hrefs: string[]): NavLink[] =>
  labels.map((label, i) => ({ label, href: resolve(lang, hrefs[i]) }));

export function getMainNav(lang: Lang): MainNavLink[] {
  const footer = getFooterNav(lang);
  return zip(lang, t(lang).nav.main, MAIN_HREFS).map((link, i) => {
    const section = MAIN_SECTIONS[i]!;
    const submenu = SUBMENUS[section];
    const children = submenu ? (footer[submenu.column]?.links ?? []).slice(0, submenu.count) : [];
    return { ...link, section, children };
  });
}

export function getFooterNav(lang: Lang): NavColumn[] {
  return t(lang).nav.footer.map((column, i) => ({
    title: column.title,
    links: zip(lang, column.links, FOOTER_HREFS[i] ?? []),
  }));
}

export function getLegalNav(lang: Lang): NavLink[] {
  return zip(lang, t(lang).nav.legal, LEGAL_HREFS);
}
