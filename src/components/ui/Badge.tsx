import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

export default function Badge({
    children,
    className,
}: BadgeProps) {
    return (
        <span
            className={cn(
                `
                inline-flex
                items-center
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3
                py-1.5
                text-xs
                font-medium
                text-gray-300
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-purple-500/50
                hover:bg-purple-500/10
                hover:text-white
                `,
                className
            )}
        >
            {children}
        </span>
    );
}