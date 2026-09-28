import { site } from "@/content/site";
import { Button, Heading } from "@/components/ui";
import { Icon } from "@/components/icons";

/**
 * 06 · Privat- und Geschäftskunden: links Text und zwei Karten (B2C orange getönt, B2B neutral),
 * rechts eine Foto-Karte zum Erstgespräch mit Ansprechpartner.
 */
const groupTones = {
  accent: { card: "border-accent/30 bg-[#fff6f3]", tag: "text-accent-strong", dot: "bg-accent" },
  navy: { card: "border-line-soft bg-surface-2", tag: "text-ink", dot: "bg-navy" },
} as const;

export function Audiences() {
  const a = site.audiences;
  const m = a.media;
  return (
    <section id="branchen" className="section-y bg-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_540px]">
        <div>
          <Heading eyebrow={a.eyebrow} bold={a.headlineBold} light={a.headlineLight} />
          <p className="mt-6 max-w-[620px] text-[16px] leading-[1.6] text-muted-2">{a.text}</p>
          <p className="mt-4 max-w-[620px] text-[15px] leading-[1.6] text-muted">{a.text2}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {a.groups.map((g) => {
              const t = groupTones[g.tone];
              return (
                <div key={g.tag} className={`rounded-xl border p-5 ${t.card}`}>
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.08em] ${t.tag}`}>{g.tag}</p>
                  <p className="mt-1.5 text-[16px] font-semibold leading-snug text-ink">{g.title}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{g.text}</p>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-[13px] text-ink">
                        <span className={`size-1.5 shrink-0 rounded-full ${t.dot}`} aria-hidden />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Foto-Karte: Erstgespräch */}
        <div className="overflow-hidden rounded-2xl border border-line-soft bg-white shadow-card">
          <div className="relative aspect-[16/11]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.image} alt={m.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-ink shadow-soft">
              <Icon.phone className="size-3.5 text-accent" />
              {m.label}
            </span>
          </div>
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.person.image} alt={m.person.name} width={44} height={44} className="size-11 rounded-full object-cover" />
              <div>
                <p className="text-[15px] font-semibold text-ink">{m.person.name}</p>
                <p className="text-[12px] text-muted">{m.person.role}</p>
              </div>
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-muted-2">{m.text}</p>
            <Button href={m.cta.href} variant="outline" size="sm" className="mt-5">
              {m.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
