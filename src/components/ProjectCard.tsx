"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demo?: string;
    github?: string;
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
                margin: "-80px",
            }}
            transition={{
                duration: 0.6,
            }}
            whileHover={{
                y: -8,
            }}
            className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
            "
        >
            {/* Image */}

            <div
                className="
                    relative
                    h-[220px]
                    overflow-hidden
                    sm:h-[240px]
                "
            >
                <Image
                    src={image}
                    alt={`${title} project preview`}
                    fill
                    sizes="
                        (max-width: 768px) 100vw,
                        (max-width: 1280px) 50vw,
                        33vw
                    "
                    className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-transparent
                        to-transparent
                    "
                />
            </div>

            {/* Content */}

            <div className="p-6">
                <h3
                    className="
                        text-2xl
                        font-bold
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                        mt-3
                        line-clamp-3
                        text-sm
                        leading-6
                        text-gray-400
                    "
                >
                    {description}
                </p>

                {/* Technologies */}

                <div
                    className="
                        mt-5
                        flex
                        flex-wrap
                        gap-2
                    "
                >
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-3
                                py-1.5
                                text-xs
                                text-gray-300
                            "
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}

                <div
                    className="
                        mt-6
                        flex
                        gap-3
                    "
                >
                    {demo && (
                        <motion.a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.04,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-full
                                bg-gradient-to-r
                                from-purple-600
                                to-blue-500
                                px-5
                                py-2.5
                                text-sm
                                font-medium
                            "
                        >
                            <ExternalLink size={16} />
                            Live
                        </motion.a>
                    )}

                    {github && (
                        <motion.a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.04,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-5
                                py-2.5
                                text-sm
                            "
                        >
                            <FaGithub size={16} />
                            Code
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}