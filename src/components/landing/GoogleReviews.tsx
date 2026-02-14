"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Star, CheckCircle2, ChevronRight } from "lucide-react";

const REVIEWS = [
    {
        name: "Rahul Sharma",
        initials: "RS",
        date: "2 weeks ago",
        text: "Adv. Suman Suresh is highly professional and knowledgeable. He handled my property dispute with great precision and kept me updated throughout the process. Highly recommend his services.",
        rating: 5,
    },
    {
        name: "Priyanka N.",
        initials: "PN",
        date: "1 month ago",
        text: "I was extremely stressed about my family matter, but Adv. Suman provided the clarity and support I needed. His approach is very balanced and results-oriented. Thank you for the guidance.",
        rating: 5,
    },
    {
        name: "Arun Kumar",
        initials: "AK",
        date: "3 months ago",
        text: "Consulted him for corporate documentation. The drafting was meticulous and all my concerns were addressed. A very reliable legal consultant in Bengaluru.",
        rating: 5,
    },
];

export function GoogleReviews() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 shadow-inner">
                                <svg className="h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                    />
                                </svg>
                            </div>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-slate-900">4.9/5 Rating</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Client Feedback on Google</h2>
                        <p className="text-muted-foreground">
                            We pride ourselves on transparency and results. Read what our clients have to say about their experience with Adv. Suman Suresh.
                        </p>
                    </div>
                    <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline group"
                    >
                        Write a Review <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {REVIEWS.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                                        {review.initials}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold flex items-center gap-1">
                                            {review.name}
                                            <CheckCircle2 className="h-3 w-3 text-blue-500" />
                                        </div>
                                        <div className="text-[10px] text-slate-400 uppercase tracking-widest">{review.date}</div>
                                    </div>
                                </div>
                                <div className="flex">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed italic">
                                "{review.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
