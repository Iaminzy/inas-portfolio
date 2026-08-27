"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
const ParticlesBackground = dynamic(() => import("@/components/ui/Sparkles/Sparkles"), { ssr: false });

//import { SparklesCore } from "@/components/ui/Sparkles/Sparkles";

export default function ContactHero() {
    return (
        <section className="relative min-h-[700px] overflow-hidden py-28 md:py-36">
            {/* ================================
                BACKGROUND GLOW
            ================================= */}
            
            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-[450px]
                    w-[450px]
                    -translate-x-1/2
                    rounded-full
                    bg-purple-600/15
                    blur-[150px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    right-0
                    top-1/2
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-blue-600/10
                    blur-[130px]
                "
            />

            {/* ================================
                SPARKLES BACKGROUND
            ================================= */}


            {/* ================================
                CONTENT
            ================================= */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-4xl
                    px-5
                    text-center
                    sm:px-6
                    lg:px-8
                "
            >
                {/* Label */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="
                        mx-auto
                        flex
                        w-fit
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-4
                        py-2
                        backdrop-blur-xl
                    "
                >
                    <Mail
                        size={15}
                        className="text-purple-400"
                    />

                    <span
                        className="
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-gray-400
                        "
                    >
                        <ParticlesBackground />

                        Get In Touch
                    </span>
                </motion.div>

                {/* Heading */}

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                    }}
                    className="
                        mt-8
                        text-5xl
                        font-bold
                        tracking-tight
                        text-white
                        sm:text-6xl
                        md:text-7xl
                    "
                >
                    Let&apos;s Start a

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
                        Conversation.
                    </span>
                </motion.h1>

                {/* Description */}

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.25,
                    }}
                    className="
                        mx-auto
                        mt-7
                        max-w-2xl
                        text-base
                        leading-8
                        text-gray-400
                        sm:text-lg
                    "
                >
                    Have a project, idea, or opportunity in mind?
                    I&apos;d love to hear about it and explore how
                    we can turn your idea into something meaningful.
                </motion.p>

                {/* Scroll Indicator */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.8,
                    }}
                    className="
                        mt-12
                        flex
                        flex-col
                        items-center
                        gap-3
                        text-gray-600
                    "
                >
                    <span
                        className="
                            text-[10px]
                            uppercase
                            tracking-[0.3em]
                        "
                    >
                        Let&apos;s connect
                    </span>

                    <motion.div
                        animate={{
                            y: [0, 6, 0],
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <a
                            href="#tech"
                            aria-label="Scroll to connect section"
                        >
                            <ArrowDown size={20} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}