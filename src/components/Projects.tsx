"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";


const projects = [
    {
        title: "Nexora E-Commerce Platform",
        description:
            "A modern multi-vendor e-commerce platform built with Next.js, TypeScript and modern UI technologies.",
        image: "/projects/nexora.png",
        tech: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "MongoDB",
        ],
        github: "#",
        demo: "#",
    },

    {
        title: "Giftbox Lanka",
        description:
            "An online gift store platform with responsive UI and shopping features.",
        image: "/projects/giftbox.png",
        tech: [
            "React",
            "Laravel",
            "MySQL",
        ],
        github: "#",
        demo: "#",
    },


    {
        title: "SmartHaven App",
        description:
            "A MERN stack application designed with modern frontend and backend architecture.",
        image: "/projects/smarthaven.png",
        tech: [
            "React",
            "Node.js",
            "MongoDB",
        ],
        github: "#",
        demo: "#",
    },

];


export default function Projects() {

    return (

        <section
            id="projects"
            className="
min-h-screen
bg-[#050505]
px-6
py-24
"
        >

            <div className="
mx-auto
max-w-7xl
">


                <motion.p

                    initial={{
                        opacity: 0,
                        y: 30
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    className="
uppercase
tracking-[5px]
text-violet-400
"

                >
                    Projects
                </motion.p>



                <motion.h2

                    initial={{
                        opacity: 0,
                        y: 30
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    className="
mt-4
text-5xl
font-bold
"

                >
                    Featured Work
                </motion.h2>



                <div
                    className="
mt-16
grid
gap-10
md:grid-cols-2
"
                >


                    {
                        projects.map((project, index) => (


                            <motion.div

                                key={project.title}

                                initial={{
                                    opacity: 0,
                                    y: 80
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                viewport={{
                                    once: true
                                }}

                                transition={{
                                    delay: index * 0.2
                                }}

                                whileHover={{
                                    y: -10
                                }}

                                className="
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
"

                            >


                                {/* Image */}

                                <div
                                    className="
h-64
bg-gradient-to-br
from-violet-600/30
to-blue-500/20
flex
items-center
justify-center
"
                                >

                                    <p className="
text-5xl
">
                                        🚀
                                    </p>

                                </div>



                                <div className="p-8">


                                    <h3 className="
text-2xl
font-semibold
">

                                        {project.title}

                                    </h3>



                                    <p className="
mt-4
text-gray-400
leading-7
">

                                        {project.description}

                                    </p>



                                    <div
                                        className="
mt-6
flex
flex-wrap
gap-2
"
                                    >

                                        {
                                            project.tech.map((item) => (

                                                <span
                                                    key={item}
                                                    className="
rounded-full
border
border-white/10
bg-white/5
px-3
py-1
text-sm
text-gray-300
"
                                                >

                                                    {item}

                                                </span>

                                            ))
                                        }

                                    </div>



                                    <div className="
mt-8
flex
gap-4
">


                                        <a
                                            href={project.github}
                                            className="
flex
items-center
gap-2
rounded-full
border
border-white/10
px-5
py-2
hover:bg-white/10
"
                                        >

                                            <FaGithub size={18} />

                                            Code

                                        </a>



                                        <a
                                            href={project.demo}
                                            className="
flex
items-center
gap-2
rounded-full
bg-white
px-5
py-2
text-black
"
                                        >

                                            <ExternalLink size={18} />

                                            Demo

                                        </a>


                                    </div>


                                </div>


                            </motion.div>


                        ))

                    }


                </div>


            </div>


        </section>


    )

}