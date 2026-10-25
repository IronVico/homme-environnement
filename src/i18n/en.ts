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
    submenu: 'Submenu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langSwitcher: 'Language',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    themeLabel: 'Appearance',
    themeAuto: 'Auto',
    themeLight: 'Light',
    themeDark: 'Dark',
    otherLanguage: 'Version française',
    sitemap: 'Site map',
    social: 'Social media',
    socialLinkedin: 'Man & the Environment on LinkedIn',
    socialFacebook: 'Man & the Environment on Facebook',
    footerPitch: 'Preserving biodiversity and supporting the development of local communities since 1993.',
    stampText: 'SINCE 1993 · MADAGASCAR · BURKINA FASO · ',
    stampLabel: 'Man & the Environment, since 1993, Madagascar and Burkina Faso',
    copyright: '© Man & the Environment · Photos © Day Nabih, © Marc Gansuana, © Langaha Be',
    statsLabel: 'Key figures',
    scrollHint: 'Scroll down',
    breadcrumb: 'Breadcrumb',
    breadcrumbHome: 'Home',
    newsletterEmailLabel: 'Your email address',
    newsletterPlaceholder: 'Your email address',
    newsletterSubmit: 'Subscribe',
    shareFacebook: 'Share on Facebook',
    shareLinkedin: 'Share on LinkedIn',
    shareWhatsapp: 'Share on WhatsApp',
    shareEmail: 'Share by email',
    shareCopy: 'Copy link',
    shareCopied: 'Link copied',
    newsletterPending: 'Thank you. Sign-ups open very soon: your address has not been saved yet.',
  },

  nav: {
    main: ['The NGO', 'Our sites', 'Our projects', 'Get involved', 'Resources', 'Contact'],
    footer: [
      { title: 'The NGO', links: ['Our approach', 'Our history', 'Team', 'Partners and funders'] },
      { title: 'Our sites', links: ['Madagascar', 'Burkina Faso'] },
      { title: 'Our projects', links: ['Conservation', 'Reforestation', 'Health', 'Aromatic plants', 'All projects'] },
      { title: 'Get involved', links: ['Individuals', 'Internships and volunteering', 'Companies'] },
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

  // TODO traduction : page « Nos projets » encore en français (copie de fr.ts).
  projets: structuredClone(fr.projets),

  // TODO traduction : page « Stages et volontariat » encore en français (copie de fr.ts).
  stages: structuredClone(fr.stages),

  // TODO traduction : page « Équipe » encore en français (copie de fr.ts).
  equipe: structuredClone(fr.equipe),

  // TODO traduction : page « L'ONG » encore en français (copie de fr.ts).
  ong: structuredClone(fr.ong),

  // TODO traduction : page « Partenaires et bailleurs » encore en français (copie de fr.ts).
  partenaires: structuredClone(fr.partenaires),

  // TODO traduction : page « Faire un don » encore en français (copie de fr.ts).
  don: structuredClone(fr.don),

  // TODO traduction : page « Mentions légales » encore en français (copie de fr.ts).
  mentionsLegales: structuredClone(fr.mentionsLegales),

  // TODO traduction : page « Confidentialité » encore en français (copie de fr.ts).
  confidentialite: structuredClone(fr.confidentialite),
};

export default en;
