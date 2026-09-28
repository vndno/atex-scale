import type { Metadata } from "next";
import { legal } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum – Atex Scale",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage doc={legal.impressum} />;
}
