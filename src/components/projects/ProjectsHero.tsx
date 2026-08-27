"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ProjectsHero() {
    const scrollToProjects = () => {
        document
            .getElementById("projects-grid")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden pt-24">
            {/* Background Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-purple-600/15
                    blur-[160px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    right-0
                    top-1/4
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-blue-600/10
                    blur-[140px]
                "
            />

            {/* Content */}

            <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
                {/* Label */}

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.35em]
                        text-purple-400
                    "
                >
                    My Projects
                </motion.p>

                {/* Heading */}

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                    }}
                    className="
                        mt-5
                        text-5xl
                        font-bold
                        tracking-tight
                        text-white
                        sm:text-6xl
                        md:text-7xl
                    "
                >
                    Things I&apos;ve
                    <span
                        className="
                            block
                            bg-gradient-to-r
                            from-purple-400
                            via-pink-400
                            to-blue-500
                            bg-clip-text
                            text-transparent
                        "
                    >
                        Built.
                    </span>
                </motion.h1>

                {/* Description */}

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.25,
                    }}
                    className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-sm
                        leading-7
                        text-gray-400
                        sm:text-base
                    "
                >
                    A collection of web applications, digital
                    products, and software projects built with
                    modern technologies and a focus on usability,
                    performance, and clean design.
                </motion.p>

                {/* Scroll Button */}

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.45,
                    }}
                    whileHover={{ y: 4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToProjects}
                    className="
                        mx-auto
                        mt-10
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-5
                        py-3
                        text-sm
                        text-gray-300
                        backdrop-blur-xl
                        transition
                        duration-300
                        hover:border-purple-400/30
                        hover:bg-white/10
                        hover:text-white
                    "
                >
                    Explore Projects

                    <ArrowDown
                        href="#projects-grid"
                        size={16}
                        className="animate-bounce"
                    />
                </motion.button>
            </div>

            {/* Bottom Fade */}

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-32
                    w-full
                    bg-gradient-to-t
                    from-[#030303]
                    to-transparent
                "
            />
        </section>
    );
}