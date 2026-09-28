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
      { label: "Leistungen", href: "/#leistungen" },
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

  // 02 · Das System: links fünf Schritte, rechts Live-Dashboard (Eingaben → Anfragen-Eingang → Stufen → Kennzahlen)
  platform: {
    eyebrow: "02 · Das System",
    headlineBold: "Ein Ablauf,",
    headlineLight: "der neue Kunden planbar macht",
    text: "Wir übernehmen den ganzen Weg von der ersten Anzeige bis zum gebuchten Termin. Sie sprechen nur noch mit Menschen, die Ihr Angebot brauchen, in Ihrer Region sind und ein Budget eingeplant haben.",
    stepsTitle: "Wie wir vorgehen",
    steps: [
      { title: "Markt-Check", text: "Wie oft wird Ihr Angebot in Ihrer Region gesucht? Das klären wir, bevor Sie etwas investieren." },
      { title: "Angebot zuspitzen", text: "Wir bringen Ihr Angebot so auf den Punkt, dass Ihr Wunschkunde es in Sekunden versteht." },
      { title: "Kampagnen auf acht Kanälen", text: "Meta, Google, LinkedIn, YouTube und weitere. Aufgesetzt und betreut von uns." },
      { title: "Prüfung jeder Anfrage", text: "Binnen 24 Stunden klären wir Bedarf, Ort, Zeitpunkt und Budget." }, // TODO prüfen (24 h)
      { title: "Termin in Ihrem Kalender", text: "Nur wer passt, bekommt einen Termin bei Ihnen. Darum geht es am Ende." },
    ],
    dashboard: {
      title: "Atex Scale · Live",
      inputs: [
        { label: "Ihr Angebot", icon: "target" as const, tone: "accent" as const },
        { label: "Ihre Region", icon: "pin" as const, tone: "success" as const },
        { label: "Ihr Wunschkunde", icon: "users" as const, tone: "creme" as const },
        { label: "Auftragswert", icon: "chartLine" as const, tone: "chip" as const },
      ],
      engine: { title: "Anfragen-Eingang", sub: "Kampagnen und Prüfung laufen", status: "Live" },
      stages: [
        { label: "Angefragt", icon: "message" as const, tone: "accent" as const },
        { label: "Geprüft", icon: "check" as const, tone: "success" as const },
        { label: "Termin", icon: "calendar" as const, tone: "creme" as const },
      ],
      // Beispielwerte zur Veranschaulichung – durch echte Werte aus einem Projekt ersetzen
      kpis: [
        { value: "+22", label: "Anfragen im Monat" }, // TODO prüfen
        { value: "64 %", label: "passen zum Angebot" }, // TODO prüfen
        { value: "38 €", label: "je geprüfte Anfrage" }, // TODO prüfen
      ],
      note: "Beispielwerte zur Veranschaulichung",
    },
    // Video unter der Sektion (Wistia). Ohne ID wird der Block nicht angezeigt.
    video: {
      id: "", // TODO Video-ID eintragen (Erklärvideo „So arbeitet Atex Scale“)
      heading: "So arbeitet Atex Scale",
      title: "So arbeitet Atex Scale",
      label: "Erklärvideo",
      poster: "/images/ueber-uns/beratung.jpg",
    },
  },

  // 03 · Der Ablauf: vier Reiter links, Detail rechts (Text + vier Kärtchen), darunter der Kreislauf als Leiste
  process: {
    eyebrow: "03 · Der Ablauf",
    headlineBold: "Von der ersten Anzeige",
    headlineLight: "bis zum Termin in Ihrem Kalender",
    text: "Vier Schritte greifen ineinander und laufen dauerhaft weiter, solange Ihre Kampagne läuft. Bei Ihnen kommt am Ende an, was zählt: Termine mit Menschen, die kaufen wollen.",
    stepLabel: "Schritt",
    loopTitle: "Der ganze Kreislauf",
    autoMs: 7000, // Reiter wechseln automatisch, bis jemand selbst klickt
    phases: [
      {
        icon: "megaphone" as const,
        title: "Sichtbar werden",
        sub: "Dort, wo Ihre Kunden suchen",
        text: "Für jedes Angebot entsteht eine eigene Kampagne mit eigenen Anzeigen. Wir schalten sie auf den Kanälen, die Ihre Kunden wirklich nutzen, und steuern sie genau auf Ihre Region aus.",
        items: [
          { title: "Meta", text: "Facebook und Instagram, auf Ihre Region zugeschnitten" },
          { title: "Google", text: "Suche und Maps, wenn jemand konkret sucht" },
          { title: "LinkedIn", text: "Entscheider in Unternehmen, für B2B-Angebote" },
          { title: "YouTube und TikTok", text: "Kurze Videos aus Ihrem Betrieb" },
        ],
      },
      {
        icon: "database" as const,
        title: "Anfragen sammeln",
        sub: "Alles an einer Stelle",
        text: "Anfragen aus Anzeigen, Landingpage, WhatsApp und Telefon landen in einem gemeinsamen Eingang. Nichts versandet mehr im Postfach oder auf einem Notizzettel.",
        items: [
          { title: "Landingpage", text: "Eine Seite pro Angebot, Anfrage in zwei Minuten" },
          { title: "WhatsApp", text: "Aus der Anzeige direkt in den Chat" },
          { title: "Formular in der Anzeige", text: "Anfrage ohne Umweg über die Webseite" },
          { title: "Telefon", text: "Anrufe aus der Kampagne werden mit erfasst" },
        ],
      },
      {
        icon: "filter" as const,
        title: "Prüfen und nachfassen",
        sub: "Nur Passendes geht weiter",
        text: "Binnen 24 Stunden sehen wir uns jede Anfrage an. Wer nicht gleich erreichbar ist, bekommt freundliche Erinnerungen per Nachricht, E-Mail oder Anruf.", // TODO prüfen (24 h)
        items: [
          { title: "Bedarf", text: "Was genau wird gebraucht?" },
          { title: "Region", text: "Liegt der Ort in Ihrem Gebiet?" },
          { title: "Zeitpunkt", text: "Wann soll es losgehen?" },
          { title: "Budget", text: "Passt die Größenordnung zu Ihrem Angebot?" },
        ],
      },
      {
        icon: "calendar" as const,
        title: "Termin und Auswertung",
        sub: "Direkt in Ihrem Kalender",
        text: "Passt alles, bucht der KI-Assistent den Termin in Ihren Kalender, auch abends und am Wochenende. Jeden Monat sehen Sie, welcher Kanal wie viele Termine gebracht hat.",
        items: [
          { title: "Terminbuchung", text: "Mit allen Angaben aus der Anfrage" },
          { title: "Erinnerung", text: "Kurz vorher per Nachricht, damit keiner vergisst" },
          { title: "Wiederansprache", text: "Wer noch nicht so weit ist, sieht Ihr Angebot erneut" },
          { title: "Auswertung", text: "Termine und Kosten je Kanal, jeden Monat" },
        ],
      },
    ],
  },

  // 04 · Warum es funktioniert: links Text + vier Merkmale, rechts Schema „Was Sie bekommen“
  why: {
    eyebrow: "04 · Warum es funktioniert",
    headlineBold: "Erfahrung aus vielen Branchen.",
    headlineLight: "Ein Team, das bleibt.",
    text: "Seit 2018 arbeitet die Atex Media Gruppe für Betriebe, Praxen und Kanzleien im Mittelstand. Aus diesen Projekten wissen wir, wie in welcher Branche gesucht wird, welche Botschaft zieht und was eine Anfrage kostet. Darauf baut jeder Markt-Check auf. Betreut wird Ihr Projekt von einem festen Team in Regensburg, nicht von einer Hotline.",
    features: [
      { icon: "building" as const, tone: "accent" as const, title: "280+ Betriebe", text: "Handwerk, Praxen, Kanzleien und B2B" }, // TODO prüfen
      { icon: "chartLine" as const, tone: "navy" as const, title: "Erfahrungswerte", text: "Suchvolumen und Kosten je Branche" },
      { icon: "users" as const, tone: "success" as const, title: "Festes Team", text: "Beratung, Kampagnen, Foto und Web" },
      { icon: "eye" as const, tone: "soft" as const, title: "Nachvollziehbar", text: "Jede Anfrage einem Kanal zugeordnet" },
    ],
    diagram: {
      title: "Was Sie bekommen",
      inputsLabel: "Ihr Markt, vorab geprüft",
      inputs: ["Werte aus unseren Projekten", "Suchdaten Ihrer Region", "Ihr Angebot und Auftragswert"],
      engine: { title: "Atex Scale Markt-Check", sub: "Analyse und Kampagnen aus einer Hand", status: "aktiv" },
      tiles: [
        { value: "Markt-Score", label: "für Ihre Region" },
        { value: "Prognose", label: "Anfragen je Monat" },
        { value: "Zusage", label: "schriftlich" },
      ],
      outputsLabel: "Was bei Ihnen ankommt",
      outputs: ["Geprüfte Anfragen", "Gebuchte Termine", "Neue Aufträge"],
      footer: "Geplant und betreut von unserem Team in Regensburg",
    },
  },

  // 05 · Die Methode: Prinzip (Wiederholung schafft Vertrauen) → schematische Kurve → drei Phasen → drei Wirkprinzipien → Fazit
  method: {
    eyebrow: "05 · Die Methode",
    headlineBold: "Erst sehen, dann vertrauen,",
    headlineLight: "dann anfragen",
    text: "Kaum jemand fragt beim ersten Kontakt an. Deshalb begegnet Ihr Wunschkunde Ihrem Angebot mehrmals und auf verschiedenen Kanälen, bis er so weit ist.",
    principle: {
      eyebrow: "Warum das wirkt",
      title: "Vertrautheit entsteht durch Wiederholung",
      text: "Was wir öfter sehen, halten wir für vertrauter und glaubwürdiger, auch ohne bewusst darüber nachzudenken. Die Psychologie nennt das Mere-Exposure-Effekt. Für Ihr Angebot heißt das: Wer Ihren Betrieb schon ein paarmal gesehen hat, ruft eher bei Ihnen an als bei einem Mitbewerber, den er nicht kennt.",
      stages: [
        { count: "1. Kontakt", title: "Gesehen", text: "Das Angebot fällt im Feed oder in der Suche auf" },
        { count: "2 bis 3 Kontakte", title: "Erinnert", text: "Der Name Ihres Betriebs kommt bekannt vor" },
        { count: "4 bis 6 Kontakte", title: "Geprüft", text: "Fotos, Bewertungen und Webseite werden angesehen" },
        { count: "ab 7 Kontakten", title: "Angefragt", text: "Der Kontakt meldet sich bei Ihnen" },
      ],
    },
    // Schematische Kurve, keine Messwerte (x = Kontakte 0–9, y = 0–100)
    chart: {
      title: "Anfragebereitschaft nach Kontakten",
      sub: "Je öfter jemand Ihren Betrieb wahrnimmt, desto eher meldet er sich.",
      badge: "Schematische Darstellung",
      yLabel: "Bereitschaft anzufragen",
      xLabel: "Kontakte mit Ihrem Angebot",
      points: [
        { x: 1, y: 14, label: "Gesehen" },
        { x: 3, y: 40, label: "Erinnert" },
        { x: 5, y: 64, label: "Geprüft" },
        { x: 8, y: 86, label: "Angefragt" },
      ],
    },
    phasesTitle: "Drei Phasen, drei Ziele",
    phases: [
      {
        label: "Phase 1",
        tag: "Aufmerksam machen",
        title: "Erster Kontakt über ein konkretes Angebot",
        text: "Eine klare Botschaft zu einem Problem, das Ihr Kunde gerade hat. Zum Beispiel: Wärmepumpe statt Ölheizung, mit Förderung.",
        channels: ["Instagram-Feed", "Google-Suche", "YouTube"],
        time: "Woche 1 bis 3", // TODO prüfen
        goal: "wahrgenommen werden",
      },
      {
        label: "Phase 2",
        tag: "Vertrauen aufbauen",
        title: "Wiederansprache mit Einblicken und Beweisen",
        text: "Wer Ihre Anzeige gesehen hat, sieht jetzt fertige Projekte, Ihr Team und Bewertungen aus der Region.",
        channels: ["Instagram-Story", "Facebook", "Google-Display"],
        time: "Woche 4 bis 8", // TODO prüfen
        goal: "Vertrauen gewinnen",
      },
      {
        label: "Phase 3",
        tag: "Zur Anfrage führen",
        title: "Direkte Einladung mit einfachem nächsten Schritt",
        text: "Ein konkreter Anlass und ein kurzer Weg: Termin wählen, Formular in zwei Minuten oder eine Nachricht per WhatsApp.",
        channels: ["Retargeting", "WhatsApp", "Landingpage"],
        time: "ab Woche 9", // TODO prüfen
        goal: "Anfrage auslösen",
      },
    ],
    timeLabel: "Zeitraum",
    goalLabel: "Ziel",
    channelsLabel: "Kanäle",
    triggersEyebrow: "Was dahinter steckt",
    triggers: [
      { title: "Relevanz", text: "Eine Botschaft zu einem akuten Problem wird gelesen. Allgemeine Imagewerbung wird überscrollt." },
      { title: "Beweis durch andere", text: "Fertige Projekte und Bewertungen aus der Nachbarschaft nehmen die Sorge, an den Falschen zu geraten." },
      { title: "Ein einfacher nächster Schritt", text: "Je kürzer der Weg zur Anfrage, desto mehr Menschen gehen ihn. Zwei Minuten statt zehn Pflichtfelder." },
    ],
    banner: {
      highlight: "Jede Phase hat eigene Anzeigen und ein eigenes Ziel.",
      text: "Wir werten laufend aus, welche Kombination die meisten Termine bringt, und verschieben das Budget dorthin.",
    },
  },

  // 06 · Privat- und Geschäftskunden: links Text + zwei Karten (B2C/B2B), rechts Foto-Karte Erstgespräch
  audiences: {
    eyebrow: "06 · Privat- und Geschäftskunden",
    headlineBold: "Für Privatkunden,",
    headlineLight: "genauso wie für Geschäftskunden",
    text: "Ob jemand ein neues Bad plant oder ein Unternehmen einen Steuerberater sucht: Ohne Vertrauen fällt keine Entscheidung. Der Weg dahin ist unterschiedlich lang, der Ablauf dahinter bleibt derselbe.",
    text2: "Handwerksbetriebe, Praxen, Kanzleien und Ingenieurbüros setzen auf denselben Mechanismus: sichtbar sein, bis der Bedarf da ist, und dann als Erste sauber antworten.",
    groups: [
      {
        tag: "Privatkunden · B2C",
        tone: "accent" as const,
        title: "Schnelle Entscheidung, viel Vergleich",
        text: "Wer ein Angebot sucht, holt oft drei ein. Den Auftrag bekommt, wer schnell antwortet und vertrauenswürdig wirkt.",
        items: ["Handwerk und Sanierung", "Heizung, Solar und Energie", "Zahnarzt- und Arztpraxen", "Pflege und Gesundheit"],
      },
      {
        tag: "Geschäftskunden · B2B",
        tone: "navy" as const,
        title: "Lange Entscheidung, mehrere Beteiligte",
        text: "Entscheider vergleichen über Wochen. Regelmäßige Präsenz sorgt dafür, dass Sie gefragt werden, wenn der Bedarf entsteht.",
        items: ["Steuer- und Anwaltskanzleien", "Ingenieur- und Planungsbüros", "Software und IT", "Industrie und Zulieferer"],
      },
    ],
    media: {
      image: "/images/ueber-uns/beratung.jpg",
      alt: "Zwei Kollegen von Atex Media lachen bei der Beratung",
      label: "Erstgespräch",
      person: { name: "Christian Hopfner", role: "Strategieberatung", image: "/images/team/christian-hopfner-avatar.jpg" },
      text: "In 15 Minuten klären wir, wie Ihre Kunden suchen und welcher Weg für Ihr Angebot passt. Kostenlos und ohne Verkaufsgespräch.",
      cta: { label: "Termin wählen", href: "/kontakt" },
    },
  },

  // 07 · Aus der Praxis: Case Study H24 (Inhalte nach atex-media.de/referenzen/h24)
  caseStudy: {
    eyebrow: "07 · Aus der Praxis",
    client: "H24 GmbH",
    headlineBold: "H24: Bundesweit Anfragen",
    headlineLight: "für eine B2B-Software",
    intro: "H24 entwickelt DSGVO-konforme KI-Chatbots für Unternehmen und Behörden. Webseite, Kampagnen und Vertrieb liefen nebeneinander her. Anfragen kamen unregelmäßig und mussten von Hand weitergegeben werden.",
    text: "Wir haben den Auftritt neu aufgestellt, je Produkt eine eigene Landingpage für die Kampagnen gebaut und Zahlungsabwicklung, CRM und Tracking angebunden. Jede Anfrage landet seitdem automatisch dort, wo sie bearbeitet wird.",
    factsTitle: "Eckdaten des Projekts",
    facts: [
      { value: "Bundesweit", label: "Zielmarkt im B2B" },
      { value: "2 Produkte", label: "mit eigener Landingpage" },
      { value: "Mehrjährig", label: "in Zusammenarbeit" }, // TODO prüfen (Startjahr)
    ],
    points: [
      { icon: "target" as const, title: "Geschärfte Positionierung", text: "Ein Auftritt, der beide Produkte klar voneinander abgrenzt" },
      { icon: "megaphone" as const, title: "Landingpage je Produkt", text: "Eigene Seiten als Ziel für die Google-Ads-Kampagnen" },
      { icon: "link" as const, title: "CRM und Tracking angebunden", text: "Anfragen laufen ohne Umweg direkt in den Vertrieb" },
    ],
    servicesTitle: "Leistungen im Projekt",
    services: ["Landingpages", "Google Ads", "Webseite", "CRM-Anbindung"],
    image: { src: "/images/referenzen/h24.jpg", alt: "Landingpage von H24 am Desktop und Smartphone" }, // TODO Bild ablegen (Querformat 16:10, ~1200×750); bis dahin Platzhalter
    caption: "Landingpages, Kampagnen und CRM in einem Ablauf",
    industriesTitle: "Branchen, für die wir arbeiten",
    industries: [
      { name: "Handwerk und Sanierung", tag: "B2C" },
      { name: "Heizung und Energie", tag: "B2C + B2B" },
      { name: "Zahnarzt- und Arztpraxen", tag: "B2C" },
      { name: "Pflege und Gesundheit", tag: "B2C" },
      { name: "Steuer und Recht", tag: "B2B + B2C" },
      { name: "Ingenieurbüros", tag: "B2B" },
      { name: "Software und IT", tag: "B2B" },
      { name: "Industrie und Zulieferer", tag: "B2B" },
    ],
    link: { label: "Ganze Referenz lesen", href: "https://www.atex-media.de/referenzen/h24" },
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

  // 08 · Kampagnen aus der Praxis: links Text, rechts zwei Handys mit Beispielmotiven (Video- und Social-Anzeige)
  showcase: {
    eyebrow: "08 · Kampagnen aus der Praxis",
    badge: { title: "Beispielmotive", sub: "So sind unsere Anzeigen aufgebaut" },
    headlineBold: "Aus Ihrem Angebot wird",
    headlineLight: "eine Anzeige, die man versteht",
    text: "Echte Fotos aus Ihrem Betrieb, eine klare Botschaft und ein Weg zur Anfrage, der auf dem Handy funktioniert. Die Motive rechts zeigen den Aufbau. Kampagnen unserer Kunden zeigen wir Ihnen gern im persönlichen Gespräch.",
    chips: [
      { icon: "camera" as const, label: "Echte Fotos" },
      { icon: "message" as const, label: "Klare Botschaft" },
      { icon: "send" as const, label: "Anfrage per Klick" },
    ],
    cta: "Beispiele im Gespräch ansehen",
    note: "Beispielmotive zur Veranschaulichung. Kennzahlen und Kampagnen einzelner Kunden zeigen wir nur mit deren Zustimmung.",
    video: {
      tag: "Video-Anzeige",
      extra: "Dreh vor Ort",
      image: "/images/hero/22-shk.jpg",
      title: "Ihr neues Bad",
      sub: "Geplant und gebaut aus einer Hand",
      duration: "0:20",
      caption: { title: "Badsanierung im Kurzvideo", sub: "Instagram und Facebook" },
    },
    social: {
      tag: "Social-Anzeige",
      account: "Ihr Betrieb",
      sponsored: "Gesponsert",
      image: "/images/hero/23-elektriker.jpg",
      headline: "PV-Anlage mit Speicher",
      body: "Kostenlose Beratung vor Ort, im Umkreis von 40 km.",
      button: "Jetzt anfragen",
      caption: { title: "Photovoltaik regional beworben", sub: "Beitrag im Instagram-Feed" },
    },
    caption: "Zwei Beispielmotive. Den strategischen Aufbau erklären wir im Gespräch.",
  },

  // 09 · Schriftliche Zusage: links drei Schritte, rechts Beispiel-Markt-Check mit Balken, Zusage-Liste und Button
  guarantee: {
    eyebrow: "09 · Schriftliche Zusage",
    headlineBold: "Wir rechnen Ihren Markt vorher durch.",
    headlineLight: "Dann sagen wir schriftlich zu.",
    text: "Bevor wir starten, prüfen wir Ihre Region: Wie oft wird Ihr Angebot gesucht, wie viele Mitbewerber werben, was kostet eine Anfrage? Aus diesen Werten und den Ergebnissen vergleichbarer Projekte entsteht eine Prognose. Was wir sicher erreichen können, sagen wir Ihnen schriftlich zu, noch bevor Sie uns beauftragen.",
    steps: [
      { title: "Markt-Check Ihrer Region", text: "Suchvolumen, Wettbewerb und typische Auftragswerte in Ihrem Gebiet. Bevor Sie einen Euro ausgeben." },
      { title: "Prognose aus Vergleichsprojekten", text: "Wir legen Ihr Angebot neben Projekte aus derselben Branche und rechnen aus, wie viele Anfragen realistisch sind." },
      { title: "Zusage auf Papier", text: "Liegt Ihr Markt über unserem Schwellwert, sagen wir Ihnen eine Anzahl geprüfter Anfragen schriftlich zu. Ohne Sternchen." },
    ],
    bafa: {
      logo: { src: "/images/bafa-berater.png", alt: "Gelisteter BAFA-Berater, Berater-ID 228969" },
      text: "Zusätzlich prüfen wir als gelisteter BAFA-Berater, ob ein Teil der Beratungskosten gefördert werden kann.",
    },
    panel: {
      eyebrow: "Beispiel: Markt-Check Region Regensburg",
      offer: "Angebot: Badsanierung",
      status: "Zusage möglich",
      // Beispielwerte zur Veranschaulichung
      rows: [
        { label: "Suchanfragen pro Monat", sub: "im Umkreis von 40 km", value: "3.100", ratio: 0.78, tone: "accent" as const }, // TODO prüfen
        { label: "Mitbewerber mit Anzeigen", sub: "in derselben Region", value: "12", ratio: 0.3, tone: "navy" as const }, // TODO prüfen
        { label: "Erwartete geprüfte Anfragen", sub: "in 90 Tagen", value: "45 bis 60", ratio: 0.6, tone: "success" as const }, // TODO prüfen
        { label: "Markt-Score", sub: "aus Nachfrage, Wettbewerb und Auftragswert", value: "8.4 / 10", ratio: 0.84, tone: "accent" as const }, // TODO prüfen
      ],
      promiseTitle: "Was wir schriftlich zusagen:",
      promises: [
        "Eine Mindestzahl geprüfter Anfragen in einem festen Zeitraum",
        "Für welche Region und welches Angebot die Zusage gilt",
        "Was passiert, falls wir die Zahl nicht erreichen",
      ],
      note: "Den Markt-Check bekommen Sie kostenlos, noch vor dem ersten Auftrag.",
      cta: "Markt-Check anfragen",
    },
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
        { label: "Leistungen", href: "/#leistungen" },
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
