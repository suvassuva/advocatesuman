"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gavel, ShieldAlert, Users, Building2, Scale, FileText, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";
import { PremiumSlider } from "@/components/common/PremiumSlider";

const Icons = {
    Gavel,
    ShieldAlert,
    Users,
    Building2,
    Scale,
    FileText,
};

interface PracticeAreaProps {
    title: string;
    iconName: keyof typeof Icons;
    imageUrl: string;
    description: string;
    detailedContent: string;
    keyPoints: string[];
    process: string[];
}

export function PracticeAreaDetail({ title, iconName, imageUrl, description, detailedContent, keyPoints, process }: PracticeAreaProps) {
    const Icon = Icons[iconName] || Scale;

    const sliderImages = [
        imageUrl,
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=2000"
    ];

    return (
        <section className="bg-white overflow-hidden">
            {/* Hero Header for Practice Area */}
            <div className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex items-center justify-center overflow-hidden py-14 sm:py-20 pt-20 sm:pt-24 border-b border-slate-800">
                <div className="absolute inset-0 z-0">
                    <PremiumSlider
                        images={sliderImages}
                        overlayClassName="bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/80"
                        interval={6500}
                    />
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-amber-400/20 text-amber-400 mb-3 sm:mb-4 backdrop-blur-md border border-amber-400/30">
                            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                        </div>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-2 sm:mb-3 tracking-tight text-balance">
                            {title}
                        </h1>
                        <div className="h-1 w-16 bg-amber-400 mx-auto rounded-full" />
                    </motion.div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="py-8 sm:py-16 container mx-auto px-3.5 sm:px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mb-8 sm:mb-12"
                >
                    <p className="text-xs sm:text-base md:text-lg text-slate-700 leading-relaxed italic border-l-4 border-primary pl-4 sm:pl-6 bg-slate-50 py-3 rounded-r-xl text-pretty">
                        &quot;{description}&quot;
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Side: Detailed Content */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-lg sm:text-2xl font-bold font-heading mb-3 sm:mb-4 flex items-center gap-2">
                                <span className="h-6 w-1 bg-primary rounded-full shrink-0" />
                                <span className="text-balance">Legal Strategy & Overview</span>
                            </h2>
                            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-6 text-pretty">
                                {detailedContent}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                                {keyPoints.map((point, i) => (
                                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                        <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug text-pretty">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900 text-white relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <h3 className="text-base sm:text-xl font-bold font-heading mb-3 sm:mb-4">The Legal Process</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    {process.map((step, i) => (
                                        <div key={i} className="flex items-start gap-3 group">
                                            <div className="shrink-0 h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs group-hover:bg-primary group-hover:text-white transition-colors">
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                            <p className="text-xs sm:text-sm text-slate-300 group-hover:text-white transition-colors leading-relaxed pt-0.5 text-pretty">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Consultation Card & Quick Expertise */}
                    <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg"
                        >
                            <h3 className="text-base sm:text-xl font-bold font-heading mb-2">Book a Consultation</h3>
                            <p className="text-slate-500 mb-5 text-xs sm:text-sm leading-relaxed">
                                Discuss your legal matter with Adv. Suman Suresh. We offer a comprehensive review of your case and outline potential strategies.
                            </p>
                            <div className="space-y-2.5">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center gap-2 w-full text-center bg-primary text-white py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-primary/90 transition-all shadow-md active:scale-95"
                                >
                                    Schedule Appointment <ArrowRight size={14} />
                                </Link>
                                <a
                                    href={`tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`}
                                    className="flex items-center justify-center gap-2 w-full text-center border-2 border-slate-100 text-slate-800 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-slate-50 transition-all font-sans active:scale-95"
                                >
                                    <Phone size={14} /> Call Us Directly
                                </a>
                            </div>
                        </motion.div>

                        <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2.5 text-xs sm:text-sm">Why Trust Our Practice?</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                                    <CheckCircle className="h-4 w-4 text-primary shrink-0" /> 5+ Years of Specialized Experience
                                </li>
                                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                                    <CheckCircle className="h-4 w-4 text-primary shrink-0" /> Result-Oriented Approach
                                </li>
                                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                                    <CheckCircle className="h-4 w-4 text-primary shrink-0" /> Full Confidentiality Guaranteed
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
