import { getRelativeLocaleUrl } from 'astro:i18n';
import en from './en';
import fr from './fr';

export type Dictionary = typeof fr;

export const languages = {
  fr: { label: 'FR', name: 'Français', ogLocale: 'fr_FR' },
  en: { label: 'EN', name: 'English', ogLocale: 'en_GB' },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

const dictionaries: Record<Lang, Dictionary> = { fr, en };

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

/** Langue de la page courante, à partir de Astro.currentLocale. */
export function getLang(currentLocale: string | undefined): Lang {
  return isLang(currentLocale) ? currentLocale : defaultLang;
}

export function t(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** URL d'une page dans une langue donnée (« / » → « /en/ »). */
export function localeUrl(lang: Lang, path = ''): string {
  return getRelativeLocaleUrl(lang, path);
}

/** Retire le préfixe de langue d'un chemin : « /en/contact/ » → « contact/ ». */
export function pathWithoutLocale(pathname: string): string {
  const segments = pathname.replace(/^\/+/, '').split('/');
  if (isLang(segments[0]) && segments[0] !== defaultLang) segments.shift();
  return segments.join('/');
}
