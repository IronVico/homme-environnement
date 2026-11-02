import type { APIRoute, GetStaticPaths } from 'astro';
import { ogPages, renderOgImage, type OgPage } from '../../lib/og';

/** Images de partage (Open Graph), une par page et par langue : /og/index.png, /og/en/projets.png… */
export const getStaticPaths = (async () => {
  const pages = await ogPages();
  return pages.map((page) => ({ params: { page: page.key }, props: { page } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage((props as { page: OgPage }).page);
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
