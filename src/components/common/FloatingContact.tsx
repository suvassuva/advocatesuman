"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, Mail } from "lucide-react";
import { useState } from "react";

import { CONTACT_DETAILS } from "@/lib/constants";

export function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        {
            icon: MessageCircle,
            label: "WhatsApp",
            href: `https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER}`,
            color: "bg-[#25D366]",
        },
        {
            icon: Phone,
            label: "Call Us",
            href: `tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`,
            color: "bg-blue-600",
        },
        {
            icon: Mail,
            label: "Email",
            href: `mailto:${CONTACT_DETAILS.EMAIL}`,
            color: "bg-primary",
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <div className="flex flex-col items-end gap-3 mb-2">
                        {actions.map((action, index) => (
                            <motion.a
                                key={index}
                                href={action.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0, y: 20 }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex items-center gap-3 rounded-full px-4 py-2.5 text-white shadow-lg transition-transform hover:scale-105 ${action.color}`}
                            >
                                <span className="text-sm font-semibold">{action.label}</span>
                                <action.icon className="h-5 w-5" />
                            </motion.a>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-colors ${isOpen ? "bg-slate-800 text-white" : "bg-primary text-primary-foreground"
                    }`}
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}

                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}
