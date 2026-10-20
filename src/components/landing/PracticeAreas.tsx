"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Scale, ShieldAlert, Users, Building2, Gavel, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";

const SERVICES = [
    {
        icon: Gavel,
        title: "Civil Litigation",
        slug: "civil-lawyers-in-bangalore",
        description: "Expert handling of property disputes, breach of contract, and recovery suits.",
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800",
    },
    {
        icon: ShieldAlert,
        title: "Criminal Defense",
        slug: "criminal-lawyers-in-bangalore",
        description: "Robust defense strategies for bail, trial, and appeals in criminal cases.",
        image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=800",
    },
    {
        icon: Users,
        title: "Family Law",
        slug: "divorce-lawyers-in-bangalore",
        description: "Sensitive resolution for divorce, child custody, and alimony matters.",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800",
    },
    {
        icon: Building2,
        title: "Property Disputes",
        slug: "property-dispute-lawyers-in-bangalore",
        description: "Title verification, registration, and resolution of real estate conflicts.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    },
    {
        icon: Scale,
        title: "Corporate Law",
        slug: "corporate-law-firms-in-bangalore",
        description: "Legal advisory for startups, contract drafting, and compliance.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
        icon: FileText,
        title: "Legal Documentation",
        slug: "legal-consultants-in-bangalore",
        description: "Drafting of wills, deeds, agreements, and legal notices.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    },
];

export function PracticeAreas() {
    return (
        <section id="practice-areas" className="py-10 sm:py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-3.5 sm:px-6 max-w-6xl">
                <SectionHeader
                    title="Our Fields of Expertise"
                    subtitle="Practice Areas"
                    description="Comprehensive legal solutions tailored to your specific needs."
                />

                <motion.div
                    className="grid gap-3.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {SERVICES.map((service) => {
                        return (
                            <Link
                                key={service.title}
                                href={`/${service.slug}`}
                                className="block group"
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                                    }}
                                    whileHover={{
                                        y: -6,
                                        transition: { duration: 0.25 }
                                    }}
                                    className="relative h-[220px] sm:h-[280px] md:aspect-[3/4] md:h-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
                                    </div>

                                    {/* Content Card (Glass) */}
                                    <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 z-10 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/15 transition-all duration-300 group-hover:bg-primary/95 group-hover:border-primary flex flex-col justify-between min-h-[120px] sm:min-h-[145px]">
                                        <div>
                                            <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2.5">
                                                <div className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-primary shrink-0">
                                                    <service.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                                                </div>
                                                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white transition-colors truncate">
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed line-clamp-2 group-hover:text-white/95 mb-2.5 text-pretty">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center text-[10px] sm:text-xs font-bold text-amber-400 group-hover:text-white uppercase tracking-wider transition-all duration-300 pt-1 border-t border-white/10 group-hover:border-white/20">
                                            <span>Explore Details</span>
                                            <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
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
