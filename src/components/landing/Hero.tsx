"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/common/CTAButton";
import { Phone, Calendar } from "lucide-react";
import { PremiumSlider } from "@/components/common/PremiumSlider";
import { CONTACT_DETAILS } from "@/lib/constants";

const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=2000"
];

export function Hero() {
    return (
        <section id="home" className="relative flex min-h-[85vh] sm:min-h-screen items-center justify-center overflow-hidden pt-16 sm:pt-24 pb-12 sm:pb-20">
            {/* Cinematic Slider Background */}
            <div className="absolute inset-0 z-0">
                <PremiumSlider
                    images={HERO_IMAGES}
                    overlayClassName="bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/50"
                    interval={7000}
                />
            </div>

            <div className="container relative z-20 mx-auto px-4 md:px-6 text-left max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <div className="mb-3.5 inline-block rounded-full bg-primary/20 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-md border border-primary/40 shadow-sm">
                        Trusted Legal Counsel in Bengaluru
                    </div>
                    <h1 className="mb-3 sm:mb-5 font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight text-white tracking-tight text-balance">
                        Advocate Suman - Highly Experienced Lawyers in Bangalore
                    </h1>
                    <p className="mb-6 sm:mb-8 text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-xl font-light text-pretty">
                        Experience expert legal representation with a client-first approach.
                        We specialize in Civil, Criminal, and Corporate law to deliver justice.
                    </p>

                    <div className="grid grid-cols-1 sm:flex sm:flex-row gap-3 sm:gap-4 justify-start max-w-sm sm:max-w-none">
                        <CTAButton
                            size="md"
                            icon={Calendar}
                            className="w-full sm:w-auto text-sm sm:text-base py-3 sm:py-2.5 h-auto shadow-lg"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Book Consultation
                        </CTAButton>
                        <CTAButton
                            variant="outline"
                            size="md"
                            icon={Phone}
                            className="w-full sm:w-auto text-sm sm:text-base py-3 sm:py-2.5 h-auto bg-white/10 backdrop-blur-sm text-white border-white/40 hover:bg-white hover:text-slate-900"
                            onClick={() => window.open(`tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`)}
                        >
                            Call Now
                        </CTAButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
