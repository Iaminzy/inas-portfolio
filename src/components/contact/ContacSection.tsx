"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";



export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [status, setStatus] = useState<{
        type: "success" | "error" | "";
        message: string;
    }>({
        type: "",
        message: "",
    });

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setIsSubmitting(true);

        setStatus({
            type: "",
            message: "",
        });

        const form = event.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: String(formData.get("name") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            message: String(formData.get("message") ?? "").trim(),
            website: String(formData.get("website") ?? "").trim(),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.error || "Unable to send your message."
                );
            }

            setStatus({
                type: "success",
                message:
                    "Message sent successfully. I'll get back to you soon.",
            });

            form.reset();
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden pb-28 md:pb-36"
        >
            {/* Background Glow */}
            <div className="w-full absolute inset-0 h-screen z-0">
              
            </div>

            <div
                className="
                    pointer-events-none
                    absolute
                    left-0
                    top-1/3
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-purple-600/10
                    blur-[150px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-blue-600/10
                    blur-[140px]
                "
            />

            {/* Main Container */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    grid
                    max-w-6xl
                    grid-cols-1
                    gap-8
                    px-5
                    sm:px-6
                    lg:grid-cols-[0.8fr_1.2fr]
                    lg:px-8
                "
            >
                {/* ================================= */}
                {/* Contact Information                */}
                {/* ================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: -40,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/[0.035]
                        p-7
                        backdrop-blur-xl
                        md:p-8
                    "
                >
                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-[0.3em]
                            text-purple-400
                        "
                    >
                        Contact Details
                    </p>

                    <h2
                        className="
                            mt-4
                            text-3xl
                            font-bold
                            text-white
                        "
                    >
                        Let&apos;s connect.
                    </h2>

                    <p
                        className="
                            mt-4
                            text-sm
                            leading-7
                            text-gray-400
                        "
                    >
                        Whether you have a project idea, a job
                        opportunity, or simply want to say hello,
                        feel free to reach out.
                    </p>

                    {/* Email */}

                    <div className="mt-8 space-y-4">
                        <a
                            href="mailto:inasahamedofficial@gmail.com"
                            className="
                                group
                                flex
                                items-center
                                gap-4
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                p-4
                                transition
                                duration-300
                                hover:border-purple-400/30
                                hover:bg-white/[0.06]
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    text-purple-400
                                "
                            >
                                <Mail size={19} />
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">
                                    Email
                                </p>

                                <p className="mt-1 text-sm text-gray-300">
                                    inasahamedofficial@gmail.com
                                </p>
                            </div>
                        </a>

                        {/* Location */}

                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                p-4
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    text-blue-400
                                "
                            >
                                <MapPin size={19} />
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">
                                    Location
                                </p>

                                <p className="mt-1 text-sm text-gray-300">
                                    Sri Lanka
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}

                    <div className="mt-8 flex gap-3">
                        <a
                            href="https://github.com/YOUR_USERNAME"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                text-gray-400
                                transition
                                duration-300
                                hover:border-purple-400/30
                                hover:bg-purple-500/10
                                hover:text-white
                            "
                        >
                            <FaGithub size={19} />
                        </a>

                        <a
                            href="https://linkedin.com/in/YOUR_USERNAME"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                text-gray-400
                                transition
                                duration-300
                                hover:border-blue-400/30
                                hover:bg-blue-500/10
                                hover:text-white
                            "
                        >
                            <FaLinkedin size={19} />
                        </a>
                    </div>
                </motion.div>

                {/* ================================= */}
                {/* Contact Form                      */}
                {/* ================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.1,
                    }}
                    className="
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/[0.035]
                        p-7
                        backdrop-blur-xl
                        md:p-8
                    "
                >
                    {/* Card Glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-24
                            -top-24
                            h-56
                            w-56
                            rounded-full
                            bg-purple-500/10
                            blur-3xl
                        "
                    />

                    <div className="relative">
                        <p
                            className="
                                text-xs
                                uppercase
                                tracking-[0.3em]
                                text-blue-400
                            "
                        >
                            Send a Message
                        </p>

                        <h2
                            className="
                                mt-4
                                text-2xl
                                font-semibold
                                text-white
                            "
                        >
                            Tell me about your project
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >
                            {/* Name */}

                            <div>
                                <label
                                    htmlFor="name"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        text-gray-400
                                    "
                                >
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    maxLength={80}
                                    autoComplete="name"
                                    placeholder="Enter your name"
                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-black/20
                                        px-4
                                        py-3.5
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-gray-600
                                        transition
                                        focus:border-purple-400/40
                                        focus:bg-white/[0.04]
                                    "
                                />
                            </div>

                            {/* Email */}

                            <div>
                                <label
                                    htmlFor="email"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        text-gray-400
                                    "
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    maxLength={254}
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-black/20
                                        px-4
                                        py-3.5
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-gray-600
                                        transition
                                        focus:border-purple-400/40
                                        focus:bg-white/[0.04]
                                    "
                                />
                            </div>

                            {/* Message */}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        text-gray-400
                                    "
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    maxLength={3000}
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="
                                        w-full
                                        resize-none
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-black/20
                                        px-4
                                        py-3.5
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-gray-600
                                        transition
                                        focus:border-purple-400/40
                                        focus:bg-white/[0.04]
                                    "
                                />
                            </div>

                            {/* Honeypot */}

                            <div
                                className="absolute left-[-9999px]"
                                aria-hidden="true"
                            >
                                <label htmlFor="website">
                                    Website
                                </label>

                                <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            {/* Status */}

                            {status.message && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    role="alert"
                                    aria-live="polite"
                                    className={`
                                        rounded-2xl
                                        border
                                        px-4
                                        py-3
                                        text-sm
                                        ${status.type === "success"
                                            ? "border-green-400/20 bg-green-400/10 text-green-300"
                                            : "border-red-400/20 bg-red-400/10 text-red-300"
                                        }
                                    `}
                                >
                                    {status.message}
                                </motion.div>
                            )}

                            {/* Submit */}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="
                                    group
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-purple-600
                                    to-blue-500
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-lg
                                    shadow-purple-500/10
                                    transition
                                    duration-300
                                    hover:scale-[1.02]
                                    hover:shadow-purple-500/25
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                    disabled:hover:scale-100
                                "
                            >
                                {isSubmitting ? (
                                    <>
                                        <span
                                            className="
                                                h-4
                                                w-4
                                                animate-spin
                                                rounded-full
                                                border-2
                                                border-white/30
                                                border-t-white
                                            "
                                        />

                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message

                                        <Send
                                            size={17}
                                            className="
                                                transition
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                            "
                                        />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}