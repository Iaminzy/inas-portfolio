"use client";

import { motion } from "framer-motion";


const skills = [

  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Laravel",
  "Git",
  "Three.js",
  "Framer Motion",
  "AI Integration"

];



export default function Skills() {


  return (

    <section

      className="
        relative
        py-24
        "

    >


      <div

        className="
            container
            mx-auto
            px-6
            "

      >


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

          transition={{
            duration: 0.6
          }}

          className="
                text-center
                text-4xl
                font-bold
                "

        >

          My Skills

        </motion.h2>




        <motion.p

          initial={{
            opacity: 0
          }}

          whileInView={{
            opacity: 1
          }}

          viewport={{
            once: true
          }}

          className="
                mx-auto
                mt-5
                max-w-xl
                text-center
                text-gray-400
                "

        >

          Technologies and tools I use to
          build modern web applications.

        </motion.p>




        <div

          className="
                mt-12
                grid
                grid-cols-2
                gap-5
                md:grid-cols-3
                lg:grid-cols-4
                "

        >


          {
            skills.map((skill, index) => (


              <motion.div

                key={skill}

                initial={{
                  opacity: 0,
                  scale: 0.8
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  delay: index * 0.05
                }}

                whileHover={{
                  y: -8
                }}

                className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                            text-center
                            text-gray-200
                            backdrop-blur-xl
                            "

              >

                {skill}


              </motion.div>


            ))
          }


        </div>


      </div>


    </section>


  );


}