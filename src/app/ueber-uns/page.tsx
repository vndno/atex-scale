import type { Metadata } from "next";
import { site } from "@/content/site";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui";
import { Icon } from "@/components/icons";

const a = site.about;

export const metadata: Metadata = {
  title: a.meta.title,
  description: a.meta.description,
  alternates: { canonical: "/ueber-uns" },
  openGraph: { title: a.meta.title, description: a.meta.description, url: "/ueber-uns" },
};

/**
 * /ueber-uns – umgesetzt nach dem Figma-Frame "Über uns – Desktop":
 * dunkles Intro mit Kennzahlen → Gebäudefoto → Geschichte → Team → Firmengruppe (dunkel)
 */
export default function UeberUnsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Intro + Kennzahlen (dunkel, blauer Verlauf oben rechts) */}
        <section
          className="text-white"
          style={{ backgroundImage: "linear-gradient(14deg, rgba(59,130,246,0) 62%, rgba(59,130,246,0.14) 100%), linear-gradient(90deg, #0e1721, #0e1721)" }}
        >
          <div className="container-x pt-16 lg:pt-24">
            <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <h1 className="h-display max-w-[14ch] text-[#f1f1f1]">{a.hero.headline}</h1>
              <div className="lg:pt-2">
                <p className="text-[16px] leading-[1.7] text-[#e0e1e3]">{a.hero.text}</p>
                <div className="mt-6">
                  <Button href={site.contact.bookingHref} variant="light">{a.hero.cta}</Button>
                </div>
              </div>
            </div>
            <dl className="mt-14 grid gap-8 border-t border-white/20 pt-10 sm:grid-cols-3">
              {a.hero.stats.map((st) => (
                <div key={st.label}>
                  <dt className="text-[clamp(2.25rem,3.6vw,3rem)] font-bold leading-none text-white">{st.value}</dt>
                  <dd className="mt-2 text-[14px] text-on-navy-muted">{st.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          {/* Gebäudefoto in voller Breite: Gebäude ragt aus dem hellen Rahmen in die dunkle Fläche (Bild bringt den Navy-Himmel mit) */}
          <div className="mt-20 bg-navy">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.photo.src} alt={a.photo.alt} width={1920} height={984} className="block h-auto w-full" />
          </div>
        </section>

        {/* Geschichte */}
        <section className="section-y bg-white">
          <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 className="h-section max-w-[16ch] text-ink">{a.story.headline}</h2>
            <div className="flex flex-col gap-5 text-[16px] leading-[1.7] text-muted-2">
              {a.story.paragraphs.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        {/* Einblicke ins Büro */}
        <section className="section-y bg-white pt-0">
          <div className="container-x">
            <h2 className="h-section max-w-[20ch] text-ink">{a.gallery.headline}</h2>
            <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
              {a.gallery.images.map((img) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-square w-full rounded-xl object-cover"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section-y border-t border-line-soft bg-surface">
          <div className="container-x">
            <div className="max-w-[640px]">
              <h2 className="h-section text-ink">{a.team.headline}</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-muted-2">{a.team.text}</p>
            </div>
            <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
              {a.team.members.map((m) => (
                <li key={m.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.image} alt={`${m.name}, ${m.role} bei Atex Scale`} loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />
                  <p className="mt-4 text-[17px] font-semibold text-ink">{m.name}</p>
                  <p className="mt-0.5 text-[14px] text-muted">{m.role}</p>
                </li>
              ))}
              {/* Karte "Wir suchen weitere Mitarbeiter": Gebäudefoto, weiß aufgehellt, blauer Verlauf */}
              <li>
                <a
                  href={a.team.hiring.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-xl border border-dashed border-line p-6"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.team.hiring.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <span
                    aria-hidden
                    className="absolute inset-0"
                    style={{ backgroundImage: "linear-gradient(33deg, rgba(59,130,246,0) 40%, rgba(59,130,246,0.5) 100%), linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.8))" }}
                  />
                  <span className="relative text-[17px] font-semibold text-ink">{a.team.hiring.title}</span>
                  <span className="relative mt-2 text-[15px] font-semibold text-accent group-hover:underline">{a.team.hiring.cta} →</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Firmengruppe (dunkel, grüner Verlauf unten rechts) */}
        <section
          className="relative isolate overflow-hidden bg-navy-2 text-white"
        >
          {/* Gebäudefoto als Hintergrund, davor ein Verlauf von links nach rechts */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={a.group.image.src}
            alt={a.group.image.alt}
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #121c29 0%, rgba(18,28,41,0.96) 34%, rgba(18,28,41,0.72) 58%, rgba(18,28,41,0.25) 100%)",
            }}
          />
          <div className="container-x section-y">
            <div className="max-w-[560px]">
              <h2 className="h-section max-w-[18ch] text-[#f9f9f9]">{a.group.headline}</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[#e0e0e0]">{a.group.text}</p>
              <p className="mt-6 flex items-center gap-1.5 text-[15px] font-semibold text-white">
                <Icon.pin className="size-4 text-accent" />
                {a.group.city}
                <span className="font-normal text-on-navy-muted">
                  · {site.contact.street}, {site.contact.city}
                </span>
              </p>
              <a
                href={a.group.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-[#f1f1f1] px-[26px] py-[14px] text-[15px] font-semibold text-[#0c0c0c] transition-all duration-200 hover:-translate-y-px hover:bg-white"
              >
                <Icon.externalLink className="size-5" />
                {a.group.cta}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
