"use client";

import { LPContent } from "../../types";
import DashboardMock from "../dashboard/DashboardMock";

interface HeroProps {
  content: LPContent["hero"];
  dashboard: LPContent["dashboard"];
  accentColor: string;
  bookingUrl: string;
}

export default function Hero({ content, dashboard, accentColor, bookingUrl }: HeroProps) {
  return (
    <section className="px-12 pt-24 pb-16">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground mb-6 max-w-3xl">
        {content.headline}
      </h1>
      <p className="text-lg text-muted max-w-xl mb-10 leading-relaxed">
        {content.subhead}
      </p>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start inline-block px-8 py-4 rounded-lg text-sm font-semibold text-card transition-opacity hover:opacity-80 mb-16"
        style={{ backgroundColor: accentColor }}
      >
        {content.ctaLabel}
      </a>
      <DashboardMock dashboard={dashboard} accentColor={accentColor} />
    </section>
  );
}
