"use client";

import { motion } from "framer-motion";
import { PremiumSlider } from "@/components/common/PremiumSlider";

export function ContactHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Cinematic Background Slider */}
            <div className="absolute inset-0 z-0">
                <PremiumSlider
                    images={[
                        "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000",
                        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
                        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=2000"
                    ]}
                    overlayClassName="bg-slate-900/80 backdrop-blur-[2px]"
                    interval={6000}
                />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">
                        Reach Out to Us
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold font-heading text-white mb-6 tracking-tight">
                        Contact Advocate Suman - Confidential Legal Consultation
                    </h1>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
                    <p className="max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed font-light">
                        We understand that legal matters can be overwhelming. Speak with Adv. Suman Suresh today for a compassionate and professional consultation tailored to your needs.
                    </p>
                </motion.div>
            </div>

            {/* Decorative Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
