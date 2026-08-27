"use client";

import { motion } from "framer-motion";

interface Sparkle {
    id: number;
    left: string;
    top: string;
    size: number;
    delay: number;
    duration: number;
}

const sparkles: Sparkle[] = [
    { id: 1, left: "5%", top: "18%", size: 2, delay: 0, duration: 3 },
    { id: 2, left: "12%", top: "72%", size: 3, delay: 1, duration: 4 },
    { id: 3, left: "18%", top: "35%", size: 1, delay: 2, duration: 3 },
    { id: 4, left: "25%", top: "15%", size: 2, delay: 0.5, duration: 4 },
    { id: 5, left: "31%", top: "62%", size: 1, delay: 1.5, duration: 3 },
    { id: 6, left: "38%", top: "28%", size: 3, delay: 2, duration: 5 },
    { id: 7, left: "44%", top: "80%", size: 1, delay: 0, duration: 4 },
    { id: 8, left: "50%", top: "12%", size: 2, delay: 1, duration: 3 },
    { id: 9, left: "56%", top: "45%", size: 1, delay: 2, duration: 5 },
    { id: 10, left: "63%", top: "20%", size: 2, delay: 0.5, duration: 4 },
    { id: 11, left: "69%", top: "70%", size: 1, delay: 1.5, duration: 3 },
    { id: 12, left: "75%", top: "38%", size: 3, delay: 2, duration: 5 },
    { id: 13, left: "82%", top: "15%", size: 1, delay: 0, duration: 4 },
    { id: 14, left: "88%", top: "58%", size: 2, delay: 1, duration: 3 },
    { id: 15, left: "94%", top: "30%", size: 1, delay: 2, duration: 4 },
    { id: 16, left: "8%", top: "48%", size: 1, delay: 1, duration: 5 },
    { id: 17, left: "22%", top: "88%", size: 2, delay: 0.5, duration: 4 },
    { id: 18, left: "35%", top: "48%", size: 1, delay: 2, duration: 3 },
    { id: 19, left: "47%", top: "35%", size: 2, delay: 1, duration: 5 },
    { id: 20, left: "60%", top: "85%", size: 1, delay: 0, duration: 4 },
    { id: 21, left: "73%", top: "52%", size: 2, delay: 2, duration: 3 },
    { id: 22, left: "86%", top: "82%", size: 1, delay: 1, duration: 5 },
];

export default function Sparkles() {
    return (
        <div
            className="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
            "
            aria-hidden="true"
        >
            {sparkles.map((sparkle) => (
                <motion.span
                    key={sparkle.id}
                    className="
                        absolute
                        rounded-full
                        bg-white
                    "
                    style={{
                        left: sparkle.left,
                        top: sparkle.top,
                        width: sparkle.size,
                        height: sparkle.size,
                        boxShadow:
                            "0 0 6px rgba(168,85,247,0.9), 0 0 12px rgba(59,130,246,0.5)",
                    }}
                    animate={{
                        opacity: [0.15, 1, 0.15],
                        scale: [0.7, 1.5, 0.7],
                    }}
                    transition={{
                        duration: sparkle.duration,
                        delay: sparkle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}