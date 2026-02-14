"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const journeySteps = [
    {
        year: "2020",
        title: "Academic Excellence",
        description: "Graduated with a Bachelor of Laws (LL.B.) from the prestigious St. Joseph’s College of Law, Bangalore.",
        icon: GraduationCap,
    },
    {
        year: "2020",
        title: "Beginning of Practice",
        description: "Immediately began to practice in the field of law, exploring its different aspects and prospects with dedication.",
        icon: Briefcase,
    },
    {
        year: "Present",
        title: "5 Years of Dedicated Service",
        description: "Developed a prominent practice specializing in family law and criminal defense, handling complex legal disputes with proficiency.",
        icon: Award,
    },
];

export function ProfessionalJourney() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Image/Decoration Side */}
                    <div className="lg:col-span-5 relative hidden lg:block sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
                                alt="Professional Journey"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900 to-transparent">
                                <p className="text-white font-bold text-xl">A Legacy of Excellence</p>
                                <p className="text-slate-300 text-sm">Building trust since 2020</p>
                            </div>
                        </motion.div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                    </div>

                    {/* Timeline Side */}
                    <div className="lg:col-span-7">
                        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6">
                            {journeySteps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative mb-12 pl-10 group"
                                >
                                    {/* Dot */}
                                    <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10 transition-transform duration-300 group-hover:scale-150" />

                                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group-hover:border-primary/20">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                                <step.icon size={20} />
                                            </div>
                                            <span className="text-primary font-bold">{step.year}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
