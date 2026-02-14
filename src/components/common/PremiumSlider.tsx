"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumSliderProps {
    images: string[];
    interval?: number;
    className?: string;
    imageClassName?: string;
    overlayClassName?: string;
    showArrows?: boolean;
    showDots?: boolean;
}

export function PremiumSlider({
    images,
    interval = 6000,
    className,
    imageClassName,
    overlayClassName,
    showArrows = false,
    showDots = false,
}: PremiumSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className={cn("relative h-full w-full overflow-hidden", className)}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className={cn("h-full w-full object-cover", imageClassName)}
                    />
                    <div className={cn("absolute inset-0", overlayClassName)} />
                </motion.div>
            </AnimatePresence>

            {showDots && images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-500",
                                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/30"
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
