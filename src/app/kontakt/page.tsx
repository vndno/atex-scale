import type { Metadata } from "next";
import { site } from "@/content/site";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Heading } from "@/components/ui";
import { Icon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Kontakt – Atex Scale",
  description: "Wie viel Nachfrage steckt in Ihrer Region? Anfrage senden oder direkt einen Termin buchen. Ehrliche Einschätzung innerhalb eines Werktags.",
  alternates: { canonical: "/kontakt" },
  openGraph: { title: "Kontakt – Atex Scale", description: "Anfrage senden oder direkt einen Termin buchen.", url: "/kontakt" },
};

/** /kontakt – klassische Kontaktseite: Formular links, Calendly-Kalender rechts. ?date=YYYY-MM-DD wählt den Tag vor. */
export default async function KontaktPage({ searchParams }: { searchParams: Promise<{ date?: string }> }) {
  const { date } = await searchParams;
  const k = site.contactPage;
  const c = site.contact;
  return (
    <>
      <Navbar />
      <main className="section-y bg-surface">
        <div className="container-x">
          <div className="max-w-[760px]">
            <Heading eyebrow={k.eyebrow} bold={k.headlineBold} light={k.headlineLight} as="h1" />
            <p className="mt-6 text-[16px] leading-[1.6] text-muted-2">{k.text}</p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-ink">
              <li className="flex items-center gap-2">
                <Icon.phone className="size-4 text-accent" />
                <a href={c.phoneHref} className="hover:text-accent">{c.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">@</span>
                <a href={`mailto:${c.email}`} className="hover:text-accent">{c.email}</a>
              </li>
              <li className="flex items-center gap-2 text-muted">
                <Icon.building className="size-4 text-accent" />
                {c.company} · {c.street} · {c.city}
              </li>
            </ul>
          </div>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,460px)_1fr] lg:gap-12">
            <section className="rounded-2xl border border-line-soft bg-white p-6 shadow-soft sm:p-8">
              <h2 className="text-[22px] font-semibold text-ink">{k.formTitle}</h2>
              <p className="mt-1.5 text-[14px] text-muted">{site.cta.text}</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </section>

            <section id="termin" className="rounded-2xl border border-line-soft bg-white p-4 shadow-soft sm:p-6">
              <div className="px-2 pt-2">
                <h2 className="text-[22px] font-semibold text-ink">{k.calendarTitle}</h2>
                <p className="mt-1.5 text-[14px] text-muted">{k.calendarText}</p>
              </div>
              <CalendlyEmbed url={c.calendly.url} date={date} primaryColor={c.calendly.primaryColor} className="mt-2" />
              <p className="px-2 pb-2 text-[13px] text-muted">
                {k.calendarFallback}{" "}
                <a href={c.calendly.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                  {c.calendly.url.replace("https://", "")}
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
