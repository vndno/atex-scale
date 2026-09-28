@AGENTS.md
@ATEX-WEBSITE-PROZESS.md

# Atex Scale – Projektnotizen für Claude

## Was das ist
Landingpage der Marke **Atex Scale** (Neukundengewinnung für den Mittelstand). Rechtsträger: Atex Media GmbH,
Kumpfmühler Str. 15, 93047 Regensburg, GF Daniel Meier. Schwesterprojekt von **AtexJobs** (`~/Documents/atexjobs`,
Repo `vndno/atexjobs`, live www.atex-jobs.de) – gleiche Komponenten, gleiche Optik, **Akzentfarbe Orange statt Blau**.

- Repo: `vndno/atex-scale` (Bindestrich!), Branch `main`, Vercel baut automatisch → https://atex-scale.vercel.app
- Vercel-Projekt `atex-scale` (Team vndno). Env: CLOSE_API_KEY, RESEND_API_KEY, NOTIFY_TO (Production + Preview).
- Domain: noch keine (später z. B. atex-scale.de → dann NEXT_PUBLIC_SITE_URL setzen).

## Branding
- Logo: „Atex“ fett dunkelgrau (#3a3a3a), „Scale“ dünn in Orange. Wortmarke = `brand.name` + `brand.nameAccent` in site.ts.
- Tokens in `src/app/globals.css`: accent **#f26a4a**, accent-strong #dd4f2d, accent-soft #fbd3c8. Rest identisch mit AtexJobs
  (Navy #0e1721, Creme, Surface …). Hintergrund-Verläufe dürfen orange getönt sein. Grün (#66a182) bleibt für „läuft/geprüft“.
- Schrift Myriad Pro (Adobe Fonts Kit uei1ums), Fallback Source Sans 3. Headline-Muster: fetter Teil + dünner Teil (`h-light`).
- Favicon: orange Kugel auf warmem Verlauf (`src/app/icon.svg` → icon.png/apple-icon.png via qlmanage + sips).

## Arbeitsregeln (vom Auftraggeber Daniel Meier, nicht technisch, Deutsch)
- **Keine Texte, Bilder oder 1:1-Designs von fremden Seiten übernehmen.** Referenzseiten (z. B. trimando.at) liefern nur
  Aufbau, Reihenfolge und Argumentation; Wording, Grafiken und Zahlen sind immer eigene. Grafiken dürfen „ähnlich nachgebaut“
  werden, aber in unserer Optik (Komponentenstil von AtexJobs, Orange).
- Alle Inhalte in `src/content/site.ts`, Rechtstexte in `src/content/legal.ts`. Komponenten enthalten keine Inhalte.
  Unbestätigte Zahlen mit `// TODO prüfen` markieren, nie als Fakt erfinden.
- Bezeichnungen, die der Auftraggeber festgelegt hat, nicht eigenmächtig ändern (z. B. „Zusage möglich“, „Markt-Score“).
- Jede Änderung: commit + push auf `main`, dann live prüfen und auf Deutsch berichten. Commit-Trailer:
  `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`.
- API-Schlüssel werden nie im Chat verwendet; nur der Auftraggeber trägt sie in Vercel ein.

## Technik & Prüfen
- Node 24 liegt unter /usr/local/bin. Projektordner in ~/Documents nicht mit node_modules füllen: für Tests eine Kopie im
  Scratchpad anlegen (`rsync` ohne .git/node_modules/.next, dort `npm ci`, dann `npx next build`). ESLint meldet 3 Altfehler in
  ConsentBanner/ContactModal/BookingWidget (set-state-in-effect) – bewusst unverändert, der Build prüft ESLint nicht.
- Vorschau: `next start` des Produktions-Builds (der Dev-Server lieferte einmal veraltetes Tailwind-CSS). Screenshots per
  Headless-Chrome (`--headless=new --screenshot --window-size=1440,12500`); unter ~500 px Breite schneidet Headless-Chrome ab →
  Handy nur per Browser-Pane-Emulation (375 px) und DOM-Messung prüfen.
- Nach dem Push: `curl` gegen https://atex-scale.vercel.app pollen (Deploy ~30–40 s), DOM mit dem Browser-Pane
  (`javascript_tool`) messen. Screenshots dieser Origin schlagen oft fehl → Text/DOM prüfen.
- Build-Fehler: Vercel-Dashboard im Chrome des Nutzers (claude-in-chrome) öffnen → Projekt atex-scale → Deployments →
  Eintrag anklicken → Build Logs lesen. Tabs danach schließen. Erster Fehler war eine leere NEXT_PUBLIC_SITE_URL (behoben).
- TypeScript: `site.ts` ist `as const`; Sektionen greifen fest auf Schlüssel zu → beim Umbauen von site.ts Komponenten
  mitprüfen (`grep` nach den Schlüsseln), sonst bricht der Vercel-Build.
- Bildbearbeitung ohne PIL: `sips` (Größe/Format/Zuschnitt), `qlmanage` (SVG→PNG). Figma-Datei (AtexJobs-Kacheln):
  Key `Yu46JDPRhYAeTIREiUrGN9`; Uploads per `curl -F` nur als einzelne Top-Level-Befehle.
- Kontaktformular → `src/app/api/anfrage/route.ts`: Close-Lead mit Lead-Quelle „Inbound: Webseite - AtexScale“,
  Lead-Kanal „Website“; Mail über Resend (Absender anfrage@versand.atex-jobs.de, Domain ist verifiziert).

## Aufbau der Startseite (seit 28.09.2026 nach trimando.at)
Hero mit Netzwerk-Grafik → Logo-Band (dunkel) → `#engpass` 01 → `#leistungen` 02 System → `#ablauf` 03 → `#warum` 04 →
`#methode` 05 → `#branchen` 06 → `#referenzen` 07 Case Study H24 → `#kampagnen` 08 Handy-Mockups → `#zusage` 09 →
`#zahlen` → `#projekte` 10 Referenzen → `#kontakt` Schluss mit eingebettetem ContactForm. Keine FAQ, kein Rechner mehr.

## Bekannte offene Punkte
- Bilder: `referenzen/h24.jpg` (16:10), echtes `og-image.jpg`, Wistia-ID für das Erklärvideo (`site.platform.video.id`).
- Zahlen mit `TODO prüfen` bestätigen (280+ Betriebe, 24 h, 10 im Team, Dashboard- und Markt-Check-Beispielwerte,
  Phasen-Zeiträume der Methode, H24-Startjahr).
- Kundenzitate fehlen: Referenzkarten zeigen Projektbeschreibungen; freigegebene Zitate in `site.references.items[].quote`.
