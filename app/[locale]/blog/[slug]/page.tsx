import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getPost, getPostSlugs } from "@/blog-system/lib/posts";
import BlogShell from "@/blog-system/components/BlogShell";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export async function generateStaticParams() {
  const locales = ["en", "de"];
  return locales.flatMap((locale) =>
    getPostSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/${locale}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/${locale}/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) {
    redirect(`/${locale}/blog`);
  }
  return <BlogShell post={post} locale={locale} />;
}
