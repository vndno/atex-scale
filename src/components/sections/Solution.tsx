import { site } from "@/content/site";
import { Heading } from "@/components/ui";
import { Icon } from "@/components/icons";
import { ModuleCart } from "@/components/sections/ModuleCart";

const bulletIcons = [Icon.chartLine, Icon.layers, Icon.building];


export function Solution() {
  const s = site.solution;
  return (
    <section className="section-y bg-surface">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Heading eyebrow={s.eyebrow} bold={s.headlineBold} light={s.headlineLight} />
          <p className="mt-6 text-[16px] leading-[1.6] text-muted-2">{s.text}</p>
          <ul className="mt-8 flex flex-col gap-4">
            {s.bullets.map((b, i) => {
              const I = bulletIcons[i % bulletIcons.length];
              return (
                <li key={b} className="flex items-center gap-3 text-[15px] text-[#0a0a0a]">
                  <I className="size-5 shrink-0 text-accent" />
                  {b}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bausteine als Warenkorb: Hover → hinzufügen, Korb zählt, Auswahl anfragen */}
        <ModuleCart />
      </div>
    </section>
  );
}
