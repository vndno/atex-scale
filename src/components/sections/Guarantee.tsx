import { existsSync } from "fs";
import path from "path";
import { site } from "@/content/site";
import { Button, Heading } from "@/components/ui";
import { Icon } from "@/components/icons";

/**
 * 09 · Schriftliche Zusage: links Text, drei nummerierte Schritte und BAFA-Hinweis,
 * rechts ein Beispiel-Markt-Check (vier Werte mit Balken, Status „Zusage möglich“, Zusage-Liste, Button).
 */
const stepTones = ["bg-accent text-white", "bg-navy text-white", "bg-success text-white"];
const barTones = { accent: "bg-accent", navy: "bg-navy", success: "bg-success" } as const;
const valueTones = { accent: "text-accent-strong", navy: "text-ink", success: "text-success-ink" } as const;

export function Guarantee() {
  const g = site.guarantee;
  const p = g.panel;
  const hasSeal = existsSync(path.join(process.cwd(), "public", g.bafa.logo.src));
  return (
    <section id="zusage" className="section-y bg-white">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_520px] lg:gap-16">
        <div>
          <Heading eyebrow={g.eyebrow} bold={g.headlineBold} light={g.headlineLight} />
          <p className="mt-6 max-w-[620px] text-[16px] leading-[1.6] text-muted-2">{g.text}</p>
          <ol className="mt-8 flex flex-col gap-3">
            {g.steps.map((st, i) => (
              <li key={st.title} className="flex gap-4 rounded-xl border border-line-soft bg-surface-2 p-4 sm:p-5">
                <span className={`grid size-9 shrink-0 place-items-center rounded-lg text-[13px] font-bold ${stepTones[i % stepTones.length]}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-ink">{st.title}</p>
                  <p className="mt-0.5 text-[14px] leading-snug text-muted">{st.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex items-center gap-4">
            {hasSeal && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={g.bafa.logo.src} alt={g.bafa.logo.alt} width={56} height={56} loading="lazy" className="size-14 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)]" />
            )}
            <p className="max-w-[480px] text-[13px] leading-snug text-muted">{g.bafa.text}</p>
          </div>
        </div>

        {/* Beispiel-Markt-Check */}
        <div className="rounded-2xl border border-line-soft bg-surface-2 p-4 shadow-soft sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-3">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              {p.eyebrow}
            </p>
            <span className="flex items-center gap-1.5 rounded-full border border-accent/40 bg-white px-2.5 py-1 text-[12px] font-semibold text-ink">
              <span className="size-2 rounded-full bg-accent" aria-hidden />
              {p.status}
            </span>
          </div>
          <p className="mt-2 text-[14px] font-semibold text-ink">{p.offer}</p>

          <ul className="mt-4 flex flex-col gap-2.5">
            {p.rows.map((r) => (
              <li key={r.label} className="rounded-xl border border-line-soft bg-white px-4 py-3">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[13px] font-semibold text-ink">{r.label}</p>
                  <p className={`shrink-0 text-[16px] font-bold ${valueTones[r.tone]}`}>{r.value}</p>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-chip">
                  <span className={`block h-full rounded-full ${barTones[r.tone]}`} style={{ width: `${r.ratio * 100}%` }} />
                </div>
                <p className="mt-1.5 text-[12px] text-muted-3">{r.sub}</p>
              </li>
            ))}
          </ul>

          <div className="mt-3 rounded-xl border border-accent/25 bg-[#fff6f3] px-4 py-3.5">
            <p className="text-[13px] font-semibold text-ink">{p.promiseTitle}</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {p.promises.map((it) => (
                <li key={it} className="flex items-start gap-2 text-[13px] leading-snug text-muted-2">
                  <Icon.check className="mt-0.5 size-3.5 shrink-0 text-accent" strokeWidth={3} />
                  {it}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-center text-[12px] text-muted-3">{p.note}</p>
          <Button href={site.contact.bookingHref} className="mt-3 w-full justify-center">
            {p.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
