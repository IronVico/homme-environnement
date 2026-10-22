/**
 * Données de la page « L'ONG » hors chiffres (ceux-ci sont dans src/data/chiffres.ts, ONG).
 */

export interface ResearchPartner {
  name: string;
  /** Site de l'institution, ouvert dans un nouvel onglet. Absent : pastille sans lien. */
  url?: string;
}

/** Partenaires scientifiques du programme pilote d'Ambalakalanoro, dans l'ordre de la maquette. */
export const RESEARCH_PARTNERS: ResearchPartner[] = [
  { name: 'CIRAD', url: 'https://www.cirad.fr/' },
  { name: 'CNRS', url: 'https://www.cnrs.fr/' },
  { name: 'Re:wild', url: 'https://www.rewild.org/' },
  { name: 'Rainforest Trust', url: 'https://www.rainforesttrust.org/' },
  { name: "Muséum national d'Histoire naturelle", url: 'https://www.mnhn.fr/' },
  { name: "Université d'Antananarivo" }, // TODO URL (univ-antananarivo.mg ne répond pas en octobre 2026)
  { name: 'Université de Mahajanga' }, // TODO URL (univ-mahajanga.mg n'est plus le site de l'université)
  { name: 'CNARP', url: 'https://cnarp.mg/' },
  { name: 'Faculté de pharmacie de Montpellier', url: 'https://pharmacie.edu.umontpellier.fr/' },
];

/**
 * Sites de la section « Une filière par site », dans l'ordre de la maquette
 * (clé = nom du fichier dans src/content/sites). La filière de chaque site est dans
 * src/i18n (ong.sectors.filieres). Angodroabe n'y est pas : pas encore de filière.
 */
export const SECTOR_SITES = ['vohimana', 'mont-passot', 'ambohidravy', 'ambalakalanoro', 'fohisokina'] as const;
