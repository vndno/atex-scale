"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/icons";

/* ------------------------------------------------------------------ FAQ */
export function Faq() {
  const f = site.faq;
  const [open, setOpen] = useState<number>(-1);
  return (
    <section id="faq" className="section-y bg-surface-2">
      <div className="container-x mx-auto max-w-[1200px]">
        <h2 className="text-center text-[40px] font-semibold text-ink">{f.headline}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {f.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="self-start rounded-lg bg-white">
                <button
                  className="flex w-full items-start justify-between gap-4 px-6 py-[18px] text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] text-ink">{it.q}</span>
                  <span className="mt-0.5 shrink-0 text-ink">{isOpen ? <Icon.minus className="size-[18px]" /> : <Icon.plus className="size-[18px]" />}</span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[14px] leading-relaxed text-muted">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
