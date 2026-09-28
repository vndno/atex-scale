import type { ReactNode } from "react";
import type { LegalDoc } from "@/content/legal";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/** Rechtstexte (Impressum, Datenschutz, AGB) in einheitlichem, ruhigem Layout. */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <Navbar />
      <main className="section-y bg-white">
        <article className="container-x max-w-[820px]">
          <h1 className="h-section text-ink">{doc.title}</h1>
          <div className="mt-10 flex flex-col gap-4">
            {doc.blocks.map((b, i) => {
              if (b.type === "h2") return <h2 key={i} className="mt-8 text-[22px] font-semibold leading-snug text-ink">{b.text}</h2>;
              if (b.type === "h3") return <h3 key={i} className="mt-5 text-[18px] font-semibold leading-snug text-ink">{b.text}</h3>;
              if (b.type === "h4") return <h4 key={i} className="mt-3 text-[16px] font-semibold leading-snug text-ink">{b.text}</h4>;
              return (
                <p key={i} className="whitespace-pre-line text-[15px] leading-[1.7] text-muted-2">
                  {linkify(b.text)}
                </p>
              );
            })}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

const LINK_RE = /(https?:\/\/[^\s)]+?)([.,;)]?)(?=\s|$)|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

/** Verlinkt URLs und E-Mail-Adressen im Fließtext; Satzzeichen am Ende bleiben außerhalb des Links. */
function linkify(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK_RE)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    if (m[1]) {
      out.push(
        <a key={idx} href={m[1]} target="_blank" rel="noopener noreferrer" className="break-all text-accent underline-offset-2 hover:underline">
          {m[1]}
        </a>,
      );
      if (m[2]) out.push(m[2]);
    } else if (m[3]) {
      out.push(
        <a key={idx} href={`mailto:${m[3]}`} className="text-accent underline-offset-2 hover:underline">
          {m[3]}
        </a>,
      );
    }
    last = idx + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
