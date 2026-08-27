"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
    {
        year: "2026 — Present",
        title: "Freelance Full Stack Developer",
        company: "NexTurna Pvt Ltd",
        description:
            "Building modern web applications and digital products using Next.js, React, TypeScript and modern backend technologies.",
        icon: Briefcase,
    },
    {
        year: "2025 — 2026",
        title: "Data Entry Officer",
        company: "Port City BPO Pvt Ltd",
        description:
            "Worked with business data, maintained accurate records and supported day-to-day operational processes.",
        icon: Briefcase,
    },
    {
        year: "2024",
        title: "Software Engineering Intern",
        company: "Virgin Career Production",
        description:
            "Gained practical experience in software development while working with modern web technologies and development workflows.",
        icon: Briefcase,
    },
    {
        year: "Education",
        title: "HND in Information Technology",
        company: "SLIATE",
        description:
            "Studied software development, databases, networking, information systems and other core IT concepts.",
        icon: GraduationCap,
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden py-32"
        >
            {/* Background glow */}

            <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-purple-600/20 blur-[140px]" />

            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />

            <div className="relative mx-auto max-w-5xl px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
                        My Journey
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                        Experience & Education
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                        My professional journey, development experience and educational
                        background.
                    </p>
                </motion.div>

                {/* Timeline */}

                <div className="relative mt-20">

                    {/* Timeline line */}

                    <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-16">

                        {experiences.map((experience, index) => {
                            const Icon = experience.icon;

                            const isRight = index % 2 !== 0;

                            return (
                                <motion.div
                                    key={`${experience.year}-${experience.title}`}
                                    initial={{
                                        opacity: 0,
                                        y: 50,
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
                                        delay: index * 0.1,
                                    }}
                                    className="relative md:grid md:grid-cols-2 md:gap-16"
                                >

                                    {/* Timeline node */}

                                    <div className="absolute left-5 top-8 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-purple-400/40 bg-[#030303] shadow-[0_0_25px_rgba(139,92,246,0.5)] md:left-1/2">
                                        <Icon
                                            size={17}
                                            className="text-purple-300"
                                        />
                                    </div>

                                    {/* Card */}

                                    <div
                                        className={`
                      pl-14
                      md:pl-0
                      ${isRight
                                                ? "md:col-start-2"
                                                : "md:col-start-1"
                                            }
                    `}
                                    >
                                        <motion.div
                                            whileHover={{
                                                y: -6,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/30 hover:bg-white/[0.07]"
                                        >

                                            {/* Year */}

                                            <span className="text-sm font-medium text-cyan-400">
                                                {experience.year}
                                            </span>

                                            {/* Title */}

                                            <h3 className="mt-3 text-xl font-bold text-white md:text-2xl">
                                                {experience.title}
                                            </h3>

                                            {/* Company */}

                                            <p className="mt-2 font-medium text-purple-400">
                                                {experience.company}
                                            </p>

                                            {/* Description */}

                                            <p className="mt-4 text-sm leading-7 text-gray-400">
                                                {experience.description}
                                            </p>

                                        </motion.div>
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