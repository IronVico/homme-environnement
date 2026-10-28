<?php
/**
 * Formulaire de contact (POST /api/contact.php) sur l'hébergement OVH : envoie par e-mail le
 * message de la page Contact. Le reste du site est statique ; seul ce script tourne côté serveur.
 * Remplace la fonction Vercel api/contact.ts : mêmes champs, validations et réponses, attendues
 * par src/components/ContactForm.astro.
 *
 * Champs, sujets, longueurs et libellés : contact-fields.json, à côté de ce fichier, généré au
 * build depuis src/lib/contact.ts et src/i18n/fr.ts (src/pages/api/contact-fields.json.ts).
 *
 * Envoi en SMTP par une boîte e-mail OVH de l'ONG (aucun service tiers, aucun cookie).
 * Paramètres dans contact-config.php, HORS du dossier publié et hors du dépôt (modèle :
 * ovh/contact-config.example.php, voir README, section « Formulaire de contact »).
 * Sans configuration, le script répond 503 et la page propose d'envoyer le message depuis la
 * messagerie du visiteur (mailto).
 *
 * Réponses : JSON si le navigateur le demande (script de la page), sinon redirection 303 vers la
 * page Contact, à l'ancre du message de confirmation ou d'erreur (envoi sans JavaScript).
 *
 * Compatible PHP 7.4 (version actuelle de l'hébergement) à 8.x, sans bibliothèque externe.
 */

declare(strict_types=1);

mb_internal_encoding('UTF-8');
date_default_timezone_set('Europe/Paris');

/** Paramètres d'envoi : deux niveaux au-dessus du script (www/api/ → racine FTP, hors du site). */
const CONFIG_FILE = __DIR__ . '/../../contact-config.php';
const FIELDS_FILE = __DIR__ . '/contact-fields.json';
const SMTP_TIMEOUT = 15;

$wantsJson = strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;
$lang = ($_POST['lang'] ?? '') === 'en' ? 'en' : 'fr';

/** Réponse au navigateur, puis fin du script. */
function respond(int $status, array $body): void
{
    global $wantsJson, $lang;
    header('Cache-Control: no-store');
    if ($wantsJson) {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    } else {
        $fields = read_fields();
        $anchors = $fields['anchors'] ?? ['sent' => 'message-envoye', 'error' => 'message-erreur'];
        $anchor = $status === 200 ? $anchors['sent'] : $anchors['error'];
        http_response_code(303);
        header('Location: ' . ($lang === 'en' ? '/en' : '') . '/contact/#' . $anchor);
    }
    exit;
}

/** Règles générées au build (contact-fields.json) ; null si le fichier manque. */
function read_fields(): ?array
{
    static $fields = false;
    if ($fields === false) {
        $json = is_readable(FIELDS_FILE) ? file_get_contents(FIELDS_FILE) : false;
        $fields = $json === false ? null : json_decode($json, true);
        if (!is_array($fields)) $fields = null;
    }
    return $fields;
}

/** Paramètres SMTP (contact-config.php) ; null si absents ou incomplets. */
function read_config(): ?array
{
    $config = is_readable(CONFIG_FILE) ? include CONFIG_FILE : null;
    if (!is_array($config)) return null;
    $to = array_values(array_filter((array) ($config['to'] ?? []), 'is_string'));
    $host = (string) ($config['host'] ?? '');
    $user = (string) ($config['user'] ?? '');
    $pass = (string) ($config['pass'] ?? '');
    if (!$to || $host === '' || $user === '' || $pass === '') return null;
    $port = (int) ($config['port'] ?? 0) ?: 465;
    $encryption = (string) ($config['encryption'] ?? ($port === 465 ? 'ssl' : 'starttls'));
    if (!in_array($encryption, ['ssl', 'starttls', 'none'], true)) return null;
    return [
        'to' => $to,
        'from' => (string) ($config['from'] ?? '') ?: $user,
        'host' => $host,
        'port' => $port,
        'encryption' => $encryption,
        'user' => $user,
        'pass' => $pass,
    ];
}

/** Comme String.prototype.trim() : espaces Unicode compris. */
function trim_text(string $value): string
{
    return (string) preg_replace('/(*UCP)^[\s\x{FEFF}]+|[\s\x{FEFF}]+$/u', '', $value);
}

// Une seule ligne : pas de retour à la ligne dans l'objet ou le nom de l'expéditeur.
function one_line(string $value): string
{
    return trim_text((string) preg_replace('/[\r\n]+/', ' ', $value));
}

/** Valeur texte d'un champ posté ('' si absent, tableau ou UTF-8 invalide). */
function posted(string $name): string
{
    $value = $_POST[$name] ?? '';
    return is_string($value) && mb_check_encoding($value, 'UTF-8') ? $value : '';
}

/** Mêmes règles que validateContactField (src/lib/contact.ts). */
function validate_field(string $field, array $values, array $fields): ?string
{
    if ($field === 'consentement') return $values['consentement'] ? null : 'required';
    $value = trim_text($values[$field]);
    if ($value === '') return 'required';
    if ($field === 'sujet') return array_key_exists($value, $fields['subjects']) ? null : 'required';
    if (mb_strlen($value) > (int) $fields['max'][$field]) return 'tooLong';
    // Volontairement simple : un « @ », un point dans le domaine, pas d'espace.
    if ($field === 'email' && !preg_match('/(*UCP)^[^\s@]+@[^\s@]+\.[^\s@]+$/u', $value)) return 'email';
    return null;
}

/** En-tête encodé (RFC 2047), coupé en morceaux de 39 octets au plus (lignes de moins de 78 caractères). */
function encode_header(string $value): string
{
    if (preg_match('/^[\x20-\x7E]*$/', $value) && strlen($value) <= 70) return $value;
    $words = [];
    $chunk = '';
    foreach (preg_split('//u', $value, -1, PREG_SPLIT_NO_EMPTY) as $char) {
        if (strlen($chunk . $char) > 39) {
            $words[] = '=?UTF-8?B?' . base64_encode($chunk) . '?=';
            $chunk = '';
        }
        $chunk .= $char;
    }
    if ($chunk !== '') $words[] = '=?UTF-8?B?' . base64_encode($chunk) . '?=';
    return implode("\r\n ", $words);
}

/** Adresse avec nom affiché ; le nom est toujours encodé (virgules, guillemets sans risque). */
function address(string $name, string $email): string
{
    $words = encode_header($name);
    if ($words === $name) $words = '=?UTF-8?B?' . base64_encode($name) . '?=';
    return $words . ' <' . $email . '>';
}

/** Lit une réponse du serveur SMTP (plusieurs lignes possibles) et vérifie son code. */
function smtp_expect($socket, array $codes): void
{
    $reply = '';
    do {
        $line = fgets($socket, 1024);
        if ($line === false) throw new RuntimeException('SMTP : pas de réponse du serveur.');
        $reply .= $line;
    } while (strlen($line) >= 4 && $line[3] === '-');
    if (!in_array((int) substr($line, 0, 3), $codes, true)) {
        throw new RuntimeException('SMTP : réponse inattendue « ' . trim($reply) . ' ».');
    }
}

function smtp_command($socket, string $command, array $codes): void
{
    fwrite($socket, $command . "\r\n");
    smtp_expect($socket, $codes);
}

/** Envoi SMTP authentifié (SSL direct ou STARTTLS). Lève une exception en cas d'échec. */
function smtp_send(array $config, array $recipients, string $message): void
{
    $scheme = $config['encryption'] === 'ssl' ? 'ssl' : 'tcp';
    $context = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true]]);
    $socket = @stream_socket_client(
        "{$scheme}://{$config['host']}:{$config['port']}",
        $errno,
        $errstr,
        SMTP_TIMEOUT,
        STREAM_CLIENT_CONNECT,
        $context
    );
    if ($socket === false) throw new RuntimeException("SMTP : connexion impossible ({$errno} {$errstr}).");
    stream_set_timeout($socket, SMTP_TIMEOUT);

    try {
        $helo = 'EHLO ' . ($_SERVER['SERVER_NAME'] ?? 'localhost');
        smtp_expect($socket, [220]);
        smtp_command($socket, $helo, [250]);
        if ($config['encryption'] === 'starttls') {
            smtp_command($socket, 'STARTTLS', [220]);
            $methods = STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT
                | (defined('STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT') ? STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT : 0);
            if (stream_socket_enable_crypto($socket, true, $methods) !== true) {
                throw new RuntimeException('SMTP : échec de STARTTLS.');
            }
            smtp_command($socket, $helo, [250]);
        }
        smtp_command($socket, 'AUTH PLAIN ' . base64_encode("\0{$config['user']}\0{$config['pass']}"), [235]);
        smtp_command($socket, "MAIL FROM:<{$config['from']}>", [250]);
        foreach ($recipients as $recipient) smtp_command($socket, "RCPT TO:<{$recipient}>", [250, 251]);
        smtp_command($socket, 'DATA', [354]);
        // Ligne commençant par un point : doublée (RFC 5321) ; le corps est en base64, par précaution.
        smtp_command($socket, preg_replace('/^\./m', '..', $message) . "\r\n.", [250]);
        fwrite($socket, "QUIT\r\n");
    } finally {
        fclose($socket);
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    $wantsJson = true;
    respond(405, ['ok' => false, 'reason' => 'method']);
}

// Formulaire posté depuis un autre site : refusé.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && $origin !== 'null') {
    $parts = parse_url($origin);
    $originHost = ($parts['host'] ?? '') . (isset($parts['port']) ? ':' . $parts['port'] : '');
    if (strcasecmp($originHost, $_SERVER['HTTP_HOST'] ?? '') !== 0) respond(403, ['ok' => false, 'reason' => 'origin']);
}

$contentType = strtolower($_SERVER['CONTENT_TYPE'] ?? '');
$isForm = strpos($contentType, 'multipart/form-data') === 0 || strpos($contentType, 'application/x-www-form-urlencoded') === 0;
if (!$isForm) respond(400, ['ok' => false, 'reason' => 'invalid']);

$fields = read_fields();
if ($fields === null) {
    error_log('Formulaire de contact : contact-fields.json introuvable (dossier api/ incomplet ?).');
    respond(503, ['ok' => false, 'reason' => 'not-configured']);
}

// Champ piège rempli : un robot. On répond comme si tout allait bien, sans rien envoyer.
if (trim_text(posted($fields['trap'])) !== '') respond(200, ['ok' => true]);

$values = [
    'nom' => posted('nom'),
    'email' => posted('email'),
    'sujet' => posted('sujet'),
    'message' => posted('message'),
    'consentement' => isset($_POST['consentement']),
];
$errors = [];
foreach ($fields['fields'] as $field) {
    $error = validate_field($field, $values, $fields);
    if ($error !== null) $errors[$field] = $error;
}
if ($errors) respond(400, ['ok' => false, 'reason' => 'invalid', 'errors' => $errors]);

$config = read_config();
if ($config === null) {
    error_log('Formulaire de contact : contact-config.php absent ou incomplet (to, host, user, pass).');
    respond(503, ['ok' => false, 'reason' => 'not-configured']);
}

$labels = $fields['labels'];
$subject = $fields['subjects'][trim_text($values['sujet'])];
$name = one_line($values['nom']);
$email = trim_text($values['email']);
$body = implode("\r\n", [
    "{$labels['name']} : {$name}",
    "{$labels['email']} : {$email}",
    "{$labels['subject']} : {$subject}",
    'Page : ' . ($lang === 'en' ? 'anglaise' : 'française'),
    '',
    preg_replace("/\r\n|\r|\n/", "\r\n", trim_text($values['message'])),
]);

$domain = substr((string) strrchr($config['from'], '@'), 1) ?: 'localhost';
$headers = [
    'Date: ' . date(DATE_RFC2822),
    'From: ' . address($fields['siteName'], $config['from']),
    'To: ' . implode(', ', array_map(function (string $to): string { return "<{$to}>"; }, $config['to'])),
    'Subject: ' . encode_header(one_line("[Site] {$subject} : {$name}")),
    'Message-ID: <' . bin2hex(random_bytes(16)) . "@{$domain}>",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
];
// Réponse au visiteur : seulement une adresse sûre pour un en-tête (sinon elle reste dans le message).
if (filter_var($email, FILTER_VALIDATE_EMAIL)) $headers[] = 'Reply-To: ' . address($name, $email);
$message = implode("\r\n", $headers) . "\r\n\r\n" . rtrim(chunk_split(base64_encode($body), 76, "\r\n"));

try {
    smtp_send($config, $config['to'], $message);
} catch (Throwable $error) {
    error_log("Formulaire de contact : échec de l'envoi SMTP. " . $error->getMessage());
    respond(502, ['ok' => false, 'reason' => 'send-failed']);
}

respond(200, ['ok' => true]);
