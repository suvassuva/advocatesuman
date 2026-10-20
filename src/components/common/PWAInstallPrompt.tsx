"use client";

import { useState, useEffect, useCallback } from "react";
import { Download, X, Scale, Share, PlusSquare, Monitor, Smartphone, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showBanner, setShowBanner] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);
    const [showGuideModal, setShowGuideModal] = useState(false);

    // Trigger installation
    const triggerInstall = useCallback(async () => {
        // If already installed in standalone mode
        if (
            window.matchMedia("(display-mode: standalone)").matches ||
            (window.navigator as unknown as { standalone?: boolean }).standalone === true
        ) {
            setIsStandalone(true);
            setShowGuideModal(true);
            return;
        }

        // iOS Safari flow
        if (isIOS) {
            setShowGuideModal(true);
            return;
        }

        // Native Chrome / Android / Edge prompt
        if (deferredPrompt) {
            try {
                await deferredPrompt.prompt();
                const choice = await deferredPrompt.userChoice;
                if (choice.outcome === "accepted") {
                    setShowBanner(false);
                    setShowGuideModal(false);
                }
                setDeferredPrompt(null);
                return;
            } catch (err) {
                console.error("Install prompt error:", err);
            }
        }

        // Fallback guide modal if beforeinstallprompt is not directly actionable
        setShowGuideModal(true);
    }, [deferredPrompt, isIOS]);

    useEffect(() => {
        // Register Service Worker for PWA compliance
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/sw.js")
                .catch((err) => console.log("SW registration failed: ", err));
        }

        // Check if app is already running in standalone mode (already installed)
        const standalone =
            window.matchMedia("(display-mode: standalone)").matches ||
            (window.navigator as unknown as { standalone?: boolean }).standalone === true;
        setIsStandalone(standalone);

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

            // Auto-show banner only if not standalone and not recently dismissed
            if (!standalone) {
                const dismissedTime = localStorage.getItem("pwa_install_dismissed");
                const isDismissed = dismissedTime && Date.now() - Number(dismissedTime) < 24 * 60 * 60 * 1000;
                if (!isDismissed) {
                    setTimeout(() => {
                        setShowBanner(true);
                    }, 2500);
                }
            }
        };

        // Listen for manual install button clicks dispatched across the app
        const handleCustomOpen = () => {
            triggerInstall();
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstall);
        window.addEventListener("open-pwa-install", handleCustomOpen);

        // For iOS devices, auto-show banner if not dismissed
        if (isIosDevice && !standalone) {
            const dismissedTime = localStorage.getItem("pwa_install_dismissed");
            const isDismissed = dismissedTime && Date.now() - Number(dismissedTime) < 24 * 60 * 60 * 1000;
            if (!isDismissed) {
                const timer = setTimeout(() => {
                    setShowBanner(true);
                }, 3000);
                return () => {
                    clearTimeout(timer);
                    window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
                    window.removeEventListener("open-pwa-install", handleCustomOpen);
                };
            }
        }

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
            window.removeEventListener("open-pwa-install", handleCustomOpen);
        };
    }, [triggerInstall]);

    const handleDismissBanner = () => {
        setShowBanner(false);
        localStorage.setItem("pwa_install_dismissed", Date.now().toString());
    };

    return (
        <>
            {/* Install Prompt Toast Banner (Auto on load or triggered) */}
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ opacity: 0, y: -40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
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
                                    onClick={triggerInstall}
                                    className="flex items-center gap-1 rounded-xl bg-amber-500 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-400 active:scale-95 transition-all shadow-md shadow-amber-500/20"
                                >
                                    <Download size={13} />
                                    Install
                                </button>
                                <button
                                    onClick={handleDismissBanner}
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

            {/* Comprehensive Installation Modal (Triggered on demand) */}
            <AnimatePresence>
                {showGuideModal && (
                    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md p-4">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-md rounded-3xl bg-slate-900 border border-amber-500/30 p-6 text-white shadow-2xl space-y-5"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between pb-3 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                                        <Scale size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                                            {isStandalone
                                                ? "App Already Installed"
                                                : isIOS
                                                ? "Install on iPhone / iPad"
                                                : "Install Suman & Co. App"}
                                        </h3>
                                        <p className="text-[11px] text-slate-400">
                                            Advocate Suman & Co. Legal Services
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowGuideModal(false)}
                                    aria-label="Close dialog"
                                    className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Content based on state */}
                            {isStandalone ? (
                                <div className="space-y-4 py-2 text-center">
                                    <div className="mx-auto h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-semibold text-sm text-white">Already Installed!</h4>
                                        <p className="text-xs text-slate-300 max-w-xs mx-auto">
                                            The Suman & Co. Progressive Web App is already installed and ready on your device. You can launch it anytime from your home screen.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setShowGuideModal(false)}
                                        className="w-full rounded-xl bg-amber-500 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : isIOS ? (
                                <div className="space-y-4">
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        Install directly in Safari without downloading from the App Store:
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

                                        <div className="flex items-center gap-3">
                                            <div className="h-7 w-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                                                3
                                            </div>
                                            <div className="text-slate-200">
                                                <span>Tap <strong className="text-white">Add</strong> in the top-right corner.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setShowGuideModal(false)}
                                        className="w-full rounded-xl bg-amber-500 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                                    >
                                        Got it
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-slate-300">
                                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                                            <Smartphone className="h-4 w-4 text-amber-400" />
                                            <span>Home Screen</span>
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                                            <ShieldCheck className="h-4 w-4 text-emerald-400" />
                                            <span>Offline Safe</span>
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                                            <Monitor className="h-4 w-4 text-blue-400" />
                                            <span>Fast Access</span>
                                        </div>
                                    </div>

                                    {deferredPrompt ? (
                                        <button
                                            onClick={triggerInstall}
                                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-xs font-bold text-slate-950 hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 active:scale-98"
                                        >
                                            <Download size={15} />
                                            Install Suman & Co. Now
                                        </button>
                                    ) : (
                                        <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5 text-xs text-slate-300">
                                            <p className="font-semibold text-white">How to install on this device:</p>
                                            <div className="space-y-2 text-[11px] leading-relaxed">
                                                <p className="flex items-start gap-2">
                                                    <span className="text-amber-400 font-bold">•</span>
                                                    <span><strong>Desktop Chrome / Edge:</strong> Click the install icon (⊕ or computer icon) in the right side of the address bar.</span>
                                                </p>
                                                <p className="flex items-start gap-2">
                                                    <span className="text-amber-400 font-bold">•</span>
                                                    <span><strong>Android Chrome:</strong> Tap the browser menu (<strong className="text-white">⋮</strong>) at the top right, then select <strong className="text-amber-400">"Install app"</strong> or <strong className="text-amber-400">"Add to Home Screen"</strong>.</span>
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => setShowGuideModal(false)}
                                        className="w-full rounded-xl bg-white/10 py-2.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/15 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

