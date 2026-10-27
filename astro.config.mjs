// @ts-check
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  // Domaine de production : sert aux URL absolues (canonical, Open Graph, hreflang).
  site: 'https://www.homme-environnement.org',
  output: 'static',
  // PROTOTYPE : l'admin /keystatic a besoin de routes serveur (fonctions Vercel).
  adapter: vercel(),
  integrations: [react(), markdoc(), keystatic()],
  devToolbar: { enabled: false },
  // Français par défaut à la racine, anglais sous /en/.
  // Anciennes URL de la page Madagascar. Sur Vercel, vercel.json répond avant (vraie 301) ;
  // ces pages de redirection servent en local et sur un autre hébergeur.
  redirects: {
    '/actions/madagascar': '/sites/madagascar',
    '/en/actions/madagascar': '/en/sites/madagascar',
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
