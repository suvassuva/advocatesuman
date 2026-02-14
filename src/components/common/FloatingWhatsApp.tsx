"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";

export function FloatingWhatsApp() {
    return (
        <motion.a
            href={`https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 transition-shadow hover:shadow-green-500/50"
            title="Chat on WhatsApp"
        >
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
            <MessageSquare className="h-6 w-6 relative z-10" />

            {/* Tooltip */}
            <div className="absolute right-full mr-4 hidden md:block px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
                Need Legal Help? Chat Now
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
            </div>
        </motion.a>
    );
}
