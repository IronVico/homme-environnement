/**
 * Chiffres de Madagascar et de ses sites, réunis ici pour être changés en un seul endroit.
 *
 * NON DÉFINITIFS : Paul doit trancher entre le rapport 2025 et les chiffres des sites
 * existants. Un chiffre absent n'est pas affiché sur la page pays et s'affiche
 * « [à fournir] » sur la fiche du site ; `null` pour un site affiche « [Chiffres à fournir] »
 * sur la page pays. Les chiffres affichés sur une fiche sont choisis dans le
 * frontmatter du site (champ `figures`).
 */

export interface SiteFigures {
  /** Surface protégée, en hectares. */
  hectares?: number;
  /** Années de présence de l'ONG sur le site. */
  years?: number;
  /** Bénéficiaires directs. */
  beneficiaries?: number;
  /** Espèces de lémuriens présentes sur le site. */
  lemurSpecies?: number;
  /** Espèces de grenouilles. */
  frogSpecies?: number;
  /** Plantes médicinales recensées. */
  medicinalPlants?: number;
}

export const MADAGASCAR = {
  /** Surface protégée sur l'ensemble des sites (≈). */
  hectares: 5000,
  /** Bénéficiaires directs (≈)… */
  beneficiaries: 3400,
  /** …sur environ ce nombre d'habitants (sert aussi à l'anneau de la carte). */
  inhabitants: 5700,
  /** Espèces animales menacées présentes sur les sites. */
  threatenedSpecies: 84,
};

/** Par site, clé = nom du fichier dans src/content/sites. */
export const SITE_FIGURES: Record<string, SiteFigures | null> = {
  vohimana: { hectares: 2200, years: 30, beneficiaries: 1400, lemurSpecies: 12, frogSpecies: 70, medicinalPlants: 160 },
  ambalakalanoro: { hectares: 1600, years: 12, beneficiaries: 850 },
  'mont-passot': { hectares: 900, years: 10, beneficiaries: 600 },
  fohisokina: { hectares: 70 },
  ambohidravy: { hectares: 2292 },
  angodroabe: null, // À FOURNIR
};
