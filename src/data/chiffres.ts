/**
 * Chiffres de Madagascar et de ses sites, réunis ici pour être changés en un seul endroit.
 *
 * Sources : présentations PDF des sites remises par l'ONG en octobre 2026 (Ambalakalanoro,
 * Ambohidravy, Fohisokina, Mont-Passot), qui font référence. Vohimana et les chiffres
 * nationaux viennent encore de l'ancien site et du rapport 2025. Un chiffre absent n'est pas affiché sur la page pays et s'affiche
 * « [à fournir] » sur la fiche du site ; `null` pour un site affiche « [Chiffres à fournir] »
 * sur la page pays. Les chiffres affichés sur une fiche sont choisis dans le
 * frontmatter du site (champ `figures`).
 */

export interface SiteFigures {
  /** Surface protégée, en hectares. */
  hectares?: number;
  /** Forêt naturelle, en hectares. */
  naturalForest?: number;
  /** Mangrove, en hectares. */
  mangrove?: number;
  /** Zone de conservation stricte, en hectares. */
  conservationArea?: number;
  /** Surface reboisée, en hectares. */
  reforested?: number;
  /** Années de présence de l'ONG sur le site. */
  years?: number;
  /** Bénéficiaires directs. */
  beneficiaries?: number;
  /** Espèces animales recensées. */
  animalSpecies?: number;
  /** Espèces de vertébrés recensées. */
  vertebrateSpecies?: number;
  /** Espèces au statut défavorable sur la liste rouge de l'UICN. */
  threatenedSpecies?: number;
  /** Espèces de lémuriens présentes sur le site. */
  lemurSpecies?: number;
  /** Espèces de grenouilles. */
  frogSpecies?: number;
  /** Individus d'une espèce phare recensés sur le site (grenouille arlequin). */
  frogsCounted?: number;
  /** Plantes médicinales recensées. */
  medicinalPlants?: number;
  /** Lacs. */
  lakes?: number;
}

export const MADAGASCAR = {
  /** Surface protégée sur l'ensemble des sites (≈) : somme des sites connus, sans Angodroabe. */
  hectares: 5250,
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
  // years et beneficiaries d'Ambalakalanoro, beneficiaries de Mont-Passot : ancien site, absents des PDF.
  ambalakalanoro: {
    hectares: 200,
    naturalForest: 50,
    reforested: 100,
    years: 12,
    beneficiaries: 850,
    animalSpecies: 110,
    lemurSpecies: 6,
  },
  'mont-passot': {
    hectares: 190,
    naturalForest: 170,
    reforested: 15,
    lakes: 8,
    years: 15,
    beneficiaries: 600,
    vertebrateSpecies: 70,
    threatenedSpecies: 14,
    lemurSpecies: 3,
  },
  fohisokina: { hectares: 230, conservationArea: 10, reforested: 17, frogsCounted: 32 },
  ambohidravy: {
    hectares: 2430,
    naturalForest: 1400,
    mangrove: 750,
    reforested: 4,
    years: 12,
    vertebrateSpecies: 128,
    threatenedSpecies: 24,
    lemurSpecies: 8,
  },
  angodroabe: null, // À FOURNIR
};
