import { existsSync } from "fs";
import path from "path";
import { site } from "@/content/site";

export type HeroSlide = (typeof site.hero.slides)[number];

const inPublic = (src: string) => existsSync(path.join(process.cwd(), "public", src));

/**
 * Nur Motive, deren Foto bereits in /public liegt (Prüfung beim Build) –
 * so können Folien in site.ts vorbereitet werden, bevor die Dateien da sind.
 * personAvailable: liegt zusätzlich eine freigestellte Silhouette vor?
 */
export function getHeroSlides(): { slides: HeroSlide[]; personAvailable: boolean[] } {
  const slides = site.hero.slides.filter((s) => inPublic(s.image));
  return { slides, personAvailable: slides.map((s) => inPublic(s.person)) };
}
