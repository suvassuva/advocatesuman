"use client";

import { motion } from "framer-motion";
import { PremiumSlider } from "@/components/common/PremiumSlider";

export function AboutHero() {
    return (
        <section className="relative min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden py-16 sm:py-24 pt-20 sm:pt-28 border-b border-slate-800">
            {/* Cinematic Background Slider */}
            <div className="absolute inset-0 z-0">
                <PremiumSlider
                    images={[
                        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
                        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000",
                        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000"
                    ]}
                    overlayClassName="bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/80"
                    interval={6500}
                />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block text-amber-400 font-bold tracking-[0.2em] uppercase text-[11px] sm:text-xs mb-3 bg-amber-400/15 px-3 py-1 rounded-full border border-amber-400/30 backdrop-blur-sm">
                        Legally Bound. Result Oriented.
                    </span>
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold font-heading text-white mb-3 sm:mb-6 tracking-tight text-balance">
                        About Advocate Suman - Highly Experienced Lawyer
                    </h1>
                    <div className="h-1 w-16 bg-amber-400 mx-auto rounded-full mb-3 sm:mb-5" />
                    <p className="max-w-xl mx-auto text-xs sm:text-base text-slate-200 leading-relaxed font-light text-pretty">
                        Adv. Suman Suresh brings 5 years of dedicated legal expertise and an unwavering commitment to protecting your rights across Bengaluru.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
