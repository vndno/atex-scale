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
import { Faq } from "@/components/sections/Accordions";
import { References } from "@/components/sections/References";
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
        <References />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
