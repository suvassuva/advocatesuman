"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ShieldCheck, MessageSquare, Clock, Trophy } from "lucide-react";
import { PremiumSlider } from "@/components/common/PremiumSlider";

const REASONS = [
    {
        icon: ShieldCheck,
        title: "100% Confidentiality",
        description: "Your privacy is our priority. Complete discretion in all matters.",
    },
    {
        icon: Trophy,
        title: "Result-Oriented",
        description: "Strategic focus on achieving the best possible legal outcome.",
    },
    {
        icon: MessageSquare,
        title: "Clear Updates",
        description: "Direct, plain-language updates without confusing legal jargon.",
    },
    {
        icon: Clock,
        title: "Timely Action",
        description: "We value your time and strive for prompt case movement.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-10 sm:py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-3.5 sm:px-6 max-w-6xl">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <SectionHeader
                            title="Why Clients Trust Us"
                            subtitle="The Suman & Co. Difference"
                            description="Legal battles can be overwhelming. We provide the support, clarity, and expertise you need to navigate them with confidence."
                            className="text-white fill-white"
                            centered={false}
                        />

                        <motion.div
                            className="grid grid-cols-2 gap-2.5 sm:gap-4"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}
                        >
                            {REASONS.map((reason) => (
                                <motion.div
                                    key={reason.title}
                                    variants={{
                                        hidden: { opacity: 0, y: 15 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                    }}
                                    className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 flex flex-col justify-start min-h-[115px] sm:min-h-[140px]"
                                >
                                    <div className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 group-hover:scale-105 transition-transform mb-2 shrink-0">
                                        <reason.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                                    </div>
                                    <h4 className="font-bold text-xs sm:text-sm md:text-base text-white group-hover:text-amber-400 transition-colors line-clamp-1 mb-1">
                                        {reason.title}
                                    </h4>
                                    <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed text-pretty">
                                        {reason.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[220px] sm:h-[320px] lg:h-[480px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl border border-white/10"
                    >
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
