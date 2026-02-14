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
        institution: "Professional affiliation and sample membership",
        year: "Active",
        icon: Users,
    },
];

export function QualificationsAndMemberships() {
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
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Qualifications & Memberships</h2>
                    <div className="h-1 w-20 bg-primary mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {qualifications.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                                <item.icon size={32} />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">{item.year}</span>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.institution}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
