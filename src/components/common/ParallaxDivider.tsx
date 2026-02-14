"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxDividerProps {
    imageUrl: string;
    height?: string;
}

export function ParallaxDivider({ imageUrl, height = "h-[40vh]" }: ParallaxDividerProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div ref={ref} className={`relative ${height} overflow-hidden`}>
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 h-[140%] w-full"
            >
                <img
                    src={imageUrl}
                    alt="Divider"
                    className="h-full w-full object-cover grayscale opacity-40"
                />
            </motion.div>
            <div className="absolute inset-0 bg-slate-900/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
        </div>
    );
}
