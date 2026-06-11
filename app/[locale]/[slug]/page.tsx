import type { Metadata } from "next";
import LPShell from "@/lp-system/components/LPShell";
import { lpRegistry } from "@/lp-system/config/lp-config";
import contentEn from "@/lp-system/locales/en.json";
import contentDe from "@/lp-system/locales/de.json";
import { LPContent } from "@/lp-system/types";

const locales: Record<string, LPContent> = {
  en: contentEn as LPContent,
  de: contentDe as LPContent,
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export function generateStaticParams() {
  return lpRegistry.map(({ locale, slug }) => ({ locale, slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = locales[locale] ?? locales.en;
  const entry = lpRegistry.find((item) => item.locale === locale && item.slug === slug);
  const title = entry?.title ?? content.seo.title;
  const canonical = `${SITE_URL}/${locale}/${slug}`;

  return {
    title,
    description: content.seo.description,
    alternates: {
      canonical,
      languages: {
        [locale]: canonical,
      },
    },
    openGraph: {
      title,
      description: content.seo.description,
      url: canonical,
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
    },
  };
}

export default async function LPPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale } = await params;
  const content = locales[locale] ?? locales.en;
  return <LPShell content={content} locale={locale} />;
}
