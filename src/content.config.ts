import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Sites d'intervention : un fichier Markdown par site (src/content/sites/).
 * Le frontmatter alimente les cartes des pages pays ; le corps du fichier
 * accueillera le contenu des futures fiches site.
 */
const sites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sites' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      country: z.enum(['madagascar', 'burkina-faso']),
      /** Libellé affiché dans la pastille : voir madagascar.sites.status dans src/i18n. */
      status: z.enum(['historique', 'transmis', 'en-cours']),
      photo: image(),
      /** Cadrage de la photo dans la carte (object-position). */
      photoPosition: z.string().default('50% 50%'),
      summary: z.string(),
      /** Ordre d'affichage dans la page pays. */
      order: z.number(),
      /** Site mis en avant : grande carte photo sur deux colonnes. */
      featured: z.boolean().default(false),
    }),
});

export const collections = { sites };
