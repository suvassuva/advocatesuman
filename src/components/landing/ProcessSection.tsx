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
        <section className="py-20 md:py-28 bg-white overflow-hidden relative">
            {/* Background Texture/Image */}
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000')] opacity-[0.03] grayscale pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    title="Our Legal Process"
                    subtitle="How We Work"
                    description="A structured, transparent approach to navigating your legal journey with confidence."
                />

                <div className="relative mt-24">
                    {/* Progress Connecting Line (Desktop) */}
                    <div className="absolute top-5 left-[12.5%] right-[12.5%] h-0.5 bg-slate-100 hidden lg:block" />

                    <div className="grid gap-16 lg:grid-cols-4 relative z-10">
                        {STEPS.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="group relative text-center"
                            >
                                <div className="flex flex-col items-center">
                                    {/* Number Circle */}
                                    <div className="relative z-20 mb-6 bg-white px-3">
                                        <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-xl shadow-primary/20 transition-transform duration-500 group-hover:scale-110">
                                            0{index + 1}
                                        </div>
                                    </div>

                                    {/* Icon Box */}
                                    <div className="mb-6 h-20 w-20 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-2xl group-hover:shadow-primary/30">
                                        <step.icon className="h-10 w-10" />
                                    </div>

                                    {/* Text Content */}
                                    <div className="max-w-[240px] mx-auto">
                                        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
