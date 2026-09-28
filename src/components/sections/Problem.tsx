import { site } from "@/content/site";
import { Icon } from "@/components/icons";
import { ScaleToFit } from "@/components/ScaleToFit";

/**
 * "Warum die Stelle immer noch offen ist" – zwei Karten:
 * links Fluktuation (Dashboard-Mockup mit Kündigungen), rechts Kosten (Handy-Mockup mit Ausgaben).
 */
export function Problem() {
  const p = site.problem;
  const [a, accent, b] = p.headline;
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <h2 className="h-section max-w-[16ch] text-ink">
          {a}
          <span className="h-light">{accent}</span>
          {b}
        </h2>

        <div className="mt-12 grid gap-6 *:min-w-0 lg:grid-cols-2">
          <ChurnCard />
          <CostCard />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------- Karte 1: Fluktuation */
function ChurnCard() {
  const c = site.problem.cards.churn;
  const r = 22;
  const circ = 2 * Math.PI * r;
  return (
    <article className="flex flex-col rounded-2xl bg-surface p-5 sm:p-9">
      <h3 className="max-w-[20ch] text-[clamp(1.4rem,2vw,1.75rem)] font-semibold leading-snug text-ink">{c.title}</h3>
      <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-muted">{c.text}</p>

      {/* Dashboard-Mockup: unter 420 px Breite wird es proportional verkleinert statt umzubrechen */}
      <ScaleToFit base={420} className="mt-8">
      <div className="rounded-2xl bg-white p-5 shadow-soft sm:p-6">
        <div className="flex gap-2 text-[14px]">
          {c.tabs.map((t, i) => (
            <span key={t} className={`rounded-full px-4 py-2 ${i === 0 ? "bg-chip font-semibold text-ink" : "text-muted-3"}`}>
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 56 56" className="size-14 shrink-0 -rotate-90">
              <circle cx="28" cy="28" r={r} stroke="#e5e7eb" strokeWidth="7" fill="none" />
              <circle cx="28" cy="28" r={r} stroke="#f26a4a" strokeWidth="7" fill="none" strokeDasharray={`${circ * c.kpiOpen.ratio} ${circ}`} strokeLinecap="round" />
            </svg>
            <div>
              <p className="text-[13px] text-muted">{c.kpiOpen.label}</p>
              <p className="text-[22px] font-semibold leading-tight text-accent">{c.kpiOpen.value}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 items-end gap-1.5">
              {[48, 30, 14].map((h, i) => (
                <span key={i} className="w-2 rounded-t-sm bg-line-soft" style={{ height: h }} />
              ))}
            </div>
            <div>
              <p className="text-[13px] text-muted">{c.kpiDuration.label}</p>
              <p className="text-[22px] font-semibold leading-tight text-muted-2">{c.kpiDuration.value}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-[1.3fr_1fr_0.9fr] px-3 text-[13px] text-muted">
          <span>{c.columns.role}</span>
          <span>{c.columns.filled}</span>
          <span className="text-right font-semibold text-ink">{c.columns.status}</span>
        </div>
        <ul className="mt-2 flex flex-col">
          {c.rows.map((row, i) => (
            <li
              key={row.role}
              className={`grid grid-cols-[1.3fr_1fr_0.9fr] items-center rounded-lg px-3 py-3 text-[14px] ${row.highlight ? "bg-surface-3 text-ink" : "border-t border-line-soft text-muted"}`}
            >
              <span className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={row.image} alt="" className="size-9 rounded-md object-cover" />
                {row.role}
              </span>
              <span>{row.filled}</span>
              <span className={`flex items-center justify-end gap-2 font-semibold ${row.highlight ? "text-ink" : "text-muted-2"}`}>
                <span className={`size-2 rounded-full ${row.highlight ? "bg-[#e5484d]" : "bg-line"}`} />
                {row.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
      </ScaleToFit>
    </article>
  );
}

/* -------------------------------------------------------- Karte 2: Kosten */
function CostCard() {
  const c = site.problem.cards.cost;
  const app = c.app;
  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl bg-surface p-5 sm:p-9">
      <h3 className="max-w-[20ch] text-[clamp(1.4rem,2vw,1.75rem)] font-semibold leading-snug text-ink">{c.title}</h3>
      <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-muted">{c.text}</p>

      {/* Fertiges Mockup aus Figma: Handy in der Hand mit der Ausgaben-Übersicht im Display.
          Die Höhe richtet sich nach dem Platz, der unter Überschrift und Text übrig bleibt. */}
      <div className="mt-8 flex min-h-[280px] flex-1 items-end justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mockups/hand-phone-v3.png"
          alt="Hand hält ein Smartphone mit der Übersicht der Recruiting-Ausgaben"
          width={1430}
          height={1238}
          loading="lazy"
          className="max-h-full w-auto max-w-[122%] object-contain object-bottom"
        />
      </div>
    </article>
  );
}
