"use client";

import { LPContent } from "../../types";

interface FinalCTAProps {
  content: LPContent["finalCta"];
  accentColor: string;
  bookingUrl: string;
}

export default function FinalCTA({ content, accentColor, bookingUrl }: FinalCTAProps) {
  return (
    <section className="py-32 px-12 border-t border-border">
      <h2 className="text-4xl font-bold text-foreground mb-10">{content.headline}</h2>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-4 rounded-lg text-sm font-semibold text-card transition-opacity hover:opacity-80"
        style={{ backgroundColor: accentColor }}
      >
        {content.ctaLabel}
      </a>
    </section>
  );
}
