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
        <div className="bg-slate-50 border-y border-slate-200/60 py-6 sm:py-10">
            <div className="container mx-auto px-4 max-w-6xl">
                <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-400 mb-5 sm:mb-8">
                    Professional Affiliations & Memberships
                </p>
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 opacity-80 transition-all duration-700">
                    {AFFILIATIONS.map((org, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 sm:gap-3 group bg-white px-3 py-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none border sm:border-0 border-slate-200/50 shadow-sm sm:shadow-none"
                        >
                            <org.icon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700 group-hover:text-primary transition-colors duration-300" />
                            <span className="font-heading font-semibold text-slate-800 text-xs sm:text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                                {org.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
