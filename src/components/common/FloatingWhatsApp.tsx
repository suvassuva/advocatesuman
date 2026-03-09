"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { CONTACT_DETAILS } from "@/lib/constants";

export function FloatingWhatsApp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4 text-left">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-72 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-4 text-white">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 overflow-hidden rounded-full bg-white/20 p-2 border border-white/30 backdrop-blur-sm">
                                    <MessageCircle className="h-full w-full" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Adv. Suman Suresh</p>
                                    <p className="text-[10px] opacity-90 leading-tight">Ready to assist with your legal needs</p>
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="bg-slate-50/50 p-4 flex flex-col gap-3">
                            <div className="rounded-xl bg-white p-3 text-xs text-slate-600 shadow-sm border border-slate-100">
                                Hi there! How can we help you today?
                            </div>

                            <a
                                href={`https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-md shadow-green-500/20 transition-all hover:bg-[#20bd5a] hover:shadow-lg active:scale-95"
                            >
                                <div className="flex items-center gap-3">
                                    <MessageSquare className="h-4 w-4" />
                                    <span>Message on WhatsApp</span>
                                </div>
                            </a>

                            <a
                                href={`tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`}
                                className="flex items-center justify-between rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
                            >
                                <div className="flex items-center gap-3">
                                    <Phone className="h-4 w-4" />
                                    <span>Call for Consultation</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 ${isOpen
                    ? "bg-slate-900 text-white rotate-90"
                    : "bg-[#25D366] text-white shadow-green-500/30 hover:shadow-green-500/50"
                    }`}
            >
                {!isOpen && (
                    <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
                )}
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-7 w-7 relative z-10" />}
            </motion.button>
        </div>
    );
}
