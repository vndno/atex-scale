import { site } from "@/content/site";
import { Button, Heading } from "@/components/ui";

/**
 * 10 · Referenzen: Überschrift mit Button „Alle Referenzen“, darunter sechs Karten (3 × 2).
 * Jede Karte zeigt Projektbeschreibung, Kunde und Schlagwort; liegt ein freigegebenes Kundenzitat vor
 * (quote in site.ts), erscheint stattdessen das Zitat.
 */
export function References() {
  const r = site.references;
  return (
    <section id="projekte" className="section-y bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Heading eyebrow={r.eyebrow} bold={r.headlineBold} light={r.headlineLight} className="max-w-[760px]" />
          <Button href={r.cta.href} variant="outline" className="self-start md:self-auto">
            {r.cta.label}
          </Button>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {r.items.map((it) => (
            <li key={it.client} className="flex flex-col rounded-2xl border border-line-soft bg-white p-5 shadow-soft sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-[13px] font-bold text-accent-strong">{it.short}</span>
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-3">{it.industry}</p>
              </div>
              {it.quote ? (
                <blockquote className="mt-4 text-[15px] italic leading-relaxed text-ink">„{it.quote}“</blockquote>
              ) : (
                <p className="mt-4 text-[15px] leading-relaxed text-muted-2">{it.text}</p>
              )}
              <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold text-ink">{it.client}</p>
                  <a href={it.href} target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-accent hover:underline">
                    {r.linkLabel} ›
                  </a>
                </div>
                <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent-strong">{it.tag}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
