"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { Button } from "@/components/ui";
import { Icon } from "@/components/icons";

export function Logo({ size = "md", light = false }: { size?: "md" | "lg"; light?: boolean }) {
  const s = size === "lg" ? "text-[40px]" : "text-[32px] md:text-[38px]";
  return (
    <Link href="/" className="inline-flex flex-col leading-none">
      <span className={`${s} tracking-[-0.01em] leading-none`}>
        <span className={`font-bold ${light ? "text-white" : "text-ink-soft"}`}>{site.brand.name}</span>
        <span className="font-light text-accent">{site.brand.nameAccent}</span>
      </span>
      <span className={`mt-1 text-[11px] tracking-[-0.01em] ${light ? "text-on-navy-muted" : "text-[#757575]"}`}>
        {site.brand.claim}
      </span>
    </Link>
  );
}

// Externe Ziele (z. B. Karriere auf atex-media.de) öffnen in neuem Tab
const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-white/85 backdrop-blur-md">
      <div className="container-x flex items-center justify-between py-4 md:py-[18px]">
        <Logo />

        <nav className="hidden items-center gap-[30px] text-[15px] text-ink lg:flex">
          {site.nav.links.map((l) => (
            <Link key={l.label} href={l.href} className="transition-colors hover:text-accent" {...ext(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={site.contact.bookingHref} variant="outline" size="sm" arrow={false}>
            {site.nav.cta}
          </Button>
        </div>

        <button
          className="rounded-sm border border-line p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          aria-expanded={open}
        >
          {open ? <Icon.x /> : <Icon.menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {site.nav.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                {...ext(l.href)}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-[16px] text-ink hover:bg-surface"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button href={site.contact.bookingHref} variant="dark" className="w-full justify-center">
                {site.hero.cta}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
