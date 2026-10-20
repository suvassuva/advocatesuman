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
        action: "Call Now",
        link: `tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`,
        color: "bg-blue-600"
    },
    {
        icon: MessageSquare,
        title: "WhatsApp",
        value: "Direct Chat",
        description: "Quick message for fast response",
        action: "Send Message",
        link: `https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER}`,
        color: "bg-[#25D366]"
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
        color: "bg-slate-800"
    }
];

export function ContactCards() {
    return (
        <section className="py-8 sm:py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-3.5 sm:px-6 max-w-6xl">
                <div className="grid gap-2.5 sm:gap-6 grid-cols-2 lg:grid-cols-4">
                    {CONTACT_METHODS.map((method, index) => (
                        <motion.a
                            key={method.title}
                            href={method.link}
                            target={method.link.startsWith("http") ? "_blank" : undefined}
                            rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative p-3.5 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-lg hover:bg-white hover:border-primary/20"
                        >
                            <div className={`mb-3 inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl ${method.color} text-white shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                                <method.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>

                            <h3 className="text-xs sm:text-base font-bold text-slate-900 mb-0.5">{method.title}</h3>
                            <p className="font-semibold text-primary text-[11px] sm:text-sm mb-1 truncate">{method.value}</p>
                            <p className="text-[10px] sm:text-xs text-slate-500 mb-3 line-clamp-1">{method.description}</p>

                            <div className="flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors">
                                {method.action} <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
