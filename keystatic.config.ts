/**
 * PROTOTYPE (branche claude/proto-keystatic, non destinée à être fusionnée) :
 * Keystatic en mode local sur la collection « projets », champs des cartes seulement.
 */
import { collection, config, fields } from '@keystatic/core';
import { COUNTRIES, PROJECT_ICONS, PROJECT_THEMES } from './src/data/projets';

const options = (values: readonly string[]) => values.map((value) => ({ label: value, value }));

export default config({
  // Keystatic Cloud : connexion et commits gérés par keystatic.cloud, aucune route serveur.
  storage: { kind: 'cloud' },
  cloud: { project: 'homme-environnement/site' },
  ui: { brand: { name: "L'Homme & l'Environnement" } },
  collections: {
    projets: collection({
      label: 'Projets',
      slugField: 'title',
      path: 'src/content/projets/*',
      format: { contentField: 'body' },
      columns: ['title', 'order'],
      schema: {
        title: fields.slug({ name: { label: 'Titre' } }),
        theme: fields.select({ label: 'Thème', options: options(PROJECT_THEMES), defaultValue: PROJECT_THEMES[0] }),
        countries: fields.multiselect({ label: 'Pays', options: options(COUNTRIES) }),
        sites: fields.array(fields.text({ label: 'Site' }), { label: 'Sites (identifiants)', itemLabel: (p) => p.value }),
        photo: fields.image({
          label: 'Photo des cartes',
          directory: 'src/assets/photos/projets',
          publicPath: '../../assets/photos/projets/',
          validation: { isRequired: true },
        }),
        photoPosition: fields.text({ label: 'Cadrage de la photo', defaultValue: '50% 50%' }),
        summary: fields.text({ label: 'Texte court des cartes', multiline: true }),
        icon: fields.select({ label: 'Pictogramme', options: options(PROJECT_ICONS), defaultValue: PROJECT_ICONS[0] }),
        order: fields.integer({ label: "Ordre d'affichage" }),
        body: fields.markdoc({ label: 'Texte « Le projet »', extension: 'md' }),
      },
    }),
  },
});
