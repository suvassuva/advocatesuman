"use client";

import { useState, useEffect } from "react";
import { Download, X, Scale, Share, PlusSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showBanner, setShowBanner] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [showIOSGuide, setShowIOSGuide] = useState(false);

    useEffect(() => {
        // Register Service Worker for PWA compliance
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/sw.js")
                .catch((err) => console.log("SW registration failed: ", err));
        }

        // Check if app is already running in standalone mode (already installed)
        const isStandalone =
            window.matchMedia("(display-mode: standalone)").matches ||
            (window.navigator as unknown as { standalone?: boolean }).standalone === true;

        if (isStandalone) {
            return;
        }

        // Check if user previously dismissed the prompt today
        const dismissedTime = localStorage.getItem("pwa_install_dismissed");
        if (dismissedTime && Date.now() - Number(dismissedTime) < 24 * 60 * 60 * 1000) {
            return;
        }

        // Detect iOS
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
        setIsIOS(isIosDevice);

        // Listen for Chrome/Android/Edge beforeinstallprompt
        const handleBeforeInstall = (e: Event) => {
            e.preventDefault();
            const promptEvent = e as BeforeInstallPromptEvent;
            setDeferredPrompt(promptEvent);
            (window as unknown as { deferredPwaPrompt?: BeforeInstallPromptEvent }).deferredPwaPrompt = promptEvent;
            // Delay appearance by 2 seconds so page loads smoothly first
            setTimeout(() => {
                setShowBanner(true);
            }, 2000);
        };

        const handleCustomOpen = () => {
            setShowBanner(true);
            if (isIosDevice) {
                setShowIOSGuide(true);
            }
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstall);
        window.addEventListener("open-pwa-install", handleCustomOpen);

        // For iOS devices, show banner after 3 seconds
        if (isIosDevice) {
            const timer = setTimeout(() => {
                setShowBanner(true);
            }, 3000);
            return () => {
                clearTimeout(timer);
                window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
                window.removeEventListener("open-pwa-install", handleCustomOpen);
            };
        }

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
            window.removeEventListener("open-pwa-install", handleCustomOpen);
        };
    }, []);

    const handleInstallClick = async () => {
        if (isIOS) {
            setShowIOSGuide(true);
            return;
        }

        if (!deferredPrompt) {
            return;
        }

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
            setShowBanner(false);
        }
        setDeferredPrompt(null);
    };

    const handleDismiss = () => {
        setShowBanner(false);
        setShowIOSGuide(false);
        localStorage.setItem("pwa_install_dismissed", Date.now().toString());
    };

    return (
        <>
            {/* Install Prompt Toast Banner */}
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ opacity: 0, y: -40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="fixed top-16 sm:top-24 left-3 right-3 sm:left-auto sm:right-6 sm:w-96 z-50 rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-amber-500/30 p-3.5 shadow-2xl text-white"
                    >
                        <div className="flex items-center gap-3">
                            {/* App Logo */}
                            <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/40 flex items-center justify-center shadow-inner">
                                <Scale className="h-5 w-5 text-amber-400" />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                    <h4 className="font-heading font-bold text-xs sm:text-sm text-white truncate">
                                        Install Suman & Co. App
                                    </h4>
                                    <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded font-bold uppercase tracking-wider">
                                        PWA
                                    </span>
                                </div>
                                <p className="text-[10px] sm:text-xs text-slate-300 truncate">
                                    Instant 1-tap access on your home screen
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-1.5 shrink-0">
                                <button
                                    onClick={handleInstallClick}
                                    className="flex items-center gap-1 rounded-xl bg-amber-500 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-400 active:scale-95 transition-all shadow-md shadow-amber-500/20"
                                >
                                    <Download size={13} />
                                    Install
                                </button>
                                <button
                                    onClick={handleDismiss}
                                    aria-label="Dismiss install prompt"
                                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* iOS Safari Installation Guide Modal */}
            <AnimatePresence>
                {showIOSGuide && (
                    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="w-full max-w-sm rounded-3xl bg-slate-900 border border-white/10 p-6 text-white shadow-2xl space-y-4"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-white">
                                        <Scale size={18} />
                                    </div>
                                    <h3 className="font-heading font-bold text-base">Install on iPhone / iPad</h3>
                                </div>
                                <button
                                    onClick={() => setShowIOSGuide(false)}
                                    className="p-1 text-slate-400 hover:text-white rounded-lg"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed">
                                Follow these 2 simple steps in Safari to add the app directly to your home screen:
                            </p>

                            <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5 text-xs">
                                <div className="flex items-center gap-3">
                                    <div className="h-7 w-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold">
                                        1
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-200">
                                        <span>Tap the</span>
                                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 font-medium">
                                            <Share size={12} /> Share
                                        </span>
                                        <span>button in Safari toolbar.</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="h-7 w-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold">
                                        2
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-200">
                                        <span>Scroll down and tap</span>
                                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 font-medium text-amber-300">
                                            <PlusSquare size={12} /> Add to Home Screen
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowIOSGuide(false)}
                                className="w-full rounded-xl bg-amber-500 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors"
                            >
                                Got it
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
