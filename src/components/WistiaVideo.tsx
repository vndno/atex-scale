"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

/**
 * Wistia-Video als Klick-Fassade: zunächst nur Vorschaubild + Play-Button (keine Drittanbieter-Requests),
 * nach Klick lädt der Wistia-Player und startet.
 */
export function WistiaVideo({ id, title, poster, duration, label, className = "" }: { id: string; title: string; poster: string; duration?: string; label?: string; className?: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-navy ${className}`}>
      {play ? (
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${id}?autoPlay=true&videoFoam=true&seo=false`}
          title={title}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0 block h-full w-full text-left" aria-label={`${label ?? "Video abspielen"}: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,23,33,0)_50%,rgba(14,23,33,0.75)_100%)]" />
          <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink shadow-card transition-transform duration-300 group-hover:scale-110">
            <Icon.play className="ml-1 size-7" />
          </span>
          <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 text-white">
            <span className="text-[14px] font-semibold">{label ?? title}</span>
            {duration && <span className="rounded-full bg-white/15 px-2 py-0.5 text-[12px]">{duration}</span>}
          </span>
        </button>
      )}
    </div>
  );
}
