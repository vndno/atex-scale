import { existsSync } from "fs";
import path from "path";
import { site } from "@/content/site";

const hasFile = (src: string) => existsSync(path.join(process.cwd(), "public", src));

/* Logo als Bild, auf dem dunklen Band weiß eingefärbt; Wortmarke als Fallback, solange die Datei fehlt. */
function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <span className="mx-10 inline-flex h-10 items-center whitespace-nowrap">
      {hasFile(src) ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="h-8 w-auto max-w-[170px] object-contain opacity-65 brightness-0 invert" loading="lazy" />
      ) : (
        <span className="text-[17px] font-semibold tracking-tight text-white/60">{name}</span>
      )}
    </span>
  );
}

/** Dunkles Logo-Band unter dem Hero: Überschrift, durchlaufende Logos, Hinweis auf weitere Kunden. */
export function LogoMarquee() {
  const l = site.logos;
  // Eine Hälfte = 3× alle Logos (immer breiter als der Bildschirm), zwei Hälften → nahtlose Endlosschleife bei -50 %
  const half = [...l.items, ...l.items, ...l.items];
  const items = [...half, ...half];
  return (
    <section className="bg-navy py-9">
      <p className="container-x text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-on-navy-muted">{l.text}</p>
      <div className="edge-fade relative mt-6 overflow-hidden">
        <div className="marquee-track flex w-max animate-marquee">
          {items.map((it, i) => (
            <LogoItem key={`${it.name}-${i}`} name={it.name} src={it.src} />
          ))}
        </div>
      </div>
      <p className="container-x mt-6 text-center text-[12px] text-on-navy-muted/70">{l.more}</p>
    </section>
  );
}
