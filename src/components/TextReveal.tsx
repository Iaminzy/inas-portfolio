"use client";

import { motion } from "framer-motion";


export default function TextReveal({
    text
}: {
    text: string
}) {


    return (

        <div className="overflow-hidden">

            <motion.h1

                initial={{
                    y: 100
                }}

                animate={{
                    y: 0
                }}

                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}

            >

                {text}

            </motion.h1>


        </div>

    )

}