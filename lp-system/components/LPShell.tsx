"use client";

import { LPContent } from "../types";
import Navbar from "./Navbar";
import Hero from "./sections/Hero";
import ProblemSolution from "./sections/ProblemSolution";
import Pricing from "./sections/Pricing";
import FinalCTA from "./sections/FinalCTA";

interface LPShellProps {
  content: LPContent;
  locale: string;
}

export default function LPShell({ content, locale }: LPShellProps) {
  const accent = content.accentColor;
  const bookingUrl = content.bookingUrl;

  function scrollToPricing() {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar
        logo={content.navbar.logo}
        ctaLabel={content.navbar.ctaLabel}
        accentColor={accent}
        locale={locale}
        onCta={scrollToPricing}
      />
      <div className="pt-16">
        <Hero content={content.hero} dashboard={content.dashboard} accentColor={accent} bookingUrl={bookingUrl} />
        <ProblemSolution content={content.problemSolution} accentColor={accent} />
        <div id="pricing">
          <Pricing content={content.pricing} accentColor={accent} bookingUrl={bookingUrl} locale={locale} />
        </div>
        <FinalCTA content={content.finalCta} accentColor={accent} bookingUrl={bookingUrl} />
        <footer className="py-8 px-12 border-t border-border text-xs text-placeholder">
          © {new Date().getFullYear()} {content.navbar.logo}. Demand validation — not yet a product.
        </footer>
      </div>
    </main>
  );
}
