import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ralf De Leon — Full-Stack Developer",
  description:
    "Full-stack web developer specializing in Next.js, React, TypeScript, and modern web technologies. Building fast, accessible, and beautiful web experiences.",
  openGraph: {
    title: "Ralf De Leon — Full-Stack Developer",
    description:
      "Full-stack web developer specializing in Next.js, React, TypeScript, and modern web technologies.",
    url: "https://mybranches.net",
    siteName: "Ralf De Leon",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralf De Leon — Full-Stack Developer",
    description:
      "Full-stack web developer specializing in Next.js, React, TypeScript, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
