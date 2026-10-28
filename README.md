# L'Homme & l'Environnement — site web

Nouveau site de l'ONG [L'Homme & l'Environnement](https://www.homme-environnement.org) (conservation et développement local, Madagascar et Burkina Faso, depuis 1993).

Site **statique** et **bilingue** (français par défaut à la racine, anglais sous `/en/`), construit avec [Astro](https://astro.build) et TypeScript (mode strict), sans back-end ni framework CSS.

## Lancer le projet

Prérequis : Node.js 24 (Astro 7 demande 22.22 minimum). La version majeure est figée à `24.x` dans `package.json`, la même que dans le déploiement ([`.github/workflows/deploy-ovh.yml`](.github/workflows/deploy-ovh.yml)).

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

Redirections 301 (anciennes URL, dont celles du site WordPress), HTTPS forcé, pages 404 et cache : [`public/.htaccess`](public/.htaccess) (Apache), à compléter à mesure que les pages cibles existent.

Le dossier `dist/` est le site prêt à déposer : pages statiques, plus un script PHP pour le formulaire de contact. Il est publié chez OVH (voir « Déploiement »).

## Déploiement (OVH)

Le site est hébergé par l'ONG chez OVHcloud, offre d'hébergement Web **Perso** (Apache 2.4 + PHP, accès FTP). À chaque modification de `main`, la GitHub Action [`deploy-ovh.yml`](.github/workflows/deploy-ovh.yml) lance `npm run build` puis [`ovh/deploy.sh`](ovh/deploy.sh), qui dépose `dist/` par **FTPS** (FTP chiffré) avec `lftp` et supprime les fichiers qui ne sont plus dans le build. Elle peut aussi se lancer à la main (onglet Actions → Déploiement OVH → Run workflow).

Réglages du dépôt GitHub (Settings → Secrets and variables → Actions) ; aucune valeur dans le dépôt :

| Nom | Type | Rôle |
| --- | ---- | ---- |
| `OVH_FTP_HOST` | secret | Serveur FTP du cluster OVH (ex. `ftp.clusterXXX.hosting.ovh.net`, espace client → Hébergement → FTP-SSH) |
| `OVH_FTP_USER` | secret | Identifiant FTP |
| `OVH_FTP_PASSWORD` | secret | Mot de passe FTP |
| `OVH_FTP_DIR` | variable | Dossier du site, relatif à la racine FTP (ex. `www`, ou le dossier du nouveau site, voir plus bas). Obligatoire |
| `OVH_FTP_PROTOCOL` | variable | `ftps` (par défaut) ou `sftp` si OVH ne propose que SFTP |
| `OVH_SSH_KNOWN_HOSTS` | secret | `sftp` seulement, facultatif : empreinte du serveur (ligne `known_hosts`) |
| `OVH_DEPLOY` | variable | Interrupteur : `on` pour déposer. Sans lui, l'Action construit et vérifie le site sans rien envoyer |

Ordre du dépôt : nouveaux fichiers de `_astro/` d'abord, puis pages et autres fichiers (suppression des obsolètes), enfin nettoyage de `_astro/` ; chaque fichier est envoyé sous un nom temporaire puis renommé, pour qu'aucun visiteur ne reçoive un fichier à moitié copié. Garde-fous : le script refuse un dossier qui contient un WordPress (`wp-config.php`) et ne supprime jamais `.ovhconfig` ni `.well-known/`.

**Bascule depuis le WordPress actuel** (même hébergement) : ne pas déposer dans `www/`, qui le contient. Déposer dans un nouveau dossier (ex. `site-astro/`), le relier à un sous-domaine de recette dans l'espace client (Multisite, avec certificat SSL), vérifier, puis faire pointer `homme-environnement.org` et `www.` vers ce dossier dans Multisite. Le WordPress reste intact pour un retour arrière.

Depuis son poste (lftp installé) : `npm run build` puis `OVH_FTP_HOST=… OVH_FTP_USER=… OVH_FTP_PASSWORD=… OVH_FTP_DIR=… ovh/deploy.sh`.

PHP : le script de contact fonctionne de PHP 7.4 (version actuelle de l'hébergement, pour le WordPress) à 8.x. Passer l'hébergement en PHP 8.x (fichier `.ovhconfig`) une fois le WordPress retiré.

## Mesure d'audience

Aucun outil branché pour l'instant (Vercel Web Analytics ne fonctionne que sur Vercel). Emplacement réservé en fin de `<body>` dans [`BaseLayout.astro`](src/layouts/BaseLayout.astro). Solution **sans cookies** à choisir (Umami ou GoatCounter, par exemple) : ajouter sa balise `<script defer>` à cet emplacement et renseigner `ANALYTICS_TOOL` dans [`src/data/confidentialite.ts`](src/data/confidentialite.ts) (affiché sur la page Confidentialité).

## Environnement de build

`SITE_ENV=preview npm run build` construit un site de recette : bandeau des derniers dons rempli de dons fictifs, comme avec `npm run dev`. Tout autre build (dont celui du déploiement) est un build de production, sans dons fictifs.

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
    sites/madagascar.astro     page pays Madagascar (/sites/madagascar)
    en/sites/madagascar.astro  page pays en anglais (/en/sites/madagascar)
  content/sites/      un fichier Markdown par site (nom, pays, région, photo, résumé, espèces)
  content/projets.json  projets, reliés aux sites où ils sont menés
  content.config.ts   schémas des collections « sites » et « projets »
  data/chiffres.ts    chiffres de Madagascar et de chaque site (un seul endroit à modifier)
  scripts/stats.ts    animation des chiffres clés
  styles/
    tokens.css        tokens du design system en variables CSS
    global.css        reset, focus, conteneur, utilitaires
```

### Composants

| Composant           | Rôle |
| ------------------- | ---- |
| `HomePage`          | Page d'accueil commune aux deux langues (ordre des sections, photos) |
| `CountryPage`       | Page pays (Madagascar, Burkina Faso) commune aux deux langues ; sites et projets lus dans les collections, chiffres dans `data/chiffres.ts` |
| `Breadcrumb`        | Fil d'Ariane des pages internes |
| `PageHero`          | Hero des pages internes : H1 en deux temps, chapeau, bouton secondaire, photo en arche |
| `SitesExplorer`     | Carte du pays avec repères numérotés + liste des sites, liés (clic sur un repère, survol ou focus d'une carte) |
| `MadagascarMap` / `BurkinaMap` | Cartes SVG des pays (courbes de niveau, capitale, mers ou pays voisins), libellés traduisibles |
| `SiteCard`          | Carte compacte d'un site, toute cliquable : numéro et nom, accroche sur 2 lignes, surface protégée |
| `ProjectCard` / `ProjectGrid` | Carte projet compacte sans photo (icône, titre, phrase, sites), en grille de 3 colonnes : pages pays et actions des fiches site. La carte avec photo (`ProjectPhotoCard`) est réservée à « Nos projets » |
| `PhotoBanner`       | Carte sur photo assombrie (titre + phrase) avec contenu libre : newsletter, boutons d'appel |
| `Header`            | Logo, menu principal (pastille vert clair au survol, basalte pour la rubrique en cours), sélecteur FR / EN, bouton Don ; sous-menus déroulants (accordéon dans le burger) ; fixé en haut au scroll ; burger en dessous de 1280px |
| `LangSwitcher`      | Pilule segmentée FR / EN du header (desktop), lien vers la même page dans l'autre langue |
| `Button`            | Pilule : `don` (pêche, cœur), `secondary` (contour, flèche), `on-dark` |
| `Hero`              | Sur-titre, H1 en deux temps, chapeau, boutons, photo organique et isotype |
| `StatsBand` / `StatCard` | Bande sauge des chiffres clés, illustrations SVG (anneau, barres, pastilles, sites, part, familles, eau) ; valeur texte (« [X] ») affichée sans compteur |
| `SectionHeading`    | Titre de section en deux temps (fort + doux), sur-titre, chapeau (toujours dessous) et lien facultatifs |
| `PillarCard`        | Pilier de l'approche, photo en arche |
| `CountryCard`       | Grande carte photo (pays mis en avant) avec pastilles de sites (`Chip`) |
| `EngageCard`        | Carte blanche cliquable ; variante `country` pour les pays secondaires |
| `PartnersStrip`     | Logos partenaires ; défilement en boucle en mobile |
| `NewsletterSection` / `NewsletterForm` | Bloc newsletter (`PhotoBanner`), champ + bouton en une pilule |
| `Footer`            | Pitch, bouton Don, LinkedIn et Facebook, plan du site, mentions, lien « English version » / « Version française » |

## Design system

Les règles viennent du design system de l'ONG (artifact « Design System ») : couleurs, typographie, cartes, boutons, accessibilité, animations. Toutes les valeurs passent par les variables de [`src/styles/tokens.css`](src/styles/tokens.css) ; ne pas ajouter de couleur en dur dans un composant.

Rappels :

- **Rubik** seule police. **Sauge** jamais en texte ; texte `noir-95` sur sauge et sur pêche.
- **Pêche** réservée au bouton « Faire un don » et aux points d'arrivée des illustrations (10 % max).
- Sections en aplat (pas de fondu), cartes blanches avec `--shadow-card` et bordure douce.
- Focus visible partout : contour 2px basalte décalé de 2px.
- Cartes cliquables (classe `card-lift`) : légère élévation au survol et au focus (`--lift-card-hover`, `--shadow-card-hover`) et flèche qui glisse vers la droite (`--nudge-arrow-hover`), sans soulignement ; sans déplacement avec `prefers-reduced-motion`.
- Éléments graphiques nature : courbes de niveau (`ContourPattern`) en haut des pages pays, fiches site et Nos projets et dans le footer, avec un fondu vers le haut ; tampon circulaire (`FooterStamp`) en bas du footer ; lavis aquarelle sous l'île (`MadagascarMap`). Ils sont décoratifs (`aria-hidden` ou `role="img"` pour le tampon), ne prennent pas les clics et ne passent jamais derrière du texte.
- Boutons (classe `btn-motion`) : couleurs fondues et léger soulèvement au survol (`--transition-ui`, `--lift-button-hover`), retour en place au clic ; sans déplacement avec `prefers-reduced-motion`.

## Langues (i18n)

- Routage i18n d'Astro (`astro.config.mjs`) : `fr` par défaut sans préfixe, `en` sous `/en/`.
- Aucun texte en dur dans les composants : tout passe par `src/i18n/fr.ts` et `src/i18n/en.ts`. Ajouter une clé dans `fr.ts` oblige à l'ajouter dans `en.ts` (erreur TypeScript sinon).
- La langue de la page vient de `Astro.currentLocale` ; `t(lang)` renvoie le dictionnaire.
- Logo de la version anglaise : variante « Man & the Environment » (LOGO-ENG-2 de la charte), jamais la version « Human ».
- **V1** : l'interface anglaise (menus, boutons, libellés d'accessibilité) est traduite ; le contenu de la home anglaise est encore une copie du français, à traduire (`home` dans `en.ts`).

## Animations et accessibilité

Règles à suivre pour toute nouvelle page (WCAG 2.2 AA, modes clair et sombre, vérifications avant PR) : [`CLAUDE.md`](CLAUDE.md).

- Apparition au scroll (`src/scripts/reveal.ts`, attribut `data-reveal`) : titres, cartes, bande des logos et bloc newsletter apparaissent en fondu en remontant de 24px, une seule fois, en cascade quand ils entrent ensemble ; le hero s'anime au chargement. Masqués seulement avec JS ; si le script ne s'exécute pas, tout s'affiche au bout de 3s.
- Chiffres clés : au premier passage dans l'écran (IntersectionObserver, une seule fois), compteur de 0 à la valeur, traits de l'anneau dans le sens horaire, barres qui poussent, pastilles une à une.
- Logos partenaires : défilement continu en dessous de 900px, avec un bouton Pause (`PauseButton`, comme la galerie de l'Équipe et les derniers dons).
- Hero : le contour organique de la photo ondule (14 s) et l'isotype flotte (11 s), en boucle lente.
- Courbes de niveau (`ContourPattern.astro`, hero des pages internes et footer) : chaque courbe « respire » (échelle 0,96 → 1,04 et rotation -1,5° → 1,5°, 10 s, aller-retour), décalée de 1,1 s de la suivante : les lignes glissent les unes par rapport aux autres, comme une onde lente. Le motif apparaît comme les autres éléments (`data-reveal`). Validée par Victor le 2026-10-21.
- Tampon du footer (`FooterStamp.astro`) : le texte en cercle « DEPUIS 1993 · … » tourne lentement autour de l'isotype (un tour en 40 s, linéaire) ; l'isotype et les cercles restent fixes. Il apparaît au scroll comme les autres éléments (`data-reveal`). Au survol, le sceau se soulève ; au clic, « coup de tampon » : il s'enfonce (l'ombre disparaît) puis rebondit, et le texte fait un tour rapide (1,1 s). Seul le disque blanc capte la souris, pour ne jamais gêner les liens voisins ; interaction purement décorative, sans focus clavier.
- Indication « Faire défiler » du hero : la flèche monte et descend doucement en boucle (1,8 s). Ces animations du hero et l'apparition au scroll sont des exceptions à la règle « pas d'autre animation décorative » du design system, à y reporter.
- Avec `prefers-reduced-motion: reduce`, tout est désactivé (valeurs finales affichées, logos partenaires en grille, boutons Pause masqués).
- **Sans JavaScript**, la page est complète : chiffres et illustrations affichés en entier, liens du menu visibles sous le logo en mobile.

## À brancher plus tard

- **Dons** : HelloAsso. Le lien est centralisé dans `DON_URL` ([`src/data/navigation.ts`](src/data/navigation.ts)).
- **Newsletter** : outil d'emailing pas encore choisi. Le formulaire ([`NewsletterForm.astro`](src/components/NewsletterForm.astro)) a le markup accessible mais l'envoi est bloqué côté client ; une fois l'outil choisi, renseigner l'`action` et retirer le `preventDefault`.
- **Formulaire de contact** (page `/contact`) : voir la section suivante.
- **Réseaux sociaux** : URL LinkedIn et Facebook en placeholder dans `SOCIAL_URLS` ([`src/data/navigation.ts`](src/data/navigation.ts)).
- **Traduction anglaise** de la home (voir « Langues »).
- **Contenus** : en dur dans `src/pages/index.astro` pour l'instant ; passage en Markdown / CMS à décider.
- **Pages internes** : tous les liens pointent vers `#`.

## Formulaire de contact

Le site reste statique ; seule la route `POST /api/contact.php` tourne côté serveur : un script PHP sans dépendance ([`public/api/contact.php`](public/api/contact.php)) qui envoie le message par e-mail en SMTP, depuis une boîte e-mail OVH de l'ONG (pas de service tiers, aucun cookie). Champs, sujets et validation sont définis dans [`src/lib/contact.ts`](src/lib/contact.ts), partagés avec le script par `api/contact-fields.json`, généré au build ; anti-spam : un champ piège invisible. Réponses (JSON, ou redirection vers la page sans JavaScript) identiques à celles de l'ancienne fonction Vercel.

Paramètres d'envoi : fichier `contact-config.php`, **jamais dans le dépôt** et déposé à la main (FTP) **hors du dossier publié**, à la racine de l'espace FTP (deux niveaux au-dessus de `api/contact.php` : `/home/<login>/contact-config.php` si le site est dans `/home/<login>/www/`). Modèle commenté : [`ovh/contact-config.example.php`](ovh/contact-config.example.php).

| Clé | Rôle |
| --- | ---- |
| `to` | Destinataire des messages (une adresse ou une liste) |
| `from` | Expéditeur affiché, facultatif (`user` par défaut) ; adresse du domaine |
| `host` | `ssl0.ovh.net` (serveur SMTP des e-mails OVH) |
| `port` / `encryption` | `465` / `ssl` (par défaut) ou `587` / `starttls` |
| `user` / `pass` | Adresse complète et mot de passe de la boîte qui envoie |

Tant qu'il manque (et avec `npm run dev`, qui n'exécute pas PHP), l'envoi échoue proprement : la page propose d'envoyer le message depuis la messagerie du visiteur (lien `mailto` prérempli). Les échecs sont écrits dans le journal d'erreurs PHP de l'hébergement (sans le contenu des messages).

## Contenus provisoires (maquette V1)

Repris tels quels de la maquette, à valider avec l'ONG avant la mise en ligne :

- **400 000 arbres** plantés : chiffre à confirmer.
- **Logos partenaires** : fictifs (Fondation, Agence, collectif, Région, ENTREPRISE), à remplacer par les vrais logos.
- La photo de la carte Madagascar est réutilisée en fond de la newsletter (le design system demande une photo unique par page).
- La valeur de la couleur pêche est estimée d'après le CMJN de la charte : à confirmer avec le graphiste.

Photos © Day Nabih, © Marc Gansuana, © Langaha Be.
