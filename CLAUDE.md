# Règles du projet

Site statique Astro + TypeScript, bilingue FR (racine) / EN (`/en/`). Voir le README pour lancer le projet.
Chaque nouvelle page ou composant respecte les règles ci-dessous **avant** d'ouvrir une PR.
Elles viennent de l'audit WCAG 2.2 AA du site (PR #15) : la cible est AA, en mode clair **et** sombre.

## Charte et couleurs

- **Rubik** est la seule police. Texte en basalte, jamais en sauge (#97A785, 2,6:1 sur blanc) : la sauge sert aux icônes décoratives, filets et fonds. Pêche réservée au don.
- **Toujours les tokens de rôle** (`src/styles/tokens.css`), jamais une couleur de la charte en direct :
  `--fond`, `--surface`, `--section`, `--disque`, `--texte`, `--texte-doux`, `--texte-fort`, `--bordure-carte`, `--trait`, `--bouton-plein`, `--texte-sur-bouton`, `--accent`, `--don`.
  Une couleur en dur (`var(--blanc)`, `var(--basalte)`, `#…`) n'est permise que sur un fond qui ne change pas avec le thème (photo assombrie, carte basalte volontairement sombre) ; le dire en commentaire.
- **Contrastes** : texte courant 4,5:1, grands titres (24px, ou 18,66px en gras) 3:1, contour d'un champ, icône porteuse de sens et état sélectionné 3:1. `--texte-doux` (ardoise en clair) seulement sur `--fond` ou `--surface`.
- **Texte sur photo** : toujours sur un voile (`--voile`, 62 %) ou un dégradé assez dense sous **tout** le bloc de texte, sur-titre compris. Vérifier les zones les plus claires de la photo, à 1440 et à 390px.

## Clavier et focus

- Tout ce qui se clique se fait aussi au clavier (Tab, Entrée, Espace), dans un ordre logique, sans piège. Échap ferme menus, sous-menus et infobulles.
- Focus visible partout : la règle globale `:focus-visible` (contour `--texte`) suffit sur fond uni. Sur photo ou fond sombre fixe, contour `var(--blanc)` (déjà fait dans `PhotoBanner`). Jamais `outline: none` sans contour de remplacement.
- Un élément affiché au survol ou au focus (étiquette, infobulle) disparaît avec Échap : utiliser `data-tooltip` (voir plus bas) ou suivre `[data-tooltips-off]`.

## Survol et animations

- **Survol réservé à ce qui est interactif** (lien, bouton, carte cliquable `a.card-lift`). Aucun effet de survol (zoom, rebond, élévation) sur une carte, une photo ou une icône qui ne fait rien. Une carte qui contient un lien n'est pas cliquable : seul le lien a un survol.
- **`prefers-reduced-motion`** : toute animation ou transition de mouvement a sa version coupée.
- **Ce qui bouge seul plus de 5 s** (défilement, carrousel, rotation, vidéo) a un bouton Pause : composant `PauseButton` dans un parent `[data-motion]`, l'animation s'arrête sur `[data-paused]`.

## Noms, images, structure

- Bouton ou lien à icône seule : `aria-label` + infobulle `data-tooltip` avec le même texte (système de `global.css` et `src/scripts/tooltip.ts` ; `data-tooltip-align="start" | "end"` au bord de l'écran, `data-tooltip-pos="below"` en haut de page). Ne pas recréer d'infobulle.
- Images : `alt` qui décrit la photo quand elle porte du sens (photo d'en-tête, espèce, portrait seul) ; `alt=""` si elle est décorative ou si le texte voisin dit déjà tout (photo d'une carte-lien titrée).
- Un seul `h1` par page, pas de saut de niveau (h2 puis h3). Sections avec `aria-labelledby` sur leur titre.
- États : `aria-expanded` (menus, accordéons), `aria-pressed` (filtres, choix de montant), `aria-current="page"` (lien de la page courante). Un bouton dont le libellé dit l'action (« Passer en mode clair ») ne prend pas `aria-pressed`.
- Listes de définitions : `dt`/`dd` enfants directs du `dl` ou d'un `div` enfant du `dl`.

## Formulaires

- Chaque champ a un label (visible ou `.visually-hidden`), jamais le seul placeholder.
- Erreur de saisie : message en texte sous le champ, `aria-invalid`, `aria-describedby`, annoncé par `aria-live="polite"` ; affiché en quittant le champ, retiré dès que la saisie redevient valide.
- Statut après envoi dans une zone `role="status"`.

## Mise en page

- Cibles tactiles d'au moins 24×24px, 44×44px pour les boutons à icône.
- Aucun scroll horizontal ni texte coupé à 320px et au zoom 200 % (720px de large) : les titres coupent un mot trop long, les libellés de bouton passent sur deux lignes sous 400px.
- Contenu EN : `lang` juste. Un bloc encore en français sur une page anglaise prend `lang="fr"`.

## Vérifier avant la PR

1. `npm run build` sans erreur ni avertissement.
2. axe-core (navigateur de prévisualisation) sur la page FR et EN, en clair et en sombre, à 1440 et 390px.
3. Parcours au clavier de la page, menus compris, à 1440 et 390px.
4. Largeur 320px : rien ne déborde.
5. Texte sur photo : contraste mesuré sur les zones claires.
6. Dans la description de la PR : ce qui a été vérifié et ce qui reste à arbitrer.
