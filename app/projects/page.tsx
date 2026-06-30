import type { Metadata } from "next";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Ralf De Leon",
  description:
    "A collection of web projects built by Ralf De Leon — from NGO sites to full-stack web apps.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-lightest-slate mb-3">Projects</h1>
      <p className="text-slate mb-12 max-w-lg">
        A selection of things I&apos;ve built — from landing pages and NGO
        sites to full-stack web applications. Most are open source.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
