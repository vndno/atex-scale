import { site } from "@/content/site";
import { Heading } from "@/components/ui";
import { PoolAvatars } from "@/components/sections/PoolAvatars";
import { getProfileImages } from "@/lib/profiles";
import { Icon } from "@/components/icons";

/**
 * "Neun Quellen. Ein geprüfter Pool.": Quellen → Talentpool → Ihre offene Stelle.
 *
 * Desktop (≥ lg): Diagramm auf einer festen Zeichenfläche (VIEW_W × VIEW_H). Die
 * Verbindungslinien liegen als SVG im selben Koordinatensystem darunter, die Karten sitzen
 * als HTML per Prozentwerten darüber. Je Quelle eine Kurve mit wanderndem Punkt
 * (SVG animateMotion); bei prefers-reduced-motion werden die Punkte ausgeblendet.
 * Mobil: gestapelt ohne Kurven.
 */
const VIEW_W = 1200;
const VIEW_H = 800;

// Einzelne Quell-Kärtchen links: gemeinsame rechte Kante, gleichmäßig verteilt
const PILL_RIGHT = 350;
const ROW_TOP = 60;
const ROW_GAP = 85;
// Pool als hochkant stehende Karte in der Mitte
const POOL = { left: 490, top: 210, width: 240, height: 380 };
const RESULT_LEFT = 860;
const CURVE_PULL = 90;
const DOT_BASE_S = 5.4;
const DOT_STEP_S = 0.5;

const rd = (n: number) => Math.round(n * 10) / 10;
const pctX = (x: number) => `${(x / VIEW_W) * 100}%`;
const pctY = (y: number) => `${(y / VIEW_H) * 100}%`;

function channelCurve(i: number, count: number) {
  const start = { x: PILL_RIGHT, y: ROW_TOP + i * ROW_GAP };
  // Ankunft am Pool: gleichmäßig über die linke Kante verteilt (mit Rand oben/unten)
  const t = (i + 1) / (count + 1);
  const end = { x: POOL.left, y: POOL.top + 40 + (POOL.height - 80) * t };
  return { start, d: `M${rd(start.x)} ${rd(start.y)} C${rd(start.x + CURVE_PULL)} ${rd(start.y)}, ${rd(end.x - CURVE_PULL)} ${rd(end.y)}, ${rd(end.x)} ${rd(end.y)}` };
}

export function Model() {
  const m = site.model;
  // Gruppen zu einer flachen Liste einzelner Quellen (own = eigene Quelle, blau)
  const channels = m.groups.flatMap((g) => g.channels.map((c) => ({ ...c, own: g.own })));
  const poolMidY = POOL.top + POOL.height / 2;
  const arrowPath = `M${POOL.left + POOL.width} ${poolMidY} H${RESULT_LEFT - 12}`;

  return (
    <section id="modell" className="section-y bg-surface">
      <div className="container-x">
        <div className="max-w-[760px]">
          <Heading eyebrow={m.eyebrow} bold={m.headlineBold} light={m.headlineLight} />
          <p className="mt-6 text-[16px] leading-[1.6] text-muted-2">{m.text}</p>
        </div>

        {/* ------------------------------------------------ Desktop-Diagramm */}
        <div className="relative mt-14 hidden aspect-[1200/800] w-full lg:block">
          <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} fill="none" aria-hidden>
            {channels.map((ch, i) => {
              const { d } = channelCurve(i, channels.length);
              return (
                <g key={ch.name}>
                  <path d={d} stroke={ch.own ? "#f9b8a5" : "#d3dae3"} strokeWidth={2} />
                  <circle r={5} fill="#f26a4a" className="motion-reduce:hidden">
                    <animateMotion dur={`${DOT_BASE_S + i * DOT_STEP_S}s`} begin={`${-i * 1.3}s`} repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              );
            })}
            {/* Pool → Stelle */}
            <path d={arrowPath} stroke="#66a182" strokeWidth={2} />
            <circle r={5} fill="#66a182" className="motion-reduce:hidden">
              <animateMotion dur="3.8s" begin="-0.3s" repeatCount="indefinite" path={arrowPath} />
            </circle>
            <circle cx={RESULT_LEFT - 12} cy={poolMidY} r={6} fill="#66a182" />
          </svg>

          {/* Quellen */}
          {channels.map((ch, i) => {
            const { start } = channelCurve(i, channels.length);
            return (
              <div key={ch.name} className="absolute -translate-y-1/2" style={{ right: `${100 - (start.x / VIEW_W) * 100}%`, top: pctY(start.y) }}>
                <ChannelPill {...ch} />
              </div>
            );
          })}

          {/* Pool */}
          <div className="absolute" style={{ left: pctX(POOL.left), top: pctY(POOL.top), width: pctX(POOL.width), height: pctY(POOL.height) }}>
            <PoolCard className="h-full" />
          </div>

          {/* Ergebnis */}
          <div className="absolute -translate-y-1/2" style={{ left: pctX(RESULT_LEFT), top: pctY(poolMidY), width: pctX(VIEW_W - RESULT_LEFT) }}>
            <ResultCard />
          </div>
        </div>

        {/* ------------------------------------------------ Mobil / Tablet */}
        <div className="mt-10 flex flex-col items-center lg:hidden">
          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
            {channels.map((ch) => (
              <ChannelPill key={ch.name} {...ch} block />
            ))}
          </div>
          <Connector />
          <div className="w-full max-w-[340px]">
            <PoolCard />
          </div>
          <Connector tone="success" />
          <div className="w-full max-w-[340px]">
            <ResultCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Bausteine */

function ChannelPill({ name, sub, block = false }: { name: string; sub: string; own?: boolean; block?: boolean }) {
  return (
    <div className={`rounded-lg border border-line-soft bg-white px-4 py-3 shadow-soft ${block ? "w-full" : "whitespace-nowrap"}`}>
      <p className="flex items-center gap-2 text-[15px] font-semibold leading-tight text-ink">
        <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
        {name}
      </p>
      {sub && <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-accent">{sub}</p>}
    </div>
  );
}

function PoolCard({ className = "" }: { className?: string }) {
  const p = site.model.pool;
  const photos = getProfileImages();
  return (
    <div className={`flex flex-col overflow-hidden rounded-[24px] border border-line-soft bg-white text-center shadow-card ${className}`}>
      <div className="flex flex-1 flex-col items-center justify-center bg-[linear-gradient(180deg,rgba(59,130,246,0.10)_0%,rgba(59,130,246,0)_60%)] px-5 py-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-3">{p.eyebrow}</p>
        <PoolAvatars photos={photos} className="mt-4" />
        <p className="mt-4 text-[clamp(1.75rem,2.4vw,2.25rem)] font-bold leading-none text-ink">{p.value}</p>
        <p className="mt-2 text-[13px] text-muted">{p.label}</p>
      </div>
      <div className="flex items-center justify-center gap-2 border-t border-line-soft bg-surface-2 px-3 py-2.5 text-[11px] font-medium leading-snug text-muted-2">
        <span className="grid size-4 place-items-center rounded-full bg-success-bg text-success-ink">
          <Icon.check className="size-2.5" strokeWidth={3} />
        </span>
        {p.footer}
      </div>
    </div>
  );
}

function ResultCard() {
  const res = site.model.result;
  return (
    <div className="rounded-xl border border-line-soft bg-white p-6 shadow-card">
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-3">{res.eyebrow}</p>
      <h3 className="mt-2 text-[20px] font-semibold text-ink">{res.title}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {res.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-[14px] leading-snug text-muted-2">
            <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-sm bg-success-bg text-success-ink">
              <Icon.check className="size-3" strokeWidth={3} />
            </span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Connector({ tone = "accent" }: { tone?: "accent" | "success" }) {
  const color = tone === "accent" ? "bg-accent" : "bg-success";
  const line = tone === "accent" ? "bg-[#f9b8a5]" : "bg-[#66a182]";
  return (
    <div className="my-6 flex flex-col items-center" aria-hidden>
      <span className={`h-6 w-0.5 ${line}`} />
      <span className={`size-2.5 rounded-full ${color}`} />
      <span className={`h-6 w-0.5 ${line}`} />
    </div>
  );
}
