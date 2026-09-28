import { site } from "@/content/site";
import { Icon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";

/**
 * Schluss (dunkel): links Überzeile, Versprechen, Text und drei Punkte,
 * rechts das Kontaktformular (dieselbe Komponente wie im Modal) in einer weißen Karte
 * mit Telefon, E-Mail und WhatsApp darunter.
 */
export function FinalCta() {
  const f = site.finalCta;
  const c = site.contact;
  return (
    <section id="kontakt" className="relative overflow-hidden bg-navy-2 py-16 text-white lg:py-24">
      {/* Punktraster + orange getönter Schein oben links */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.045]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1.2px)", backgroundSize: "28px 28px" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(50% 60% at 15% 20%, rgba(242,106,74,0.16) 0%, rgba(242,106,74,0) 100%)" }} />
      </div>

      <div className="container-x relative grid items-center gap-12 *:min-w-0 lg:grid-cols-[1fr_480px] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            {f.eyebrow}
          </p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.01em]">
            {f.headlineBold} <span className="h-light">{f.headlineLight}</span>
          </h2>
          <p className="mt-6 max-w-[620px] text-[16px] leading-[1.65] text-on-navy-muted">{f.text}</p>
          <ul className="mt-8 flex flex-col gap-4">
            {f.bullets.map((b) => {
              const I = Icon[b.icon];
              return (
                <li key={b.title} className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-navy-card text-accent">
                    <I className="size-[18px]" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold">{b.title}</span>
                    <span className="block text-[13px] text-on-navy-muted">{b.text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Formular-Karte */}
        <div className="rounded-2xl bg-white p-6 text-ink shadow-card sm:p-8">
          <p className="text-[24px] leading-none tracking-[-0.01em]">
            <span className="font-bold text-ink-soft">{site.brand.name}</span>
            <span className="font-light text-accent">{site.brand.nameAccent}</span>
          </p>
          <h3 className="mt-5 text-[22px] font-semibold leading-tight">{f.formTitle}</h3>
          <p className="mt-1.5 text-[14px] text-muted">{f.formText}</p>
          <div className="mt-6">
            <ContactForm />
          </div>
          <div className="mt-6 flex flex-col gap-2 border-t border-line-soft pt-5 text-[14px]">
            <a href={c.phoneHref} className="flex items-center gap-2.5 text-muted-2 hover:text-ink">
              <Icon.phone className="size-4 text-accent" />
              {c.phone}
            </a>
            <a href={`mailto:${c.email}`} className="flex items-center gap-2.5 text-muted-2 hover:text-ink">
              <Icon.message className="size-4 text-accent" />
              {c.email}
            </a>
            <a href={c.whatsapp.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-muted-2 hover:text-ink">
              <Icon.whatsapp className="size-4 text-success" />
              {c.whatsapp.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
