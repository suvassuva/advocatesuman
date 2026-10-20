"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-10 sm:py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
                    >
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.01]">
                            <motion.img
                                src="/images/advocate.png"
                                alt="Advocate Suman Suresh"
                                className="h-full w-full object-cover"
                                initial={{ scale: 1.05 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.2 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-75" />
                            <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    <p className="font-heading text-xl sm:text-2xl font-bold tracking-tight">Suman Suresh</p>
                                    <div className="h-0.5 w-10 bg-primary rounded-full my-1.5" />
                                    <p className="text-xs sm:text-sm font-medium text-slate-200">Advocate & Legal Consultant, Bangalore</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionHeader
                            title="5 Years of Dedicated Legal Practice"
                            subtitle="About The Advocate"
                            centered={false}
                            description="Adv. Suman Suresh graduated from St. Joseph’s College of Law (2020) and immediately began to practice in the field of law, exploring its different aspects and prospects."
                        />

                        <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                            <p>
                                With 5 years of experience, Adv. Suman Suresh has developed a prominent practice in family matters such as Divorce, child custody, and maintenance for wives, children, and parents, as well as property disputes arising between spouses.
                            </p>
                            <p>
                                The legal service of Adv. Suman Suresh is the panacea to all legal disputes, dealt with an orbit of presence of mind and application of law.
                            </p>

                            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2">
                                {[
                                    "5+ Years Experience",
                                    "Family Law Specialist",
                                    "Criminal Defense Expert",
                                    "Ethical Representation",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                                        <span className="font-medium text-foreground text-[11px] sm:text-sm leading-tight text-pretty">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
