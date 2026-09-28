"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void };
  }
}

/**
 * Eingebetteter Calendly-Kalender (Inline-Widget). Lädt das offizielle Script von
 * assets.calendly.com und initialisiert den Kalender im Container – auch bei
 * Client-Navigation, wenn das Script schon geladen ist.
 */
export function CalendlyEmbed({ url, date, primaryColor, className = "" }: { url: string; date?: string; primaryColor?: string; className?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const done = useRef(false);

  const full = (() => {
    const u = new URL(url);
    u.searchParams.set("hide_gdpr_banner", "1");
    if (primaryColor) u.searchParams.set("primary_color", primaryColor);
    if (date && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
      u.searchParams.set("month", date.slice(0, 7));
      u.searchParams.set("date", date);
    }
    return u.toString();
  })();

  useEffect(() => {
    if (!ready || done.current || !box.current || !window.Calendly) return;
    done.current = true;
    window.Calendly.initInlineWidget({ url: full, parentElement: box.current });
  }, [ready, full]);

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" onReady={() => setReady(true)} />
      <div ref={box} className={`min-w-[320px] ${className}`} style={{ height: 700 }} />
    </>
  );
}
