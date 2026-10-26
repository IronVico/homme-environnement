/**
 * Coordonnées de la page Contact. `null` : pas encore fournie par l'ONG, affichée « [à fournir] ».
 * L'adresse du siège est celle des mentions légales (PUBLISHER.headOffice), l'e-mail
 * CONTACT_EMAIL et les réseaux SOCIAL_URLS (src/data/navigation.ts).
 */

/** Adresse du bureau à Madagascar, une ligne par élément. TODO ONG : à fournir. */
export const MADAGASCAR_OFFICE: string[] | null = null;

/** Réseaux affichés en pastilles, dans l'ordre de la maquette. TODO ONG : comptes à confirmer. */
export const CONTACT_SOCIALS = [
  { id: 'facebook', label: 'Facebook' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'linkedin', label: 'LinkedIn' },
] as const;
