"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, MapPin, ArrowRight } from "lucide-react";

import { CONTACT_DETAILS } from "@/lib/constants";

const CONTACT_METHODS = [
    {
        icon: Phone,
        title: "Call Us",
        value: `${CONTACT_DETAILS.PHONE_PRIMARY}`,
        description: "Direct line for urgent inquiries",
        action: "Primary Line",
        link: `tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`,
        color: "bg-blue-500"
    },
    {
        icon: MessageSquare,
        title: "WhatsApp",
        value: "Direct Chat",
        description: "Quick message for fast response",
        action: "Send Message",
        link: `https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER}`,
        color: "bg-green-500"
    },
    {
        icon: Mail,
        title: "Email",
        value: CONTACT_DETAILS.EMAIL,
        description: "Official legal correspondence",
        action: "Write Email",
        link: `mailto:${CONTACT_DETAILS.EMAIL}`,
        color: "bg-amber-500"
    },
    {
        icon: MapPin,
        title: "Office",
        value: "Bengaluru, India",
        description: "CMH Road, Indiranagar",
        action: "Get Directions",
        link: "https://maps.google.com/?q=CMH+Road+Indiranagar+Bengaluru",
        color: "bg-slate-700"
    }
];

export function ContactCards() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {CONTACT_METHODS.map((method, index) => (
                        <motion.a
                            key={method.title}
                            href={method.link}
                            target={method.link.startsWith("http") ? "_blank" : undefined}
                            rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:bg-white hover:border-primary/20"
                        >
                            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${method.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                <method.icon className="h-7 w-7" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                            <p className="font-semibold text-primary mb-1">{method.value}</p>
                            <p className="text-sm text-slate-500 mb-6">{method.description}</p>

                            <div className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                                {method.action} <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-slate-200/20 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
