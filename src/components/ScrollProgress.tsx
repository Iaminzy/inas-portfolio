"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="
      fixed
      top-0S
      left-0
      right-0
      z-[999]
      h-1
      origin-left
      bg-gradient-to-r
      from-violet-500
      to-cyan-500
      "
    />
  );
}
