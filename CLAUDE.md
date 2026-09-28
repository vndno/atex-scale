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

## Technik & Prüfen (auf dem Mac gibt es kein Node/npm)
- Kein lokaler Build. Nach dem Push: `curl` gegen https://atex-scale.vercel.app pollen (Deploy ~40–60 s), DOM mit dem
  Browser-Pane (`javascript_tool`) messen. Screenshots dieser Origin schlagen oft fehl → Text/DOM prüfen.
- Build-Fehler: Vercel-Dashboard im Chrome des Nutzers (claude-in-chrome) öffnen → Projekt atex-scale → Deployments →
  Eintrag anklicken → Build Logs lesen. Tabs danach schließen. Erster Fehler war eine leere NEXT_PUBLIC_SITE_URL (behoben).
- TypeScript: `site.ts` ist `as const`; Sektionen greifen fest auf Schlüssel zu → beim Umbauen von site.ts Komponenten
  mitprüfen (`grep` nach den Schlüsseln), sonst bricht der Vercel-Build.
- Bildbearbeitung ohne PIL: `sips` (Größe/Format/Zuschnitt), `qlmanage` (SVG→PNG). Figma-Datei (AtexJobs-Kacheln):
  Key `Yu46JDPRhYAeTIREiUrGN9`; Uploads per `curl -F` nur als einzelne Top-Level-Befehle.
- Kontaktformular → `src/app/api/anfrage/route.ts`: Close-Lead mit Lead-Quelle „Inbound: Webseite - AtexScale“,
  Lead-Kanal „Website“; Mail über Resend (Absender anfrage@versand.atex-jobs.de, Domain ist verifiziert).

## Bekannte offene Punkte
- Bilder: `journey/landingpage.jpg`, `referenzen/h24.jpg`, echtes `og-image.jpg` (aktuell Bürofoto als Übergang).
- Zahlen mit `TODO prüfen` bestätigen (280+ Betriebe, 24 h, 14 Tage, Anfragen/Monat, H24-Startjahr).
- Sektions-IDs stammen noch aus AtexJobs (`#karriere` = Kundenreise, `#karriereseite` = Landingpage-Sektion).
