import { t, type Lang } from '../i18n';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

/**
 * Liens provisoires : les pages internes n'existent pas encore (tout pointe vers « # »).
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
  ['#', '#', '#', '#'],
  ['#', '#', '#'],
  ['#', '#', '#'],
];
const LEGAL_HREFS = ['#', '#'];

const zip = (labels: string[], hrefs: string[]): NavLink[] =>
  labels.map((label, i) => ({ label, href: hrefs[i] ?? '#' }));

export function getMainNav(lang: Lang): NavLink[] {
  return zip(t(lang).nav.main, MAIN_HREFS);
}

export function getFooterNav(lang: Lang): NavColumn[] {
  return t(lang).nav.footer.map((column, i) => ({
    title: column.title,
    links: zip(column.links, FOOTER_HREFS[i] ?? []),
  }));
}

export function getLegalNav(lang: Lang): NavLink[] {
  return zip(t(lang).nav.legal, LEGAL_HREFS);
}
