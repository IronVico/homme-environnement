---
name: Vohimana
country: madagascar
region: Centre-Est
photo: ../../assets/photos/hero-artisane-vohimana.jpg
photoAlt: Une artisane prépare des fibres végétales pour la vannerie, Vohimana
# photoCredit: À FOURNIR
summary: "Le site historique de l'ONG, ouvert à la visite. Un sanctuaire écotouristique où 12 espèces de lémuriens cohabitent, en partenariat avec le Muséum national d'Histoire naturelle."

# ---- Fiche du site (maquette FicheVohimana) ----
tagline: la forêt qui a déjoué les pronostics.
intro: "Notre site historique, ouvert à la visite. Un sanctuaire où 12 espèces de lémuriens cohabitent, protégé depuis 30 ans avec les communautés et en partenariat avec le Muséum national d'Histoire naturelle."
story:
  titleStrong: Une forêt condamnée
  titleLight: qui a tenu bon.
  paragraphs:
    - "En 2001, le scientifique Denis Vallan prédisait la disparition de la forêt de Vohimana en deux ans : la culture sur brûlis y était la seule ressource des villages."
    - "Quinze ans plus tard, les analyses du couvert forestier national montrent que la forêt a mieux résisté que la moyenne des parcs nationaux du pays. La protection stricte de la forêt primaire s'y accompagne d'un soutien direct aux habitants : plantes médicinales, agriculture durable, écotourisme."
    - "Aujourd'hui, des associations locales prennent le relais pour faire durer cet engagement."
location: "Communes d'Ambatovola et d'Andasibe, district de Moramanga, région Alaotra-Mangoro"
habitat: Forêt humide de moyenne altitude du corridor Ankeniheny-Zahamena
# Valeurs dans src/data/chiffres.ts (SITE_FIGURES.vohimana).
figures:
  - { key: hectares, text: "protégés dans le corridor forestier de l'Est." }
  - { key: years, text: "de présence sur le site, notre tout premier." }
  - { key: beneficiaries, text: bénéficiaires directs dans les villages voisins. }
  - { key: lemurSpecies, text: "espèces de lémuriens, dont 3 en danger critique." }
  - { key: frogSpecies, atLeast: true, text: "espèces de grenouilles, un record mondial." }
  - { key: medicinalPlants, atLeast: true, text: plantes médicinales recensées. }
speciesLead: "70 espèces de grenouilles, 33 de reptiles, 12 de lémuriens et plus de 545 espèces de plantes vivent à Vohimana."
# Photos Wikimedia Commons sous licence libre : garder auteur, licence et liens.
species:
  - name: Indri indri
    type: animal
    status: CR
    text: Le plus grand des lémuriens vivants, célèbre pour son chant qui porte à des kilomètres.
    photo: ../../assets/photos/especes/indri-indri.jpg
    photoAlt: Un indri accroché à un tronc
    photoPosition: 50% 35%
    credit:
      author: Charles J. Sharp
      license: CC BY-SA 4.0
      licenseUrl: https://creativecommons.org/licenses/by-sa/4.0/deed.fr
      source: https://commons.wikimedia.org/wiki/File:Indri_(Indri_indri).jpg
  - name: Varecia variegata
    type: animal
    status: CR
    text: Le vari noir et blanc, grand lémurien des canopées de forêt humide.
    photo: ../../assets/photos/especes/varecia-variegata.jpg
    photoAlt: Un vari noir et blanc dans les arbres
    photoPosition: 50% 40%
    credit:
      author: Frank Vassen
      license: CC BY 2.0
      licenseUrl: https://creativecommons.org/licenses/by/2.0/deed.fr
      source: https://commons.wikimedia.org/wiki/File:Black-and-White_Ruffed_Lemur,_Mantadia,_Madagascar.jpg
  - name: Propithecus diadema
    type: animal
    status: CR
    text: "Le propithèque à diadème, l'un des lémuriens les plus colorés de l'île."
    photo: ../../assets/photos/especes/propithecus-diadema.jpg
    photoAlt: Un propithèque à diadème dans la forêt
    photoPosition: 50% 30%
    credit:
      author: Charles J. Sharp
      license: CC BY-SA 4.0
      licenseUrl: https://creativecommons.org/licenses/by-sa/4.0/deed.fr
      source: https://commons.wikimedia.org/wiki/File:Diademed_sifaka_(Propithecus_diadema)_2.jpg
  - name: Calumma gallus
    type: animal
    status: endemique
    text: Caméléon au long nez coloré, symbole de l'endémisme de Vohimana.
    photo: ../../assets/photos/especes/calumma-gallus.jpg
    photoAlt: Un caméléon Calumma gallus mâle, réserve de Vohimana
    photoPosition: 50% 50%
    credit:
      author: Frank Vassen
      license: CC BY 2.0
      licenseUrl: https://creativecommons.org/licenses/by/2.0/deed.fr
      source: https://commons.wikimedia.org/wiki/File:Male_Long-nosed_Chameleon_(Calumma_gallus),_Vohimana_reserve,_Madagascar.jpg
actionsLead: Protéger la forêt en donnant aux habitants les moyens d'en vivre autrement.
actions:
  - icon: surveillance
    title: Surveillance forestière
    text: Des gardes forestiers issus des villages patrouillent la réserve et suivent la faune.
    project: surveillance-forestiere
  - icon: laboratoire
    title: Plantes médicinales et laboratoire
    text: Plus de 160 plantes recensées, transformées sur place en huiles essentielles et remèdes.
    project: plantes-medicinales
  - icon: tourisme
    title: Écotourisme communautaire
    text: "Gîte, sentiers et guides locaux : chaque visite finance la protection de la forêt."
    project: ecotourisme
  - icon: agriculture
    title: Chaînes de valeur agricoles
    text: Des cultures durables pour remplacer la culture sur brûlis, première cause de déforestation.
    project: chaines-de-valeur
groups:
  lead: Six groupements locaux portent aujourd'hui les activités du site.
  items:
    - { name: Comité de gestion de Vohimana, role: Gestion du site }
    - { name: Fivoarana, role: Éducation }
    - { name: Vohimana Salama, role: Tradipraticiens }
    - { name: Manarapenitra, role: Huiles essentielles }
    - { name: Kanto, role: Artisanat }
    - { name: MERCIE Vohimana, role: Tourisme }
# Partenaires : l'URL est facultative (sans URL, la pastille n'est pas un lien).
partners:
  - { name: Rainforest Trust, url: "https://www.rainforesttrust.org/" }
  - { name: Pure Trade } # URL à fournir
  - { name: Caméléon Center Conservation } # URL à fournir
  - { name: Muséum national d'Histoire naturelle, url: "https://www.mnhn.fr/fr" }
  - { name: La Guilde, url: "https://la-guilde.org/" }
  - { name: Tam Tam Phyto Aroma } # URL à fournir
  - { name: Bourrelier Group, url: "https://www.bourrelier-group.com/" }
# Seul site ouvert à la visite : boutons « Venir sur le terrain » sur la fiche.
visitable: true
cta:
  titleStrong: Visitez Vohimana,
  titleLight: votre séjour protège la forêt.
  text: Votre visite finance directement la protection du corridor forestier et les filières des villages.

# Position du repère sur la carte du pays, en % de sa largeur (x) et de sa hauteur (y).
mapPosition: { x: 70.72, y: 51.2 }
order: 1
---
