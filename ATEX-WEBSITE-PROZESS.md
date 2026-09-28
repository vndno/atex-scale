# Atex Website-Prozess: Von Vorbild/Figma zur Live-Seite (Next.js + Vercel)

Wissensdatei für neue Website-Projekte bei Atex Media. Erprobt am Projekt **AtexJobs** (atexjobs.vercel.app, Repo `vndno/atexjobs`, September 2026). In einem neuen Chat einfach anhängen oder einfügen – dann kennt Claude den kompletten Ablauf, die Werkzeuge und die Stolpersteine.

---

## 1. Der Stack (was gebaut wird)

| Baustein | Wahl | Warum |
|---|---|---|
| Framework | **Next.js** (App Router, TypeScript) | Gleicher Stack wie Vorbild-Seiten (z. B. heidemannelbe.de), Standard bei Vercel |
| Styling | **Tailwind CSS 4** mit `@theme`-Tokens | Alle Farben, Radien, Schatten an einer Stelle |
| Schrift | **Myriad Pro** via Adobe Fonts Kit `https://use.typekit.net/uei1ums.css` (font-family `myriad-pro`, 300/400/600/700), Fallback **Source Sans 3** selbst gehostet (`@fontsource-variable/source-sans-3`) | Kein Google-Fonts-Request (DSGVO), Fallback falls Adobe blockiert |
| Inhalte | **eine Datei** `src/content/site.ts` | Texte, Zahlen, Links, Bildpfade zentral; Komponenten enthalten keine Inhalte |
| Bilder | `public/images/` mit README der erwarteten Dateinamen | Layout stimmt schon vor dem Bildmaterial (Platzhalter-Komponente `Photo`) |
| Code-Hosting | **GitHub** (privates Repo) | Versionierung, Anbindung an Vercel |
| Hosting | **Vercel** (Import aus GitHub, keine Einstellungen nötig) | Jeder Push auf `main` geht automatisch live |
| Datenbank | **Supabase** nur bei Bedarf (Live-Daten, Formulare) | Für eine statische Landingpage nicht nötig |

Nicht verwenden: lokaler Dev-Server auf dem Mac (kein Node.js/Homebrew installiert), Lovable als Hauptwerkzeug (Feinarbeit zäh, Credits), Vercel-CLI-Plugin (Terminal-Workflow, nicht nötig).

---

## 2. Projektstruktur (Vorlage AtexJobs)

```
projekt/
├─ src/app/layout.tsx          # Metadata, Adobe-Fonts-Link, Fallback-Font-Import
├─ src/app/globals.css         # @theme-Tokens (Farben, Radien, Schatten, Animationen), Utilities
├─ src/app/page.tsx            # Reihenfolge der Sektionen
├─ src/content/site.ts         # ALLE Inhalte; offene Werte mit "// TODO prüfen"
├─ src/components/ui.tsx       # Button, Heading (fett+leicht), Photo (Platzhalter), Avatar
├─ src/components/icons.tsx    # Inline-SVG-Icons (Lucide-Stil)
├─ src/components/sections/    # Eine Datei pro Sektion
└─ public/images/README.md     # Welche Bilddatei wohin (Name, Format, Größe)
```

Wiederkehrende Utilities in `globals.css`: `container-x` (max 1440 px, seitliche Abstände), `section-y` (einheitlicher vertikaler Rhythmus), `eyebrow` (kleine Überzeile in Akzentfarbe), `h-display`/`h-section` (Headline-Größen mit clamp), `h-light` (leichter Headline-Teil).

Headline-Muster Atex: **fetter Teil + leichter Teil** in einer Zeile (`Heading bold="..." light="..."`).

---

## 3. Design-Tokens AtexJobs (Blau/Navy-Variante)

```
ink #121c29 · muted #737880 · muted-2 #6b7280 · muted-3 #9ca3af
line #e0ded9 · line-soft #e5e7eb
accent #3b82f6 · accent-strong #2563eb · accent-soft #c7d2fe
navy #0e1721 · navy-2 #142232 · navy-card #1a2633 · on-navy-muted #b8c2cc
creme #f6f4f0 · surface #f7f8f9 · surface-2 #f9fafb · surface-3 #eff0f1 · chip #f3f4f6
success #66a182 · Radien 8/10/12/16/24 px
```

Atex-Haupt-CI (für Atex Websites / Consult / Scale, falls nicht Blau): CTAs immer **#d0ead0** hellgrün mit dunklem Text, Akzente dunkelgrün, Flächen weiß/hell oder sehr dunkel grün (#003300), niemals Mittelgrün als Fläche; Myriad Pro nur SemiBold/Bold.

---

## 4. Ablauf Schritt für Schritt

### Phase A – Analyse (Claude)
1. **Vorbild-Seite analysieren** (WebFetch): Sektionsreihenfolge, Argumentationskette, Tech-Stack (Next.js/Vercel erkennt man an `_next/image` und `dpl=`). Nur Struktur übernehmen, **keine Texte/Bilder kopieren** (Urheberrecht).
2. **Figma auslesen** (Figma MCP): `get_metadata` für Sektionsliste, `get_screenshot` für Optik, `get_design_context` je Schlüsselsektion für exakte Farben, Schriftschnitte, Abstände, Texte.
3. **Ehrliche Kritik am Figma**: Dubletten, ungleiche Kartenraster, Platzhalter-Sektionen, uneinheitliche Abstände, CI-Konflikte (z. B. Blau vs. Grün) benennen.
4. **Entscheidungen abfragen** (AskUserQuestion): Farbwelt, Zahlen echt/Platzhalter, wie kritische Sektionen aussehen sollen (z. B. Live-Besetzungen statt Kacheln).

### Phase B – Bauen (Claude, in der Cloud-Sandbox)
5. `npx create-next-app@latest <name> --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm`
6. `globals.css` mit Tokens, `site.ts` mit allen Inhalten (offene Werte `// TODO prüfen`), `ui.tsx`, `icons.tsx`, Sektionen, `page.tsx`.
7. Adobe Fonts: `<link rel="stylesheet" href="https://use.typekit.net/uei1ums.css">` in `layout.tsx` `<head>`, Fallback `import "@fontsource-variable/source-sans-3"`. **Kein `next/font/google`** – Google Fonts ist in der Sandbox blockiert und ohnehin DSGVO-kritisch.
8. `npx next build` muss fehlerfrei durchlaufen.
9. **Screenshots** Desktop 1440 px + Mobile 390 px mit Playwright (Chromium unter `/opt/pw-browsers/chromium`); lange Screenshots vor dem Senden in Hälften teilen (Upload-Limit).
10. `.gitignore` anlegen (node_modules, .next, *.tsbuildinfo, .env*, .DS_Store), Projekt als ZIP ohne node_modules/.next liefern.

### Phase C – Übergabe & Hosting (Daniel + Claude)
11. Projekt auf den Mac: Ordner freigeben (`~/Documents`), ZIP per `device_commit_files` ablegen, per `device_bash` entpacken. Claude kann dort **nicht löschen** – ZIP bleibt liegen, Daniel löscht.
12. **GitHub**: Account `vndno`. Neues privates Repo ohne README/.gitignore/Lizenz anlegen.
13. Code ins Repo: Weg A = Drag-and-drop aller Dateien aus dem Projektordner auf „uploading an existing file" (schnell, funktioniert). Weg B = Claude pusht selbst – geht **nur**, wenn das Repo beim Start der Session als Quelle verbunden ist (Claude GitHub App auf claude.ai/code autorisieren, neue Aufgabe mit Repo starten). **Niemals Tokens im Chat posten** – wird blockiert und muss danach gelöscht werden.
14. **Vercel**: vercel.com → Continue with GitHub → Add New Project → Repo importieren → Deploy. Ergebnis `<name>.vercel.app`.
15. **Adobe Fonts Domains**: `<name>.vercel.app`, `*.vercel.app` und spätere Kundendomain im Kit eintragen – sonst lädt Myriad Pro nicht (Fallback erscheint).

### Phase D – Iteration
16. Daniel gibt Feedback als Liste („Hero-Headline kleiner", „Zahl X falsch → Y"), Claude ändert im Code und pusht, Vercel baut in ~1 Minute.
17. Bilder: aus Figma exportieren, nach `public/images/` gemäß README ablegen (oder in den Chat ziehen); Claude bindet ein.
18. Inhalte: roh im Chat liefern, Claude trägt in `site.ts` ein. Alle `// TODO prüfen` nach und nach auflösen.
19. Optional später: Supabase für Live-Daten, Calendly-Link für „Gespräch vereinbaren", eigene Domain in Vercel.

---

## 5. Bewährte Sektionslogik (Recruiting/Conversion-Landingpage)

Versprechen (Hero mit einem Satz + einem CTA) → Social Proof (Logo-Marquee) → Problem → Lösung/Mechanismus (Bento) → System im Detail → Kosten des Wartens (interaktiver Rechner) → Beweis (Liste echter Ergebnisse) → Risikoabnahme (Förder-Check, Garantie) → Zahlen → Kandidaten-/Kundenreise → FAQ → Schluss-CTA mit Ticker → Footer mit Ansprechpartner-Karte.

Jede Sektion beantwortet einen Einwand. Keine Sektion zweimal. Farbabfolge bewusst wechseln (weiß/hell/dunkel), gleicher vertikaler Rhythmus überall.

---

## 6. Stolpersteine, die Zeit gekostet haben

- `npm`/`brew` fehlen auf dem Mac → lokaler Dev-Server ist nicht der Weg; GitHub + Vercel ersetzt ihn komplett.
- Google Fonts und Figma-Asset-Downloads sind in Claudes Sandbox blockiert → Fonts selbst hosten, Bilder aus Figma manuell exportieren.
- Pushen aus der Session klappt nur mit vorab verbundenem Repo; Token-Workarounds werden blockiert.
- Rechner-Formel wörtlich umsetzen und Einheiten (Wochen vs. Tage) klären – Figma-Anzeigewerte sind oft nur Deko.
- Adobe-Fonts-Domains eintragen, sonst „warum ist die Schrift falsch?".
- Mobile-Screenshots >10.000 px scheitern beim Upload → teilen.

---

## 7. Start-Prompt für ein neues Projekt (kopierfertig)

> Neues Atex-Website-Projekt nach dem Prozess in dieser Wissensdatei. Marke: **[Atex Websites / Jobs / Scale / Consult / Kunde X]**. Vorbild-Seite: **[URL]**. Figma: **[Link mit node-id]**. Farbwelt: **[Blau/Navy wie AtexJobs | Atex-Grün-CI | Kunden-CI]**. Ziel-Repo: **vndno/[name]** (ist als Quelle dieser Session verbunden / wird per Upload befüllt). Bitte zuerst Vorbild + Figma analysieren und mir Kritik und offene Entscheidungen nennen, dann bauen, Screenshots zeigen, ZIP liefern und in ~/Documents/[name] ablegen.
