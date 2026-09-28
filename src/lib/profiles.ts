import { readdirSync } from "fs";
import path from "path";

/** Kleine Profilbilder aus /public/images/profil – für Avatare (Eingang, Anfragenliste). */
export function getProfileImages(): { image: string }[] {
  try {
    return readdirSync(path.join(process.cwd(), "public", "images", "profil"))
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort()
      .map((f) => ({ image: `/images/profil/${f}` }));
  } catch {
    return [];
  }
}
