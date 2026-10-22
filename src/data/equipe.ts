import type { ImageMetadata } from 'astro';

/**
 * Membres de l'équipe et du comité d'experts (page « Équipe »).
 *
 * Photos : les portraits de la maquette sont provisoires (ils ne représentent pas les
 * vraies personnes) et ne sont pas repris. Sans `photo`, la page affiche un avatar neutre
 * (initiales sur fond vert clair, même format). Pour brancher un vrai portrait :
 * déposer le fichier dans src/assets/photos/equipe/, l'importer ici et le passer en `photo`.
 *
 * TODO traduction : rôles, domaines et descriptions encore en français sur /en/.
 */
export interface Member {
  name: string;
  /** Portrait (fourni par l'ONG). Sans photo : avatar aux initiales. */
  photo?: ImageMetadata;
  /** Cadrage du portrait (object-position), par défaut centré sur le visage. */
  photoPosition?: string;
}

export interface TeamMember extends Member {
  role: string;
}

export interface Expert extends Member {
  /** Domaine d'expertise, affiché en étiquette. */
  domain: string;
  description: string;
}

export interface Founder extends Member {
  role: string;
  quote: string;
}

export const FOUNDER: Founder = {
  name: 'Olivier Behra',
  role: 'fondateur et directeur stratégique',
  quote: 'Innover pour que chaque action génère un impact positif réel et durable.',
};

/** Le bureau et l'équipe, dans l'ordre de la maquette. */
export const TEAM: TeamMember[] = [
  { name: 'Laurent Bignolas', role: 'Président' },
  { name: 'Saroy Rasoloson', role: 'Ingénieure agronome, direction opérationnelle à Madagascar' },
  { name: 'Héloïse Belmont', role: 'Directrice communication & RSE' },
  { name: 'Jessica Lucas', role: 'Trésorière & responsable communication' },
  { name: 'Paul Le Bourligu', role: 'Responsable lien secteur privé & philanthropique' },
];

/** Le comité d'experts, dans l'ordre de la maquette. */
export const EXPERTS: Expert[] = [
  {
    name: 'Christian Busser',
    domain: 'Ethnopharmacie',
    description:
      "Docteur en pharmacie & ethnologie, ex-directeur du séminaire d'ethnomédecine, Université de Strasbourg",
  },
  {
    name: 'Mélanie Saulnier',
    domain: 'Écologie forestière',
    description: 'Chercheuse CNRS, docteure en écologie forestière, laboratoire GEODE, Université Jean Jaurès',
  },
  {
    name: 'Michael Grimm',
    domain: 'Agroécologie',
    description: 'Coordinateur, Designing Resilient Regenerative Systems, ETH Zurich',
  },
  {
    name: 'Léonie Pellissier',
    domain: 'Ethnopharmacie',
    description: 'Docteure en pharmacie, chercheuse, projets Vohimana & Ambalakalanoro',
  },
  {
    name: 'Michel Pidoux',
    domain: 'Huiles essentielles',
    description: 'Formateur en huiles essentielles, AROVA Madagascar',
  },
  {
    name: 'Christian Lubrano',
    domain: 'Filières végétales',
    description: "Fondateur d'Apex Botanicals, expert filières végétales durables",
  },
  {
    name: 'Tadzio Mac Gregor',
    domain: 'Climat et eau',
    description: 'Climate & Water Strategist, co-fondateur de Javari Project & Droplett',
  },
  {
    name: 'Fanny Carbillet',
    domain: 'Entreprises à impact',
    description: 'Co-fondatrice & présidente, Alara Group',
  },
  {
    name: 'Stéphane Kirkland',
    domain: 'Construction bioclimatique',
    description: 'Expert construction bioclimatique, enseignant à Sciences Po Paris',
  },
  {
    name: 'Florence Cazanobe',
    domain: 'Afrique et grands singes',
    description: 'Présidente de Gazelle Harambee, experte projets Afrique & grands singes',
  },
];

/** Initiales de l'avatar : première lettre du prénom et du nom (« Paul Le Bourligu » → « PB »). */
export function initials(name: string): string {
  const words = name.trim().split(/\s+/);
  const first = words[0] ?? '';
  const last = words.length > 1 ? words[words.length - 1]! : '';
  return (first.charAt(0) + last.charAt(0)).toLocaleUpperCase('fr');
}
