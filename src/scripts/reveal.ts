/**
 * Apparition au scroll : chaque élément [data-reveal] apparaît (fondu + montée)
 * la première fois qu'il entre dans l'écran. Les éléments qui entrent ensemble
 * (une rangée de cartes) apparaissent en cascade, à 90 ms d'écart ; data-reveal-stagger
 * (en ms) allonge cet écart (étapes de la frise de la page L'ONG).
 *
 * L'état masqué n'existe qu'avec JS (classe .js posée dans le <head>) et sans
 * prefers-reduced-motion : voir global.css. Si ce script ne s'exécute pas,
 * le <head> réaffiche tout au bout de 3s (classe .reveal-off).
 */

import { whenPageRevealed } from './intro';

const STAGGER_MS = 90;

export function initReveal() {
  const root = document.documentElement;
  root.dataset.revealReady = 'true';

  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const entering = entries.filter((entry) => entry.isIntersecting);
      entering.forEach((entry, i) => {
        const el = entry.target as HTMLElement;
        const stagger = Number(el.dataset.revealStagger) || STAGGER_MS;
        el.style.setProperty('--reveal-delay', `${i * stagger}ms`);
        el.classList.add('is-revealed');
        observer.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  );

  // Écran d'ouverture : la page apparaît quand le rideau se lève.
  whenPageRevealed().then(() => elements.forEach((el) => observer.observe(el)));
}
