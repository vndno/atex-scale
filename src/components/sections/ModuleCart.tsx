"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/icons";
import { OPEN_EVENT } from "@/components/ContactModal";

/**
 * Bausteine als Kacheln (Sektion "Kein Paket von der Stange"),
 * spielerisch als Auswahl: Hover blendet "Auswählen" ein, Klick legt den Baustein
 * hinein bzw. wieder heraus, der Korb oben rechts zählt mit. "Paket anfragen" öffnet das Kontakt-Modal.
 */
// Alle Kacheln weiß; bei Hover wechseln sie in ein helles Graublau, Schrift bleibt dunkel
const tile = {
  card: "bg-white text-[#0a0a0a] hover:bg-[#e6ebf2]",
  badge: "bg-chip text-ink group-hover:bg-white",
  sub: "text-muted-3 group-hover:text-muted",
};

export function ModuleCart() {
  const c = site.careerPage.cart;
  const modules = site.solution.modules;
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const [bump, setBump] = useState(0);

  const toggle = (i: number) => {
    setPicked((p) => {
      const n = new Set(p);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
    setBump((b) => b + 1);
  };

  return (
    <div className="relative rounded-2xl bg-surface-3 p-4 sm:p-6 lg:p-8">
      {/* Kopf mit Warenkorb */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-[15px] font-semibold text-ink">{c.title}</p>
          <p className="text-[12px] text-muted">{c.hint}</p>
        </div>
        <div className="relative grid size-11 place-items-center rounded-full bg-white text-ink shadow-soft" aria-label={`${c.cartLabel}: ${picked.size}`}>
          <Icon.cart className="size-5" />
          {picked.size > 0 && (
            <span key={bump} className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-accent text-[11px] font-bold text-white animate-pop">
              {picked.size}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {modules.map((m, i) => {
          const I = Icon[m.icon];
          const on = picked.has(i);
          return (
            <button
              key={m.title}
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={on}
              className={`group relative flex h-[155px] flex-col justify-between overflow-hidden rounded-md p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card ${tile.card} ${
                on ? "ring-2 ring-accent ring-offset-2 ring-offset-surface-3" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`grid size-8 place-items-center rounded-sm transition-colors duration-300 ${tile.badge}`}>
                  <I className="size-4" />
                </div>
                {on && (
                  <span className="grid size-6 place-items-center rounded-full bg-success text-white animate-pop">
                    <Icon.check className="size-3.5" strokeWidth={3} />
                  </span>
                )}
              </div>
              <div>
                <p className="truncate text-[14px] font-semibold leading-[18px]">{m.title}</p>
                <p className={`truncate text-[11px] leading-[14px] transition-colors duration-300 ${tile.sub}`}>{m.sub}</p>
              </div>
              {/* Hover-Overlay */}
              <span
                className={`pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-navy/90 px-3 py-2 text-[12px] font-semibold text-white opacity-0 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none`}
              >
                {on ? <Icon.minus className="size-3.5" /> : <Icon.plus className="size-3.5" />}
                {on ? c.remove : c.add}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-[13px] text-muted">
          {picked.size === 0 ? c.empty : [...picked].sort().map((i) => modules[i].title).join(" · ")}
        </p>
        <button
          type="button"
          disabled={picked.size === 0}
          onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
          className="shrink-0 rounded-sm bg-navy px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-navy-card disabled:cursor-not-allowed disabled:opacity-40"
        >
          {c.request}
          {picked.size > 0 ? ` (${picked.size})` : ""}
        </button>
      </div>
    </div>
  );
}
