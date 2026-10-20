"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PhilosophyAndApproach() {
    return (
        <section className="py-10 sm:py-16 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-3.5 sm:px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <div className="flex flex-col items-center text-center mb-6 sm:mb-10">
                        <span className="text-primary font-bold tracking-wider uppercase text-[10px] sm:text-xs mb-1.5 block">Our Core Values</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-2">Philosophy and Approach</h2>
                        <div className="h-1 w-14 bg-primary mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
                        <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
                            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                                <p>
                                    At the core of our practice is the belief that every client deserves <span className="text-foreground font-semibold">personalized attention</span> and a tailored legal strategy. We understand that legal challenges can be stressful and overwhelming.
                                </p>
                                <p>
                                    Therefore, we prioritize <span className="text-foreground font-semibold">clear and consistent communication</span>, ensuring you are informed and empowered at every stage of your case.
                                </p>
                                <p>
                                    Our approach combines <span className="text-foreground font-semibold">rigorous legal research</span> with practical, real-world experience to achieve the best possible outcomes.
                                </p>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                <p className="text-sm sm:text-base italic font-heading text-primary leading-relaxed">
                                    &quot;The legality of a solution is just the beginning; its practicality determines its success.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-[16/10] sm:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"
                                    alt="Philosophy of Justice"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
