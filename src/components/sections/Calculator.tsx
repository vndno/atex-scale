"use client";

import { useMemo, useState } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui";

const eur = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <label className="block w-full">
      <div className="mb-3 flex items-center justify-between text-[14px]">
        <span className="text-on-navy-muted">{label}</span>
        <span className="font-semibold text-white">{format(value)}</span>
      </div>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ["--pct" as string]: `${pct}%` }}
      />
    </label>
  );
}

export function Calculator() {
  const c = site.calculator;
  const [orderValue, setOrderValue] = useState<number>(c.a.default);
  const [missing, setMissing] = useState<number>(c.b.default);

  // Entgangener Umsatz: Auftragswert × fehlende Aufträge pro Monat × 12
  const cost = useMemo(() => Math.round(orderValue * missing * c.multiplier), [orderValue, missing, c.multiplier]);

  return (
    <section className="section-y bg-navy text-white">
      <div className="container-x mx-auto flex max-w-[1080px] flex-col items-center text-center">
        <h2 className="max-w-[820px] text-[clamp(1.75rem,3vw,2.375rem)] font-bold leading-tight">{c.headline}</h2>

        <p className="mt-6 text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none tabular-nums" aria-live="polite">
          {eur.format(cost)} <span className="text-muted">{c.unit}</span>
        </p>
        <p className="mt-4 text-[13px] text-on-navy-muted">{c.formula}</p>

        <div className="mt-10 grid w-full gap-8 md:grid-cols-2 md:gap-5">
          <Slider
            label={c.a.label}
            value={orderValue}
            min={c.a.min}
            max={c.a.max}
            step={c.a.step}
            onChange={setOrderValue}
            format={(v) => eur.format(v)}
          />
          <Slider
            label={c.b.label}
            value={missing}
            min={c.b.min}
            max={c.b.max}
            step={c.b.step}
            onChange={setMissing}
            format={(v) => `${v} ${c.b.unit}`}
          />
        </div>

        <Button href={site.contact.bookingHref} variant="light" className="mt-10">
          {c.cta}
        </Button>
      </div>
    </section>
  );
}
