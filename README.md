# L'Homme & l'Environnement — site web

Nouveau site de l'ONG [L'Homme & l'Environnement](https://www.homme-environnement.org) (conservation et développement local, Madagascar et Burkina Faso, depuis 1993).

Site **statique** et **bilingue** (français par défaut à la racine, anglais sous `/en/`), construit avec [Astro](https://astro.build) et TypeScript (mode strict), sans back-end ni framework CSS.

## Lancer le projet

Prérequis : Node.js 22.22 ou plus récent.

```bash
npm install
```

```bash
npm run dev
```

Le site tourne sur <http://localhost:4321> (version anglaise : <http://localhost:4321/en/>).

| Commande          | Rôle                                                        |
| ----------------- | ----------------------------------------------------------- |
| `npm run dev`     | Serveur de développement avec rechargement à chaud          |
| `npm run build`   | Vérification des types (`astro check`) puis build dans `dist/` |
| `npm run preview` | Sert le build de `dist/` en local pour le tester            |
| `npm run check`   | Vérification des types seule                                |

Le dossier `dist/` est un site statique prêt à déposer sur Netlify, Vercel ou Cloudflare Pages (commande de build `npm run build`, dossier publié `dist`).

## Organisation

```
public/
  fonts/              Rubik variable (woff2, sous-ensemble latin), auto-hébergée
  favicon.svg         isotype sauge
src/
  assets/
    logos/            logo couleur FR, logo couleur EN (« Man & the Environment »), isotype
    photos/           photos sources, optimisées au build par astro:assets (AVIF/WebP)
  components/         composants de la page (voir ci-dessous)
  data/navigation.ts  destinations des menus, lien de don, réseaux sociaux
  i18n/
    fr.ts             textes en français (interface + contenus de la home)
    en.ts             textes en anglais (même forme, vérifiée par TypeScript)
    index.ts          langues, t(lang), URL par langue
  layouts/BaseLayout.astro  <head> : SEO, Open Graph, hreflang, police, lang
  pages/
    index.astro       accueil en français (/)
    en/index.astro    accueil en anglais (/en/)
  scripts/stats.ts    animation des chiffres clés
  styles/
    tokens.css        tokens du design system en variables CSS
    global.css        reset, focus, conteneur, utilitaires
```

### Composants

| Composant           | Rôle |
| ------------------- | ---- |
| `HomePage`          | Page d'accueil commune aux deux langues (ordre des sections, photos) |
| `Header`            | Logo, menu principal, sélecteur FR / EN, bouton Don, burger en dessous de 900px |
| `LangSwitcher`      | Pilule segmentée FR / EN du header (desktop), lien vers la même page dans l'autre langue |
| `Button`            | Pilule : `don` (pêche, cœur), `secondary` (contour, flèche), `on-dark` |
| `Hero`              | Sur-titre, H1 en deux temps, chapeau, boutons, photo organique et isotype |
| `StatsBand` / `StatCard` | Bande sauge des chiffres clés, illustrations SVG (anneau, barres, pastilles) |
| `SectionHeading`    | Titre de section en deux temps (fort + doux), sur-titre et lien facultatifs |
| `PillarCard`        | Pilier de l'approche, photo en arche |
| `CountryCard`       | Grande carte photo (pays mis en avant) avec pastilles de sites (`Chip`) |
| `EngageCard`        | Carte blanche cliquable ; variante `country` pour les pays secondaires |
| `PartnersStrip`     | Logos partenaires ; défilement en boucle en mobile |
| `NewsletterSection` / `NewsletterForm` | Bloc newsletter sur photo, champ + bouton en une pilule |
| `Footer`            | Pitch, bouton Don, LinkedIn et Facebook, plan du site, mentions, lien « English version » / « Version française » |

## Design system

Les règles viennent du design system de l'ONG (artifact « Design System ») : couleurs, typographie, cartes, boutons, accessibilité, animations. Toutes les valeurs passent par les variables de [`src/styles/tokens.css`](src/styles/tokens.css) ; ne pas ajouter de couleur en dur dans un composant.

Rappels :

- **Rubik** seule police. **Sauge** jamais en texte ; texte `noir-95` sur sauge et sur pêche.
- **Pêche** réservée au bouton « Faire un don » et aux points d'arrivée des illustrations (10 % max).
- Sections en aplat (pas de fondu), cartes blanches avec `--shadow-card` et bordure douce.
- Focus visible partout : contour 2px basalte décalé de 2px.
- Cartes cliquables (classe `card-lift`) : légère élévation au survol et au focus (`--lift-card-hover`, `--shadow-card-hover`), sans soulignement ; sans déplacement avec `prefers-reduced-motion`.

## Langues (i18n)

- Routage i18n d'Astro (`astro.config.mjs`) : `fr` par défaut sans préfixe, `en` sous `/en/`.
- Aucun texte en dur dans les composants : tout passe par `src/i18n/fr.ts` et `src/i18n/en.ts`. Ajouter une clé dans `fr.ts` oblige à l'ajouter dans `en.ts` (erreur TypeScript sinon).
- La langue de la page vient de `Astro.currentLocale` ; `t(lang)` renvoie le dictionnaire.
- Logo de la version anglaise : variante « Man & the Environment » (LOGO-ENG-2 de la charte), jamais la version « Human ».
- **V1** : l'interface anglaise (menus, boutons, libellés d'accessibilité) est traduite ; le contenu de la home anglaise est encore une copie du français, à traduire (`home` dans `en.ts`).

## Animations et accessibilité

- Chiffres clés : au premier passage dans l'écran (IntersectionObserver, une seule fois), compteur de 0 à la valeur, traits de l'anneau dans le sens horaire, barres qui poussent, pastilles une à une.
- Logos partenaires : défilement continu en dessous de 900px.
- Avec `prefers-reduced-motion: reduce`, tout est désactivé (valeurs finales affichées, logos en défilement manuel).
- **Sans JavaScript**, la page est complète : chiffres et illustrations affichés en entier, liens du menu visibles sous le logo en mobile.

## À brancher plus tard

- **Dons** : HelloAsso. Le lien est centralisé dans `DON_URL` ([`src/data/navigation.ts`](src/data/navigation.ts)).
- **Newsletter** : outil d'emailing pas encore choisi. Le formulaire ([`NewsletterForm.astro`](src/components/NewsletterForm.astro)) a le markup accessible mais l'envoi est bloqué côté client ; une fois l'outil choisi, renseigner l'`action` et retirer le `preventDefault`.
- **Réseaux sociaux** : URL LinkedIn et Facebook en placeholder dans `SOCIAL_URLS` ([`src/data/navigation.ts`](src/data/navigation.ts)).
- **Traduction anglaise** de la home (voir « Langues »).
- **Contenus** : en dur dans `src/pages/index.astro` pour l'instant ; passage en Markdown / CMS à décider.
- **Pages internes** : tous les liens pointent vers `#`.

## Contenus provisoires (maquette V1)

Repris tels quels de la maquette, à valider avec l'ONG avant la mise en ligne :

- **400 000 arbres** plantés : chiffre à confirmer.
- **Logos partenaires** : fictifs (Fondation, Agence, collectif, Région, ENTREPRISE), à remplacer par les vrais logos.
- La photo de la carte Madagascar est réutilisée en fond de la newsletter (le design system demande une photo unique par page).
- La valeur de la couleur pêche est estimée d'après le CMJN de la charte : à confirmer avec le graphiste.

Photos © Day Nabih, © Marc Gansuana, © Langaha Be.
