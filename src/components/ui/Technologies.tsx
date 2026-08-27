"use client";

import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils/cn";

interface Technology {
    image: StaticImageData | string;
    name: string;
}

interface TechnologiesProps {
    items: Technology[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}

export const Technologies = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: TechnologiesProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);

    const [start, setStart] = useState(false);

    const getDirection = useCallback(() => {
        if (!containerRef.current) return;

        containerRef.current.style.setProperty(
            "--animation-direction",
            direction === "left" ? "forwards" : "reverse"
        );
    }, [direction]);

    const getSpeed = useCallback(() => {
        if (!containerRef.current) return;

        let duration: string;

        switch (speed) {
            case "fast":
                duration = "20s";
                break;

            case "normal":
                duration = "40s";
                break;

            case "slow":
                duration = "100s";
                break;

            default:
                duration = "40s";
        }

        containerRef.current.style.setProperty(
            "--animation-duration",
            duration
        );
    }, [speed]);

    const addAnimation = useCallback(() => {
        if (!containerRef.current || !scrollerRef.current) {
            return;
        }

        /*
         * Prevent duplicating the items multiple times.
         */
        if (scrollerRef.current.dataset.duplicated === "true") {
            return;
        }

        const scrollerContent = Array.from(
            scrollerRef.current.children
        );

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);

            scrollerRef.current?.appendChild(duplicatedItem);
        });

        scrollerRef.current.dataset.duplicated = "true";

        getDirection();
        getSpeed();

        setStart(true);
    }, [getDirection, getSpeed]);

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full w-max shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover &&
                        "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, index) => (
                    <li
                        key={`${item.name}-${index}`}
                        className="
                            relative
                            flex
                            h-[50px]
                            w-auto
                            flex-shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-t-[#3A8DFF]
                            border-r-sky-800
                            border-b-[#8338EC]
                            border-l-sky-800
                            bg-Black-gradient
                            px-5
                            md:h-[65px]
                        "
                    >
                        <div
                            className="
                                relative
                                z-20
                                flex
                                select-none
                                flex-row
                                items-center
                            "
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={24}
                                height={24}
                                className="h-full w-auto"
                            />

                            <span
                                className="
                                    ml-3
                                    text-sm
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-white
                                    md:text-lg
                                "
                            >
                                {item.name}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};