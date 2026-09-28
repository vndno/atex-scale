/**
 * ZENTRALE INHALTE – Atex Scale Landingpage
 * ------------------------------------------------------------------
 * Alles, was Text, Zahl, Link oder Bildpfad ist, wird hier gepflegt.
 * Komponenten enthalten keine Inhalte.
 *
 * Atex Scale = Neukundengewinnung für den Mittelstand, eine Marke der
 * Atex Media GmbH. Aufbau und Optik wie AtexJobs (Schwestermarke).
 *
 * Zahlen mit "// TODO prüfen" sind Platzhalter und noch nicht bestätigt.
 */

export const site = {
  meta: {
    title: "Atex Scale – Neue Kunden gewinnen mit schriftlicher Zusage",
    description:
      "Atex Scale bringt mittelständischen Betrieben qualifizierte Anfragen und gebuchte Termine: Kampagnen auf Meta, Google und LinkedIn, Landingpage, Qualifizierung jeder Anfrage binnen 24 Stunden. Vorab geprüft, schriftlich zugesagt.",
  },

  brand: {
    name: "Atex",
    nameAccent: "Scale",
    claim: "eine Marke der Atex Media Gruppe",
  },

  contact: {
    company: "Atex Media GmbH",
    street: "Kumpfmühler Str. 15",
    city: "93047 Regensburg",
    phone: "+49 176 77 88 0548",
    phoneHref: "tel:+4917677880548",
    // Direktanfrage per WhatsApp (Schluss-Sektion)
    whatsapp: {
      label: "Per WhatsApp anfragen",
      href: "https://wa.me/4917677880548?text=Hallo%20Atex%20Scale%2C%20wir%20wollen%20planbar%20neue%20Kunden%20gewinnen%20und%20h%C3%A4tten%20gern%20eine%20Einsch%C3%A4tzung.",
    },
    email: "info@atex-media.de",
    contactPerson: {
      name: "Daniel Meier",
      role: "Geschäftsführer",
      label: "Ihr Kontakt bei uns",
      image: "/images/team/daniel-meier-avatar.jpg",
    },
    // "#anfrage" öffnet das Kontaktformular (Modal) – alle CTA-Buttons zeigen darauf
    bookingHref: "#anfrage",
    calendly: {
      // Calendly von Christian Hopfner – Erstgespräch
      url: "https://calendly.com/hopfner-atex-media/erstgespraech-christianhopfner",
      durationLabel: "15 Minuten", // TODO prüfen (Dauer des Eventtyps)
      primaryColor: "f26a4a", // Akzentfarbe im eingebetteten Kalender (ohne #)
    },
  },

  // Kontaktformular (öffnet sich als Modal über jeden CTA-Button)
  cta: {
    title: "Wie viele Anfragen sind in Ihrer Region möglich?",
    text: "Kostenlos, unverbindlich, Antwort innerhalb eines Werktags.",
    fields: {
      name: { label: "Ihr Name", placeholder: "Vor- und Nachname" },
      company: { label: "Betrieb", placeholder: "Wie heißt Ihr Unternehmen?" },
      phone: { label: "Telefon", placeholder: "151 23456789", prefix: "+49" },
      email: { label: "E-Mail", placeholder: "name@firma.de" },
    },
    consent: "Meine Angaben dürfen zur Kontaktaufnahme verarbeitet werden. Was damit passiert, steht in der",
    consentLink: { label: "Datenschutzerklärung", href: "/datenschutz" },
    submit: "Markt-Check anfragen",
    sending: "Wird abgeschickt …",
    success: {
      title: "Angekommen.",
      text: "Ihre Anfrage ist bei uns. Innerhalb eines Werktags melden wir uns mit einer ersten Einschätzung zu Ihrem Markt.",
      calendly: "Lieber gleich sprechen? Termin wählen",
    },
    error: "Da ist etwas schiefgelaufen. Probieren Sie es erneut oder greifen Sie zum Hörer:",
  },

  // Kontaktseite /kontakt: Formular links, Calendly-Kalender rechts
  contactPage: {
    eyebrow: "Kontakt",
    headlineBold: "Erzählen Sie uns von",
    headlineLight: "Ihrem Angebot",
    text: "Formular ausfüllen oder gleich einen Termin wählen. Sie bekommen eine ehrliche Einschätzung: Wie viel Nachfrage gibt es in Ihrer Region, und was braucht es, um daraus Aufträge zu machen?",
    formTitle: "Schreiben Sie uns",
    calendarTitle: "Oder Termin aussuchen",
    calendarText: "15 Minuten mit Christian Hopfner, kostenlos und ohne Verpflichtung.",
    calendarFallback: "Kalender lädt nicht? Hier geht es direkt zu Calendly:",
  },

  // Schwebendes Termin-Widget unten rechts
  widget: {
    person: {
      name: "Christian Hopfner",
      role: "Strategieberatung",
      image: "/images/team/christian-hopfner-avatar.jpg",
    },
    title: "Wie viel Nachfrage steckt in Ihrer Region?",
    text: "15 Minuten am Telefon, eine ehrliche Antwort. Ohne Verkaufsgespräch.",
    chip: "Kostenlos, ohne Verpflichtung",
    button: "Termin vereinbaren",
    buttonHref: "/kontakt", // Kontaktseite mit eingebettetem Kalender; gewählter Tag wird als ?date= übergeben
    alt: "Lieber schreiben? Anfrage senden",
    delayMs: 6000, // Verzögerung, bis der Button erscheint
    openLabel: "Termin vereinbaren",
  },

  nav: {
    links: [
      { label: "Leistungen", href: "/#system" },
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Referenzen", href: "/#referenzen" },
      { label: "Karriere", href: "https://www.atex-media.de/karriere" }, // Stellen bei Atex Media (öffnet in neuem Tab)
      { label: "Kontakt", href: "/kontakt" },
    ],
    // Zweiter Button (Rahmen): Schwestermarke AtexJobs für Mitarbeitergewinnung
    secondary: { label: "Mitarbeiter gewinnen", href: "https://www.atex-jobs.de" },
    cta: "Gespräch vereinbaren",
  },

  hero: {
    eyebrow: "Neukundengewinnung für den Mittelstand",
    headlineBold: "Neue Kunden gewinnen",
    headlineLight: "mit schriftlicher Zusage",
    text: "Kampagnen, Landingpage und die Prüfung jeder Anfrage kommen bei uns aus einer Hand. Bei Ihnen landen Termine mit Menschen, die wirklich kaufen wollen. Wie viele es werden, rechnen wir vorher für Ihre Region aus.",
    cta: "Gespräch vereinbaren",
    ctaSecondary: { label: "Referenzen ansehen", href: "#referenzen" },
    // Porträtreihe unter den Buttons (Dateien in /public/images/kunden)
    proof: {
      avatars: ["/images/kunden/01.jpg", "/images/kunden/02.jpg", "/images/kunden/03.jpg", "/images/kunden/04.jpg"],
      value: "280+ Betriebe und Kanzleien", // TODO prüfen
      label: "arbeiten mit der Atex Media Gruppe",
    },
    // Netzwerk-Grafik: links die Quellen, in der Mitte der Anfragen-Eingang, rechts das Ergebnis.
    // x/y = Mittelpunkt der Karte auf einer Zeichenfläche von 1200 × 460. kind: source (orange) · result (grün) · score (Zusage)
    graph: {
      center: { title: "Atex Scale", sub: "Anfragen-Eingang", status: "läuft" },
      nodes: [
        { title: "Meta-Kampagne", sub: "Facebook & Instagram", kind: "source" as const, x: 190, y: 96, image: "" },
        { title: "Google-Suche", sub: "Suche & Maps", kind: "source" as const, x: 130, y: 290, image: "" },
        { title: "Landingpage", sub: "Anfrage in 2 Minuten", kind: "source" as const, x: 360, y: 398, image: "" },
        { title: "Neue Anfrage", sub: "Badsanierung · Regensburg", kind: "source" as const, x: 440, y: 44, image: "/images/profil/13.jpg" },
        { title: "Zusage möglich", sub: "Markt-Score 8.4", kind: "score" as const, x: 800, y: 58, image: "" },
        { title: "Termin gebucht", sub: "Dienstag, 14:00 Uhr", kind: "result" as const, x: 1050, y: 178, image: "/images/profil/04.jpg" },
        { title: "Geprüft", sub: "Bedarf, Region, Budget", kind: "result" as const, x: 860, y: 392, image: "" },
      ],
    },
    features: [
      { icon: "filter" as const, title: "Geprüfte Anfragen.", text: "Jede Anfrage prüfen wir binnen 24 Stunden auf Bedarf, Region und Budget." }, // TODO prüfen (24 h)
      { icon: "calendar" as const, title: "Termine im Kalender.", text: "Wer passt, bekommt direkt einen Termin bei Ihnen. Kein Hinterhertelefonieren." },
      { icon: "shield" as const, title: "Zusage auf Papier.", text: "Vor dem Start sagen wir Ihnen eine Anzahl Anfragen schriftlich zu." },
    ],
    overlayScoreLabel: "Markt-Score",
    // Zwei Zustände je Betrieb: oranger Rahmen + "Zusage möglich" oder grüner Rahmen + "Kampagne läuft"
    status: {
      garantie: { label: "Zusage möglich", color: "#f26a4a" },
      pool: { label: "Kampagne läuft", color: "#66a182" },
    },
    // Collage aus 4 Kacheln: Kacheln wechseln nacheinander ihr Motiv, der Rahmen mit Markt-Score "landet" um den Betrieb.
    slideIntervalMs: 3400,
    // frame/person/personClip wie bei AtexJobs (Figma "Hero-Kachel"). Motive = Betriebe, die mit uns Kunden gewinnen.
    slides: [
      { image: "/images/hero/23-elektriker.jpg", person: "/images/hero/23-elektriker-person.png", status: "garantie" as const, alt: "Elektromeister vor dem Schaltschrank", role: "Elektrobetrieb", score: "8.4", frame: { left: 25.6, top: 8.7, width: 53.6, height: 82.1 }, personClip: { top: 0, height: 36.7 } },
      { image: "/images/hero/02-buero-hemd.jpg", status: "pool" as const, person: "/images/hero/02-buero-hemd-person.png", alt: "Kanzleiinhaber am Schreibtisch", role: "Steuerkanzlei", score: "7.6", frame: { left: 13.5, top: 5.6, width: 65.5, height: 83.7 } },
      { image: "/images/hero/22-shk.jpg", person: "/images/hero/22-shk-person.png", status: "garantie" as const, alt: "Anlagenmechanikerin im Bad", role: "SHK-Betrieb", score: "8.1", frame: { left: 14.1, top: 12.3, width: 50, height: 77 }, personClip: { top: 0, height: 46.8 } },
      { image: "/images/hero/03-buero-monitor.jpg", status: "pool" as const, person: "/images/hero/03-buero-monitor-person.png", alt: "Ingenieur am Arbeitsplatz mit Monitor", role: "Ingenieurbüro", score: "7.2", frame: { left: 13.5, top: 5.6, width: 58.5, height: 85.3 } },
      { image: "/images/hero/19-dachdecker.jpg", person: "/images/hero/19-dachdecker-person.png", status: "garantie" as const, alt: "Dachdeckermeister auf dem Dach", role: "Dachdeckerei", score: "8.6", frame: { left: 18.5, top: 8.7, width: 59.5, height: 79.6 }, personClip: { top: 0, height: 47.8 } },
      { image: "/images/hero/13-zfa.jpg", person: "/images/hero/13-zfa-person.png", status: "pool" as const, alt: "Zahnmedizinische Fachangestellte in der Praxis", role: "Zahnarztpraxis", score: "7.4", frame: { left: 20, top: 10.7, width: 52, height: 82.1 } },
      { image: "/images/hero/21-kfz.jpg", person: "/images/hero/21-kfz-person.png", status: "garantie" as const, alt: "Kfz-Meister in der Werkstatt", role: "Kfz-Werkstatt", score: "8.2", frame: { left: 24.2, top: 12.3, width: 54.4, height: 78.6 }, personClip: { top: 0, height: 42.9 } },
      { image: "/images/hero/05-buero-blazer.jpg", status: "pool" as const, person: "/images/hero/05-buero-blazer-person.png", alt: "Rechtsanwältin im Büro", role: "Anwaltskanzlei", score: "7.0", frame: { left: 19, top: 7.3, width: 59.9, height: 80.6 } },
      { image: "/images/hero/04-baustelle-shirt.jpg", status: "garantie" as const, person: "/images/hero/04-baustelle-shirt-person.png", alt: "Bauunternehmer auf der Baustelle", role: "Bauunternehmen", score: "8.0", frame: { left: 24, top: 5.6, width: 62.7, height: 83.9 } },
      { image: "/images/hero/14-pflege.jpg", person: "/images/hero/14-pflege-person.png", status: "pool" as const, alt: "Pflegedienstleitung mit Bewohnerin", role: "Pflegedienst", score: "7.3", frame: { left: 13.5, top: 10.3, width: 53.2, height: 77.6 }, personClip: { top: 0, height: 34.1 } },
      { image: "/images/hero/18-schreinerin.jpg", person: "/images/hero/18-schreinerin-person.png", status: "garantie" as const, alt: "Schreinermeisterin an der Werkbank", role: "Schreinerei", score: "7.9", frame: { left: 30.8, top: 10.9, width: 52.6, height: 78.4 } },
      { image: "/images/hero/10-einzelhandel.jpg", person: "/images/hero/10-einzelhandel-person.png", status: "pool" as const, alt: "Inhaber mit Tablet im Fachgeschäft", role: "Fachgeschäft", score: "7.1", frame: { left: 29.2, top: 8.7, width: 50.8, height: 82.1 }, personClip: { top: 0, height: 37.9 } },
      { image: "/images/hero/20-schweisserin.jpg", person: "/images/hero/20-schweisserin-person.png", status: "garantie" as const, alt: "Schweißerin mit Schutzhelm", role: "Metallbau", score: "8.3", frame: { left: 18.1, top: 8.7, width: 61.9, height: 80.8 }, personClip: { top: 0, height: 53.8 } },
      { image: "/images/hero/08-koch.jpg", person: "/images/hero/08-koch-person.png", status: "pool" as const, alt: "Koch mit Teller in der Küche", role: "Gastronomie", score: "6.9", frame: { left: 22, top: 8.7, width: 56, height: 84.1 }, personClip: { top: 0, height: 48.6 } },
      { image: "/images/hero/07-werkstatt-schuerze.jpg", status: "garantie" as const, person: "/images/hero/07-werkstatt-schuerze-person.png", alt: "Handwerker in der Werkstatt", role: "Handwerksbetrieb", score: "7.8", frame: { left: 20.2, top: 8.7, width: 60.9, height: 79.6 } },
      { image: "/images/hero/17-lager.jpg", person: "/images/hero/17-lager-person.png", status: "pool" as const, alt: "Lagerist mit Hubwagen", role: "Logistik", score: "7.0", frame: { left: 20, top: 13.1, width: 59.9, height: 79.8 }, personClip: { top: 0, height: 59.1 } },
    ],
  },

  logos: {
    // Dunkles Band unter dem Hero: Überschrift oben, Logos laufen durch, Hinweis darunter
    text: "Betriebe und Kanzleien, die mit der Atex Media Gruppe arbeiten",
    more: "und mehr als 280 weitere im gesamten DACH-Raum", // TODO prüfen
    // Logos als SVG/PNG in /public/images/logos ablegen (werden auf dem dunklen Band weiß dargestellt)
    items: [
      { name: "Energie Optimal", src: "/images/logos/energie-optimal.svg" },
      { name: "Infinno", src: "/images/logos/infinno.svg" },
      { name: "Bastian Kaspar", src: "/images/logos/bastian-kaspar.svg" },
      { name: "Dentalkeramik", src: "/images/logos/dentalkeramik.svg" },
      { name: "Innengrün", src: "/images/logos/innengruen.svg" },
      { name: "Murr & Siedentop", src: "/images/logos/murr-siedentop.svg" },
    ],
  },

  // 01 · Drei Probleme, jede Karte mit kleiner Grafik oben; darunter dunkles Fazit-Band mit Button
  problem: {
    eyebrow: "01 · Der Engpass",
    headlineBold: "Drei Gründe, warum",
    headlineLight: "der Auftragseingang schwankt",
    referrals: {
      title: "Neue Kunden kommen nur über Empfehlungen",
      text: "Im Tagesgeschäft bleibt keine Zeit für Akquise. Aufträge kommen, wenn jemand Sie weiterempfiehlt. Planen lässt sich damit nichts, weder Personal noch Material.",
      // Säulen: Anfragen pro Monat (Grafik zur Veranschaulichung, keine Messwerte)
      chartLabel: "Anfragen pro Monat",
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun"],
      values: [6, 3, 7, 1, 5, 2],
      lowIndex: 3,
      lowNote: "April: 1 Anfrage",
    },
    fit: {
      title: "Die Anfragen, die kommen, passen nicht",
      text: "Viele wollen nur einen Preis zum Vergleich, wohnen außerhalb Ihres Gebiets oder haben noch gar kein Budget. Jedes dieser Gespräche kostet Sie trotzdem eine halbe Stunde.",
      messages: [
        { text: "Was kostet das ungefähr? Nur zum Vergleichen.", tag: "Kein Bedarf", image: "/images/profil/07.jpg" },
        { text: "Wir wohnen bei Hamburg, kommen Sie auch hierher?", tag: "Falsche Region", image: "/images/profil/26.jpg" },
      ],
    },
    tools: {
      title: "Viele Dienstleister, keiner zuständig",
      text: "Google-Agentur, Leadportal, Webseiten-Baukasten, dazu ein Freelancer für Social Media. An jeder Übergabe geht etwas verloren, und für das Ergebnis fühlt sich niemand verantwortlich.",
      // Kette aus Diensten; broken = Übergabe klappt nicht
      links: [
        { from: "Google-Agentur", to: "Webseite", broken: true },
        { from: "Leadportal", to: "Ihr Postfach", broken: false },
        { from: "Social Media", to: "Rückruf", broken: true },
      ],
      alert: "Anfrage seit 4 Tagen unbeantwortet",
    },
    banner: {
      before: "Meist fehlt keine weitere Maßnahme. Es fehlt",
      highlight: "ein Ablauf",
      after: ", der aus Werbung, Webseite und Nachfassen verlässlich Termine macht.",
      cta: "Engpass besprechen",
    },
  },

  solution: {
    eyebrow: "Passend zu Ihrem Angebot",
    headlineBold: "Kein Paket von der Stange.",
    headlineLight: "Sondern das, was Ihr Markt braucht.",
    text: "Eine Badsanierung in Regensburg wird anders gesucht als eine Steuerberatung in München. Deshalb kombinieren wir erprobte Bausteine je nach Angebot, Region und Zielkunde, statt jedem Betrieb dasselbe zu verkaufen.",
    bullets: [
      "Am Anfang steht eine Analyse Ihres Angebots und Ihrer Region",
      "Jeder Baustein hat ein Ziel: Anfragen, aus denen Aufträge werden",
      "Mehr als 280 Betriebe und Kanzleien haben wir so begleitet", // TODO prüfen
    ],
    modules: [
      { title: "Marktanalyse", sub: "Nachfrage und Wettbewerb vorab", tone: "light" as const, icon: "search" as const },
      { title: "Kampagnen", sub: "Meta, Google, LinkedIn", tone: "light" as const, icon: "arrows" as const },
      { title: "Foto und Video", sub: "Echte Einblicke in den Betrieb", tone: "dark" as const, icon: "camera" as const },
      { title: "Qualifizierung", sub: "Jede Anfrage binnen 24 h geprüft", tone: "accent" as const, icon: "database" as const },
      { title: "Landingpage", sub: "Gebaut für Anfragen", tone: "light" as const, icon: "award" as const },
      { title: "Terminbuchung", sub: "Direkt in Ihren Kalender", tone: "light" as const, icon: "chart" as const },
    ],
  },

  model: {
    eyebrow: "So kommen die Anfragen",
    headlineBold: "Acht Kanäle.",
    headlineLight: "Ein geprüfter Kalender.",
    text: "Wer nur auf Empfehlungen wartet, wartet heute lange. Wir gehen den umgekehrten Weg: Landingpage, KI-Assistent und Kampagnen auf Meta, Google, LinkedIn und den regionalen Plattformen liefern laufend Anfragen in einen gemeinsamen Eingang. Dort prüfen wir jede Anfrage. Bei Ihnen kommen nur die an, die Bedarf haben und wirklich kaufen wollen.",
    // Quellen in drei Gruppen (oben → unten). own = eigener Baustein (blau hervorgehoben)
    groups: [
      {
        label: "Eigene Bausteine",
        own: true,
        channels: [
          { name: "Landingpage", sub: "Gebaut für Anfragen" },
          { name: "KI-Assistent", sub: "Fragt nach, bucht Termine" },
        ],
      },
      {
        label: "Social Media",
        own: false,
        channels: [
          { name: "Meta", sub: "Facebook & Instagram" },
          { name: "TikTok", sub: "Kurzvideo-Anzeigen" },
          { name: "LinkedIn", sub: "Entscheider im B2B" },
        ],
      },
      {
        label: "Suche & Plattformen",
        own: false,
        channels: [
          { name: "Google", sub: "Suche & Maps" },
          { name: "YouTube", sub: "Video-Anzeigen" },
          { name: "Bing", sub: "Microsoft-Suche" },
          { name: "Kleinanzeigen", sub: "Regionale Nachfrage" },
        ],
      },
    ],
    // Die Porträts im Eingang stammen aus /images/profil und wechseln laufend (PoolAvatars)
    pool: {
      eyebrow: "Anfragen-Eingang",
      value: "24 h", // TODO prüfen
      label: "bis jede Anfrage qualifiziert ist",
      footer: "Kein Bedarf, falsche Region, kein Budget: fällt vorher raus",
      avatarCount: 4,
      swapIntervalMs: 2400,
    },
    result: {
      eyebrow: "Bei Ihnen",
      title: "Nur Termine mit echtem Bedarf",
      bullets: [
        "Bedarf, Region und Budget geprüft, bevor Sie ein Gespräch führen",
        "Erster gebuchter Termin im Schnitt nach 14 Tagen", // TODO prüfen
      ],
    },
  },

  system: {
    eyebrow: "Unsere Arbeitsweise",
    headlineBold: "So werden aus Klicks",
    headlineLight: "Termine im Kalender",
    cards: {
      prequal: {
        title: "Qualifizierung jeder Anfrage",
        text: "Innerhalb von 24 Stunden prüfen wir jede Anfrage: Was wird gebraucht, wo, wann und mit welchem Budget? Was nicht passt, sehen Sie gar nicht.",
        listTitle: "Anfragen für Ihr Angebot:",
        candidates: [
          { role: "Nur Preisvergleich", ok: false, image: "/images/profil/15.jpg" },
          { role: "Badsanierung, ab Oktober", ok: true, image: "/images/profil/13.jpg" },
          { role: "Außerhalb Ihrer Region", ok: false, image: "/images/profil/19.jpg" },
          { role: "Kein Budget genannt", ok: false, image: "/images/profil/44.jpg" },
        ],
        badge: "Qualifiziert",
      },
      agent: {
        title: "KI-Assistent für den Nachfass",
        text: "Der Assistent antwortet innerhalb von Minuten, stellt die richtigen Fragen und bucht den Termin direkt in Ihren Kalender. Auch abends und am Wochenende, wenn niemand im Büro ist.",
        // Ebenen: Hintergrundfoto → blauer Rahmen (wächst bei Hover) → freigestellte Person → Schild
        background: "/images/system-agent/bg.jpg",
        person: "/images/system-agent/person.png", // gleiche Bildausschnitt wie bg, transparenter Hintergrund
        // Lage des Rahmens in Prozent der Bildfläche (um die Person herum)
        frame: { left: 51, top: 13, width: 37, height: 74 },
        overlayTitle: "Termin gebucht ✓",
        overlaySub: "Dienstag, 14:00 Uhr",
      },
      channels: {
        title: "Sichtbar, wo Ihre Kunden suchen",
        text: "Für jedes Angebot schalten wir eine eigene Kampagne auf den Kanälen, auf denen Ihre Kunden suchen und scrollen, und sorgen dafür, dass Sie dort oben stehen.",
        // Grafik: Ihr Angebot in der Mitte sendet Wellen aus; drumherum die Netzwerke, jedes mit "#1"-Badge (Top-Platzierung)
        center: { label: "Ihr Angebot", role: "Badsanierung" },
        rank: "#1",
        chip: "Auf 8 Kanälen live",
        rankNote: "Oben, wo gesucht wird",
        // Logos: /public/images/networks (Simple Icons, Markenfarben). Ohne freies Logo → Wortmarke als Text
        networks: [
          { name: "Facebook", logo: "/images/networks/facebook.svg" },
          { name: "Instagram", logo: "/images/networks/instagram.svg" },
          { name: "TikTok", logo: "/images/networks/tiktok.svg" },
          { name: "LinkedIn", logo: "", text: "in", bg: "#0a66c2" },
          { name: "Google", logo: "/images/networks/google.svg" },
          { name: "YouTube", logo: "/images/networks/youtube.svg" },
          { name: "Bing", logo: "", text: "b", bg: "#008373" },
          { name: "Xing", logo: "/images/networks/xing.svg" },
        ],
      },
    },
    wide: [
      { title: "Kaufsignale erkennen", text: "Wer gerade eine Sanierung plant, sucht anders als jemand, der nur vergleicht. Anzeigen, Landingpage und Rückfragen sortieren das, bevor ein Termin entsteht." },
      { title: "Mehrere Berührungspunkte", text: "Ihre Kunden begegnen Ihrem Angebot mehrfach: im Feed, in der Suche, auf der Landingpage. Wer dann anfragt, meint es ernst." },
    ],
  },

  // Rechner: Auftragswert × fehlende Aufträge pro Monat × 12
  calculator: {
    headline: "Was Ihnen fehlende Aufträge pro Jahr kosten",
    unit: "/ Jahr",
    formula: "So gerechnet: durchschnittlicher Auftragswert × fehlende Aufträge pro Monat × 12 Monate",
    a: { label: "Durchschnittlicher Auftragswert", min: 500, max: 50000, step: 500, default: 8000 },
    b: { label: "Aufträge, die Ihnen pro Monat fehlen", min: 1, max: 20, step: 1, default: 3, unit: "Aufträge" },
    multiplier: 12,
    cta: "Gespräch vereinbaren",
  },

  placements: {
    eyebrow: "Laufende Projekte",
    headlineBold: "Angebote, für die wir",
    headlineLight: "Anfragen liefern",
    text: "Ein Ausschnitt aus laufenden und abgeschlossenen Projekten, quer durch Handwerk, Praxis, Kanzlei und Dienstleistung.",
    footnote: "Angaben aus laufenden Projekten. Firmennamen auf Wunsch unserer Kunden nicht genannt.",
    live: "Wird laufend ergänzt",
    columns: { role: "Angebot", industry: "Branche · Ort", days: "Erster Termin nach", applicants: "Anfragen / Monat" },
    // Einheiten hinter den Zahlen (Desktop / Mobil)
    unitDays: "Tagen",
    unitCount: "Anfragen",
    unitCountShort: "Anfr.",
    visibleRows: 6,
    feedIntervalMs: 3200,
    // TODO durch echte Projekte ersetzen
    items: [
      { role: "Badsanierung", field: "SHK-Betrieb", city: "Regensburg, BY", days: 9, applicants: 27, image: "/images/profil/13.jpg" },
      { role: "Steuerberatung für Ärzte", field: "Steuerkanzlei", city: "München, BY", days: 14, applicants: 11, image: "/images/profil/04.jpg" },
      { role: "PV-Anlage mit Speicher", field: "Elektrobetrieb", city: "Nürnberg, BY", days: 7, applicants: 34, image: "/images/profil/15.jpg" },
      { role: "Dachsanierung", field: "Dachdeckerei", city: "Ingolstadt, BY", days: 11, applicants: 19, image: "/images/profil/44.jpg" },
      { role: "Implantologie", field: "Zahnarztpraxis", city: "Landshut, BY", days: 12, applicants: 16, image: "/images/profil/41.jpg" },
      { role: "Wärmepumpe", field: "Heizungsbau", city: "Passau, BY", days: 8, applicants: 31, image: "/images/profil/14.jpg" },
      { role: "Ambulante Pflege", field: "Pflegedienst", city: "Augsburg, BY", days: 13, applicants: 22, image: "/images/profil/08.jpg" },
      { role: "Firmenumzüge", field: "Spedition", city: "Straubing, BY", days: 10, applicants: 18, image: "/images/profil/22.jpg" },
      { role: "Energieberatung", field: "Ingenieurbüro", city: "Deggendorf, BY", days: 15, applicants: 14, image: "/images/profil/26.jpg" },
      { role: "Arbeitsrecht für Arbeitgeber", field: "Anwaltskanzlei", city: "Regensburg, BY", days: 16, applicants: 9, image: "/images/profil/38.jpg" },
      { role: "Einbauküchen", field: "Schreinerei", city: "Cham, BY", days: 12, applicants: 21, image: "/images/profil/18.jpg" },
      { role: "Wartungsverträge", field: "Gebäudetechnik", city: "Amberg, BY", days: 9, applicants: 24, image: "/images/profil/19.jpg" },
      { role: "Gewerbekunden-Leasing", field: "Autohaus", city: "Erlangen, BY", days: 11, applicants: 29, image: "/images/profil/07.jpg" },
      { role: "Fensteraustausch", field: "Fensterbau", city: "Weiden, BY", days: 8, applicants: 26, image: "/images/profil/11.jpg" },
      { role: "Hautkrebs-Vorsorge", field: "Hautarztpraxis", city: "Freising, BY", days: 10, applicants: 33, image: "/images/profil/21.jpg" },
      { role: "Metallbau für Industrie", field: "Metallbau", city: "Rosenheim, BY", days: 18, applicants: 8, image: "/images/profil/23.jpg" },
    ],
  },

  bafa: {
    eyebrow: "Zuschuss vom Bund",
    headlineBold: "Wir prüfen, ob Ihr Projekt",
    headlineLight: "förderfähig",
    headlineBoldEnd: "ist",
    text: "Wir sind gelisteter BAFA-Berater. Erfüllt Ihr Betrieb die Voraussetzungen, übernimmt das Förderprogramm einen Teil der Beratungskosten für Vertrieb und Marketing. Ob das bei Ihnen greift, klären wir vorab.",
    cta: "Förderfähigkeit prüfen",
    ctaNote: "In 60 Sekunden. Unverbindlich",
    badgeLogo: { src: "/images/bafa-berater.png", alt: "Gelisteter BAFA-Berater, Berater-ID 228969" }, // rundes Siegel
    image: { src: "/images/bafa.jpg", alt: "Mitarbeiter mit Headset am Arbeitsplatz" },
    // Schild oben links auf dem Foto, ohne Bild/Avatar
    badge: { top: "Angebot AS26214", title: "Förder-Check", status: "förderfähig", position: "top" as const, avatar: false, tone: "green" as const, checkFirst: true },
  },

  stats: {
    headlineBold: "Zahlen statt",
    headlineLight: "Versprechen",
    text: "Was seit 2018 aus der Arbeit mit über 280 Betrieben und Kanzleien entstanden ist.",
    clients: { value: "280+", label: "Betriebe und Kanzleien" }, // TODO prüfen
    // Kundenporträts in der Kachel (quadratisch, ~160×160), Dateien in /public/images/kunden/
    clientAvatars: ["/images/kunden/01.jpg", "/images/kunden/02.jpg", "/images/kunden/03.jpg", "/images/kunden/04.jpg", "/images/kunden/05.jpg", "/images/kunden/06.jpg"],
    items: [
      { value: "24 h", label: "bis jede Anfrage qualifiziert ist" }, // TODO prüfen
      { value: "8 Kanäle", label: "pro Kampagne, aus einer Hand" },
      { value: "seit 2018", label: "Kampagnen für den Mittelstand" },
    ],
    highlight: { value: "14 Tage", label: "bis zum ersten gebuchten Termin, im Schnitt" }, // TODO prüfen
  },

  guarantee: {
    eyebrow: "Schriftliche Zusage",
    headlineBold: "Erst prüfen wir.",
    headlineLight: "Dann sagen wir zu.",
    headlineBoldEnd: "",
    text: "Bevor wir eine Zusage aussprechen, vergleichen wir Ihr Angebot mit Projekten aus derselben Branche und Region: Suchvolumen, Wettbewerb, Auftragswert. Passen Markt und Angebot zusammen, bekommen Sie die Zusage schriftlich. Ohne Sternchen, ohne Kleingedrucktes.",
    cta: "Gespräch vereinbaren",
    ctaNote: "In 60 Sekunden. Unverbindlich",
    image: "/images/hero/20-schweisserin.jpg", // Motiv aus dem Hero (Metallbau)
    videoLabel: "Zusage möglich", // Chip oben links (oranger Punkt wie im Hero)
  },

  journey: {
    eyebrow: "Die Kundenreise",
    headlineBold: "Welche Kontaktpunkte hat Ihr Kunde,",
    headlineLight: "bevor er anfragt?",
    text: "Wer eine Sanierung, einen Steuerberater oder einen neuen Lieferanten sucht, schaut zuerst bei Google, auf Instagram und auf Ihrer Webseite nach. Was dort zu sehen ist, entscheidet, ob eine Anfrage kommt oder nicht.",
    // Jeder Reiter hat sein eigenes Bild (public/images/journey/…); beim Klick wird weich überblendet
    items: [
      {
        title: "Social Media",
        text: "Kurze Einblicke in Betrieb, Team und fertige Projekte bauen Vertrauen auf, lange bevor jemand mit Ihnen spricht.",
        href: "#",
        image: "/images/journey/social-media.jpg",
        alt: "Social-Media-Anzeigen und Beiträge eines Betriebs auf dem Smartphone",
      },
      {
        title: "Landingpage",
        text: "Eine Seite für genau ein Angebot, die auf dem Handy funktioniert, echte Fotos zeigt und eine Anfrage in zwei Minuten möglich macht.",
        href: "#",
        image: "/images/journey/landingpage.jpg", // TODO Bild ablegen (Querformat ~1400×920); bis dahin Platzhalter
        alt: "Beispiele von Landingpages am Desktop und Smartphone",
      },
      {
        title: "Webseite",
        text: "Wirkt Ihr Unternehmen online veraltet, springen viele ab, bevor sie Ihr Angebot überhaupt gelesen haben.",
        href: "#",
        image: "/images/journey/webseite.jpg",
        alt: "Vier Unternehmens-Webseiten im Überblick",
      },
    ],
  },

  // Über-uns-Seite /ueber-uns
  about: {
    meta: { title: "Über uns – Atex Scale", description: "Wer hinter Atex Scale steht: das Team aus Regensburg, unsere Geschichte seit 2018 und die Atex Media Gruppe." },
    hero: {
      headline: "Atex Media Gruppe, aus Regensburg in den DACH-Raum.",
      text: "Atex Scale bringt Betrieben, Praxen und Kanzleien im Mittelstand neue Kunden: mit Kampagnen, Landingpages, einem festen Team an Ihrer Seite und einer Zusage, die schriftlich gilt. Geplant in Regensburg, umgesetzt im gesamten DACH-Raum.",
      cta: "Jetzt Kunden gewinnen",
      stats: [
        { value: "280+", label: "Betriebe und Kanzleien" }, // TODO prüfen
        { value: "seit 2018", label: "Kampagnen für den Mittelstand" },
        { value: "14 Tage", label: "bis zum ersten gebuchten Termin, im Schnitt" }, // TODO prüfen
      ],
    },
    // Breites Foto unter dem Intro (Bürogebäude)
    photo: { src: "/images/ueber-uns/gebaeude.jpg", alt: "Bürogebäude von Atex Media in Regensburg" },
    story: {
      headline: "Spezialisiert auf Angebote, die erklärt werden müssen.",
      paragraphs: [
        "Badsanierung, Wärmepumpe, Steuerberatung, Implantologie, Ingenieurleistungen: Solche Angebote kauft niemand spontan. Kunden vergleichen, lesen, schauen sich Referenzen an. Deshalb bauen wir für jedes Angebot eine eigene Landingpage, schalten Kampagnen auf allen relevanten Kanälen und prüfen jede Anfrage, bevor sie bei Ihnen landet.",
        "Begonnen hat alles 2018 mit Atex Media: Webseiten und Social-Media-Kampagnen für mittelständische Betriebe. Daraus wurden zwei Marken: AtexJobs für Mitarbeiter, Atex Scale für Kunden. Geschäftsführer ist Daniel Meier. Für Ihr Projekt ist von der ersten Analyse bis zum gebuchten Termin dasselbe Team zuständig.", // TODO prüfen
      ],
    },
    // Vier Aufnahmen aus dem Büro, zwischen Geschichte und Team
    gallery: {
      headline: "Ein Blick in unser Büro in Regensburg.",
      images: [
        { src: "/images/ueber-uns/arbeitsplatz.jpg", alt: "Mitarbeiter mit Headset am Schreibtisch", span: "wide" as const },
        { src: "/images/ueber-uns/gespraech.jpg", alt: "Mitarbeiter im Gespräch am Besprechungstisch", span: "tall" as const },
        { src: "/images/ueber-uns/beratung.jpg", alt: "Zwei Kollegen lachen bei der Beratung", span: "wide" as const },
        { src: "/images/ueber-uns/team-arbeit.jpg", alt: "Kollegen arbeiten gemeinsam am Laptop", span: "wide" as const },
      ],
    },

    team: {
      headline: "Ein festes Team statt einer Hotline.",
      text: "Beratung, Kampagnen, Landingpage, Foto und Video, Qualifizierung der Anfragen: Sie sprechen direkt mit den Menschen, die Ihr Projekt bearbeiten.",
      members: [
        { name: "Daniel Meier", role: "Geschäftsführer", image: "/images/team/daniel-meier.jpg" },
        { name: "Christian Hopfner", role: "Strategieberatung", image: "/images/team/christian-hopfner.jpg" },
        { name: "Thomas Huber", role: "Strategieberatung", image: "/images/team/thomas-huber.jpg" },
        { name: "Calvin Okoh", role: "Strategieberatung", image: "/images/team/calvin-okoh.jpg" },
        { name: "Kaan Ocaktan", role: "Strategieberatung", image: "/images/team/kaan-ocaktan.jpg" },
        { name: "Dominik Moggert", role: "Accountmanagement", image: "/images/team/dominik-moggert.jpg" },
        { name: "Liliia Mkhytarian", role: "Projektmanagement, Webentwicklung", image: "/images/team/liliia-mkhytarian.jpg" },
        { name: "Bator Pisch", role: "Projektmanagement", image: "/images/team/bator-pisch.jpg" },
        { name: "Roman Opitz", role: "Foto- und Videografie", image: "/images/team/roman-opitz.jpg" },
        { name: "Mona Schmidt", role: "Backoffice", image: "/images/team/mona-schmidt.jpg" },
      ],
      hiring: { title: "Wir wachsen weiter", cta: "Offene Stellen", href: "https://www.atex-media.de/karriere", image: "/images/ueber-uns/buero.jpg" },
    },
    // Dunkle Abschluss-Sektion: Atex Media als Firmengruppe, Link zur Hauptseite
    group: {
      headline: "Atex Scale ist eine Marke der Atex Media GmbH",
      text: "Unser Büro steht in Regensburg. Von hier aus betreuen wir Betriebe und Kanzleien im gesamten DACH-Raum.",
      cta: "Zu atex-media.de",
      href: "https://www.atex-media.de",
      city: "Regensburg",
      image: { src: "/images/ueber-uns/buero.jpg", alt: "Bürogebäude von Atex Media in Regensburg" },
      logoSymbol: "/images/ueber-uns/atex-logo-symbol.png",
    },
  },

  // Cookie-Banner. Optionale Dienste werden erst nach "Alle akzeptieren" geladen.
  consent: {
    title: "Ihre Cookie-Einstellungen",
    text: "Einige Cookies braucht die Seite, damit sie funktioniert. Andere zeigen uns, wie die Seite genutzt wird und ob unsere Anzeigen ankommen. Welche wir laden dürfen, entscheiden Sie. Die Seite funktioniert in jedem Fall vollständig.",
    acceptAll: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige",
    change: "Auswahl ändern",
    footerLink: "Cookies bearbeiten",
  },

  // Sektion "Landingpage": was wir bauen, Bausteine zum Zusammenstellen (Warenkorb), Referenz H24
  careerPage: {
    eyebrow: "Landingpage",
    headlineBold: "Aus Klicks",
    headlineLight: "werden Anfragen",
    text: "In wenigen Sekunden fällt die Entscheidung: anfragen oder weiterscrollen. Wir bauen Landingpages, die ein Angebot auf den Punkt bringen, auf dem Handy funktionieren und die Anfrage auf zwei Minuten verkürzen. Die Anfragen landen direkt in unserer Qualifizierung.",
    pillars: [
      {
        title: "Alles aus einer Hand",
        text: "Konzept, Texte, Fotos, Programmierung, Tracking. Die Seite läuft auf Ihrer eigenen Adresse, um Technik, Pflege und neue Angebote kümmern wir uns.",
      },
      {
        title: "Wer daran arbeitet",
        text: "Berater, Texter, Fotografen und Entwickler der Atex Media Gruppe. Seit 2018 im Mittelstand unterwegs, über 280 Betriebe und Kanzleien begleitet.", // TODO prüfen
      },
      {
        title: "Aufbau mit Ziel",
        text: "Jede Seite folgt einer Struktur, die sich bewährt hat: erst Vertrauen aufbauen, dann zur Anfrage führen. Gestaltet in Ihren Farben.",
      },
    ],
    cta: "Landingpage besprechen",
    // Bausteine zum Zusammenstellen: Hover zeigt "Zum Warenkorb hinzufügen", der Korb oben rechts zählt mit
    cart: {
      title: "Ihre Lösung zusammenstellen",
      hint: "Bausteine per Klick in den Warenkorb legen",
      add: "Zum Warenkorb hinzufügen",
      remove: "Aus dem Warenkorb entfernen",
      cartLabel: "Warenkorb",
      request: "Auswahl anfragen",
      empty: "Noch nichts ausgewählt",
    },
    // Referenz, Inhalte von atex-media.de/referenzen/h24
    caseStudy: {
      eyebrow: "Aus der Praxis · B2B-Software",
      client: "H24 GmbH",
      title: "Wie ein Software-Anbieter bundesweit Anfragen gewinnt",
      intro: "H24 entwickelt DSGVO-konforme KI-Chatbots für Unternehmen und Behörden. Wir haben Webseite, Landingpages und Kampagnen zu einem Ablauf verbunden, der Anfragen aus ganz Deutschland in den Vertrieb bringt.",
      facts: [
        { value: "Bundesweit", label: "Zielmarkt im B2B" },
        { value: "2 Produkte", label: "mit eigener Landingpage" },
        { value: "Mehrjährig", label: "in Zusammenarbeit" }, // TODO prüfen (Startjahr)
      ],
      services: ["Landingpages", "Google Ads", "Webseite", "CRM-Anbindung"],
      blocks: [
        {
          title: "Die Ausgangslage",
          text: "Zwei Produkte am Markt, erste Landingpages für Google Ads, aber Webseite, Kampagnen und Vertrieb liefen nebeneinander her. Anfragen kamen unregelmäßig und mussten von Hand weiterverarbeitet werden.",
        },
        {
          title: "Was wir gemacht haben",
          text: "Neuer Auftritt mit geschärfter Produktpositionierung, eigene Landingpages je Produkt für die Kampagnen, dazu Zahlungsabwicklung, CRM-Anbindung und Tracking, damit jede Anfrage automatisch dort landet, wo sie bearbeitet wird.",
        },
        {
          title: "Was dabei herauskam",
          text: "Ein durchgehender Ablauf von der Anzeige bis zum Vertrieb. Anfragen kommen planbar über die Landingpages, laufen direkt ins CRM und lassen sich skalieren, ohne dass jemand im Büro nachsortieren muss.",
        },
      ],
      image: { src: "/images/referenzen/h24.jpg", alt: "Landingpage von H24 am Desktop und Smartphone" }, // TODO Bild ablegen (Hochformat 4:5); bis dahin Platzhalter
      link: { label: "Ganze Referenz lesen", href: "https://www.atex-media.de/referenzen/h24" },
      caption: "Landingpages, Kampagnen und CRM in einem Ablauf",
    },
  },

  faq: {
    headline: "Häufige Fragen",
    items: [
      {
        q: "Wie funktioniert die schriftliche Zusage?",
        a: "Besteht Ihr Angebot unseren Markt-Check, sagen wir Ihnen eine Anzahl qualifizierter Anfragen oder Termine schriftlich zu. Wird sie innerhalb der vereinbarten Laufzeit nicht erreicht, verlängern wir die Zusammenarbeit kostenlos oder erstatten Ihr Honorar, je nach Vereinbarung im Angebot. Die Details regeln unsere AGB und Ihr Angebot.",
      },
      {
        q: "Für welche Branchen arbeitet ihr?",
        a: "Vor allem Handwerk, Bau und Gebäudetechnik, Praxen, Steuer- und Anwaltskanzleien, Ingenieurbüros und B2B-Dienstleister. Gemeinsam ist allen: erklärungsbedürftige Angebote mit einem Auftragswert, bei dem sich eine geprüfte Anfrage lohnt.", // TODO prüfen
      },
      {
        q: "Was macht ihr anders als eine klassische Werbeagentur?",
        a: "Wir schalten nicht nur Anzeigen. Wir bauen die Landingpage, prüfen jede Anfrage innerhalb von 24 Stunden und buchen Termine direkt in Ihren Kalender. Bei Ihnen kommen nur Menschen an, die Bedarf haben und in Ihrer Region sind.",
      },
      {
        q: "Wie lange dauert es bis zur ersten Anfrage?",
        a: "Die Kampagne läuft in der Regel zwei bis drei Wochen nach dem Start, die ersten qualifizierten Anfragen kommen meist in der ersten Woche danach. Den ersten gebuchten Termin gibt es im Schnitt nach 14 Tagen.", // TODO prüfen
      },
      {
        q: "Wer bezahlt das Werbebudget?",
        a: "Das Werbebudget für Meta, Google und die anderen Plattformen ist nicht Teil unseres Honorars und wird im Angebot gesondert ausgewiesen. Wie hoch es sein sollte, hängt von Region, Angebot und Ziel ab. Das rechnen wir im Markt-Check durch.",
      },
      {
        q: "Muss ich mich langfristig binden?",
        a: "Nein. Sie wählen zwischen verschiedenen Laufzeiten, passend zu Ihrem Angebot und Ihrem Bedarf.",
      },
    ],
  },

  finalCta: {
    // Überschrift zweiteilig: erster Teil fett, zweiter dünn (Highlight wie in den übrigen Sektionen)
    headlineBold: "Wählen Sie einen Partner,",
    headlineLight: "der Ihre Branche bereits kennt",
    text: "Kostenfreier Markt-Check. Ab Schwellwert: schriftliche Zusage.",
    cta: "Gespräch vereinbaren",
    note: "In 2 Minuten unverbindlich anfragen",
    tickerSuffix: "Anfragen / Monat",
    ticker: [
      { role: "Badsanierung", count: 27 },
      { role: "PV-Anlage", count: 34 },
      { role: "Steuerberatung", count: 11 },
      { role: "Wärmepumpe", count: 31 },
      { role: "Dachsanierung", count: 19 },
      { role: "Implantologie", count: 16 },
      { role: "Einbauküchen", count: 21 },
    ], // TODO prüfen
    // Anfrage-Meldungen: kleine Profilbilder; roles = für welches Angebot
    notifications: [
      { text: "4 neue Anfragen", roles: "Badsanierung", time: "vor 6 Stunden", images: ["/images/profil/07.jpg", "/images/profil/04.jpg"] },
      { text: "6 neue Anfragen", roles: "PV-Anlage & Speicher", time: "vor 4 Stunden", images: ["/images/profil/13.jpg", "/images/profil/14.jpg"] },
      { text: "2 Termine gebucht", roles: "Steuerberatung", time: "vor 3 Stunden", images: ["/images/profil/15.jpg", "/images/profil/09.jpg"] },
      { text: "2 neue Anfragen", roles: "Implantologie", time: "vor 15 Stunden", images: ["/images/profil/41.jpg", "/images/profil/23.jpg"] },
      { text: "3 Termine gebucht", roles: "Wärmepumpe", time: "vor 2 Stunden", images: ["/images/profil/08.jpg", "/images/profil/21.jpg"] },
      { text: "5 neue Anfragen", roles: "Dachsanierung & Fenster", time: "vor 8 Stunden", images: ["/images/profil/26.jpg", "/images/profil/38.jpg"] },
    ],
  },

  footer: {
    quicklinks: {
      title: "Quicklinks",
      items: [
        { label: "Startseite", href: "/" },
        { label: "Leistungen", href: "/#system" },
        { label: "Referenzen", href: "/#referenzen" },
        { label: "Kundenreise", href: "/#karriere" },
        { label: "Über uns", href: "/ueber-uns" },
        { label: "Landingpages", href: "/#karriereseite" },
        { label: "Karriere", href: "https://www.atex-media.de/karriere" },
        { label: "FAQ", href: "/#faq" },
        { label: "Kontakt", href: "/kontakt" },
      ],
    },
    legal: [
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Impressum", href: "/impressum" },
      { label: "AGB", href: "/agb" },
    ],
    copyright: "© Atex Media GmbH. Alle Rechte vorbehalten.",
  },
} as const;

export type Site = typeof site;
