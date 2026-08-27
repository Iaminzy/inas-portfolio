"use client";

import { motion } from "framer-motion";


export default function GradientOrb() {

    return (

        <motion.div

            animate={{

                x: [0, 80, 0],

                y: [0, -60, 0]

            }}

            transition={{

                duration: 8,

                repeat: Infinity,

                ease: "easeInOut"

            }}

            className="
absolute
h-96
w-96
rounded-full
bg-purple-600/20
blur-[120px]
"

        />

    );

}