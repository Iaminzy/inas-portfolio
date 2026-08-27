"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demo: string;
    github: string;
}

export default function ProjectCard({
    title,
    description,
    image,
    technologies,
    demo,
    github,
}: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
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
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="
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
                        from-black/70
                        via-black/10
                        to-transparent
                    "
                />

                {/* Glow */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-40
                        w-40
                        rounded-full
                        bg-purple-500/20
                        blur-3xl
                        opacity-0
                        transition
                        duration-500
                        group-hover:opacity-100
                    "
                />

                {/* Project Label */}

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
                    Project
                </span>

                {/* Demo Button */}

                <a
                    href={demo}
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
                        bg-black/40
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition
                        duration-300
                        group-hover:opacity-100
                    "
                    aria-label={`View ${title}`}
                >
                    <ArrowUpRight size={18} />
                </a>
            </div>

            {/* Content */}

            <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">
                        {title}
                    </h3>

                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            text-gray-500
                            transition
                            duration-300
                            hover:text-white
                        "
                        aria-label={`${title} GitHub repository`}
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
                    {description}
                </p>

                {/* Technologies */}

                <div className="mt-5 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
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
                            "
                        >
                            {technology}
                        </span>
                    ))}
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
        </motion.article>
    );
}