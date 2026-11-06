# L'Homme & l'Environnement — website

New website of the NGO [L'Homme & l'Environnement](https://www.homme-environnement.org) (conservation and local development in Madagascar and Burkina Faso, since 1993).

A **static**, **bilingual** site (French by default at the root, English under `/en/`), built with [Astro](https://astro.build) and TypeScript (strict mode), with no back end and no CSS framework.

## Getting started

Requirements: Node.js 24 (Astro 7 needs 22.22 at least). The major version is pinned to `24.x` in `package.json`, the same as in the deployment ([`.github/workflows/deploy-ovh.yml`](.github/workflows/deploy-ovh.yml)).

```bash
npm install
```

```bash
npm run dev
```

The site runs at <http://localhost:4321> (English version: <http://localhost:4321/en/>).

| Command           | Purpose                                                      |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Development server with hot reload                           |
| `npm run build`   | Type check (`astro check`), then build into `dist/`          |
| `npm run preview` | Serves the `dist/` build locally for testing                 |
| `npm run check`   | Type check only                                              |

301 redirects (old URLs, including those of the WordPress site), forced HTTPS, error pages and caching: [`public/.htaccess`](public/.htaccess) (Apache), to be extended as the target pages are built.

The `dist/` folder is the site ready to upload: static pages, plus one PHP script for the contact form. It is published on OVH (see "Deployment").

## Deployment (OVH)

The site is hosted by the NGO at OVHcloud, **Perso** web hosting plan (Apache 2.4 + PHP, FTP access). On every change to `main`, the GitHub Action [`deploy-ovh.yml`](.github/workflows/deploy-ovh.yml) runs `npm run build` (with `SITE_ENV=production`), then [`ovh/deploy.sh`](ovh/deploy.sh), which uploads `dist/` over **FTPS** (encrypted FTP) with `lftp` and deletes the files that are no longer in the build. It can also be run by hand (Actions tab → Déploiement OVH → Run workflow).

GitHub repository settings (Settings → Secrets and variables → Actions); no values in the repository:

| Name | Type | Purpose |
| ---- | ---- | ------- |
| `OVH_FTP_HOST` | secret | FTP server of the OVH cluster (e.g. `ftp.clusterXXX.hosting.ovh.net`, control panel → Hosting → FTP-SSH) |
| `OVH_FTP_USER` | secret | FTP login |
| `OVH_FTP_PASSWORD` | secret | FTP password |
| `OVH_FTP_DIR` | variable | Site folder, relative to the FTP root (e.g. `www`, or the new site's folder, see below). Required |
| `OVH_FTP_PROTOCOL` | variable | `ftps` (default) or `sftp` if OVH only offers SFTP |
| `OVH_SSH_KNOWN_HOSTS` | secret | `sftp` only, optional: server fingerprint (`known_hosts` line) |
| `OVH_DEPLOY` | variable | Switch: `on` to upload. Without it, the Action builds and checks the site without sending anything |

Upload order: new `_astro/` files first, then pages and other files (deleting obsolete ones), finally `_astro/` cleanup; each file is sent under a temporary name then renamed, so no visitor ever gets a half-copied file. Safeguards: the script refuses a folder containing a WordPress (`wp-config.php`) and never deletes `.ovhconfig` or `.well-known/`.

**Switching from the current WordPress** (same hosting): do not upload into `www/`, which holds it. Upload into a new folder (e.g. `site-astro/`), attach it to a staging subdomain in the control panel (Multisite, with an SSL certificate), check, then point `homme-environnement.org` and `www.` to that folder in Multisite. The WordPress stays untouched for a rollback.

From your own machine (with lftp installed): `npm run build`, then `OVH_FTP_HOST=… OVH_FTP_USER=… OVH_FTP_PASSWORD=… OVH_FTP_DIR=… ovh/deploy.sh`.

PHP: the contact script runs on PHP 7.4 (the hosting's current version, for the WordPress) to 8.x. Move the hosting to PHP 8.x (`.ovhconfig` file) once the WordPress is removed.

## Build environment

`SITE_ENV` at build time: `production` (set by the deployment Action) leaves out the `/lab/` showcase and the fake donations; `preview` (`SITE_ENV=preview npm run build`) builds a staging site with the fake latest donations, like `npm run dev`. While the site is still on Vercel, `VERCEL_ENV=production` also leaves out the lab.

## Audience measurement

No tool connected for now (Vercel Web Analytics only works on Vercel). Reserved slot at the end of `<body>` in [`BaseLayout.astro`](src/layouts/BaseLayout.astro). A **cookie-free** tool is to be chosen (Umami or GoatCounter, for instance): add its `<script defer>` tag there and fill in `ANALYTICS_TOOL` in [`src/data/confidentialite.ts`](src/data/confidentialite.ts) (shown on the Privacy page).

## Project structure

```
public/
  fonts/              Rubik variable (woff2, Latin subset), self-hosted
  favicon.svg         sage isotype
src/
  assets/
    logos/            FR colour logo, EN colour logo ("Man & the Environment"), isotype
    photos/           source photos, optimised at build time by astro:assets (AVIF/WebP)
  components/         page components (see below)
  data/navigation.ts  menu destinations, donation link, social networks
  i18n/
    fr.ts             French copy (interface + home page content)
    en.ts             English copy (same shape, checked by TypeScript)
    index.ts          languages, t(lang), URLs per language
  layouts/BaseLayout.astro  <head>: SEO, Open Graph, hreflang, font, lang
  pages/
    index.astro       French home page (/)
    en/index.astro    English home page (/en/)
    sites/madagascar.astro     Madagascar country page (/sites/madagascar)
    en/sites/madagascar.astro  English country page (/en/sites/madagascar)
  content/sites/      one Markdown file per site (name, country, region, photo, summary, species)
  content/projets.json  projects, linked to the sites where they take place
  content.config.ts   schemas of the "sites" and "projets" collections
  data/chiffres.ts    figures for Madagascar and each site (a single place to edit)
  scripts/stats.ts    key figures animation
  styles/
    tokens.css        design system tokens as CSS variables
    global.css        reset, focus, container, utilities
```

### Components

| Component           | Purpose |
| ------------------- | ------- |
| `HomePage`          | Home page shared by both languages (section order, photos) |
| `CountryPage`       | Country page (Madagascar, Burkina Faso) shared by both languages; sites and projects read from the collections, figures from `data/chiffres.ts` |
| `Breadcrumb`        | Breadcrumb of inner pages |
| `PageHero`          | Inner page hero: two-part H1, lead, secondary button, arch-shaped photo |
| `SitesExplorer`     | Country map with numbered markers + list of sites, linked together (click on a marker, hover or focus on a card) |
| `MadagascarMap` / `BurkinaMap` | SVG country maps (contour lines, capital, seas or neighbouring countries), translatable labels |
| `SiteCard`          | Compact, fully clickable site card: number and name, two-line tagline, protected area |
| `ProjectCard` / `ProjectGrid` | Compact project card without photo (icon, title, sentence, sites), in a 3-column grid: country pages and site page actions. The card with a photo (`ProjectPhotoCard`) is reserved for "Nos projets" |
| `PhotoBanner`       | Card on a darkened photo (title + sentence) with free content: newsletter, call-to-action buttons |
| `Header`            | Logo, main menu (light green pill on hover, basalt for the current section), FR / EN switcher, Donate button; drop-down submenus (accordion in the burger menu); sticky on scroll; burger menu below 1280px |
| `LangSwitcher`      | Segmented FR / EN pill in the header (desktop), links to the same page in the other language |
| `Button`            | Pill: `don` (peach, heart), `secondary` (outline, arrow), `on-dark` |
| `Hero`              | Eyebrow, two-part H1, lead, buttons, organic photo and isotype |
| `StatsBand` / `StatCard` | Sage band of key figures, SVG illustrations (ring, bars, dots, sites, share, families, water); text values ("[X]") shown without a counter |
| `SectionHeading`    | Two-part section title (strong + light), optional eyebrow, lead (always below) and link |
| `PillarCard`        | Pillar of the approach, arch-shaped photo |
| `CountryCard`       | Large photo card (featured country) with site chips (`Chip`) |
| `EngageCard`        | Clickable white card; `country` variant for secondary countries |
| `PartnersStrip`     | Partner logos; looping scroll on mobile |
| `NewsletterSection` / `NewsletterForm` | Newsletter block (`PhotoBanner`), field + button in a single pill |
| `Footer`            | Pitch, Donate button, LinkedIn and Facebook, sitemap, legal notice, "English version" / "Version française" link |

## Design system

The rules come from the NGO's design system (the "Design System" artifact): colours, typography, cards, buttons, accessibility, animations. Every value goes through the variables in [`src/styles/tokens.css`](src/styles/tokens.css); do not add hard-coded colours in a component.

Internal showcase: `/lab/` shows the design system as coded, in light and dark mode: one page per foundation (colours by role, typography, spacing, radii, shadows, motion) and per component, with a left-hand navigation. Tokens are read from `tokens.css` at build time ([`src/lib/lab-tokens.ts`](src/lib/lab-tokens.ts)), components are the real ones with site data. Pages listed in [`src/lib/lab-nav.ts`](src/lib/lab-nav.ts), content in `src/components/lab/`, shell in [`src/layouts/LabLayout.astro`](src/layouts/LabLayout.astro). French only, `noindex`, not linked from the site, and **not built in production** (`SITE_ENV=production`, see "Build environment"): run `npm run dev` and open `/lab/`, or build a staging site.

Reminders:

- **Rubik** is the only font. **Sage** is never used for text; `noir-95` text on sage and on peach.
- **Peach** is reserved for the "Faire un don" (Donate) button and for the end points of illustrations (10% max).
- Flat-colour sections (no fades), white cards with `--shadow-card` and a soft border.
- Visible focus everywhere: 2px basalt outline offset by 2px.
- Clickable cards (`card-lift` class): slight lift on hover and focus (`--lift-card-hover`, `--shadow-card-hover`) and an arrow that slides to the right (`--nudge-arrow-hover`), no underline; no movement with `prefers-reduced-motion`.
- Nature graphic elements: contour lines (`ContourPattern`) at the top of country pages, site pages and Nos projets, and in the footer, fading out towards the top; circular stamp (`FooterStamp`) at the bottom of the footer; watercolour wash under the island (`MadagascarMap`). They are decorative (`aria-hidden`, or `role="img"` for the stamp), do not catch clicks and never sit behind text.
- Buttons (`btn-motion` class): colour fades and a slight lift on hover (`--transition-ui`, `--lift-button-hover`), back in place on click; no movement with `prefers-reduced-motion`.

## Languages (i18n)

- Astro i18n routing (`astro.config.mjs`): `fr` by default with no prefix, `en` under `/en/`.
- No hard-coded text in components: everything goes through `src/i18n/fr.ts` and `src/i18n/en.ts`. Adding a key to `fr.ts` requires adding it to `en.ts` (TypeScript error otherwise).
- The page language comes from `Astro.currentLocale`; `t(lang)` returns the dictionary.
- English version logo: the "Man & the Environment" variant (LOGO-ENG-2 in the brand guidelines), never the "Human" version.
- **V1**: the English interface (menus, buttons, accessibility labels) is translated; the English home page content is still a copy of the French one, to be translated (`home` in `en.ts`).

## Sharing (Open Graph)

- Every page has its own 1200×630 share image, generated at build time (`src/lib/og.ts`, served by `src/pages/og/[...page].png.ts`): logo and hero title on the left, contour lines on the right. Satori + resvg, Rubik font from `@fontsource/rubik`: no external service, nothing to run on the server.
- Titles come from the i18n files (`hero.titleStrong` / `titleLight` of the pages in `PAGES`) and from the collections (name and tagline of site pages). A new page in `PAGES` therefore gets its image automatically; a page missing from the list (404, 500) gets the home page one.
- Home page only: share video (`public/video/partage-accueil-fr.mp4` and `-en.mp4`, 8 s loop), played by Discord, Telegram and sometimes iMessage; elsewhere, the still image is shown. It is not generated at build time: if the home page title changes, remake it (HTML page of the animated composition recorded frame by frame with puppeteer-core at 30 fps, then `ffmpeg -framerate 30 -i f%04d.png -c:v libx264 -preset veryslow -crf 23 -pix_fmt yuv420p -movflags +faststart`).

## Animations and accessibility

Rules to follow for every new page (WCAG 2.2 AA, light and dark modes, checks before a PR): [`CLAUDE.md`](CLAUDE.md).

- Reveal on scroll (`src/scripts/reveal.ts`, `data-reveal` attribute): titles, cards, the logo strip and the newsletter block fade in while rising by 24px, only once, staggered when they enter together; the hero animates on load. Hidden only when JS runs; if the script does not run, everything shows after 3s.
- Key figures: the first time they enter the viewport (IntersectionObserver, only once), counter from 0 to the value, ring strokes drawn clockwise, growing bars, dots one by one.
- Partner logos: continuous scroll below 900px, with no Pause button (like the Team gallery and the latest donations; see CLAUDE.md).
- Hero: the organic outline of the photo ripples (14 s) and the isotype floats (11 s), in a slow loop.
- Contour lines (`ContourPattern.astro`, inner page heroes and footer): each line "breathes" (scale 0.96 → 1.04 and rotation -1.5° → 1.5°, 10 s, back and forth), offset by 1.1 s from the next one: the lines slide against each other like a slow wave. The pattern appears like the other elements (`data-reveal`). Approved by Victor on 2026-10-21.
- Footer stamp (`FooterStamp.astro`): the circular text "DEPUIS 1993 · …" slowly turns around the isotype (one turn in 40 s, linear); the isotype and circles stay still. It appears on scroll like the other elements (`data-reveal`). On hover, the seal lifts; on click, a "stamp press": it sinks (the shadow disappears) then bounces back, and the text spins quickly (1.1 s). Only the white disc catches the mouse, so it never gets in the way of nearby links; purely decorative interaction, with no keyboard focus.
- Hero "Faire défiler" (scroll) hint: the arrow gently moves up and down in a loop (1.8 s). These hero animations and the reveal on scroll are exceptions to the design system's "no other decorative animation" rule, to be added to it.
- With `prefers-reduced-motion: reduce`, everything is turned off (final values shown, partner logos in a grid, Pause buttons hidden).
- **Without JavaScript**, the page is complete: figures and illustrations shown in full, menu links visible under the logo on mobile.

## To connect later

- **Donations**: HelloAsso. The link is centralised in `DON_URL` ([`src/data/navigation.ts`](src/data/navigation.ts)).
- **Newsletter**: emailing tool not chosen yet. The form ([`NewsletterForm.astro`](src/components/NewsletterForm.astro)) has accessible markup but submission is blocked on the client; once the tool is chosen, fill in the `action` and remove the `preventDefault`.
- **Contact form** (`/contact` page): see the next section.
- **Social networks**: placeholder LinkedIn and Facebook URLs in `SOCIAL_URLS` ([`src/data/navigation.ts`](src/data/navigation.ts)).
- **English translation** of the home page (see "Languages").
- **Content**: hard-coded in `src/pages/index.astro` for now; move to Markdown / a CMS to be decided.
- **Inner pages**: all links point to `#`.

## Contact form

The site stays static; only the `POST /api/contact.php` route runs on the server: a dependency-free PHP script ([`public/api/contact.php`](public/api/contact.php)) that sends the message by email over SMTP, from an OVH mailbox of the NGO (no third-party service, no cookies). Fields, subjects and validation are defined in [`src/lib/contact.ts`](src/lib/contact.ts) and shared with the script through `api/contact-fields.json`, generated at build time; anti-spam: an invisible honeypot field. Responses (JSON, or a redirect back to the page without JavaScript) are the same as the former Vercel function's.

Sending settings: a `contact-config.php` file, **never in the repository**, uploaded by hand (FTP) **outside the published folder**, at the FTP root (two levels above `api/contact.php`: `/home/<login>/contact-config.php` if the site is in `/home/<login>/www/`). Commented template: [`ovh/contact-config.example.php`](ovh/contact-config.example.php).

| Key | Purpose |
| --- | ------- |
| `to` | Recipient of the messages (one address or a list) |
| `from` | Displayed sender, optional (`user` by default); an address on the domain |
| `host` | `ssl0.ovh.net` (OVH email SMTP server) |
| `port` / `encryption` | `465` / `ssl` (default) or `587` / `starttls` |
| `user` / `pass` | Full address and password of the sending mailbox |

While it is missing (and with `npm run dev`, which does not run PHP), sending fails gracefully: the page offers to send the message from the visitor's own email app (prefilled `mailto` link). Failures are written to the hosting's PHP error log (without the message content).

## Placeholder content (V1 mockup)

Taken as is from the mockup, to be validated with the NGO before going live:

- **400,000 trees** planted: figure to be confirmed.
- **Partner logos**: fictitious (Fondation, Agence, collectif, Région, ENTREPRISE), to be replaced with the real logos.
- The photo of the Madagascar card is reused as the newsletter background (the design system asks for a unique photo per page).
- The peach colour value is estimated from the CMYK values in the brand guidelines: to be confirmed with the graphic designer.

Photos © Day Nabih, © Marc Gansuana, © Langaha Be.
