# Atex Scale – Landingpage

Next.js 16 · Tailwind CSS 4 · TypeScript. Schwesterprojekt von AtexJobs (gleiche Komponenten, gleiche Optik, Akzentfarbe Orange), Inhalte für Neukundengewinnung.

## Starten
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
```

## Wo wird was gepflegt?
| Was | Datei |
|---|---|
| Alle Texte, Zahlen, Links, Bildpfade | `src/content/site.ts` |
| Farben, Radien, Schatten, Typo-Tokens | `src/app/globals.css` (`@theme`) |
| Sektionen | `src/components/sections/*.tsx` |
| Reihenfolge der Sektionen | `src/app/page.tsx` |
| Bilder | `public/images/` (siehe README dort) |

Zahlen mit `// TODO prüfen` in `site.ts` stammen aus dem Figma-Entwurf und sind noch nicht bestätigt.

## Schrift
Hausschrift Myriad Pro: Adobe-Fonts-Kit-Link in `src/app/layout.tsx` einfügen. Bis dahin läuft der selbst gehostete Fallback Source Sans 3.

## Deploy
Repo zu GitHub pushen → bei Vercel importieren → fertig. Keine Umgebungsvariablen nötig.

## Kontaktformular & Termin-Widget
Alle CTA-Buttons (`href="#anfrage"`) öffnen das Modal `src/components/ContactModal.tsx`.
Das Formular sendet an `src/app/api/anfrage/route.ts`. Ziel per Umgebungsvariable in Vercel
(Settings → Environment Variables, danach Redeploy):

| Variable | Wirkung |
|---|---|
| `CLOSE_API_KEY` | legt in Close CRM einen Lead (Unternehmen) mit Kontakt und Notiz an |
| `CONTACT_WEBHOOK_URL` | POST der Anfrage als JSON an Zapier/Make/n8n o. ä. |

Ohne beides zeigt das Formular Telefon und E-Mail als Ausweg. Die Kontaktseite `/kontakt`
(`src/app/kontakt/page.tsx`) zeigt Formular + eingebetteten Calendly-Kalender
(`site.contact.calendly`). Das schwebende Termin-Widget (`src/components/BookingWidget.tsx`)
führt mit `?date=` dorthin; Ansprechpartner und Texte stehen in `site.widget`.
