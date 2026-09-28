"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Heading } from "@/components/ui";
import { Icon } from "@/components/icons";

/**
 * "Laufende Projekte": Tabelle mit fester Höhe. Alle paar Sekunden schiebt sich die Liste um eine
 * Zeile nach oben, unten läuft ein weiteres Projekt ein – mit dem Profilbild des Ansprechpartners.
 * Umgesetzt über eine Transform-Animation, danach wird die oberste Zeile entfernt.
 */
const SHIFT_MS = 560;

export function Placements() {
  const p = site.placements;
  const n = p.items.length;
  const visible = p.visibleRows;
  const [queue, setQueue] = useState<number[]>(() => Array.from({ length: visible + 1 }, (_, i) => i % n));
  const [shift, setShift] = useState(false);
  const next = useRef((visible + 1) % n);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setShift(true);
      window.setTimeout(() => {
        setQueue((prev) => [...prev.slice(1), next.current]);
        next.current = (next.current + 1) % n;
        setShift(false);
      }, SHIFT_MS);
    }, p.feedIntervalMs);
    return () => clearInterval(id);
  }, [n, p.feedIntervalMs]);

  return (
    <section id="ergebnisse" className="section-y bg-surface">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Heading eyebrow={p.eyebrow} bold={p.headlineBold} light={p.headlineLight} />
          <p className="max-w-[440px] text-[15px] leading-relaxed text-muted">{p.text}</p>
        </div>

        <div className="mt-8 flex justify-end">
          <span className="flex items-center gap-2 text-[12px] font-medium text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {p.live}
          </span>
        </div>

        <div className="mt-3 overflow-hidden rounded-xl border border-line-soft bg-white [--row-h:112px] md:[--row-h:82px]">
          {/* Kopfzeile: gleiches Raster und gleicher Innenabstand wie die Zeilen */}
          <div className="hidden border-b border-line-soft px-6 py-3 text-[12px] font-semibold uppercase tracking-wide text-muted-3 md:grid md:grid-cols-[1.5fr_1.1fr_0.7fr_0.7fr] md:gap-4">
            <span>{p.columns.role}</span>
            <span>{p.columns.industry}</span>
            <span className="text-right">{p.columns.days}</span>
            <span className="text-right">{p.columns.applicants}</span>
          </div>

          {/* Sichtfenster */}
          <div className="overflow-hidden" style={{ height: `calc(var(--row-h) * ${visible})` }}>
            <ul
              aria-live="polite"
              style={{
                transform: shift ? "translateY(calc(var(--row-h) * -1))" : "translateY(0)",
                transition: shift ? `transform ${SHIFT_MS}ms cubic-bezier(0.4, 0, 0.2, 1)` : "none",
              }}
            >
              {queue.map((idx, i) => {
                const it = p.items[idx];
                return (
                  <li
                    key={`${idx}-${i}-${queue.length}`}
                    className="grid h-[var(--row-h)] grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 border-b border-line-soft px-4 sm:px-6 md:grid-cols-[1.5fr_1.1fr_0.7fr_0.7fr]"
                  >
                    <span className="col-span-2 flex min-w-0 items-center gap-3 md:col-span-1">
                      <span className="relative shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={it.image} alt="" loading="lazy" className="size-11 rounded-lg object-cover" />
                        <span className="absolute -bottom-1 -right-1 grid size-5 place-items-center rounded-full border-2 border-white bg-success-bg text-success-ink">
                          <Icon.check className="size-2.5" strokeWidth={3} />
                        </span>
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[15px] font-semibold text-ink">{it.role}</span>
                        <span className="block truncate text-[13px] text-muted-3 md:hidden">
                          {it.field} · {it.city}
                        </span>
                      </span>
                    </span>
                    <span className="hidden truncate text-[14px] text-muted md:block">
                      {it.field} · {it.city}
                    </span>
                    <span className="text-[14px] text-ink md:text-right">
                      <span className="font-semibold">{it.days}</span> {p.unitDays}
                    </span>
                    <span className="text-right text-[14px] text-ink">
                      <span className="font-semibold">{it.applicants}</span>
                      <span className="hidden md:inline"> {p.unitCount}</span>
                      <span className="md:hidden"> {p.unitCountShort}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <p className="mt-4 text-[13px] text-muted-3">{p.footnote}</p>
      </div>
    </section>
  );
}
