import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { COUNTRIES, PROJECT_DETAIL_ICONS, PROJECT_ICONS, PROJECT_THEMES } from './data/projets';

/** Statut UICN d'une espèce, ou « endemique » pour une espèce non évaluée mais endémique. */
const speciesStatus = z.enum(['CR', 'EN', 'VU', 'NT', 'LC', 'endemique']);

/** Chiffres de la fiche, dont la valeur est dans src/data/chiffres.ts (SITE_FIGURES). */
const figureKey = z.enum([
  'hectares',
  'naturalForest',
  'mangrove',
  'conservationArea',
  'reforested',
  'years',
  'beneficiaries',
  'animalSpecies',
  'vertebrateSpecies',
  'threatenedSpecies',
  'lemurSpecies',
  'frogSpecies',
  'frogsCounted',
  'medicinalPlants',
  'lakes',
  'families',
  'pupils',
]);

/**
 * Sites d'intervention : un fichier Markdown par site (src/content/sites/).
 * Le frontmatter alimente les cartes des pages pays et la fiche du site
 * (/sites/<pays>/<site>). Les champs de la fiche sont facultatifs : un champ
 * absent s'affiche « [à fournir] » sur la fiche.
 * Les chiffres (surface, années, bénéficiaires, espèces) sont à part, dans src/data/chiffres.ts.
 */
const sites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sites' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      country: z.enum(COUNTRIES),
      /** Région affichée en pastille : « Centre-Est », « Nosy Be »… */
      region: z.string(),
      photo: image(),
      /** Texte alternatif de la photo, lu sur la fiche (la carte de la page pays la traite en décor). */
      photoAlt: z.string().optional(),
      /** Crédit de la photo (conservé, pas affiché sur le site). */
      photoCredit: z.string().optional(),
      /** Cadrage de la photo dans la carte (object-position). */
      photoPosition: z.string().default('50% 40%'),
      /** Accroche des cartes de la page pays, et description de la fiche (balise meta). */
      summary: z.string(),
      /** Fin du titre de la fiche, en Light après le nom : « la forêt qui a déjoué les pronostics. » */
      tagline: z.string().optional(),
      /** Chapeau du hero de la fiche. */
      intro: z.string().optional(),
      /** Histoire du site : titre en deux temps et paragraphes. */
      story: z
        .object({
          titleStrong: z.string(),
          titleLight: z.string(),
          paragraphs: z.array(z.string()).min(1),
        })
        .optional(),
      /** Localisation administrative (communes, district, région). */
      location: z.string().optional(),
      /** Milieu naturel. */
      habitat: z.string().optional(),
      /**
       * Bande de chiffres de la fiche, dans l'ordre d'affichage : la valeur vient de
       * SITE_FIGURES (clé), le texte qui suit est propre au site.
       * `atLeast` : la valeur est un minimum (« 70+ ») ; `approx` : valeur approchée (« ≈ 12 »).
       */
      figures: z
        .array(
          z.object({
            key: figureKey,
            text: z.string(),
            atLeast: z.boolean().default(false),
            approx: z.boolean().default(false),
          }),
        )
        .optional(),
      /** Phrase sous le titre de la section espèces. */
      speciesLead: z.string().optional(),
      /** Espèces emblématiques ; le type choisit l'icône, le reste alimente les cartes de la fiche. */
      species: z.array(
        z.object({
          name: z.string(),
          type: z.enum(['animal', 'oiseau', 'poisson', 'plante']).default('animal'),
          status: speciesStatus.optional(),
          text: z.string().optional(),
          photo: image().optional(),
          photoAlt: z.string().optional(),
          photoPosition: z.string().default('50% 50%'),
          /**
           * Crédit de la photo. Photo sous licence libre : auteur, licence et liens obligatoires.
           * Photo de l'ONG (« © auteur ») : l'auteur seul, conservé mais pas affiché.
           */
          credit: z
            .union([
              z.object({
                author: z.string(),
                license: z.string(),
                licenseUrl: z.url(),
                source: z.url(),
              }),
              z.object({ author: z.string() }),
            ])
            .optional(),
        }),
      ),
      /** Phrase sous le titre de la section actions. */
      actionsLead: z.string().optional(),
      /**
       * Actions menées sur le site ; `project` relie la carte au projet, dont elle prend
       * l'icône, le titre et les sites (le texte reste celui du site).
       */
      actions: z
        .array(
          z.object({
            icon: z.enum(PROJECT_ICONS),
            title: z.string(),
            text: z.string(),
            project: reference('projets').optional(),
          }),
        )
        .optional(),
      /** Groupements locaux qui portent les activités du site. */
      groups: z
        .object({
          lead: z.string(),
          /** `icon` : pictogramme de l'activité (par défaut, un groupe de personnes). */
          items: z
            .array(
              z.object({
                name: z.string(),
                role: z.string(),
                icon: z
                  .enum(['gestion', 'education', 'soins', 'huiles', 'artisanat', 'tourisme'])
                  .default('gestion'),
              }),
            )
            .min(1),
        })
        .optional(),
      /** Partenaires du site ; `url` (facultative) fait de la pastille un lien vers leur site. */
      partners: z.array(z.object({ name: z.string(), url: z.url().optional() })).optional(),
      /** Site ouvert à la visite : affiche les boutons « Venir sur le terrain » de la fiche. */
      visitable: z.boolean().default(false),
      /** Carte d'appel en bas de fiche (sinon, texte générique « Soutenir <site> »). */
      cta: z
        .object({
          titleStrong: z.string(),
          titleLight: z.string(),
          text: z.string(),
          /** Photo de fond propre au site (sinon, la photo commune du gabarit). */
          photo: image().optional(),
          photoPosition: z.string().default('50% 45%'),
        })
        .optional(),
      /** Position du repère sur la carte du pays, en % (x : largeur, y : hauteur). */
      mapPosition: z.object({ x: z.number(), y: z.number() }),
      /** Ordre d'affichage dans la page pays ; c'est aussi le numéro du repère. */
      order: z.number(),
    }),
});

/**
 * Projets : un fichier Markdown par projet (src/content/projets/), relié aux sites
 * où il est mené. Le frontmatter alimente les cartes de la page « Nos projets »,
 * de la page pays et la fiche projet (/projets/<projet>) ; le corps (Markdown) est
 * le texte de la section « Le projet » de la fiche.
 * Les champs de la fiche sont facultatifs : un champ absent s'affiche « [à fournir] »
 * et la fiche n'est pas indexée.
 */
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      theme: z.enum(PROJECT_THEMES),
      /** Un ou deux pays ; un projet mené dans les deux pays apparaît sous chacun des filtres. */
      countries: z.array(z.enum(COUNTRIES)).min(1),
      /** Sites qui ont une fiche (collection sites). */
      sites: z.array(reference('sites')).default([]),
      /** Lieux sans fiche pour l'instant (« Kollo et Guiaro »), affichés après les sites. */
      otherSites: z.array(z.string()).default([]),
      /** Texte court des cartes. */
      summary: z.string(),
      /** Pictogramme de la carte compacte (pastille menthe). */
      icon: z.enum(PROJECT_ICONS),
      photo: image(),
      /** Cadrage de la photo dans la carte (object-position). */
      photoPosition: z.string().default('50% 50%'),
      /** Ordre d'affichage dans les listes. */
      order: z.number(),

      // Fiche projet.
      /** Nom court du hero et du fil d'Ariane (« Plantes médicinales ») ; sinon `title`. */
      shortTitle: z.string().optional(),
      /** Fin du titre de la fiche, en Light après le nom : « le savoir de la forêt de Vohimana. » */
      tagline: z.string().optional(),
      /** Chapeau du hero (sinon `summary`). */
      intro: z.string().optional(),
      /** Photo du hero, si elle diffère de celle des cartes (`photo`). */
      heroPhoto: image().optional(),
      heroPhotoPosition: z.string().optional(),
      /** Texte alternatif de la photo du hero (les cartes la traitent en décor). */
      photoAlt: z.string().optional(),
      /** Légende sous la photo du hero (lieu seulement : pas de crédit photo sur le site). */
      photoCaption: z.string().optional(),
      /**
       * Bande de chiffres, dans l'ordre d'affichage. `value` : nombre (formaté selon la langue)
       * ou texte tel quel ; `prefix` (« ≈ »), `suffix` (« + ») et `unit` (« ha ») l'entourent.
       */
      figures: z
        .array(
          z.object({
            icon: z.enum(PROJECT_DETAIL_ICONS),
            value: z.union([z.number(), z.string()]),
            prefix: z.string().optional(),
            suffix: z.string().optional(),
            unit: z.string().optional(),
            text: z.string(),
          }),
        )
        .optional(),
      /** Section « Le projet » : titre en deux temps, photo et encart ; le texte est le corps du fichier. */
      story: z
        .object({
          titleStrong: z.string(),
          titleLight: z.string(),
          photo: image().optional(),
          photoAlt: z.string().optional(),
          photoCaption: z.string().optional(),
          photoPosition: z.string().default('50% 50%'),
          /** Encart sous le texte : début en gras (« Depuis 2011, »), puis la suite. */
          note: z.object({ title: z.string(), text: z.string() }).optional(),
        })
        .optional(),
      /** Étapes de « Comment ça marche », dans l'ordre (numérotées 01, 02…). */
      steps: z
        .array(z.object({ icon: z.enum(PROJECT_DETAIL_ICONS), title: z.string(), text: z.string() }))
        .optional(),
      /** Phrase sous le titre « Où se déroule le projet » (sinon, le nombre de sites). */
      whereLead: z.string().optional(),
      /**
       * Partenaires du projet : identifiant d'un partenaire de src/data/partenaires.ts (nom et
       * lien en viennent), ou partenaire absent de cette liste ({ name, url }).
       */
      partners: z
        .array(z.union([z.string(), z.object({ name: z.string(), url: z.url().optional() })]))
        .optional(),
      /** Bandeau de don final (sinon, texte générique du gabarit). */
      cta: z
        .object({
          titleStrong: z.string(),
          titleLight: z.string(),
          text: z.string(),
          photo: image().optional(),
          photoPosition: z.string().default('50% 45%'),
        })
        .optional(),
    }),
});

export const collections = { sites, projets };
