"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Heading, Photo } from "@/components/ui";
import { Icon } from "@/components/icons";

/* ------------------------------------------------------ Kundenreise */
/** available = pro Reiter, ob die Bilddatei vorliegt (Prüfung beim Build in page.tsx) */
export function Journey({ available = [] }: { available?: boolean[] }) {
  const j = site.journey;
  const DEFAULT = 1; // "Karriereseite" ist beim Laden geöffnet
  const [open, setOpen] = useState(DEFAULT);
  const shown = open < 0 ? DEFAULT : open; // bei zugeklapptem Reiter bleibt das letzte Bild stehen
  return (
    <section id="karriere" className="section-y bg-white">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_560px] lg:gap-16">
        <div>
          <Heading eyebrow={j.eyebrow} bold={j.headlineBold} light={j.headlineLight} />
          <p className="mt-6 text-[15px] leading-relaxed text-muted">{j.text}</p>
          <div className="mt-6">
            {j.items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={it.title} className="border-b border-line">
                  <button
                    className="flex w-full items-center justify-between py-4 text-left"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] font-semibold text-ink">{it.title}</span>
                    {isOpen ? <Icon.minus className="size-[18px]" /> : <Icon.plus className="size-[18px]" />}
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="pb-4 text-[14px] leading-relaxed text-muted">{it.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bild zum aktiven Reiter – alle drei liegen übereinander und blenden weich */}
        <div className="relative aspect-[1404/918] w-full overflow-hidden rounded-2xl bg-[#d9dee6]">
          {j.items.map((it, i) =>
            available[i] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={it.image}
                src={it.image}
                alt={it.alt}
                loading={i === DEFAULT ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
                  shown === i ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
                }`}
              />
            ) : (
              <Photo
                key={it.image}
                src={it.image}
                alt={it.alt}
                label={`Bild: ${it.title}`}
                className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${shown === i ? "opacity-100" : "opacity-0"}`}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

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
