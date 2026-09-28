"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { Icon } from "@/components/icons";

/**
 * Kontaktformular "Wie gut ist Ihre Stelle besetzbar?" – im Modal und auf /kontakt.
 * Sendet an /api/anfrage; ohne konfiguriertes Ziel zeigt es Telefon/E-Mail an.
 */
type Status = "idle" | "sending" | "success" | "error" | "not_configured";

export function ContactForm({ autoFocus = false, onConsentLink }: { autoFocus?: boolean; onConsentLink?: () => void }) {
  const c = site.cta;
  const contact = site.contact;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const phone = `${c.fields.phone.prefix} ${String(fd.get("phone") ?? "").trim()}`;
    setStatus("sending");
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          company: fd.get("company"),
          phone,
          email: fd.get("email"),
          consent: fd.get("consent") === "on",
          website: fd.get("website"),
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else if (res.status === 503) setStatus("not_configured");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-4 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-success-bg text-success-ink">
          <Icon.check className="size-7" strokeWidth={3} />
        </span>
        <h3 className="mt-5 text-[26px] font-semibold text-ink">{c.success.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.success.text}</p>
        <a href={contact.calendly.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-accent hover:underline">
          {c.success.calendly} ›
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <Field label={c.fields.name.label}>
        <input name="name" required autoFocus={autoFocus} autoComplete="name" placeholder={c.fields.name.placeholder} className={inputCls} />
      </Field>
      <Field label={c.fields.company.label}>
        <input name="company" required autoComplete="organization" placeholder={c.fields.company.placeholder} className={inputCls} />
      </Field>
      <Field label={c.fields.phone.label}>
        <div className="flex">
          <span className="flex items-center gap-2 rounded-l-lg border border-r-0 border-line-soft bg-white px-4 text-[16px] text-ink">
            <span aria-hidden className="h-3.5 w-5 rounded-[2px] bg-[linear-gradient(180deg,#000_0%,#000_33%,#dd0000_33%,#dd0000_66%,#ffce00_66%)]" />
            {c.fields.phone.prefix}
          </span>
          <input name="phone" required type="tel" autoComplete="tel-national" inputMode="tel" placeholder={c.fields.phone.placeholder} className={`${inputCls} rounded-l-none`} />
        </div>
      </Field>
      <Field label={c.fields.email.label}>
        <input name="email" required type="email" autoComplete="email" placeholder={c.fields.email.placeholder} className={inputCls} />
      </Field>
      {/* Honeypot gegen Spam-Bots */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <label className="flex items-start gap-3 text-[14px] leading-relaxed text-muted-2">
        <input name="consent" type="checkbox" required className="mt-1 size-4 shrink-0 rounded border-line accent-accent" />
        <span>
          {c.consent}{" "}
          <Link href={c.consentLink.href} className="underline underline-offset-2 hover:text-ink" onClick={onConsentLink}>
            {c.consentLink.label}
          </Link>
          .
        </span>
      </label>

      {status === "error" && (
        <p className="rounded-lg bg-danger-bg px-4 py-3 text-[14px] text-danger-ink">
          {c.error} <a href={contact.phoneHref} className="font-semibold underline">{contact.phone}</a>
        </p>
      )}
      {status === "not_configured" && (
        <p className="rounded-lg bg-warn-bg px-4 py-3 text-[14px] text-warn-ink">
          Das Formular ist noch nicht angeschlossen. Erreichen Sie uns direkt:{" "}
          <a href={contact.phoneHref} className="font-semibold underline">{contact.phone}</a> ·{" "}
          <a href={`mailto:${contact.email}`} className="font-semibold underline">{contact.email}</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 w-full rounded-full bg-navy px-6 py-4 text-[17px] font-semibold text-white transition-colors hover:bg-navy-card disabled:opacity-60"
      >
        {status === "sending" ? c.sending : c.submit}
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-lg border border-line-soft bg-white px-4 py-3.5 text-[16px] text-ink placeholder:text-muted-3 outline-none transition-[border-color,box-shadow] focus:border-accent focus:shadow-[0_0_0_3px_rgba(59,130,246,0.18)]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[15px] font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}
