import { site } from "@/content/site";

/** Zahlenband: vier Kennzahlen nebeneinander (mobil 2 × 2). */
export function Stats() {
  const s = site.stats;
  return (
    <section id="zahlen" className="border-y border-line-soft bg-surface py-12 lg:py-14">
      <dl className="container-x grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        {s.items.map((it) => (
          <div key={it.label}>
            <dt className="text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-none text-accent-strong">{it.value}</dt>
            <dd className="mt-2">
              <span className="block text-[15px] font-semibold text-ink">{it.label}</span>
              <span className="block text-[13px] text-muted">{it.sub}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
