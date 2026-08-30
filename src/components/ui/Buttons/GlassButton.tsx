"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassButtonProps {
  text: string;
  href?: string;
  download?: boolean | string;
  onClick?: () => void;
  className?: string;
}

export default function GlassButton({
  text,
  href,
  download,
  onClick,
  className = "",
}: GlassButtonProps) {
  const button = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={`
        group
        relative
        inline-flex
        rounded-full
        ${className}
      `}
    >
      {/* Base Glass */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
        "
      />

      {/* Border Beam */}
      <span
        className="
          pointer-events-none
          absolute
          -inset-[1px]
          overflow-hidden
          rounded-full
        "
      >
        <span
          className="
            absolute
            h-[120px]
            w-[35px]
            -translate-y-1/2
            bg-gradient-to-b
            from-transparent
            via-cyan-400
            to-transparent
            blur-[2px]
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            [offset-path:inset(0_round_9999px)]
            [offset-rotate:0deg]
            animate-[borderBeam_2.5s_linear_infinite]
          "
        />
      </span>

      {/* Inner Glass */}
      <span
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-white/[0.08]
          bg-[#08080c]/80
          px-8
          py-3.5
          text-sm
          font-medium
          tracking-wide
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          group-hover:bg-white/[0.07]
          group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
        "
      >
        {/* Reflection */}
        <span
          className="
            pointer-events-none
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />

        <span className="relative z-10 whitespace-nowrap">
          {text}
        </span>
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className="inline-flex"
      >
        {button}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex"
    >
      {button}
    </button>
  );
}