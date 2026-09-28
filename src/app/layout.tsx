import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteUrl";
import "@fontsource-variable/source-sans-3";
import "./globals.css";
import { site } from "@/content/site";
import { ContactModal } from "@/components/ContactModal";
import { BookingWidget } from "@/components/BookingWidget";
import { ConsentBanner } from "@/components/ConsentBanner";

/**
 * Hausschrift: Myriad Pro über Adobe Fonts (Kit uei1ums → font-family "myriad-pro", 300/400/600/700).
 * Source Sans 3 (selbst gehostet) bleibt als Fallback, falls Adobe Fonts blockiert ist.
 */
const ADOBE_FONTS_KIT = "https://use.typekit.net/uei1ums.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    locale: "de_DE",
    type: "website",
    url: SITE_URL,
    siteName: "Atex Scale",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Atex Scale – Neue Kunden gewinnen mit schriftlicher Zusage" }],
  },
  twitter: { card: "summary_large_image", title: site.meta.title, description: site.meta.description, images: ["/images/og-image.jpg"] },
  applicationName: "Atex Scale",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

/* Strukturierte Daten für Suchmaschinen: Unternehmen mit Standort, Kontakt und Marke */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Atex Scale",
  legalName: site.contact.company,
  alternateName: "Atex Scale – eine Marke der Atex Media Gruppe",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/images/og-image.jpg`,
  description: site.meta.description,
  telephone: site.contact.phone,
  email: site.contact.email,
  address: { "@type": "PostalAddress", streetAddress: site.contact.street, postalCode: site.contact.city.split(" ")[0], addressLocality: site.contact.city.split(" ").slice(1).join(" "), addressCountry: "DE" },
  areaServed: ["DE", "AT", "CH"],
  parentOrganization: { "@type": "Organization", name: "Atex Media GmbH", url: "https://www.atex-media.de" },
  founder: { "@type": "Person", name: site.contact.contactPerson.name },
  knowsAbout: ["Neukundengewinnung", "Leadgenerierung", "Performance-Marketing", "Mittelstand", "Landingpages", "Google Ads", "Meta Ads"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href={ADOBE_FONTS_KIT} />
      </head>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        {children}
        {/* Kontaktformular-Modal (öffnet über jeden Link mit href="#anfrage") + Termin-Widget unten rechts */}
        <ContactModal />
        <BookingWidget />
        <ConsentBanner />
      </body>
    </html>
  );
}
