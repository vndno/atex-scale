"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Heading } from "@/components/ui";
import { Icon } from "@/components/icons";

/**
 * 03 · Der Ablauf: Reiter (vier Schritte) links, Detailfeld rechts mit Text und vier Kärtchen,
 * darunter der Kreislauf als Leiste. Die Reiter wechseln automatisch, bis jemand selbst klickt
 * (bei prefers-reduced-motion gar nicht).
 */
const dots = ["bg-accent", "bg-success", "bg-navy", "bg-accent-soft"];

export function Process() {
  const p = site.process;
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % p.phases.length), p.autoMs);
    return () => window.clearInterval(id);
  }, [auto, p.autoMs, p.phases.length]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };
  const ph = p.phases[active];
  const PhIcon = Icon[ph.icon];

  return (
    <section id="ablauf" className="section-y bg-white">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <Heading eyebrow={p.eyebrow} bold={p.headlineBold} light={p.headlineLight} />
          <p className="text-[16px] leading-[1.6] text-muted-2">{p.text}</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[300px_1fr] lg:gap-6">
          {/* Reiter */}
          <div role="tablist" aria-label={p.loopTitle} className="grid grid-cols-2 gap-2 lg:flex lg:flex-col">
            {p.phases.map((it, i) => {
              const I = Icon[it.icon];
              const on = i === active;
              return (
                <button
                  key={it.title}
                  role="tab"
                  aria-selected={on}
                  onClick={() => pick(i)}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all duration-200 sm:px-4 ${
                    on ? "border-line-soft bg-white shadow-soft" : "border-transparent hover:bg-surface-2"
                  }`}
                >
                  <span className={`grid size-9 shrink-0 place-items-center rounded-lg ${on ? "bg-accent text-white" : "bg-chip text-muted-2"}`}>
                    <I className="size-[18px]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-[11px] ${on ? "text-accent-strong" : "text-muted-3"}`}>
                      {p.stepLabel} {i + 1}
                    </span>
                    <span className={`block text-[14px] font-semibold leading-tight sm:text-[15px] ${on ? "text-ink" : "text-muted-2"}`}>{it.title}</span>
                  </span>
                  <Icon.chevron className={`hidden size-4 -rotate-90 shrink-0 lg:block ${on ? "text-muted" : "text-transparent"}`} />
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <div key={active} role="tabpanel" className="rounded-2xl border border-line-soft bg-white p-5 shadow-soft animate-pop motion-reduce:animate-none sm:p-7">
            <div className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-white">
                <PhIcon className="size-5" />
              </span>
              <div>
                <p className="text-[12px] text-muted-3">
                  {p.stepLabel} {active + 1}
                </p>
                <h3 className="text-[20px] font-semibold leading-tight text-ink">{ph.title}</h3>
                <p className="text-[13px] text-muted">{ph.sub}</p>
              </div>
            </div>
            <p className="mt-5 max-w-[720px] text-[15px] leading-relaxed text-muted-2">{ph.text}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {ph.items.map((it, i) => (
                <li key={it.title} className="rounded-lg border border-line-soft bg-surface-2 px-4 py-3">
                  <p className="flex items-center gap-2 text-[14px] font-semibold text-ink">
                    <span className={`size-2 shrink-0 rounded-full ${dots[i % dots.length]}`} aria-hidden />
                    {it.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-muted">{it.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kreislauf-Leiste */}
        <div className="mt-6 rounded-2xl border border-line-soft bg-surface-2 px-5 py-5">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-3">{p.loopTitle}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {p.phases.map((it, i) => {
              const I = Icon[it.icon];
              const on = i === active;
              return (
                <span key={it.title} className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => pick(i)}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-[13px] font-semibold transition-colors ${
                      on ? "border-accent/40 bg-accent/10 text-accent-strong" : "border-line-soft bg-white text-muted-2 hover:text-ink"
                    }`}
                  >
                    <I className="size-4" />
                    {it.title}
                  </button>
                  {i < p.phases.length - 1 && <span className="hidden text-muted-3 sm:inline" aria-hidden>→</span>}
                </span>
              );
            })}
            <Icon.refresh className="ml-1 size-4 text-accent" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
