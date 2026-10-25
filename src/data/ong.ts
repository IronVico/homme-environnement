/**
 * Données de la page « L'ONG » hors chiffres (ceux-ci sont dans src/data/chiffres.ts, ONG).
 */

import { getPartner, type Partner } from './partenaires';

/**
 * Partenaires scientifiques du programme pilote d'Ambalakalanoro, dans l'ordre de la maquette.
 * Noms et sites web dans src/data/partenaires.ts.
 */
export const RESEARCH_PARTNERS: Partner[] = [
  'cirad',
  'cnrs',
  'rewild',
  'rainforest-trust',
  'mnhn',
  'universite-antananarivo',
  'universite-mahajanga',
  'cnarp',
  'pharmacie-montpellier',
].map(getPartner);

/**
 * Sites de la section « Une filière par site », dans l'ordre de la maquette
 * (clé = nom du fichier dans src/content/sites). La filière de chaque site est dans
 * src/i18n (ong.sectors.filieres). Angodroabe n'y est pas : pas encore de filière.
 */
export const SECTOR_SITES = ['vohimana', 'mont-passot', 'ambohidravy', 'ambalakalanoro', 'fohisokina'] as const;
