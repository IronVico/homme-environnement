/**
 * Pages du lab (/lab/…), dans l'ordre de la navigation de gauche. Chaque page a son contenu
 * dans src/components/lab/ (voir src/pages/lab/[page].astro).
 */
// Lab absent du build de production : celui de l'Action OVH (SITE_ENV=production) et, tant que le
// site est encore sur Vercel, son déploiement de production. Local et recette seulement.
const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
export const LAB_ENABLED = env.SITE_ENV !== 'production' && env.VERCEL_ENV !== 'production';

export interface LabPage {
  slug: string;
  /** Libellé de la navigation et titre de la page. */
  label: string;
  /** Composants montrés sur la page (nom des fichiers de src/components). */
  components?: string[];
  description: string;
}

export const LAB_GROUPS: { title: string; pages: LabPage[] }[] = [
  {
    title: 'Fondations',
    pages: [
      { slug: 'couleurs', label: 'Couleurs', description: 'Tokens de rôle classés par usage, en clair et en sombre, puis la charte.' },
      { slug: 'typographie', label: 'Typographie', description: 'Rubik, et chaque taille --fs-* avec son interlignage et son interlettrage.' },
      { slug: 'espacements', label: 'Espacements', description: 'Échelle --space-*, gouttière et largeur de contenu.' },
      { slug: 'rayons', label: 'Rayons', description: 'Arrondis des cartes, blocs, arches et pilules.' },
      { slug: 'ombres', label: 'Ombres', description: 'Ombre des cartes, survol et ombre papier du tampon.' },
      { slug: 'mouvement', label: 'Mouvement', description: 'Transitions, élévations et décalages au survol.' },
    ],
  },
  {
    title: 'Composants',
    pages: [
      { slug: 'button', label: 'Button', components: ['Button'], description: 'Pilule d’action : don, principal, secondaire, sur photo.' },
      { slug: 'section-heading', label: 'SectionHeading', components: ['SectionHeading'], description: 'Titre de section en deux temps, sur-titre, chapeau et lien.' },
      { slug: 'pastilles', label: 'Pastilles', components: ['Chip', 'TodoPill', 'CountryFlag'], description: 'Étiquettes de site, valeur à fournir, drapeaux ronds.' },
      { slug: 'engage-card', label: 'EngageCard', components: ['EngageCard', 'CountryCard'], description: 'Cartes-liens à photo : engagement, pays.' },
      { slug: 'pillar-card', label: 'PillarCard', components: ['PillarCard'], description: 'Pilier de l’approche, photo en arche.' },
      { slug: 'project-card', label: 'ProjectCard', components: ['ProjectCard', 'ProjectGrid', 'ProjectPhotoCard'], description: 'Cartes projet, sans et avec photo.' },
      { slug: 'species-card', label: 'SpeciesCard', components: ['SpeciesCard'], description: 'Espèce d’une fiche site, avec son statut UICN.' },
      { slug: 'partner-card', label: 'PartnerCard', components: ['PartnerCard'], description: 'Carte partenaire : logo, type, nom.' },
      { slug: 'stat-card', label: 'StatCard', components: ['StatsBand', 'StatCard'], description: 'Chiffres clés : bande sauge, illustrations et variante icône.' },
      { slug: 'photo-banner', label: 'PhotoBanner', components: ['PhotoBanner', 'NewsletterForm'], description: 'Carte sur photo assombrie, avec formulaire ou boutons.' },
      { slug: 'cartes-pays', label: 'Cartes pays', components: ['MadagascarMap', 'BurkinaMap', 'SitesExplorer', 'SiteCard'], description: 'Cartes de Madagascar et du Burkina Faso, repères et cartes de site.' },
      { slug: 'breadcrumb', label: 'Breadcrumb', components: ['Breadcrumb'], description: 'Fil d’Ariane des pages intérieures.' },
      { slug: 'logo', label: 'Logo', components: ['Logo'], description: 'Logo français et anglais, nom qui suit le mode.' },
      { slug: 'infobulles', label: 'Infobulles', components: ['ShareButtons'], description: 'data-tooltip des boutons à icône seule.' },
      { slug: 'theme-toggle', label: 'ThemeToggle', components: ['ThemeToggle'], description: 'Bascule clair / sombre : bouton et choix segmenté.' },
      { slug: 'motifs', label: 'Motifs', components: ['ContourPattern', 'FooterStamp'], description: 'Courbes de niveau et tampon du footer.' },
      { slug: 'info-note', label: 'InfoNote', components: ['InfoNote'], description: 'Encart d’information.' },
      { slug: 'faq', label: 'Faq', components: ['Faq'], description: 'Questions dépliables.' },
      { slug: 'steps-block', label: 'StepsBlock', components: ['StepsBlock'], description: 'Encart en deux colonnes avec étapes numérotées.' },
    ],
  },
];

export const LAB_PAGES = LAB_GROUPS.flatMap((group) => group.pages);

export const labPath = (slug?: string) => (slug ? `/lab/${slug}/` : '/lab/');
