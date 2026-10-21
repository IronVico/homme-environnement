import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Sites d'intervention : un fichier Markdown par site (src/content/sites/).
 * Le frontmatter alimente les cartes des pages pays ; le corps du fichier
 * accueillera le contenu des futures fiches site.
 * Les chiffres (surface, années, bénéficiaires) sont à part, dans src/data/chiffres.ts.
 */
const sites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sites' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      country: z.enum(['madagascar', 'burkina-faso']),
      /** Région affichée en pastille : « Centre-Est », « Nosy Be »… */
      region: z.string(),
      photo: image(),
      /** Cadrage de la photo dans la carte (object-position). */
      photoPosition: z.string().default('50% 40%'),
      summary: z.string(),
      /** Espèces emblématiques ; le type choisit l'icône de la pastille. */
      species: z.array(
        z.object({
          name: z.string(),
          type: z.enum(['animal', 'oiseau', 'poisson', 'plante']).default('animal'),
        }),
      ),
      /** Position du repère sur la carte du pays, en % (x : largeur, y : hauteur). */
      mapPosition: z.object({ x: z.number(), y: z.number() }),
      /** Ordre d'affichage dans la page pays ; c'est aussi le numéro du repère. */
      order: z.number(),
    }),
});

/** Projets : une entrée par projet, reliée aux sites où il est mené (src/content/projets.json). */
const projets = defineCollection({
  loader: file('./src/content/projets.json'),
  schema: z.object({
    title: z.string(),
    country: z.enum(['madagascar', 'burkina-faso']),
    sites: z.array(reference('sites')),
    order: z.number(),
  }),
});

export const collections = { sites, projets };
