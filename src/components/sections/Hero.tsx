import { site } from "@/content/site";
import { Button, Heading } from "@/components/ui";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { getHeroSlides } from "@/lib/heroSlides";

export function Hero() {
  const h = site.hero;
  // Nur vorhandene Fotos (Prüfung beim Build), plus Info, ob eine Silhouette vorliegt
  const { slides, personAvailable } = getHeroSlides();
  // Ab Desktop füllt der Hero rund 72 % der Bildschirmhöhe unterhalb der Navigation (92 px)
  return (
    <section className="relative overflow-hidden bg-white lg:flex lg:min-h-[calc((100vh-92px)*0.72)] lg:flex-col lg:justify-center">
      {/* Punktraster + Verlauf wie im Figma */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: "radial-gradient(circle, #c9d1dc 1px, transparent 1.2px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(248deg, rgba(252,252,252,0.1) 84%, rgba(59,130,246,0.12) 98%), linear-gradient(180deg, rgba(253,253,253,0) 0%, #fdfdfd 60%)",
          }}
        />
      </div>

      <div className="container-x relative grid w-full items-center gap-12 py-16 lg:grid-cols-[1fr_520px] lg:gap-[72px] lg:py-[64px] 2xl:grid-cols-[1fr_600px]">
        <div className="max-w-[760px]">
          <Heading as="h1" size="display" bold={h.headlineBold} light={h.headlineLight} />
          <p className="mt-6 max-w-[720px] text-[16px] leading-relaxed text-muted">{h.text}</p>
          <div className="mt-8">
            <Button href={site.contact.bookingHref}>{h.cta}</Button>
          </div>
        </div>

        {/* Foto-Karte mit wechselnden Porträts und KI-Score-Overlays */}
        <HeroVisual slides={slides} persons={personAvailable} />
      </div>
    </section>
  );
}
