import fr from './fr';
import type { Dictionary } from './index';

/**
 * English texts (served under /en/).
 * Interface labels are translated; the home page content is still a copy of the
 * French text, to be translated and validated by the NGO before launch.
 */
const en: Dictionary = {
  meta: {
    siteName: 'Man & the Environment',
    // TODO traduction : description à valider par l'ONG.
    homeDescription:
      'Founded in 1993, Man & the Environment shows in Madagascar and Burkina Faso that fighting poverty and preserving biodiversity can go hand in hand.',
    skipLink: 'Skip to content',
  },

  ui: {
    homeLink: 'Man & the Environment, home',
    logoAlt: 'Man & the Environment',
    donate: 'Donate',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langSwitcher: 'Language',
    otherLanguage: 'Version française',
    sitemap: 'Site map',
    social: 'Social media',
    socialLinkedin: 'Man & the Environment on LinkedIn',
    socialFacebook: 'Man & the Environment on Facebook',
    footerPitch: 'Preserving biodiversity and supporting the development of local communities since 1993.',
    copyright: '© Man & the Environment · Photos © Day Nabih, © Marc Gansuana, © Langaha Be',
    statsLabel: 'Key figures',
    scrollHint: 'Scroll down',
    breadcrumb: 'Breadcrumb',
    breadcrumbHome: 'Home',
    newsletterEmailLabel: 'Your email address',
    newsletterPlaceholder: 'Your email address',
    newsletterSubmit: 'Subscribe',
    newsletterPending: 'Thank you. Sign-ups open very soon: your address has not been saved yet.',
  },

  nav: {
    main: ['The NGO', 'Our sites', 'Our projects', 'Get involved', 'Resources', 'Contact'],
    footer: [
      { title: 'The NGO', links: ['Our approach', 'Our history', 'Partners and funders'] },
      { title: 'Our sites', links: ['Madagascar', 'Burkina Faso'] },
      { title: 'Our projects', links: ['Conservation', 'Reforestation', 'Health', 'Aromatic plants', 'All projects'] },
      { title: 'Get involved', links: ['Individuals', 'Come to the field', 'Companies'] },
      { title: 'Resources', links: ['Reports and studies', 'Photo gallery', 'Contact'] },
    ],
    legal: ['Legal notice', 'Privacy'],
  },

  // TODO traduction : contenu de la home encore en français (copie de fr.ts).
  home: structuredClone(fr.home),

  // TODO traduction : contenu de la page Madagascar encore en français (copie de fr.ts).
  madagascar: structuredClone(fr.madagascar),

  // TODO traduction : fiches site encore en français (copie de fr.ts).
  site: structuredClone(fr.site),
};

export default en;
