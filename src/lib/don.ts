/**
 * Calculs et libellés du formulaire de don, partagés entre le rendu de la page
 * (valeurs de départ) et le script client (src/scripts/don.ts).
 */

/** « 50 € », « 10,20 € » : décimales seulement si le montant n'est pas rond. */
export function formatEuros(lang: string, amount: number): string {
  const rounded = Math.round(amount * 100) / 100;
  const decimals = Number.isInteger(rounded) ? 0 : 2;
  return new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(rounded);
}

/** « 66 % » */
export function formatPercent(lang: string, rate: number): string {
  return new Intl.NumberFormat(lang, { style: 'percent', maximumFractionDigits: 0 }).format(rate);
}

/** Remplace les {clés} d'un texte : fill('Donner {amount}', { amount: '50 €' }). */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/** Coût réel d'un don après réduction d'impôt. */
export function netCost(amount: number, rate: number): number {
  return amount * (1 - rate);
}

/** Montant saisi (« 25 », « 12,50 ») ou null s'il n'est pas valide. */
export function parseAmount(value: string, min: number): number | null {
  const normalized = value.replace(/\s/g, '').replace(',', '.');
  if (!/^\d+(\.\d{1,2})?$/.test(normalized)) return null;
  const amount = Number(normalized);
  return amount >= min ? amount : null;
}

/**
 * Carte d'impact d'un montant libre : le plus grand palier qu'il atteint
 * (null sous le premier palier).
 */
export function tierFor(amount: number, tiers: readonly number[]): number | null {
  let tier: number | null = null;
  tiers.forEach((value, i) => {
    if (amount >= value) tier = i;
  });
  return tier;
}

/**
 * Lien vers le formulaire HelloAsso. Sans URL configurée : « # ».
 * Avec un paramètre de montant configuré, le montant est ajouté à l'URL.
 */
export function donationHref(base: string, amountParam: string, amount: number): string {
  if (!base) return '#';
  if (!amountParam) return base;
  const url = new URL(base);
  url.searchParams.set(amountParam, String(amount));
  return url.toString();
}
