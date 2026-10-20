import { localeUrl, t, type Lang } from '../i18n';

export interface NavLink {
  label: string;
  href: string;
}

/** Rubriques du menu principal, dans l'ordre de nav.main (src/i18n). */
export const MAIN_SECTIONS = ['ong', 'actions', 'engager', 'ressources', 'contact'] as const;
export type MainSection = (typeof MAIN_SECTIONS)[number];

export interface MainNavLink extends NavLink {
  section: MainSection;
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

const MAIN_HREFS = ['#', '#', '#', '#', '#'];
const FOOTER_HREFS = [
  ['#', '#', '#'],
  [PAGES.madagascar, '#', '#', '#'],
  ['#', '#', '#'],
  ['#', '#', '#'],
];
const LEGAL_HREFS = ['#', '#'];

const resolve = (lang: Lang, href: string | undefined) => (!href || href.startsWith('#') ? '#' : localeUrl(lang, href));

const zip = (lang: Lang, labels: string[], hrefs: string[]): NavLink[] =>
  labels.map((label, i) => ({ label, href: resolve(lang, hrefs[i]) }));

export function getMainNav(lang: Lang): MainNavLink[] {
  return zip(lang, t(lang).nav.main, MAIN_HREFS).map((link, i) => ({ ...link, section: MAIN_SECTIONS[i]! }));
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
