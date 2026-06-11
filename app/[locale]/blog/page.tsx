import Link from "next/link";
import { getAllPosts } from "@/blog-system/lib/posts";

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getAllPosts(locale);

  return (
    <div className="min-h-screen bg-background px-12 py-24">
      <h1 className="text-4xl font-bold text-foreground tracking-tight mb-12">Blog</h1>
      <div className="flex flex-col gap-8 max-w-2xl">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group block border-b border-border pb-8"
          >
            <p className="text-xs font-numeric text-muted mb-2">{post.date}</p>
            <h2 className="text-xl font-semibold text-foreground tracking-tight mb-2 group-hover:underline underline-offset-4">
              {post.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed">{post.description}</p>
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="text-sm text-muted">No posts yet.</p>
        )}
      </div>
    </div>
  );
}
