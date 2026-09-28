"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

/**
 * Hero-Collage: 4 Kacheln (2 Spalten, rechte Spalte versetzt) mit Betriebs-Porträts
 * und Berufs-Chip. Alle slideIntervalMs wechselt die nächste Kachel ihr Foto, und in
 * dieser Kachel zoomt der Rahmen um die Person ein – blau mit „Garantie möglich“ oder grün
 * mit „Kampagne läuft“ (status je Foto) – eng an der Silhouette
 * (Lage pro Foto in site.hero.slides[].frame, aus der Silhouette berechnet) und bleibt
 * innerhalb der Kachel. Liegt eine freigestellte Person vor, steht
 * sie vor dem Rahmen. prefers-reduced-motion: keine Wechsel.
 */
const TILE_COUNT = 4;
const ORDER = [0, 2, 1, 3];
// Seitenverhältnis je Kachel (Breite/Höhe) – Fotos sind quadratisch und werden per object-cover beschnitten
const RATIOS = [1, 1, 1, 1]; // alle Kacheln quadratisch wie die Fotos – Rahmen werden nie seitlich beschnitten

type Box = { left: number; top: number; width: number; height: number };

/** Rahmenlage vom Foto (quadratisch) auf die Kachel umrechnen: bei 4:5 wird links/rechts je 10 % abgeschnitten. */
function frameForTile(f: Box, ratio: number): Box {
  if (ratio >= 1) return f;
  const cut = (1 - ratio) / 2; // Anteil des Fotos, der je Seite wegfällt (Foto ist 1:1)
  const visible = 1 - 2 * cut;
  // umrechnen und auf 2–98 % der Kachel begrenzen, damit der Rahmen nie aus der Kachel ragt
  const left = Math.max(2, ((f.left / 100 - cut) / visible) * 100);
  const right = Math.min(98, ((f.left / 100 + f.width / 100 - cut) / visible) * 100);
  return { left, width: right - left, top: f.top, height: f.height };
}

type Slide = (typeof site.hero.slides)[number];

export function HeroVisual({ slides, persons = [] }: { slides: readonly Slide[]; persons?: boolean[] }) {
  const h = site.hero;
  const n = slides.length;
  const [tiles, setTiles] = useState<{ cur: number; prev: number | null }[]>(() =>
    Array.from({ length: TILE_COUNT }, (_, i) => ({ cur: i % n, prev: null })),
  );
  const [active, setActive] = useState(0);
  const step = useRef(0);

  useEffect(() => {
    if (n <= TILE_COUNT || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      step.current += 1;
      const tile = ORDER[step.current % ORDER.length];
      setTiles((t) => {
        const used = new Set(t.map((x) => x.cur));
        let next = (t[tile].cur + 1) % n;
        for (let k = 0; k < n && used.has(next); k++) next = (next + 1) % n;
        return t.map((x, i) => (i === tile ? { cur: next, prev: x.cur } : x));
      });
      setActive(tile);
    }, h.slideIntervalMs);
    return () => window.clearInterval(id);
  }, [n, h.slideIntervalMs]);

  const renderTile = (i: number, ratioClass: string) => {
    const t = tiles[i];
    const s = slides[t.cur];
    const isActive = i === active;
    const box = frameForTile(s.frame, RATIOS[i]);
    const st = h.status[s.status];
    return (
      <figure className={`relative ${ratioClass} overflow-hidden rounded-xl bg-[linear-gradient(135deg,#e9edf2_0%,#d5dbe3_100%)] shadow-soft`}>
        {t.prev !== null && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={slides[t.prev].image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={t.cur} src={s.image} alt={s.alt} loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover animate-hero-tile motion-reduce:animate-none" />

        {/* Rahmen um die Person – orange (Zusage) oder grün (Kampagne läuft), hinter der freigestellten Person */}
        {isActive && (
          <div
            key={`f-${t.cur}`}
            aria-hidden
            className="pointer-events-none absolute z-10 rounded-[10px] border-[2.3px] animate-hero-frame motion-reduce:animate-none"
            style={{
              left: `${box.left}%`,
              top: `${box.top}%`,
              width: `${box.width}%`,
              height: `${box.height}%`,
              borderColor: st.color,
              backgroundImage: `linear-gradient(180deg, ${st.color}38 0%, ${st.color}00 55%)`,
            }}
          />
        )}
        {persons[t.cur] && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`p-${t.cur}`}
            src={s.person}
            alt=""
            className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover animate-hero-tile motion-reduce:animate-none"
            // Nur der in Figma freigegebene Teil (z. B. Kopf und Schultern) liegt vor dem Rahmen; senkrechte Prozente gelten 1:1,
            // weil die Kacheln das quadratische Foto nur seitlich beschneiden
            style={"personClip" in s && s.personClip ? { clipPath: `inset(${s.personClip.top}% 0 ${100 - s.personClip.top - s.personClip.height}% 0)` } : undefined}
          />
        )}

        {/* KI-Score oben links */}
        {isActive && (
          <div key={`s-${t.cur}`} className="absolute left-[14px] top-[14px] z-30 rounded-lg bg-white/92 px-3 py-2 shadow-soft animate-hero-pill motion-reduce:animate-none">
            <p className="text-[11px] leading-none text-muted">{h.overlayScoreLabel}</p>
            <p className="mt-1 text-[24px] font-bold leading-none text-ink">{s.score}</p>
          </div>
        )}

        {/* Unten links: Status-Pille (dunkel) über dem Berufs-Chip */}
        <div className="absolute bottom-3 left-3 z-30 flex max-w-[calc(100%-1.5rem)] flex-col items-start gap-2">
          {isActive && (
            <div key={`g-${t.cur}`} className="flex items-center gap-2 rounded-full border border-[#353535] bg-[#505051]/95 px-3 py-1.5 shadow-soft animate-hero-pill-late motion-reduce:animate-none">
              <span className="size-2 rounded-full" style={{ backgroundColor: st.color }} />
              <span className="text-[12px] font-semibold text-white">{st.label}</span>
            </div>
          )}
          <figcaption key={`c-${t.cur}`} className="max-w-full truncate rounded-full bg-white/92 px-3 py-1.5 text-[13px] font-medium text-ink shadow-soft animate-pop motion-reduce:animate-none">
            {s.role}
          </figcaption>
        </div>
      </figure>
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-[520px] 2xl:max-w-[600px]">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="flex flex-col gap-3 sm:gap-4">
          {renderTile(0, "aspect-square")}
          {renderTile(1, "aspect-square")}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:mt-12 sm:gap-4">
          {renderTile(2, "aspect-square")}
          {renderTile(3, "aspect-square")}
        </div>
      </div>
    </div>
  );
}
