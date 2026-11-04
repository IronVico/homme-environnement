/**
 * Informations de la page « Confidentialité ». `null` : valeur pas encore fournie par l'ONG,
 * affichée « [à fournir] » (et la page n'est pas indexée tant qu'il en manque une).
 * Siège social et adresse de contact : ceux des mentions légales (src/data/mentions-legales.ts).
 */

/** Date de dernière mise à jour de la politique (texte affiché tel quel). TODO ONG : à fournir. */
export const PRIVACY_UPDATED: string | null = null;

/**
 * Outil d'envoi de la newsletter. TODO ONG : à fournir (le formulaire n'envoie encore
 * rien, voir NewsletterForm).
 */
export const NEWSLETTER_TOOL: string | null = null;

/**
 * Outil de mesure d'audience, chargé après accord dans le bandeau cookies (CookieConsent ;
 * identifiant dans src/data/mesure-audience.ts).
 */
export const ANALYTICS_TOOL: string | null = 'Google Analytics 4, service de Google Ireland Limited';

/** Durées de conservation (texte affiché tel quel). TODO ONG : à fournir. */
export const RETENTION = {
  contact: null as string | null,
  donations: null as string | null,
};

/** Politique de confidentialité de HelloAsso (lien de la maquette, page d'accueil du site). */
export const HELLOASSO_PRIVACY_URL = 'https://www.helloasso.com';

export const CNIL_URL = 'https://www.cnil.fr';
