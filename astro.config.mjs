// @ts-check
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Domaine de production : sert aux URL absolues (canonical, Open Graph, hreflang).
  site: 'https://www.homme-environnement.org',
  output: 'static',
  // PROTOTYPE : en mode Keystatic Cloud, l'admin est une page statique (pas d'adaptateur ni de route serveur).
  integrations: [react(), markdoc()],
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
