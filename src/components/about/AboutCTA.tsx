"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowUpRight,
    Mail,
    Sparkles,
} from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
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
                    left-1/4
                    top-1/2
                    h-[250px]
                    w-[250px]
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/10
                    blur-[120px]
                "
            />

            {/* Container */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-6xl
                    px-5
                    sm:px-6
                    lg:px-8
                "
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        margin: "-100px",
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="
                        relative
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-white/10
                        bg-white/[0.035]
                        px-6
                        py-16
                        text-center
                        backdrop-blur-2xl
                        sm:px-10
                        md:py-20
                        lg:px-20
                    "
                >
                    {/* Decorative Glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-24
                            -top-24
                            h-64
                            w-64
                            rounded-full
                            bg-purple-500/10
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-24
                            -right-24
                            h-64
                            w-64
                            rounded-full
                            bg-blue-500/10
                            blur-3xl
                        "
                    />

                    {/* Icon */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.7,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.15,
                            duration: 0.5,
                        }}
                        className="
                            relative
                            mx-auto
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-purple-400/20
                            bg-purple-500/10
                            text-purple-400
                        "
                    >
                        <Sparkles size={24} />
                    </motion.div>

                    {/* Label */}

                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.25,
                        }}
                        className="
                            relative
                            mt-6
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.3em]
                            text-purple-400
                        "
                    >
                        Let&apos;s Create Something
                    </motion.p>

                    {/* Heading */}

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                        }}
                        className="
                            relative
                            mx-auto
                            mt-5
                            max-w-3xl
                            text-4xl
                            font-bold
                            tracking-tight
                            text-white
                            sm:text-5xl
                            md:text-6xl
                        "
                    >
                        Ready to Build
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
                            Something Great?
                        </span>
                    </motion.h2>

                    {/* Description */}

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 0.6,
                        }}
                        className="
                            relative
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-sm
                            leading-7
                            text-gray-400
                            sm:text-base
                        "
                    >
                        Whether you have a project idea, a business
                        concept, or simply want to connect, I&apos;d
                        love to hear from you.
                    </motion.p>

                    {/* Button */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.6,
                        }}
                        className="
                            relative
                            mt-9
                            flex
                            justify-center
                        "
                    >
                        <Link
                            href="/contact"
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                rounded-full
                                bg-gradient-to-r
                                from-purple-600
                                to-blue-500
                                px-7
                                py-3.5
                                text-sm
                                font-semibold
                                text-white
                                shadow-lg
                                shadow-purple-500/20
                                transition
                                duration-300
                                hover:scale-105
                                hover:shadow-purple-500/30
                            "
                        >
                            <Mail size={18} />

                            Let&apos;s Talk

                            <ArrowUpRight
                                size={17}
                                className="
                                    transition
                                    duration-300
                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                "
                            />
                        </Link>
                    </motion.div>

                    {/* Bottom Line */}

                    <div
                        className="
                            relative
                            mx-auto
                            mt-12
                            h-px
                            max-w-md
                            bg-gradient-to-r
                            from-transparent
                            via-white/10
                            to-transparent
                        "
                    />

                    <p
                        className="
                            relative
                            mt-5
                            text-xs
                            text-gray-600
                        "
                    >
                        Let&apos;s turn ideas into meaningful digital
                        experiences.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}