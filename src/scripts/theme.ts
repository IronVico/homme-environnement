/**
 * Mode clair / sombre (section « Mode sombre » du design system).
 * Choix du visiteur enregistré sur l'appareil (localStorage) : « light » ou « dark ».
 * Sans choix (« auto »), aucun data-theme sur <html> : le CSS suit prefers-color-scheme.
 * Le script inline du <head> (BaseLayout) pose data-theme avant le premier rendu.
 */
export const THEME_KEY = 'lhe-theme';

type Choice = 'auto' | 'light' | 'dark';

const root = document.documentElement;
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function readChoice(): Choice {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'auto';
  } catch {
    return 'auto';
  }
}

function isDark(choice: Choice) {
  return choice === 'dark' || (choice === 'auto' && systemDark.matches);
}

let transitionTimer: number | undefined;

function applyChoice(choice: Choice) {
  // Fondu de 200 ms au clic seulement (jamais au chargement), coupé avec prefers-reduced-motion.
  if (!reduceMotion.matches) {
    root.classList.add('theme-transition');
    window.clearTimeout(transitionTimer);
    transitionTimer = window.setTimeout(() => root.classList.remove('theme-transition'), 250);
  }
  try {
    if (choice === 'auto') localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, choice);
  } catch {
    // Stockage indisponible (navigation privée) : le choix vaut pour la page en cours.
  }
  if (choice === 'auto') delete root.dataset.theme;
  else root.dataset.theme = choice;
  render();
}

function render() {
  const choice = readChoice();
  const dark = isDark(choice);
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    const label = (dark ? button.dataset.labelLight : button.dataset.labelDark) ?? '';
    button.toggleAttribute('data-dark', dark);
    button.setAttribute('aria-label', label);
    button.dataset.tooltip = label;
  });
  document.querySelectorAll<HTMLButtonElement>('[data-theme-choice]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.themeChoice === choice));
  });
}

let initialized = false;

export function initThemeControls() {
  if (initialized) return;
  initialized = true;

  // Le choix « en mémoire » peut différer du data-theme posé (stockage indisponible) : on aligne.
  const choice = readChoice();
  if (choice === 'auto') delete root.dataset.theme;
  else root.dataset.theme = choice;

  document.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    const toggle = target?.closest<HTMLButtonElement>('[data-theme-toggle]');
    if (toggle) {
      applyChoice(isDark(readChoice()) ? 'light' : 'dark');
      return;
    }
    const option = target?.closest<HTMLButtonElement>('[data-theme-choice]');
    const value = option?.dataset.themeChoice;
    if (value === 'auto' || value === 'light' || value === 'dark') applyChoice(value);
  });

  // En mode auto, l'icône et le libellé suivent un changement de réglage de l'appareil.
  systemDark.addEventListener('change', render);
  // Choix fait dans un autre onglet.
  window.addEventListener('storage', (event) => {
    if (event.key !== THEME_KEY) return;
    const next = readChoice();
    if (next === 'auto') delete root.dataset.theme;
    else root.dataset.theme = next;
    render();
  });

  render();
}
