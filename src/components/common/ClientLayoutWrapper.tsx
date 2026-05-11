"use client";

import { useState, useEffect } from "react";
import { SplashScreen } from "@/components/common/SplashScreen";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // Check if the splash has already been shown in this session
        const hasShownSplash = sessionStorage.getItem("hasShownSplash");
        if (hasShownSplash) {
            setShowSplash(false);
        }
    }, []);

    const handleSplashComplete = () => {
        setShowSplash(false);
        sessionStorage.setItem("hasShownSplash", "true");
    };

    return (
        <>
            {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
            <div className={showSplash ? "hidden" : "block"}>
                {children}
            </div>
        </>
    );
}
