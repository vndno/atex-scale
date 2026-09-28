"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

/**
 * Cookie-Banner. Entscheidung liegt in localStorage
 * ("atex-consent" = "all" | "necessary"). Optionale Dienste (Analytics, Pixel …) dürfen
 * nur laden, wenn hasConsent("all") – aktuell sind keine optionalen Dienste eingebunden.
 * "Auswahl ändern" (Banner oder Footer) öffnet den Banner erneut.
 */
export const CONSENT_KEY = "atex-consent";
export const CONSENT_EVENT = "atex:consent-open";
type Choice = "all" | "necessary";

export function readConsent(): Choice | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "all" || v === "necessary" ? v : null;
  } catch {
    return null;
  }
}

export function ConsentBanner() {
  const c = site.consent;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(readConsent() === null);
    const onOpen = () => setOpen(true);
    window.addEventListener(CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_EVENT, onOpen);
  }, []);

  const choose = (v: Choice) => {
    try {
      localStorage.setItem(CONSENT_KEY, v);
    } catch {}
    window.dispatchEvent(new CustomEvent("atex:consent", { detail: v }));
    setOpen(false);
  };

  // Geschlossen: dezente helle Schaltfläche unten links (nur Schrift), die den Banner jederzeit wieder öffnet
  if (!open)
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={site.consent.footerLink}
        title={site.consent.footerLink}
        className="fixed bottom-4 left-4 z-[90] rounded-full border border-line-soft bg-white/90 px-3 py-1.5 text-[11px] font-medium text-muted backdrop-blur-sm transition-colors hover:text-ink print:hidden"
      >
        {site.consent.footerLink}
      </button>
    );

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-3 left-3 right-3 z-[95] mx-auto max-h-[80dvh] max-w-md overflow-y-auto rounded-xl border border-line-soft bg-white p-4 shadow-card animate-pop md:bottom-5 md:left-5 md:right-auto md:p-5 print:hidden"
    >
      <p className="text-[15px] font-semibold leading-snug text-ink">{c.title}</p>
      <p className="mt-1.5 text-[13px] leading-snug text-muted md:text-[14px]">{c.text}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => choose("all")}
          className="rounded-sm bg-navy px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-navy-card"
        >
          {c.acceptAll}
        </button>
        <button
          type="button"
          onClick={() => choose("necessary")}
          className="rounded-sm border border-line bg-white px-5 py-3 text-[14px] font-semibold text-ink transition-colors hover:border-ink/40"
        >
          {c.necessaryOnly}
        </button>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-muted">
        <button type="button" onClick={() => choose("necessary")} className="underline underline-offset-2 hover:text-ink">
          {c.change}
        </button>
        <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink">Datenschutz</Link>
        <Link href="/impressum" className="underline underline-offset-2 hover:text-ink">Impressum</Link>
      </div>
    </div>
  );
}

/** Kleiner Link (z. B. im Footer), der den Banner erneut öffnet. */
export function ConsentLink({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(CONSENT_EVENT))} className={className}>
      {site.consent.footerLink}
    </button>
  );
}
