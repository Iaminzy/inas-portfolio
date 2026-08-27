"use client";

import { motion } from "framer-motion";

type Props = {
    name: string;
    className?: string;
};

export default function TechBadge({ name, className }: Props) {
    return (
        <motion.div
            animate={{
                y: [0, -12, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={`
        absolute
        rounded-full
        border
        border-white/10
        bg-white/10
        backdrop-blur-xl
        px-5
        py-2
        text-sm
        text-white
        shadow-lg
        ${className}
      `}
        >
            {name}
        </motion.div>
    );
}