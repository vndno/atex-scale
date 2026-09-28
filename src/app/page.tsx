import { existsSync } from "fs";
import path from "path";
import { site } from "@/content/site";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Model } from "@/components/sections/Model";
import { System } from "@/components/sections/System";
import { Calculator } from "@/components/sections/Calculator";
import { Placements } from "@/components/sections/Placements";
import { BafaCta, GuaranteeCta } from "@/components/sections/SplitCta";
import { Stats } from "@/components/sections/Stats";
import { Journey, Faq } from "@/components/sections/Accordions";
import { CareerPage } from "@/components/sections/CareerPage";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

/**
 * Seitenaufbau (Argumentationskette):
 * Versprechen → Social Proof → Problem → Lösung → Modell (Kanäle → Eingang) → Mechanismus → Kosten des Wartens
 * → Beweis (laufende Projekte) → Risikoabnahme (BAFA, Zusage) → Zahlen → Kundenreise
 * → Landingpage → FAQ → Handlung → Footer
 */
/* FAQ-Sektion als strukturierte Daten (kann in Suchergebnissen ausgeklappt erscheinen) */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: site.faq.items.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })),
};

export default function Home() {
  // Beim Build prüfen, welche Bilder der Kundenreise bereits vorliegen
  const journeyImages = site.journey.items.map((it) => existsSync(path.join(process.cwd(), "public", it.image)));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Problem />
        <Solution />
        <Model />
        <System />
        <Calculator />
        <Placements />
        <BafaCta />
        <Stats />
        <GuaranteeCta />
        <Journey available={journeyImages} />
        <CareerPage />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
