"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { Icon } from "@/components/icons";
import { OPEN_EVENT } from "@/components/ContactModal";

/**
 * Schwebendes Termin-Widget unten rechts:
 * kleiner runder Button mit Porträt → Karte mit Ansprechpartner, Tagesauswahl
 * (nächste 5 Tage, Wochenende inaktiv) und "Termin aussuchen" → Kontaktseite /kontakt
 * mit eingebettetem Calendly-Kalender und vorgewähltem Datum. Zusätzlich Link zum Kontaktformular. Erscheint nach delayMs,
 * geschlossen bleibt es für die Sitzung geschlossen.
 */
type Day = { date: Date; label: string; num: number; weekend: boolean; iso: string };

const WEEKDAYS = ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."];

function nextDays(count: number): Day[] {
  const out: Day[] = [];
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  for (let i = 0; i < count; i++) {
    const date = new Date(d);
    date.setDate(d.getDate() + i);
    const wd = date.getDay();
    const iso = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    out.push({ date, label: WEEKDAYS[wd], num: date.getDate(), weekend: wd === 0 || wd === 6, iso });
  }
  return out;
}

export function BookingWidget() {
  const w = site.widget;
  const cal = site.contact.calendly;
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState<Day[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [imgOk, setImgOk] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("atex-widget-dismissed") === "1") return;
    } catch {}
    const ds = nextDays(5);
    setDays(ds);
    setSelected(ds.find((d) => !d.weekend)?.iso ?? ds[0].iso);
    const t = window.setTimeout(() => setVisible(true), w.delayMs);
    return () => window.clearTimeout(t);
  }, [w.delayMs]);

  if (!visible) return null;

  const dismiss = () => {
    setOpen(false);
    setVisible(false);
    try {
      sessionStorage.setItem("atex-widget-dismissed", "1");
    } catch {}
  };

  // Führt auf die eigene Kontaktseite mit eingebettetem Kalender; der gewählte Tag wird mitgegeben
  const bookingHref = selected ? `${w.buttonHref}?date=${selected}#termin` : w.buttonHref;

  const initials = w.person.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  const avatar = (size: string) => (
    <span className={`relative block shrink-0 ${size}`}>
      <span className="grid size-full place-items-center overflow-hidden rounded-full bg-accent-soft text-[15px] font-bold text-navy">
        {imgOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={w.person.image} alt="" className="size-full object-cover" onError={() => setImgOk(false)} />
        ) : (
          initials
        )}
      </span>
      <span aria-hidden className="absolute right-0 top-0 size-3.5 rounded-full border-2 border-white bg-success" />
    </span>
  );

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {open && (
        <div className="w-[min(calc(100vw-2.5rem),400px)] animate-pop rounded-2xl border border-line-soft bg-white p-6 shadow-card">
          <div className="flex items-start gap-4">
            {avatar("size-14")}
            <div className="min-w-0 flex-1">
              <p className="text-[20px] font-semibold leading-tight text-ink">{w.person.name}</p>
              <p className="mt-0.5 text-[15px] text-muted">{w.person.role}</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Schließen" className="-mr-2 -mt-1 grid size-9 place-items-center rounded-full text-muted hover:bg-surface hover:text-ink">
              <Icon.x className="size-5" />
            </button>
          </div>

          <p className="mt-5 text-[19px] font-semibold text-ink">{w.title}</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{w.text}</p>
          <p className="mt-4 rounded-lg bg-surface px-4 py-3 text-[14px] text-muted-2">
            {w.chip} · {cal.durationLabel}
          </p>

          <div className="mt-4 grid grid-cols-5 gap-2">
            {days.map((d) => {
              const active = d.iso === selected;
              return (
                <button
                  key={d.iso}
                  type="button"
                  disabled={d.weekend}
                  onClick={() => setSelected(d.iso)}
                  aria-pressed={active}
                  className={`rounded-lg border py-2.5 text-center transition-colors ${
                    d.weekend
                      ? "cursor-not-allowed border-line-soft text-muted-3"
                      : active
                        ? "border-accent bg-accent/10 text-ink"
                        : "border-line-soft text-ink hover:border-ink/40"
                  }`}
                >
                  <span className="block text-[13px]">{d.label}</span>
                  <span className="block text-[20px] font-semibold leading-tight">{d.num}</span>
                </button>
              );
            })}
          </div>

          <Link
            href={bookingHref}
            onClick={() => setOpen(false)}
            className="mt-4 block w-full rounded-full bg-navy px-6 py-4 text-center text-[17px] font-semibold text-white transition-colors hover:bg-navy-card"
          >
            {w.button}
          </Link>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              window.dispatchEvent(new Event(OPEN_EVENT));
            }}
            className="mt-3 block w-full text-center text-[14px] text-muted underline-offset-2 hover:text-ink hover:underline"
          >
            {w.alt}
          </button>
        </div>
      )}

      <div className="flex items-center gap-2">
        {!open && (
          <button onClick={dismiss} aria-label="Widget ausblenden" className="grid size-7 place-items-center rounded-full bg-white/90 text-muted shadow-soft hover:text-ink">
            <Icon.x className="size-3.5" />
          </button>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Schließen" : w.openLabel}
          aria-expanded={open}
          className="animate-pop rounded-full bg-white p-1 shadow-card transition-transform hover:-translate-y-0.5"
        >
          {avatar("size-14")}
        </button>
      </div>
    </div>
  );
}
