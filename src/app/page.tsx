import { existsSync } from "fs";
import path from "path";
import { site } from "@/content/site";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Method } from "@/components/sections/Method";
import { Audiences } from "@/components/sections/Audiences";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Showcase } from "@/components/sections/Showcase";
import { Guarantee } from "@/components/sections/Guarantee";
import { Stats } from "@/components/sections/Stats";
import { Journey, Faq } from "@/components/sections/Accordions";
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
        <Platform />
        <Process />
        <WhyUs />
        <Method />
        <Audiences />
        <CaseStudy />
        <Showcase />
        <Guarantee />
        <Stats />
        <Journey available={journeyImages} />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
