import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/en`, lastModified: new Date() },
    { url: `${SITE_URL}/de`, lastModified: new Date() },
  ];
}
