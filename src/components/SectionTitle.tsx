"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
    subtitle: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}

export default function SectionTitle({
    subtitle,
    title,
    description,
    align = "center",
}: SectionTitleProps) {
    const alignment =
        align === "center"
            ? "items-center text-center"
            : "items-start text-left";

    return (
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
            className={`flex flex-col ${alignment}`}
        >
            {/* Subtitle */}

            <span
                className="
                    mb-4
                    text-sm
                    uppercase
                    tracking-[6px]
                    text-purple-400
                "
            >
                {subtitle}
            </span>

            {/* Title */}

            <h2
                className="
                
                    text-4xl
                    font-bold
                    leading-tight
                    md:text-5xl
                "
            >
                {title}
            </h2>

            {/* Description */}

            {description && (
                <p
                    className="
                        mt-5
                        max-w-2xl
                        text-base
                        leading-7
                        text-gray-400
                        md:text-lg
                        md:leading-8
                    "
                >
                    {description}
                </p>
            )}
        </motion.div>
    );
}