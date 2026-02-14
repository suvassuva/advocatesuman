"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function PhilosophyAndApproach() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto relative">
                    {/* Decorative Background Icon */}
                    <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 opacity-5 text-primary">
                        <Quote size={200} />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="flex flex-col items-center text-center mb-16">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Core Values</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Philosophy and Approach</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 space-y-8">
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        At the core of our practice is the belief that every client deserves <span className="text-foreground font-semibold underline decoration-primary/30 decoration-4">personalized attention</span> and a tailored legal strategy. We understand that legal challenges can be stressful and overwhelming.
                                    </p>
                                    <p>
                                        Therefore, we prioritize <span className="text-foreground font-semibold">clear and consistent communication</span>, ensuring you are informed and empowered at every stage of your case.
                                    </p>
                                    <p>
                                        Our approach combines <span className="text-foreground font-semibold">rigorous legal research</span> with practical, real-world experience to achieve the best possible outcomes.
                                    </p>
                                </div>
                                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                                    <p className="text-xl italic font-heading text-primary leading-relaxed">
                                        "The legality of a solution is just the beginning; its practicality determines its success."
                                    </p>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"
                                        alt="Philosophy of Justice"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
