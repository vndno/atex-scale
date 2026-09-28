import { existsSync } from "fs";
import path from "path";
import { site } from "@/content/site";
import { Button, Heading } from "@/components/ui";
import { Icon } from "@/components/icons";

/**
 * 07 · Aus der Praxis: Case Study H24. Links Überschrift, Text, drei Eckdaten und drei Maßnahmen,
 * rechts Referenzbild mit Leistungen und darunter die Branchen mit B2B/B2C-Kennzeichnung.
 * Fehlt das Referenzbild in /public, steht dort eine ruhige Platzhalterfläche.
 */
const tagTone = (tag: string) =>
  tag.includes("+") ? "bg-success-bg text-success-ink" : tag === "B2B" ? "bg-navy/10 text-ink" : "bg-accent/10 text-accent-strong";

export function CaseStudy() {
  const c = site.caseStudy;
  const hasImage = existsSync(path.join(process.cwd(), "public", c.image.src));
  return (
    <section id="referenzen" className="section-y bg-surface">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_480px] lg:gap-16">
          <div>
            <Heading eyebrow={c.eyebrow} bold={c.headlineBold} light={c.headlineLight} />
            <p className="mt-6 text-[16px] leading-[1.6] text-muted-2">{c.intro}</p>
            <p className="mt-4 text-[15px] leading-[1.6] text-muted">{c.text}</p>

            <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-3">{c.factsTitle}</p>
            <dl className="mt-3 grid grid-cols-3 gap-3">
              {c.facts.map((f) => (
                <div key={f.label} className="min-w-0 rounded-xl border border-line-soft bg-white px-2 py-4 text-center sm:px-4">
                  <dt className="text-[14px] font-bold leading-tight text-accent-strong sm:text-[clamp(1rem,2vw,1.35rem)]">{f.value}</dt>
                  <dd className="mt-1 text-[12px] leading-snug text-muted">{f.label}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-4 flex flex-col gap-3">
              {c.points.map((pt) => {
                const I = Icon[pt.icon];
                return (
                  <li key={pt.title} className="flex items-start gap-3 rounded-xl border border-line-soft bg-white p-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                      <I className="size-[18px]" />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-ink">{pt.title}</p>
                      <p className="text-[13px] leading-snug text-muted">{pt.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            {/* Referenzbild + Leistungen */}
            <div className="overflow-hidden rounded-2xl border border-line-soft bg-white shadow-soft">
              {hasImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.image.src} alt={c.image.alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
              ) : (
                <div className="grid aspect-[16/10] w-full place-items-center bg-navy text-center">
                  <div>
                    <p className="text-[22px] font-bold text-white">{c.client}</p>
                    <p className="mt-1 text-[13px] text-on-navy-muted">{c.caption}</p>
                  </div>
                </div>
              )}
              <div className="p-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-3">{c.servicesTitle}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.services.map((sv) => (
                    <span key={sv} className="flex items-center gap-1.5 rounded-full bg-chip px-3 py-1 text-[12px] font-medium text-ink">
                      <Icon.check className="size-3 text-success" strokeWidth={3} />
                      {sv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Branchen */}
            <div className="rounded-2xl border border-line-soft bg-white p-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-3">{c.industriesTitle}</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {c.industries.map((it) => (
                  <li key={it.name} className="flex items-center justify-between gap-2 rounded-lg border border-line-soft bg-surface-2 px-3 py-2">
                    <span className="text-[13px] text-ink">{it.name}</span>
                    <span className={`shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-bold ${tagTone(it.tag)}`}>{it.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={c.link.href}>{c.link.label}</Button>
        </div>
      </div>
    </section>
  );
}
