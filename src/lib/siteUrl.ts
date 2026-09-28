/**
 * Öffentliche Adresse der Seite (für Canonical, Sitemap, Open Graph).
 * NEXT_PUBLIC_SITE_URL setzen, sobald die eigene Domain live ist; leer oder nicht gesetzt → Vercel-Adresse.
 */
const fromEnv = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim();
export const SITE_URL = (fromEnv.startsWith("http") ? fromEnv : "https://atex-scale.vercel.app").replace(/\/$/, "");
