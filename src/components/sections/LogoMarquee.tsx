import { existsSync } from "fs";
import path from "path";
import { site } from "@/content/site";

const hasFile = (src: string) => existsSync(path.join(process.cwd(), "public", src));

/* Logo als Bild (grau, einheitliche Höhe); Wortmarke als Fallback, solange die Datei fehlt. */
function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <span className="mx-10 inline-flex h-10 items-center whitespace-nowrap">
      {hasFile(src) ? (
        <img src={src} alt={name} className="h-8 w-auto max-w-[170px] object-contain opacity-70 grayscale" loading="lazy" />
      ) : (
        <span className="text-[17px] font-semibold tracking-tight text-ink/55">{name}</span>
      )}
    </span>
  );
}

export function LogoMarquee() {
  // Eine Hälfte = 3× alle Logos (immer breiter als der Bildschirm), zwei Hälften → nahtlose Endlosschleife bei -50 %
  const half = [...site.logos.items, ...site.logos.items, ...site.logos.items];
  const items = [...half, ...half];
  return (
    <section className="border-y border-line/60 bg-white py-8">
      <p className="text-center text-[13px] text-muted">{site.logos.text}</p>
      <div className="edge-fade relative mt-5 overflow-hidden">
        <div className="marquee-track flex w-max animate-marquee">
          {items.map((l, i) => (
            <LogoItem key={`${l.name}-${i}`} name={l.name} src={l.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
