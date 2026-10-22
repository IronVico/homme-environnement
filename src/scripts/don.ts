/**
 * Formulaire de don (DonationForm) et cartes « Ce que permet votre don » (DonPage) :
 * choisir un montant met sa carte en avant, cliquer une carte choisit le montant.
 * Sans JS, le formulaire reste lisible avec le montant par défaut et le bouton
 * mène quand même à HelloAsso.
 */
import { donationHref, fill, formatEuros, formatPercent, netCost, parseAmount, tierFor } from '../lib/don';

type Frequency = 'once' | 'monthly';

interface Config {
  lang: string;
  amounts: Record<Frequency, number[]>;
  defaultIndex: number;
  min: number;
  rate: number;
  helloasso: { donation: string; donationMonthly: string; amountParam: string };
  texts: { perMonth: string; impactLead: string; taxTitle: string; submit: string; impacts: string[] };
}

export function initDonationForm() {
  const form = document.querySelector<HTMLElement>('[data-don-form]');
  if (!form?.dataset.config) return;
  const config = JSON.parse(form.dataset.config) as Config;

  const freqButtons = Array.from(form.querySelectorAll<HTMLButtonElement>('[data-freq]'));
  const amountButtons = Array.from(form.querySelectorAll<HTMLButtonElement>('[data-amount-index]'));
  const impactLine = form.querySelector<HTMLElement>('[data-impact-line]');
  const impactPhotos = Array.from(form.querySelectorAll<HTMLElement>('[data-impact-photo]'));
  const impactLead = form.querySelector<HTMLElement>('[data-impact-lead]');
  const impactText = form.querySelector<HTMLElement>('[data-impact-text]');
  const custom = form.querySelector<HTMLInputElement>('[data-custom-amount]');
  const taxTitle = form.querySelector<HTMLElement>('[data-tax] .info-note__title');
  const submit = form.querySelector<HTMLAnchorElement>('.don-form__submit');
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]');
  const cards = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-impact-card]'));
  const aside = form.closest<HTMLElement>('.don-form');

  const state: { freq: Frequency; index: number; custom: number | null } = {
    freq: 'once',
    index: config.defaultIndex,
    custom: null,
  };

  const euros = (value: number) => formatEuros(config.lang, value);
  const rate = formatPercent(config.lang, config.rate);

  function render() {
    const tiers = config.amounts[state.freq];
    const amount = state.custom ?? tiers[state.index]!;
    // Montant libre : carte du plus grand palier atteint ; montant proposé : sa carte.
    const tier = state.custom === null ? state.index : tierFor(state.custom, tiers);
    const per = state.freq === 'monthly' ? config.texts.perMonth : '';
    const withPer = (value: number) => `${euros(value)}${per}`;

    freqButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.freq === state.freq)));
    amountButtons.forEach((button, i) => {
      button.textContent = euros(tiers[i]!);
      button.setAttribute('aria-pressed', String(state.custom === null && i === state.index));
    });

    if (impactLine) impactLine.hidden = tier === null;
    if (tier !== null) {
      impactPhotos.forEach((photo, i) => (photo.hidden = i !== tier));
      if (impactLead) impactLead.textContent = fill(config.texts.impactLead, { amount: withPer(amount) });
      if (impactText) impactText.textContent = config.texts.impacts[tier] ?? '';
    }

    if (taxTitle) {
      taxTitle.textContent = fill(config.texts.taxTitle, { net: withPer(netCost(amount, config.rate)), rate });
    }

    if (submitLabel) submitLabel.textContent = fill(config.texts.submit, { amount: withPer(amount) });
    if (submit) {
      const { donation, donationMonthly, amountParam } = config.helloasso;
      const base = state.freq === 'monthly' && donationMonthly ? donationMonthly : donation;
      submit.href = donationHref(base, amountParam, amount);
    }

    cards.forEach((card, i) => {
      const label = card.querySelector('[data-card-amount]');
      if (label) label.textContent = withPer(tiers[i]!);
      card.setAttribute('aria-pressed', String(state.custom === null && i === state.index));
      card.classList.toggle('is-near', state.custom !== null && i === tier);
    });
  }

  function pickAmount(index: number) {
    state.index = index;
    state.custom = null;
    if (custom) custom.value = '';
    render();
  }

  freqButtons.forEach((button) =>
    button.addEventListener('click', () => {
      state.freq = button.dataset.freq === 'monthly' ? 'monthly' : 'once';
      render();
    }),
  );

  amountButtons.forEach((button, i) => button.addEventListener('click', () => pickAmount(i)));

  custom?.addEventListener('input', () => {
    // Saisie vide ou invalide : on revient au dernier montant proposé.
    state.custom = parseAmount(custom.value, config.min);
    render();
  });

  // Une carte choisit le montant ; si le formulaire n'est pas à l'écran (mobile), on y remonte.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  cards.forEach((card, i) =>
    card.addEventListener('click', () => {
      pickAmount(i);
      if (!aside) return;
      const box = aside.getBoundingClientRect();
      if (box.bottom < 0 || box.top > window.innerHeight) {
        aside.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
      }
    }),
  );

  render();
  keepStickyFormVisible(aside);
}

/** Header fixé (88px) + marge : point d'accroche du formulaire collant. */
const STICKY_TOP = 100;
const STICKY_BOTTOM_GAP = 16;

/** Formulaire collant plus haut que l'écran : on l'accroche plus haut pour que son bouton reste visible. */
function keepStickyFormVisible(aside: HTMLElement | null) {
  if (!aside || !('ResizeObserver' in window)) return;
  const update = () => {
    const top = Math.min(STICKY_TOP, window.innerHeight - aside.offsetHeight - STICKY_BOTTOM_GAP);
    aside.style.setProperty('--sticky-top', `${Math.round(top)}px`);
  };
  new ResizeObserver(update).observe(aside);
  window.addEventListener('resize', update, { passive: true });
  update();
}
