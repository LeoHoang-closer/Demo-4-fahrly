import Link from "next/link";
import type { Post } from "@/blog-system/lib/posts";
import MDXContent from "./MDXContent";

interface BlogShellProps {
  post: Post;
  locale: string;
}

export default function BlogShell({ post, locale }: BlogShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-12 py-24 max-w-2xl">
        <Link
          href={`/${locale}/blog`}
          className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors"
        >
          ← Blog
        </Link>

        <div className="mt-12 mb-10">
          <p className="text-xs font-numeric text-muted mb-4">{post.date}</p>
          <h1 className="text-4xl font-bold text-foreground tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-base text-muted leading-relaxed">{post.description}</p>
        </div>

        <div className="border-t border-border mb-10" />

        <MDXContent source={post.content} />
      </div>
    </div>
  );
}
