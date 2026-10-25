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
    /** Légende de la photo du hero (lieu seulement : pas de crédit photo sur le site). */
    photoCaption: '{name}, Madagascar',
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
      caption: 'Kollo, Burkina Faso',
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
      caption: "Cueillette d'ylang-ylang, Nosy Be — © Olivier Behra",
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
      titleLight: 'plus de trente ans de terrain.',
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
          title: 'Vohimana protégée',
          text: "La forêt qu'on disait condamnée entre dans la liste officielle des nouvelles aires protégées de Madagascar.",
        },
      ],
      imageAlt: 'Cascade dans la forêt de Vohimana',
      quote: "C'est quand j'ai vu ce paysage que je me suis dit que c'était là qu'il fallait installer la base de Vohimana.",
      quoteAuthor: 'Olivier Behra, fondateur — © Olivier Behra',
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
      caption: 'Vari noir et blanc, forêt de Vohimana',
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
      // TODO ONG : chapeau à remplacer quand la liste et les logos seront complets.
      lead: "Les logos seront ajoutés dès que l'ONG les aura transmis.",
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
      /** Objet du mail prérempli par le bouton « Nous écrire ». */
      mailSubject: 'Proposition de partenariat',
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
      caption: "Forêts et mangroves d'Ambohidravy",
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
      country: 'États-Unis',
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
      commons:
        "Contributeurs de Wikimedia Commons, sous licences Creative Commons : l'auteur et la licence sont précisés en légende de chaque image concernée.",
    },
    links: {
      title: 'Liens externes',
      paragraphs: [
        "Ce site contient des liens vers d'autres sites, notamment HelloAsso pour les dons et les sites de nos partenaires. L'Homme & l'Environnement n'exerce aucun contrôle sur leur contenu et ne peut en être tenue responsable.",
        "Vous pouvez librement créer un lien vers ce site, à condition qu'il ne porte pas atteinte à l'image de l'association.",
      ],
    },
  },
};

export default fr;
