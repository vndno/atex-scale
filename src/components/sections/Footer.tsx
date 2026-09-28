import Link from "next/link";

const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});
import { site } from "@/content/site";
import { Logo } from "@/components/sections/Navbar";
import { ConsentLink } from "@/components/ConsentBanner";

export function Footer() {
  const f = site.footer;
  const c = site.contact;
  return (
    <footer className="bg-creme">
      <div className="container-x grid gap-12 pb-12 pt-16 md:grid-cols-2 lg:grid-cols-[1.2fr_1.4fr_auto] lg:gap-14">
        <div>
          <Logo size="lg" />
          <address className="mt-5 text-[13px] not-italic leading-relaxed text-muted">
            <strong className="font-semibold text-ink">{c.company}</strong>
            <br />
            {c.street}
            <br />
            {c.city}
            <br />
            <br />
            <a href={c.phoneHref} className="hover:text-ink">{c.phone}</a>
            <br />
            <a href={`mailto:${c.email}`} className="hover:text-ink">{c.email}</a>
          </address>
        </div>

        <FooterCol title={f.quicklinks.title} items={f.quicklinks.items} />

        <div className="w-full rounded-xl bg-white p-6 lg:w-[230px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.contactPerson.image}
            alt={c.contactPerson.name}
            width={64}
            height={64}
            className="size-16 rounded-full object-cover shadow-[0_0_4px_rgba(59,130,246,0.2)]"
          />
          <p className="mt-3 text-[12px] text-muted">{c.contactPerson.label}</p>
          <p className="text-[15px] font-semibold text-ink">{c.contactPerson.name}</p>
          <p className="text-[12px] text-muted">{c.contactPerson.role}</p>
          <a
            href={c.bookingHref}
            className="mt-3 block rounded-sm bg-navy px-5 py-[11px] text-center text-[14px] font-semibold text-white transition-colors hover:bg-navy-card"
          >
            Gespräch vereinbaren ›
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-[18px] text-[12px] text-muted md:flex-row md:items-center md:justify-between">
          <p>{f.copyright}</p>
          <p className="flex gap-2">
            {f.legal.map((l, i) => (
              <span key={l.label} className="flex gap-2">
                {i > 0 && <span>·</span>}
                <Link href={l.href} className="hover:text-ink">{l.label}</Link>
              </span>
            ))}
            <span>·</span>
            <ConsentLink className="hover:text-ink" />
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-[14px] font-semibold text-ink">{title}</p>
      <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2">
        {items.map((it) => (
          <li key={it.label}>
            <Link href={it.href} {...ext(it.href)} className="text-[13px] text-muted hover:text-ink">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
