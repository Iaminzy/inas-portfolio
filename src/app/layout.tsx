import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import SparkleBackground from "@/components/SparkleBackground";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Inas Ahamed | Full Stack Developer",
    template: "%s | Inas Ahamed",
  },
  description:
    "Inas Ahamed is a Full Stack Developer specializing in Next.js, React, Node.js, PHP, Laravel and MongoDB.",
  keywords: [
    "Inas Ahamed",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Sri Lanka Developer",
    "Kandy Web Developer",
  ],
  authors: [{ name: "Inas Ahamed" }],
  creator: "Inas Ahamed",
  metadataBase: new URL("https://inas-portfolio-k9oe.vercel.app"),
  openGraph: {
    title: "Inas Ahamed | Full Stack Developer",
    description:
      "Portfolio of Inas Ahamed, a Full Stack Developer specializing in modern web applications.",
    url: "https://inas-portfolio-k9oe.vercel.app",
    siteName: "Inas Ahamed",
    type: "website",
  },
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