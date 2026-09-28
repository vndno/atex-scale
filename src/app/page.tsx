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
import { References } from "@/components/sections/References";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

/**
 * Seitenaufbau (Reihenfolge und Argumentation nach dem Vorbild trimando.at, Inhalte eigen):
 * Versprechen mit Netzwerk-Grafik → Logo-Band → 01 Engpass (drei Probleme) → 02 System (Schritte + Dashboard)
 * → 03 Ablauf (vier Schritte als Reiter) → 04 Warum es funktioniert → 05 Methode (Kurve, drei Phasen)
 * → 06 Privat- und Geschäftskunden → 07 Case Study H24 → 08 Kampagnen-Beispiele (Handys)
 * → 09 Schriftliche Zusage (Markt-Check) → Zahlenband → 10 Referenzen → Schluss mit Formular → Footer
 */
export default function Home() {
  return (
    <>
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
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
