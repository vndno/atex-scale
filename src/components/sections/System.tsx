import { existsSync } from "fs";
import path from "path";
import { site } from "@/content/site";
import { Heading, Avatar } from "@/components/ui";
import { Icon } from "@/components/icons";

const hasFile = (src: string) => existsSync(path.join(process.cwd(), "public", src));

// Positionen der Netzwerk-Kacheln auf einer Ellipse um die Mitte (in % der Grafikfläche)
const ORBIT = Array.from({ length: 8 }, (_, i) => {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 8;
  return { left: 50 + 40 * Math.cos(angle), top: 44 + 30 * Math.sin(angle) };
});

function CardShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-col rounded-xl border border-line-soft bg-surface-2 p-6 ${className}`}>{children}</div>;
}

export function System() {
  const s = site.system;
  const c = s.cards;
  return (
    <section id="system" className="section-y bg-white">
      <div className="container-x">
        <Heading eyebrow={s.eyebrow} bold={s.headlineBold} light={s.headlineLight} />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Karte 1: Vorqualifizierung */}
          <CardShell>
            <h3 className="text-[18px] font-semibold text-ink">{c.prequal.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">{c.prequal.text}</p>
            <div className="mt-5 rounded-md border border-line-soft bg-white">
              <p className="border-b border-line-soft px-4 py-3 text-[14px] font-semibold text-ink">{c.prequal.listTitle}</p>
              <ul className="p-2">
                {c.prequal.candidates.map((k, i) => (
                  <li key={k.role} className={`flex items-center justify-between rounded-sm px-2 py-2 ${k.ok ? "bg-accent/10" : ""}`}>
                    <div className="flex items-center gap-2.5">
                      <span className={`grid size-4 place-items-center rounded-full ${k.ok ? "text-ink" : "bg-danger-ink text-white"}`}>
                        {k.ok ? <Icon.check className="size-3.5" strokeWidth={3} /> : <Icon.x className="size-2.5" strokeWidth={3} />}
                      </span>
                      {hasFile(k.image) ? (
                        <img src={k.image} alt="" width={28} height={28} className="size-7 shrink-0 rounded-sm object-cover" />
                      ) : (
                        <Avatar size={28} seed={i + 2} className="rounded-sm!" />
                      )}
                      <span className="text-[14px] font-semibold text-ink">{k.role}</span>
                    </div>
                    <span className="rounded-sm bg-chip px-2 py-0.5 text-[11px] font-medium text-muted-2">{c.prequal.badge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardShell>

          {/* Karte 2: KI-Agent */}
          <CardShell>
            <h3 className="text-[18px] font-semibold text-ink">{c.agent.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">{c.agent.text}</p>
            {/* Ebenen-Komposition: Foto, blauer Rahmen hinter der Person (wächst bei Hover), Person, Schild */}
            <div className="group relative mt-5 h-[240px] overflow-hidden rounded-lg bg-surface-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.agent.background} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div
                aria-hidden
                className="absolute rounded-[10px] border-[2px] border-accent transition-transform duration-500 ease-out group-hover:scale-[1.07] motion-reduce:transition-none"
                style={{
                  left: `${c.agent.frame.left}%`,
                  top: `${c.agent.frame.top}%`,
                  width: `${c.agent.frame.width}%`,
                  height: `${c.agent.frame.height}%`,
                  backgroundImage: "linear-gradient(180deg, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0) 60%)",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.agent.person} alt="Beraterin im Gespräch" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute bottom-3 right-3 rounded-md bg-white/92 px-3.5 py-2.5 shadow-soft">
                <p className="text-[14px] font-bold text-ink">{c.agent.overlayTitle}</p>
                <p className="text-[11px] text-muted">{c.agent.overlaySub}</p>
              </div>
            </div>
          </CardShell>

          {/* Karte 3: Multi-Channel */}
          <CardShell className="overflow-hidden">
            <h3 className="text-[18px] font-semibold text-ink">{c.channels.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">{c.channels.text}</p>
            <div
              className="relative mt-5 min-h-[240px] flex-1 overflow-hidden rounded-lg"
              style={{ backgroundImage: "radial-gradient(circle, #d6dce5 1px, transparent 1.2px)", backgroundSize: "28px 28px" }}
            >
              {/* Wellen: die Stelle „sendet“ in alle Kanäle */}
              {[0, 1, 2].map((r) => (
                <span
                  key={r}
                  className="pointer-events-none absolute left-1/2 top-[44%] aspect-square h-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent/40 animate-ring motion-reduce:hidden"
                  style={{ animationDelay: `${r * 1.1}s` }}
                  aria-hidden
                />
              ))}

              {/* Mitte: Ihre Stelle */}
              <div className="absolute left-1/2 top-[44%] z-10 w-[34%] min-w-[96px] max-w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-line-soft bg-white p-2.5 text-center shadow-card">
                <span className="mx-auto grid size-7 place-items-center rounded-full bg-accent text-white">
                  <Icon.globe className="size-3.5" />
                </span>
                <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-3">{c.channels.center.label}</p>
                <p className="truncate text-[11px] font-semibold text-ink">{c.channels.center.role}</p>
                <p className="mt-0.5 flex items-center justify-center gap-1 truncate text-[10px] font-medium text-success-ink"><span className="size-1.5 shrink-0 rounded-full bg-success" />{c.channels.rankNote}</p>
              </div>

              {/* Netzwerke mit #1-Badge */}
              {c.channels.networks.map((n, i) => (
                <div
                  key={n.name}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 animate-pop"
                  style={{ left: `${ORBIT[i].left}%`, top: `${ORBIT[i].top}%`, animationDelay: `${150 + i * 90}ms` }}
                  title={n.name}
                >
                  <div
                    className="grid size-11 place-items-center rounded-lg bg-white shadow-soft ring-1 ring-line-soft"
                    style={"bg" in n && n.bg ? { background: n.bg } : undefined}
                  >
                    {n.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={n.logo} alt={n.name} width={22} height={22} className="size-[22px]" />
                    ) : (
                      <span className="text-[17px] font-bold leading-none text-white">{"text" in n ? n.text : null}</span>
                    )}
                  </div>
                  <span className="absolute -right-1.5 -top-1.5 rounded-full bg-navy px-1.5 py-0.5 text-[9px] font-bold leading-none text-white shadow-soft">
                    {c.channels.rank}
                  </span>
                </div>
              ))}

              <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-navy px-3.5 py-1.5 text-[12px] font-semibold text-white shadow-soft">
                <Icon.globe className="size-3.5" />
                {c.channels.chip}
              </div>
            </div>
          </CardShell>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {s.wide.map((w) => (
            <CardShell key={w.title} className="py-7">
              <h3 className="text-[18px] font-semibold text-ink">{w.title}</h3>
              <p className="mt-1.5 text-[14px] text-muted">{w.text}</p>
            </CardShell>
          ))}
        </div>
      </div>
    </section>
  );
}
