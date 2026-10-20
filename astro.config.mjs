// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Domaine de production : sert aux URL absolues (canonical, Open Graph, hreflang).
  site: 'https://www.homme-environnement.org',
  output: 'static',
  devToolbar: { enabled: false },
  // Français par défaut à la racine, anglais sous /en/.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
