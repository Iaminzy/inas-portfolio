"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Server,
    Database,
    Wrench,
} from "lucide-react";

import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiLaravel,
    SiMongodb,
    SiMysql,
    SiGit,
    SiGithub,
    SiThreedotjs,
    SiFramer,
} from "react-icons/si";

const categories = [
    {
        title: "Frontend",
        description: "Modern interfaces and web experiences",
        icon: Code2,
        skills: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        title: "Backend",
        description: "APIs and scalable server applications",
        icon: Server,
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "Laravel", icon: SiLaravel },
        ],
    },
    {
        title: "Database",
        description: "Data storage and management",
        icon: Database,
        skills: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql },
        ],
    },
    {
        title: "Tools & Creative",
        description: "Development tools and interactive experiences",
        icon: Wrench,
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Three.js", icon: SiThreedotjs },
            { name: "Framer Motion", icon: SiFramer },
        ],
    },
];

export default function TechStack() {
    return (
        <section
            id="tech-stack"
            className="
                relative
                overflow-hidden
                py-24
                sm:py-28
                lg:py-32
            "
        >
            {/* Background Glow */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/4
                    h-[350px]
                    w-[350px]
                    -translate-x-1/2
                    rounded-full
                    bg-purple-600/10
                    blur-[140px]
                    sm:h-[400px]
                    sm:w-[400px]
                "
            />

            <div
                aria-hidden="true"
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
                    sm:h-[300px]
                    sm:w-[300px]
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
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="
                        mx-auto
                        max-w-2xl
                        text-center
                    "
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
                        My Toolkit
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
                        Technologies I
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
                            Work With
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
                        A collection of technologies and tools I use
                        to design, develop, and ship modern digital
                        products.
                    </p>
                </motion.div>

                {/* Categories */}

                <div
                    className="
                        mt-12
                        grid
                        grid-cols-1
                        gap-6
                        sm:mt-14
                        md:grid-cols-2
                    "
                >
                    {categories.map((category, index) => {
                        const CategoryIcon = category.icon;

                        return (
                            <motion.div
                                key={category.title}
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                    ease: "easeOut",
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
                                    hover:-translate-y-1
                                    hover:border-white/20
                                    hover:bg-white/[0.055]
                                "
                            >
                                {/* Card Glow */}

                                <div
                                    aria-hidden="true"
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-20
                                        -top-20
                                        h-48
                                        w-48
                                        rounded-full
                                        bg-purple-500/10
                                        blur-3xl
                                        transition-all
                                        duration-500
                                        group-hover:scale-150
                                        group-hover:bg-purple-500/15
                                    "
                                />

                                {/* Category Header */}

                                <div
                                    className="
                                        relative
                                        flex
                                        items-start
                                        justify-between
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >
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
                                                transition-all
                                                duration-300
                                                group-hover:border-purple-400/30
                                                group-hover:bg-purple-500/10
                                            "
                                        >
                                            <CategoryIcon size={22} />
                                        </div>

                                        <div>
                                            <h3
                                                className="
                                                    text-lg
                                                    font-semibold
                                                    text-white
                                                "
                                            >
                                                {category.title}
                                            </h3>

                                            <p
                                                className="
                                                    mt-1
                                                    text-xs
                                                    text-gray-500
                                                "
                                            >
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Skills */}

                                <div
                                    className="
                                        relative
                                        mt-7
                                        flex
                                        flex-wrap
                                        gap-3
                                    "
                                >
                                    {category.skills.map((skill) => {
                                        const Icon = skill.icon;

                                        return (
                                            <div
                                                key={skill.name}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2.5
                                                    rounded-2xl
                                                    border
                                                    border-white/10
                                                    bg-black/20
                                                    px-4
                                                    py-3
                                                    text-sm
                                                    text-gray-300
                                                    transition-all
                                                    duration-300
                                                    hover:-translate-y-1
                                                    hover:scale-[1.02]
                                                    hover:border-purple-400/30
                                                    hover:bg-white/5
                                                    hover:text-white
                                                "
                                            >
                                                <Icon
                                                    size={18}
                                                    className="
                                                        text-gray-400
                                                        transition-colors
                                                        duration-300
                                                    "
                                                />

                                                <span>
                                                    {skill.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}