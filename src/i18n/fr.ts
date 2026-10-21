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
    main: ["L'ONG", 'Nos sites', 'Nos projets', "S'engager", 'Ressources', 'Contact'],
    footer: [
      { title: "L'ONG", links: ['Notre approche', 'Notre histoire', 'Partenaires et bailleurs'] },
      { title: 'Nos sites', links: ['Madagascar', 'Burkina Faso'] },
      {
        title: 'Nos projets',
        links: ['Conservation', 'Reboisement', 'Santé', 'Plantes aromatiques', 'Tous les projets'],
      },
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
      link: 'Tous nos sites',
      madagascar: {
        name: 'Madagascar',
        /** {count} : nombre de sites (collection « sites »). */
        description: "{count} sites protégés avec les communautés locales, d'une richesse exceptionnelle en espèces endémiques.",
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
  // Page pays Madagascar. Contenu de la maquette PaysMadagascar (canvas v81) ; chiffres dans src/data/chiffres.ts.
  madagascar: {
    title: 'Madagascar',
    description:
      "L'Homme & l'Environnement est à l'origine de plusieurs zones protégées à Madagascar : 6 sites, d'une richesse exceptionnelle en espèces endémiques, gérés avec les communautés locales.",
    hero: {
      titleStrong: 'Madagascar,',
      titleLight: "terre de vie et d'avenir.",
      lead: "L'Homme & l'Environnement est à l'origine de la création de plusieurs zones qui n'étaient pas protégées, malgré leur richesse exceptionnelle en espèces endémiques. Aujourd'hui, plusieurs projets se transmettent aux acteurs locaux : la preuve que l'approche biodiversité, économie et responsabilisation fonctionne.",
      /** {count} : nombre de sites. */
      cta: 'Découvrir nos {count} sites',
      imageAlt: 'Vue aérienne de forêts et de mangroves au bord de la mer, Madagascar',
    },
    statsLabel: 'Madagascar en chiffres',
    stats: [
      {
        unit: 'ha',
        text: 'protégés sur 6 sites, de la forêt humide aux mangroves.',
        illustrationLabel: 'Surface protégée',
      },
      {
        unit: undefined,
        text: 'bénéficiaires directs de nos actions, sur environ 5 700 habitants.',
        illustrationLabel: 'Part des habitants bénéficiaires',
      },
      {
        unit: undefined,
        text: 'espèces animales menacées présentes sur nos sites.',
        illustrationLabel: 'Espèces menacées',
      },
    ],
    sites: {
      /** {count} : nombre de sites. */
      titleStrong: 'Nos {count} sites',
      titleLight: 'à Madagascar',
      lead: 'Des forêts uniques au monde, protégées avec les communautés locales qui en vivent. Choisissez un site sur la carte.',
      figuresMissing: '[Chiffres à fournir]',
      hectares: 'ha',
      link: 'Voir la fiche',
      /** Libellés de la carte du pays. */
      map: {
        label: 'Carte des sites à Madagascar',
        capital: 'Antananarivo',
        channel: 'Canal du Mozambique',
        ocean: 'Océan Indien',
        north: 'N',
      },
    },
    projects: {
      titleStrong: 'Nos projets',
      titleLight: 'à Madagascar',
      lead: 'Chaque projet allie protection de la nature et revenus pour les communautés, sur un ou plusieurs de nos sites.',
      sitesLabel: 'Sites',
    },
    cta: {
      titleStrong: 'Soutenir Madagascar,',
      titleLight: "c'est protéger des espèces uniques au monde.",
      text: 'Votre don finance directement les actions sur les sites.',
      field: 'Venir sur le terrain',
    },
  },
  // Fiche site (gabarit commun, maquette FicheVohimana). Le contenu propre à chaque site est dans src/content/sites.
  site: {
    /** {name} : nom du site. Titre de la page (balise title). */
    title: '{name}, Madagascar',
    /** Pastille du hero : pays · région. */
    country: 'Madagascar',
    /** Légende de la photo du hero ; {credit} : crédit photo. */
    photoCaption: '{name}, Madagascar — {credit}',
    /** Valeur ou texte pas encore fourni par l'ONG (affiché tel quel sur la page). */
    missing: '[à fournir]',
    photoCreditMissing: '[crédit photo à fournir]',
    photoMissing: '[Photo à fournir]',
    donate: 'Soutenir {name}',
    field: 'Venir sur le terrain',
    statsLabel: '{name} en chiffres',
    /** Unités accolées aux chiffres (les autres chiffres n'en ont pas). */
    units: { hectares: 'ha', years: 'ans' } as Partial<Record<string, string>>,
    /** Texte des chiffres par défaut (site sans champ `figures`). */
    defaultFigures: [
      { key: 'hectares', text: 'protégés sur le site.' },
      { key: 'years', text: 'de présence sur le site.' },
      { key: 'beneficiaries', text: 'bénéficiaires directs.' },
    ],
    storyMissing: { titleStrong: "L'histoire", titleLight: 'du site.' },
    location: 'Localisation',
    habitat: 'Milieu',
    /** {name}, {region} : site mis en avant sur la carte. */
    mapLabel: 'Carte de Madagascar : {name} ({region}), parmi nos autres sites',
    species: {
      titleStrong: 'Les espèces',
      titleLight: 'que nous protégeons',
      /** Statuts de la liste rouge de l'UICN. */
      status: {
        CR: 'En danger critique · UICN CR',
        EN: 'En danger · UICN EN',
        VU: 'Vulnérable · UICN VU',
        NT: 'Quasi menacée · UICN NT',
        LC: 'Préoccupation mineure · UICN LC',
        endemique: 'Endémique',
      },
      /** Lien vers la page de la photo sur Wikimedia Commons. */
      source: 'Wikimedia Commons',
    },
    actions: {
      titleStrong: 'Nos actions',
      titleLight: 'sur le site',
      link: 'Voir le projet',
    },
    people: {
      titleStrong: 'Ceux qui font',
      /** {name} : nom du site. */
      titleLight: 'vivre {name}',
      partners: 'Partenaires du site',
    },
    /** Carte d'appel par défaut (site sans champ `cta`). */
    cta: {
      titleStrong: 'Soutenir {name},',
      titleLight: "c'est protéger des espèces uniques au monde.",
      text: 'Votre don finance directement les actions sur le site.',
    },
    nav: {
      label: 'Autres sites',
      all: 'Tous les sites à Madagascar',
      /** {name} : site suivant. */
      next: 'Site suivant : {name}',
    },
  },
};

export default fr;
