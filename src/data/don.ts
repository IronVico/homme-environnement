/**
 * Données de la page « Faire un don » : montants, équivalences, taux fiscal,
 * liens HelloAsso, répartition des dépenses, campagne, derniers dons.
 * Les textes (libellés, équivalences rédigées) sont dans src/i18n (clé `don`).
 *
 * Points à confirmer par l'ONG (TODO) :
 * - éligibilité aux reçus fiscaux (réduction d'impôt de 66 %) ;
 * - équivalences « ce que permet votre don » (textes dans src/i18n) ;
 * - objectif et montant collecté de la campagne Ambalakalanoro ;
 * - répartition des dépenses (dernier rapport financier).
 */
import type { ImageMetadata } from 'astro';

import impactClasse from '../assets/photos/pilier-responsabilisation-classe.jpg';
import impactPatrouille from '../assets/photos/especes/indri-indri.jpg';
import impactReboisement from '../assets/photos/don/impact-reboisement.jpg';
import impactYlang from '../assets/photos/don/impact-ylang-ylang.jpg';

export type Frequency = 'once' | 'monthly';

/** Montants proposés, dans l'ordre des boutons ; le n-ième montant correspond à la n-ième carte d'impact. */
export const AMOUNTS: Record<Frequency, readonly number[]> = {
  once: [30, 50, 100, 200],
  monthly: [10, 20, 30, 50],
};

/** Montant présélectionné à l'arrivée sur la page (index dans AMOUNTS). */
export const DEFAULT_AMOUNT_INDEX = 1;

/** Montant libre minimum accepté, en euros. */
export const MIN_AMOUNT = 1;

/**
 * Réduction d'impôt sur le revenu des particuliers (dons aux organismes d'intérêt général).
 * TODO ONG : confirmer que l'association peut délivrer des reçus fiscaux.
 */
export const TAX_REDUCTION_RATE = 0.66;

/**
 * Formulaires HelloAsso de l'ONG. Le bouton « Donner » envoie vers `donation`.
 * TODO ONG : URL du formulaire de don HelloAsso (non fournie), par exemple
 * https://www.helloasso.com/associations/<slug>/formulaires/<n>.
 * Tant qu'elle est vide, le bouton reste un lien « # ».
 */
export const HELLOASSO = {
  donation: '',
  /** Formulaire de don mensuel s'il est distinct ; vide : même formulaire que `donation`. */
  donationMonthly: '',
  /** TODO ONG : formulaire d'adhésion (« Devenir membre »). */
  membership: '',
  /** TODO ONG : formulaire de la campagne Ambalakalanoro. */
  campaign: '',
  /**
   * Paramètre d'URL qui préremplit le montant sur le formulaire HelloAsso, s'il existe.
   * Aucun paramètre documenté à ce jour : vide, le lien n'emporte pas le montant
   * (le donateur le ressaisit sur HelloAsso). Pour un montant garanti, passer par
   * l'API Checkout de HelloAsso (fonction serveur), voir la PR de la page.
   */
  amountParam: '',
};

/** Vidéo de fond facultative du haut de page (jamais lue avec prefers-reduced-motion). */
export const HERO_VIDEO: { src: string; type: string } | undefined = undefined;

/**
 * Cartes « Ce que permet votre don », dans l'ordre des montants.
 * TODO ONG : équivalences à confirmer (textes dans src/i18n, don.impact.cards).
 */
export const IMPACTS: { photo: ImageMetadata; position: string }[] = [
  { photo: impactReboisement, position: '50% 50%' },
  { photo: impactPatrouille, position: '50% 30%' },
  { photo: impactYlang, position: '50% 40%' },
  { photo: impactClasse, position: '50% 50%' },
];
export const IMPACTS_CONFIRMED = false;

/**
 * « Où va votre argent » : part de chaque poste, en %.
 * TODO ONG : chiffres du dernier rapport financier. `percent: null` affiche « [X] % »
 * et une barre indicative (`placeholderWidth`).
 */
export const SPENDING: { percent: number | null; placeholderWidth: number; color: 'basalte' | 'sauge' | 'ardoise' }[] = [
  { percent: null, placeholderWidth: 75, color: 'basalte' },
  { percent: null, placeholderWidth: 15, color: 'sauge' },
  { percent: null, placeholderWidth: 10, color: 'ardoise' },
];

/** TODO ONG : montant collecté et objectif de la campagne Ambalakalanoro, en euros. */
export const CAMPAIGN: { collected: number | null; goal: number | null } = {
  collected: null,
  goal: null,
};

export interface RecentDonation {
  firstName: string;
  city: string;
  /** En euros. */
  amount: number;
}

/**
 * Derniers dons affichés au-dessus du formulaire. Vide : le bandeau n'apparaît pas.
 * Ne jamais y mettre de dons inventés. À brancher sur HelloAsso (prénom et ville
 * seulement, avec l'accord du donateur), voir la PR de la page.
 */
export const RECENT_DONATIONS: RecentDonation[] = [];
