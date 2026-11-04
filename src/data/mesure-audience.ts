/**
 * Mesure d'audience : Google Analytics 4, chargé seulement après accord dans le bandeau
 * cookies (CookieConsent, src/scripts/consent.ts).
 *
 * Identifiant de mesure de la propriété GA4 (« G-XXXXXXXXXX »), fourni par l'ONG.
 * TODO ONG : à fournir. Vide : ni bandeau, ni lien « Gérer les cookies », ni script Google.
 * Seul endroit à modifier : la valeur est écrite dans le HTML au build, sans fonction serveur.
 */
export const GA_MEASUREMENT_ID: string = '';

/** Identifiant valide, ou `null` : rien n'est affiché ni chargé. */
export const GA_ID: string | null = /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID) ? GA_MEASUREMENT_ID : null;
