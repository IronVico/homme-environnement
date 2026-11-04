/**
 * Consentement à la mesure d'audience (bandeau CookieConsent) et chargement de Google Analytics 4.
 *
 * - Choix mémorisé dans localStorage : 13 mois pour un accord, 6 mois pour un refus, puis
 *   redemandé (recommandations de la CNIL). Fermer le bandeau ou Échap vaut refus.
 * - gtag.js n'est injecté qu'après accord. Consent Mode v2 : tout refusé par défaut, puis
 *   seul `analytics_storage` passe en `granted` ; signaux Google et publicité désactivés.
 * - Retrait de l'accord (« Gérer les cookies ») : GA coupé et cookies `_ga*` effacés.
 * - Pendant que le bandeau est affiché, <html> porte `data-consent-open` et la variable
 *   `--bandeau-cookies` (hauteur du bandeau) : les éléments fixés en bas remontent d'autant.
 */

type Choice = 'granted' | 'denied';

const STORAGE_KEY = 'lhe-consentement';
const DAY = 24 * 60 * 60 * 1000;
const DURATION: Record<Choice, number> = { granted: 395 * DAY, denied: 183 * DAY };
/** Durée des cookies GA : 13 mois au plus (CNIL), au lieu des 2 ans par défaut. */
const COOKIE_SECONDS = 13 * 30 * 24 * 60 * 60;

type Gtag = (...args: unknown[]) => void;
const win = window as unknown as Window & { dataLayer?: unknown[]; gtag?: Gtag } & Record<string, unknown>;

function readChoice(): Choice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const { choice, at } = JSON.parse(raw) as { choice?: unknown; at?: unknown };
    if ((choice === 'granted' || choice === 'denied') && typeof at === 'number' && Date.now() - at < DURATION[choice]) {
      return choice;
    }
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
  return null;
}

function saveChoice(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, at: Date.now() }));
  } catch {}
}

function enableAnalytics(id: string) {
  win[`ga-disable-${id}`] = false;
  if (win.gtag) {
    win.gtag('consent', 'update', { analytics_storage: 'granted' });
    return;
  }
  win.dataLayer = win.dataLayer || [];
  // gtag attend l'objet `arguments`, pas un tableau.
  const gtag: Gtag = function () {
    win.dataLayer!.push(arguments);
  };
  win.gtag = gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('consent', 'update', { analytics_storage: 'granted' });
  gtag('js', new Date());
  gtag('config', id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: COOKIE_SECONDS,
  });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.append(script);
}

/** Efface `_ga`, `_ga_<id>` (et `_gid`) sur le domaine de la page et ses domaines parents. */
function clearAnalyticsCookies() {
  const names = document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0]?.trim() ?? '')
    .filter((name) => /^_ga($|_)/.test(name) || name === '_gid');
  if (names.length === 0) return;
  const parts = location.hostname.split('.');
  const domains = [''];
  for (let i = 0; i < parts.length - 1; i++) domains.push(`; domain=.${parts.slice(i).join('.')}`);
  for (const name of names) {
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
  }
}

function disableAnalytics(id: string) {
  win[`ga-disable-${id}`] = true;
  win.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  clearAnalyticsCookies();
}

export function initConsent() {
  const banner = document.querySelector<HTMLElement>('[data-consent]');
  const id = banner?.dataset.gaId;
  if (!banner || !id) return;

  const root = document.documentElement;
  const current = banner.querySelector<HTMLElement>('[data-consent-current]');
  /** Bouton « Gérer les cookies » qui a rouvert le bandeau : le focus y revient. */
  let opener: HTMLElement | null = null;

  const setHeight = () => root.style.setProperty('--bandeau-cookies', `${banner.offsetHeight}px`);
  const resize = new ResizeObserver(setHeight);

  function open(focus: boolean) {
    const choice = readChoice();
    if (current) {
      current.textContent = choice ? (current.dataset[choice] ?? '') : '';
      current.hidden = !choice;
    }
    banner!.hidden = false;
    root.setAttribute('data-consent-open', '');
    setHeight();
    resize.observe(banner!);
    if (focus) banner!.focus();
  }

  function close(choice: Choice) {
    saveChoice(choice);
    if (choice === 'granted') enableAnalytics(id!);
    else disableAnalytics(id!);

    const hadFocus = banner!.contains(document.activeElement);
    resize.disconnect();
    banner!.hidden = true;
    root.removeAttribute('data-consent-open');
    root.style.removeProperty('--bandeau-cookies');
    // Focus rendu au bouton qui a rouvert le bandeau. Au premier affichage, le navigateur
    // reprend le parcours au clavier juste après le bandeau (lien d'évitement, header).
    if (hadFocus && opener) opener.focus({ preventScroll: true });
    opener = null;
  }

  banner.addEventListener('click', (event) => {
    const button = (event.target as Element).closest<HTMLElement>('[data-consent-choice]');
    if (!button) return;
    close(button.dataset.consentChoice === 'granted' ? 'granted' : 'denied');
  });

  banner.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close('denied');
  });

  document.querySelectorAll<HTMLElement>('[data-consent-open]').forEach((button) => {
    button.addEventListener('click', () => {
      opener = button;
      open(true);
    });
  });

  const choice = readChoice();
  if (choice === 'granted') enableAnalytics(id);
  else {
    // Cookies restés d'un accord expiré ou retiré ailleurs.
    clearAnalyticsCookies();
    if (!choice) open(false);
  }
}
