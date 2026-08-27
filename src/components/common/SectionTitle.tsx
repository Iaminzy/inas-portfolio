import { motion } from "framer-motion";

interface SectionTitleProps {
    badge?: string;
    title: string;
    description?: string;
}

export default function SectionTitle({
    badge,
    title,
    description,
}: SectionTitleProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.6,
            }}
            className="mx-auto max-w-3xl text-center"
        >
            {badge && (
                <p className="
                    mb-4
                    text-sm
                    uppercase
                    tracking-[5px]
                    text-purple-400
                ">
                    {badge}
                </p>
            )}

            <h2 className="
                text-4xl
                font-bold
                md:text-5xl
                bg-linear-to-r
                from-purple-400
                via-fuchsia-400
                to-blue-400
                bg-clip-text
                text-transparent
            ">
                {title}
            </h2>

            {description && (
                <p className="
                    mt-6
                    text-lg
                    leading-8
                    text-gray-400
                ">
                    {description}
                </p>
            )}
        </motion.div>
    );
}