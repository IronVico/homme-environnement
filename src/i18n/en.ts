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

  // TODO traduction : contenu de la page Burkina Faso encore en français (copie de fr.ts).
  burkina: structuredClone(fr.burkina),

  projectCard: {
    link: 'See the project',
    sitesLabel: 'Sites',
  },

  // TODO traduction : fiches site encore en français (copie de fr.ts).
  site: structuredClone(fr.site),

  // TODO traduction : page « Nos projets » encore en français (copie de fr.ts).
  projets: {
    ...structuredClone(fr.projets),
    // TODO traduction : à relire par l'ONG.
    more: {
      text: 'From 2010 to 2019, we also supported other projects around the world.',
      link: 'Other supported projects',
    },
  },

  // TODO traduction : page « Autres projets soutenus » traduite, à relire par l'ONG.
  autresProjets: {
    title: 'Other supported projects',
    description:
      'From 2010 to 2019, Man & the Environment developed biodiversity conservation projects around the world, with local communities and private companies.',
    hero: {
      titleStrong: 'Other supported projects,',
      titleLight: 'all over the world.',
      lead: "From 2010 to 2019, thanks to the commitment to Nature of Xavier Marie, founder of Maisons du Monde, Man & the Environment took up the challenge of showing that biodiversity conservation projects could be developed anywhere in the world, by linking local communities and private companies around natural ingredient supply chains.",
      imageAlt: 'Bird in a palm tree laden with fruit, Nicaragua',
      cta: 'See the projects',
    },
    stats: {
      label: 'The programme in figures',
      yearsText: 'ten years of working with companies.',
      yearsLabel: '10 lines, one for each year of the programme',
      projectsText: 'conservation projects developed.',
      projectsLabel: '21 dots, one for each project',
      countriesText: 'countries, on three continents.',
      countriesLabel: 'Ring of 17 segments, one for each country',
    },
    companies: {
      titleStrong: 'Companies',
      titleLight: 'at our side',
      intro: 'These projects were always developed with private companies as financial partners.',
      listLabel: 'Partner companies',
      outro: 'The programme was then handed over to local stakeholders.',
      imageAlt: 'The team in hiking clothes, backpacks on, posing on a forest path',
      caption: 'President, Strategy Manager and Director of Man & the Environment with the ERuDeF teams in Cameroon in 2012.',
    },
    list: {
      titleStrong: 'On three continents,',
      titleLight: 'one approach',
      lead: 'Protecting a species or a forest by creating a natural ingredient supply chain with local communities.',
      mapLabel: 'World map: countries where projects were carried out, from Colombia to Indonesia',
      pinLabel: 'See the projects: {country}',
      filterCountry: 'Filter by country',
      allCountries: 'All countries',
      countOne: '{count} project',
      countMany: '{count} projects',
      listLabel: 'Projects carried out',
      placeSeparator: ' and ',
      placeTodo: '[pays à confirmer]',
    },
    countries: {
      co: 'Colombia',
      ma: 'Morocco',
      sn: 'Senegal',
      ci: "Côte d'Ivoire",
      bf: 'Burkina Faso',
      gh: 'Ghana',
      cm: 'Cameroon',
      cd: 'D.R. Congo',
      mg: 'Madagascar',
      in: 'India',
      my: 'Malaysia',
      id: 'Indonesia',
    },
    projects: {
      tamarin: 'Saving the cotton-top tamarin with the Maya nut',
      saloum: "Encouraging women's entrepreneurship in the Saloum Delta",
      argan: 'Safeguarding the Saharan bee with women argan oil producers',
      balanites: 'The balanites supply chain to preserve the Sahelian massif of Korko',
      karite: "Shea and honey to safeguard Africa's large wildlife",
      'kwabre-tanoe': 'The Kwabre-Tanoé transboundary reserve to save 3 African primates from extinction',
      'nord-sud': 'An exemplary North-South partnership',
      'produits-foret': 'Adding value to forest products to improve the incomes of indigenous peoples',
      'cross-river': 'Palm oil to save the Cross River gorilla',
      dja: 'Plant butters to preserve the Dja reserve',
      oku: 'White honey and beeswax: two alternatives to save the Mount Oku forest',
      bonobo: 'Reconciling bonobo conservation and the economic development of local people',
      lemur: 'Supporting local development to save the greater bamboo lemur',
      loris: 'Fighting the extinction of lorises by creating sustainable incomes',
      tigre: 'Saving the Malayan tiger by restoring the Sungai Yu corridor',
      rotin: 'Supporting the sustainable use of rattan on the edge of Lore Lindu National Park',
    },
    followed: {
      titleStrong: 'What we follow',
      titleLight: 'today',
      lead: 'Man & the Environment has focused on long-term commitments, considered necessary to ensure that local communities can truly take ownership of sustainable environmental management programmes. Besides Madagascar, we mainly continue to follow:',
      photoTodo: '[photo à fournir]',
      tanzanieAlt: 'HISA logo, “Protection de la faune sauvage” (wildlife protection), above three elephants in the savannah',
      items: {
        burkina: {
          place: 'Burkina Faso',
          title: 'Elephant corridors',
          text: 'Support for women and young people in the Nazinga-Kaboré Tambi corridor.',
        },
        tanzanie: {
          place: 'Tanzania',
          title: 'Elephant corridors',
          text: 'The first forest shared by people and elephants, created by the French and Tanzanian NGOs HISA and SANA. Our part: helping women and young people in the Gongo corridor to add value to local natural resources that do not compete with elephants.',
        },
        cameroun: {
          place: 'Cameroon',
          title: 'Chimpanzee corridor',
          text: 'Support for women and young people in the Deng Deng – Dja corridor.',
        },
        perou: {
          place: 'Peru',
          title: 'Casitas forests',
          text: 'Adding value to Palo Santo to conserve the forests.',
        },
      },
    },
    cta: {
      titleStrong: 'Supporting our projects',
      titleLight: 'means acting with local communities.',
      text: 'Your donation directly funds action in the field.',
      projects: 'All our projects',
    },
  },

  // TODO traduction : fiches projet encore en français (copie de fr.ts).
  projet: structuredClone(fr.projet),

  // TODO traduction : page « Stages et volontariat » encore en français (copie de fr.ts).
  stages: structuredClone(fr.stages),

  // TODO traduction : page « Entreprises » encore en français (copie de fr.ts).
  entreprises: structuredClone(fr.entreprises),

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

  // TODO traduction : page « Galerie photos » encore en français (copie de fr.ts).
  galerie: structuredClone(fr.galerie),

  // TODO traduction : page « Rapports et études » encore en français (copie de fr.ts).
  rapports: structuredClone(fr.rapports),

  // TODO traduction : page « Contact » encore en français (copie de fr.ts).
  contact: structuredClone(fr.contact),

  // TODO traduction : page « Particuliers » encore en français (copie de fr.ts).
  particuliers: structuredClone(fr.particuliers),

  notFound: {
    title: 'Page not found',
    description: 'This page does not exist or has moved.',
    eyebrow: 'Error 404',
    titleStrong: 'This page',
    titleLight: 'cannot be found.',
    text: 'The link may be out of date, or the address may contain a typo. Start again from the home page or one of the pages below.',
    home: 'Back to the home page',
    linksTitle: 'Useful pages',
    links: {
      projets: { title: 'Our projects', text: 'Conservation, reforestation, health, aromatic plants: our work in the field.' },
      don: { title: 'Donate', text: 'Support communities and forests in Madagascar and Burkina Faso.' },
      contact: { title: 'Contact', text: 'A question, or a broken link to report? Write to us.' },
    },
  },

  serverError: {
    title: 'Server error',
    description: 'The site is having a temporary problem.',
    eyebrow: 'Server error',
    titleStrong: 'The site is having',
    titleLight: 'a problem.',
    text: 'This is not your fault: our server is not responding properly right now. Please try again in a few minutes.',
    retry: 'Try again',
    home: 'Back to the home page',
    contact: 'If the problem persists, write to us at ',
  },

  question: {
    open: 'Got a question?',
    title: 'Got a question?',
    close: 'Close',
    hostSays: 'writes:',
    you: 'You',
    youSay: 'You wrote:',
    greeting: 'Hello! Ask us your question and we will reply by email within a few days.',
    required: 'All fields are required.',
    message: 'Your question',
    email: 'Your email address',
    emailPlaceholder: 'name@example.com',
    emailHelp: 'Only used to reply to you.',
    consent: 'I agree that my personal data will be used only to reply to my request.',
    privacyLink: 'Read the privacy policy',
    trap: 'Do not fill in this field',
    submit: 'Send',
    errors: {
      message: 'Write your question.',
      email: 'Enter your email address.',
      emailInvalid: 'This email address looks incomplete. Example: name@example.com',
      consentement: 'Tick this box so that we can reply to you.',
      tooLong: 'This text is too long: {max} characters maximum.',
    },
    sending: 'Sending…',
    received: 'Message received! We will reply by email within a few days.',
    failed: 'The message could not be sent. You can send it from your email app: ',
    failedLink: 'open a pre-filled email',
    mailSubject: 'Quick question',
  },
};

export default en;
