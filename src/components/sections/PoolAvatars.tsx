"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

/**
 * Porträt-Reihe im Anfragen-Eingang: vier runde Fotos aus hero.slides, von denen alle
 * swapIntervalMs eines gegen ein noch nicht gezeigtes getauscht wird (weich eingeblendet,
 * leichter Zoom). prefers-reduced-motion: keine Wechsel.
 */
export function PoolAvatars({ photos, className = "" }: { photos: readonly { image: string }[]; className?: string }) {
  const { avatarCount, swapIntervalMs } = site.model.pool;
  const n = photos.length;
  const [slots, setSlots] = useState<{ cur: number; prev: number | null }[]>(() =>
    Array.from({ length: avatarCount }, (_, i) => ({ cur: i % n, prev: null })),
  );
  const step = useRef(0);

  useEffect(() => {
    if (n <= avatarCount || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      step.current += 1;
      // Reihenfolge 0,2,1,3 – wirkt zufälliger als von links nach rechts
      const slot = [0, 2, 1, 3][step.current % avatarCount] ?? step.current % avatarCount;
      setSlots((s) => {
        const used = new Set(s.map((x) => x.cur));
        let next = (s[slot].cur + 1) % n;
        for (let k = 0; k < n && used.has(next); k++) next = (next + 1) % n;
        return s.map((x, i) => (i === slot ? { cur: next, prev: x.cur } : x));
      });
    }, swapIntervalMs);
    return () => window.clearInterval(id);
  }, [n, avatarCount, swapIntervalMs]);

  return (
    <div className={`flex -space-x-2 ${className}`} aria-hidden>
      {slots.map((s, i) => (
        <span key={i} className="relative size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white" style={{ zIndex: avatarCount - i }}>
          {s.prev !== null && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photos[s.prev].image} alt="" className="absolute inset-0 size-full object-cover" />
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img key={s.cur} src={photos[s.cur].image} alt="" className="absolute inset-0 size-full object-cover animate-avatar-in motion-reduce:animate-none" />
        </span>
      ))}
    </div>
  );
}
