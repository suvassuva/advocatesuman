"use client";

import { motion } from "framer-motion";
import { GraduationCap, Landmark, Users } from "lucide-react";

const qualifications = [
    {
        title: "Bachelor of Laws (LL.B.)",
        institution: "St. Joseph’s College of Law, Bangalore",
        year: "2020",
        icon: GraduationCap,
    },
    {
        title: "Member, Karnataka State Bar Council",
        institution: "Official accreditation to practice law in Karnataka",
        year: "Verified",
        icon: Landmark,
    },
    {
        title: "Member, Bangalore Advocates Association",
        institution: "Professional affiliation and active bar membership",
        year: "Active",
        icon: Users,
    },
];

export function QualificationsAndMemberships() {
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
                    <span className="text-primary font-bold tracking-wider uppercase text-[10px] sm:text-xs mb-1.5 block">Credentials</span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">Qualifications & Memberships</h2>
                    <div className="h-1 w-14 bg-primary mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                    {qualifications.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow h-full min-h-[160px] sm:min-h-[195px] justify-start"
                        >
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2.5 sm:mb-3 shrink-0">
                                <item.icon size={22} />
                            </div>
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary mb-1">{item.year}</span>
                            <h3 className="text-sm sm:text-base font-bold mb-1 text-balance">{item.title}</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed text-pretty">{item.institution}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
