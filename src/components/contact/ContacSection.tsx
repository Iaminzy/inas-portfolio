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
            {/* =========================================
                BACKGROUND AMBIENT GLOW
            ========================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-[-150px]
                    top-1/3
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-purple-600/[0.08]
                    blur-[160px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-120px]
                    right-[-100px]
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-cyan-500/[0.07]
                    blur-[160px]
                "
            />

            {/* =========================================
                MAIN CONTAINER
            ========================================== */}

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

                {/* =========================================
                    CONTACT INFORMATION
                ========================================== */}

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
                        group
                        relative
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/[0.10]
                        bg-white/[0.035]
                        p-7
                        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                        backdrop-blur-2xl
                        md:p-8
                    "
                >

                    {/* Top Glass Reflection */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-x-8
                            top-0
                            h-px
                            bg-gradient-to-r
                            from-transparent
                            via-white/30
                            to-transparent
                        "
                    />

                    {/* Inner Purple Glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-24
                            -top-24
                            h-64
                            w-64
                            rounded-full
                            bg-purple-500/[0.08]
                            blur-3xl
                            transition-opacity
                            duration-500
                            group-hover:bg-purple-500/[0.12]
                        "
                    />

                    <div className="relative z-10">

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

                        {/* Contact Items */}

                        <div className="mt-8 space-y-4">

                            {/* Email */}

                            <a
                                href="mailto:inasahamedofficial@gmail.com"
                                className="
                                    group/item
                                    relative
                                    flex
                                    items-center
                                    gap-4
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/[0.08]
                                    bg-white/[0.025]
                                    p-4
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:border-purple-400/30
                                    hover:bg-white/[0.05]
                                    hover:shadow-[0_10px_30px_rgba(139,92,246,0.08)]
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
                                        border-purple-400/20
                                        bg-purple-500/[0.08]
                                        text-purple-400
                                        transition
                                        duration-300
                                        group-hover/item:bg-purple-500/[0.15]
                                        group-hover/item:shadow-[0_0_20px_rgba(139,92,246,0.15)]
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
                                    border-white/[0.08]
                                    bg-white/[0.025]
                                    p-4
                                    backdrop-blur-xl
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
                                        border-cyan-400/20
                                        bg-cyan-500/[0.08]
                                        text-cyan-400
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
                                    border-white/[0.08]
                                    bg-white/[0.035]
                                    text-gray-400
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:border-purple-400/30
                                    hover:bg-purple-500/[0.10]
                                    hover:text-white
                                    hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]
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
                                    border-white/[0.08]
                                    bg-white/[0.035]
                                    text-gray-400
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:border-cyan-400/30
                                    hover:bg-cyan-500/[0.10]
                                    hover:text-white
                                    hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]
                                "
                            >
                                <FaLinkedin size={19} />
                            </a>

                        </div>

                    </div>
                </motion.div>


                {/* =========================================
                    CONTACT FORM
                ========================================== */}

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
                        group
                        relative
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/[0.10]
                        bg-white/[0.035]
                        p-1
                        shadow-[0_25px_80px_rgba(0,0,0,0.4)]
                        backdrop-blur-2xl
                    "
                >

                    {/* =====================================
                        OUTER GLASS HIGHLIGHT
                    ====================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-x-8
                            top-0
                            h-px
                            bg-gradient-to-r
                            from-transparent
                            via-white/40
                            to-transparent
                        "
                    />

                    {/* Purple Ambient Glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-32
                            -top-32
                            h-72
                            w-72
                            rounded-full
                            bg-purple-500/[0.10]
                            blur-[90px]
                            transition
                            duration-500
                            group-hover:bg-purple-500/[0.16]
                        "
                    />

                    {/* Cyan Ambient Glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-32
                            -left-32
                            h-72
                            w-72
                            rounded-full
                            bg-cyan-500/[0.06]
                            blur-[90px]
                        "
                    />

                    {/* =====================================
                        INNER GLASS
                    ====================================== */}

                    <div
                        className="
                            relative
                            z-10
                            rounded-[24px]
                            border
                            border-white/[0.06]
                            bg-black/[0.28]
                            p-6
                            backdrop-blur-2xl
                            md:p-8
                        "
                    >

                        {/* Inner Top Reflection */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-x-8
                                top-0
                                h-px
                                bg-gradient-to-r
                                from-transparent
                                via-white/20
                                to-transparent
                            "
                        />

                        <div className="relative">

                            <p
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-purple-400
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
                                            border-white/[0.09]
                                            bg-white/[0.025]
                                            px-4
                                            py-3.5
                                            text-sm
                                            text-white
                                            outline-none
                                            shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]
                                            backdrop-blur-xl
                                            placeholder:text-gray-600
                                            transition-all
                                            duration-300
                                            hover:border-white/[0.16]
                                            hover:bg-white/[0.04]
                                            focus:border-purple-400/50
                                            focus:bg-purple-500/[0.035]
                                            focus:ring-1
                                            focus:ring-purple-400/20
                                            focus:shadow-[0_0_25px_rgba(139,92,246,0.10)]
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
                                            border-white/[0.09]
                                            bg-white/[0.025]
                                            px-4
                                            py-3.5
                                            text-sm
                                            text-white
                                            outline-none
                                            shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]
                                            backdrop-blur-xl
                                            placeholder:text-gray-600
                                            transition-all
                                            duration-300
                                            hover:border-white/[0.16]
                                            hover:bg-white/[0.04]
                                            focus:border-cyan-400/50
                                            focus:bg-cyan-500/[0.035]
                                            focus:ring-1
                                            focus:ring-cyan-400/20
                                            focus:shadow-[0_0_25px_rgba(6,182,212,0.10)]
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
                                            border-white/[0.09]
                                            bg-white/[0.025]
                                            px-4
                                            py-3.5
                                            text-sm
                                            text-white
                                            outline-none
                                            shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]
                                            backdrop-blur-xl
                                            placeholder:text-gray-600
                                            transition-all
                                            duration-300
                                            hover:border-white/[0.16]
                                            hover:bg-white/[0.04]
                                            focus:border-purple-400/50
                                            focus:bg-purple-500/[0.035]
                                            focus:ring-1
                                            focus:ring-purple-400/20
                                            focus:shadow-[0_0_25px_rgba(139,92,246,0.10)]
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
                                            backdrop-blur-xl
                                            ${status.type === "success"
                                                ? "border-green-400/20 bg-green-400/[0.08] text-green-300"
                                                : "border-red-400/20 bg-red-400/[0.08] text-red-300"
                                            }
                                        `}
                                    >
                                        {status.message}
                                    </motion.div>
                                )}

                                {/* Submit Button */}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="
                                        group/button
                                        relative
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-gradient-to-r
                                        from-purple-600/80
                                        via-purple-500/70
                                        to-blue-500/80
                                        px-6
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-white
                                        shadow-[0_10px_35px_rgba(99,102,241,0.15)]
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:scale-[1.01]
                                        hover:border-white/20
                                        hover:shadow-[0_15px_45px_rgba(99,102,241,0.25)]
                                        active:scale-[0.99]
                                        disabled:cursor-not-allowed
                                        disabled:opacity-60
                                        disabled:hover:scale-100
                                    "
                                >

                                    {/* Button Shine */}

                                    <span
                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-0
                                            -translate-x-full
                                            bg-gradient-to-r
                                            from-transparent
                                            via-white/20
                                            to-transparent
                                            transition-transform
                                            duration-700
                                            group-hover/button:translate-x-full
                                        "
                                    />

                                    <span className="relative z-10 flex items-center gap-2">
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
                                                        group-hover/button:translate-x-1
                                                        group-hover/button:-translate-y-1
                                                    "
                                                />
                                            </>
                                        )}
                                    </span>

                                </button>

                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}