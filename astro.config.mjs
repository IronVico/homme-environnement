// @ts-check
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://www.homme-environnement.org';

// URL des pages marquées noindex (BaseLayout pose <meta name="robots" content="noindex">,
// selon le contenu de chaque page). Relevées dans le HTML construit, juste avant le sitemap.
const noindexUrls = new Set();

/** @returns {import('astro').AstroIntegration} */
function collectNoindex() {
  return {
    name: 'lhe-noindex',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        const files = await readdir(root, { recursive: true });
        for (const file of files) {
          if (!file.endsWith('.html')) continue;
          const html = await readFile(root + file, 'utf8');
          if (!/<meta name="robots" content="[^"]*noindex/.test(html)) continue;
          const path = file.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '/');
          noindexUrls.add(new URL(path, SITE).href);
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  // Domaine de production : sert aux URL absolues (canonical, Open Graph, hreflang).
  site: SITE,
  output: 'static',
  devToolbar: { enabled: false },
  // Français par défaut à la racine, anglais sous /en/.
  // Anciennes URL de la page Madagascar. Chez OVH, public/.htaccess répond avant (vraie 301) ;
  // ces pages de redirection servent en local (npm run dev, npm run preview).
  redirects: {
    '/actions/madagascar': '/sites/madagascar',
    '/en/actions/madagascar': '/en/sites/madagascar',
  },
  integrations: [
    // Avant le sitemap : les hooks astro:build:done s'exécutent dans cet ordre.
    collectNoindex(),
    sitemap({
      // Pages noindex hors sitemap (pages incomplètes, redirections des anciennes URL, 404).
      filter: (page) => !noindexUrls.has(page),
      // Alternates hreflang entre la page FR (racine) et sa version EN (/en/).
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr', en: 'en' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
