"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gavel, ShieldAlert, Users, Building2, Scale, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CTAButton } from "@/components/common/CTAButton";
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

    // Supplemental images for variety in the slider
    const sliderImages = [
        imageUrl,
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=2000"
    ];

    return (
        <section className="bg-white">
            {/* Hero Header for Practice Area with Cinematic Slider */}
            <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <PremiumSlider
                        images={sliderImages}
                        overlayClassName="bg-slate-900/70 backdrop-blur-[2px]"
                        interval={6500}
                    />
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/20 text-primary-foreground mb-6 backdrop-blur-md border border-primary/30">
                            <Icon className="h-10 w-10" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4 tracking-tight">
                            {title}
                        </h1>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                    </motion.div>
                </div>
            </div>

            <div className="py-20 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-6 mb-12">
                            "{description}"
                        </p>
                    </motion.div>
                </div>
                <div className="py-24 container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Side: Detailed Content */}
                        <div className="lg:col-span-7 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-3xl font-bold font-heading mb-6 flex items-center gap-3">
                                    <span className="h-8 w-1.5 bg-primary rounded-full" />
                                    Legal Strategy & Overview
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    {detailedContent}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                    {keyPoints.map((point, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                                            <span className="text-sm font-medium text-slate-700">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold font-heading mb-4">The Legal Process</h3>
                                    <div className="space-y-6">
                                        {process.map((step, i) => (
                                            <div key={i} className="flex gap-4 group">
                                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                                    {String(i + 1).padStart(2, '0')}
                                                </div>
                                                <p className="text-slate-300 group-hover:text-white transition-colors">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Gavel className="absolute -bottom-10 -right-10 h-40 w-40 text-white/5 rotate-12" />
                            </motion.div>
                        </div>

                        {/* Right Side: Consultation Card & Quick Expertise */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-32 space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl"
                                >
                                    <h3 className="text-2xl font-bold font-heading mb-4">Book a Consultation</h3>
                                    <p className="text-slate-500 mb-8 text-sm">
                                        Discuss your legal matter with Adv. Suman Suresh. We offer a comprehensive review of your case and outline potential strategies.
                                    </p>
                                    <div className="space-y-4">
                                        <Link
                                            href="/contact"
                                            className="block w-full text-center bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                                        >
                                            Schedule Appointment
                                        </Link>
                                        <a
                                            href={`tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`}
                                            className="block w-full text-center border-2 border-slate-100 text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all font-sans"
                                        >
                                            Call Us Directly
                                        </a>
                                    </div>
                                </motion.div>

                                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-4">Why Trust Our Practice?</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle className="h-4 w-4 text-primary" /> 5+ Years of Specialized Experience
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle className="h-4 w-4 text-primary" /> Result-Oriented Approach
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle className="h-4 w-4 text-primary" /> Full Confidentiality Guaranteed
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
