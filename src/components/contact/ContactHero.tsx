"use client";

import { motion } from "framer-motion";
import { PremiumSlider } from "@/components/common/PremiumSlider";

export function ContactHero() {
    return (
        <section className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex items-center justify-center overflow-hidden py-14 sm:py-20 pt-20 sm:pt-24 border-b border-slate-800">
            {/* Cinematic Background Slider */}
            <div className="absolute inset-0 z-0">
                <PremiumSlider
                    images={[
                        "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000",
                        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
                        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=2000"
                    ]}
                    overlayClassName="bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/80"
                    interval={6000}
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
                        Reach Out to Us
                    </span>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-3 tracking-tight text-balance">
                        Contact Advocate Suman - Confidential Consultation
                    </h1>
                    <div className="h-1 w-16 bg-amber-400 mx-auto rounded-full mb-3 sm:mb-5" />
                    <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-light text-pretty">
                        Speak with Adv. Suman Suresh today for a compassionate and professional consultation tailored to your needs.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
