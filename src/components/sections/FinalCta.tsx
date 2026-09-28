import { site } from "@/content/site";
import { Button } from "@/components/ui";
import { Icon } from "@/components/icons";

export function FinalCta() {
  const f = site.finalCta;
  // Jede Hälfte deutlich breiter als der Bildschirm; Abstände als Margin am Element, damit -50 % exakt auf die Naht trifft
  const tHalf = [...f.ticker, ...f.ticker, ...f.ticker];
  const ticker = [...tHalf, ...tHalf];
  const nHalf = [...f.notifications, ...f.notifications];
  const notes = [...nHalf, ...nHalf];
  return (
    <section id="kontakt" className="section-y overflow-hidden bg-navy-2 text-white">
      <div className="container-x flex flex-col items-center text-center">
        <h2 className="max-w-[880px] text-[clamp(1.75rem,3vw,2.375rem)] font-semibold leading-tight">
          {f.headlineBold} <span className="h-light">{f.headlineLight}</span>
        </h2>
        <p className="mt-5 max-w-[640px] text-[15px] text-on-navy-muted">{f.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={site.contact.bookingHref} variant="light" arrow={false}>
            {f.cta}
          </Button>
          <a
            href={site.contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-white/70 px-[26px] py-[14px] text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-white/10"
          >
            <Icon.whatsapp className="size-5" />
            {site.contact.whatsapp.label}
          </a>
        </div>
        <p className="mt-5 text-[13px] text-on-navy-muted">{f.note}</p>
      </div>

      {/* Ticker-Reihe 1: Angebote mit Anfragen pro Monat */}
      <div className="edge-fade mt-12 overflow-hidden">
        <div className="marquee-track flex w-max animate-marquee">
          {ticker.map((t, i) => (
            <div key={i} className="mr-3.5 rounded-md bg-navy-card px-5 py-3">
              <p className="text-[14px] font-semibold">{t.role}</p>
              <p className="text-[12px] text-on-navy-muted">{t.count} {f.tickerSuffix}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker-Reihe 2: Anfrage-Benachrichtigungen */}
      <div className="edge-fade mt-3.5 overflow-hidden">
        <div className="marquee-track flex w-max animate-marquee-reverse">
          {notes.map((n, i) => (
            <div key={i} className="mr-3.5 flex items-center gap-3 rounded-md bg-navy-card py-3 pl-4 pr-[18px]">
              {/* zwei kleine Profilbilder, leicht überlappend */}
              <span className="flex shrink-0 -space-x-2.5">
                {n.images.map((src) => (
                  <img key={src} src={src} alt="" className="size-8 rounded-sm border-2 border-navy-card object-cover" loading="lazy" />
                ))}
              </span>
              <div className="whitespace-nowrap">
                <p className="text-[13px] font-semibold">{n.text}</p>
                <p className="text-[11px] text-on-navy-muted">
                  {n.roles} · {n.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
