import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientButtonProps {
    children: ReactNode;
    className?: string;
}

export default function GradientButton({
    children,
    className = "",
}: GradientButtonProps) {
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.95,
            }}
            className={`
                rounded-full
                bg-linear-to-r
                from-purple-600
                to-blue-500
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-purple-500/20
                ${className}
            `}
        >
            {children}
        </motion.button>
    );
}