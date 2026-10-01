# Atex Website-Prozess: Von Figma zur Live-Seite auf Vercel

Wissensdatei für neue Website-Projekte der Atex Media GmbH. Erprobt an **AtexJobs** (www.atex-jobs.de, Repo `vndno/atexjobs`)
und **Atex Scale** (atex-scale.vercel.app, Repo `vndno/atex-scale`), Stand Oktober 2026.

So wird sie benutzt: Neuen Chat im Code-Tab starten (Ordner des neuen Projekts, Ausführung **Local**), diese Datei anhängen
oder in den Ordner legen, Start-Prompt aus Abschnitt 9 einfügen, Figma-Links eintragen. Den Rest baut Claude.
Daniel erledigt nur die Schritte in Abschnitt 4 (Konten, Schlüssel, Domain), die Claude nicht übernehmen darf.

---

## 1. Grundsatz: Es gibt eine Vorlage, kein leeres Blatt

Jede neue Atex-Seite startet als Kopie des jüngsten fertigen Projekts (aktuell `~/Documents/atexscale`, davor `atexjobs`).
Darin sind alle Bausteine fertig und im Live-Betrieb geprüft:

| Baustein | Datei(en) | Was er kann |
|---|---|---|
| Inhalte zentral | `src/content/site.ts` | Alle Texte, Zahlen, Links, Bildpfade. Komponenten enthalten keine Inhalte. Unbestätigte Werte mit `// TODO prüfen`. |
| Rechtstexte | `src/content/legal.ts`, `src/components/LegalPage.tsx`, Seiten `/impressum`, `/datenschutz`, `/agb` | Impressum Atex Media, Datenschutzerklärung je Dienst (Vercel, Adobe Fonts, Calendly, Wistia, Close, Resend, WhatsApp), AGB Teil A–D (Sept. 2026). Pro Projekt nur Markenname und genutzte Dienste anpassen. |
| Cookie-Hinweis | `src/components/ConsentBanner.tsx` | Dezent, hell, Texte aus `site.consent`. Entscheidung in `localStorage["atex-consent"]`. Nach Schließen kleiner Textknopf „Cookies bearbeiten“ unten links. Optionale Dienste laden erst nach Zustimmung. |
| Kontaktformular | `src/components/ContactModal.tsx`, `ContactForm.tsx`, `src/app/api/anfrage/route.ts` | Öffnet sich über jeden CTA (`#anfrage`). Legt Lead in **Close** an (Lead-Quelle „Inbound: Webseite - <Marke>“, Lead-Kanal „Website“, Notiz mit allen Angaben) und schickt eine **Resend**-Mail. Honeypot gegen Spam. Ohne Schlüssel antwortet die API mit 503 `not_configured`. |
| Terminbuchung | `src/components/BookingWidget.tsx`, `CalendlyEmbed.tsx`, Seite `/kontakt` | Schwebendes Widget unten rechts (erscheint nach 6 s), Kontaktseite mit Formular links und Calendly rechts. |
| Video | `src/components/WistiaVideo.tsx` | Vorschaubild mit Play-Knopf, Player lädt erst nach Klick (datenschutzfreundlich). |
| Design-System | `src/app/globals.css` (`@theme`-Tokens), `src/components/ui.tsx` (Button, Heading, Photo, Avatar), `icons.tsx` | Farben, Radien, Schatten, Animationen an einer Stelle. Utilities `container-x`, `section-y`, `eyebrow`, `h-light`, `edge-fade`. |
| Responsiv | `src/components/ScaleToFit.tsx` | Skaliert Mockups auf schmalen Bildschirmen proportional. `html, body { overflow-x: clip }`. |
| SEO | `src/app/layout.tsx`, `robots.ts`, `sitemap.ts`, `src/lib/siteUrl.ts`, `public/images/og-image.jpg`, `src/app/icon.svg/png`, `apple-icon.png` | Metadaten, Open Graph, Twitter-Card, strukturierte Daten (Unternehmen, FAQ), Canonicals, Favicon. |
| Schrift | `layout.tsx` | Myriad Pro über Adobe Fonts (Kit `https://use.typekit.net/uei1ums.css`), Fallback Source Sans 3 selbst gehostet. Kein Google Fonts. |
| Sektionen | `src/components/sections/*.tsx`, Reihenfolge in `src/app/page.tsx` | Hero mit Kachel-Collage, Logo-Marquee, Problem-Karten, Bausteine, Kanal-Modell, Arbeitsweise, Rechner, Ticker-Tabelle, Förder-Check, Zahlen, Zusage, Kundenreise, Referenz, FAQ, Abschluss-CTA mit Ticker, Footer. |

Beim neuen Projekt wird nur getauscht, was zur Marke gehört: Inhalte, Farbtoken, Logo/Favicon, Bilder, Sektionen nach Figma.
Formular, Cookie-Hinweis, Rechtsseiten, SEO-Gerüst bleiben.

---

## 2. Stack

| Baustein | Wahl |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) – **Hinweis:** andere API als in älteren Versionen, vor dem Schreiben `node_modules/next/dist/docs/` lesen (steht auch in AGENTS.md des Projekts) |
| Styling | Tailwind CSS 4 mit `@theme`-Tokens |
| Code | GitHub, Konto `vndno`, privates Repo je Projekt |
| Hosting | Vercel, Import aus GitHub, jeder Push auf `main` geht automatisch live (30–60 s) |
| CRM | Close (REST-API aus der Vercel-Funktion) |
| Mail | Resend, Absenderdomain `versand.atex-media.de` (bereits verifiziert, kann für alle Atex-Marken genutzt werden) |
| Termine | Calendly `https://calendly.com/hopfner-atex-media/erstgespraech-christianhopfner` |
| Nicht verwenden | Lokaler Dev-Server (auf dem Mac gibt es kein Node/npm), Google Fonts, Lovable |

---

## 3. Branding und Tokens

Gemeinsam für alle Marken: dunkles Navy für dunkle Sektionen, Creme/Surface für helle, Myriad Pro, Headline-Muster
**fetter Teil + dünner Teil** (`<Heading bold="…" light="…" />`, Klasse `h-light`), Radien 8/10/12/16/24 px.

```
ink #121c29 · muted #737880 · muted-2 #6b7280 · muted-3 #9ca3af
line #e0ded9 · line-soft #e5e7eb
navy #0e1721 · navy-2 #142232 · navy-card #1a2633 · on-navy-muted #b8c2cc
creme #f6f4f0 · surface #f7f8f9 · surface-2 #f9fafb · surface-3 #eff0f1 · chip #f3f4f6
success #66a182 · success-bg #d1fae5 · success-ink #065f46
```

Akzent je Marke (nur diese drei Token tauschen, dazu Hero-Statusfarbe und Calendly-Farbe in `site.ts`, Favicon, hartcodierte
Grafikfarben in `Model.tsx`/`Problem.tsx` per `grep` finden):

| Marke | accent | accent-strong | accent-soft | Logo |
|---|---|---|---|---|
| AtexJobs | #3b82f6 | #2563eb | #c7d2fe | „Atex“ fett dunkel, „Jobs“ blau |
| Atex Scale | #f26a4a | #dd4f2d | #fbd3c8 | „Atex“ fett dunkel, „Scale“ dünn orange |
| Neue Marke | aus Figma | ca. 15 % dunkler | sehr helle Tönung | nach Figma |

Favicon: `src/app/icon.svg` anpassen, dann `qlmanage -t -s 512` → PNG, `sips` auf 512 (icon.png) und 180 (apple-icon.png).

---

## 4. Was Daniel selbst macht (Claude darf das nicht)

Reihenfolge einhalten, jeder Schritt dauert wenige Minuten.

1. **GitHub-Repo anlegen**: github.com → New repository → Owner `vndno`, Name klein mit Bindestrich (z. B. `atex-consult`),
   **Private**, ohne README, .gitignore oder Lizenz. Claude den genauen Namen nennen.
2. **Token freigeben**: Settings → Developer settings → Personal access tokens → Fine-grained tokens → den vorhandenen Token
   öffnen → Repository access → neues Repo hinzufügen → speichern. Sonst endet Claudes Push mit „Permission denied“.
3. **Vercel-Projekt**: vercel.com → Add New → Project → Repo auswählen → Deploy (nichts einstellen, Next.js wird erkannt).
   Ergebnis: `https://<repo-name>.vercel.app`. Claude die Adresse nennen.
4. **Umgebungsvariablen** (Vercel → Projekt → Settings → Environment Variables), jeweils Häkchen bei **Production und Preview**:
   - `CLOSE_API_KEY` – neuer Schlüssel pro Projekt aus Close (Settings → Developer → API Keys → New), **Sensitive** anhaken
   - `RESEND_API_KEY` – neuer Schlüssel aus Resend (API Keys → Create, Sending access, Domain `versand.atex-media.de`), **Sensitive**
   - `NOTIFY_TO` – Empfängeradresse der Benachrichtigung (Standard meier@atex-media.de)
   - `NOTIFY_FROM` – optional, Standard „<Marke> Webseite <anfrage@versand.atex-media.de>“
   - `NEXT_PUBLIC_SITE_URL` – erst setzen, wenn die eigene Domain live ist (`https://www.<domain>`), vorher **nicht anlegen**
     (ein leerer Wert hat beim ersten Atex-Scale-Build den Fehler „Invalid URL“ ausgelöst; der Code fängt das inzwischen ab)
   Danach Deployments → letztes Deployment → **Redeploy**. Werte als „Sensitive“ sind später nicht mehr einsehbar, deshalb pro
   Projekt eigene Schlüssel erzeugen statt kopieren.
5. **Adobe Fonts**: fonts.adobe.com → Web Projects → Kit `uei1ums` → Domains: `<repo-name>.vercel.app` und später die Kundendomain
   eintragen. Sonst erscheint die Fallback-Schrift.
6. **Domain** (wenn vorhanden): Vercel → Projekt → Settings → Domains → Domain eintragen. Vercel zeigt die DNS-Einträge
   (A-Record `76.76.21.21` für die Hauptdomain, CNAME `cname.vercel-dns.com` für `www`). Beim Domain-Anbieter eintragen,
   10–60 Minuten warten. Dann `NEXT_PUBLIC_SITE_URL` setzen und Redeploy. Google Search Console: Domain hinzufügen,
   Sitemap `https://www.<domain>/sitemap.xml` einreichen.
7. **Schlüssel niemals in den Chat einfügen.** Ein im Chat geposteter Schlüssel gilt als verbrannt und muss widerrufen werden.
   Claude verwendet solche Schlüssel nicht.

---

## 5. Was Claude macht (Ablauf)

### Phase A – Lesen
1. **Figma auslesen** (Figma MCP): `get_metadata` für die Sektionsliste, `get_screenshot` je Frame für die Optik,
   `get_design_context` je Schlüsselsektion für exakte Farben, Schriftschnitte, Abstände, Texte. `download_assets` für Bilder.
2. Ggf. Vorbild-Seite im Browser-Pane lesen (`get_page_text`, `read_page`). Nur Aufbau und Argumentation übernehmen,
   **nie Texte, Bilder oder 1:1-Layouts fremder Seiten** (Urheberrecht, und der Auftraggeber will eigene Wirkung).
3. Kurz berichten: Sektionsliste, was aus der Vorlage bleibt, was neu gebaut wird, offene Entscheidungen. Nicht blockierend
   fragen, sondern Vorschlag machen und bauen.

### Phase B – Anlegen
4. Projekt kopieren: `rsync -a --exclude .git --exclude node_modules --exclude .next --exclude '*.tsbuildinfo'
   --exclude next-env.d.ts <vorlage>/ <neu>/`; markenbezogene Bilder (Hero, Referenzen, OG-Bild) nicht mitnehmen bzw. ersetzen.
5. `git init`, `git remote add origin https://github.com/vndno/<repo>.git`, erster Commit, `git push -u origin main`
   (mit `GIT_TERMINAL_PROMPT=0`). Repo-Name im Zweifel per `git ls-remote` auf Varianten mit/ohne Bindestrich prüfen.
6. Marke durchziehen: `grep -rn "<AlteMarke>" src` und ersetzen in `site.ts`, `legal.ts`, `layout.tsx` (siteName, OG-Alt,
   knowsAbout), `siteUrl.ts` (Standard-URL), `api/anfrage/route.ts` (Lead-Quelle, Absender, Quelle-Text), Seiten-Titel in
   `/kontakt`, `/impressum`, `/datenschutz`, `/agb`, `/ueber-uns`, Kommentar in `globals.css`, `README.md`, `public/images/README.md`.
7. `CLAUDE.md` des neuen Projekts schreiben: Marke, Repo, Vercel-Adresse, Tokens, Regeln, offene Punkte (Muster: atexscale).

### Phase C – Bauen
8. Tokens aus Figma in `globals.css`, Inhalte in `site.ts`, Sektionen anpassen oder neu anlegen, `page.tsx` ordnen.
   `site.ts` ist `as const`: Beim Umbauen prüfen, welche Schlüssel die Komponenten lesen (`grep -o "p\.[a-zA-Z]*"`), sonst bricht
   der TypeScript-Build in Vercel.
9. Bilder: aus Figma exportieren oder vom Auftraggeber aus dem Ordner, nach `public/images/…` gemäß README. Bearbeitung ohne PIL:
   `sips` (Größe, Format, Zuschnitt), `qlmanage` (SVG→PNG). Fehlende Bilder beim Build mit `existsSync` prüfen und
   Platzhalterfläche zeigen, nie kaputte `<img>`.
10. Rechtstexte: Impressum bleibt (Atex Media GmbH), Datenschutzerklärung an genutzte Dienste anpassen (Abschnitte ergänzen oder
    streichen), AGB bleiben. Hinweis an den Auftraggeber: juristische Prüfung empfohlen.

### Phase D – Prüfen (nach jedem Push)
11. `curl` gegen die Vercel-Adresse pollen, bis der neue Stand da ist (Marker-Text im HTML suchen), dann alle Routen auf 200 prüfen.
12. Browser-Pane: `javascript_tool` für DOM-Messungen (Überlauf `scrollWidth` vs. `innerWidth`, kaputte Bilder
    `naturalWidth === 0`, Farben, Texte), Desktop und 390 px mobil. Screenshots dieser Origin schlagen oft fehl, Text/DOM
    reicht.
13. Build-Fehler („Error“ in Vercel): Vercel-Dashboard im Chrome des Nutzers (claude-in-chrome) öffnen → Projekt → Deployments →
    Eintrag anklicken → Build Logs lesen → beheben → pushen. Tabs danach schließen.
14. Formular testen: `curl -X POST https://<adresse>/api/anfrage` mit Testdaten (Firma „Testbetrieb (bitte löschen)“), Lead in
    Close über MCP prüfen (Lead-Quelle, Lead-Kanal, Notiz) und wieder löschen, Mail-Eingang beim Auftraggeber abfragen.

### Phase E – Iteration
15. Der Auftraggeber schickt Screenshots mit Anmerkungen, Referenzseiten oder Figma-Änderungen. Claude setzt um, pusht, prüft
    live und berichtet kurz auf Deutsch. Jede Rückmeldung zu Wording oder Bezeichnungen gilt dauerhaft (z. B. festgelegte
    Chip-Texte nicht eigenmächtig ändern, Button-Texte nicht umformulieren).

---

## 6. Regeln für Inhalte und Gestaltung

- Eigene Formulierungen, kurze Sätze, kein Marketing-Jargon, Sie-Ansprache, keine Gedankenstriche als Satzzeichen-Ersatz.
- Zahlen nur, wenn bestätigt. Sonst Platzhalter mit `// TODO prüfen` und Liste der offenen Zahlen im Bericht.
- Jede Sektion beantwortet einen Einwand, keine Sektion doppelt. Farbabfolge bewusst wechseln (hell/dunkel), gleicher
  vertikaler Rhythmus (`section-y`).
- Grafiken und Mockups im Komponentenstil der Vorlage (Karten, Chips, Rahmen, Schatten), Akzentfarbe der Marke,
  Verläufe dürfen in der Akzentfarbe getönt sein.
- Hero etwa 72 % der Bildschirmhöhe abzüglich Navigation, Hero-Bilder quadratisch.
- Cookie-Hinweis dezent und hell, nur Text, Knopf „Cookies bearbeiten“ unten links.
- Vorab-Check-Logik der Atex-Marken: erst prüfen, dann schriftlich zusagen; Honorar zurück oder kostenlose Verlängerung
  „je nach Vereinbarung im Angebot“. FAQ entsprechend vorsichtig formulieren.

---

## 7. Feste Daten der Atex Media GmbH

```
Atex Media GmbH · Kumpfmühler Str. 15 · 93047 Regensburg · HRB 19189 Regensburg
Geschäftsführer Daniel Meier · Tel. +49 (0) 176 77 88 0548 · info@atex-media.de
Gruppe seit 2018 · Marken: AtexJobs (Recruiting), Atex Scale (Neukundengewinnung), Atex Media (Webseiten)
Hauptseite https://www.atex-media.de · Karriere https://www.atex-media.de/karriere
WhatsApp-Link https://wa.me/4917677880548?text=… (Text je Marke)
Calendly Christian Hopfner: https://calendly.com/hopfner-atex-media/erstgespraech-christianhopfner (15 Minuten)
BAFA-Berater-ID 228969
Close Custom Fields: Lead-Quelle custom.cf_A3uckuhX5CK9TaxeTrWAvHBzALiBM91OG12k8kr3ZSi (Text),
                     Lead-Kanal custom.cf_xQgVdBgrXBDwJMkCrvp0Li35U0hVeFnc7XMCyxHjwkO (Auswahl, Wert „Website“)
Resend-Absenderdomain: versand.atex-media.de (verifiziert)
Figma AtexJobs (Hero-Kacheln, Mockups): Key Yu46JDPRhYAeTIREiUrGN9 – Uploads per curl -F nur als einzelne Befehle
Team (Über uns): Daniel Meier (GF), Christian Hopfner, Thomas Huber, Calvin Okoh, Kaan Ocaktan (Strategieberatung),
  Dominik Moggert (Accountmanagement), Liliia Mkhytarian (Projektmanagement, Webentwicklung), Bator Pisch (Projektmanagement),
  Roman Opitz (Foto/Video), Mona Schmidt (Backoffice) – Fotos in public/images/team der Vorlage
```

---

## 8. Stolpersteine, die Zeit gekostet haben

- Push abgelehnt → Token hat keinen Zugriff auf das neue Repo (Abschnitt 4, Schritt 2). Repo heißt oft anders als gedacht
  (`atex-scale` statt `atexscale`), mit `git ls-remote` prüfen.
- Formular antwortet 503 → Umgebungsvariable fehlt oder gilt nur für „Development“. Production und Preview anhaken, Redeploy.
- Build „Error“ nach wenigen Sekunden → fast immer TypeScript (Schlüssel in `site.ts` fehlt) oder eine Umgebungsvariable mit
  leerem Wert. Logs in Vercel lesen.
- Browser-Cache zeigt alte Bilder → Datei umbenennen statt überschreiben.
- Figma-Uploads in Schleifen liefern HTTP 000 → jeden `curl` einzeln ausführen.
- Adobe-Fonts-Domain vergessen → falsche Schrift auf der Live-Seite.
- Zu große Mockups auf dem Handy → `ScaleToFit`, Flex-Wrap, `overflow-x: clip`.

---

## 9. Start-Prompt für ein neues Projekt (kopierfertig)

Vorher: Repo anlegen, Token freigeben, Vercel-Projekt anlegen (Abschnitt 4, Schritte 1–3). Dann im neuen Chat:

```text
Neues Atex-Website-Projekt nach der Wissensdatei ATEX-WEBSITE-PROZESS.md (liegt bei / im Ordner).
Marke: [Name, z. B. Atex Consult] – Rechtsträger Atex Media GmbH.
Angebot in zwei Sätzen: [Was wird verkauft, für wen, mit welchem Versprechen?]
Vorlage zum Kopieren: ~/Documents/atexscale (oder atexjobs).
Ziel-Repo: vndno/[repo-name] (leer, Token freigegeben). Vercel-Projekt: https://[repo-name].vercel.app (angelegt, Env folgt).
Figma: [Link mit node-id zur Desktop-Seite] · [Link Mobil, falls vorhanden] · [Link Logo/Farben]
Farbwelt: [Akzentfarbe aus Figma, Hex] – Rest wie Atex-Vorlage.
Domain: [noch keine / www.xyz.de]
Besonderheiten: [z. B. Unterseiten, Video, Rechner, Referenzen, was wegfallen soll]
Zahlen, die stimmen müssen: [Liste oder „Platzhalter mit TODO prüfen“]

Bitte: 1) Figma vollständig auslesen und mir die Sektionsliste mit kurzer Kritik nennen, 2) Vorlage kopieren, Marke
durchziehen, ins Repo pushen, 3) Sektionen nach Figma bauen, Inhalte eigen formulieren, Cookie-Hinweis, Formular (Close +
Resend), Calendly, Rechtsseiten und SEO aus der Vorlage übernehmen, 4) nach jedem Push live prüfen (Desktop und Handy),
5) mir auf Deutsch berichten, was fertig ist, was an Bildern und Zahlen fehlt und welche Schritte aus Abschnitt 4 ich noch
erledigen muss.
```

Danach läuft die Zusammenarbeit wie gewohnt: Screenshots mit Anmerkungen schicken, Claude ändert und pusht.
