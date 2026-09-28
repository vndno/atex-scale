import { site } from "@/content/site";
import { Button, Heading } from "@/components/ui";
import { Icon } from "@/components/icons";

/**
 * 01 · Der Engpass: drei Karten mit je einer kleinen Grafik oben (Säulen, Nachrichten, Dienstleister-Kette),
 * darunter ein dunkles Fazit-Band mit Button.
 */
export function Problem() {
  const p = site.problem;
  return (
    <section id="engpass" className="section-y bg-white">
      <div className="container-x">
        <Heading eyebrow={p.eyebrow} bold={p.headlineBold} light={p.headlineLight} className="max-w-[760px]" />

        <div className="mt-12 grid gap-5 *:min-w-0 lg:grid-cols-3">
          <Card title={p.referrals.title} text={p.referrals.text}>
            <ReferralChart />
          </Card>
          <Card title={p.fit.title} text={p.fit.text}>
            <Messages />
          </Card>
          <Card title={p.tools.title} text={p.tools.text}>
            <ToolChain />
          </Card>
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-2xl bg-navy px-6 py-6 text-white sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[760px] text-[16px] leading-relaxed text-on-navy-muted">
            {p.banner.before} <span className="font-semibold text-accent">{p.banner.highlight}</span>
            {p.banner.after}
          </p>
          <Button href={site.contact.bookingHref} variant="light" className="self-start md:self-auto">
            {p.banner.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

function Card({ title, text, children }: { title: string; text: string; children: React.ReactNode }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line-soft bg-surface-2 p-5 sm:p-6">
      {/* Grafikfläche: feste Höhe, damit alle drei Karten gleich aufgebaut sind */}
      <div className="flex h-[180px] flex-col justify-center overflow-hidden rounded-xl bg-white p-4 shadow-soft">{children}</div>
      <h3 className="mt-6 text-[19px] font-semibold leading-snug text-ink">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-muted">{text}</p>
    </article>
  );
}

/* Karte 1: Säulen je Monat, ein Monat fast leer (orange) */
function ReferralChart() {
  const r = site.problem.referrals;
  const max = Math.max(...r.values);
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-semibold text-muted-2">{r.chartLabel}</p>
        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent-strong">{r.lowNote}</span>
      </div>
      <div className="mt-3 flex flex-1 items-end gap-3">
        {r.values.map((v, i) => (
          <div key={r.months[i]} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
            <span
              className={`w-full max-w-[34px] rounded-t-md ${i === r.lowIndex ? "bg-accent" : "bg-line-soft"}`}
              style={{ height: `${Math.max((v / max) * 100, 7)}%` }}
            />
            <span className={`text-[11px] ${i === r.lowIndex ? "font-semibold text-accent-strong" : "text-muted-3"}`}>{r.months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Karte 2: zwei eingehende Nachrichten mit rotem Status */
function Messages() {
  const f = site.problem.fit;
  return (
    <ul className="flex flex-col gap-3">
      {f.messages.map((m, i) => (
        <li key={m.text} className={`flex items-start gap-2.5 ${i % 2 ? "pl-6" : "pr-6"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={m.image} alt="" width={28} height={28} className="mt-0.5 size-7 shrink-0 rounded-full object-cover" />
          <div className="min-w-0 rounded-xl rounded-tl-sm bg-surface-3 px-3 py-2">
            <p className="text-[13px] leading-snug text-ink">„{m.text}“</p>
            <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-danger-bg px-2 py-0.5 text-[10px] font-semibold text-danger-ink">
              <Icon.x className="size-2.5" strokeWidth={3} />
              {m.tag}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* Karte 3: Dienstleister-Kette, zwei Übergaben reißen ab */
function ToolChain() {
  const t = site.problem.tools;
  return (
    <div className="flex flex-col gap-2.5">
      {t.links.map((l) => (
        <div key={l.from} className="flex items-center gap-2 text-[12px] font-medium text-ink">
          <span className="shrink-0 rounded-md border border-line-soft bg-surface-2 px-2 py-1">{l.from}</span>
          <span className="relative flex flex-1 items-center">
            <span className={`h-0 w-full border-t-2 ${l.broken ? "border-dashed border-[#f3a5a5]" : "border-line-soft"}`} />
            {l.broken && (
              <span className="absolute left-1/2 grid size-4 -translate-x-1/2 place-items-center rounded-full bg-danger-bg text-danger-ink">
                <Icon.x className="size-2.5" strokeWidth={3} />
              </span>
            )}
          </span>
          <span className="shrink-0 rounded-md border border-line-soft bg-surface-2 px-2 py-1">{l.to}</span>
        </div>
      ))}
      <p className="mt-1 flex items-center gap-1.5 text-[12px] font-semibold text-danger-ink">
        <span className="size-1.5 rounded-full bg-[#e5484d]" aria-hidden />
        {t.alert}
      </p>
    </div>
  );
}
