import type { ImageMetadata } from 'astro';

/**
 * Documents de la page « Rapports et études » (src/components/RapportsPage.astro).
 * Données éditables (futur backoffice) : un document par entrée, dans l'ordre d'affichage.
 * Les textes affichés autour (types, libellés) sont dans src/i18n (clé `rapports`).
 *
 * Tant que l'ONG n'a pas fourni un fichier, `file` reste vide : le bouton Télécharger est
 * remplacé par « [PDF à fournir] ». Un champ absent (poids, pages, date…) s'affiche « [à fournir] ».
 */

/** Types de document, dans l'ordre des pastilles de filtre. */
export const REPORT_TYPES = ['annuel', 'financier', 'etude', 'site'] as const;
export type ReportType = (typeof REPORT_TYPES)[number];

export interface Report {
  /** Identifiant stable (ancre, futur backoffice). */
  id: string;
  title: string;
  type: ReportType;
  /** Année couverte par le document. */
  year?: string;
  /** Chemin du PDF dans public/ (« /documents/rapport-annuel-2025.pdf »). */
  file?: string;
  /** Poids du fichier, tel qu'affiché : « 4,2 Mo ». */
  size?: string;
  /** Nombre de pages. */
  pages?: number;
  /** Date de publication, telle qu'affichée : « juin 2026 ». */
  published?: string;
  /** Résumé (document à la une). */
  summary?: string;
  /** Couverture (document à la une) ; sans elle, couverture provisoire dessinée par le site. */
  cover?: ImageMetadata;
  /** Document dont l'existence reste à confirmer par l'ONG : « [à fournir] » après le titre. */
  pending?: boolean;
}

/**
 * PDF de démonstration (4 pages, marqué « provisoire » sur chaque page) : il sert seulement
 * à tester la liseuse en attendant le vrai rapport.
 * TODO ONG : remplacer par le Rapport annuel 2025 et supprimer public/documents/demo-liseuse-provisoire.pdf.
 */
const DEMO_PDF = '/documents/demo-liseuse-provisoire.pdf';

export const REPORTS: Report[] = [
  {
    id: 'rapport-annuel-2025',
    title: 'Rapport annuel 2025',
    type: 'annuel',
    year: '2025',
    file: DEMO_PDF,
    // TODO ONG : poids, nombre de pages, date de publication et résumé du rapport.
    summary:
      'Le bilan de notre année 2025, site par site : les actions menées avec les communautés locales et nos partenaires, et les résultats obtenus. [Résumé à fournir]',
  },
  // TODO ONG : PDF des documents ci-dessous, avec leur poids.
  { id: 'rapport-financier-2025', title: 'Rapport financier 2025', type: 'financier', year: '2025', pending: true },
  { id: 'rapport-annuel-2024', title: 'Rapport annuel 2024', type: 'annuel', year: '2024', pending: true },
  { id: 'site-ambalakalanoro', title: "Présentation du site d'Ambalakalanoro", type: 'site', year: '2025' },
  { id: 'site-ambohidravy', title: "Présentation du site d'Ambohidravy", type: 'site', year: '2025' },
  { id: 'site-fohisokina', title: 'Présentation du site de Fohisokina', type: 'site', year: '2025' },
  { id: 'site-mont-passot', title: 'Présentation du site du Mont-Passot', type: 'site', year: '2025' },
  { id: 'inventaire-vohimana', title: 'Inventaire de la biodiversité de Vohimana', type: 'etude', pending: true },
  { id: 'etude-ethnobotanique', title: 'Étude ethnobotanique', type: 'etude', pending: true },
];

/** Document mis à la une en haut de la page (carte « À la une », liseuse). */
export const FEATURED_REPORT_ID = 'rapport-annuel-2025';
