"use client";

import { motion } from "framer-motion";
import { PremiumSlider } from "@/components/common/PremiumSlider";

export function ContactHero() {
    return (
        <section className="relative h-[45vh] min-h-[340px] sm:h-[55vh] sm:min-h-[440px] flex items-center justify-center overflow-hidden pt-12">
            {/* Cinematic Background Slider */}
            <div className="absolute inset-0 z-0">
                <PremiumSlider
                    images={[
                        "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000",
                        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
                        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=2000"
                    ]}
                    overlayClassName="bg-slate-950/85 backdrop-blur-[2px]"
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
                    <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-[11px] sm:text-xs mb-3 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        Reach Out to Us
                    </span>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-3 tracking-tight">
                        Contact Advocate Suman - Confidential Consultation
                    </h1>
                    <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-3 sm:mb-5" />
                    <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-light">
                        Speak with Adv. Suman Suresh today for a compassionate and professional consultation tailored to your needs.
                    </p>
                </motion.div>
            </div>

            {/* Decorative Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
