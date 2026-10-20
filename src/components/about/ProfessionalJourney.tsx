"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import Image from "next/image";

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
        <section className="py-10 sm:py-16 md:py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-3.5 sm:px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Image/Decoration Side */}
                    <div className="lg:col-span-5 relative hidden lg:block sticky top-28">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
                                alt="Professional Journey"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                                <p className="text-white font-bold text-lg">A Legacy of Excellence</p>
                                <p className="text-slate-300 text-xs">Building trust since 2020</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Timeline Side */}
                    <div className="lg:col-span-7">
                        <div className="relative border-l-2 border-primary/20 ml-2 sm:ml-4">
                            {journeySteps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: 15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="relative mb-6 sm:mb-8 pl-6 sm:pl-8 group"
                                >
                                    {/* Dot */}
                                    <div className="absolute top-4 -left-[9px] w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10 transition-transform duration-300 group-hover:scale-125" />

                                    <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group-hover:border-primary/20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                                <step.icon size={16} />
                                            </div>
                                            <span className="text-primary font-bold text-xs sm:text-sm">{step.year}</span>
                                        </div>
                                        <h3 className="text-sm sm:text-base font-bold mb-1 group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
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
