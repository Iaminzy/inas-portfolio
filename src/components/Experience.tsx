"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const experiences = [
    {
        role: "Freelance Developer",
        company: "NexTurna Pvt Ltd",
        period: "2024 — Present",
        description:
            "Developing modern web applications and digital solutions while working across frontend and full-stack development. Building responsive interfaces, scalable applications, and interactive user experiences.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Laravel",
            "MongoDB",
        ],
    },
    {
        role: "Software Developer Intern",
        company: "Virgin Career Production",
        period: "Jan 2024 — Jul 2024",
        description:
            "Gained practical software development experience by working on web-based projects, improving programming skills, and learning professional development workflows.",
        technologies: [
            "PHP",
            "JavaScript",
            "MySQL",
            "HTML",
            "CSS",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
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
                    top-1/3
                    h-[350px]
                    w-[350px]
                    -translate-x-1/2
                    rounded-full
                    bg-purple-600/10
                    blur-[140px]
                    sm:h-[450px]
                    sm:w-[450px]
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-[250px]
                    w-[250px]
                    rounded-full
                    bg-blue-600/5
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
                    max-w-5xl
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
                            text-purple-400
                        "
                    >
                        Experience
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
                        My Professional
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
                            Journey
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
                        My journey in software development, from
                        learning and building to creating real-world
                        digital solutions.
                    </p>
                </motion.div>

                {/* Timeline */}

                <div className="relative mt-14 sm:mt-16">
                    {/* Timeline Line */}

                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            left-[9px]
                            top-0
                            h-full
                            w-px
                            bg-gradient-to-b
                            from-purple-500/60
                            via-white/10
                            to-transparent
                            md:left-1/2
                            md:-translate-x-1/2
                        "
                    />

                    {experiences.map((experience, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={`${experience.company}-${experience.role}`}
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
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                                className="
                                    relative
                                    mb-10
                                    last:mb-0
                                    sm:mb-14
                                    md:mb-16
                                "
                            >
                                {/* Timeline Dot */}

                                <div
                                    aria-hidden="true"
                                    className="
                                        absolute
                                        left-0
                                        top-7
                                        z-20
                                        flex
                                        h-5
                                        w-5
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-purple-400/50
                                        bg-[#030303]
                                        md:left-1/2
                                        md:-translate-x-1/2
                                    "
                                >
                                    <div
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-purple-400
                                            shadow-[0_0_12px_rgba(168,85,247,0.8)]
                                        "
                                    />
                                </div>

                                {/* Card Wrapper */}

                                <div
                                    className={`
                                        ml-8
                                        sm:ml-10
                                        md:ml-0
                                        md:w-[calc(50%-40px)]
                                        ${isEven
                                            ? "md:mr-auto"
                                            : "md:ml-auto"
                                        }
                                    `}
                                >
                                    {/* Card */}

                                    <div
                                        className="
                                            group
                                            relative
                                            overflow-hidden
                                            rounded-3xl
                                            border
                                            border-white/10
                                            bg-white/[0.035]
                                            p-5
                                            backdrop-blur-xl
                                            transition-all
                                            duration-500
                                            hover:-translate-y-1
                                            hover:border-white/20
                                            hover:bg-white/[0.055]
                                            sm:p-6
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
                                                h-40
                                                w-40
                                                rounded-full
                                                bg-purple-500/10
                                                blur-3xl
                                                transition-all
                                                duration-500
                                                group-hover:scale-150
                                                group-hover:bg-purple-500/20
                                            "
                                        />

                                        {/* Header */}

                                        <div
                                            className="
                                                relative
                                                flex
                                                flex-col
                                                gap-3
                                                sm:flex-row
                                                sm:items-start
                                                sm:justify-between
                                            "
                                        >
                                            <div>
                                                <h3
                                                    className="
                                                        text-lg
                                                        font-semibold
                                                        text-white
                                                        sm:text-xl
                                                    "
                                                >
                                                    {experience.role}
                                                </h3>

                                                <p
                                                    className="
                                                        mt-1
                                                        text-sm
                                                        font-medium
                                                        text-purple-400
                                                    "
                                                >
                                                    {experience.company}
                                                </p>
                                            </div>

                                            {/* Date */}

                                            <div
                                                className="
                                                    flex
                                                    w-fit
                                                    shrink-0
                                                    items-center
                                                    gap-1.5
                                                    rounded-full
                                                    border
                                                    border-white/10
                                                    bg-white/5
                                                    px-3
                                                    py-1.5
                                                    text-xs
                                                    text-gray-400
                                                "
                                            >
                                                <CalendarDays
                                                    size={13}
                                                />

                                                {experience.period}
                                            </div>
                                        </div>

                                        {/* Description */}

                                        <p
                                            className="
                                                relative
                                                mt-5
                                                text-sm
                                                leading-6
                                                text-gray-400
                                            "
                                        >
                                            {experience.description}
                                        </p>

                                        {/* Technologies */}

                                        <div
                                            className="
                                                relative
                                                mt-5
                                                flex
                                                flex-wrap
                                                gap-2
                                            "
                                        >
                                            {experience.technologies.map(
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
                                                            transition-colors
                                                            duration-300
                                                            hover:border-purple-400/30
                                                            hover:text-gray-200
                                                        "
                                                    >
                                                        {technology}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}