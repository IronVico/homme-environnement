/**
 * Chargement des photos (<Picture>, voir global.css) : le fond d'attente reste sous
 * l'image tant qu'elle charge, pulse si elle tarde à l'écran, puis la photo apparaît
 * en fondu.
 *
 * L'image n'est jamais masquée : le fondu est un voile de la couleur d'attente posé
 * au-dessus d'elle, le temps de l'animation. Sans ce script, les photos s'affichent
 * normalement sur leur fond, et le LCP ne bouge pas.
 *
 * Pas de fondu pour une photo déjà en cache, hors de l'écran, ou attendue moins de
 * FADE_AFTER_MS : elle apparaît d'un coup, sans scintillement.
 */

const FADE_AFTER_MS = 120;
const PULSE_AFTER_MS = 400;

/* En Web Animations : une animation CSS remplacerait celle de la photo (hero-blob du héros). */
function pulse(img: Element) {
  return img.animate(
    { backgroundColor: 'color-mix(in srgb, var(--section) 50%, var(--disque))' },
    { duration: 1600, delay: PULSE_AFTER_MS, easing: 'ease-in-out', iterations: Infinity, direction: 'alternate' },
  );
}

function fadeIn(img: HTMLImageElement) {
  const { backgroundColor, borderRadius } = getComputedStyle(img);
  const overlay = document.createElement('span');
  overlay.className = 'image-fade';
  Object.assign(overlay.style, {
    left: `${img.offsetLeft}px`,
    top: `${img.offsetTop}px`,
    width: `${img.offsetWidth}px`,
    height: `${img.offsetHeight}px`,
    backgroundColor,
    borderRadius,
  });
  overlay.addEventListener('animationend', () => overlay.remove());
  img.after(overlay);
}

export function initImages() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const waiting = new Map<Element, { since: number; pulse?: Animation }>();

  const stopWaiting = (img: Element) => {
    waiting.get(img)?.pulse?.cancel();
    waiting.delete(img);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) stopWaiting(entry.target);
      else waiting.set(entry.target, { since: performance.now(), pulse: reduceMotion ? undefined : pulse(entry.target) });
    });
  });

  const finish = (img: HTMLImageElement) => {
    observer.unobserve(img);
    stopWaiting(img);
    img.classList.add('is-loaded');
  };

  document.querySelectorAll<HTMLImageElement>('picture > img').forEach((img) => {
    if (img.complete) {
      finish(img);
      return;
    }
    observer.observe(img);
    img.addEventListener('error', () => finish(img), { once: true });
    img.addEventListener(
      'load',
      () => {
        const since = waiting.get(img)?.since;
        if (!reduceMotion && since !== undefined && performance.now() - since >= FADE_AFTER_MS) fadeIn(img);
        finish(img);
      },
      { once: true },
    );
  });
}
