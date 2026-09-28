import { site } from "@/content/site";
import { Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { HeroGraph } from "@/components/sections/HeroGraph";

/**
 * Hero, zentriert: Überzeile → Versprechen → zwei Buttons → Porträtreihe mit Kundenzahl,
 * darunter die Netzwerk-Grafik (Quellen → Anfragen-Eingang → Termin) und drei Kurz-Vorteile.
 */
export function Hero() {
  const h = site.hero;
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Punktraster + orange getönter Verlauf */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: "radial-gradient(circle, #d3d8df 1px, transparent 1.2px)", backgroundSize: "32px 32px" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(60% 45% at 50% 62%, rgba(242,106,74,0.10) 0%, rgba(242,106,74,0) 100%), linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 60%, #ffffff 100%)",
          }}
        />
      </div>

      <div className="container-x relative pb-16 pt-14 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-[960px] text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            {h.eyebrow}
          </p>
          <h1 className="mt-6 text-[clamp(2.4rem,5.8vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.015em] text-ink">
            {h.headlineBold} <span className="h-light">{h.headlineLight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-[17px] leading-relaxed text-muted">{h.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={site.contact.bookingHref}>{h.cta}</Button>
            <Button href={h.ctaSecondary.href} variant="outline" arrow={false}>
              {h.ctaSecondary.label}
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[14px]">
            <span className="flex -space-x-2">
              {h.proof.avatars.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="" width={32} height={32} className="relative size-8 rounded-full object-cover ring-2 ring-white" style={{ zIndex: 10 - i }} />
              ))}
            </span>
            <span className="text-muted">
              <strong className="font-semibold text-ink">{h.proof.value}</strong> {h.proof.label}
            </span>
          </div>
        </div>

        <HeroGraph className="mt-12 lg:mt-10" />

        <ul className="mx-auto mt-10 grid max-w-[1200px] gap-4 md:grid-cols-3">
          {h.features.map((f) => {
            const I = Icon[f.icon];
            return (
              <li key={f.title} className="flex gap-4 rounded-xl border border-line-soft bg-surface-2/90 p-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-md bg-accent/10 text-accent">
                  <I className="size-[18px]" />
                </span>
                <p className="text-[14px] leading-relaxed text-muted">
                  <strong className="font-semibold text-ink">{f.title}</strong> {f.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
