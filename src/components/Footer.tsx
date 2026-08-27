"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="
                border-t
                border-white/10
                bg-black/40
                py-8
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-7xl
                    flex-col
                    items-center
                    justify-between
                    gap-5
                    px-5
                    sm:px-6
                    md:flex-row
                    lg:px-8
                "
            >
                {/* Copyright */}

                <p
                    className="
                        text-center
                        text-sm
                        text-gray-400
                        md:text-left
                    "
                >
                    © {new Date().getFullYear()} Inas Ahamed.
                    All rights reserved.
                </p>

                {/* Social Links */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            text-gray-400
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-purple-400/30
                            hover:bg-purple-500/10
                            hover:text-white
                        "
                    >
                        <FaGithub size={19} />
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            text-gray-400
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-blue-400/30
                            hover:bg-blue-500/10
                            hover:text-white
                        "
                    >
                        <FaLinkedin size={19} />
                    </a>
                </div>
            </div>
        </footer>
    );
}