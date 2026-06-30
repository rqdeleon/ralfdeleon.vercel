import Link from "next/link";
import type { Article } from "@/lib/data";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WritingCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="group flex flex-col sm:flex-row sm:items-start gap-4 py-5 border-b border-lightest-navy/20 hover:border-green/20 transition-colors last:border-none"
    >
      <time className="shrink-0 text-slate font-mono text-xs sm:w-36 sm:text-right pt-0.5">
        {formatDate(article.date)}
      </time>
      <div>
        <h3 className="text-lightest-slate font-medium group-hover:text-green transition-colors mb-1">
          {article.title}
        </h3>
        <p className="text-slate text-sm leading-relaxed">{article.excerpt}</p>
      </div>
    </Link>
  );
}
