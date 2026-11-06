import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n';

/**
 * Membre de l'équipe qui signe le premier message de la bulle « Une question ? »
 * (QuestionBubble.astro), sur toutes les pages.
 *
 * TODO ONG : provisoire. Héloïse Belmont (src/data/equipe.ts) en attendant que l'ONG choisisse
 * qui signe et envoie sa photo. Sans `photo`, avatar aux initiales, comme sur la page Équipe.
 * Pour brancher la photo : déposer le fichier dans src/assets/photos/equipe/, l'importer ici
 * et le passer en `photo`.
 */
export interface QuestionHost {
  /** Nom complet : sert aux initiales de l'avatar. */
  name: string;
  /** Prénom affiché en tête du panneau. */
  firstName: string;
  /** Fonction, dans chaque langue. */
  role: Record<Lang, string>;
  /** Portrait (fourni par l'ONG). Sans photo : avatar aux initiales. */
  photo?: ImageMetadata;
  /** Cadrage du portrait (object-position), par défaut centré sur le visage. */
  photoPosition?: string;
}

export const QUESTION_HOST: QuestionHost = {
  name: 'Héloïse Belmont',
  firstName: 'Héloïse',
  role: { fr: 'Directrice communication', en: 'Head of communications' },
};
