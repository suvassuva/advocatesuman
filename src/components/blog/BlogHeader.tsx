"use client";

import { motion } from "framer-motion";

interface BlogHeaderProps {
    title: string;
    description: string;
}

export function BlogHeader({ title, description }: BlogHeaderProps) {
    return (
        <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
            {/* Background pattern or gradient */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-10 -mb-10" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">
                        Legal Insights & Updates
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
                        {title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed font-light">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
