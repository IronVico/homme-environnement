/**
 * Règles du formulaire de contact pour le script PHP d'envoi (public/api/contact.php), générées
 * au build dans dist/api/contact-fields.json : champs, sujets, longueurs maximales, libellés du
 * message envoyé. Une seule source (src/lib/contact.ts et src/i18n/fr.ts), rien à recopier en PHP.
 * Lu par le script sur le disque ; l'accès par le Web est refusé (public/.htaccess).
 */
import fr from '../../i18n/fr';
import { CONTACT_ANCHORS, CONTACT_FIELDS, CONTACT_MAX, CONTACT_SUBJECTS, CONTACT_TRAP } from '../../lib/contact';

export function GET(): Response {
  const form = fr.contact.form;
  return Response.json({
    siteName: fr.meta.siteName,
    fields: CONTACT_FIELDS,
    trap: CONTACT_TRAP,
    max: CONTACT_MAX,
    anchors: CONTACT_ANCHORS,
    // Libellés des sujets, dans l'ordre de la liste (le message envoyé est toujours en français).
    subjects: Object.fromEntries(CONTACT_SUBJECTS.map((subject) => [subject, form.subjects[subject]])),
    labels: { name: form.name, email: form.email, subject: form.subject },
  });
}
