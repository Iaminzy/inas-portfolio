import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import SparkleBackground from "@/components/SparkleBackground";

export const metadata: Metadata = {
  title: "Inas Ahamed | Full Stack Developer",
  description:
    "Portfolio of Inas Ahamed - Full Stack Developer specializing in Next.js, React, TypeScript and modern web applications.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <html lang="en">

        <body
          className=" min-h-screen bg-[#030303] text-white antialiased "
        >
          <SparkleBackground />
          <ScrollProgress />

          <Navbar />

          <PageTransition>
            
            {children}
          </PageTransition>

          <Footer />

        </body>

      </html >
    </>


  );
}