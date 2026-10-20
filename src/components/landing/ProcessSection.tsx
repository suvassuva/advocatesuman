"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { MessageSquare, FileSearch, ShieldCheck, Scale } from "lucide-react";

const STEPS = [
    {
        title: "Initial Consultation",
        description: "Deep dive into your legal situation to identify key challenges and opportunities.",
        icon: MessageSquare,
    },
    {
        title: "Strategic Planning",
        description: "Developing a comprehensive legal roadmap tailored to achieve your specific goals.",
        icon: FileSearch,
    },
    {
        title: "Legal Representation",
        description: "Expert advocacy in courtrooms and negotiations, protecting your rights at every step.",
        icon: ShieldCheck,
    },
    {
        title: "Case Resolution",
        description: "Achieving the best possible outcome through meticulous execution and persistence.",
        icon: Scale,
    },
];

export function ProcessSection() {
    return (
        <section className="py-10 sm:py-16 md:py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-3.5 sm:px-6 relative z-10 max-w-6xl">
                <SectionHeader
                    title="Our Legal Process"
                    subtitle="How We Work"
                    description="A structured, transparent approach to navigating your legal journey with confidence."
                />

                <div className="relative mt-4 sm:mt-10">
                    {/* Progress Connecting Line (Desktop) */}
                    <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-slate-100 hidden lg:block -translate-y-8" />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 relative z-10">
                        {STEPS.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative bg-slate-50/70 p-3 sm:p-5 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all duration-300 h-full min-h-[160px] sm:min-h-[210px] flex flex-col items-center justify-start"
                            >
                                <div className="flex flex-col items-center w-full">
                                    {/* Number & Icon Row */}
                                    <div className="relative mb-2.5 sm:mb-3.5 flex items-center justify-center">
                                        <div className="h-10 w-10 sm:h-13 sm:w-13 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                                            <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                        </div>
                                        <span className="absolute -top-1 -right-2 h-5 w-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center border border-white shadow-sm">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-xs sm:text-base font-bold mb-1 sm:mb-1.5 text-slate-900 group-hover:text-primary transition-colors text-balance">
                                        {step.title}
                                    </h3>
                                    <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed font-normal text-pretty">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
