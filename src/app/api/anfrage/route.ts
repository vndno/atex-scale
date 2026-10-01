import { NextResponse } from "next/server";

/**
 * Kontaktanfrage aus dem Kontaktformular.
 *
 * Ziel der Daten – gesteuert über Umgebungsvariablen in Vercel (Settings → Environment Variables):
 *   CLOSE_API_KEY        → legt in Close CRM einen Lead mit Kontakt + Notiz an
 *   CONTACT_WEBHOOK_URL  → alternativ/zusätzlich: POST der Anfrage als JSON (Zapier, Make, n8n …)
 *   RESEND_API_KEY       → zusätzlich: E-Mail-Benachrichtigung über Resend an NOTIFY_TO
 *   NOTIFY_TO            → Empfänger der Benachrichtigung (Standard: meier@atex-media.de)
 *   NOTIFY_FROM          → Absender (Standard: "Atex Scale Webseite <anfrage@versand.atex-media.de>", Domain muss bei Resend verifiziert sein)
 * Ist weder Close noch Webhook gesetzt, antwortet die Route mit 503 und das Formular zeigt Telefon/E-Mail als Ausweg.
 * Die E-Mail ist ein Zusatz: Schlägt nur sie fehl, gilt die Anfrage trotzdem als zugestellt.
 */
// Close: Custom Field „Lead-Quelle“ (Textfeld) – wird bei jedem Web-Lead gesetzt
const CLOSE_FIELD_LEAD_QUELLE = "custom.cf_A3uckuhX5CK9TaxeTrWAvHBzALiBM91OG12k8kr3ZSi";
const LEAD_QUELLE = "Inbound: Webseite - AtexScale";
// Close: Custom Field „Lead-Kanal“ (Auswahl) – passender Wert "Website"
const CLOSE_FIELD_LEAD_KANAL = "custom.cf_xQgVdBgrXBDwJMkCrvp0Li35U0hVeFnc7XMCyxHjwkO";
const LEAD_KANAL = "Website";
type Payload = { name: string; company: string; phone: string; email: string; consent: boolean; website?: string };

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: echte Nutzer füllen "website" nie aus
  if (data.website) return NextResponse.json({ ok: true });

  const name = clean(data.name, 120);
  const company = clean(data.company, 160);
  const phone = clean(data.phone, 40);
  const email = clean(data.email, 160);
  if (!name || !company || !phone || !email || !data.consent || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const closeKey = process.env.CLOSE_API_KEY;
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!closeKey && !webhook) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const source = "Webseite Atex Scale – Markt-Check";
  const receivedAt = new Date().toISOString();
  const results = await Promise.allSettled([
    closeKey ? createCloseLead(closeKey, { name, company, phone, email, source }) : Promise.resolve(),
    webhook
      ? fetch(webhook, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ name, company, phone, email, source, receivedAt }),
        }).then((r) => {
          if (!r.ok) throw new Error(`webhook ${r.status}`);
        })
      : Promise.resolve(),
  ]);

  const failed = results.filter((r) => r.status === "rejected");
  if (failed.length === results.length) {
    console.error("Anfrage konnte nicht übermittelt werden", failed);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  // Benachrichtigung per E-Mail (best effort – ein Fehler hier blockiert die Anfrage nicht)
  if (process.env.RESEND_API_KEY) {
    await sendNotification({ name, company, phone, email, source, receivedAt }).catch((e) => console.error("Benachrichtigung fehlgeschlagen", e));
  }
  return NextResponse.json({ ok: true });
}

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

async function createCloseLead(apiKey: string, d: { name: string; company: string; phone: string; email: string; source: string }) {
  const auth = "Basic " + Buffer.from(`${apiKey}:`).toString("base64");
  const headers = { authorization: auth, "content-type": "application/json" };
  const leadRes = await fetch("https://api.close.com/api/v1/lead/", {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: d.company,
      description: `Anfrage über ${d.source}`,
      [CLOSE_FIELD_LEAD_QUELLE]: LEAD_QUELLE,
      [CLOSE_FIELD_LEAD_KANAL]: LEAD_KANAL,
      contacts: [{ name: d.name, emails: [{ type: "office", email: d.email }], phones: [{ type: "office", phone: d.phone }] }],
    }),
  });
  if (!leadRes.ok) throw new Error(`close lead ${leadRes.status}: ${await leadRes.text()}`);
  const lead = (await leadRes.json()) as { id: string };
  await fetch("https://api.close.com/api/v1/activity/note/", {
    method: "POST",
    headers,
    body: JSON.stringify({ lead_id: lead.id, note: `Kontaktanfrage „Markt-Check" über ${d.source}\nName: ${d.name}\nUnternehmen: ${d.company}\nTelefon: ${d.phone}\nE-Mail: ${d.email}` }),
  });
}

async function sendNotification(d: { name: string; company: string; phone: string; email: string; source: string; receivedAt: string }) {
  const to = process.env.NOTIFY_TO || "meier@atex-media.de";
  // Bei Resend ist die Subdomain versand.atex-media.de verifiziert (seit Okt. 2026, vorher versand.atex-jobs.de) – der Absender muss darauf enden
  const from = process.env.NOTIFY_FROM || "Atex Scale Webseite <anfrage@versand.atex-media.de>";
  const esc = (v: string) => v.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string);
  const when = new Date(d.receivedAt).toLocaleString("de-DE", { timeZone: "Europe/Berlin" });
  const html = `<div style="font:15px/1.6 -apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#121c29">
    <p style="margin:0 0 12px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#6b7280">Neue Anfrage über die Webseite</p>
    <h2 style="margin:0 0 16px;font-size:20px">${esc(d.company)}</h2>
    <table style="border-collapse:collapse">
      <tr><td style="padding:4px 16px 4px 0;color:#6b7280">Name</td><td style="padding:4px 0">${esc(d.name)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#6b7280">Telefon</td><td style="padding:4px 0"><a href="tel:${esc(d.phone.replace(/\s+/g, ""))}">${esc(d.phone)}</a></td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#6b7280">E-Mail</td><td style="padding:4px 0"><a href="mailto:${esc(d.email)}">${esc(d.email)}</a></td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#6b7280">Eingang</td><td style="padding:4px 0">${esc(when)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#6b7280">Quelle</td><td style="padding:4px 0">${esc(d.source)}</td></tr>
    </table>
    <p style="margin:20px 0 0;color:#6b7280;font-size:13px">Der Lead wurde in Close angelegt (Lead-Quelle: ${esc(LEAD_QUELLE)}).</p>
  </div>`;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: d.email, subject: `Neue Anfrage: ${d.company} (${d.name})`, html }),
  });
  if (!res.ok) throw new Error(`resend ${res.status}: ${await res.text()}`);
}
