import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export default function GlassCard({
    children,
    className = "",
}: GlassCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -8,
            }}
            transition={{
                duration: 0.3,
            }}
            className={`
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-xl
                ${className}
            `}
        >
            {children}
        </motion.div>
    );
}