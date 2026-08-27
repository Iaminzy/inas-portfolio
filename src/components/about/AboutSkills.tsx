"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Layers3,
    Palette,
    Gauge,
    Users,
    Sparkles,
} from "lucide-react";

const skills = [
    {
        icon: Brain,
        title: "Problem Solving",
        description:
            "Breaking complex problems into practical and manageable solutions.",
    },
    {
        icon: Layers3,
        title: "Full-Stack Development",
        description:
            "Building complete applications across frontend, backend, APIs, and databases.",
    },
    {
        icon: Palette,
        title: "UI & UX",
        description:
            "Creating clean, modern interfaces with a strong focus on usability.",
    },
    {
        icon: Gauge,
        title: "Performance",
        description:
            "Building responsive applications with performance and scalability in mind.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "Working effectively with others through clear communication and teamwork.",
    },
    {
        icon: Sparkles,
        title: "Creative Thinking",
        description:
            "Exploring creative ideas to make digital products more engaging and memorable.",
    },
];

export default function AboutSkills() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            {/* Background Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[450px]
                    w-[450px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-purple-600/10
                    blur-[150px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    h-[250px]
                    w-[250px]
                    rounded-full
                    bg-blue-600/10
                    blur-[120px]
                "
            />

            {/* Container */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
                    px-5
                    sm:px-6
                    lg:px-8
                "
            >
                {/* Heading */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
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
                        duration: 0.7,
                    }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <p
                        className="
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.3em]
                            text-blue-400
                        "
                    >
                        How I Work
                    </p>

                    <h2
                        className="
                            mt-4
                            text-3xl
                            font-bold
                            tracking-tight
                            text-white
                            sm:text-4xl
                            md:text-5xl
                        "
                    >
                        Skills Beyond
                        <span
                            className="
                                ml-2
                                bg-gradient-to-r
                                from-purple-400
                                via-pink-400
                                to-blue-500
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Code
                        </span>
                    </h2>

                    <p
                        className="
                            mt-5
                            text-sm
                            leading-7
                            text-gray-400
                            sm:text-base
                        "
                    >
                        The mindset and capabilities I bring to every
                        project, from the first idea to the final product.
                    </p>
                </motion.div>

                {/* Skills Grid */}

                <div
                    className="
                        mt-14
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <motion.div
                                key={skill.title}
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
                                    margin: "-80px",
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                whileHover={{
                                    y: -7,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/[0.035]
                                    p-6
                                    backdrop-blur-xl
                                    transition-all
                                    duration-500
                                    hover:border-purple-400/25
                                    hover:bg-white/[0.055]
                                "
                            >
                                {/* Card Glow */}

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-14
                                        -top-14
                                        h-36
                                        w-36
                                        rounded-full
                                        bg-purple-500/10
                                        blur-3xl
                                        transition
                                        duration-500
                                        group-hover:scale-150
                                        group-hover:bg-purple-500/15
                                    "
                                />

                                {/* Icon */}

                                <div
                                    className="
                                        relative
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        text-purple-400
                                        transition
                                        duration-500
                                        group-hover:scale-110
                                        group-hover:border-purple-400/30
                                        group-hover:bg-purple-500/10
                                    "
                                >
                                    <Icon size={22} />
                                </div>

                                {/* Content */}

                                <div className="relative mt-6">
                                    <h3
                                        className="
                                            text-lg
                                            font-semibold
                                            text-white
                                        "
                                    >
                                        {skill.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            leading-6
                                            text-gray-400
                                        "
                                    >
                                        {skill.description}
                                    </p>
                                </div>

                                {/* Bottom Accent */}

                                <div
                                    className="
                                        relative
                                        mt-7
                                        h-px
                                        w-full
                                        overflow-hidden
                                        bg-white/5
                                    "
                                >
                                    <div
                                        className="
                                            h-full
                                            w-0
                                            bg-gradient-to-r
                                            from-purple-500
                                            to-blue-500
                                            transition-all
                                            duration-500
                                            group-hover:w-full
                                        "
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}