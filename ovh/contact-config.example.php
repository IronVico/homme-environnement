<?php
/**
 * Modèle des paramètres d'envoi du formulaire de contact (public/api/contact.php).
 *
 * À copier sous le nom contact-config.php sur l'hébergement OVH, HORS du dossier publié : à la
 * racine de l'espace FTP, à côté du dossier du site (ex. /home/<login>/contact-config.php quand le
 * site est dans /home/<login>/www/). Le script le cherche deux niveaux au-dessus de lui
 * (www/api/contact.php → /home/<login>/). Jamais dans le dépôt Git (voir .gitignore), jamais dans
 * public/ : le déploiement le supprimerait et il serait exposé.
 *
 * Boîte d'envoi : une adresse e-mail OVH du domaine (ex. site@homme-environnement.org), créée
 * dans l'espace client OVH (Web Cloud → E-mails). TODO ONG : adresse d'envoi et destinataire.
 */
return [
    // Destinataire des messages (une adresse, ou une liste : ['a@…', 'b@…']).
    'to' => 'contact@homme-environnement.org',
    // Expéditeur affiché ; facultatif, `user` par défaut. Doit être une adresse du domaine.
    'from' => '',
    // Serveur SMTP OVH (offres e-mail MX Plan / Perso).
    'host' => 'ssl0.ovh.net',
    // 465 avec 'ssl' (par défaut) ou 587 avec 'starttls'.
    'port' => 465,
    'encryption' => 'ssl',
    // Adresse complète de la boîte qui envoie, et son mot de passe.
    'user' => 'site@homme-environnement.org',
    'pass' => '',
];
