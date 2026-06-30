export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
};

export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export type Job = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
};

export const skills: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Sanity",
  "shadcn/ui",
  "Redux",
  "Prisma",
  "Google Cloud Platform",
  "Git",
  "PHP",
  "WordPress",
];

export const projects: Project[] = [
  {
    title: "RBN Tech",
    description:
      "Corporate website for a local trades company in the Philippines. Built for performance and a professional web presence.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/rqdeleon/rbntech",
    live: "https://rbntech.ph",
    image: "/screenshots/rbntech.png",
    featured: true,
  },
  {
    title: "Bordergate Baptist Church",
    description:
      "Church website for Bordergate Baptist Church in Macau. Features ministry info, event listings, and online giving.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "TypeScript"],
    live: "https://bordergatebaptist.net",
    image: "/screenshots/bordergatebaptist.png",
    featured: true,
  },
  {
    title: "Mybranches",
    description:
      "Website for a local hospitality company in the Philippines. Focused on visual storytelling, property showcasing, and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/rqdeleon/casaestal",
    live: "https://mybranches.net",
    image: "/screenshots/mybranches.png",
    featured: true,
  },
  {
    title: "Save Our Society",
    description:
      "A modern landing page for an NGO built to drive awareness and donor engagement. Optimized for performance and accessibility.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/rqdeleon/saveoursociety",
    featured: false,
  },
  {
    title: "Amazing Influencers",
    description:
      "A TypeScript web app connecting brands with content creators. Features a clean UI with dynamic filtering and profile showcasing.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/rqdeleon/amazing-influencers",
    featured: false,
  },
  {
    title: "Pousada Grande",
    description:
      "A multilingual accommodation site with a rich gallery, reservation inquiry form, and Google Maps integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/rqdeleon/pousadagrande",
  },
  {
    title: "Air Residences",
    description:
      "A high-fidelity landing page for a luxury residential property. Built with semantic HTML and smooth scroll animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rqdeleon/air-residences",
  },
  {
    title: "Admin Dashboard Starter",
    description:
      "A feature-complete admin dashboard template with data tables, modals, sidebar navigation, and role-based access using Prisma and PostgreSQL.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "shadcn/ui", "TypeScript"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const articles: Article[] = [
  {
    slug: "building-with-nextjs-app-router",
    title: "What I Learned After 6 Months with the Next.js App Router",
    date: "2025-11-10",
    excerpt:
      "The App Router changed everything about how I think about server components and data fetching. Here's what actually clicked for me after months of building real projects.",
  },
  {
    slug: "supabase-row-level-security",
    title: "Row Level Security in Supabase: A Practical Guide",
    date: "2025-09-22",
    excerpt:
      "RLS policies can feel cryptic at first. This is the guide I wished I had when I was setting up auth for my first Supabase project.",
  },
  {
    slug: "tailwind-v4-what-changed",
    title: "Tailwind CSS v4: What Actually Changed and Why It Matters",
    date: "2025-08-05",
    excerpt:
      "No more tailwind.config.js, a new CSS-first configuration approach, and blazing fast builds. Here's my breakdown of the real-world impact.",
  },
  {
    slug: "typescript-patterns-nextjs",
    title: "5 TypeScript Patterns That Made My Next.js Code Cleaner",
    date: "2025-06-18",
    excerpt:
      "From discriminated unions to satisfies and template literal types — these are the patterns I reach for every single project now.",
  },
  {
    slug: "building-for-ngos",
    title: "Building Web Apps for NGOs: What I've Learned Over 9 Years",
    date: "2025-04-03",
    excerpt:
      "Low budgets, non-technical stakeholders, and critical missions. Building for nonprofits taught me more about product thinking than any corporate project ever has.",
  },
];

export const experience: Job[] = [
  {
    company: "Freelance / Independent",
    role: "Full-Stack Web Developer",
    period: "2016 — Present",
    bullets: [
      "Build and maintain web applications for NGOs, churches, and small businesses across the Philippines and internationally.",
      "Transitioned client projects from legacy PHP/WordPress stacks to modern Next.js and Supabase architectures.",
      "Delivered 20+ production sites with a focus on performance, accessibility, and long-term maintainability.",
      "Consult on technology strategy, helping organizations choose the right stack for their needs and budget.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "PHP", "WordPress"],
  },
  {
    company: "Church & Ministry Organizations",
    role: "Web & Digital Solutions Lead",
    period: "2018 — Present",
    bullets: [
      "Designed and built digital infrastructure for ministry operations including donation systems, member portals, and event management.",
      "Created accessible, multilingual web experiences reaching global audiences.",
      "Trained non-technical staff on content management systems and digital workflows.",
    ],
    tech: ["Next.js", "Sanity", "PostgreSQL", "Node.js"],
  },
  {
    company: "Various Clients",
    role: "Frontend Developer (Contract)",
    period: "2015 — 2018",
    bullets: [
      "Built responsive landing pages and marketing sites for local businesses.",
      "Developed custom WordPress themes and plugins for content-heavy websites.",
      "Collaborated with designers to translate Figma mockups into pixel-perfect implementations.",
    ],
    tech: ["PHP", "WordPress", "JavaScript", "CSS", "HTML"],
  },
];
