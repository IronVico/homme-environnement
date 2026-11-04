/**
 * Formulaire de contact : champs, sujets et validation, partagés par la page (script du
 * navigateur, ContactForm.astro) et la fonction d'envoi (api/contact.ts). Aucune dépendance
 * à Astro : ce fichier est aussi compilé par Vercel pour la fonction.
 */

/** Adresse de la fonction Vercel qui envoie le message (api/contact.ts). */
export const CONTACT_ENDPOINT = '/api/contact';

/** Sujets acceptés, dans l'ordre de la liste ; libellés dans src/i18n (contact.form.subjects). */
export const CONTACT_SUBJECTS = ['don', 'stage', 'entreprise', 'presse', 'autre', 'question'] as const;
export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

/**
 * Sujet des messages de la bulle « Une question ? » (QuestionBubble.astro) : absent de la liste
 * de la page Contact, et seul sujet pour lequel le nom est facultatif (la bulle ne le demande pas).
 */
export const QUESTION_SUBJECT = 'question' satisfies ContactSubject;

/** Sujets proposés dans la liste de la page Contact. */
export const CONTACT_FORM_SUBJECTS = CONTACT_SUBJECTS.filter((subject) => subject !== QUESTION_SUBJECT);

/**
 * Lien vers le formulaire avec un sujet présélectionné : /contact/?sujet=entreprise#formulaire
 * (paramètre lu par le script de ContactForm.astro, ancre sur la carte du formulaire).
 */
export const CONTACT_SUBJECT_PARAM = 'sujet';
export const CONTACT_FORM_ANCHOR = 'formulaire';

/** Noms des champs envoyés (attribut name). */
export const CONTACT_FIELDS = ['nom', 'email', 'sujet', 'message', 'consentement'] as const;
export type ContactField = (typeof CONTACT_FIELDS)[number];

/** Champ piège anti-spam : caché aux visiteurs, un robot le remplit, le message est alors ignoré. */
export const CONTACT_TRAP = 'site_web';

/** Longueurs maximales, en caractères (au-delà, le message est refusé). */
export const CONTACT_MAX: Record<Exclude<ContactField, 'sujet' | 'consentement'>, number> = {
  nom: 200,
  email: 254,
  message: 5000,
};

/** Ancres de la page Contact où la fonction renvoie un envoi sans JavaScript (CSS :target). */
export const CONTACT_ANCHORS = { sent: 'message-envoye', error: 'message-erreur' } as const;

export type ContactError = 'required' | 'email' | 'tooLong';

export interface ContactValues {
  nom: string;
  email: string;
  sujet: string;
  message: string;
  consentement: boolean;
}

// Volontairement simple : un « @ », un point dans le domaine, pas d'espace.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isContactSubject(value: string): value is ContactSubject {
  return (CONTACT_SUBJECTS as readonly string[]).includes(value);
}

/** Erreur d'un champ (null : valide). */
export function validateContactField(field: ContactField, values: ContactValues): ContactError | null {
  if (field === 'consentement') return values.consentement ? null : 'required';
  const value = values[field].trim();
  if (!value && field === 'nom' && values.sujet.trim() === QUESTION_SUBJECT) return null;
  if (!value) return 'required';
  if (field === 'sujet') return isContactSubject(value) ? null : 'required';
  if (value.length > CONTACT_MAX[field]) return 'tooLong';
  if (field === 'email' && !EMAIL_PATTERN.test(value)) return 'email';
  return null;
}

/** Erreurs de tous les champs ; objet vide si le message peut partir. */
export function validateContact(values: ContactValues): Partial<Record<ContactField, ContactError>> {
  const errors: Partial<Record<ContactField, ContactError>> = {};
  for (const field of CONTACT_FIELDS) {
    const error = validateContactField(field, values);
    if (error) errors[field] = error;
  }
  return errors;
}

/** Valeurs d'un FormData (formulaire du navigateur ou requête reçue par la fonction). */
export function readContactValues(data: FormData): ContactValues {
  const text = (name: string) => {
    const value = data.get(name);
    return typeof value === 'string' ? value : '';
  };
  return {
    nom: text('nom'),
    email: text('email'),
    sujet: text('sujet'),
    message: text('message'),
    consentement: data.get('consentement') !== null,
  };
}
