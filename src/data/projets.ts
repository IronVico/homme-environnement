/** Thèmes des projets ; libellés dans src/i18n (projets.themes), dans cet ordre pour les filtres. */
export const PROJECT_THEMES = ['conservation', 'reboisement', 'sante', 'filieres', 'education'] as const;

/** Pays d'intervention ; libellés dans src/i18n (projets.countries). */
export const COUNTRIES = ['madagascar', 'burkina-faso'] as const;

/**
 * Pictogrammes des projets (Lucide), choisis par projet dans src/content/projets
 * et par action dans les fiches site. Correspondance dans ProjectCard.
 */
export const PROJECT_ICONS = [
  'shield',
  'flask',
  'tent',
  'sprout',
  'trees',
  'graduation-cap',
  'flower',
  'droplets',
  'droplet',
] as const;
