"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface GradientButtonProps {
    children: ReactNode;
    className?: string;
    href?: string;
}

export default function GradientButton({
    children,
    className,
    href,
}: GradientButtonProps) {
    const classes = cn(
        `
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-gradient-to-r
        from-purple-600
        to-cyan-500
        px-6
        py-3
        font-medium
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:shadow-purple-500/40
        `,
        className
    );

    if (href) {
        return (
            <motion.a
                href={href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={classes}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={classes}
        >
            {children}
        </motion.button>
    );
}