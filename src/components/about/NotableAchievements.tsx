"use client";

import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp, AlertCircle } from "lucide-react";

const achievements = [
    {
        title: "Complex Case Representation",
        description: "Successfully represented clients in complex litigation, setting precedents and securing favorable judgments.",
        icon: Trophy,
    },
    {
        title: "High-Stakes Property Disputes",
        description: "Proven track record in resolving significant property conflicts between spouses and families.",
        icon: TrendingUp,
    },
    {
        title: "Sensitive Family Law Wins",
        description: "Achieved notable outcomes in delicate matters of divorce, child custody, and alimony.",
        icon: Star,
    },
];

export function NotableAchievements() {
    return (
        <section className="py-10 sm:py-16 md:py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-3.5 sm:px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6 sm:mb-10"
                >
                    <span className="text-primary font-bold tracking-wider uppercase text-[10px] sm:text-xs mb-1.5 block">Milestones</span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">Notable Achievements</h2>
                    <div className="h-1 w-14 bg-primary mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col justify-start h-full min-h-[160px] sm:min-h-[200px]"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 shrink-0">
                                <item.icon size={20} />
                            </div>
                            <h3 className="text-sm sm:text-base font-bold mb-1.5 text-balance">{item.title}</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed text-pretty">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto flex items-start gap-3 p-3.5 sm:p-5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900"
                >
                    <AlertCircle className="shrink-0 mt-0.5 text-amber-600" size={16} />
                    <p className="text-[11px] sm:text-xs leading-relaxed">
                        <strong>Disclaimer:</strong> Throughout a distinguished career, Adv. Suman Suresh has successfully represented clients in numerous cases. However, past results do not guarantee future outcomes. Each case is unique and judged on its own merits under the court of law.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
