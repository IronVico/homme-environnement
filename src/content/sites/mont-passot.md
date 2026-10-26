---
name: Mont-Passot
country: madagascar
region: Nosy Be
photo: ../../assets/photos/site-mont-passot.jpg
photoAlt: "Un couple de lémurs macaco dans les arbres : le mâle noir et la femelle rousse aux favoris blancs"
summary: "Les hauteurs sacrées de l'île aux parfums : des lacs de cratère qui alimentent Nosy Be en eau, sauvés grâce aux communautés et à la filière ylang-ylang."

# ---- Fiche du site (source : présentation PDF de l'ONG, 2026) ----
tagline: les lacs qui abreuvent Nosy Be.
intro: "Sur les hauteurs de Nosy Be, des lacs de cratère sacrés entourés de forêt. Ils gardent l'eau douce de l'île et des espèces qui ne vivent nulle part ailleurs."
story:
  titleStrong: Des lacs menacés,
  titleLight: un paysage restauré.
  paragraphs:
    - "Il y a quelques années, la déforestation des versants et les cultures sur les berges menaçaient les lacs. L'érosion dégradait la qualité de l'eau."
    - "Depuis plus de quinze ans, nous accompagnons les communautés. Filière d'huile essentielle d'ylang-ylang, reboisement des versants, associations locales renforcées : la tendance s'est inversée."
    - "Aujourd'hui, la baisse des prix sur les marchés internationaux fragilise les filières locales. Il faut consolider ce modèle pour qu'il dure."
location: "Hauteurs de l'île de Nosy Be (13°19′ S, 48°13′ E)"
habitat: "Lacs de cratère sacrés entourés de forêts relictuelles"
# Valeurs dans src/data/chiffres.ts (SITE_FIGURES['mont-passot']).
figures:
  - { key: hectares, text: protégés sur le site. }
  - { key: naturalForest, text: "de forêt naturelle autour des lacs." }
  - { key: lakes, text: "lacs de cratère, réserve d'eau douce de l'île." }
  - { key: vertebrateSpecies, atLeast: true, text: "espèces de vertébrés recensées, dont 3 lémuriens." }
  - { key: threatenedSpecies, text: "espèces au statut défavorable sur la liste rouge de l'UICN." }
  - { key: years, atLeast: true, text: d'accompagnement des communautés. }
speciesLead: "3 espèces de lémuriens, 5 poissons remarquables, 21 reptiles et amphibiens et 39 oiseaux vivent au Mont-Passot. Plusieurs n'existent qu'à Nosy Be."
species:
  - name: Lepilemur tymerlachsoni
    type: animal
    status: CR
    text: Un lémurien endémique de Nosy Be, qu'on ne trouve nulle part ailleurs.
    photo: ../../assets/photos/especes/lepilemur-tymerlachsoni.jpg
    photoAlt: Un lépilémur et son petit accrochés à un tronc
    photoPosition: 50% 35%
    credit: { author: Chelsea F. }
  - name: Paretroplus kieneri
    type: poisson
    status: VU
    text: Un poisson des lacs, strictement endémique de Nosy Be.
  - name: Rhombophryne testudo
    type: animal
    status: EN
    text: Une grenouille strictement endémique de Nosy Be.
    photo: ../../assets/photos/especes/rhombophryne-testudo.jpg
    photoAlt: Une grenouille Rhombophryne testudo posée sur la terre
    photoPosition: 50% 50%
    credit: { author: Markus A. Roesch }
actionsLead: "Préserver les lacs, les forêts et les communautés qui en vivent."
actions:
  - icon: trees
    title: Protéger les bassins versants
    text: "Restaurer les forêts qui entourent les lacs, lutter contre l'érosion et garder une eau de qualité."
    project: lacs-sacres
  - icon: sprout
    title: Soutenir les filières durables
    text: "Accompagner les associations locales et la filière d'huile essentielle d'ylang-ylang, compatible avec la forêt."
    project: ylang-ylang
  - icon: flask
    title: Recherche et suivi écologique
    text: "Mieux connaître les espèces endémiques des lacs et suivre l'évolution de leurs habitats."
# groups: à fournir (la présentation parle d'associations locales sans les nommer).
# partners: à fournir.
cta:
  titleStrong: Soutenir le Mont-Passot,
  titleLight: c'est protéger l'eau de toute une île.
  text: "Votre don préserve un écosystème unique au monde et la ressource en eau dont dépendent les habitants de Nosy Be."

# Position du repère sur la carte du pays, en % de sa largeur (x) et de sa hauteur (y).
mapPosition: { x: 67.52, y: 12.03 }
order: 3
---
