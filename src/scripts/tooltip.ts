/**
 * Infobulles [data-tooltip] (styles dans global.css) : Échap les ferme sans déplacer
 * la souris ni le focus (WCAG 1.4.13) ; elles reviennent au prochain mouvement.
 */
export function initTooltips() {
  const root = document.documentElement;
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') root.setAttribute('data-tooltips-off', '');
  });
  const restore = () => root.removeAttribute('data-tooltips-off');
  document.addEventListener('mousemove', restore, { passive: true });
  document.addEventListener('focusin', restore);
}
