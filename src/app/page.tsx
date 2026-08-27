import Hero from "@/components/Hero";
import TechMarquee from "@/components/home/TechMarquee";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhatIDo from "@/components/home/WhatIDo";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import CTA from "@/components/CTA";

export default function Home() {
    return (
        <main>
            <Hero />
            <TechMarquee />
            <FeaturedProjects />
            <WhatIDo />
            <TechStack />
            <Experience />
            <WhyWorkWithMe />

            <CTA />
        </main>
    );
}