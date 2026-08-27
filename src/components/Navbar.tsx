"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Navbar */}

            <motion.nav
                initial={{
                    opacity: 0,
                    y: -20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="
                    fixed
                    left-1/2
                    top-5
                    z-[100]
                    w-[calc(100%-2rem)]
                    max-w-6xl
                    -translate-x-1/2
                "
            >
                <div
                    className="
                        rounded-full
                        border
                        border-white/10
                        bg-black/60
                        px-5
                        py-3
                        shadow-2xl
                        backdrop-blur-2xl
                        md:px-6
                        md:py-4
                    "
                >
                    <div className="flex items-center justify-between">

                        {/* Logo */}

                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                            className="
                                text-xl
                                font-bold
                                tracking-wide
                            "
                        >
                            <span
                                className="
                                    bg-gradient-to-r
                                    from-purple-400
                                    via-pink-400
                                    to-blue-500
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                INAS
                            </span>

                            <span className="text-white">
                                .DEV
                            </span>
                        </Link>


                        {/* Desktop Navigation */}

                        <div
                            className="
                                hidden
                                items-center
                                gap-8
                                md:flex
                            "
                        >
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="
                                        text-sm
                                        text-gray-300
                                        transition
                                        hover:text-white
                                    "
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>


                        {/* Mobile Button */}

                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            aria-label={
                                open
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={open}
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                text-white
                                md:hidden
                            "
                        >
                            {open ? (
                                <X size={21} />
                            ) : (
                                <Menu size={21} />
                            )}
                        </button>

                    </div>
                </div>
            </motion.nav>


            {/* Mobile Menu */}

            <AnimatePresence>
                {open && (
                    <>
                        {/* Background overlay */}

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            onClick={() => setOpen(false)}
                            className="
                                fixed
                                inset-0
                                z-[90]
                                bg-black/50
                                backdrop-blur-sm
                                md:hidden
                            "
                        />


                        {/* Menu panel */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -20,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -20,
                                scale: 0.96,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            className="
                                fixed
                                left-4
                                right-4
                                top-[88px]
                                z-[95]
                                max-h-[calc(100vh-110px)]
                                overflow-y-auto
                                rounded-3xl
                                border
                                border-white/10
                                bg-[#080808]/95
                                p-3
                                shadow-2xl
                                backdrop-blur-2xl
                                md:hidden
                            "
                        >

                            {/* Header */}

                            <div
                                className="
                                    px-4
                                    pb-3
                                    pt-2
                                    text-xs
                                    uppercase
                                    tracking-[0.2em]
                                    text-gray-500
                                "
                            >
                                Navigation
                            </div>


                            {/* Navigation Links */}

                            <div className="space-y-1">

                                {links.map(
                                    (link, index) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{
                                                opacity: 0,
                                                x: -15,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            transition={{
                                                delay:
                                                    index *
                                                    0.05,
                                            }}
                                        >
                                            <Link
                                                href={
                                                    link.href
                                                }
                                                onClick={() =>
                                                    setOpen(
                                                        false
                                                    )
                                                }
                                                className="
                                                    group
                                                    flex
                                                    w-full
                                                    items-center
                                                    justify-between
                                                    rounded-2xl
                                                    px-4
                                                    py-4
                                                    text-gray-300
                                                    transition
                                                    hover:bg-white/5
                                                    hover:text-white
                                                "
                                            >
                                                <span className="text-base font-medium">
                                                    {
                                                        link.name
                                                    }
                                                </span>

                                                <ArrowUpRight
                                                    size={
                                                        18
                                                    }
                                                    className="
                                                        text-gray-600
                                                        transition
                                                        group-hover:-translate-y-1
                                                        group-hover:translate-x-1
                                                        group-hover:text-purple-400
                                                    "
                                                />
                                            </Link>
                                        </motion.div>
                                    )
                                )}

                            </div>


                            {/* Bottom */}

                            <div
                                className="
                                    mt-3
                                    h-px
                                    bg-gradient-to-r
                                    from-transparent
                                    via-purple-500/40
                                    to-transparent
                                "
                            />

                            <p
                                className="
                                    px-4
                                    pb-2
                                    pt-4
                                    text-center
                                    text-xs
                                    text-gray-600
                                "
                            >
                                Inas Ahamed · Developer
                            </p>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}