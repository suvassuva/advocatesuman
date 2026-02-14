"use client";

import { motion } from "framer-motion";
import { Scale, Landmark, GraduationCap, Gavel } from "lucide-react";

const AFFILIATIONS = [
    { name: "Bar Council of Karnataka", icon: Scale },
    { name: "High Court of Karnataka", icon: Landmark },
    { name: "St. Joseph's College of Law", icon: GraduationCap },
    { name: "Supreme Court Bar Association", icon: Gavel },
];

export function TrustBanner() {
    return (
        <div className="bg-slate-50 border-y border-slate-100 py-10">
            <div className="container mx-auto px-4">
                <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
                    Professional Affiliations & Memberships
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    {AFFILIATIONS.map((org, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 group"
                        >
                            <org.icon className="h-6 w-6 text-slate-900 group-hover:text-primary transition-colors duration-300" />
                            <span className="font-heading font-semibold text-slate-900 text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                                {org.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
