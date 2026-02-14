"use client";

import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp, AlertCircle } from "lucide-react";

const achievements = [
    {
        title: "Complex Case Representation",
        description: "Successfully represented clients in numerous complex cases, setting precedents and securing favorable judgments.",
        icon: Trophy,
    },
    {
        title: "High-Stakes Property Disputes",
        description: "Proven track record in resolving significant property disputes between spouses and families.",
        icon: TrendingUp,
    },
    {
        title: "Sensitive Family Law Wins",
        description: "Achieved significant victories in delicate matters of divorce, child custody, and maintenance.",
        icon: Star,
    },
];

export function NotableAchievements() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Notable Achievements</h2>
                    <div className="h-1 w-20 bg-primary mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl mx-auto flex items-start gap-4 p-6 rounded-xl bg-orange-50 border border-orange-100 text-orange-800"
                >
                    <AlertCircle className="shrink-0 mt-1" size={20} />
                    <p className="text-sm italic">
                        <strong>Disclaimer:</strong> Throughout a distinguished career, Adv. Suman Suresh has successfully represented clients in numerous cases. However, past results do not guarantee future outcomes. Each case is unique and judged on its own merits under the court of law.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
