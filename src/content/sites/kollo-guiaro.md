---
name: Kollo et Guiaro
country: burkina-faso
# TODO ONG : région à confirmer (Guiaro serait dans la province du Nahouri, région Centre-Sud).
region: Centre-Sud
photo: ../../assets/photos/engager-donner.jpg
photoAlt: "Réunion des habitants sous un arbre, village de Kollo, Burkina Faso"
photoPosition: "50% 40%"
# Contenus de la maquette FicheKollo. Entre crochets : À FOURNIR par l'ONG (accroche, présentation,
# chiffres, localisation, milieu, espèces, groupements, partenaires, crédits photo).
summary: "Eau potable solaire, cultures durables et éducation environnementale, avec les familles de Kollo et Guiaro. [Présentation du site à fournir.]"
# tagline : accroche à fournir (le hero affiche « [à fournir] »).
intro: "Notre site au Burkina Faso. Avec les familles de Kollo et Guiaro, L'Homme & l'Environnement agit pour l'accès à l'eau potable, des cultures durables et l'éducation environnementale. [Présentation à compléter.]"
story:
  titleStrong: "Le site"
  titleLight: "de Kollo et Guiaro"
  paragraphs:
    - "[Texte à fournir : histoire du site, milieu naturel, année de début de l'action.]"
    - "L'adduction d'eau par énergie solaire y sécurise l'accès à l'eau des familles. Des cultures durables et de nouveaux débouchés aident à remplacer la culture sur brûlis, et la sensibilisation dans les écoles accompagne la scolarisation des enfants."
    - "Des éléphants sont présents dans la zone. [Précisions à fournir.]"
# location, habitat : à fournir (commune, province et région ; milieu naturel).
# Chiffres : valeurs dans src/data/chiffres.ts (BURKINA, à fournir).
figures:
  - { key: hectares, text: "protégés sur le site." }
  - { key: families, text: "familles ayant accès à l'eau potable grâce à l'adduction solaire." }
  - { key: pupils, text: "élèves sensibilisés dans les écoles." }
# speciesLead : espèces recensées sur le site, à fournir.
species:
  # TODO ONG : statut UICN, description et crédit de la photo à fournir.
  - name: Loxodonta africana
    type: animal
    text: "L'éléphant d'Afrique, présent dans la zone. [Statut UICN à confirmer, description à fournir.]"
    photo: ../../assets/photos/pays-burkina-elephants.jpg
    photoAlt: "Un troupeau d'éléphants traverse une piste de terre rouge, Burkina Faso"
  - { name: "[Espèce à fournir]", type: animal }
  - { name: "[Espèce à fournir]", type: plante }
actionsLead: "L'eau, la terre et l'école : trois leviers menés avec les familles de Kollo et Guiaro."
actions:
  - icon: droplet
    title: Eau potable solaire
    text: "L'adduction d'eau par énergie solaire sécurise l'accès à l'eau des familles de Kollo et Guiaro."
    project: eau-potable-solaire
  - icon: sprout
    title: Chaînes de valeur agricoles
    text: "Des cultures durables et des débouchés pour remplacer la culture sur brûlis."
    project: chaines-de-valeur
  - icon: graduation-cap
    title: Éducation environnementale
    text: "Sensibilisation dans les écoles et accompagnement de la scolarisation des enfants."
    project: education-environnementale
# TODO ONG : groupements locaux et partenaires du site à fournir (cartes de la maquette en attente).
groups:
  lead: "[Texte à fournir : groupements locaux qui portent les activités du site.]"
  items:
    - { name: "[Groupement à fournir]", role: "[Activité à fournir]" }
    - { name: "[Groupement à fournir]", role: "[Activité à fournir]" }
    - { name: "[Groupement à fournir]", role: "[Activité à fournir]" }
    - { name: "[Groupement à fournir]", role: "[Activité à fournir]" }
partners:
  - { name: "[Partenaire à fournir]" }
  - { name: "[Partenaire à fournir]" }
  - { name: "[Partenaire à fournir]" }
cta:
  titleStrong: "Soutenir Kollo et Guiaro,"
  titleLight: "c'est sécuriser l'eau des familles."
  text: "Votre don finance directement les actions sur le site."
  photo: ../../assets/photos/pays-burkina-elephants.jpg
  photoPosition: "50% 60%"
# Position du repère sur la carte du Burkina Faso, en % de sa largeur (x) et de sa hauteur (y).
# TODO ONG : position indicative au centre-sud (province du Nahouri, au sud-est de Ouagadougou), à confirmer.
mapPosition: { x: 53.5, y: 68.5 }
order: 1
---
