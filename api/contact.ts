/**
 * Fonction Vercel (POST /api/contact) : envoie par e-mail le message du formulaire de la page
 * Contact. Le reste du site reste statique ; seule cette route tourne côté serveur.
 *
 * Envoi en SMTP par la messagerie de l'ONG (aucun service tiers, aucun cookie). Configuration
 * dans les variables d'environnement du projet Vercel (voir README, section « Formulaire de contact ») :
 *   CONTACT_TO      destinataire des messages
 *   SMTP_HOST       serveur SMTP de la messagerie de l'ONG
 *   SMTP_PORT       465 (SSL, par défaut) ou 587 (STARTTLS)
 *   SMTP_USER       identifiant de la boîte qui envoie
 *   SMTP_PASS       mot de passe (ou mot de passe d'application) de cette boîte
 *   CONTACT_FROM    expéditeur affiché (facultatif, SMTP_USER par défaut)
 * TODO ONG : fournir le destinataire et la boîte d'envoi. Sans configuration, la fonction répond
 * 503 et la page propose d'envoyer le message depuis la messagerie du visiteur (mailto).
 *
 * Réponses : JSON si le navigateur le demande (script de la page), sinon redirection 303 vers la
 * page Contact, à l'ancre du message de confirmation ou d'erreur (envoi sans JavaScript).
 */
import nodemailer from 'nodemailer';
import fr from '../src/i18n/fr.js';
import {
  CONTACT_ANCHORS,
  CONTACT_TRAP,
  isContactSubject,
  readContactValues,
  validateContact,
} from '../src/lib/contact.js';

interface SmtpConfig {
  to: string;
  from: string;
  host: string;
  port: number;
  user: string;
  pass: string;
}

function readConfig(): SmtpConfig | null {
  const { CONTACT_TO, CONTACT_FROM, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!CONTACT_TO || !SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  return {
    to: CONTACT_TO,
    from: CONTACT_FROM || SMTP_USER,
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    user: SMTP_USER,
    pass: SMTP_PASS,
  };
}

// Une seule ligne : pas de retour à la ligne dans l'objet ou le nom de l'expéditeur.
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

export async function POST(request: Request): Promise<Response> {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');

  let data: FormData | null = null;
  try {
    data = await request.formData();
  } catch {
    data = null;
  }
  const lang = data?.get('lang') === 'en' ? 'en' : 'fr';

  const respond = (status: number, body: Record<string, unknown>) => {
    if (wantsJson) return Response.json(body, { status });
    const anchor = status === 200 ? CONTACT_ANCHORS.sent : CONTACT_ANCHORS.error;
    return new Response(null, { status: 303, headers: { Location: `${lang === 'en' ? '/en' : ''}/contact/#${anchor}` } });
  };

  // Formulaire posté depuis un autre site : refusé.
  const origin = request.headers.get('origin');
  if (origin && origin !== 'null' && new URL(origin).host !== new URL(request.url).host) {
    return respond(403, { ok: false, reason: 'origin' });
  }

  if (!data) return respond(400, { ok: false, reason: 'invalid' });

  // Champ piège rempli : un robot. On répond comme si tout allait bien, sans rien envoyer.
  const trap = data.get(CONTACT_TRAP);
  if (typeof trap === 'string' && trap.trim() !== '') return respond(200, { ok: true });

  const values = readContactValues(data);
  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) return respond(400, { ok: false, reason: 'invalid', errors });

  const config = readConfig();
  if (!config) {
    console.error('Formulaire de contact : configuration SMTP absente (CONTACT_TO, SMTP_HOST, SMTP_USER, SMTP_PASS).');
    return respond(503, { ok: false, reason: 'not-configured' });
  }

  const form = fr.contact.form;
  const subject = isContactSubject(values.sujet) ? form.subjects[values.sujet] : values.sujet;
  // Nom facultatif pour les questions de la bulle (QUESTION_SUBJECT) : l'adresse le remplace.
  const name = oneLine(values.nom);
  const email = values.email.trim();

  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.port === 465,
      auth: { user: config.user, pass: config.pass },
    });
    await transporter.sendMail({
      from: { name: fr.meta.siteName, address: config.from },
      to: config.to,
      replyTo: name ? { name, address: email } : email,
      subject: oneLine(`[Site] ${subject} : ${name || email}`),
      text: [
        `${form.name} : ${name || '(non indiqué)'}`,
        `${form.email} : ${email}`,
        `${form.subject} : ${subject}`,
        `Page : ${lang === 'en' ? 'anglaise' : 'française'}`,
        '',
        values.message.trim(),
      ].join('\n'),
    });
  } catch (error) {
    console.error("Formulaire de contact : échec de l'envoi SMTP.", error);
    return respond(502, { ok: false, reason: 'send-failed' });
  }

  return respond(200, { ok: true });
}
