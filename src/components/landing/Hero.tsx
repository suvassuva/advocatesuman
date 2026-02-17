"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/common/CTAButton";
import { Phone, Calendar } from "lucide-react";
import { PremiumSlider } from "@/components/common/PremiumSlider";

const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1453723490680-891ca6869403?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=2000"
];

export function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
            {/* Cinematic Slider Background */}
            <div className="absolute inset-0 z-0">
                <PremiumSlider
                    images={HERO_IMAGES}
                    overlayClassName="bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/70"
                    interval={7000}
                />
            </div>

            <div className="container relative z-20 mx-auto px-4 text-center md:px-6 md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm border border-primary/30">
                        Trusted Legal Counsel in Bengaluru
                    </div>
                    <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Advocate Suman - Highly Experienced Lawyers in Bangalore
                    </h1>
                    <p className="mb-8 text-lg text-slate-300 sm:text-xl md:max-w-2xl">
                        Experience expert legal representation with a client-first approach.
                        We specialize in Civil, Criminal, and Corporate law to deliver justice.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 md:justify-start justify-center">
                        <CTAButton
                            size="lg"
                            icon={Calendar}
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Book Consultation
                        </CTAButton>
                        <CTAButton
                            variant="outline"
                            size="lg"
                            icon={Phone}
                            className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900"
                            onClick={() => window.open("tel:+919876543210")}
                        >
                            Call Now
                        </CTAButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
