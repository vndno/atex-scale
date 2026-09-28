import { site } from "@/content/site";
import { Icon } from "@/components/icons";

/**
 * Netzwerk-Grafik unter dem Hero: Quellen (Kampagnen, Landingpage, neue Anfrage) laufen in den
 * Anfragen-Eingang in der Mitte, von dort gehen geprüfte Anfragen und gebuchte Termine weiter.
 *
 * Desktop (≥ lg): feste Zeichenfläche W × H. Gestrichelte Linien als SVG im selben Koordinatensystem,
 * Karten als HTML per Prozentwerten darüber, je Linie ein wandernder Punkt (SVG animateMotion).
 * Mobil: Quellen → Eingang → Ergebnis untereinander, ohne Linien.
 */
const W = 1200;
const H = 460;
const CENTER = { x: 600, y: 230 };

type GraphNode = (typeof site.hero.graph.nodes)[number];

const pctX = (x: number) => `${(x / W) * 100}%`;
const pctY = (y: number) => `${(y / H) * 100}%`;

// Weiche Kurve zwischen zwei Punkten (horizontal ein- und auslaufend)
function curve(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  return `M${a.x} ${a.y} C${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
}

export function HeroGraph({ className = "" }: { className?: string }) {
  const g = site.hero.graph;
  const sources = g.nodes.filter((n) => n.kind === "source");
  const results = g.nodes.filter((n) => n.kind !== "source");

  return (
    <div className={className}>
      {/* ------------------------------------------------ Desktop */}
      <div className="relative mx-auto hidden aspect-[1200/460] w-full max-w-[1200px] lg:block">
        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox={`0 0 ${W} ${H}`} fill="none" aria-hidden>
          {g.nodes.map((n, i) => {
            const out = n.kind !== "source";
            // Quellen fließen zur Mitte, Ergebnisse fließen von der Mitte weg
            const d = out ? curve(CENTER, n) : curve(n, CENTER);
            const stroke = n.kind === "result" ? "#a9cfba" : "#f7b7a6";
            const dot = n.kind === "result" ? "#66a182" : "#f26a4a";
            return (
              <g key={n.title}>
                <path d={d} stroke={stroke} strokeWidth={1.6} strokeDasharray="5 5" className="animate-dash motion-reduce:animate-none" />
                <circle r={4.5} fill={dot} className="motion-reduce:hidden">
                  <animateMotion dur={`${4.2 + (i % 3) * 0.7}s`} begin={`${-i * 0.9}s`} repeatCount="indefinite" path={d} />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Mitte: Anfragen-Eingang mit Wellen */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: pctX(CENTER.x), top: pctY(CENTER.y) }}>
          {[0, 1, 2].map((r) => (
            <span
              key={r}
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 size-[340px] rounded-full border border-accent/30 animate-ring motion-reduce:hidden"
              style={{ animationDelay: `${r * 1.1}s` }}
            />
          ))}
          <CenterCard />
        </div>

        {g.nodes.map((n, i) => (
          <div key={n.title} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: pctX(n.x), top: pctY(n.y) }}>
            <div className="animate-float motion-reduce:animate-none" style={{ animationDelay: `${-i * 1.3}s` }}>
              <NodeCard node={n} />
            </div>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------ Mobil / Tablet */}
      <div className="flex flex-col items-center lg:hidden">
        <div className="grid w-full grid-cols-2 gap-2.5 sm:gap-3">
          {sources.map((n) => (
            <NodeCard key={n.title} node={n} block />
          ))}
        </div>
        <Connector />
        <CenterCard />
        <Connector tone="success" />
        <div className="grid w-full grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
          {results.map((n) => (
            <NodeCard key={n.title} node={n} block className={n.kind === "score" ? "col-span-2 sm:col-span-1" : ""} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CenterCard() {
  const c = site.hero.graph.center;
  return (
    <div className="relative flex items-center gap-3.5 rounded-xl bg-navy px-5 py-4 text-white shadow-card">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent text-white">
        <Icon.database className="size-5" />
      </span>
      <div>
        <p className="text-[16px] font-semibold leading-tight">{c.title}</p>
        <p className="text-[12px] text-on-navy-muted">{c.sub}</p>
      </div>
      <span className="ml-3 flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#9fd3b6]">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70 motion-reduce:hidden" />
          <span className="relative inline-flex size-1.5 rounded-full bg-success" />
        </span>
        {c.status}
      </span>
    </div>
  );
}

function NodeCard({ node, block = false, className = "" }: { node: GraphNode; block?: boolean; className?: string }) {
  const score = node.kind === "score";
  // block = Mobil: kompakter, Text darf umbrechen
  return (
    <div
      className={`flex items-center rounded-lg border bg-white shadow-soft ${score ? "border-accent" : "border-line-soft"} ${
        block ? "w-full gap-2.5 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3" : "gap-3 whitespace-nowrap px-4 py-3"
      } ${className}`}
    >
      {node.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={node.image} alt="" width={36} height={36} className={`shrink-0 rounded-md object-cover ${block ? "size-8 sm:size-9" : "size-9"}`} />
      ) : score ? (
        <span className={`grid shrink-0 place-items-center rounded-md bg-accent/10 text-accent ${block ? "size-8 sm:size-9" : "size-9"}`}>
          <Icon.award className="size-[18px]" />
        </span>
      ) : (
        <span className={`size-2 shrink-0 rounded-full ${node.kind === "result" ? "bg-success" : "bg-accent"}`} aria-hidden />
      )}
      <div className="min-w-0">
        <p className={`font-semibold leading-tight text-ink ${block ? "text-[13px] sm:text-[14px]" : "text-[14px]"}`}>{node.title}</p>
        <p className={`mt-0.5 leading-snug text-muted ${block ? "text-[11px] sm:text-[12px]" : "text-[12px]"}`}>{node.sub}</p>
      </div>
      {node.kind === "result" && (
        <span className="ml-auto grid size-5 shrink-0 place-items-center rounded-full bg-success-bg text-success-ink">
          <Icon.check className="size-3" strokeWidth={3} />
        </span>
      )}
    </div>
  );
}

function Connector({ tone = "accent" }: { tone?: "accent" | "success" }) {
  return (
    <div className="my-4 flex flex-col items-center" aria-hidden>
      <span className={`h-5 w-0 border-l-2 border-dashed ${tone === "accent" ? "border-[#f7b7a6]" : "border-[#a9cfba]"}`} />
      <span className={`size-2.5 rounded-full ${tone === "accent" ? "bg-accent" : "bg-success"}`} />
      <span className={`h-5 w-0 border-l-2 border-dashed ${tone === "accent" ? "border-[#f7b7a6]" : "border-[#a9cfba]"}`} />
    </div>
  );
}
