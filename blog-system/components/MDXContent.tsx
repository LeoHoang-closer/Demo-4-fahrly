import { MDXRemote } from "next-mdx-remote/rsc";

interface MDXContentProps {
  source: string;
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-zinc max-w-none
      prose-headings:font-heading prose-headings:font-semibold prose-headings:tracking-tight
      prose-p:font-body prose-p:text-foreground prose-p:leading-relaxed
      prose-a:text-foreground prose-a:underline prose-a:underline-offset-4
      prose-code:font-numeric prose-code:text-sm
      prose-strong:font-semibold
      prose-li:font-body">
      <MDXRemote source={source} />
    </div>
  );
}
