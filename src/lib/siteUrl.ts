/** Öffentliche Adresse der Seite (für Canonical, Sitemap, Open Graph). Bis zur Live-Schaltung greift die Vercel-Adresse. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://atexscale.vercel.app").replace(/\/$/, "");
