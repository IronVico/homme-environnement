/** Liens de partage d'une adresse (sans script tiers), utilisés par ShareButtons. */
export function shareLinks(url: string, subject: string, text: string): Record<string, string> {
  const u = encodeURIComponent(url);
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
    email: `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`,
  };
}
