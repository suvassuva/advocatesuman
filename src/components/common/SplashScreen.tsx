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
            setTimeout(onComplete, 800);
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        y: -50,
                        transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden w-full max-w-full px-4"
                >
                    {/* Background Decorative Elements */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[400px] sm:h-[400px] bg-primary/20 rounded-full blur-[80px]" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ 
                                scale: 1, 
                                opacity: 1,
                                transition: { duration: 0.8, ease: "easeOut" }
                            }}
                            className="flex flex-col items-center gap-4 sm:gap-6"
                        >
                            {/* Logo Icon */}
                            <motion.div 
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.15, duration: 0.6 }}
                                className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-primary text-white shadow-lg"
                            >
                                <Scale className="h-8 w-8 sm:h-10 sm:w-10" />
                            </motion.div>

                            {/* Text Content */}
                            <div className="text-center">
                                <motion.h1 
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="text-2xl sm:text-4xl font-heading font-bold text-white mb-1 tracking-tight"
                                >
                                    Suman & Co.
                                </motion.h1>
                                <motion.p 
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.45, duration: 0.6 }}
                                    className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 font-medium"
                                >
                                    Advocates & Legal Consultants
                                </motion.p>
                            </div>

                            {/* Loading Bar */}
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
                                className="h-0.5 w-32 sm:w-44 bg-primary rounded-full mt-4 shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
