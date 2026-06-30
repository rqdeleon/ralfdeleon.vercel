import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/project-card";
import WritingCard from "@/components/writing-card";
import { featuredProjects, articles } from "@/lib/data";

export default function HomePage() {
  const recentArticles = articles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-28 md:py-36">
        <p className="font-mono text-green text-sm mb-5">Hi, my name is</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white-ish mb-4 leading-tight">
          Ralf De Leon.
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate mb-8 leading-tight">
          I build things for the web.
        </h2>
        <p className="max-w-lg text-slate text-lg leading-relaxed mb-10">
          I&apos;m a full-stack developer with 9+ years of experience building
          web apps for NGOs, churches, and businesses. I specialize in{" "}
          <span className="text-lightest-slate">Next.js</span>,{" "}
          <span className="text-lightest-slate">React</span>, and{" "}
          <span className="text-lightest-slate">TypeScript</span> — creating
          fast, accessible, and maintainable web experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-green text-green rounded text-sm font-mono hover:bg-green/10 transition-colors"
          >
            View My Work
            <ArrowRight size={16} />
          </Link>
          <a
            href="mailto:yazzodeleon@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-lightest-navy text-lightest-slate rounded text-sm font-mono hover:border-green hover:text-green transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold text-lightest-slate">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-green font-mono text-sm hover:gap-2.5 transition-all"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Recent Writing */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold text-lightest-slate">
            Recent Writing
          </h2>
          <Link
            href="/writing"
            className="flex items-center gap-1.5 text-green font-mono text-sm hover:gap-2.5 transition-all"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div>
          {recentArticles.map((article) => (
            <WritingCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
