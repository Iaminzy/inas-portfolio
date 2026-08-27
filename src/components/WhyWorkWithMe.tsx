"use client";

import { motion } from "framer-motion";
import {
    Lightbulb,
    Rocket,
    MessageCircle,
    ShieldCheck,
} from "lucide-react";

const reasons = [
    {
        icon: Lightbulb,
        title: "Problem Solver",
        description:
            "I focus on understanding the problem first and then creating practical, scalable solutions.",
    },
    {
        icon: Rocket,
        title: "Modern Technology",
        description:
            "I use modern technologies and development practices to build fast, responsive, and maintainable applications.",
    },
    {
        icon: MessageCircle,
        title: "Clear Communication",
        description:
            "I believe good communication is essential for turning ideas into successful digital products.",
    },
    {
        icon: ShieldCheck,
        title: "Quality Focused",
        description:
            "I pay attention to details, performance, responsiveness, and user experience throughout the development process.",
    },
];

export default function WhyWorkWithMe() {
    return (
        <section
            id="why-work-with-me"
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
                    top-1/2
                    h-[350px]
                    w-[350px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-purple-600/10
                    blur-[140px]
                    sm:h-[500px]
                    sm:w-[500px]
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
                        Why Work With Me
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
                        More Than Just
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
                        I combine technical skills, creativity, and
                        a problem-solving mindset to build digital
                        experiences that deliver real value.
                    </p>
                </motion.div>

                {/* Reasons */}

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
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;

                        return (
                            <motion.div
                                key={reason.title}
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
                                    p-5
                                    backdrop-blur-xl
                                    transition-all
                                    duration-500
                                    hover:-translate-y-1
                                    hover:border-purple-400/20
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
                                        -right-16
                                        -top-16
                                        h-36
                                        w-36
                                        rounded-full
                                        bg-purple-500/10
                                        blur-3xl
                                        transition-transform
                                        duration-500
                                        group-hover:scale-150
                                    "
                                />

                                {/* Number */}

                                <span
                                    aria-hidden="true"
                                    className="
                                        absolute
                                        right-5
                                        top-5
                                        text-xs
                                        font-medium
                                        tracking-widest
                                        text-gray-700
                                    "
                                >
                                    0{index + 1}
                                </span>

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
                                        transition-all
                                        duration-300
                                        group-hover:scale-105
                                        group-hover:border-purple-400/30
                                        group-hover:bg-purple-500/10
                                    "
                                >
                                    <Icon
                                        size={22}
                                        strokeWidth={1.8}
                                    />
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
                                        {reason.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            leading-6
                                            text-gray-400
                                        "
                                    >
                                        {reason.description}
                                    </p>
                                </div>

                                {/* Bottom Accent */}

                                <div
                                    aria-hidden="true"
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

                {/* Bottom Statement */}

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
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    className="
                        mx-auto
                        mt-12
                        max-w-3xl
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/[0.025]
                        px-6
                        py-7
                        text-center
                        backdrop-blur-xl
                        sm:mt-14
                        sm:px-10
                        sm:py-8
                    "
                >
                    <p
                        className="
                            text-base
                            font-medium
                            leading-7
                            text-gray-200
                            sm:text-xl
                            sm:leading-8
                        "
                    >
                        &ldquo;Good software isn&apos;t just about
                        making something work — it&apos;s about making
                        it useful, reliable, and enjoyable to use.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}