"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STATS = [
    { label: "Successful Cases", value: 100, suffix: "+" },
    { label: "Years of Excellence", value: 5, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
    { label: "Corporate Clients", value: 50, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export function StatsSection() {
    return (
        <section className="py-8 sm:py-14 bg-slate-900 border-y border-white/10">
            <div className="container mx-auto px-3 sm:px-6 max-w-6xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 md:gap-10 text-center">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white/5 border border-white/5 rounded-2xl p-3 sm:p-5 flex flex-col justify-center items-center text-center space-y-1 backdrop-blur-sm min-h-[85px] sm:min-h-[110px]"
                        >
                            <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white font-heading tracking-tight">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider text-balance">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
