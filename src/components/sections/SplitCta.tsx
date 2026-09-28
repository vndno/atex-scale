import { existsSync } from "fs";
import path from "path";
import { site } from "@/content/site";

/** Datei in /public vorhanden? Wird beim Build geprüft – fehlt sie, bleibt der Platzhalter. */
const hasFile = (src: string) => existsSync(path.join(process.cwd(), "public", src));
import { Button, Heading, Photo, Avatar } from "@/components/ui";
import { Icon } from "@/components/icons";

/* Gemeinsames Layout für Förder-Check und Garantie-Sektion:
   Text links, Bildkarte mit Status-Badge rechts (oder gespiegelt). */
function CheckBadge({
  top,
  title,
  status,
  position = "bottom",
  avatar = true,
  tone = "white",
  checkFirst = false,
}: {
  top: string;
  title: string;
  status: string;
  position?: "top" | "bottom";
  avatar?: boolean;
  tone?: "white" | "green";
  checkFirst?: boolean;
}) {
  const check = (
    <span className="grid size-[34px] shrink-0 place-items-center rounded-full border-2 border-success text-success">
      <Icon.check className="size-4" strokeWidth={3} />
    </span>
  );
  return (
    <div
      className={`absolute flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-4 shadow-soft ${
        position === "top" ? "left-4 top-4 gap-x-8" : "inset-x-4 bottom-4"
      } ${tone === "green" ? "border-2 border-success bg-[#eef8f2]/95" : "bg-white/95"}`}
    >
      <div className="flex items-center gap-3">
        {checkFirst && check}
        {avatar && <Avatar size={40} seed={4} />}
        <div>
          <p className={`text-[13px] ${tone === "green" ? "text-success-ink/80" : "text-[#7e7e7e]"}`}>{top}</p>
          <p className="text-[18px] font-bold leading-tight text-[#1a1a1c]">{title}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-[16px] font-semibold text-[#1a1a1c]">
          <span className="size-2 rounded-full bg-success" />
          {status}
        </span>
        {!checkFirst && check}
      </div>
    </div>
  );
}

export function BafaCta() {
  const b = site.bafa;
  return (
    <section className="section-y bg-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_531px] lg:gap-[72px]">
        <div>
          <Heading eyebrow={b.eyebrow} bold={b.headlineBold} light={b.headlineLight} boldEnd={b.headlineBoldEnd} />
          <p className="mt-6 text-[15px] leading-relaxed text-muted">{b.text}</p>
          <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
            <div>
              <Button href={site.contact.bookingHref}>{b.cta}</Button>
              <p className="mt-4 text-[13px] text-muted">{b.ctaNote}</p>
            </div>
            {hasFile(b.badgeLogo.src) ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={b.badgeLogo.src} alt={b.badgeLogo.alt} width={120} height={120} className="size-[120px] shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)]" />
            ) : (
              <div className="grid size-[120px] place-items-center rounded-full border border-dashed border-line text-center text-[11px] text-muted-3">BAFA-Siegel</div>
            )}
          </div>
        </div>
        <div className="relative h-[352px]">
          {hasFile(b.image.src) ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={b.image.src} alt={b.image.alt} className="h-full w-full rounded-2xl object-cover shadow-card" />
          ) : (
            <Photo src={b.image.src} alt={b.image.alt} className="h-full w-full rounded-2xl shadow-card" label="Foto" />
          )}
          <CheckBadge top={b.badge.top} title={b.badge.title} status={b.badge.status} position={b.badge.position} avatar={b.badge.avatar} tone={b.badge.tone} checkFirst={b.badge.checkFirst} />
        </div>
      </div>
    </section>
  );
}

export function GuaranteeCta() {
  const g = site.guarantee;
  // Rahmen, Freisteller und Beschnitt kommen aus dem passenden Hero-Slide (gleiches Foto)
  const slide = site.hero.slides.find((sl) => sl.image === g.image);
  return (
    <section id="ueber-uns" className="section-y bg-surface">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[531px_1fr] lg:gap-[72px]">
        {/* Motiv wie im Hero: Foto → blauer Rahmen → freigestellte Person (nur der freigegebene Teil vor dem Rahmen) */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-surface-3 shadow-card">
          {hasFile(g.image) ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={g.image} alt="Schweißerin aus dem Talentpool, Stelle als garantiefähig geprüft" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <Photo src={g.image} alt="Betrieb aus dem Hero" className="absolute inset-0 h-full w-full" tone="dark" label="Foto / Video" />
          )}
          {slide && (
            <div
              className="pointer-events-none absolute z-10 rounded-lg border-2"
              style={{ left: `${slide.frame.left}%`, top: `${slide.frame.top}%`, width: `${slide.frame.width}%`, height: `${slide.frame.height}%`, borderColor: site.hero.status.garantie.color }}
            />
          )}
          {slide && hasFile(slide.person) && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.person}
              alt=""
              className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover"
              style={"personClip" in slide && slide.personClip ? { clipPath: `inset(${slide.personClip.top}% 0 ${100 - slide.personClip.top - slide.personClip.height}% 0)` } : undefined}
            />
          )}
          <div className="absolute left-4 top-4 z-30 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-ink shadow-soft">
            <span className="size-2 rounded-full" style={{ background: site.hero.status.garantie.color }} />
            {g.videoLabel}
          </div>
        </div>
        <div>
          <Heading eyebrow={g.eyebrow} bold={g.headlineBold} light={g.headlineLight} boldEnd={g.headlineBoldEnd} />
          <p className="mt-6 text-[15px] leading-relaxed text-muted">{g.text}</p>
          <div className="mt-8">
            <Button href={site.contact.bookingHref}>{g.cta}</Button>
            <p className="mt-4 text-[13px] text-muted">{g.ctaNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
