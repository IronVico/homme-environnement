/**
 * Chiffres clés : au premier passage dans le viewport, compteur de 0 à la
 * valeur et tracé des illustrations (classe .is-visible, voir StatCard.astro).
 * Rien ne se passe avec prefers-reduced-motion : la valeur finale reste affichée.
 */

const DURATION = 1400;
const NBSP = '\u00a0';

const format = (value: number, unit: string | undefined, locale = 'fr-FR', prefix?: string, suffix = '') =>
  (prefix ? prefix + NBSP : '') + value.toLocaleString(locale).replace(/\s/g, NBSP) + suffix + (unit ? NBSP + unit : '');

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.countTo);
  const unit = el.dataset.unit;
  if (!Number.isFinite(target)) return;

  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min((now - start) / DURATION, 1);
    el.textContent = format(Math.round(target * easeOutCubic(progress)), unit, el.dataset.locale, el.dataset.prefix, el.dataset.suffix);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function initStats() {
  const cards = document.querySelectorAll<HTMLElement>('[data-stat]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    cards.forEach((card) => card.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const card = entry.target as HTMLElement;
        observer.unobserve(card);
        card.classList.add('is-visible');
        const value = card.querySelector<HTMLElement>('[data-count-to]');
        if (value) countUp(value);
      }
    },
    { threshold: 0.4 },
  );

  cards.forEach((card) => {
    const value = card.querySelector<HTMLElement>('[data-count-to]');
    if (value) value.textContent = format(0, value.dataset.unit, value.dataset.locale, value.dataset.prefix, value.dataset.suffix);
    observer.observe(card);
  });
}
