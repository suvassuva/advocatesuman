"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { CONTACT_DETAILS } from "@/lib/constants";

export function FloatingWhatsApp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3 text-left">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-64 sm:w-72 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-3 sm:p-4 text-white">
                            <div className="flex items-center gap-2.5">
                                <div className="h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full bg-white/20 p-1.5 border border-white/30 backdrop-blur-sm">
                                    <MessageCircle className="h-full w-full" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm font-bold">Adv. Suman Suresh</p>
                                    <p className="text-[9px] sm:text-[10px] opacity-90 leading-tight">Ready to assist with your legal needs</p>
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="bg-slate-50/50 p-3 sm:p-4 flex flex-col gap-2.5">
                            <div className="rounded-xl bg-white p-2.5 text-xs text-slate-600 shadow-sm border border-slate-100">
                                Hi there! How can we help you today?
                            </div>

                            <a
                                href={`https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded-xl bg-[#25D366] px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-green-500/20 transition-all hover:bg-[#20bd5a] hover:shadow-lg active:scale-95"
                            >
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <MessageSquare className="h-4 w-4" />
                                    <span>Message on WhatsApp</span>
                                </div>
                            </a>

                            <a
                                href={`tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`}
                                className="flex items-center justify-between rounded-xl bg-slate-900 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
                            >
                                <div className="flex items-center gap-2 sm:gap-3">
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp quick chat"
                className={`relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 ${isOpen
                    ? "bg-slate-900 text-white rotate-90"
                    : "bg-[#25D366] text-white shadow-green-500/30 hover:shadow-green-500/50"
                    }`}
            >
                {!isOpen && (
                    <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
                )}
                {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <MessageSquare className="h-5 w-5 sm:h-7 sm:w-7 relative z-10" />}
            </motion.button>
        </div>
    );
}
