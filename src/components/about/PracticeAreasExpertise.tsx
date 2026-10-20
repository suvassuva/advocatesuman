"use client";

import { motion } from "framer-motion";
import { Users, ShieldAlert, Home, Gavel } from "lucide-react";

const areas = [
    {
        title: "Family Law",
        description: "Specialized practice in divorce, child custody, and maintenance support.",
        icon: Users,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Criminal Law",
        description: "Expertise in anticipatory bail, regular bail, and trials across Bangalore courts.",
        icon: ShieldAlert,
        color: "bg-red-50 text-red-600",
    },
    {
        title: "Property Disputes",
        description: "Handling complex title, partition, and real estate litigation with precision.",
        icon: Home,
        color: "bg-amber-50 text-amber-600",
    },
    {
        title: "Court Trials",
        description: "Proficient representation in courtroom trials with rigorous application of law.",
        icon: Gavel,
        color: "bg-purple-50 text-purple-600",
    },
];

export function PracticeAreasExpertise() {
    return (
        <section className="py-10 sm:py-16 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-3.5 sm:px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6 sm:mb-10"
                >
                    <span className="text-primary font-bold tracking-wider uppercase text-[10px] sm:text-xs mb-1.5 block">Expertise</span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">Core Practice Areas</h2>
                    <p className="text-muted-foreground text-xs sm:text-sm max-w-xl mx-auto">
                        Prominent legal practice across multiple domains with a focus on proficiency and client care.
                    </p>
                    <div className="h-1 w-14 bg-primary mx-auto mt-3" />
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
                    {areas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group p-3.5 sm:p-5 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-md transition-all duration-300"
                        >
                            <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${area.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                                <area.icon size={20} />
                            </div>
                            <h3 className="text-xs sm:text-base font-bold mb-1 group-hover:text-primary transition-colors truncate">{area.title}</h3>
                            <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
