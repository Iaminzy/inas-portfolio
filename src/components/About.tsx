"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#050505] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 uppercase tracking-[5px] text-violet-400"
        >
          About Me
        </motion.p>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold leading-tight md:text-6xl">
              Passionate About
              <br />
              Building Modern
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              I&apos;m a Full Stack Developer specializing in Next.js, React,
              TypeScript, Tailwind CSS, and modern UI development. I enjoy
              creating fast, interactive, and visually appealing web
              applications.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-5xl">
                👨‍💻
              </div>

              <h3 className="text-2xl font-semibold">
                Inas Ahamed
              </h3>

              <p className="mt-2 text-gray-400">
                Full Stack Developer
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between">
                  <span className="text-gray-400">Experience</span>
                  <span>Freelance</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Projects</span>
                  <span>5+</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Location</span>
                  <span>Sri Lanka</span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}