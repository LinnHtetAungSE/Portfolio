import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Linn Htet Aung - Full-Stack Software Engineer",
  description:
    "Welcome to the portfolio of Linn Htet Aung, a skilled Full-Stack Software Engineer specializing in modern web technologies such as Next.js, TypeScript, .NET, and Spring Boot.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body className="bg-pale-blue antialiased">
        {/* <Header /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
