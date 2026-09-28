import { site } from "@/content/site";
import { Button, Heading } from "@/components/ui";
import { Icon } from "@/components/icons";
import { ScaleToFit } from "@/components/ScaleToFit";

/**
 * 08 · Kampagnen aus der Praxis: links Text, drei Merkmale, Button und Hinweis,
 * rechts zwei Handys mit Beispielmotiven (Video-Anzeige, Social-Anzeige), das rechte etwas höher.
 * Die Handys sind reine Bausteine aus HTML/CSS mit Fotos aus /public/images/hero.
 */
export function Showcase() {
  const s = site.showcase;
  return (
    <section id="kampagnen" className="relative overflow-hidden border-t border-line-soft bg-[#fbfaf8] py-16 lg:py-[5.5rem]">
      {/* Linienraster + orange getönter Schein hinter den Handys */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(18,28,41,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(18,28,41,0.045) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(45% 60% at 75% 50%, rgba(242,106,74,0.13) 0%, rgba(242,106,74,0) 100%)" }} />
      </div>

      <div className="container-x relative grid items-center gap-12 *:min-w-0 lg:grid-cols-[1fr_540px] lg:gap-16">
        <div>
          <p className="eyebrow">{s.eyebrow}</p>
          <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-line-soft bg-white px-3 py-2.5 shadow-soft">
            <span className="grid size-9 place-items-center rounded-lg bg-accent/10 text-accent">
              <Icon.megaphone className="size-[18px]" />
            </span>
            <span>
              <span className="block text-[14px] font-semibold text-ink">{s.badge.title}</span>
              <span className="block text-[12px] text-muted">{s.badge.sub}</span>
            </span>
          </div>
          <Heading bold={s.headlineBold} light={s.headlineLight} className="mt-6" />
          <p className="mt-6 max-w-[600px] text-[16px] leading-[1.6] text-muted-2">{s.text}</p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {s.chips.map((c) => {
              const I = Icon[c.icon];
              return (
                <li key={c.label} className="flex items-center gap-2 rounded-lg border border-line-soft bg-white px-3 py-2 text-[13px] font-semibold text-ink">
                  <I className="size-4 text-accent" />
                  {c.label}
                </li>
              );
            })}
          </ul>
          <Button href={site.contact.bookingHref} className="mt-8">
            {s.cta}
          </Button>
          <p className="mt-6 flex max-w-[560px] items-start gap-2.5 rounded-lg border border-line-soft bg-white/80 px-4 py-3 text-[13px] leading-snug text-muted">
            <Icon.shield className="mt-0.5 size-4 shrink-0 text-accent" />
            {s.note}
          </p>
        </div>

        <div>
          {/* Handys: unter 520 px Breite als Ganzes verkleinert (wie ein Bild) */}
          <ScaleToFit base={520}>
            <div className="flex items-start justify-center gap-6 pb-6 pt-10">
              <VideoPhone />
              <div className="-mt-10">
                <SocialPhone />
              </div>
            </div>
          </ScaleToFit>
          <p className="text-center text-[12px] text-muted-3">{s.caption}</p>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[238px] rounded-[38px] bg-navy p-[9px] shadow-card">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[30px] bg-white">
        {/* Kamera-Aussparung */}
        <span className="absolute left-1/2 top-2 z-20 h-[18px] w-[70px] -translate-x-1/2 rounded-full bg-navy" aria-hidden />
        {children}
      </div>
    </div>
  );
}

function Caption({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="relative z-10 mx-3 -mt-9 flex items-center gap-2.5 rounded-xl border border-line-soft bg-white px-3 py-2.5 shadow-soft">
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent text-[11px] font-bold text-white">AS</span>
      <span className="min-w-0">
        <span className="block truncate text-[12px] font-semibold text-ink">{title}</span>
        <span className="block truncate text-[11px] text-muted">{sub}</span>
      </span>
    </div>
  );
}

function VideoPhone() {
  const v = site.showcase.video;
  return (
    <div>
      <PhoneFrame>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={v.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,23,33,0.25)_0%,rgba(14,23,33,0)_35%,rgba(14,23,33,0.8)_100%)]" />
        <div className="absolute left-3 top-9 z-10 flex flex-col items-start gap-1.5">
          <span className="flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-white">
            <Icon.play className="size-3" />
            {v.tag}
          </span>
          <span className="rounded-full bg-success px-2.5 py-1 text-[10px] font-semibold text-white">{v.extra}</span>
        </div>
        <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-card">
          <Icon.play className="ml-0.5 size-6" />
        </span>
        <div className="absolute inset-x-4 bottom-14 text-white">
          <p className="text-[20px] font-bold leading-tight">{v.title}</p>
          <p className="mt-1 text-[12px] text-white/80">{v.sub}</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
              <span className="block h-full w-1/3 rounded-full bg-accent" />
            </span>
            <span className="text-[10px] text-white/80">{v.duration}</span>
          </div>
        </div>
      </PhoneFrame>
      <Caption title={v.caption.title} sub={v.caption.sub} />
    </div>
  );
}

function SocialPhone() {
  const s = site.showcase.social;
  return (
    <div>
      <PhoneFrame>
        <div className="flex h-full flex-col pt-9">
          <div className="flex items-center gap-2 px-3 pb-2.5">
            <span className="grid size-7 place-items-center rounded-full bg-accent/15 text-[10px] font-bold text-accent-strong">IB</span>
            <span className="min-w-0">
              <span className="block text-[12px] font-semibold leading-tight text-ink">{s.account}</span>
              <span className="block text-[10px] leading-tight text-muted">{s.sponsored}</span>
            </span>
            <span className="ml-auto text-[14px] leading-none text-muted" aria-hidden>
              ···
            </span>
          </div>
          <div className="relative aspect-square w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-ink">{s.tag}</span>
          </div>
          <div className="flex items-center justify-between bg-accent px-3 py-2 text-[12px] font-semibold text-white">
            {s.button}
            <span aria-hidden>›</span>
          </div>
          <div className="flex gap-3 px-3 pt-2.5 text-ink">
            <Icon.heart className="size-[18px]" />
            <Icon.message className="size-[18px]" />
            <Icon.send className="size-[18px]" />
          </div>
          <div className="px-3 pt-2">
            <p className="text-[13px] font-semibold leading-snug text-ink">{s.headline}</p>
            <p className="mt-0.5 text-[11px] leading-snug text-muted">{s.body}</p>
          </div>
        </div>
      </PhoneFrame>
      <Caption title={s.caption.title} sub={s.caption.sub} />
    </div>
  );
}
