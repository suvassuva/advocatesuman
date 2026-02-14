"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ShieldCheck, MessageSquare, Clock, Trophy } from "lucide-react";

const REASONS = [
    {
        icon: ShieldCheck,
        title: "100% Confidentiality",
        description: "Your privacy is our priority. We ensure complete discretion in all legal matters.",
    },
    {
        icon: Trophy,
        title: "Result-Oriented",
        description: "We focus on achieving the best possible outcome through strategic planning.",
    },
    {
        icon: MessageSquare,
        title: "Transparent Communication",
        description: "Regular updates on your case status without legal jargon.",
    },
    {
        icon: Clock,
        title: "Timely Resolution",
        description: "We value your time and strive for efficient case disposal.",
    },
];

import { PremiumSlider } from "@/components/common/PremiumSlider";

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <SectionHeader
                            title="Why Clients Trust Us"
                            subtitle="The Suman & Co. Difference"
                            description="Legal battles can be overwhelming. We provide the support, clarity, and expertise you need to navigate them with confidence."
                            className="text-white fill-white"
                            centered={false}
                        />

                        <motion.div
                            className="grid gap-8 sm:grid-cols-2"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.15,
                                    },
                                },
                            }}
                        >
                            {REASONS.map((reason) => (
                                <motion.div
                                    key={reason.title}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                                    }}
                                    className="group space-y-3 p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
                                >
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-500 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                                        <reason.icon className="h-6 w-6" />
                                    </div>
                                    <h4 className="font-bold text-lg text-white group-hover:text-amber-500 transition-colors">{reason.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{reason.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[400px] lg:h-[550px] overflow-hidden rounded-2xl shadow-2xl relative z-10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10 lg:hidden" />
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20 animate-pulse" />
                        <PremiumSlider
                            images={[
                                "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
                                "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200",
                                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
                            ]}
                            showDots={false}
                            interval={7000}
                            overlayClassName="bg-slate-900/40"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
