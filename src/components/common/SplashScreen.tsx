"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Scale } from "lucide-react";
import { useEffect, useState } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Give a bit of time for the exit animation before calling onComplete
            setTimeout(onComplete, 1000);
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        y: -100,
                        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden"
                >
                    {/* Background Decorative Elements */}
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ 
                                scale: 1, 
                                opacity: 1,
                                transition: { duration: 1.2, ease: "easeOut" }
                            }}
                            className="flex flex-col items-center gap-6"
                        >
                            {/* Logo Icon */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_0_50px_rgba(var(--primary),0.3)]"
                            >
                                <Scale className="h-12 w-12" />
                            </motion.div>

                            {/* Text Content */}
                            <div className="text-center">
                                <motion.h1 
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 tracking-tight"
                                >
                                    Suman & Co.
                                </motion.h1>
                                <motion.p 
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="text-sm md:text-base uppercase tracking-[0.3em] text-slate-400 font-medium"
                                >
                                    Advocates & Legal Consultants
                                </motion.p>
                            </div>

                            {/* Loading Bar */}
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                                className="h-0.5 w-48 bg-primary rounded-full mt-8 shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
