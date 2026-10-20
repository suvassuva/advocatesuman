"use client";

import { motion } from "framer-motion";

interface BlogHeaderProps {
    title: string;
    description: string;
}

export function BlogHeader({ title, description }: BlogHeaderProps) {
    return (
        <section className="bg-slate-900 pt-20 sm:pt-28 pb-10 sm:pb-16 relative overflow-hidden">
            <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-amber-400 font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-2 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                        Legal Insights & Updates
                    </span>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-3 tracking-tight text-balance">
                        {title}
                    </h1>
                    <div className="h-1 w-14 bg-amber-400 mx-auto rounded-full mb-3" />
                    <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-light text-pretty">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
