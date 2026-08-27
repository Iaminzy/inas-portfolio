import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Nexora",
        description:
            "A modern multi-vendor e-commerce platform built with Next.js, TypeScript and scalable backend technologies.",
        image: "/projects/nexora.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "MongoDB",
        ],
        demo: "#",
        github: "#",
    },
    {
        title: "Giftbox Lanka",
        description:
            "An e-commerce platform designed to provide a smooth online shopping experience.",
        image: "/projects/giftbox.png",
        technologies: [
            "React",
            "Laravel",
            "MySQL",
            "Bootstrap",
        ],
        demo: "#",
        github: "#",
    },
    {
        title: "SmartHaven",
        description:
            "A MERN stack application with modern UI and full-stack functionality.",
        image: "/projects/smarthaven.png",
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
        ],
        demo: "#",
        github: "#",
    },
];

export default function FeaturedProjects() {
    return (
        <section
            id="projects"
            className="
                relative
                overflow-hidden
                py-24
                sm:py-28
                lg:py-32
            "
        >
            {/* Background Glow */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-20
                    h-[350px]
                    w-[350px]
                    -translate-x-1/2
                    rounded-full
                    bg-purple-600/15
                    blur-[140px]
                    sm:h-[400px]
                    sm:w-[400px]
                "
            />

            {/* Container */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
                    px-5
                    sm:px-6
                    lg:px-8
                "
            >
                {/* Section Heading */}

                <SectionTitle
                    subtitle="Featured Work"
                    title="Projects I'm Proud Of"
                    description="A collection of applications and platforms I have built using modern technologies."
                />

                {/* Projects Grid */}

                <div
                    className="
                        mt-12
                        grid
                        grid-cols-1
                        gap-6
                        sm:mt-14
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}