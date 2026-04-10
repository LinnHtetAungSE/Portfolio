import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/Header";

export const metadata: Metadata = {
  title: {
    default: "Lin Htet Aung | Full-Stack Software Engineer",
    template: "%s | Lin Htet Aung",
  },
  description:
    "Portfolio of Lin Htet Aung, a Full-Stack Software Engineer specializing in high-performance web architecture, Next.js, TypeScript, .NET, and Spring Boot.",
  keywords: [
    "Lin Htet Aung",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Nest.js Developer",
    "Myanmar Developer",
    "Backend Developer",
    "MERN-Stack Developer",
    "Library Developer",
    "Frontend Developer",
    "TypeScript",
    ".NET",
    "Spring Boot",
    "Web Architecture",
    "Chiang Mai Developer",
  ],
  authors: [{ name: "Lin Htet Aung" }],
  creator: "Lin Htet Aung",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linhtetaung.netlify.app/",
    title: "Lin Htet Aung | Full-Stack Software Engineer",
    description:
      "Expert technical solutions and high-performance web development by Lin Htet Aung.",
    siteName: "Lin Htet Aung Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lin Htet Aung | Full-Stack Software Engineer",
    description:
      "Expert technical solutions and high-performance web development by Lin Htet Aung.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white antialiased text-slate-900 relative">
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-white dark:bg-[#0b0f19]">
          <div className="gradient-bg" />
          <div className="grid-overlay" />
        </div>

        <Header />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
