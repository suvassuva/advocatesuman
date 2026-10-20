"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CTAButton } from "@/components/common/CTAButton";
import { Send, Phone, Mail, Clock } from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        caseType: "civil",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id === "case-type" ? "caseType" : id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct the WhatsApp message
        const message = `Hello Adv. Suman Suresh, I would like to request a consultation.

Full Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Case Type: ${formData.caseType}
Details: ${formData.message || "Not provided"}`.trim();

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id="contact" className="py-10 sm:py-16 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-3.5 sm:px-6 max-w-6xl">
                <div className="mx-auto max-w-5xl rounded-2xl sm:rounded-3xl bg-slate-900 p-4 sm:p-8 md:p-12 shadow-2xl">
                    <div className="grid gap-6 sm:gap-10 lg:grid-cols-2">
                        <div>
                            <SectionHeader
                                title="Get Expert Legal Advice Today"
                                subtitle="Contact Us"
                                description="Fill out the form to schedule your consultation. We are here to listen and fight for your rights."
                                className="text-white mb-5 sm:mb-8"
                                centered={false}
                            />
                            <div className="space-y-3 sm:space-y-5">
                                <div className="flex items-start gap-3 group">
                                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                                        <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </div>
                                    <div className="pt-0.5 text-xs sm:text-sm text-slate-400">
                                        <strong className="text-white block mb-0.5">Office Hours:</strong>
                                        Mon - Sat: 9:00 AM - 7:00 PM
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 group">
                                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </div>
                                    <div className="pt-0.5 text-xs sm:text-sm text-slate-400">
                                        <strong className="text-white block mb-0.5">Email:</strong>
                                        <a href={`mailto:${CONTACT_DETAILS.EMAIL}`} className="hover:text-amber-400 transition-colors break-all">{CONTACT_DETAILS.EMAIL}</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 group">
                                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </div>
                                    <div className="pt-0.5 text-xs sm:text-sm text-slate-400">
                                        <strong className="text-white block mb-0.5">Phone / WhatsApp:</strong>
                                        <div className="flex flex-col gap-0.5">
                                            <a href={`tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`} className="hover:text-amber-400 transition-colors font-medium">{CONTACT_DETAILS.PHONE_PRIMARY}</a>
                                            <a href={`tel:${CONTACT_DETAILS.PHONE_SECONDARY_RAW}`} className="hover:text-amber-400 transition-colors font-medium">{CONTACT_DETAILS.PHONE_SECONDARY}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-3 sm:space-y-4 bg-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm" onSubmit={handleSubmit}>
                            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-300">Full Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-slate-300">Phone Number</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-300">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    required
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="case-type" className="text-xs sm:text-sm font-medium text-slate-300">Case Type</label>
                                <select
                                    id="case-type"
                                    value={formData.caseType}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-2 text-xs sm:text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                >
                                    <option value="civil">Civil Litigation</option>
                                    <option value="criminal">Criminal Defense</option>
                                    <option value="family">Family Law</option>
                                    <option value="corporate">Corporate Law</option>
                                    <option value="property">Property Dispute</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-xs sm:text-sm font-medium text-slate-300">Case Details</label>
                                <textarea
                                    id="message"
                                    placeholder="Briefly describe your legal situation..."
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                            </div>

                            <CTAButton type="submit" className="w-full py-3 h-auto text-xs sm:text-sm font-bold shadow-lg mt-2" size="md" icon={Send}>
                                Request Consultation on WhatsApp
                            </CTAButton>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
