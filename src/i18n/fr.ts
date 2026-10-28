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
    submenu: 'Sous-menu',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    langSwitcher: 'Choix de la langue',
    themeToDark: 'Passer en mode sombre',
    themeToLight: 'Passer en mode clair',
    themeLabel: 'Apparence',
    themeAuto: 'Auto',
    themeLight: 'Clair',
    themeDark: 'Sombre',
    otherLanguage: 'English version',
    sitemap: 'Plan du site',
    social: 'Réseaux sociaux',
    socialLinkedin: "L'Homme & l'Environnement sur LinkedIn",
    socialFacebook: "L'Homme & l'Environnement sur Facebook",
    footerPitch: 'Préserver la biodiversité et soutenir le développement des populations locales, depuis 1993.',
    stampText: 'DEPUIS 1993 · MADAGASCAR · BURKINA FASO · ',
    stampLabel: "L'Homme & l'Environnement, depuis 1993, Madagascar et Burkina Faso",
    copyright: "© L'Homme & l'Environnement · Photos © Day Nabih, © Marc Gansuana, © Langaha Be",
    statsLabel: 'Chiffres clés',
    scrollHint: 'Faire défiler',
    breadcrumb: "Fil d'Ariane",
    breadcrumbHome: 'Accueil',
    newsletterEmailLabel: 'Votre adresse email',
    newsletterPlaceholder: 'Votre adresse email',
    newsletterSubmit: "Je m'inscris",
    shareFacebook: 'Partager sur Facebook',
    shareLinkedin: 'Partager sur LinkedIn',
    shareWhatsapp: 'Partager sur WhatsApp',
    shareEmail: 'Partager par email',
    shareCopy: 'Copier le lien',
    shareCopied: 'Lien copié',
    newsletterPending: "Merci. Les inscriptions ouvriront très bientôt : votre adresse n'a pas encore été enregistrée.",
  },

  nav: {
    main: ["L'ONG", 'Nos sites', 'Nos projets', "S'engager", 'Ressources', 'Contact'],
    footer: [
      { title: "L'ONG", links: ['Notre approche', 'Notre histoire', 'Équipe', 'Partenaires et bailleurs'] },
      { title: 'Nos sites', links: ['Madagascar', 'Burkina Faso'] },
      {
        title: 'Nos projets',
        links: ['Conservation', 'Reboisement', 'Santé', 'Plantes aromatiques', 'Tous les projets'],
      },
      { title: "S'engager", links: ['Particuliers', 'Stages et volontariat', 'Entreprises'] },
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
    },
    cta: {
      titleStrong: 'Soutenir Madagascar,',
      titleLight: "c'est protéger des espèces uniques au monde.",
      text: 'Votre don finance directement les actions sur les sites.',
      field: 'Venir sur le terrain',
    },
  },
  // Page pays Burkina Faso (maquette PaysBurkina). Chiffres dans src/data/chiffres.ts (BURKINA).
  burkina: {
    title: 'Burkina Faso',
    description:
      "Au Burkina Faso, L'Homme & l'Environnement agit à Kollo et Guiaro avec les communautés locales : eau potable solaire, cultures durables et éducation environnementale.",
    hero: {
      titleStrong: 'Burkina Faso,',
      titleLight: "l'eau et la terre au cœur du projet.",
      lead: "Au Burkina Faso, L'Homme & l'Environnement agit sur un site, Kollo et Guiaro, avec les communautés locales : l'accès à l'eau potable grâce à l'énergie solaire, des cultures durables pour remplacer la culture sur brûlis et l'éducation environnementale dans les écoles.",
      // TODO ONG : texte à fournir.
      text: "[Texte à compléter : année de début de l'action, contexte du pays.]",
      cta: 'Découvrir le site',
      imageAlt: "Un troupeau d'éléphants traverse une piste de terre rouge, Burkina Faso",
    },
    statsLabel: 'Burkina Faso en chiffres',
    stats: [
      { unit: 'ha', text: 'protégés à Kollo et Guiaro.', illustrationLabel: 'Surface protégée' },
      {
        unit: undefined,
        text: "familles ayant accès à l'eau potable grâce à l'adduction solaire.",
        illustrationLabel: "Accès à l'eau",
      },
      { unit: undefined, text: 'élèves sensibilisés dans les écoles.', illustrationLabel: 'Élèves sensibilisés' },
    ],
    sites: {
      titleStrong: 'Notre site',
      titleLight: 'au Burkina Faso',
      lead: "Un site, Kollo et Guiaro, où nous agissons avec les familles pour l'eau, la terre et l'école.",
      map: {
        label: 'Carte du site au Burkina Faso',
        capital: 'Ouagadougou',
        north: 'N',
        /** Pays voisins, dans l'ordre des positions de BurkinaMap. */
        neighbours: ['Mali', 'Niger', 'Ghana', "Côte d'Ivoire", 'Togo', 'Bénin'],
        note: 'Position indicative, à confirmer.',
      },
    },
    projects: {
      titleStrong: 'Nos projets',
      titleLight: 'au Burkina Faso',
      lead: "Trois projets menés avec les familles de Kollo et Guiaro, pour l'eau, la terre et l'école.",
    },
    cta: {
      titleStrong: 'Soutenir le Burkina Faso,',
      titleLight: "c'est sécuriser l'eau des familles de Kollo et Guiaro.",
      text: 'Votre don finance directement les actions sur le site.',
      projects: 'Tous nos projets',
    },
  },
  // Carte projet compacte (pages pays, fiches site).
  projectCard: {
    link: 'Voir le projet',
    sitesLabel: 'Sites',
  },
  // Fiche site (gabarit commun, maquette FicheVohimana). Le contenu propre à chaque site est dans src/content/sites.
  site: {
    /** {name} : nom du site. Titre de la page (balise title). */
    title: '{name}, Madagascar',
    /** Pastille du hero : pays · région. */
    country: 'Madagascar',
    /** Valeur ou texte pas encore fourni par l'ONG (affiché tel quel sur la page). */
    missing: '[à fournir]',
    photoMissing: '[Photo à fournir]',
    donate: 'Soutenir {name}',
    field: 'Venir sur le terrain',
    statsLabel: '{name} en chiffres',
    /** Unités accolées aux chiffres (les autres chiffres n'en ont pas). */
    units: {
      hectares: 'ha',
      naturalForest: 'ha',
      mangrove: 'ha',
      conservationArea: 'ha',
      reforested: 'ha',
      years: 'ans',
    } as Partial<Record<string, string>>,
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
    },
    actions: {
      titleStrong: 'Nos actions',
      titleLight: 'sur le site',
    },
    people: {
      titleStrong: 'Ceux qui font',
      /** {name} : nom du site. */
      titleLight: 'vivre {name}',
      partners: 'Partenaires du site',
      /** Lu par les lecteurs d'écran après le nom d'un partenaire avec lien. */
      newTab: '(nouvel onglet)',
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
    /**
     * Textes propres aux fiches des sites du Burkina Faso (maquette FicheKollo), à la place
     * des textes ci-dessus. `heroActions` : bouton du hero vers les actions du site ;
     * `projects` : second bouton de la carte d'appel ; `nav.other` : lien vers l'autre pays
     * quand le pays n'a qu'un site.
     */
    burkina: {
      title: '{name}, Burkina Faso',
      country: 'Burkina Faso',
      mapLabel: 'Carte du Burkina Faso : {name} ({region})',
      heroActions: 'Nos actions sur le site',
      projects: 'Tous nos projets',
      species: {
        titleStrong: 'Faune et flore',
        titleLight: 'du site',
      },
      nav: {
        all: 'Le Burkina Faso',
        other: 'Nos sites à Madagascar',
      },
    },
  },
  // Page « Nos projets » (maquette NosProjets). Les projets sont dans src/content/projets.
  projets: {
    title: 'Nos projets',
    description:
      'Protection de la nature et revenus pour les habitants : les projets de L\'Homme & l\'Environnement, menés avec les communautés locales à Madagascar et au Burkina Faso.',
    hero: {
      titleStrong: 'Nos projets,',
      titleLight: 'au service du vivant et des communautés.',
      lead: 'Chaque projet allie protection de la nature et revenus pour les habitants. Ils sont menés avec les communautés locales, sur nos sites à Madagascar et au Burkina Faso.',
      imageAlt: 'Réunion des habitants sous un arbre, village de Kollo, Burkina Faso',
    },
    list: {
      titleStrong: 'Tous nos projets',
      titleLight: 'sur le terrain',
      /** {count} : nombre de projets affichés. */
      countOne: '{count} projet',
      countMany: '{count} projets',
      filterTheme: 'Filtrer par thème',
      filterCountry: 'Filtrer par pays',
      allThemes: 'Tous les projets',
      allCountries: 'Tous les pays',
      empty: 'Aucun projet pour ce filtre.',
      sitesLabel: 'Sites',
    },
    /** Libellés des thèmes (src/content.config.ts, PROJECT_THEMES). */
    themes: {
      conservation: 'Conservation',
      reboisement: 'Reboisement',
      sante: 'Santé',
      filieres: 'Filières durables',
      education: 'Éducation',
    },
    /** Libellés des pays (src/content.config.ts, COUNTRIES). */
    countries: {
      madagascar: 'Madagascar',
      'burkina-faso': 'Burkina Faso',
    },
    cta: {
      titleStrong: 'Venez voir nos projets',
      titleLight: 'sur le terrain.',
      text: 'Écovolontariat, séjours et visites : découvrez les projets avec les équipes locales, ou soutenez-les par un don.',
      field: 'Venir sur le terrain',
    },
  },
  // Fiche projet (gabarit commun, maquette FicheProjet). Le contenu propre à chaque projet est dans src/content/projets.
  projet: {
    /** Valeur ou texte pas encore fourni par l'ONG (affiché tel quel sur la page). */
    missing: '[à fournir]',
    photoMissing: '[Photo à fournir]',
    donate: 'Soutenir ce projet',
    /** Bouton secondaire du hero, projet mené sur un seul site avec fiche. {name} : nom du site. */
    site: 'Le site de {name}',
    statsLabel: 'Le projet en chiffres',
    /** Chiffres par défaut (projet sans champ `figures`) ; le premier est le nombre de sites du projet. */
    defaultFigures: {
      sitesOne: 'site où le projet est mené.',
      sitesMany: 'sites où le projet est mené.',
      beneficiaries: 'bénéficiaires directs.',
      start: 'année de lancement du projet.',
    },
    story: {
      eyebrow: 'Le projet',
      /** Titre affiché tant que le projet n'a pas de champ `story`. */
      missingTitle: '[Titre à fournir]',
    },
    steps: { titleStrong: 'Comment', titleLight: 'ça marche' },
    where: {
      titleStrong: 'Où se déroule',
      titleLight: 'le projet',
      /** Phrase par défaut (projet sans `whereLead`). {count} : nombre de sites. */
      leadOne: 'Le projet est mené sur un de nos sites.',
      leadMany: 'Le projet est mené sur {count} de nos sites.',
      /** Lien sous les sites de chaque pays. */
      all: {
        madagascar: 'Voir tous nos sites à Madagascar',
        'burkina-faso': 'Voir nos actions au Burkina Faso',
      },
    },
    partners: {
      title: 'Partenaires du projet',
      /** Lu par les lecteurs d'écran après le nom d'un partenaire avec lien. */
      newTab: '(nouvel onglet)',
    },
    others: {
      titleStrong: "D'autres projets",
      titleLight: 'à découvrir',
      all: 'Tous les projets',
    },
    /** Bandeau de don par défaut (projet sans champ `cta`). */
    cta: {
      titleStrong: 'Soutenir ce projet,',
      titleLight: "c'est agir avec les communautés.",
      text: 'Votre don finance directement les actions du projet sur le terrain.',
    },
    field: 'Venir sur le terrain',
  },
  // Page « Stages et volontariat » (maquette StagesVolontariat, texte VSC de l'ONG).
  stages: {
    title: 'Stages et volontariat',
    description:
      "Volontariat, stage ou recherche à Madagascar : rejoignez les projets de conservation de L'Homme & l'Environnement, aux côtés des communautés locales.",
    hero: {
      tags: ['Volontariat', 'Stage', 'Recherche'],
      titleStrong: 'Engagez-vous',
      titleLight: 'sur le terrain à Madagascar.',
      lead: "Chaque année, nous accueillons des volontaires, des stagiaires et des chercheurs, malgaches comme internationaux. Vous travaillez aux côtés des communautés locales, au cœur de l'un des plus grands hotspots de biodiversité de la planète.",
      text: 'Étudiant, jeune diplômé, chercheur confirmé ou simplement motivé : nous construisons avec vous une mission adaptée à votre profil et aux besoins du terrain.',
      apply: 'Candidater',
      faq: 'Questions fréquentes',
      imageAlt: "Volontaires et équipe de l'ONG partageant un repas sur le terrain",
    },
    why: {
      titleStrong: 'Pourquoi',
      titleLight: 'nous rejoindre ?',
      cards: [
        {
          title: 'Des projets utiles',
          text: "Depuis plus de vingt ans, nous préservons la biodiversité tout en améliorant les conditions de vie des habitants. Vous participez à de vrais projets de conservation, pas à des activités montées pour l'occasion.",
        },
        {
          title: 'Une expérience à taille humaine',
          text: "Vous rejoignez une petite équipe où chacun compte. Cette proximité favorise les échanges, l'autonomie et un accompagnement personnalisé tout au long de votre mission.",
        },
      ],
      /** Mosaïque de photos, dans l'ordre de la maquette. */
      photos: [
        'Visite guidée en forêt avec un guide local',
        'Classe dans un village voisin de Vohimana',
        'Vari noir et blanc dans la canopée',
        'Lac de cratère du Mont Passot au petit matin, Nosy Be',
      ],
    },
    missions: {
      titleStrong: 'Nos missions',
      titleLight: 'sur le terrain',
      text: "Les activités reflètent la diversité des actions de l'ONG. Selon votre profil, votre projet et vos envies, vous rejoignez une mission déjà planifiée ou vous construisez avec votre tuteur une mission sur mesure, adaptée à votre cursus et aux besoins du terrain.",
      noteTitle: 'Bientôt : notre catalogue de missions',
      noteText:
        'Des missions prêtes à rejoindre, par sujet, site et durée, seront publiées ici une fois notre programme scientifique finalisé. En attendant, écrivez-nous : nous construisons la mission avec vous.',
      items: [
        'Suivi de la biodiversité',
        'Inventaires faune et flore',
        'Analyse de données',
        'Cartographie',
        "Éducation à l'environnement",
        'Projets communautaires et socio-éducatifs',
      ],
    },
    sites: {
      titleStrong: 'Nos sites',
      titleLight: "d'intervention",
      lead: 'Les missions se déroulent surtout dans la réserve de Vohimana, véritable laboratoire vivant de conservation, mais aussi sur nos autres sites. Chacun a ses enjeux écologiques et humains, et offre une expérience de terrain unique.',
    },
    conditions: {
      titleStrong: 'Conditions',
      titleLight: 'de participation',
      lead: "Les missions demandent autonomie, curiosité et capacité d'adaptation, et parfois une bonne condition physique.",
      items: [
        { title: '18 ans ou plus', text: 'Les missions sont ouvertes à toute personne majeure.' },
        { title: '4 semaines minimum', text: "Sans limite de durée, toute l'année." },
        {
          title: 'Toutes nationalités, toutes disciplines',
          text: "Dès qu'un projet cohérent peut être construit, au départ de Madagascar ou de l'étranger.",
        },
        { title: 'Chercheurs bienvenus', text: 'Pour développer un projet ou rejoindre un programme en cours.' },
      ],
    },
    fees: {
      titleStrong: 'Frais',
      titleLight: 'de mission',
      texts: [
        'Nos missions sont du volontariat, des stages ou de la recherche : elles ne sont pas rémunérées. Les frais varient selon le site, la durée et la logistique : certains sites très isolés demandent des moyens de transport spécifiques.',
        'Avant votre départ, vous recevez un budget prévisionnel détaillé. Pour les participants qui vivent déjà à Madagascar, les modalités sont étudiées au cas par cas.',
      ],
      example: 'À titre indicatif, à Vohimana',
      amount: '≈ 700 €',
      period: 'par mois',
      included: 'Compris',
      includedItems: [
        "L'hébergement et la restauration en pension complète",
        'Les transports sur place',
        "Les frais de coordination et d'encadrement",
        'Le matériel spécifique, selon le sujet',
        'Les dépenses courantes de la vie sur le terrain',
      ],
      excluded: 'Non compris',
      excludedItems: ["Le billet d'avion international", 'Le visa', "L'assurance voyage (obligatoire)"],
    },
    apply: {
      titleStrong: 'Candidater,',
      titleLight: "à tout moment de l'année.",
      text: "Que vous viviez à Madagascar ou à l'étranger, nous étudions chaque candidature pour vous proposer des modalités adaptées. Vous êtes chercheur ? Écrivez-nous directement pour présenter votre projet.",
      button: 'Envoyer ma candidature',
      steps: [
        {
          title: 'Envoyez votre dossier',
          text: 'Votre CV, une lettre de motivation, vos dates de disponibilité et la durée souhaitée.',
        },
        {
          title: 'Échangeons ensemble',
          text: 'Un entretien pour construire une mission adaptée à votre profil et à nos besoins.',
        },
        {
          title: 'Préparez votre départ',
          text: "Nous vous accompagnons à chaque étape, jusqu'à votre arrivée à Madagascar.",
        },
      ],
    },
    faq: {
      titleStrong: 'Questions',
      titleLight: 'fréquentes',
      /** {email} : adresse de candidature, affichée en lien. */
      items: [
        {
          question: 'Qui peut nous rejoindre ?',
          answer:
            'Toute personne majeure souhaitant s\'investir dans un projet de conservation à Madagascar : étudiant, jeune diplômé, professionnel en reconversion ou chercheur confirmé. Nous étudions chaque candidature pour construire une mission adaptée à votre profil.',
        },
        {
          question: 'Dois-je avoir des compétences spécifiques ?',
          answer:
            "Pas nécessairement. Certaines missions demandent des connaissances particulières, d'autres sont accessibles à toute personne motivée, autonome et prête à apprendre. Nous cherchons avant tout des personnes impliquées, curieuses et capables de s'adapter au terrain.",
        },
        {
          question: "Quelle est la durée minimale d'une mission ?",
          answer:
            "Au moins quatre semaines. C'est le temps qu'il faut pour découvrir nos projets, prendre ses marques et apporter une contribution vraiment utile.",
        },
        {
          question: 'À quelle période puis-je venir ?',
          answer:
            "Toute l'année. Chaque saison offre des opportunités différentes selon les espèces étudiées, les projets en cours et le climat.",
        },
        {
          question: 'Sur quels sites puis-je être affecté ?',
          answer:
            'Principalement sur la réserve de Vohimana, mais aussi sur nos autres sites de conservation selon les besoins des projets.',
        },
        {
          question: 'Où serai-je hébergé ?',
          answer:
            "Selon votre mission : à Antananarivo près du siège de l'ONG, dans une maison d'hôtes partenaire, au Relais du Naturaliste à Vohimana, dans un écolodge partenaire ou en bivouac sur les sites les plus isolés.",
        },
        {
          question: 'Les missions sont-elles ouvertes aux Malgaches ?',
          answer:
            "Oui. Nos programmes sont ouverts aux nationaux comme aux internationaux. L'accueil, l'hébergement et la participation financière sont adaptés à votre lieu de résidence, à votre statut et à votre mission.",
        },
        {
          question: 'Les missions sont-elles rémunérées ?',
          answer:
            "Non. Il s'agit de volontariat, de stages ou de recherche. Vous prenez en charge votre voyage et vos frais de séjour, dont une participation aux frais de coordination qui finance l'encadrement et nos programmes.",
        },
        {
          question: 'Quels sont les frais à prévoir ?',
          answer:
            "Ils dépendent de la durée et du site. À titre indicatif, comptez environ 700 € pour un mois à Vohimana, hors billet d'avion. Ce budget couvre l'hébergement, la restauration, les transports sur place, la coordination et l'encadrement. Vous recevez un budget détaillé avant votre départ.",
        },
        {
          question: 'Dois-je souscrire une assurance ?',
          answer:
            "Oui. Une assurance couvrant les frais médicaux à l'étranger et le rapatriement sanitaire est obligatoire. Nous vous indiquons les assurances adaptées à votre mission.",
        },
        {
          question: 'Dois-je être vacciné ?',
          answer:
            "Aucun vaccin n'est obligatoire pour entrer à Madagascar, mais plusieurs sont fortement recommandés, et un traitement préventif contre le paludisme peut être conseillé. Nous vous transmettons toutes les informations avant le départ.",
        },
        {
          question: 'Comment préparer ma mission ?',
          answer:
            'Une fois votre candidature acceptée, nous construisons votre mission avec vous lors de plusieurs échanges : objectifs, aspects techniques, voyage, visa, assurances, vaccins, logistique et arrivée.',
        },
        {
          question: 'Comment serai-je accompagné sur le terrain ?',
          answer:
            "Par les équipes locales de L'Homme & l'Environnement et par votre tuteur, avec selon la mission l'appui de guides locaux, de chercheurs, de techniciens ou de partenaires de l'ONG.",
        },
        {
          question: 'Comment candidater ?',
          answer:
            "Envoyez votre CV, une lettre de motivation, vos dates de disponibilité et la durée souhaitée à {email}. Après un premier échange, nous construisons ensemble une mission adaptée à votre profil, puis nous vous accompagnons jusqu'à votre arrivée à Madagascar.",
        },
      ],
    },
    cta: {
      titleStrong: 'Prêt à nous rejoindre',
      titleLight: 'sur le terrain ?',
      text: "Envoyez votre candidature à tout moment de l'année, ou posez-nous d'abord vos questions.",
      apply: 'Envoyer ma candidature',
      ask: 'Poser une question',
    },
  },
  // Page « Entreprises » (S'engager, maquettes Entreprises / EntreprisesMobile). « [à …] » : à fournir par l'ONG.
  entreprises: {
    title: 'Entreprises',
    description:
      "Mécénat financier, mécénat de compétences ou programme Net Positive Impact : engagez votre entreprise avec L'Homme & l'Environnement pour la biodiversité et les communautés locales.",
    hero: {
      titleStrong: 'Engager votre entreprise',
      titleLight: 'pour le vivant.',
      lead: 'Depuis 1993, nous associons des entreprises à la protection de la biodiversité avec les communautés locales. Mécénat, compétences ou filières : construisons ensemble un engagement concret et mesurable.',
      write: 'Nous écrire',
      offers: 'Nos formes de partenariat',
      imageAlt: 'Un couple de lémurs macaco dans les arbres : le mâle noir et la femelle rousse aux favoris blancs',
    },
    offers: {
      titleStrong: 'Trois façons',
      titleLight: 'de vous engager.',
      lead: 'Chaque partenariat est construit sur mesure, selon vos enjeux et nos besoins sur le terrain.',
      cards: [
        {
          title: 'Mécénat financier',
          text: 'Financez un site, un programme de reboisement ou une filière. Votre soutien est affecté à un projet identifié et suivi dans la durée.',
        },
        {
          title: 'Mécénat de compétences',
          text: "Mettez l'expertise de vos collaborateurs au service de nos projets : gestion, ingénierie, communication, recherche, logistique.",
        },
        {
          title: 'Programme Net Positive Impact',
          text: 'Un accompagnement pour aller au-delà de la compensation et laisser un impact positif sur la biodiversité. [contenu à préciser]',
        },
      ],
    },
    why: {
      titleStrong: 'Pourquoi',
      titleLight: 'nous\u00a0?',
      items: [
        {
          title: 'Sur le terrain depuis 1993',
          text: 'Depuis 1993 à Madagascar, aux côtés des communautés qui vivent de la forêt.',
        },
        {
          title: 'Des projets mesurables',
          text: "Chaque partenariat s'appuie sur un site, des objectifs et des indicateurs suivis, partagés avec vous.",
        },
        {
          title: 'Des filières durables',
          text: 'Nous savons faire vivre la forêt debout, comme avec Aroma Forest et ses huiles essentielles, issues de filières créées avec les paysans.',
        },
      ],
      imageAlt: "Cueillette de fleurs d'ylang-ylang au Mont-Passot",
      caption: "Cueillette d'ylang-ylang, Mont-Passot",
    },
    steps: {
      titleStrong: 'Comment',
      titleLight: 'ça se passe\u00a0?',
      text: 'Un partenariat se construit en quatre étapes, à votre rythme. Chaque projet est construit avec vous, selon vos enjeux et nos besoins sur le terrain.',
      button: 'Nous écrire',
      items: [
        {
          title: 'Premier échange',
          text: 'Nous faisons connaissance : vos enjeux, vos attentes, vos moyens et nos besoins sur le terrain.',
        },
        {
          title: 'Choix du site ou du projet',
          text: 'Nous vous proposons un site, un programme ou une filière en cohérence avec votre activité.',
        },
        {
          title: 'Convention',
          text: 'Objectifs, budget, durée, indicateurs et communication sont formalisés dans une convention de partenariat.',
        },
        {
          title: 'Suivi et restitution',
          text: "Vous recevez des comptes rendus réguliers et pouvez venir constater l'avancement sur place.",
        },
      ],
    },
    partners: {
      titleStrong: 'Ils nous font',
      titleLight: 'confiance',
      link: 'Tous nos partenaires',
    },
    faq: {
      titleStrong: 'Questions',
      titleLight: 'fréquentes',
      items: [
        {
          question: 'Quelle déduction fiscale pour mon entreprise ?',
          answer:
            "Les dons des entreprises à notre association ouvrent droit à une réduction d'impôt de 60 % de leur montant, dans la limite prévue par la loi [à confirmer]. Un reçu fiscal est émis pour chaque versement.",
        },
        {
          question: 'Existe-t-il un montant minimum ?',
          answer:
            "Il n'y a pas de format unique : chaque partenariat est dimensionné selon le projet choisi et vos moyens. Les montants indicatifs par type de projet seront précisés ici [à fournir].",
        },
        {
          question: 'Pouvons-nous communiquer sur notre engagement ?',
          answer:
            "Oui. Les conditions d'utilisation de notre nom, de notre logo et des contenus issus du terrain sont définies ensemble dans la convention de partenariat.",
        },
        {
          question: "Nos collaborateurs peuvent-ils s'impliquer ?",
          answer:
            'Oui, par le mécénat de compétences ou, selon les projets, par des visites sur le terrain. Les formats possibles sont étudiés au cas par cas [à confirmer].',
        },
      ],
    },
    cta: {
      titleStrong: 'Parlons',
      titleLight: 'de votre projet.',
      text: 'Écrivez-nous pour un premier échange.',
      write: 'Nous écrire',
      partners: 'Voir nos partenaires',
    },
  },
  // Page « Équipe » (maquette PageEquipe). Les membres sont dans src/data/equipe.ts.
  equipe: {
    title: 'Équipe',
    description:
      "Le bureau, l'équipe et le comité d'experts de L'Homme & l'Environnement : des gens de terrain et des experts reconnus, entre la France, Madagascar et le Burkina Faso.",
    hero: {
      titleStrong: 'Une équipe',
      titleLight: 'entre la France, Madagascar et le Burkina Faso.',
      lead: 'Des gens de terrain et des experts reconnus, réunis depuis 1993 pour que la protection de la nature profite d\'abord à ceux qui y vivent.',
    },
    team: {
      titleStrong: 'Le bureau',
      titleLight: "et l'équipe",
      lead: "Ils pilotent l'association et ses projets, en France et sur le terrain.",
    },
    gallery: {
      label: "L'équipe sur le terrain",
      /** Dans l'ordre de la maquette. */
      photos: [
        'Visite en forêt avec un guide local',
        'Collectrices de plantes à Vohimana',
        "Une classe d'un village voisin de Vohimana",
        "Femmes et paniers de fleurs d'ylang-ylang, Mont-Passot",
        'Une artisane tresse des fibres végétales, Vohimana',
        'Fête de village à Ambohidravy',
      ],
    },
    experts: {
      titleStrong: 'Le comité',
      titleLight: "d'experts",
      lead: "Chercheurs, pharmaciens, spécialistes des filières et du climat : ils conseillent l'ONG et apportent la rigueur scientifique à ses projets.",
    },
    join: {
      titleStrong: "Rejoindre l'équipe,",
      titleLight: 'sur le terrain ou à distance.',
      text: 'Missions de service civique, stages, mécénat de compétences.',
      missions: 'Voir les missions',
      contact: 'Nous contacter',
    },
  },
  /**
   * Page « L'ONG » (texte de Tadzio, comité). Les {repères} sont remplacés par les
   * chiffres et dates de src/data/chiffres.ts (ONG), mis en forme selon la langue.
   */
  ong: {
    title: "L'ONG",
    description:
      "Depuis {founded}, L'Homme & l'Environnement associe les communautés locales et les entreprises à la préservation de la biodiversité, à Madagascar et au-delà : notre approche, nos sites et notre histoire.",
    hero: {
      titleStrong: 'Protéger la nature',
      titleLight: 'avec ceux qui en vivent.',
      lead: "Depuis {founded}, L'Homme & l'Environnement imagine des programmes qui associent les communautés locales et les entreprises à la préservation de la biodiversité, à Madagascar et au-delà.",
      imageAlt: "Des femmes avec leurs paniers de fleurs d'ylang-ylang dans les plantations du Mont-Passot",
      history: 'Notre histoire',
      team: 'Notre équipe',
    },
    statsLabel: "L'ONG en chiffres",
    /** Dans l'ordre de la maquette : espèces, paysans, arbres, sites, Man & Nature, Vohimana. */
    stats: [
      'espèces menacées protégées dans nos sanctuaires, dont {critical} en danger critique.',
      'paysans soutenus, en majorité des femmes, dans des filières fondées sur la nature.',
      'arbres plantés à Vohimana pour restaurer les zones dégradées.',
      'sites gérés à Madagascar, chacun avec sa filière de valorisation.',
      'projets accompagnés dans {countries} pays tropicaux avec le programme Man & Nature.',
      'Vohimana entre dans la liste officielle des nouvelles aires protégées.',
    ],
    approach: {
      titleStrong: 'Notre approche,',
      titleLight: 'trois leviers.',
      lead: "Préserver la biodiversité ne marche durablement que si elle fait vivre ceux qui l'entourent.",
      cards: [
        {
          title: 'Des sanctuaires créés avec les habitants',
          text: 'Hors du système existant des aires protégées, nous avons créé des sanctuaires pour plus de {species} espèces menacées, gérés avec les communautés qui y vivent.',
        },
        {
          title: 'Des solutions fondées sur la nature',
          text: 'Nous impliquons des entreprises de la cosmétique, de la parfumerie, de la mode et du soin pour que la forêt debout fasse vivre les paysans qui la protègent.',
        },
        {
          title: 'Une recherche appliquée',
          text: 'Avec des institutions nationales et internationales, nous testons des modèles reproductibles, utiles au Cadre mondial pour la biodiversité et à la résilience face au changement climatique.',
        },
      ],
    },
    sectors: {
      titleStrong: 'Une filière',
      titleLight: 'par site',
      lead: "Nos {count} sites à Madagascar s'appuient chacun sur une ressource naturelle valorisée avec les habitants.",
      /** Filière de chaque site (clé = nom du fichier dans src/content/sites). */
      filieres: {
        vohimana: 'Plantes aromatiques et médicinales',
        'mont-passot': 'Ylang-ylang et fruitiers',
        ambohidravy: 'Vanille sauvage',
        ambalakalanoro: 'Saro et raphia',
        fohisokina: 'Pisciculture',
      } as Record<string, string>,
      siteLink: 'Voir la fiche du site',
      /** Noms affichés sur les cartes quand ils diffèrent du nom du site. */
      names: { 'mont-passot': 'Mont-Passot, Nosy Be' } as Record<string, string>,
      map: {
        title: 'Tous nos sites sur la carte',
        text: 'Surfaces, espèces et projets de chaque site, à Madagascar et au Burkina Faso.',
        link: 'Voir la carte',
      },
    },
    history: {
      titleStrong: 'Notre histoire,',
      titleLight: 'sur le terrain depuis 1993.',
      /** Dans l'ordre de la frise ; les dates sont dans src/data/chiffres.ts (ONG.dates). */
      events: [
        {
          title: 'Un premier combat',
          text: 'Olivier Behra, biologiste, alerte les autorités malgaches et la communauté internationale pour faire interdire le commerce de la grenouille arlequin.',
        },
        {
          title: "Naissance de l'ONG",
          text: "Après avoir dirigé pour les Nations unies le premier projet associant communautés locales et opérateurs privés autour d'une ressource sauvage, il fonde L'Homme & l'Environnement.",
        },
        {
          title: 'Man & Nature',
          text: "Le programme aide d'autres ONG locales à gérer des filières : plus de {projects} projets voient le jour dans {countries} pays tropicaux.",
        },
        {
          title: 'Aroma Forest',
          text: 'Première entreprise sociale et solidaire fondée sur la nature : une cinquantaine de salariés et des revenus pour plus de {farmers} paysans.',
        },
        {
          title: 'ONG à Madagascar',
          text: "L'association, créée en 1993, est enregistrée comme ONG à Madagascar.",
        },
        {
          title: 'Vohimana protégée',
          text: "La forêt qu'on disait condamnée entre dans la liste officielle des nouvelles aires protégées de Madagascar.",
        },
      ],
      imageAlt: 'Cascade dans la forêt de Vohimana',
      quote: "C'est quand j'ai vu ce paysage que je me suis dit que c'était là qu'il fallait installer la base de Vohimana.",
      quoteAuthor: 'Olivier Behra, fondateur',
    },
    models: {
      titleStrong: 'Des modèles',
      titleLight: 'à reproduire',
      paragraphs: [
        "Le Cadre mondial pour la biodiversité de Kunming-Montréal fixe le cap. Il faut maintenant s'appuyer sur ce qui fonctionne pour étendre l'implication des communautés locales et des entreprises dans la restauration de la biodiversité.",
        "C'est le sens du programme pilote d'Ambalakalanoro, dans l'ouest de Madagascar, que nous portons avec un nombre croissant de partenaires scientifiques.",
      ],
      partners: 'Nos partenaires de recherche',
      newTab: '(nouvel onglet)',
      allPartners: 'Tous nos partenaires et bailleurs',
    },
    cta: {
      titleStrong: 'Les solutions',
      titleLight: 'se trouvent au sein du vivant.',
      text: 'Soutenez nos programmes par un don, ou venez les découvrir sur le terrain avec nos équipes.',
      field: 'Venir sur le terrain',
    },
  },
  partenaires: {
    title: 'Partenaires et bailleurs',
    description:
      "Bailleurs, chercheurs, entreprises et associations : les partenaires qui font avancer les programmes de L'Homme & l'Environnement à Madagascar et au Burkina Faso.",
    hero: {
      titleStrong: 'Ils agissent',
      titleLight: 'à nos côtés.',
      lead: 'Bailleurs, chercheurs, entreprises et associations : nos programmes avancent grâce à des partenaires qui partagent une même conviction, protéger la nature avec ceux qui en vivent.',
      become: 'Devenir partenaire',
      list: 'Voir nos partenaires',
      imageAlt: 'Un vari noir et blanc dans la canopée',
    },
    ways: {
      titleStrong: 'Trois façons',
      titleLight: 'de travailler ensemble',
      cards: [
        {
          title: 'Financer un site',
          text: "Les bailleurs et fondations financent la protection d'une forêt, le reboisement ou l'équipement des patrouilleurs, sur plusieurs années.",
        },
        {
          title: 'Mener la recherche',
          text: "Universités et instituts inventorient les espèces, étudient les plantes et mesurent l'effet de nos actions sur le terrain.",
        },
        {
          title: 'Développer une filière',
          text: 'Les entreprises achètent et valorisent les productions locales, comme les huiles essentielles, qui font vivre les villages sans entamer la forêt.',
        },
      ],
    },
    list: {
      titleStrong: 'Nos partenaires',
      titleLight: 'et bailleurs',
      lead: 'Fondations, institutions, chercheurs, entreprises et associations : ils soutiennent nos actions sur le terrain.',
      filtersLabel: 'Filtrer par type de partenaire',
      all: 'Tous',
      /** {count} : nombre de partenaires affichés. */
      countOne: '{count} partenaire',
      countMany: '{count} partenaires',
      sitesLabel: 'Site concerné',
      website: 'Site web',
      /** Lu par les lecteurs d'écran après « Site web ». */
      newTab: '(nouvel onglet)',
      /** {name} : nom du partenaire, lu par les lecteurs d'écran. */
      websiteOf: 'de {name}',
      join: {
        title: 'Votre organisation ici ?',
        text: "Fondation, entreprise ou laboratoire : construisons un partenariat autour d'un site ou d'un projet.",
        link: 'Devenir partenaire',
      },
    },
    /** Libellés des types de partenaires (src/data/partenaires.ts). */
    types: {
      bailleurs: 'Bailleurs et fondations',
      recherche: 'Recherche',
      entreprises: 'Entreprises et filières',
      associations: 'Associations',
    },
    featured: {
      eyebrow: 'Partenariat à la une',
      titleStrong: 'Ambalakalanoro,',
      titleLight: 'un programme pilote',
      text: "Dans l'ouest de Madagascar, nous portons avec un nombre croissant de partenaires scientifiques un programme qui associe les communautés locales et les entreprises à la restauration de la biodiversité. Objectif : un modèle à reproduire ailleurs.",
      imageAlt: "Le cirque d'Ambalakalanoro et sa forêt",
      link: 'Découvrir le site',
    },
    cta: {
      titleStrong: 'Devenir partenaire,',
      titleLight: 'parlons-en.',
      text: 'Mécénat financier ou de compétences, programme Net Positive Impact, partenariat de recherche : nous construisons chaque partenariat avec vous.',
      write: 'Nous écrire',
    },
  },
  don: {
    title: 'Faire un don',
    description:
      "Faites un don à L'Homme & l'Environnement : il finance la protection des forêts de Madagascar et du Burkina Faso, et les activités qui permettent aux communautés locales d'en vivre.",
    hero: {
      eyebrow: 'Faire un don',
      titleStrong: 'Votre don',
      titleLight: 'agit directement sur le terrain.',
      lead: "Il finance la protection des forêts de Madagascar et du Burkina Faso, et les activités qui permettent aux communautés locales d'en vivre.",
      imageAlt: "Forêts et mangroves d'Ambohidravy, vues du ciel",
    },
    recent: {
      label: 'Derniers dons',
      /** {amount} : montant, {name} : prénom, {city} : ville. */
      text: 'Un don de {amount} de la part de {name}, de {city}. Merci !',
    },
    form: {
      label: 'Formulaire de don',
      title: 'Je fais un don',
      secure: 'Paiement sécurisé',
      frequencyLabel: 'Fréquence du don',
      once: 'Une fois',
      monthly: 'Chaque mois',
      amountLabel: 'Montant',
      /** Ajouté après un montant mensuel : « 20 € par mois ». */
      perMonth: ' par mois',
      /** {amount} : montant choisi, suivi de « par mois » le cas échéant. */
      impactLead: 'Avec {amount} :',
      customLabel: 'Montant libre en euros',
      customPlaceholder: 'Montant libre',
      customError: 'Saisissez un montant en euros, {min} minimum (par exemple 25 ou 12,50).',
      /** {net} : coût réel après réduction d'impôt, {rate} : taux. TODO ONG : éligibilité aux reçus fiscaux. */
      taxTitle: "Soit {net} après réduction d'impôt de {rate}.",
      taxText: '[À confirmer : éligibilité aux reçus fiscaux]',
      /** {amount} : montant, suivi de « par mois » le cas échéant. */
      submit: 'Donner {amount}',
      footnote: 'Paiement par HelloAsso. Reçu envoyé par email.',
    },
    impact: {
      titleStrong: 'Ce que permet',
      titleLight: 'votre don',
      text: "Choisissez un montant : la carte correspondante s'allume. Les équivalences sont données à titre d'exemple.",
      todo: "[À confirmer avec l'ONG]",
      /** Une carte par montant, dans l'ordre des montants. TODO ONG : équivalences à confirmer. */
      cards: [
        {
          theme: 'Reboisement',
          title: 'Des plants pour reboiser une parcelle',
          text: "Environ 30 jeunes arbres produits en pépinière et plantés avec les villages d'Ambalakalanoro.",
          imageAlt: 'Villageoises portant des brassées de jeunes plants',
        },
        {
          theme: 'Conservation',
          title: 'Une journée de patrouille en forêt',
          text: 'Un garde forestier recruté au village surveille la forêt de Vohimana et suit la faune.',
          imageAlt: 'Indri dans la forêt de Vohimana',
        },
        {
          theme: 'Filières durables',
          title: 'Une filière qui remplace le brûlis',
          text: "Formation et matériel pour une famille qui cultive l'ylang-ylang sans entamer la forêt, à Mont-Passot.",
          imageAlt: "Cueillette des fleurs d'ylang-ylang",
        },
        {
          theme: 'Éducation',
          title: 'Une classe sensibilisée à la forêt',
          text: "Des animations et des fournitures pour une classe d'un village voisin de Vohimana.",
          imageAlt: "Élèves d'une classe pendant une animation",
        },
      ],
    },
    spending: {
      titleStrong: 'Où va',
      titleLight: 'votre argent',
      text: "Nos comptes sont publics. Chaque année, nous publions un rapport d'activité et un rapport financier.",
      items: ['Actions de terrain', 'Formation et sensibilisation', 'Fonctionnement'],
      placeholder: '[X] %',
      note: 'Répartition indicative, à remplacer par les chiffres du dernier rapport financier.',
      reports: 'Consulter nos rapports',
    },
    further: {
      titleStrong: 'Deux façons',
      titleLight: "d'aller plus loin",
      member: {
        eyebrow: 'Soutien régulier',
        title: 'Soutenir chaque mois',
        text: "Devenez membre de l'association (de 18 à 25 € par an) et ajoutez la contribution mensuelle de votre choix. Un soutien régulier permet de planifier les actions sur plusieurs années.",
        cta: 'Devenir membre',
      },
      campaign: {
        badge: 'Campagne en cours',
        title: "Sauvegarder la forêt d'Ambalakalanoro",
        imageAlt: "Le cirque d'Ambalakalanoro et sa forêt",
        progressLabel: 'Avancement de la collecte',
        /** {collected}, {goal} : montants. */
        progress: '{collected} collectés sur {goal}',
        /** TODO ONG : objectif et montant collecté de la campagne. */
        progressTodo: '[X] € collectés sur [objectif] €',
        cta: 'Soutenir la campagne',
        share: 'Partager la collecte',
        shareText: "Aidez L'Homme & l'Environnement à sauvegarder la forêt d'Ambalakalanoro, à Madagascar :",
      },
    },
    other: {
      titleStrong: 'Aider',
      titleLight: 'autrement',
      cards: [
        {
          title: 'Boutique solidaire',
          text: 'Huiles essentielles Aroma Forest et produits du Burkina Faso : chaque achat soutient les communautés.',
          cta: 'Voir la boutique',
        },
        {
          title: 'Partir en service civique',
          text: 'Donnez de votre temps sur nos sites, à Madagascar ou au Burkina Faso.',
          cta: 'Voir les missions',
        },
        {
          title: 'Engager son entreprise',
          text: 'Mécénat financier ou de compétences, programme Net Positive Impact.',
          cta: 'Devenir partenaire',
        },
      ],
    },
    faq: {
      titleStrong: 'Questions',
      titleLight: 'fréquentes',
      items: [
        {
          question: 'Le paiement est-il sécurisé ?',
          answer:
            "Oui. Les dons passent par HelloAsso, plateforme de paiement agréée dédiée aux associations. Nous n'avons jamais accès à vos coordonnées bancaires.",
        },
        {
          question: 'Pourquoi HelloAsso me propose une contribution ?',
          answer:
            'HelloAsso est gratuit pour les associations et se finance grâce à une contribution volontaire des donateurs. Elle est facultative : vous pouvez la mettre à 0 € avant de valider.',
        },
        {
          question: 'Vais-je recevoir un reçu fiscal ?',
          // TODO ONG : délivrance et délai d'envoi des reçus fiscaux.
          answer: "[À confirmer avec l'ONG : délivrance et délai d'envoi des reçus fiscaux.]",
        },
        {
          question: 'Comment arrêter un soutien mensuel ?',
          answer: "Depuis votre espace HelloAsso, ou en nous écrivant : nous l'arrêtons sans condition.",
        },
        {
          question: 'Mon nom apparaîtra-t-il sur la page ?',
          answer:
            "Seulement si vous l'acceptez au moment du don : votre prénom et votre ville s'affichent alors dans les derniers dons. Sinon, rien n'apparaît.",
        },
      ],
    },
  },
  mentionsLegales: {
    title: 'Mentions légales',
    description:
      "Mentions légales du site de L'Homme & l'Environnement : éditeur, hébergement, conception, propriété intellectuelle et crédits photos.",
    hero: {
      titleStrong: 'Mentions',
      titleLight: 'légales',
      lead: "Qui édite ce site, qui l'héberge, et à qui appartiennent ses contenus.",
      updated: 'Mise à jour : {date}',
    },
    /** Valeur pas encore fournie par l'ONG, et valeur à faire confirmer. */
    missing: '[à fournir]',
    toConfirm: '[à confirmer]',
    toc: 'Sommaire',
    publisher: {
      title: 'Éditeur du site',
      intro: "Ce site est édité par l'association L'Homme & l'Environnement.",
      legalForm: 'Forme juridique',
      legalFormValue: 'Association loi 1901',
      headOffice: 'Siège social',
      rna: 'Numéro RNA',
      siret: 'Numéro SIRET',
      director: 'Directeur de la publication',
      phone: 'Téléphone',
      contact: 'Contact',
    },
    hosting: {
      title: 'Hébergement',
      intro: 'Le site est hébergé par :',
      country: 'France',
    },
    design: {
      title: 'Conception',
      text: "Le site a été entièrement repensé lors de la refonte de 2026. Il s'agit d'un site statique, construit avec le framework Astro.",
      credit: 'Conception et réalisation :',
    },
    property: {
      title: 'Propriété intellectuelle',
      paragraphs: [
        "L'ensemble des contenus de ce site (textes, logo, illustrations, cartes et photographies) est protégé par le Code de la propriété intellectuelle. Sauf mention contraire, ils appartiennent à L'Homme & l'Environnement ou à leurs auteurs respectifs.",
        'Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.',
      ],
      note: {
        title: 'Vous souhaitez réutiliser une photo ou un texte ?',
        text: "Écrivez-nous avant toute utilisation : nous vous indiquerons l'auteur à créditer et les conditions de réutilisation.",
      },
    },
    credits: {
      title: 'Crédits photos',
      intro: "Les photographies de ce site sont l'œuvre de :",
      commons: 'Contributeurs de Wikimedia Commons, sous licences Creative Commons :',
      /** Lien vers la page de la photo sur Wikimedia Commons. */
      source: 'Wikimedia Commons',
    },
    links: {
      title: 'Liens externes',
      paragraphs: [
        "Ce site contient des liens vers d'autres sites, notamment HelloAsso pour les dons et les sites de nos partenaires. L'Homme & l'Environnement n'exerce aucun contrôle sur leur contenu et ne peut en être tenue responsable.",
        "Vous pouvez librement créer un lien vers ce site, à condition qu'il ne porte pas atteinte à l'image de l'association.",
      ],
    },
  },
  confidentialite: {
    title: 'Confidentialité',
    description:
      "Politique de confidentialité de L'Homme & l'Environnement : données collectées, mesure d'audience sans cookies, durées de conservation et vos droits.",
    hero: {
      titleStrong: 'Vos données,',
      titleLight: 'en toute transparence.',
      lead: 'Ce que nous collectons, pourquoi, combien de temps, et comment exercer vos droits. Nous collectons le moins de données possible.',
      updated: 'Mise à jour : {date}',
    },
    missing: '[à fournir]',
    toConfirm: '[à confirmer]',
    toc: 'Sommaire',
    controller: {
      title: 'Qui est responsable',
      // Phrase coupée autour de l'adresse du siège.
      text: "Le responsable du traitement de vos données est l'association L'Homme & l'Environnement, association loi 1901, dont le siège est situé ",
      addressMissing: '[adresse à fournir]',
      questions: 'Pour toute question sur vos données : ',
    },
    data: {
      title: 'Données collectées',
      intro: 'Nous ne collectons que les données nécessaires, et uniquement lorsque vous nous les transmettez.',
      contact: {
        title: 'Formulaire de contact',
        text: "Nom, adresse e-mail, sujet et message. Ces données servent uniquement à répondre à votre demande, avec votre consentement donné au moment de l'envoi.",
      },
      newsletter: {
        title: 'Newsletter',
        text: "Votre adresse e-mail, pour vous envoyer nos nouvelles. Chaque envoi contient un lien de désinscription. Outil d'envoi : ",
      },
      donations: {
        title: 'Dons',
        // Phrase coupée autour du lien vers la politique de HelloAsso.
        before: 'Les dons sont traités par HelloAsso, plateforme de paiement dédiée aux associations, qui agit selon sa propre ',
        link: 'politique de confidentialité',
        after:
          ". Nous recevons de HelloAsso les informations nécessaires à l'émission de votre reçu fiscal ; nous n'avons jamais accès à vos coordonnées bancaires.",
      },
    },
    audience: {
      title: "Mesure d'audience sans cookies",
      text: "Pour savoir quelles pages sont utiles, nous mesurons la fréquentation du site avec un outil qui ne dépose aucun cookie et ne vous suit pas d'un site à l'autre. Nous ne consultons que des statistiques globales : pages vues, sites de provenance, type d'appareil. Outil retenu : ",
      note: {
        title: 'Pas de bandeau cookies sur ce site',
        text: "Comme aucun cookie de mesure ou de publicité n'est déposé, aucun consentement n'est nécessaire. ",
        toConfirm: "[à confirmer selon l'outil retenu]",
      },
    },
    retention: {
      title: 'Durées de conservation',
      intro: 'Vos données sont conservées le temps nécessaire à leur finalité, puis supprimées.',
      dataHeader: 'Données',
      durationHeader: 'Durée de conservation',
      contact: 'Messages du formulaire de contact',
      newsletter: 'Inscription à la newsletter',
      newsletterValue: "Jusqu'à votre désinscription",
      donations: 'Informations liées aux dons',
      audience: "Statistiques d'audience",
      audienceValue: 'Globales et anonymes',
    },
    rights: {
      title: 'Vos droits',
      intro:
        'Conformément au Règlement général sur la protection des données (RGPD), vous disposez des droits suivants sur vos données :',
      list: [
        { name: 'Accès', text: ' : savoir quelles données nous détenons sur vous ;' },
        { name: 'Rectification', text: ' : corriger des données inexactes ;' },
        { name: 'Effacement', text: ' : demander la suppression de vos données ;' },
        { name: 'Opposition', text: " : refuser qu'elles soient utilisées, par exemple pour la newsletter." },
      ],
      // Phrase coupée autour du lien vers la CNIL.
      complaint: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la Commission nationale de l'informatique et des libertés (",
      complaintLink: 'CNIL',
      complaintAfter: ').',
    },
    contact: {
      title: 'Nous contacter',
      // Phrase coupée autour de l'adresse e-mail et du lien vers le formulaire.
      before: 'Pour exercer vos droits ou poser une question, écrivez-nous à ',
      middle: ' ou passez par notre ',
      form: 'formulaire de contact',
      after: ". Nous vous répondrons dans un délai d'un mois, comme le prévoit le RGPD.",
    },
  },
  galerie: {
    title: 'Galerie photos',
    description:
      "Forêts, lacs de cratère, filières et villages : les sites de L'Homme & l'Environnement à Madagascar et au Burkina Faso, en photos.",
    hero: {
      titleStrong: 'Le terrain,',
      titleLight: 'en images.',
      // TODO ONG : liste des photographes à fournir.
      lead: "Forêts, lacs de cratère, filières et villages : nos sites à Madagascar et au Burkina Faso, vus par ceux qui les arpentent. La plupart de ces photos sont signées Olivier Behra, fondateur de l'ONG ; merci aussi aux photographes qui nous confient leurs images. [Liste des photographes à fournir]",
    },
    list: {
      titleStrong: 'Nos sites',
      titleLight: 'en photos',
      /** {count} : nombre de photos affichées. */
      countOne: '{count} photo',
      countMany: '{count} photos',
      filtersLabel: 'Filtrer par site',
      all: 'Tous',
      /** {title} : titre de la photo. */
      open: 'Agrandir la photo : {title}',
    },
    /** Lieux qui ne sont pas des sites de src/content/sites (voir GALLERY_PLACES). */
    places: {
      'burkina-faso': 'Burkina Faso',
    },
    viewer: {
      label: 'Visionneuse de photos',
      close: 'Fermer',
      previous: 'Photo précédente',
      next: 'Photo suivante',
      /** {index} : rang de la photo, {count} : nombre de photos affichées. */
      position: 'Photo {index} sur {count}',
    },
    cta: {
      titleStrong: 'Vous avez des photos',
      titleLight: 'de nos sites ?',
      text: "Volontaire, stagiaire, visiteur ou photographe : si vous avez photographié l'un de nos sites, écrivez-nous. Avec votre accord, nous les publierons ici, avec votre nom.",
      contact: 'Nous contacter',
    },
  },

  rapports: {
    title: 'Rapports et études',
    description:
      "Rapports annuels, comptes, études scientifiques et présentations de sites de L'Homme & l'Environnement, à lire en ligne ou à télécharger en PDF.",
    hero: {
      titleStrong: 'Nos rapports,',
      titleLight: 'en toute transparence.',
      lead: "Rapports d'activité, comptes, études scientifiques et présentations de nos sites : les documents qui rendent compte de notre action à Madagascar et au Burkina Faso, en libre téléchargement.",
    },
    /** Libellés des types de document (src/data/rapports.ts) : pastille d'un document… */
    types: {
      annuel: 'Rapport annuel',
      financier: 'Rapport financier',
      etude: 'Étude scientifique',
      site: 'Présentation de site',
    },
    /** …et pastille de filtre. */
    typesPlural: {
      annuel: 'Rapports annuels',
      financier: 'Rapports financiers',
      etude: 'Études scientifiques',
      site: 'Présentations de sites',
    },
    featured: {
      badge: 'À la une',
      /** {title} : titre du document. */
      coverLabel: 'Couverture du {title} (provisoire)',
      coverAlt: 'Couverture du {title}',
      coverTodo: '[couverture à fournir]',
      coverRegions: 'Madagascar · Burkina Faso',
      /** {date} : date de publication. */
      published: 'Publié en {date}',
      /** {count} : nombre de pages. */
      pages: '{count} pages',
      read: 'Lire en ligne',
      download: 'Télécharger le PDF',
    },
    todo: {
      size: '[poids à fournir]',
      pages: '[nombre de pages à fournir]',
      date: '[date à fournir]',
      year: '[année à fournir]',
      document: '[à fournir]',
      file: '[PDF à fournir]',
    },
    list: {
      titleStrong: 'Tous nos documents',
      titleLight: 'à télécharger',
      lead: 'Filtrez par type de document. Tous les fichiers sont au format PDF.',
      /** {count} : nombre de documents affichés. */
      countOne: '{count} document',
      countMany: '{count} documents',
      filtersLabel: 'Filtrer par type de document',
      all: 'Tous',
      download: 'Télécharger',
      /** {title} : titre du document. */
      downloadLabel: 'Télécharger : {title} (PDF)',
      /** {size} : poids du fichier. */
      format: 'PDF, {size}',
      empty: 'Aucun document pour ce filtre.',
    },
    reader: {
      /** {index} : page affichée, {count} : nombre de pages. */
      position: 'Page {index} / {count}',
      /** Lu par les lecteurs d'écran à chaque page. */
      positionLong: 'Page {index} sur {count}',
      pagesLabel: 'Pages du document',
      /** {index} : numéro de la page. */
      pageButton: 'Page {index}',
      zoomOut: 'Dézoomer',
      zoomIn: 'Zoomer',
      zoomLevel: 'Zoom',
      fullscreen: 'Plein écran',
      exitFullscreen: 'Quitter le plein écran',
      download: 'Télécharger',
      /** Complément lu par les lecteurs d'écran après « Télécharger ». */
      downloadHidden: 'le PDF',
      /** Zone de la page affichée (défilement au clavier). */
      pageRegion: 'Page affichée',
      close: 'Fermer la liseuse',
      previous: 'Page précédente',
      next: 'Page suivante',
      loading: 'Chargement du document…',
      error: "Le document n'a pas pu être affiché. Vous pouvez le télécharger.",
      /** Mobile : le PDF s'ouvre dans le lecteur du téléphone. */
      newTab: '(nouvel onglet)',
    },
    cta: {
      titleStrong: 'Vous cherchez',
      titleLight: 'un document ?',
      text: 'Un rapport plus ancien, une étude citée sur nos pages ou des données pour un travail de recherche : écrivez-nous, nous vous orienterons vers le bon document.',
      contact: 'Nous contacter',
    },
  },
  /**
   * Page « Contact » (maquettes Contact / ContactMobile). Envoi du formulaire : api/contact.ts.
   * Sujets de la liste : clés de CONTACT_SUBJECTS (src/lib/contact.ts).
   */
  contact: {
    title: 'Contact',
    description:
      "Une question sur nos programmes, un don, un stage ou un partenariat ? Écrivez à L'Homme & l'Environnement : nous orienterons votre message vers la bonne personne de l'équipe.",
    hero: {
      titleStrong: 'Écrivez-nous,',
      titleLight: 'on vous répond.',
      lead: "Une question sur nos programmes, un don, un stage ou un partenariat ? Laissez-nous un message, nous l'orienterons vers la bonne personne de l'équipe.",
    },
    sectionLabel: 'Formulaire et coordonnées',
    form: {
      titleStrong: 'Votre',
      titleLight: 'message',
      // Phrase coupée autour de l'astérisque (masqué aux lecteurs d'écran : les champs sont marqués « requis »).
      requiredBefore: "Les champs marqués d'un astérisque (",
      requiredAfter: ') sont obligatoires.',
      name: 'Nom et prénom',
      email: 'Adresse e-mail',
      emailPlaceholder: 'nom@exemple.fr',
      emailHelp: 'Uniquement pour vous répondre.',
      subject: 'Sujet',
      subjectPlaceholder: 'Choisir un sujet',
      subjects: {
        don: 'Don et reçu fiscal',
        stage: 'Stage et volontariat',
        entreprise: 'Partenariat entreprise',
        presse: 'Presse',
        autre: 'Autre',
      },
      message: 'Message',
      messageHelp: 'Précisez si besoin le site ou le projet concerné.',
      consent: "J'accepte que mes données personnelles soient utilisées uniquement pour répondre à ma demande.",
      privacyLink: 'Lire la politique de confidentialité',
      /** Champ piège anti-spam, invisible : lu seulement si un lecteur d'écran y arrive malgré tout. */
      trap: 'Ne remplissez pas ce champ',
      submit: 'Envoyer',
      errors: {
        nom: 'Indiquez votre nom et votre prénom.',
        email: 'Indiquez votre adresse e-mail.',
        emailInvalid: 'Cette adresse e-mail semble incomplète. Exemple : nom@exemple.fr',
        sujet: 'Choisissez un sujet dans la liste.',
        message: 'Écrivez votre message.',
        consentement: 'Cochez cette case pour que nous puissions vous répondre.',
        /** {max} : nombre de caractères autorisés. */
        tooLong: 'Ce texte est trop long : {max} caractères au maximum.',
      },
      sending: 'Envoi en cours…',
      sent: "Merci, votre message est bien parti. Nous vous répondrons à l'adresse indiquée.",
      /** Envoi impossible (serveur non configuré ou en panne) : lien mailto prérempli à la suite. */
      failed: "Le message n'a pas pu partir. Vous pouvez l'envoyer depuis votre messagerie : ",
      failedLink: 'ouvrir un e-mail prérempli',
      /** Sans JavaScript, la page revient à cette ancre en cas d'échec. */
      failedNoScript: "Le message n'a pas pu partir. Vous pouvez nous écrire directement à ",
    },
    ways: {
      label: 'Autres façons de nous joindre',
      write: 'Écrire',
      headOffice: 'Siège en France',
      orgName: "L'Homme & l'Environnement",
      madagascar: 'Bureau à Madagascar',
      social: 'Réseaux sociaux',
      socialText: 'Suivez la vie de nos sites, au fil des saisons.',
    },
    todo: {
      toConfirm: '[à confirmer]',
      address: '[adresse à fournir]',
      missing: '[à fournir]',
      accounts: '[comptes à confirmer]',
    },
    faqNote: {
      title: "Pour un stage ou un don, consultez d'abord nos questions fréquentes",
      text: "Durée des missions, reçu fiscal, soutien mensuel : la réponse s'y trouve peut-être déjà.",
      stages: 'Questions sur les stages',
      don: 'Questions sur les dons',
    },
    more: {
      titleStrong: 'Vous cherchez',
      // Trait d'union insécable (U+2011) : « peut-être » ne se coupe pas en fin de ligne sur mobile.
      titleLight: 'peut‑être…',
      lead: 'Les demandes les plus fréquentes ont déjà leur page.',
      don: {
        title: 'Faire un don',
        text: 'Soutenir nos programmes par un don ponctuel ou mensuel, en ligne via HelloAsso.',
        cta: 'Voir la page don',
      },
      stages: {
        title: 'Stages et volontariat',
        text: 'Rejoindre nos équipes sur le terrain, pour une mission construite avec vous.',
        cta: 'Découvrir les missions',
      },
      entreprises: {
        title: 'Entreprises',
        text: 'Engager votre entreprise dans une filière fondée sur la nature, aux côtés des communautés locales.',
        cta: 'Devenir partenaire',
      },
    },
  },

  particuliers: {
    title: 'Particuliers',
    description:
      "Don, adhésion, stage, séjour à Vohimana, achat solidaire ou simple partage : toutes les façons d'agir avec L'Homme & l'Environnement à Madagascar et au Burkina Faso.",
    hero: {
      titleStrong: 'Chacun peut agir,',
      titleLight: 'à sa mesure.',
      lead: 'Un don, une adhésion, quelques semaines sur le terrain ou un simple partage : chaque geste aide les communautés de Madagascar et du Burkina Faso à protéger la forêt dont elles vivent.',
      allWays: "Voir toutes les façons d'agir",
      imageAlt: 'Un guide présente la forêt à un groupe de visiteurs',
    },
    ways: {
      titleStrong: 'Six façons',
      titleLight: "d'agir.",
      lead: "Choisissez l'engagement qui vous ressemble, et combinez-les si vous le souhaitez.",
      /** Dans l'ordre de la maquette ; destinations dans ParticuliersPage. */
      cards: [
        {
          title: 'Faire un don',
          text: "Ponctuel ou mensuel, votre don finance directement nos programmes de terrain. Il ouvre droit à une réduction d'impôt de 66 % de son montant [à confirmer].",
          link: 'Faire un don',
        },
        {
          title: 'Devenir membre',
          text: "Rejoignez l'association pour une cotisation de 18 à 25 € par an : vous suivez nos actions de près et soutenez notre indépendance.",
          link: "Adhérer à l'association",
        },
        {
          title: 'Venir sur le terrain',
          text: 'Stage, volontariat ou mission de recherche : rejoignez nos équipes à Madagascar sur de vrais projets de conservation.',
          link: 'Découvrir les missions',
        },
        {
          title: 'Séjourner à Vohimana',
          text: "Découvrez la forêt de Vohimana avec des guides locaux. L'écotourisme fait vivre les habitants et finance la protection du site.",
          link: 'Préparer mon séjour',
        },
        {
          title: 'Acheter solidaire',
          text: 'Dans notre boutique, retrouvez notamment les huiles essentielles Aroma Forest, issues des filières que nous avons créées avec les paysans.',
          link: 'Visiter la boutique',
        },
        {
          title: 'Relayer nos actions',
          text: "Abonnez-vous à notre lettre d'information et suivez-nous sur les réseaux sociaux : faire connaître nos projets, c'est déjà agir.",
          link: "S'abonner à la lettre",
        },
      ],
    },
    impact: {
      titleStrong: 'Ce que votre engagement',
      titleLight: 'change.',
      items: [
        {
          title: 'Des forêts qui repoussent',
          text: 'Votre soutien finance le reboisement des zones dégradées, avec des pépinières tenues par les habitants.',
        },
        {
          title: 'Des gardes forestiers sur le terrain',
          text: 'Il permet de rémunérer les gardes, recrutés dans les villages, qui surveillent les sanctuaires au quotidien.',
        },
        {
          title: 'Des filières qui font vivre',
          text: 'Il aide à structurer des filières durables, comme les plantes aromatiques, pour que la forêt debout rapporte plus que la forêt coupée.',
        },
      ],
      noteTitle: 'Des chiffres à venir',
      noteText:
        "Le détail de l'utilisation des fonds sera publié ici à partir de notre dernier rapport d'activité [à fournir].",
      imageAlt: 'Des cueilleurs de plantes aromatiques à Vohimana',
      caption: 'Cueilleurs de plantes, Vohimana',
    },
    faq: {
      titleStrong: 'Questions',
      titleLight: 'fréquentes',
      items: [
        {
          question: 'Mon don est-il déductible des impôts ?',
          answer:
            'Oui : en tant que particulier imposable en France, vous pouvez déduire 66 % du montant de votre don de votre impôt sur le revenu, dans la limite prévue par la loi [à confirmer]. Un reçu fiscal vous est envoyé pour chaque don.',
        },
        {
          question: 'Quelle différence entre un don et une adhésion ?',
          answer:
            "L'adhésion fait de vous un membre de l'association, pour une cotisation de 18 à 25 € par an. Le don, libre et sans engagement, finance directement nos programmes. Les droits liés à l'adhésion (vote en assemblée générale, etc.) sont précisés dans nos statuts [à confirmer].",
        },
        {
          question: 'Puis-je choisir le projet que je soutiens ?',
          answer:
            'Les modalités pour affecter un don à un site ou à un projet précis sont en cours de définition [à confirmer]. En attendant, écrivez-nous : nous vous dirons où votre soutien est le plus utile.',
        },
        {
          question: 'Comment organiser un séjour à Vohimana ?',
          answer:
            "Contactez-nous pour connaître les périodes d'accueil, les conditions d'hébergement et les tarifs [à fournir]. Les visites se font avec des guides formés issus des villages voisins.",
        },
        {
          question: 'Où trouver les produits Aroma Forest ?',
          answer:
            'Les huiles essentielles Aroma Forest et nos autres produits solidaires sont disponibles dans notre boutique en ligne [lien à fournir]. Chaque achat soutient les paysans de nos filières.',
        },
      ],
    },
    cta: {
      titleStrong: 'Chaque geste',
      titleLight: 'compte pour le vivant.',
      text: 'Soutenez nos programmes par un don, ou venez les découvrir sur le terrain avec nos équipes.',
      field: 'Venir sur le terrain',
    },
  },
  /** Page 404 (src/pages/404.astro et en/404.astro). */
  notFound: {
    title: 'Page introuvable',
    description: "Cette page n'existe pas ou a changé d'adresse.",
    eyebrow: 'Erreur 404',
    titleStrong: 'Cette page',
    titleLight: 'est introuvable.',
    text: "Le lien est peut-être ancien, ou l'adresse contient une faute de frappe. Repartez de l'accueil ou de l'une des pages ci-dessous.",
    home: "Retour à l'accueil",
    linksTitle: 'Pages utiles',
    links: {
      projets: { title: 'Nos projets', text: 'Conservation, reboisement, santé, plantes aromatiques : nos actions sur le terrain.' },
      don: { title: 'Faire un don', text: 'Soutenir les communautés et la forêt à Madagascar et au Burkina Faso.' },
      contact: { title: 'Contact', text: 'Une question, un lien cassé à signaler ? Écrivez-nous.' },
    },
  },

  /** Page d'erreur serveur (src/pages/500.astro), servie par l'hébergeur pour les erreurs 5xx. */
  serverError: {
    title: 'Erreur du serveur',
    description: 'Le site rencontre un problème temporaire.',
    eyebrow: 'Erreur serveur',
    titleStrong: 'Le site rencontre',
    titleLight: 'un problème.',
    text: "Ce n'est pas de votre fait : notre serveur ne répond pas correctement pour le moment. Réessayez dans quelques minutes.",
    retry: 'Réessayer',
    home: "Retour à l'accueil",
    /** Suivi de l'adresse e-mail de l'ONG. */
    contact: 'Si le problème continue, écrivez-nous à ',
  },
};

export default fr;
