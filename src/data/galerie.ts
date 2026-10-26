import type { ImageMetadata } from 'astro';

import ylangPaniers from '../assets/photos/equipe-ylang-mont-passot.jpg';
import collectrices from '../assets/photos/equipe-collectrices-vohimana.jpg';
import kollo from '../assets/photos/engager-donner.jpg';
import guide from '../assets/photos/engager-terrain.jpg';
import calumma from '../assets/photos/especes/calumma-gallus.jpg';
import artisane from '../assets/photos/hero-artisane-vohimana.jpg';
import cirque from '../assets/photos/don/campagne-ambalakalanoro.jpg';
import ylangCueillette from '../assets/photos/don/impact-ylang-ylang.jpg';
import cascade from '../assets/photos/ong/cascade-vohimana.jpg';
import saro from '../assets/photos/ong/saro-ambalakalanoro.jpg';
import elephants from '../assets/photos/pays-burkina-elephants.jpg';
import mangroves from '../assets/photos/pays-madagascar.jpg';
import fete from '../assets/photos/pilier-economie-fete-ambohidravy.jpg';
import classe from '../assets/photos/pilier-responsabilisation-classe.jpg';
import lac from '../assets/photos/stages-lac-mont-passot.jpg';

/**
 * Lieux de la galerie, dans l'ordre des pastilles de filtre. Un site de Madagascar prend
 * son nom dans src/content/sites (même identifiant) ; un pays (« burkina-faso ») prend son
 * nom dans la clé `galerie.places` de src/i18n.
 * TODO page Burkina (PR #21) : passer les photos du Burkina sur le site « kollo-guiaro ».
 */
export const GALLERY_PLACES = ['vohimana', 'mont-passot', 'ambalakalanoro', 'ambohidravy', 'burkina-faso'] as const;
export type GalleryPlace = (typeof GALLERY_PLACES)[number];

/**
 * Crédit d'une photo. Photo de l'ONG : « © auteur » ; photo sous licence libre : auteur,
 * licence et liens obligatoires (même forme que les crédits des espèces des fiches site).
 * Absent : « [crédit photo à fournir] » s'affiche.
 */
export type GalleryCredit =
  | { author: string }
  | { author: string; license: string; licenseUrl: string; source: string };

export interface GalleryPhoto {
  id: string;
  image: ImageMetadata;
  place: GalleryPlace;
  /** Titre affiché sous la photo et dans la visionneuse. */
  title: string;
  /** Texte alternatif : ce que montre la photo. */
  alt: string;
  credit?: GalleryCredit;
  /** Format de la vignette dans la grille (rognée), sinon le format de la photo. */
  ratio?: '1 / 1' | '4 / 5' | '3 / 4' | '4 / 3' | '3 / 2';
  /** Cadrage de la vignette (object-position). */
  position?: string;
}

/**
 * Photos de la galerie, dans l'ordre d'affichage (maquette Galerie). Données éditables
 * (futur backoffice) : ajouter une photo = la déposer dans src/assets/photos et l'ajouter ici.
 * Crédits « © Olivier Behra » repris de la maquette : à confirmer par l'ONG.
 */
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'cascade-vohimana',
    image: cascade,
    place: 'vohimana',
    title: 'La cascade de Vohimana',
    alt: 'Cascade dans la forêt de Vohimana',
    credit: { author: 'Olivier Behra' },
    ratio: '4 / 5',
  },
  {
    id: 'collectrices-vohimana',
    image: collectrices,
    place: 'vohimana',
    title: 'Collectrices de plantes, Vohimana',
    alt: 'Des collectrices portent sur la tête de grandes brassées de feuilles, Vohimana',
    credit: { author: 'Olivier Behra' },
    ratio: '4 / 3',
  },
  {
    id: 'visite-guidee-vohimana',
    image: guide,
    place: 'vohimana',
    title: 'Visite guidée en forêt, Vohimana',
    alt: 'Un guide local présente la forêt de Vohimana à des visiteurs',
    ratio: '1 / 1',
  },
  {
    id: 'classe-vohimana',
    image: classe,
    place: 'vohimana',
    title: 'Une classe près de Vohimana',
    alt: 'Des élèves travaillent dans une salle de classe en bois, Vohimana',
    ratio: '3 / 2',
  },
  {
    id: 'artisane-vohimana',
    image: artisane,
    place: 'vohimana',
    title: 'Une artisane de Vohimana',
    alt: 'Une artisane tresse des fibres végétales devant sa maison, Vohimana',
    ratio: '4 / 5',
  },
  {
    id: 'calumma-gallus-vohimana',
    image: calumma,
    place: 'vohimana',
    title: 'Caméléon Calumma gallus, Vohimana',
    alt: 'Un caméléon Calumma gallus mâle sur une branche, réserve de Vohimana',
    credit: {
      author: 'Frank Vassen',
      license: 'CC BY 2.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/2.0/deed.fr',
      source:
        'https://commons.wikimedia.org/wiki/File:Male_Long-nosed_Chameleon_(Calumma_gallus),_Vohimana_reserve,_Madagascar.jpg',
    },
    ratio: '1 / 1',
  },
  {
    id: 'cueillette-ylang-mont-passot',
    image: ylangCueillette,
    place: 'mont-passot',
    title: "Cueillette d'ylang-ylang, Mont-Passot",
    alt: "Une jeune femme cueille des fleurs d'ylang-ylang, Mont-Passot",
    credit: { author: 'Olivier Behra' },
    ratio: '4 / 3',
  },
  {
    id: 'paniers-ylang-mont-passot',
    image: ylangPaniers,
    place: 'mont-passot',
    title: "Paniers de fleurs d'ylang-ylang, Mont-Passot",
    alt: "Des femmes avec leurs paniers de fleurs d'ylang-ylang dans les plantations du Mont-Passot",
    credit: { author: 'Olivier Behra' },
    ratio: '3 / 4',
  },
  {
    id: 'lac-mont-passot',
    image: lac,
    place: 'mont-passot',
    title: 'Le lac du Mont-Passot',
    alt: 'Un lac de cratère au creux des collines boisées, Mont-Passot',
    credit: { author: 'Olivier Behra' },
    ratio: '4 / 5',
  },
  {
    id: 'cirque-ambalakalanoro',
    image: cirque,
    place: 'ambalakalanoro',
    title: "Le cirque d'Ambalakalanoro",
    alt: "Le cirque d'Ambalakalanoro et sa forêt",
    credit: { author: 'Olivier Behra' },
    ratio: '1 / 1',
  },
  {
    id: 'saro-ambalakalanoro',
    image: saro,
    place: 'ambalakalanoro',
    title: 'Cueillette de feuilles, Ambalakalanoro',
    alt: 'Une femme au visage couvert de masque de beauté tient une branche de saro, Ambalakalanoro',
    credit: { author: 'Olivier Behra' },
    ratio: '3 / 2',
  },
  {
    id: 'mangroves-ambohidravy',
    image: mangroves,
    place: 'ambohidravy',
    title: "Forêts et mangroves d'Ambohidravy",
    alt: "Forêts et mangroves d'Ambohidravy, vues du ciel",
    ratio: '4 / 5',
  },
  {
    id: 'fete-ambohidravy',
    image: fete,
    place: 'ambohidravy',
    title: 'Fête de village, Ambohidravy',
    alt: "Deux femmes dansent lors d'une fête de village, Ambohidravy",
    ratio: '1 / 1',
  },
  {
    id: 'elephants-burkina',
    image: elephants,
    place: 'burkina-faso',
    title: 'Éléphants, Burkina Faso',
    alt: "Un troupeau d'éléphants traverse une piste de terre rouge, Burkina Faso",
    ratio: '4 / 3',
  },
  {
    // TODO ONG : la maquette prévoit ici une photo « Eau potable, Burkina Faso », absente du dépôt.
    id: 'reunion-kollo',
    image: kollo,
    place: 'burkina-faso',
    title: 'Réunion des habitants, Kollo',
    alt: 'Réunion des habitants sous un arbre, village de Kollo, Burkina Faso',
    ratio: '3 / 4',
  },
];
