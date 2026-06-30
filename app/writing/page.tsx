import type { Metadata } from "next";
import WritingCard from "@/components/writing-card";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Writing — Ralf De Leon",
  description:
    "Articles and thoughts on Next.js, TypeScript, Supabase, and building for the web by Ralf De Leon.",
};

export default function WritingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-lightest-slate mb-3">Writing</h1>
      <p className="text-slate mb-12 max-w-lg">
        Thoughts on Next.js, TypeScript, Supabase, and lessons from 9+ years of
        building for the web. I write when I have something worth saying.
      </p>

      <div>
        {articles.map((article) => (
          <WritingCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
