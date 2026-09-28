import { site } from "@/content/site";
import { Heading } from "@/components/ui";
import { Icon } from "@/components/icons";

/**
 * 04 · Warum es funktioniert: links Text und vier Merkmale (2 × 2),
 * rechts ein Schema „Was Sie bekommen“: Eingaben → Markt-Check → was bei Ihnen ankommt.
 */
const iconTones = {
  accent: "bg-accent text-white",
  navy: "bg-navy text-white",
  success: "bg-success text-white",
  soft: "bg-accent-soft text-accent-strong",
} as const;

export function WhyUs() {
  const w = site.why;
  return (
    <section id="warum" className="section-y bg-surface">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_540px] lg:gap-16 xl:grid-cols-[1fr_580px]">
        <div>
          <Heading eyebrow={w.eyebrow} bold={w.headlineBold} light={w.headlineLight} />
          <p className="mt-6 max-w-[620px] text-[16px] leading-[1.6] text-muted-2">{w.text}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {w.features.map((f) => {
              const I = Icon[f.icon];
              return (
                <li key={f.title} className="flex items-center gap-3 rounded-xl border border-line-soft bg-white p-4">
                  <span className={`grid size-10 shrink-0 place-items-center rounded-lg ${iconTones[f.tone]}`}>
                    <I className="size-5" />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink">{f.title}</p>
                    <p className="text-[13px] leading-snug text-muted">{f.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <Diagram />
      </div>
    </section>
  );
}

function Diagram() {
  const d = site.why.diagram;
  return (
    <div className="rounded-2xl border border-line-soft bg-white p-5 shadow-card sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-3">{d.title}</p>

      <p className="mt-4 text-[12px] font-semibold text-muted-2">{d.inputsLabel}</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {d.inputs.map((it) => (
          <span key={it} className="rounded-lg bg-accent/10 px-2 py-2.5 text-center text-[12px] font-semibold leading-tight text-accent-strong">
            {it}
          </span>
        ))}
      </div>

      <Down />

      {/* Markt-Check */}
      <div className="rounded-xl border-2 border-accent/60 bg-[linear-gradient(180deg,rgba(242,106,74,0.07)_0%,rgba(242,106,74,0)_100%)] p-4">
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-navy text-white">
            <Icon.target className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="text-[15px] font-semibold leading-tight text-ink">{d.engine.title}</p>
            <p className="text-[12px] text-muted">{d.engine.sub}</p>
          </div>
          <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-success-bg px-2.5 py-1 text-[11px] font-semibold text-success-ink">
            <span className="size-1.5 rounded-full bg-success" aria-hidden />
            {d.engine.status}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {d.tiles.map((t) => (
            <div key={t.value} className="rounded-lg border border-line-soft bg-white px-2 py-2.5 text-center">
              <p className="text-[13px] font-bold text-ink sm:text-[14px]">{t.value}</p>
              <p className="mt-0.5 text-[11px] leading-tight text-muted">{t.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Down tone="success" />

      <p className="text-[12px] font-semibold text-muted-2">{d.outputsLabel}</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {d.outputs.map((it) => (
          <span key={it} className="flex items-center justify-center gap-1.5 rounded-lg bg-success-bg/70 px-2 py-2.5 text-center text-[12px] font-semibold leading-tight text-success-ink">
            {it}
          </span>
        ))}
      </div>
      <p className="mt-5 border-t border-line-soft pt-4 text-center text-[12px] text-muted-3">{d.footer}</p>
    </div>
  );
}

function Down({ tone = "accent" }: { tone?: "accent" | "success" }) {
  return (
    <div className="my-2 flex justify-center" aria-hidden>
      <span className="flex flex-col items-center">
        <span className={`h-4 w-0 border-l-2 border-dashed ${tone === "accent" ? "border-[#f7b7a6]" : "border-[#a9cfba]"}`} />
        <Icon.chevron className={`-mt-1 size-4 ${tone === "accent" ? "text-accent" : "text-success"}`} />
      </span>
    </div>
  );
}
