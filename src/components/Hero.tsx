"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import GlassButton from "@/components/ui/Buttons/GlassButton";
import MouseGlow from "./MouseGlow";
import TechBadge from "./TechBadge";
import Hero3D from "./Hero3D";
import Sparkles from "@/components/ui/Sparkles/Sparkles";

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const visualVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const scrollVariants: Variants = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Interactive Effects */}
      <Sparkles />
      <MouseGlow />

      {/* Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-[#030303]
        "
      />

      {/* Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          -z-20
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/20
          blur-[150px]
        "
      />

      {/* Blue Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          right-10
          -z-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Main Container */}
      <div
        className="
          container
          mx-auto
          flex
          min-h-screen
          items-center
          px-6
          lg:px-12
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-12
            lg:grid-cols-2
          "
        >
          {/* LEFT SIDE */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Welcome Text */}
            <p
              className="
                mb-5
                text-sm
                uppercase
                tracking-[6px]
                text-purple-400
              "
            >
              Welcome To My Portfolio
            </p>

            {/* Main Heading */}
            <h1
              className="
                text-5xl
                font-bold
                leading-tight
                md:text-7xl
              "
            >
              Hi, I&apos;m

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-purple-400
                  via-fuchsia-400
                  to-cyan-400
                  bg-clip-text
                  font-serif
                  text-transparent
                "
              >
                Inas Ahamed
              </span>
            </h1>

            {/* Job Title */}
            <h2
              className="
                mt-5
                text-2xl
                font-semibold
                text-white/90
                md:text-3xl
              "
            >
              Full Stack
              <span
                className="
                  bg-gradient-to-r
                  from-purple-400
                  via-pink-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                Developer
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-8
                tracking-[1px]
                text-gray-400
              "
            >
              I build modern digital experiences that combine thoughtful
              design, powerful technology, and intelligent solutions. From
              responsive web applications to interactive interfaces, I work
              with React, Next.js, TypeScript, JavaScript, and AI-powered
              technologies to turn ideas into scalable products.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-4
              "
            >
              <GlassButton
                text="View Projects"
                href="/projects"
              />

              <GlassButton
                text="Lets Talk"
                href="/contact"
              />
            </div>

            {/* Social Links */}
            <div
              className="
                mt-10
                flex
                items-center
                gap-5
              "
            >
              {/* GitHub */}
              <a
                href="https://github.com/Iaminzy"
                aria-label="GitHub"
                className="
                  text-gray-400
                  transition
                  duration-300
                  hover:scale-110
                  hover:text-white
                "
              >
                <FaGithub size={22} />
              </a>

              {/* LinkedIn */}
              <a
                href="https:/linkedin.com/in/mohamednowfeel-inas-ahamed"
                aria-label="LinkedIn"
                className="
                  text-gray-400
                  transition
                  duration-300
                  hover:scale-110
                  hover:text-white
                "
              >
                <FaLinkedin size={22} />
              </a>

              {/* Email */}
              <a
                href="mailtoinasahamedofficial@gmail.com"
                aria-label="Email"
                className="
                  text-gray-400
                  transition
                  duration-300
                  hover:scale-110
                  hover:text-white
                "
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            animate="visible"
            className="
              relative
              hidden
              h-[600px]
              lg:block
            "
          >
            {/* 3D Model */}
            <div className="absolute inset-0">
              <Hero3D />
            </div>

            {/* Technology Badges */}
            {/*
            <TechBadge
              name="Next.js"
              className="left-10 top-10"
            />

            <TechBadge
              name="React"
              className="right-10 top-28"
            />

            <TechBadge
              name="TypeScript"
              className="left-0 top-60"
            />

            <TechBadge
              name="Tailwind"
              className="bottom-28 left-20"
            />

            <TechBadge
              name="Framer Motion"
              className="bottom-20 right-10"
            />
            */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#tech"
        aria-label="Go to About page"
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
        "
      >
        <motion.div
          variants={scrollVariants}
          animate="animate"
          className="
            flex
            flex-col
            items-center
            text-gray-400
            transition
            duration-300
            hover:text-white
          "
        >
          <span
            className="
              mb-2
              text-sm
              uppercase
              tracking-widest
            "
          >
            Scroll
          </span>

          <ChevronDown size={32} />
        </motion.div>
      </a>
    </section>
  );
}