import { site } from "@/content/site";
import { Heading } from "@/components/ui";
import { Icon } from "@/components/icons";
import { WistiaVideo } from "@/components/WistiaVideo";

/**
 * 02 · Das System: links Überschrift, Text und fünf nummerierte Schritte,
 * rechts ein Live-Dashboard (vier Eingaben → Anfragen-Eingang → drei Stufen → drei Kennzahlen).
 * Darunter optional ein Erklärvideo (nur wenn in site.ts eine Video-ID steht).
 */
const tones = {
  accent: "bg-accent/10 text-accent-strong",
  success: "bg-success-bg/70 text-success-ink",
  creme: "bg-creme text-ink-soft",
  chip: "bg-chip text-muted-2",
} as const;

export function Platform() {
  const p = site.platform;
  return (
    <section id="leistungen" className="section-y bg-surface">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_540px] lg:gap-16 xl:grid-cols-[1fr_580px]">
          <div>
            <Heading eyebrow={p.eyebrow} bold={p.headlineBold} light={p.headlineLight} />
            <p className="mt-6 max-w-[600px] text-[16px] leading-[1.6] text-muted-2">{p.text}</p>
            <p className="mt-10 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-3">{p.stepsTitle}</p>
            <ol className="mt-4 flex flex-col gap-5">
              {p.steps.map((st, i) => (
                <li key={st.title} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-accent/40 bg-white text-[12px] font-bold text-accent-strong">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink">{st.title}</p>
                    <p className="mt-0.5 text-[14px] leading-snug text-muted">{st.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <Dashboard />
        </div>

        {p.video.id && (
          <div className="mx-auto mt-16 max-w-[860px]">
            <p className="text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-3">{p.video.heading}</p>
            <WistiaVideo id={p.video.id} title={p.video.title} poster={p.video.poster} label={p.video.label} className="mt-4 aspect-video w-full shadow-card" />
          </div>
        )}
      </div>
    </section>
  );
}

function Dashboard() {
  const d = site.platform.dashboard;
  return (
    <div className="rounded-2xl border border-line-soft bg-white p-5 shadow-card sm:p-6">
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-3">
        <span className="size-1.5 rounded-full bg-success" aria-hidden />
        {d.title}
      </p>

      {/* Eingaben */}
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {d.inputs.map((it) => {
          const I = Icon[it.icon];
          return (
            <div key={it.label} className={`flex items-center gap-2 rounded-lg px-2.5 py-2.5 text-[12px] font-semibold sm:px-3 sm:text-[13px] ${tones[it.tone]}`}>
              <I className="size-4 shrink-0" />
              {it.label}
            </div>
          );
        })}
      </div>

      <Funnel />

      {/* Anfragen-Eingang */}
      <div className="flex items-center gap-3 rounded-xl bg-navy px-4 py-4 text-white">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent">
          <Icon.database className="size-5" />
        </span>
        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-tight">{d.engine.title}</p>
          <p className="text-[12px] text-on-navy-muted">{d.engine.sub}</p>
        </div>
        <span className="ml-auto flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#9fd3b6]">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70 motion-reduce:hidden" />
            <span className="relative inline-flex size-1.5 rounded-full bg-success" />
          </span>
          {d.engine.status}
        </span>
      </div>

      <Funnel reverse />

      {/* Stufen */}
      <div className="grid grid-cols-3 gap-2.5">
        {d.stages.map((st) => {
          const I = Icon[st.icon];
          return (
            <div key={st.label} className={`flex flex-col items-center gap-1.5 rounded-lg px-2 py-3 text-[12px] font-semibold ${tones[st.tone]}`}>
              <I className="size-4" />
              {st.label}
            </div>
          );
        })}
      </div>

      {/* Kennzahlen */}
      <div className="mt-2.5 grid grid-cols-3 gap-2.5">
        {d.kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-line-soft px-2 py-3 text-center sm:px-3">
            <p className="text-[18px] font-bold leading-none text-ink sm:text-[20px]">{k.value}</p>
            <p className="mt-1.5 text-[11px] leading-tight text-muted">{k.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] text-muted-3">{d.note}</p>
    </div>
  );
}

/* Gestrichelte Linien zwischen den Ebenen: vier (bzw. drei) Punkte laufen in der Mitte zusammen */
function Funnel({ reverse = false }: { reverse?: boolean }) {
  const top = reverse ? [50] : [12.5, 37.5, 62.5, 87.5];
  const bottom = reverse ? [16.7, 50, 83.3] : [50];
  return (
    <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="my-1 h-7 w-full" aria-hidden>
      {top.flatMap((x1) =>
        bottom.map((x2) => (
          <path
            key={`${x1}-${x2}`}
            d={`M${x1} 0 C${x1} 12, ${x2} 12, ${x2} 24`}
            fill="none"
            stroke={reverse ? "#a9cfba" : "#f7b7a6"}
            strokeWidth={1.4}
            strokeDasharray="3 3"
            vectorEffect="non-scaling-stroke"
            className="animate-dash motion-reduce:animate-none"
          />
        )),
      )}
    </svg>
  );
}
