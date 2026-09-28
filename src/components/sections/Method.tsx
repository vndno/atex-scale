import { site } from "@/content/site";
import { Heading } from "@/components/ui";

/**
 * 05 · Die Methode: Prinzip-Karte (Wiederholung schafft Vertrauen, vier Stufen) → schematische Kurve
 * (Anfragebereitschaft nach Anzahl Kontakte) → drei Phasen mit Kanälen, Zeitraum und Ziel
 * → drei Wirkprinzipien → dunkles Fazit-Band.
 */
export function Method() {
  const m = site.method;
  return (
    <section id="methode" className="section-y border-t border-line-soft bg-surface">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <Heading eyebrow={m.eyebrow} bold={m.headlineBold} light={m.headlineLight} />
          <p className="text-[16px] leading-[1.6] text-muted-2">{m.text}</p>
        </div>

        {/* Prinzip */}
        <div className="mt-12 grid gap-6 rounded-2xl border border-line-soft bg-white p-5 sm:p-7 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div>
            <p className="eyebrow">{m.principle.eyebrow}</p>
            <h3 className="mt-2 text-[22px] font-semibold leading-snug text-ink">{m.principle.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-2">{m.principle.text}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {m.principle.stages.map((st) => (
              <li key={st.title} className="rounded-lg border border-line-soft bg-surface-2 px-4 py-3">
                <p className="text-[12px] font-semibold text-accent-strong">{st.count}</p>
                <p className="mt-0.5 text-[15px] font-semibold text-ink">{st.title}</p>
                <p className="mt-0.5 text-[13px] leading-snug text-muted">{st.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <Chart />

        {/* Drei Phasen */}
        <p className="mt-12 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-3">{m.phasesTitle}</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {m.phases.map((ph, i) => (
            <Phase key={ph.label} phase={ph} index={i} />
          ))}
        </div>

        {/* Wirkprinzipien */}
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {m.triggers.map((t) => (
            <div key={t.title} className="rounded-xl border border-line-soft bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">{m.triggersEyebrow}</p>
              <p className="mt-1.5 text-[16px] font-semibold text-ink">{t.title}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-navy px-6 py-6 text-center sm:px-10">
          <p className="mx-auto max-w-[820px] text-[16px] leading-relaxed text-on-navy-muted">
            <span className="font-semibold text-accent">{m.banner.highlight}</span> {m.banner.text}
          </p>
        </div>
      </div>
    </section>
  );
}

/* Kartenfarbe wird von Phase zu Phase wärmer */
const phaseTones = [
  { card: "border-line-soft bg-white", num: "bg-navy text-white", tag: "text-ink" },
  { card: "border-accent/25 bg-[#fff8f5]", num: "bg-accent-soft text-accent-strong", tag: "text-ink" },
  { card: "border-accent/50 bg-[#fdeee8]", num: "bg-accent text-white", tag: "text-accent-strong" },
];

function Phase({ phase, index }: { phase: (typeof site.method.phases)[number]; index: number }) {
  const m = site.method;
  const t = phaseTones[index % phaseTones.length];
  return (
    <article className={`flex flex-col rounded-2xl border p-5 sm:p-6 ${t.card}`}>
      <div className="flex items-center gap-3">
        <span className={`grid size-9 shrink-0 place-items-center rounded-lg text-[15px] font-bold ${t.num}`}>{index + 1}</span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-3">{phase.label}</p>
          <p className={`text-[16px] font-semibold leading-tight ${t.tag}`}>{phase.tag}</p>
        </div>
      </div>
      <h3 className="mt-5 text-[15px] font-semibold text-ink">{phase.title}</h3>
      <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{phase.text}</p>
      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-3">{m.channelsLabel}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {phase.channels.map((c) => (
          <span key={c} className="rounded-md border border-line-soft bg-white px-2 py-1 text-[12px] font-medium text-ink">
            {c}
          </span>
        ))}
      </div>
      {/* Fußzeile unten bündig, auch wenn die Texte unterschiedlich lang sind */}
      <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 pt-4 text-[12px]">
          <span className="text-muted">
            {m.timeLabel}: <strong className="font-semibold text-ink">{phase.time}</strong>
          </span>
          <span className="text-muted">
            {m.goalLabel}: <strong className="font-semibold text-accent-strong">{phase.goal}</strong>
          </span>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------ Schematische Kurve */
const X_MAX = 9;
const Y_MAX = 100;

// Weiche Kurve durch alle Punkte (Catmull-Rom → Bézier), Koordinaten in Prozent der Fläche
function smoothPath(pts: { x: number; y: number }[]) {
  const P = pts.map((p) => ({ x: (p.x / X_MAX) * 100, y: 100 - (p.y / Y_MAX) * 100 }));
  let d = `M${P[0].x} ${P[0].y}`;
  for (let i = 0; i < P.length - 1; i++) {
    const p0 = P[Math.max(i - 1, 0)];
    const p1 = P[i];
    const p2 = P[i + 1];
    const p3 = P[Math.min(i + 2, P.length - 1)];
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += ` C${c1.x.toFixed(2)} ${c1.y.toFixed(2)}, ${c2.x.toFixed(2)} ${c2.y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return d;
}

function Chart() {
  const c = site.method.chart;
  const all = [{ x: 0, y: 4 }, ...c.points, { x: X_MAX, y: 90 }];
  const line = smoothPath(all);
  const area = `${line} L100 100 L0 100 Z`;
  return (
    <div className="mt-6 rounded-2xl border border-line-soft bg-white p-5 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-[18px] font-semibold text-ink">{c.title}</h3>
          <p className="mt-1 text-[14px] text-muted">{c.sub}</p>
        </div>
        <span className="rounded-full bg-chip px-3 py-1 text-[12px] font-medium text-muted-2">{c.badge}</span>
      </div>

      <div className="mt-6 flex gap-3">
        {/* y-Achse */}
        <p className="hidden w-4 shrink-0 items-center justify-center text-[12px] font-medium text-muted sm:flex">
          <span className="-rotate-90 whitespace-nowrap">{c.yLabel}</span>
        </p>
        <div className="min-w-0 flex-1">
          <div className="relative aspect-[4/3] w-full border-b-2 border-l-2 border-line sm:aspect-[1000/360]">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
              <defs>
                <linearGradient id="method-area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#f26a4a" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#f26a4a" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[25, 50, 75].map((y) => (
                <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#eceae6" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              ))}
              {c.points.map((p) => (
                <line
                  key={p.x}
                  x1={(p.x / X_MAX) * 100}
                  x2={(p.x / X_MAX) * 100}
                  y1={100 - (p.y / Y_MAX) * 100}
                  y2="100"
                  stroke="#f7b7a6"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
              <path d={area} fill="url(#method-area)" />
              <path d={line} fill="none" stroke="#f26a4a" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </svg>

            {/* Punkte + Beschriftung als HTML, damit die Schrift auf dem Handy lesbar bleibt */}
            {c.points.map((p) => (
              <div key={p.label} className="absolute" style={{ left: `${(p.x / X_MAX) * 100}%`, top: `${100 - (p.y / Y_MAX) * 100}%` }}>
                <span className="absolute left-0 top-0 block size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-accent bg-white" />
                <span className={`absolute bottom-3 left-0 ${p.x / X_MAX > 0.8 ? "-translate-x-[80%]" : "-translate-x-1/2"} whitespace-nowrap rounded-md border border-accent/30 bg-white px-2 py-1 text-[11px] font-semibold text-accent-strong shadow-soft sm:text-[13px]`}>
                  {p.label}
                </span>
              </div>
            ))}
          </div>
          {/* x-Achse */}
          <div className="relative h-6">
            {c.points.map((p) => (
              <span key={p.x} className="absolute top-1.5 -translate-x-1/2 text-[12px] font-semibold text-muted-2" style={{ left: `${(p.x / X_MAX) * 100}%` }}>
                {p.x}×
              </span>
            ))}
          </div>
          <p className="mt-1 text-center text-[12px] font-medium text-muted">{c.xLabel}</p>
        </div>
      </div>
    </div>
  );
}
