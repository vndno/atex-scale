import { existsSync } from "fs";
import path from "path";
import { site } from "@/content/site";

/**
 * Referenz-Sektion: Case Study H24 (Texte nach atex-media.de/referenzen/h24)
 * mit dem Referenzbild rechts (Hochformat 4:5). Fehlt die Bilddatei, steht dort eine ruhige Platzhalterfläche.
 */
export function CareerPage() {
  const cs = site.careerPage.caseStudy;
  const hasImage = existsSync(path.join(process.cwd(), "public", cs.image.src));
  return (
    <section id="karriereseite" className="section-y bg-surface">
      <div className="container-x">
        <div className="overflow-hidden rounded-2xl border border-line-soft bg-white">
          <div className="grid lg:grid-cols-[1fr_440px]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="eyebrow">{cs.eyebrow}</p>
              <p className="mt-3 text-[14px] font-semibold text-muted">{cs.client}</p>
              <h2 className="mt-1 text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-tight text-ink">{cs.title}</h2>
              <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-muted-2">{cs.intro}</p>

              <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-line-soft py-5">
                {cs.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[24px] font-bold leading-none text-ink">{f.value}</dt>
                    <dd className="mt-1.5 text-[12px] leading-snug text-muted">{f.label}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {cs.blocks.map((b, i) => (
                  <div key={b.title}>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">
                      {String(i + 1).padStart(2, "0")} · {b.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-2">{b.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {cs.services.map((sv) => (
                  <span key={sv} className="rounded-full bg-chip px-3 py-1 text-[12px] font-medium text-ink">
                    {sv}
                  </span>
                ))}
                <a href={cs.link.href} target="_blank" rel="noopener noreferrer" className="ml-auto text-[14px] font-semibold text-accent hover:underline">
                  {cs.link.label} ›
                </a>
              </div>
            </div>

            {/* Referenzbild: Landingpage am Desktop und Smartphone */}
            <div className="flex flex-col justify-center bg-navy p-5 sm:p-6">
              {hasImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cs.image.src} alt={cs.image.alt} loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />
              ) : (
                <div className="grid aspect-[4/5] w-full place-items-center rounded-xl bg-navy-card text-center">
                  <div>
                    <p className="text-[22px] font-bold text-white">{cs.client}</p>
                    <p className="mt-1 text-[13px] text-on-navy-muted">{cs.caption}</p>
                  </div>
                </div>
              )}
              <p className="mt-3 px-1 text-[13px] text-on-navy-muted">
                {cs.client} · {cs.eyebrow.split("·")[1]?.trim()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
