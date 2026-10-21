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
  madagascar: 'actions/madagascar',
} as const;

/** URL d'une page dans une langue : « actions/madagascar » → « /en/actions/madagascar ». */
export function pagePath(lang: Lang, page: keyof typeof PAGES): string {
  return localeUrl(lang, PAGES[page]);
}

/**
 * Destinations des menus. « # » : page pas encore créée. Les autres valeurs sont
 * des chemins sans préfixe de langue, résolus pour la langue de la page.
 * Les libellés sont dans src/i18n ; ici, seulement les destinations, dans le même ordre.
 */
export const DON_URL = '#'; // TODO HelloAsso

export const SOCIAL_URLS = {
  linkedin: '#', // TODO URL de la page LinkedIn de l'ONG
  facebook: '#', // TODO URL de la page Facebook de l'ONG
};

const MAIN_HREFS = ['#', '#', '#', '#', '#', '#'];
const FOOTER_HREFS = [
  ['#', '#', '#'],
  [PAGES.madagascar, '#'],
  ['#', '#', '#', '#', '#'],
  ['#', '#', '#'],
  ['#', '#', '#'],
];
const LEGAL_HREFS = ['#', '#'];

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

const resolve = (lang: Lang, href: string | undefined) => (!href || href.startsWith('#') ? '#' : localeUrl(lang, href));

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
