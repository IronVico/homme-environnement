/** Données d'exemple du lab (src/components/lab/), prises dans les collections : jamais inventées. */
import { getCollection } from 'astro:content';

/** Projets dans l'ordre de la collection, avec les noms de leurs sites. */
export async function labProjects() {
  const sites = await getCollection('sites');
  const siteNames = new Map(sites.map((site) => [site.id, site.data.name]));
  const projets = (await getCollection('projets')).sort((a, b) => a.data.order - b.data.order);
  return projets.map((projet) => ({
    ...projet,
    siteList: [...projet.data.sites.map((ref) => siteNames.get(ref.id) ?? ref.id), ...projet.data.otherSites],
  }));
}
