"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Lightbulb,
    Rocket,
} from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Software Development",
        description:
            "I enjoy turning ideas and problems into practical web applications using modern technologies.",
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description:
            "I focus on understanding the problem first and building solutions that are simple, useful, and maintainable.",
    },
    {
        icon: Rocket,
        title: "Always Learning",
        description:
            "Technology is constantly evolving, so I continuously explore new tools, frameworks, and development practices.",
    },
];

export default function AboutMe() {
    return (
        <section id="me" className="relative overflow-hidden py-24 md:py-32">
            {/* Background Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-0
                    top-1/3
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-purple-600/10
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-blue-600/10
                    blur-[130px]
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
                {/* Section Heading */}

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
                    className="mb-14"
                >
                    <p
                        className="
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.3em]
                            text-purple-400
                        "
                    >
                        Who I Am
                    </p>

                    <h2
                        className="
                            mt-4
                            max-w-3xl
                            text-3xl
                            font-bold
                            tracking-tight
                            text-white
                            sm:text-4xl
                            md:text-5xl
                        "
                    >
                        A Developer Who Loves
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
                            Building Things
                        </span>
                    </h2>
                </motion.div>

                {/* Main Content */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-8
                        lg:grid-cols-[1.1fr_0.9fr]
                    "
                >
                    {/* Story */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            margin: "-80px",
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/[0.035]
                            p-7
                            backdrop-blur-xl
                            sm:p-9
                        "
                    >
                        {/* Card Glow */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-24
                                -top-24
                                h-64
                                w-64
                                rounded-full
                                bg-purple-500/10
                                blur-3xl
                            "
                        />

                        <div className="relative">
                            <h3 className="text-2xl font-semibold text-white">
                                My Story
                            </h3>

                            <div className="mt-6 space-y-5 text-sm leading-7 text-gray-400 sm:text-base">
                                <p>
                                    I&apos;m a software developer with a
                                    background in Information Technology and a
                                    strong interest in web development and
                                    modern digital products.
                                </p>

                                <p>
                                    My development journey has given me
                                    experience working with frontend
                                    technologies, backend systems, databases,
                                    and full-stack applications.
                                </p>

                                <p>
                                    I enjoy creating interfaces that are not
                                    only visually appealing, but also
                                    responsive, accessible, and enjoyable to
                                    use.
                                </p>

                                <p>
                                    I&apos;m currently focused on improving my
                                    skills, building real-world projects, and
                                    exploring modern technologies such as
                                    Next.js, TypeScript, interactive 3D
                                    experiences, and AI integration.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Highlights */}

                    <div className="grid grid-cols-1 gap-5">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        x: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        margin: "-80px",
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.12,
                                    }}
                                    whileHover={{
                                        y: -5,
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
                                        hover:border-purple-400/20
                                        hover:bg-white/[0.055]
                                    "
                                >
                                    {/* Glow */}

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-12
                                            -top-12
                                            h-32
                                            w-32
                                            rounded-full
                                            bg-purple-500/10
                                            blur-3xl
                                            transition
                                            duration-500
                                            group-hover:scale-150
                                        "
                                    />

                                    <div className="relative flex gap-5">
                                        <div
                                            className="
                                                flex
                                                h-12
                                                w-12
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-white/5
                                                text-purple-400
                                                transition
                                                duration-300
                                                group-hover:border-purple-400/30
                                                group-hover:bg-purple-500/10
                                            "
                                        >
                                            <Icon size={21} />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}