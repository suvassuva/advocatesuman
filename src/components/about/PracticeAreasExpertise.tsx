"use client";

import { motion } from "framer-motion";
import { Users, ShieldAlert, Home, Gavel, Scale, FileText } from "lucide-react";

const areas = [
    {
        title: "Family Law",
        description: "Specialized practice in Divorce, child custody, and maintenance for wives, children, and parents.",
        icon: Users,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Criminal Law",
        description: "Expertise in Anticipatory Bail, Regular Bail, and trials in the Court of Magistrate and Sessions.",
        icon: ShieldAlert,
        color: "bg-red-50 text-red-600",
    },
    {
        title: "Property Disputes",
        description: "Handling complex property disputes arising between spouses with strategic legal application.",
        icon: Home,
        color: "bg-amber-50 text-amber-600",
    },
    {
        title: "Court Trials",
        description: "Proficient representation in trials with an orbit of presence of mind and application of law.",
        icon: Gavel,
        color: "bg-purple-50 text-purple-600",
    },
];

export function PracticeAreasExpertise() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Core Practice Areas</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Developing a prominent practice across various legal domains with a focus on proficiency and efficiency.
                    </p>
                    <div className="h-1 w-20 bg-primary mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {areas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <area.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{area.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
