"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

export function ReadyToDiscuss() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-white shadow-2xl md:px-16"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
                        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white blur-3xl" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-6 rounded-full bg-white/20 p-4">
                            <MessageSquare size={32} />
                        </div>
                        <h2 className="mb-4 text-3xl font-bold md:text-5xl font-heading">
                            Ready to Discuss Your Case?
                        </h2>
                        <p className="mb-10 max-w-2xl text-lg text-white/90">
                            Let's work together to find the right legal path forward. Our empathetic approach ensures you feel heard and supported throughout the entire process.
                        </p>
                        <Link
                            href="/contact"
                            className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-slate-50 hover:gap-4 shadow-lg active:scale-95"
                        >
                            Get Professional Consultation
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
