"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Angular, Aws, Bootstrap, Css, Dart, Firebase, Flutter, GoogleCloud, Html, Java, Javascript, Laravel, MongoDb, MySql, NextJs, Oracle, Php, PostgreSql, Python, ReactJs, Spring, Tailwind, Typescript, Wordpress } from "../../../public/icons";

const technologies = [
    { image: NextJs, name: "Next Js", },
    { image: ReactJs, name: "React Js", },
    { image: Html, name: "Html", },
    { image: Css, name: "Css" },
    { image: Tailwind, name: "Tailwind Css" },
    { image: Typescript, name: "Typescript" },
    { image: Bootstrap, name: "Bootstrap" },
    { image: Java, name: "Java" },
    { image: GoogleCloud, name: "Google Cloud" },
    { image: Python, name: "Python" },
    { image: Firebase, name: "Firebase" },
    { image: Oracle, name: "Oracle" },
    { image: Angular, name: "Angular" },
    { image: Spring, name: "Spring" },
    { image: Laravel, name: "Laravel" },
    { image: MongoDb, name: "MongoDb" },
    { image: Php, name: "Php" },
    { image: Flutter, name: "Flutter" },
    { image: Dart, name: "Dart" },
    { image: Wordpress, name: "Wordpress" },
    { image: Javascript, name: "Javascript" },
    { image: Aws, name: "Amazon Aws" },
    { image: PostgreSql, name: "PostgreSql" },
    { image: MySql, name: "MySql" },
];

const topRow = [...technologies, ...technologies];
const bottomRow = [
    ...technologies.slice().reverse(),
    ...technologies.slice().reverse(),
];

function TechItem({
    tech,
    index,
}: {
    tech: (typeof technologies)[number];
    index: number;
    src: string;
}) {

    return (
        <motion.div
            key={`${tech.name}-${index}`}
            whileHover={{
                y: -5,
                scale: 1.04,
            }}
            className="
                group
                flex
                shrink-0
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/4
                px-5
                py-3
                backdrop-blur-xl
                transition-all
                duration-300
                hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]
            "
        >

            <Image src={tech.image as unknown as string} alt={tech.name} width={24} height={24} />



            <span
                className="
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-gray-400
                    transition
                    duration-300
                    group-hover:text-white
                "
            >
                {tech.name}
            </span>
        </motion.div>
    );
}

export default function TechMarquee() {
    return (
        <section
            id="tech"
            className="
                relative
                overflow-hidden
                border-y
                border-white/5
                bg-white/[0.015]
                py-12
                md:py-14
            "
        >
            {/* Ambient Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-40
                    w-[70%]
                    -translate-x-1/2
                    rounded-full
                    bg-purple-600/10
                    blur-[100px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-32
                    w-[60%]
                    -translate-x-1/2
                    rounded-full
                    bg-blue-600/10
                    blur-[100px]
                "
            />

            {/* Heading */}

            <div className="relative z-10 mb-7 text-center">
                <p
                    className="
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.3em]
                        text-gray-500
                    "
                >
                    Technologies I Work With
                </p>
            </div>

            {/* Marquee Area */}

            <div className="relative z-10 space-y-4">
                {/* Left Fade */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-0
                        top-0
                        z-30
                        h-full
                        w-20
                        bg-gradient-to-r
                        from-[#030303]
                        to-transparent
                        md:w-32
                    "
                />

                {/* Right Fade */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        right-0
                        top-0
                        z-30
                        h-full
                        w-20
                        bg-gradient-to-l
                        from-[#030303]
                        to-transparent
                        md:w-32
                    "
                />

                {/* ===================== */}
                {/* ROW 1 → LEFT */}
                {/* ===================== */}

                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="
                            flex
                            w-max
                            gap-4
                            px-2
                        "
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                        whileHover={{
                            animationPlayState: "paused",
                        }}
                    >
                        {topRow.map((tech, index) => (
                            <TechItem
                                key={`top-${tech.name}-${index}`}
                                tech={tech}
                                index={index} src={""} />
                        ))}
                    </motion.div>
                </div>

                {/* ===================== */}
                {/* ROW 2 → RIGHT */}
                {/* ===================== */}

                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="
                            flex
                            w-max
                            gap-4
                            px-2
                        "
                        animate={{
                            x: ["-50%", "0%"],
                        }}
                        transition={{
                            x: {
                                duration: 35,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                    >
                        {bottomRow.map((tech, index) => (
                            <TechItem
                                key={`bottom-${tech.name}-${index}`}
                                tech={tech}
                                index={index} src={""} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom Label */}

            <div className="relative z-10 mt-7 text-center">
                <span
                    className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-gray-600
                    "
                >
                    Modern · Scalable · Interactive
                </span>
            </div>
        </section>
    );
}