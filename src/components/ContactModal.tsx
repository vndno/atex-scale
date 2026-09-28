"use client";

import { useCallback, useEffect, useState } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";

/**
 * Kontaktformular als Modal ("Wie gut ist Ihre Stelle besetzbar?").
 * Öffnet sich bei Klick auf jeden Link mit href="#anfrage" (alle CTA-Buttons)
 * oder per Custom-Event "atex:anfrage" (z. B. aus dem Termin-Widget).
 */
export const OPEN_EVENT = "atex:anfrage";

export function ContactModal() {
  const c = site.cta;
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a[href="#anfrage"]');
      if (!a) return;
      e.preventDefault();
      setOpen(true);
    };
    const onEvent = () => setOpen(true);
    document.addEventListener("click", onClick);
    window.addEventListener(OPEN_EVENT, onEvent);
    if (window.location.hash === "#anfrage") setOpen(true);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener(OPEN_EVENT, onEvent);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="anfrage-titel">
      <button aria-label="Schließen" onClick={close} className="absolute inset-0 bg-navy/45 backdrop-blur-md" />
      <div className="relative max-h-full w-full max-w-[520px] overflow-y-auto rounded-2xl bg-white p-6 shadow-card sm:p-9">
        <button
          onClick={close}
          aria-label="Schließen"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
        >
          <Icon.x className="size-5" />
        </button>
        <h2 id="anfrage-titel" className="text-[28px] font-semibold leading-tight text-ink sm:text-[32px]">{c.title}</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.text}</p>
        <div className="mt-7">
          <ContactForm autoFocus onConsentLink={close} />
        </div>
      </div>
    </div>
  );
}
