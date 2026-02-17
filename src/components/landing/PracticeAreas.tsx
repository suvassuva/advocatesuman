"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Scale, ShieldAlert, Users, Building2, Gavel, FileText, ArrowRight } from "lucide-react";

const SERVICES = [
    {
        icon: Gavel,
        title: "Civil Litigation",
        description: "Expert handling of property disputes, breach of contract, and recovery suits.",
        image: "/images/3.jpg",
    },
    {
        icon: ShieldAlert,
        title: "Criminal Defense",
        description: "Robust defense strategies for bail, trial, and appeals in criminal cases.",
        image: "/images/2.jpg",
    },
    {
        icon: Users,
        title: "Family Law",
        description: "Sensitive resolution for divorce, child custody, and alimony matters.",
        image: "/images/5.jpg",
    },
    {
        icon: Building2,
        title: "Property Disputes",
        description: "Title verification, registration, and resolution of real estate conflicts.",
        image: "/images/1.jpg",
    },
    {
        icon: Scale,
        title: "Corporate Law",
        description: "Legal advisory for startups, contract drafting, and compliance.",
        image: "/images/4.jpg",
    },
    {
        icon: FileText,
        title: "Legal Documentation",
        description: "Drafting of wills, deeds, agreements, and legal notices.",
        image: "/images/6.jpg",
    },
];

export function PracticeAreas() {
    return (
        <section id="practice-areas" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader
                    title="Our Fields of Expertise"
                    subtitle="Practice Areas"
                    description="Comprehensive legal solutions tailored to your specific needs."
                />

                <motion.div
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    {SERVICES.map((service) => {
                        const slug = service.title.toLowerCase().replace(/\s+/g, '-');
                        return (
                            <Link
                                key={service.title}
                                href={`/practice-areas/${slug}`}
                                className="block group"
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                                    }}
                                    whileHover={{
                                        y: -12,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    className="relative h-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-3xl border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                                    </div>

                                    {/* Content Card (Glass) */}
                                    <div className="absolute inset-x-4 bottom-4 z-10 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
                                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white transition-all duration-500 group-hover:bg-white group-hover:text-primary">
                                            <service.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-white transition-colors">{service.title}</h3>
                                        <p className="mb-4 text-xs text-slate-200 leading-relaxed line-clamp-2 group-hover:text-white/90">{service.description}</p>

                                        <div className="flex items-center text-xs font-bold text-white uppercase tracking-widest opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                            Learn More <ArrowRight className="ml-2 h-3 w-3" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
