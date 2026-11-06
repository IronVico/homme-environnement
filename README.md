# L'Homme & l'Environnement — website

New website of the NGO [L'Homme & l'Environnement](https://www.homme-environnement.org) (conservation and local development in Madagascar and Burkina Faso, since 1993).

A **static**, **bilingual** site (French by default at the root, English under `/en/`), built with [Astro](https://astro.build) and TypeScript (strict mode), with no back end and no CSS framework.

## Getting started

Requirements: Node.js 24 (Astro 7 needs 22.22 at least). The major version is pinned to `24.x` in `package.json`, the same as in the Vercel project settings, so that Vercel does not move to a new Node major version on its own.

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

301 redirects (old URLs, including those of the WordPress site): [`vercel.json`](vercel.json), to be extended as the target pages are built.

The `dist/` folder is a static site ready to deploy on Netlify, Vercel or Cloudflare Pages (build command `npm run build`, publish directory `dist`).

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

Internal showcase: `/lab/` shows the design system as coded, in light and dark mode: one page per foundation (colours by role, typography, spacing, radii, shadows, motion) and per component, with a left-hand navigation. Tokens are read from `tokens.css` at build time ([`src/lib/lab-tokens.ts`](src/lib/lab-tokens.ts)), components are the real ones with site data. Pages listed in [`src/lib/lab-nav.ts`](src/lib/lab-nav.ts), content in `src/components/lab/`, shell in [`src/layouts/LabLayout.astro`](src/layouts/LabLayout.astro). French only, `noindex` (so out of the sitemap), not linked from the site.

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

The site stays static; only the `POST /api/contact` route runs on the server: a Vercel function ([`api/contact.ts`](api/contact.ts)) that sends the message by email over SMTP, from a mailbox of the NGO's email service (no third-party service, no cookies). Fields, subjects and validation are shared between the page and the function ([`src/lib/contact.ts`](src/lib/contact.ts)); anti-spam: an invisible honeypot field.

Environment variables to set in the Vercel project (Settings → Environment Variables), template in [`.env.example`](.env.example):

| Variable       | Purpose |
| -------------- | ------- |
| `CONTACT_TO`   | Recipient of the messages |
| `SMTP_HOST`    | SMTP server of the NGO's email service |
| `SMTP_PORT`    | `465` (SSL, default) or `587` (STARTTLS) |
| `SMTP_USER`    | Login of the sending mailbox |
| `SMTP_PASS`    | Password (or app password) of that mailbox |
| `CONTACT_FROM` | Displayed sender, optional (`SMTP_USER` by default) |

While they are missing (and with `npm run dev`, which does not serve `/api`), sending fails gracefully: the page offers to send the message from the visitor's own email app (prefilled `mailto` link). To test the function locally: `vercel dev`.

## Placeholder content (V1 mockup)

Taken as is from the mockup, to be validated with the NGO before going live:

- **400,000 trees** planted: figure to be confirmed.
- **Partner logos**: fictitious (Fondation, Agence, collectif, Région, ENTREPRISE), to be replaced with the real logos.
- The photo of the Madagascar card is reused as the newsletter background (the design system asks for a unique photo per page).
- The peach colour value is estimated from the CMYK values in the brand guidelines: to be confirmed with the graphic designer.

Photos © Day Nabih, © Marc Gansuana, © Langaha Be.
