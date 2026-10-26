import { getCollection } from 'astro:content';
import { SITE_FIGURES } from '../data/chiffres';
import { sitePath } from '../data/navigation';
import type { COUNTRIES } from '../data/projets';
import { t, type Lang } from '../i18n';

const NBSP = ' ';

/**
 * Sites d'un pays mis en forme pour SitesExplorer (carte et cartes des sites),
 * dans l'ordre de la collection. `exclude` : sites à ne pas montrer (identifiants).
 */
export async function getExplorerSites(
  lang: Lang,
  exclude: string[] = [],
  country: (typeof COUNTRIES)[number] = 'madagascar',
) {
  const dict = t(lang);
  const labels = dict.madagascar.sites;
  const numberLocale = lang === 'en' ? 'en-GB' : 'fr-FR';
  const formatNumber = (value: number) => value.toLocaleString(numberLocale).replace(/\s/g, NBSP);

  // Surface protégée de chaque site, formatée dans la langue de la page (les autres chiffres sont sur les fiches).
  const siteHectares = (id: string) => {
    const hectares = SITE_FIGURES[id]?.hectares;
    return hectares === undefined ? undefined : `${formatNumber(hectares)}${NBSP}${labels.hectares}`;
  };

  const sites = await getCollection(
    'sites',
    ({ id, data }) => data.country === country && !exclude.includes(id),
  );

  return sites
    .sort((a, b) => a.data.order - b.data.order)
    .map((site) => ({
      id: site.id,
      num: site.data.order,
      name: site.data.name,
      region: site.data.region,
      summary: site.data.summary,
      image: site.data.photo,
      imagePosition: site.data.photoPosition,
      mapPosition: site.data.mapPosition,
      figure: siteHectares(site.id),
      figureMissing: labels.figuresMissing,
      href: sitePath(lang, site.id, country),
      linkLabel: labels.link,
    }));
}
