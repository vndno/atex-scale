import { existsSync } from "fs";
import path from "path";
import { site } from "@/content/site";
import { Heading, Avatar } from "@/components/ui";

/** Kundenfoto vorhanden? Wird beim Build geprüft; fehlt es, bleibt der farbige Platzhalter-Kreis. */
const hasFile = (src: string) => existsSync(path.join(process.cwd(), "public", src));

export function Stats() {
  const s = site.stats;
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <Heading bold={s.headlineBold} light={s.headlineLight} />
        <p className="mt-3 text-[15px] text-muted">{s.text}</p>

        {/* Ein gleichmäßiges 3×2-Raster; Highlight-Kachel spannt zwei Zeilen */}
        <div className="mt-10 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          <div className="flex flex-col justify-end rounded-xl border border-line-soft bg-surface-2 p-7 transition-colors duration-300 hover:bg-white">
            <div className="flex -space-x-2">
              {s.clientAvatars.map((src, i) =>
                hasFile(src) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt="" width={40} height={40} loading="lazy" className="relative size-10 rounded-full object-cover ring-2 ring-white" style={{ zIndex: 6 - i }} />
                ) : (
                  <Avatar key={src} size={40} seed={i} />
                ),
              )}
            </div>
            <p className="mt-3 text-[15px] font-semibold text-ink">
              {s.clients.value} <span className="font-normal text-muted">{s.clients.label}</span>
            </p>
          </div>

          {s.items.slice(0, 1).map((it) => (
            <StatCard key={it.label} {...it} />
          ))}

          <div className="flex flex-col items-start justify-end rounded-xl border border-line-soft bg-surface-2 p-8 transition-colors duration-300 hover:bg-white md:row-span-2">
            <p className="text-[clamp(2.5rem,3.6vw,3.25rem)] font-bold leading-none text-ink">{s.highlight.value}</p>
            <p className="mt-2 text-[16px] font-semibold text-muted-2">{s.highlight.label}</p>
          </div>

          {s.items.slice(1).map((it) => (
            <StatCard key={it.label} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col justify-end rounded-xl border border-line-soft bg-surface-2 p-7 transition-colors duration-300 hover:bg-white">
      <p className="text-[36px] font-bold leading-none text-ink">{value}</p>
      <p className="mt-2 text-[14px] font-semibold text-muted-2">{label}</p>
    </div>
  );
}
