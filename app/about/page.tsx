import type { Metadata } from "next";
import Image from "next/image";
import TechTag from "@/components/tech-tag";
import { skills, experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Ralf De Leon",
  description:
    "Learn more about Ralf De Leon, a full-stack developer with 9+ years of experience building web applications.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-lightest-slate mb-12">
        About Me
      </h1>

      {/* Bio */}
      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-slate leading-relaxed">
            <p>
              I&apos;m Ralf — a Computer Engineer by training, a software
              developer by passion, a preacher of the Word by privilege, and a
              father by provision. I&apos;m based in the Philippines (UTC+08:00)
              and have been building things for the web for over 9 years.
            </p>
            <p>
              My journey started in PHP and WordPress, building websites for
              local businesses and churches. Over the years I transitioned to
              the modern JavaScript ecosystem — and today my stack of choice is{" "}
              <span className="text-lightest-slate">Next.js</span>,{" "}
              <span className="text-lightest-slate">React</span>,{" "}
              <span className="text-lightest-slate">TypeScript</span>, and{" "}
              <span className="text-lightest-slate">Supabase</span>.
            </p>
            <p>
              A big part of my work has been serving NGOs, churches, and
              ministries — organizations that need professional software but
              often operate on tight budgets. That context taught me to build
              lean, maintainable, and genuinely useful software rather than
              over-engineering for hypothetical requirements.
            </p>
            <p>
              Outside of code, I&apos;m involved in ministry work and spend
              most of my free time with my family.
            </p>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-green/30">
              <Image
                src="/profile.png"
                alt="Ralf De Leon"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-lightest-slate mb-6">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <TechTag key={skill} label={skill} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-semibold text-lightest-slate mb-8">
          Experience
        </h2>

        <div className="space-y-10">
          {experience.map((job) => (
            <div key={job.company} className="group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                <h3 className="text-lightest-slate font-semibold">
                  {job.role}{" "}
                  <span className="text-green">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-slate">{job.period}</span>
              </div>

              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-slate text-sm leading-relaxed">
                    <span className="shrink-0 text-green mt-1">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {job.tech.map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
