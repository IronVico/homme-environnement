#!/usr/bin/env bash
# Dépose dist/ sur l'hébergement OVH (offre Perso) et supprime les fichiers obsolètes.
# Lancé par .github/workflows/deploy-ovh.yml ; utilisable aussi en local (lftp requis) :
#   OVH_FTP_HOST=… OVH_FTP_USER=… OVH_FTP_PASSWORD=… OVH_FTP_DIR=… ovh/deploy.sh
#
# Variables :
#   OVH_FTP_HOST      serveur FTP du cluster (ex. ftp.clusterXXX.hosting.ovh.net)
#   OVH_FTP_USER      identifiant FTP
#   OVH_FTP_PASSWORD  mot de passe FTP
#   OVH_FTP_DIR       dossier du site sur l'hébergement, relatif à la racine FTP (ex. www)
#   OVH_FTP_PROTOCOL  ftps (par défaut, FTP chiffré en TLS explicite) ou sftp
#   OVH_SSH_KNOWN_HOSTS  sftp seulement, facultatif : empreinte du serveur (ligne known_hosts)
#
# Ordre : nouveaux fichiers du build (_astro/) d'abord, puis pages et autres fichiers avec
# suppression des obsolètes, enfin suppression des anciens fichiers de _astro/ : une page en
# ligne ne pointe jamais vers un fichier absent. Hors du dossier du site, rien n'est touché
# (contact-config.php reste à la racine FTP).
set -euo pipefail

: "${OVH_FTP_HOST:?OVH_FTP_HOST manquant}"
: "${OVH_FTP_USER:?OVH_FTP_USER manquant}"
: "${OVH_FTP_PASSWORD:?OVH_FTP_PASSWORD manquant}"
: "${OVH_FTP_DIR:?OVH_FTP_DIR manquant (dossier du site, ex. www)}"
PROTOCOL="${OVH_FTP_PROTOCOL:-ftps}"
DIR="${OVH_FTP_DIR%/}"

case "$DIR" in
  '' | '/' | '.' | '..' | */..* | ..*) echo "OVH_FTP_DIR invalide : « $OVH_FTP_DIR »." >&2; exit 1 ;;
esac
for file in .htaccess index.html 404.html api/contact.php api/contact-fields.json; do
  [[ -f "dist/$file" ]] || { echo "dist/$file absent : lancer npm run build avant." >&2; exit 1; }
done

case "$PROTOCOL" in
  ftps)
    URL="ftp://$OVH_FTP_HOST"
    SETTINGS='set ftp:ssl-force true; set ftp:ssl-protect-data true; set ssl:verify-certificate true; set ftp:passive-mode true'
    ;;
  sftp)
    URL="sftp://$OVH_FTP_HOST"
    if [[ -n "${OVH_SSH_KNOWN_HOSTS:-}" ]]; then
      mkdir -p ~/.ssh && printf '%s\n' "$OVH_SSH_KNOWN_HOSTS" >> ~/.ssh/known_hosts
      SETTINGS='set sftp:auto-confirm no'
    else
      SETTINGS='set sftp:auto-confirm yes'
    fi
    ;;
  *) echo "OVH_FTP_PROTOCOL inconnu : « $PROTOCOL » (ftps ou sftp)." >&2; exit 1 ;;
esac

# Mot de passe lu dans LFTP_PASSWORD (--env-password) : jamais dans la ligne de commande.
export LFTP_PASSWORD="$OVH_FTP_PASSWORD"
remote() {
  lftp --env-password -u "$OVH_FTP_USER" -e "set cmd:fail-exit true; set net:max-retries 3; set net:timeout 30; set xfer:use-temp-file true; $SETTINGS; $1; bye" "$URL"
}

# Garde-fou : jamais de synchronisation (qui supprime) dans le dossier du WordPress actuel.
if remote "cls -1 '$DIR/wp-config.php'" > /dev/null 2>&1; then
  echo "« $DIR » contient un WordPress (wp-config.php) : déploiement annulé. Choisir un autre dossier (voir README)." >&2
  exit 1
fi

# Fichiers à ne jamais supprimer dans le dossier du site (réglages OVH, validation de certificat).
KEEP="-x ^\.ovhconfig$ -x ^\.well-known/"

remote "mkdir -p -f '$DIR/_astro'; mirror --reverse --ignore-time --parallel=4 --verbose dist/_astro '$DIR/_astro'"
remote "mirror --reverse --delete --parallel=4 --verbose -x ^_astro/ $KEEP dist '$DIR'"
remote "mirror --reverse --delete --ignore-time --parallel=4 --verbose dist/_astro '$DIR/_astro'"
echo "Déploiement terminé dans « $DIR »."
