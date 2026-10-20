"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

export function ReadyToDiscuss() {
    return (
        <section className="py-10 sm:py-16 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-3.5 sm:px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary px-5 py-8 text-center text-white shadow-xl sm:px-12 sm:py-14"
                >
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-3.5 rounded-full bg-white/20 p-2.5 sm:p-3.5">
                            <MessageSquare className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                        </div>
                        <h2 className="mb-2 sm:mb-3 text-xl sm:text-3xl md:text-4xl font-bold font-heading text-balance">
                            Ready to Discuss Your Case?
                        </h2>
                        <p className="mb-6 sm:mb-8 max-w-xl text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-light text-pretty">
                            Let&apos;s work together to find the right legal path forward. Our empathetic approach ensures you feel heard and supported throughout the entire process.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs sm:text-sm md:text-base font-bold text-primary transition-all hover:bg-slate-50 hover:gap-3 shadow-lg active:scale-95"
                        >
                            Get Professional Consultation
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
