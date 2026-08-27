"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Nexora",
        description:
            "A modern multi-vendor e-commerce platform designed with a scalable architecture, responsive interface, and smooth shopping experience.",
        image: "/projects/nexora.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "MongoDB",
        ],
        demo: "#",
        github: "#",
    },
    {
        title: "Giftbox Lanka",
        description:
            "An e-commerce platform built to provide customers with a simple, smooth, and responsive online shopping experience.",
        image: "/projects/giftbox.png",
        technologies: [
            "React",
            "Laravel",
            "MySQL",
            "Bootstrap",
        ],
        demo: "#",
        github: "#",
    },
    {
        title: "SmartHaven",
        description:
            "A full-stack MERN application featuring a modern user interface, REST APIs, database integration, and complete application functionality.",
        image: "/projects/smarthaven.png",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
        ],
        demo: "#",
        github: "#",
    },
    {
        title: "WOW LMS",
        description:
            "A modern Learning Management System designed to provide students and instructors with an organized digital learning experience.",
        image: "/projects/wow-lms.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "MongoDB",
        ],
        demo: "#",
        github: "#",
    },
    {
        title: "iKnowWay",
        description:
            "A social media platform focused on creating an interactive environment where users can connect, share content, and communicate.",
        image: "/projects/iknowway.png",
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
        ],
        demo: "#",
        github: "#",
    },
    {
        title: "Football Management System",
        description:
            "A desktop-based football management application developed to manage teams, players, matches, and related football information.",
        image: "/projects/football-management.png",
        technologies: [
            "Java",
            "MySQL",
        ],
        demo: "#",
        github: "#",
    },
    {
        title: "Clinic Management System",
        description:
            "A web-based clinic management system created to manage patients, appointments, medical information, and clinic operations.",
        image: "/projects/clinic-management.png",
        technologies: [
            "PHP",
            "Bootstrap",
            "MySQL",
        ],
        demo: "#",
        github: "#",
    },
    {
        title: "Employee CRUD System",
        description:
            "A lightweight employee management application demonstrating CRUD operations with a clean Laravel-based architecture.",
        image: "/projects/employee-crud.png",
        technologies: [
            "Laravel",
            "PHP",
            "MySQL",
            "Blade",
        ],
        demo: "#",
        github: "#",
    },
];

export default function ProjectsGrid() {
    return (
        <section id="projects-grid" className="relative overflow-hidden py-20 md:py-28">
            {/* Background Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/4
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    rounded-full
                    bg-purple-600/10
                    blur-[160px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-blue-600/10
                    blur-[140px]
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
                {/* Grid */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
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
                                y: -8,
                            }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/[0.035]
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                hover:border-purple-400/25
                                hover:bg-white/[0.055]
                            "
                        >
                            {/* Image */}

                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />

                                {/* Overlay */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/80
                                        via-black/10
                                        to-transparent
                                    "
                                />

                                {/* Project Number */}

                                <span
                                    className="
                                        absolute
                                        left-4
                                        top-4
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-black/40
                                        px-3
                                        py-1
                                        text-xs
                                        text-gray-300
                                        backdrop-blur-md
                                    "
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* View Demo */}

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        absolute
                                        bottom-4
                                        right-4
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-black/50
                                        text-white
                                        opacity-0
                                        backdrop-blur-md
                                        transition
                                        duration-300
                                        group-hover:opacity-100
                                    "
                                    aria-label={`View ${project.title}`}
                                >
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>

                            {/* Content */}

                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <h3
                                        className="
                                            text-xl
                                            font-semibold
                                            text-white
                                        "
                                    >
                                        {project.title}
                                    </h3>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            shrink-0
                                            text-gray-500
                                            transition
                                            duration-300
                                            hover:text-white
                                        "
                                        aria-label={`${project.title} GitHub repository`}
                                    >
                                        <FaGithub size={19} />
                                    </a>
                                </div>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-6
                                        text-gray-400
                                    "
                                >
                                    {project.description}
                                </p>

                                {/* Technologies */}

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map(
                                        (technology) => (
                                            <span
                                                key={technology}
                                                className="
                                                    rounded-full
                                                    border
                                                    border-white/10
                                                    bg-white/5
                                                    px-3
                                                    py-1.5
                                                    text-xs
                                                    text-gray-400
                                                    transition
                                                    duration-300
                                                    group-hover:border-purple-400/20
                                                    group-hover:text-gray-300
                                                "
                                            >
                                                {technology}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Bottom Accent */}

                                <div
                                    className="
                                        mt-6
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
                            </div>

                            {/* Card Glow */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-20
                                    -top-20
                                    h-40
                                    w-40
                                    rounded-full
                                    bg-purple-500/10
                                    blur-3xl
                                    opacity-0
                                    transition
                                    duration-500
                                    group-hover:scale-150
                                    group-hover:opacity-100
                                "
                            />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}