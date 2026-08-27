"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    baseAlpha: number;
    life: number;
    maxLife: number;
    twinkle: number;
}

interface BurstParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    life: number;
}

export default function SparkleBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        let animationFrame = 0;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const mouse = {
            x: -1000,
            y: -1000,
            active: false,
        };

        const particles: Particle[] = [];
        const bursts: BurstParticle[] = [];

        const isMobile = window.innerWidth < 768;

        const PARTICLE_COUNT = isMobile ? 70 : 150;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const random = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        const createParticle = (): Particle => {
            return {
                x: random(0, width),
                y: random(0, height),

                vx: random(-0.12, 0.12),
                vy: random(-0.12, 0.12),

                size: random(0.5, 1.8),

                alpha: random(0.2, 0.8),
                baseAlpha: random(0.2, 0.8),

                life: random(0, 100),
                maxLife: random(100, 220),

                twinkle: random(0.01, 0.04),
            };
        };

        const initializeParticles = () => {
            particles.length = 0;

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(createParticle());
            }
        };

        const createBurst = (x: number, y: number) => {
            const burstCount = isMobile ? 18 : 30;

            for (let i = 0; i < burstCount; i++) {
                const angle =
                    (Math.PI * 2 * i) / burstCount +
                    random(-0.2, 0.2);

                const speed = random(1, 4);

                bursts.push({
                    x,
                    y,

                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,

                    size: random(1, 3),

                    alpha: 1,

                    life: random(30, 55),
                });
            }
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
        };

        const handleClick = (event: MouseEvent) => {
            createBurst(event.clientX, event.clientY);
        };

        const drawGlow = (
            x: number,
            y: number,
            radius: number,
            alpha: number
        ) => {
            const gradient = ctx.createRadialGradient(
                x,
                y,
                0,
                x,
                y,
                radius
            );

            gradient.addColorStop(
                0,
                `rgba(168, 85, 247, ${alpha})`
            );

            gradient.addColorStop(
                0.4,
                `rgba(99, 102, 241, ${alpha * 0.4})`
            );

            gradient.addColorStop(
                1,
                "rgba(0, 0, 0, 0)"
            );

            ctx.fillStyle = gradient;

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
        };

        const drawParticle = (particle: Particle) => {
            ctx.save();

            ctx.globalAlpha = particle.alpha;

            ctx.fillStyle = "rgba(255,255,255,1)";

            ctx.shadowBlur = 8;
            ctx.shadowColor = "rgba(168,85,247,0.8)";

            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );

            ctx.fill();

            ctx.restore();
        };

        const drawBurstParticle = (
            particle: BurstParticle
        ) => {
            ctx.save();

            ctx.globalAlpha = particle.alpha;

            ctx.fillStyle = "rgba(255,255,255,1)";

            ctx.shadowBlur = 15;
            ctx.shadowColor = "rgba(168,85,247,1)";

            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );

            ctx.fill();

            ctx.restore();
        };

        const updateParticles = () => {
            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                particle.life += 1;

                /*
                 * Twinkle effect
                 */
                particle.alpha =
                    particle.baseAlpha +
                    Math.sin(
                        particle.life *
                        particle.twinkle
                    ) *
                    0.25;

                /*
                 * Mouse attraction
                 */
                if (mouse.active) {
                    const dx = mouse.x - particle.x;
                    const dy = mouse.y - particle.y;

                    const distance = Math.sqrt(
                        dx * dx + dy * dy
                    );

                    const influence = 120;

                    if (distance < influence && distance > 0) {
                        const force =
                            (influence - distance) /
                            influence;

                        particle.x +=
                            (dx / distance) *
                            force *
                            0.35;

                        particle.y +=
                            (dy / distance) *
                            force *
                            0.35;

                        particle.alpha = Math.min(
                            1,
                            particle.alpha + force * 0.5
                        );
                    }
                }

                /*
                 * Wrap around screen
                 */
                if (particle.x < -10) {
                    particle.x = width + 10;
                }

                if (particle.x > width + 10) {
                    particle.x = -10;
                }

                if (particle.y < -10) {
                    particle.y = height + 10;
                }

                if (particle.y > height + 10) {
                    particle.y = -10;
                }
            });
        };

        const updateBursts = () => {
            for (let i = bursts.length - 1; i >= 0; i--) {
                const particle = bursts[i];

                particle.x += particle.vx;
                particle.y += particle.vy;

                particle.vx *= 0.96;
                particle.vy *= 0.96;

                particle.alpha *= 0.94;

                particle.life -= 1;

                if (
                    particle.life <= 0 ||
                    particle.alpha < 0.02
                ) {
                    bursts.splice(i, 1);
                }
            }
        };

        const animate = () => {
            ctx.clearRect(
                0,
                0,
                width,
                height
            );

            /*
             * Subtle mouse glow
             */
            if (mouse.active) {
                drawGlow(
                    mouse.x,
                    mouse.y,
                    140,
                    0.06
                );
            }

            /*
             * Normal particles
             */
            updateParticles();

            particles.forEach(drawParticle);

            /*
             * Click bursts
             */
            updateBursts();

            bursts.forEach(drawBurstParticle);

            animationFrame =
                requestAnimationFrame(animate);
        };

        resizeCanvas();
        initializeParticles();
        animate();

        window.addEventListener(
            "resize",
            resizeCanvas
        );

        window.addEventListener(
            "mousemove",
            handleMouseMove,
            { passive: true }
        );

        window.addEventListener(
            "mouseleave",
            handleMouseLeave
        );

        window.addEventListener(
            "click",
            handleClick
        );

        return () => {
            cancelAnimationFrame(animationFrame);

            window.removeEventListener(
                "resize",
                resizeCanvas
            );

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );

            window.removeEventListener(
                "click",
                handleClick
            );
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="
                pointer-events-none
                fixed
                inset-0
                z-[-5]
                h-screen
                w-screen
            "
        />
    );
}