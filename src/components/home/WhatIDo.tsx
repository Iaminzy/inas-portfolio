"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Layers3,
    Sparkles,
    BrainCircuit,
    ArrowUpRight,
} from "lucide-react";

const services = [
    {
        number: "01",
        title: "Web Development",
        description:
            "Modern, responsive websites built with clean architecture, smooth interactions, and high performance.",
        icon: Code2,
        gradient: "from-purple-500/20 to-blue-500/10",
    },
    {
        number: "02",
        title: "Full-Stack Applications",
        description:
            "Complete web applications with scalable frontends, powerful APIs, databases, authentication, and integrations.",
        icon: Layers3,
        gradient: "from-blue-500/20 to-cyan-500/10",
    },
    {
        number: "03",
        title: "Interactive Experiences",
        description:
            "Immersive interfaces with animations, 3D elements, micro-interactions, and modern visual experiences.",
        icon: Sparkles,
        gradient: "from-pink-500/20 to-purple-500/10",
    },
    {
        number: "04",
        title: "AI Integration",
        description:
            "Smart AI-powered features integrated into applications to create more useful and intelligent digital products.",
        icon: BrainCircuit,
        gradient: "from-cyan-500/20 to-blue-500/10",
    },
];

export default function WhatIDo() {
    return (
        <section
            id="services"
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
                    left-0
                    top-1/3
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-purple-600/10
                    blur-[130px]
                    sm:h-[350px]
                    sm:w-[350px]
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
                            text-purple-400
                        "
                    >
                        What I Do
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
                        Turning Ideas Into
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
                            Digital Experiences
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
                        I build modern digital products that combine
                        thoughtful design, reliable technology, and
                        engaging user experiences.
                    </p>
                </motion.div>

                {/* Services Grid */}

                <div
                    className="
                        mt-12
                        grid
                        grid-cols-1
                        gap-5
                        sm:mt-14
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.number}
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
                                    hover:-translate-y-2
                                    hover:border-white/20
                                    hover:bg-white/[0.06]
                                "
                            >
                                {/* Card Gradient */}

                                <div
                                    aria-hidden="true"
                                    className={`
                                        pointer-events-none
                                        absolute
                                        -right-16
                                        -top-16
                                        h-40
                                        w-40
                                        rounded-full
                                        bg-gradient-to-br
                                        ${service.gradient}
                                        blur-3xl
                                        opacity-60
                                        transition-transform
                                        duration-500
                                        group-hover:scale-150
                                        group-hover:opacity-100
                                    `}
                                />

                                {/* Number */}

                                <div
                                    className="
                                        relative
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >
                                    <span
                                        className="
                                            text-xs
                                            font-medium
                                            tracking-[0.2em]
                                            text-gray-600
                                        "
                                    >
                                        {service.number}
                                    </span>

                                    <ArrowUpRight
                                        size={18}
                                        className="
                                            text-gray-600
                                            transition-all
                                            duration-300
                                            group-hover:-translate-y-1
                                            group-hover:translate-x-1
                                            group-hover:text-purple-400
                                        "
                                    />
                                </div>

                                {/* Icon */}

                                <div
                                    className="
                                        relative
                                        mt-8
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
                                        transition-all
                                        duration-500
                                        group-hover:scale-110
                                        group-hover:border-purple-400/30
                                        group-hover:bg-purple-500/10
                                    "
                                >
                                    <Icon size={23} />
                                </div>

                                {/* Content */}

                                <div className="relative mt-6">
                                    <h3
                                        className="
                                            text-xl
                                            font-semibold
                                            text-white
                                        "
                                    >
                                        {service.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            leading-6
                                            text-gray-400
                                        "
                                    >
                                        {service.description}
                                    </p>
                                </div>

                                {/* Bottom Line */}

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
                                            absolute
                                            left-0
                                            top-0
                                            h-full
                                            w-0
                                            bg-gradient-to-r
                                            from-purple-500
                                            to-blue-500
                                            transition-[width]
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