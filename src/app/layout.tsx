import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import SparkleBackground from "@/components/SparkleBackground";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Inas Ahamed | Full Stack Developer",
  description:
    "Portfolio of Inas Ahamed - Full Stack Developer specializing in Next.js, React, TypeScript and modern web applications.",
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-[#030303] text-white antialiased ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        <SparkleBackground />
        <ScrollProgress />

        <Navbar />

        <PageTransition>
          {children}
        </PageTransition>

        <Footer />
      </body>
    </html>
  );
}