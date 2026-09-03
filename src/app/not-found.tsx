"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home, Terminal } from "lucide-react";

export default function NotFound() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
            {/* Background gradients */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

                <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />

                <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
            </div>

            {/* Grid background */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Floating particles */}
            <div className="pointer-events-none absolute inset-0">
                <FloatingDot
                    className="left-[12%] top-[20%]"
                    delay={0}
                    duration={5}
                />

                <FloatingDot
                    className="left-[82%] top-[18%]"
                    delay={1}
                    duration={6}
                />

                <FloatingDot
                    className="left-[18%] top-[75%]"
                    delay={2}
                    duration={7}
                />

                <FloatingDot
                    className="left-[78%] top-[72%]"
                    delay={0.5}
                    duration={5}
                />

                <FloatingDot
                    className="left-[50%] top-[12%]"
                    delay={1.5}
                    duration={6}
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
                <div className="w-full max-w-4xl text-center">
                    {/* Terminal label */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
                    >
                        <Terminal className="h-4 w-4 text-cyan-400" />

                        <span className="font-mono text-xs tracking-[0.2em] text-white/50">
                            SYSTEM_ERROR
                        </span>

                        <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
                    </motion.div>

                    {/* 404 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative mx-auto w-fit"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 blur-3xl">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-[clamp(8rem,25vw,20rem)] font-black leading-none text-transparent opacity-30">
                                404
                            </span>
                        </div>

                        {/* Main number */}
                        <h1 className="relative bg-gradient-to-br from-white via-white/80 to-white/20 bg-clip-text text-[clamp(8rem,25vw,20rem)] font-black leading-none tracking-[-0.08em] text-transparent">
                            404
                        </h1>

                        {/* Scanning line */}
                        <motion.div
                            animate={{
                                y: ["0%", "1000%"],
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                        />
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                            Looks like you&apos;re lost in space.
                        </h2>

                        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/45 sm:text-base">
                            The page you&apos;re looking for doesn&apos;t exist, has been
                            moved, or took a wrong turn somewhere in the digital universe.
                        </p>
                    </motion.div>

                    {/* Terminal card */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mx-auto mt-10 max-w-xl"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-[1px] shadow-2xl shadow-black/40 backdrop-blur-2xl">
                            {/* Animated border */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,rgba(34,211,238,0.5)_320deg,rgba(168,85,247,0.5)_350deg,transparent_360deg)]"
                            />

                            {/* <div className="relative rounded-2xl bg-[#080808]/90 p-5 text-left backdrop-blur-2xl">
                                <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-4">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

                                    <span className="ml-2 font-mono text-[10px] text-white/30">
                                        terminal
                                    </span>
                                </div>

                                <div className="space-y-2 font-mono text-xs sm:text-sm">
                                    <p className="text-white/30">
                                        <span className="text-cyan-400">inas@portfolio</span>
                                        <span className="text-white/20">:</span>
                                        <span className="text-purple-400">~</span>
                                        <span className="text-white/30">$</span>{" "}
                                        <span className="text-white/60">find requested-route</span>
                                    </p>

                                    <p className="text-red-400/80">
                                        ✕ Error: route_not_found
                                    </p>

                                    <p className="text-white/25">
                                        <span className="text-cyan-400">→</span> Redirecting you
                                        back to a safe location...
                                        <motion.span
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                            }}
                                        >
                                            ▋
                                        </motion.span>
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
                    >
                        {/* Home button */}
                        <Link
                            href="/"
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full p-[1px]"
                        >
                            {/* Animated border */}
                            <span className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_0deg,transparent_250deg,#22d3ee_300deg,#8b5cf6_330deg,transparent_360deg)]" />

                            <span className="relative flex items-center gap-2 rounded-full bg-[#090909] px-6 py-3 text-sm font-medium backdrop-blur-xl transition-all duration-300 group-hover:bg-white/[0.08]">
                                <Home className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:-translate-y-0.5" />

                                <span>Back Home</span>
                            </span>
                        </Link>

                        {/* Back button */}
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

                            <span>Go Back</span>
                        </button>
                    </motion.div>

                    {/* Footer text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-12 font-mono text-[10px] uppercase tracking-[0.25em] text-white/20"
                    >
                        Inas Ahamed · Full Stack Developer
                    </motion.p>
                </div>
            </div>
        </main>
    );
}

/* ---------------------------------------------
   Floating particle
--------------------------------------------- */

function FloatingDot({
    className,
    delay,
    duration,
}: {
    className: string;
    delay: number;
    duration: number;
}) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0.1, 0.7, 0.1],
                y: [0, -30, 0],
                scale: [1, 1.4, 1],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={`absolute h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.8)] ${className}`}
        />
    );
}