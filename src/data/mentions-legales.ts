/**
 * Informations légales de la page « Mentions légales ». `null` : valeur pas encore fournie
 * par l'ONG, affichée « [à fournir] » (et la page n'est pas indexée tant qu'il en manque une).
 */
export const PUBLISHER = {
  headOffice: null as string | null, // TODO ONG : adresse du siège social
  rna: null as string | null, // TODO ONG : numéro RNA (W…)
  siret: null as string | null, // TODO ONG : numéro SIRET
  director: null as string | null, // TODO ONG : directeur ou directrice de la publication
  phone: null as string | null, // TODO ONG : téléphone
};

/** Adresse de contact affichée dans l'éditeur du site. TODO ONG : à confirmer (celle de la maquette). */
export const LEGAL_CONTACT_EMAIL = 'contact@homme-environnement.org';

/** Date de dernière mise à jour des mentions (texte affiché tel quel). TODO ONG : à fournir. */
export const LEGAL_UPDATED: string | null = null;

/** Conception et réalisation du site. TODO ONG : nom à fournir. */
export const SITE_DESIGNER: string | null = null;

export const HOST = {
  name: 'Vercel Inc.',
  // Pays : texte traduit (mentionsLegales.hosting.country).
  address: ['440 N Barranca Ave #4133', 'Covina, CA 91723'],
  url: 'https://vercel.com',
  urlLabel: 'vercel.com',
};

/** Auteurs des photographies du site, dans l'ordre de la maquette. */
export const PHOTOGRAPHERS = ['Olivier Behra', 'Day Nabih', 'Marc Gansuana', 'Langaha Be'];
