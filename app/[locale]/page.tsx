import type { Metadata } from "next";
import LPShell from "@/lp-system/components/LPShell";
import contentEn from "@/lp-system/locales/en.json";
import contentDe from "@/lp-system/locales/de.json";
import { LPContent } from "@/lp-system/types";

const locales: Record<string, LPContent> = {
  en: contentEn as LPContent,
  de: contentDe as LPContent,
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = locales[locale] ?? locales.en;
  const altLocale = locale === "en" ? "de" : "en";
  const canonical = `${SITE_URL}/${locale}`;
  const alternate = `${SITE_URL}/${altLocale}`;

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical,
      languages: {
        [locale]: canonical,
        [altLocale]: alternate,
      },
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: canonical,
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? ["en_US"] : ["de_DE"],
    },
  };
}

export default async function LPPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = locales[locale] ?? locales.en;
  return <LPShell content={content} locale={locale} />;
}
