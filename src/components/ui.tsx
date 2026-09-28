import type { ReactNode } from "react";
import Link from "next/link";

/* ---------------------------------------------------------------- Button */
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline" | "outline-light" | "accent";
  size?: "md" | "sm";
  arrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "dark",
  size = "md",
  arrow = true,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-sm font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0";
  const sizes = size === "md" ? "px-[26px] py-[14px] text-[15px]" : "px-[22px] py-[11px] text-[15px]";
  const variants = {
    dark: "bg-navy text-white hover:bg-[#1a2633]",
    light: "bg-white text-ink hover:bg-surface",
    outline: "bg-white border border-line text-ink hover:border-ink/40",
    "outline-light": "border-[1.5px] border-white text-white hover:bg-white/10",
    accent: "bg-accent text-white hover:bg-accent-strong",
  }[variant];
  const cls = `${base} ${sizes} ${variants} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <span className="font-bold leading-none">›</span>}
    </>
  );
  // Hash-Links ("#anfrage") öffnen das Kontakt-Modal per Klick-Listener – ohne Next-Routing
  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* --------------------------------------------------------- Section heading */
export function Heading({
  eyebrow,
  bold,
  light,
  boldEnd,
  align = "left",
  as: Tag = "h2",
  size = "section",
  className = "",
}: {
  eyebrow?: string;
  bold: string;
  light?: string;
  boldEnd?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  size?: "display" | "section";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag className={`${size === "display" ? "h-display" : "h-section"} text-ink`}>
        {bold}
        {light && (
          <>
            {" "}
            <span className="h-light">{light}</span>
          </>
        )}
        {boldEnd && <> {boldEnd}</>}
      </Tag>
    </div>
  );
}

/* ------------------------------------------------------- Image placeholder
   Zeigt das Bild, wenn es in /public liegt; sonst eine ruhige Fläche mit
   Hinweis, damit das Layout schon vor dem Bildmaterial stimmt. */
export function Photo({
  src,
  alt,
  className = "",
  label,
  tone = "light",
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`relative overflow-hidden ${
        tone === "light"
          ? "bg-[linear-gradient(135deg,#e9edf2_0%,#d5dbe3_100%)]"
          : "bg-[linear-gradient(135deg,#1a2633_0%,#0e1721_100%)]"
      } ${className}`}
      data-src={src}
      role="img"
      aria-label={alt}
    >
      {label && (
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            tone === "light" ? "bg-white/80 text-muted" : "bg-white/15 text-white/80"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- Avatar */
export function Avatar({ size = 24, seed = 0, className = "" }: { size?: number; seed?: number; className?: string }) {
  const hues = [210, 30, 150, 260, 15, 190];
  const h = hues[seed % hues.length];
  return (
    <span
      className={`inline-block shrink-0 rounded-full ring-2 ring-white ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 35% 30%, hsl(${h} 45% 78%), hsl(${h} 40% 52%))`,
      }}
      aria-hidden
    />
  );
}
