"use client";

import { motion } from "framer-motion";
import { PremiumSlider } from "@/components/common/PremiumSlider";

export function AboutHero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Cinematic Background Slider */}
            <div className="absolute inset-0 z-0">
                <PremiumSlider
                    images={[
                        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000",
                        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
                        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000"
                    ]}
                    overlayClassName="bg-slate-900/80 backdrop-blur-[2px]"
                    interval={6500}
                />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6 border-b-2 border-primary/30 pb-2">
                        Legally Bound. Result Oriented.
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold font-heading text-white mb-8 tracking-tighter leading-none">
                        About Advocate Suman - Highly Experienced Lawyer in Bangalore
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                        Adv. Suman Suresh brings 5 years of dedicated legal expertise and an unwavering commitment to protecting your rights across Bengaluru.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500">Scroll Down</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
                    </div>
                </motion.div>
            </div>

            {/* Decorative Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />
        </section>
    );
}
