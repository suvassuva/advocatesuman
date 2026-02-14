"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-[1.02]">
                            <motion.img
                                src="/images/advocate.png"
                                alt="Advocate Suman Suresh"
                                className="h-full w-full object-cover"
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute bottom-10 left-8 text-white z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    <p className="font-heading text-3xl font-bold tracking-tight">Suman Suresh</p>
                                    <div className="h-1 w-12 bg-primary rounded-full my-2" />
                                    <p className="text-lg font-medium text-slate-200">Advocate, Bangalore</p>
                                </motion.div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -right-10 -z-10 h-72 w-72 bg-primary/10 rounded-full blur-[80px] animate-pulse" />
                        <div className="absolute -top-10 -left-10 -z-10 h-40 w-40 bg-blue-500/5 rounded-full blur-[60px]" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
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

                        <div className="space-y-6 text-muted-foreground">
                            <p>
                                With 5 years of experience, Adv. Suman Suresh has developed a prominent practice in family matters such as Divorce, child custody, and maintenance for wives, children, and parents, as well as property disputes arising between spouses.
                            </p>
                            <p>
                                The legal service of Adv. Suman Suresh is the panacea to all legal disputes, dealt with an orbit of presence of mind and application of law.
                            </p>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {[
                                    "5+ Years Experience",
                                    "Family Law Specialist",
                                    "Criminal Defense Expert",
                                    "Ethical Representation",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                        <span className="font-medium text-foreground">{item}</span>
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
