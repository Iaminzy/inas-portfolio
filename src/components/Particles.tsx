"use client";

interface Particle {
    id: number;
    left: number;
    top: number;
    size: number;
    duration: number;
    delay: number;
}

const particles: Particle[] = [
    { id: 1, left: 8, top: 18, size: 2, duration: 5, delay: 0 },
    { id: 2, left: 15, top: 72, size: 1, duration: 6, delay: 1 },
    { id: 3, left: 23, top: 34, size: 2, duration: 7, delay: 2 },
    { id: 4, left: 31, top: 82, size: 1, duration: 5, delay: 1 },
    { id: 5, left: 38, top: 15, size: 2, duration: 8, delay: 3 },
    { id: 6, left: 44, top: 55, size: 1, duration: 6, delay: 2 },
    { id: 7, left: 51, top: 28, size: 2, duration: 7, delay: 0 },
    { id: 8, left: 58, top: 78, size: 1, duration: 5, delay: 2 },
    { id: 9, left: 64, top: 12, size: 2, duration: 6, delay: 1 },
    { id: 10, left: 71, top: 45, size: 1, duration: 8, delay: 3 },
    { id: 11, left: 77, top: 24, size: 2, duration: 7, delay: 1 },
    { id: 12, left: 83, top: 68, size: 1, duration: 6, delay: 2 },
    { id: 13, left: 91, top: 35, size: 2, duration: 5, delay: 0 },
    { id: 14, left: 5, top: 52, size: 1, duration: 7, delay: 3 },
    { id: 15, left: 18, top: 90, size: 2, duration: 6, delay: 1 },
    { id: 16, left: 27, top: 62, size: 1, duration: 8, delay: 2 },
    { id: 17, left: 35, top: 42, size: 2, duration: 5, delay: 0 },
    { id: 18, left: 47, top: 91, size: 1, duration: 7, delay: 2 },
    { id: 19, left: 55, top: 65, size: 2, duration: 6, delay: 1 },
    { id: 20, left: 62, top: 38, size: 1, duration: 8, delay: 3 },
    { id: 21, left: 69, top: 88, size: 2, duration: 5, delay: 2 },
    { id: 22, left: 74, top: 58, size: 1, duration: 7, delay: 0 },
    { id: 23, left: 80, top: 10, size: 2, duration: 6, delay: 1 },
    { id: 24, left: 87, top: 82, size: 1, duration: 8, delay: 2 },
    { id: 25, left: 96, top: 60, size: 2, duration: 5, delay: 3 },
    { id: 26, left: 12, top: 43, size: 1, duration: 7, delay: 1 },
    { id: 27, left: 33, top: 8, size: 2, duration: 6, delay: 2 },
    { id: 28, left: 42, top: 73, size: 1, duration: 8, delay: 0 },
    { id: 29, left: 67, top: 75, size: 2, duration: 5, delay: 2 },
    { id: 30, left: 94, top: 20, size: 1, duration: 7, delay: 1 },
];

export default function Particles() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
                <span
                    key={particle.id}
                    className="absolute rounded-full bg-white/40 animate-pulse"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}