/**
 * URL publique du site.
 *
 * Pilotable via la variable d'environnement `NEXT_PUBLIC_SITE_URL`
 * (à définir dans Vercel > Settings > Environment Variables).
 * Tant que le domaine définitif n'est pas acquis, on retombe sur
 * l'URL de production Vercel afin que canonical / OpenGraph / JSON-LD
 * pointent vers une adresse réellement détenue.
 */
const FALLBACK_SITE_URL = "https://agence-equerre.vercel.app";

function normalize(url: string): string {
  return url.trim().replace(/\/+$/, "");
}

export const siteUrl = normalize(
  process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL,
);
