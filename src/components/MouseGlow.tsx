"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const glow = glowRef.current;

        if (!glow) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let currentX = mouseX;
        let currentY = mouseY;

        let animationFrame: number;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        };

        const animate = () => {
            currentX += (mouseX - currentX) * 0.08;
            currentY += (mouseY - currentY) * 0.08;

            glow.style.transform = `translate3d(
                ${currentX - 225}px,
                ${currentY - 225}px,
                0
            )`;

            animationFrame = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);

        animationFrame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            aria-hidden="true"
            className="
                pointer-events-none
                fixed
                left-0
                top-0
                z-0
                h-[450px]
                w-[450px]
                rounded-full
                bg-[radial-gradient(circle,rgba(168,85,247,0.30)_0%,rgba(139,92,246,0.18)_30%,rgba(34,211,238,0.10)_55%,transparent_75%)]
                blur-[35px]
                will-change-transform
            "
        />
    );
}