"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Verkleinert seinen Inhalt proportional, sobald der Platz schmaler als `base` Pixel ist
 * (statt Texte umbrechen zu lassen). Auf breiten Bildschirmen passiert nichts.
 * Gedacht für Mockups (Dashboard, Handy), die wie am Desktop aussehen sollen.
 */
export function ScaleToFit({ base, className = "", fill = false, children }: { base: number; className?: string; fill?: boolean; children: React.ReactNode }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    const update = () => {
      const w = o.clientWidth;
      const s = w < base ? w / base : 1;
      setScale(s);
      setHeight(s < 1 ? i.offsetHeight * s : undefined);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, [base]);

  return (
    <div ref={outer} className={`${className} ${fill && scale === 1 ? "flex flex-col" : ""}`} style={{ height }}>
      {/* fill: ohne Verkleinerung füllt der Inhalt die volle Höhe (z. B. Handy am unteren Kartenrand) */}
      <div ref={inner} className={fill && scale === 1 ? "flex flex-1 flex-col" : undefined} style={scale < 1 ? { width: base, transform: `scale(${scale})`, transformOrigin: "top left" } : undefined}>
        {children}
      </div>
    </div>
  );
}
