/**
 * Textes en français (langue par défaut).
 * Toute chaîne visible ou lue par un lecteur d'écran passe par ce fichier ;
 * en.ts doit avoir exactement la même forme (vérifié par TypeScript).
 */
const fr = {
  meta: {
    siteName: "L'Homme & l'Environnement",
    homeDescription:
      "ONG fondée en 1993, L'Homme & l'Environnement montre à Madagascar et au Burkina Faso que lutter contre la pauvreté et préserver la biodiversité peuvent aller de pair.",
    skipLink: 'Aller au contenu',
  },

  ui: {
    homeLink: "L'Homme & l'Environnement, accueil",
    logoAlt: "L'Homme & l'Environnement",
    donate: 'Faire un don',
    mainNav: 'Navigation principale',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    langSwitcher: 'Choix de la langue',
    otherLanguage: 'English version',
    sitemap: 'Plan du site',
    social: 'Réseaux sociaux',
    socialLinkedin: "L'Homme & l'Environnement sur LinkedIn",
    socialFacebook: "L'Homme & l'Environnement sur Facebook",
    footerPitch: 'Préserver la biodiversité et soutenir le développement des populations locales, depuis 1993.',
    copyright: "© L'Homme & l'Environnement · Photos © Day Nabih, © Marc Gansuana, © Langaha Be",
    statsLabel: 'Chiffres clés',
    scrollHint: 'Faire défiler',
    breadcrumb: "Fil d'Ariane",
    breadcrumbHome: 'Accueil',
    newsletterEmailLabel: 'Votre adresse email',
    newsletterPlaceholder: 'Votre adresse email',
    newsletterSubmit: "Je m'inscris",
    newsletterPending: "Merci. Les inscriptions ouvriront très bientôt : votre adresse n'a pas encore été enregistrée.",
  },

  nav: {
    main: ["L'ONG", 'Nos actions', "S'engager", 'Ressources', 'Contact'],
    footer: [
      { title: "L'ONG", links: ['Notre approche', 'Notre histoire', 'Partenaires et bailleurs'] },
      { title: 'Nos actions', links: ['Madagascar', 'Burkina Faso', 'Projets soutenus', 'Autonomisation'] },
      { title: "S'engager", links: ['Particuliers', 'Venir sur le terrain', 'Entreprises'] },
      { title: 'Ressources', links: ['Rapports et études', 'Galerie photos', 'Contact'] },
    ],
    legal: ['Mentions légales', 'Confidentialité'],
  },

  home: {
    hero: {
      eyebrow: 'ONG · Madagascar · Burkina Faso · depuis 1993',
      titleStrong: 'Les solutions',
      titleLight: 'se trouvent au sein du vivant.',
      lead: 'Nous montrons que lutter contre la pauvreté et préserver la biodiversité peuvent aller de pair, avec et pour les populations locales.',
      secondaryCta: 'Découvrir nos actions',
      imageAlt: 'Une artisane tresse des fibres végétales devant sa maison, Vohimana',
    },
    // « 400 000 arbres » est un chiffre de maquette À CONFIRMER avec l'ONG.
    stats: [
      {
        unit: 'ans',
        text: 'de présence sur le terrain, à Madagascar et au Burkina Faso.',
        illustrationLabel: '30 traits, un par année de présence',
      },
      {
        unit: undefined,
        text: "arbres plantés en 10 ans d'expériences pilotes, en soutenant d'abord la biodiversité.",
        illustrationLabel: "Barres en croissance du nombre d'arbres plantés",
      },
      {
        unit: 'ha',
        text: 'sanctuarisés, gérés avec les communautés locales.',
        illustrationLabel: '5 pastilles, chacune représentant 1 000 hectares',
      },
    ],
    approach: {
      titleStrong: 'Notre approche :',
      titleLight: "la nature, l'économie et les hommes, ensemble.",
      link: 'Lire notre philosophie',
      pillars: [
        {
          title: 'Biodiversité',
          text: "Créer et protéger des zones d'une richesse exceptionnelle en espèces endémiques, qui n'étaient pas protégées.",
          imageAlt: 'Souimanga se nourrissant sur une fleur rouge, Vohimana',
        },
        {
          title: 'Économie locale',
          text: "Quand on gagne sa vie grâce aux feuilles d'un arbre, on s'assure qu'il ne sera pas coupé. Des filières qui font vivre la forêt.",
          imageAlt: "Deux femmes dansent lors d'une fête de village, Ambohidravy",
        },
        {
          title: 'Responsabilisation',
          text: "Donner les clés aux acteurs locaux, jusqu'à leur transmettre les projets pour une protection durable.",
          imageAlt: 'Des élèves travaillent dans une salle de classe en bois, Vohimana',
        },
      ],
    },
    actions: {
      title: 'Où nous agissons',
      link: 'Toutes nos actions',
      madagascar: {
        name: 'Madagascar',
        description: "À l'origine de plusieurs zones protégées, d'une richesse exceptionnelle en espèces endémiques.",
      },
      burkina: {
        title: 'Burkina Faso',
        text: "Protéger les éléphants d'Afrique de l'Ouest avec les populations voisines.",
        imageAlt: "Un troupeau d'éléphants traverse une piste de terre rouge, Burkina Faso",
      },
      supported: {
        title: 'Projets soutenus',
        text: 'Nicaragua, Cameroun, Kenya, Sénégal, Cambodge.',
        imageAlt: 'Oiseau dans un palmier chargé de fruits, Nicaragua',
      },
    },
    engage: {
      eyebrow: "S'engager",
      titleStrong: 'Chacun peut agir,',
      titleLight: 'à sa mesure.',
      cards: [
        {
          eyebrow: 'Particuliers',
          title: 'Donner',
          text: 'Soutenez directement les projets de terrain, ponctuellement ou chaque mois.',
          cta: 'Faire un don',
        },
        {
          eyebrow: 'Particuliers',
          title: 'Venir sur le terrain',
          text: 'Écotourisme, congés solidaires, volontariat ou stage : des séjours utiles.',
          cta: 'Voir les formules',
        },
        {
          eyebrow: 'Entreprises',
          title: 'Devenir Net Positive Impact',
          text: 'Reboisement, CO² et préservation : allez au-delà de la réduction de vos impacts.',
          cta: 'Découvrir le programme',
        },
      ],
    },
    partners: {
      title: 'Ils nous font confiance',
    },
    newsletter: {
      titleStrong: 'Des nouvelles du terrain,',
      titleLight: 'quelques fois par an.',
      text: 'Résultats des projets, départs de volontaires, appels à soutien.',
    },
  },
  // Page pays Madagascar. Les crochets et « [X] familles » sont des textes de maquette À COMPLÉTER avec l'ONG.
  madagascar: {
    title: 'Madagascar',
    description:
      "Depuis 1993, L'Homme & l'Environnement protège à Madagascar des forêts d'une richesse unique, avec les communautés qui en vivent, jusqu'à leur en confier la gestion.",
    hero: {
      titleStrong: 'Madagascar,',
      titleLight: "une nature qui n'existe nulle part ailleurs.",
      lead: "Depuis 1993, nous protégeons à Madagascar des forêts d'une richesse unique, avec les communautés qui en vivent, jusqu'à leur en confier la gestion.",
      cta: 'Découvrir nos sites',
      imageAlt: 'Vue aérienne de forêts et de mangroves au bord de la mer, Madagascar',
    },
    statsLabel: 'Madagascar en chiffres',
    stats: [
      {
        unit: 'sites',
        text: 'protégés et accompagnés, de la forêt humide aux mangroves.',
        illustrationLabel: '5 sites',
      },
      {
        unit: '%',
        text: "des espèces de l'île n'existent nulle part ailleurs au monde.",
        illustrationLabel: 'Part des espèces endémiques',
      },
      {
        unit: 'familles',
        text: 'impliquées dans la gestion des réserves et les filières locales.',
        illustrationLabel: 'Familles impliquées',
      },
    ],
    sites: {
      titleStrong: 'Nos 5 sites',
      titleLight: 'à Madagascar',
      lead: 'Chaque site a sa fiche : ses enjeux, nos actions et les résultats obtenus avec les habitants.',
      link: 'Voir la fiche du site',
      status: {
        historique: 'Site historique',
        transmis: 'Transmis aux acteurs locaux',
        'en-cours': 'En cours',
      },
    },
    method: {
      titleStrong: 'Comment nous agissons',
      titleLight: "sur l'île",
      imageAlt: 'Des élèves travaillent dans une salle de classe en bois, Vohimana',
      steps: [
        {
          title: 'Protéger',
          text: "Faire reconnaître et gérer des zones riches en espèces endémiques qui n'étaient pas protégées.",
        },
        {
          title: 'Valoriser',
          text: 'Créer des revenus liés à la forêt vivante : écotourisme, huiles essentielles avec Aroma Forest.',
        },
        {
          title: 'Transmettre',
          text: "Former et accompagner les acteurs locaux jusqu'à leur confier la gestion des sites.",
        },
      ],
    },
    cta: {
      titleStrong: 'Soutenir Madagascar,',
      titleLight: "c'est protéger des espèces uniques au monde.",
      text: 'Votre don finance directement les actions sur les sites.',
      field: 'Venir sur le terrain',
    },
  },
};

export default fr;
