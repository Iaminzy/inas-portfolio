"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[160px]" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <p className="text-xs font-medium uppercase tracking-[0.35em] text-purple-400">
                        About Me
                    </p>

                    <h1 className="mt-5 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                        Building Digital
                        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">
                            Experiences
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                        I&apos;m Inas Ahamed, a software developer passionate
                        about building modern, interactive, and meaningful
                        digital products.
                    </p>

                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="mt-12 flex justify-center"
                    >
                        <a
                            href="#me"
                            aria-label="Scroll to technologies"
                        >
                            <ArrowDown size={20} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}