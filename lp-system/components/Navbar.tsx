"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  logo: string;
  ctaLabel: string;
  accentColor: string;
  locale: string;
  onCta: () => void;
}

export default function Navbar({ logo, ctaLabel, accentColor, locale, onCta }: NavbarProps) {
  const pathname = usePathname();

  function localeHref(newLocale: string) {
    return `/${newLocale}`;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/90 backdrop-blur-sm">
      <div className="px-12 h-16 flex items-center justify-between">
        <span className="text-sm font-bold text-foreground tracking-tight">{logo}</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5 text-xs font-semibold uppercase tracking-widest">
            {(["en", "de"] as const).map((loc) => (
              <Link
                key={loc}
                href={localeHref(loc)}
                className="px-2 py-1 rounded transition-colors"
                style={locale === loc ? { color: accentColor } : undefined}
              >
                <span className={locale === loc ? "" : "text-placeholder"}>{loc}</span>
              </Link>
            ))}
          </div>
          <button
            onClick={onCta}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-card transition-opacity hover:opacity-80"
            style={{ backgroundColor: accentColor }}
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </nav>
  );
}
