"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export default function CTA() {
    return (
        <section
            id="contact-cta"
            className="
                relative
                overflow-hidden
                py-24
                md:py-32
            "
        >
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
                    bg-purple-600/20
                    blur-[160px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[300px]
                    w-[300px]
                    -translate-x-1/2
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

                    {/* Small Label */}

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
                            delay: 0.2,
                        }}
                        className="
                            relative
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.3em]
                            text-purple-400
                        "
                    >
                        Have a Project in Mind?
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
                            delay: 0.25,
                            duration: 0.6,
                        }}
                        className="
                            relative
                            mx-auto
                            mt-5
                            max-w-4xl
                            text-4xl
                            font-bold
                            tracking-tight
                            text-white
                            sm:text-5xl
                            md:text-6xl
                        "
                    >
                        Let&apos;s Build Something
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
                            Amazing Together.
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
                            delay: 0.35,
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
                        Have an idea, project, or opportunity in
                        mind? Let&apos;s turn it into a modern digital
                        experience together.
                    </motion.p>

                    {/* Buttons */}

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
                            delay: 0.45,
                            duration: 0.6,
                        }}
                        className="
                            relative
                            mt-9
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-4
                            sm:flex-row
                        "
                    >
                        {/* Contact Button */}

                        <Link
                            href="/contact"
                            className="
                                group
                                flex
                                w-full
                                items-center
                                justify-center
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
                                sm:w-auto
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

                        {/* Projects Button */}

                        <Link
                            href="/projects"
                            className="
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-7
                                py-3.5
                                text-sm
                                font-medium
                                text-gray-200
                                transition
                                duration-300
                                hover:border-white/20
                                hover:bg-white/10
                                hover:text-white
                                sm:w-auto
                            "
                        >
                            View My Work
                        </Link>
                    </motion.div>

                    {/* Bottom Decoration */}

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
                        Available for freelance projects and
                        development opportunities.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}