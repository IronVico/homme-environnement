/**
 * Identifiants uniques pour les id internes des SVG (filtres, découpes) : deux
 * instances d'un même composant dans une page ne doivent pas partager un id.
 */
let counter = 0;

export function uid(prefix: string): string {
  counter += 1;
  return `${prefix}-${counter}`;
}
