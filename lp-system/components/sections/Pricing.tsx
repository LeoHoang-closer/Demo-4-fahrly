"use client";

import { useState } from "react";
import { LPContent } from "../../types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface PricingProps {
  content: LPContent["pricing"];
  accentColor: string;
  bookingUrl: string;
  locale: string;
}

const i18n: Record<string, { annual: string; save: string; billedAnnually: string }> = {
  en: { annual: "Annual", save: "Save 20 %", billedAnnually: "billed annually" },
  de: { annual: "Jährlich", save: "20 % sparen", billedAnnually: "jährlich abgerechnet" },
};

function parseMonthlyPrice(price: string): number {
  return parseInt(price.replace(/\s*[€$£¥]/g, "").replace(/\./g, ""), 10);
}

function annualPrice(price: string): string {
  const discounted = Math.round(parseMonthlyPrice(price) * 0.8);
  return `${discounted.toLocaleString("de-DE")} €`;
}

export default function Pricing({ content, accentColor, bookingUrl, locale }: PricingProps) {
  const t = i18n[locale] ?? i18n.en;
  const [annual, setAnnual] = useState(false);

  const toggle = () => setAnnual((prev) => !prev);

  const isAnnual = () => annual;

  return (
    <section className="py-24 px-12 border-t border-border bg-surface">
      <h2 className="text-3xl font-bold text-foreground mb-14">{content.headline}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {content.tiers.map((tier, i) => (
          <Card
            key={i}
            className="flex flex-col"
          >
            <CardHeader>
              <CardTitle className="mb-1">{tier.name}</CardTitle>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-bold text-foreground font-numeric">
                  {isAnnual() ? annualPrice(tier.price) : tier.price}
                </span>
                <span className="text-placeholder text-sm mb-1">{tier.period}</span>
              </div>
              {isAnnual() && (
                <p className="text-xs text-placeholder">{t.billedAnnually}</p>
              )}

              <div className="border-t border-border" />

              {/* Annual toggle */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggle}
                  className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors"
                  style={{ backgroundColor: isAnnual() ? accentColor : undefined }}
                  aria-pressed={isAnnual()}
                >
                  {!isAnnual() && (
                    <span className="absolute inset-0 rounded-full bg-surface border border-border" />
                  )}
                  <span
                    className="inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform z-10"
                    style={{ transform: isAnnual() ? "translateX(18px)" : "translateX(2px)" }}
                  />
                </button>
                <span className="text-xs text-muted">
                  {t.annual}{" "}
                  <span className="font-semibold" style={{ color: accentColor }}>
                    · {t.save}
                  </span>
                </span>
              </div>

              <div className="border-t border-border" />

              <p className="text-xs text-placeholder">{tier.description}</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 gap-6">
              <ul className="flex flex-col gap-2 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-subtle">
                    <span style={{ color: accentColor }} className="mt-0.5 leading-none">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {tier.highlighted ? (
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-6 py-3 rounded-lg text-sm font-semibold text-card transition-opacity hover:opacity-80"
                  style={{ backgroundColor: accentColor }}
                >
                  {tier.ctaLabel}
                </a>
              ) : (
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-6 py-3 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-surface transition-colors"
                >
                  {tier.ctaLabel}
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
