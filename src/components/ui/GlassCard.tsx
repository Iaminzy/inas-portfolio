"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export default function GlassCard({
    children,
    className,
}: GlassCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            transition={{
                duration: 0.25,
            }}
            className={cn(
                `
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-2xl
                transition-all
                duration-500
                `,
                className
            )}
        >
            {/* Gradient Glow */}

            <div
                className="
                absolute
                inset-0
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
                bg-gradient-to-br
                from-purple-500/15
                via-transparent
                to-cyan-500/15
                "
            />

            {children}
        </motion.div>
    );
}