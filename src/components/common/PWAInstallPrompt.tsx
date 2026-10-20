"use client";

import { useState, useEffect, useCallback } from "react";
import { Download, X, Scale, Share, PlusSquare, Monitor, Smartphone, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [viewMode, setViewMode] = useState<"prompt" | "ios_guide" | "desktop_guide" | "already_installed">("prompt");
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    // Primary action when user clicks "Install App" button inside the popup
    const handleInstallAction = async () => {
        // If already standalone
        if (isStandalone) {
            setViewMode("already_installed");
            return;
        }

        // iOS Safari cannot trigger native prompt, show simple 2-step guide
        if (isIOS) {
            setViewMode("ios_guide");
            return;
        }

        // Android / Chrome / Edge native beforeinstallprompt
        if (deferredPrompt) {
            try {
                await deferredPrompt.prompt();
                const choice = await deferredPrompt.userChoice;
                if (choice.outcome === "accepted") {
                    setIsOpen(false);
                    try {
                        sessionStorage.setItem("pwa_popup_dismissed", "true");
                    } catch {}
                }
                setDeferredPrompt(null);
                return;
            } catch (err) {
                console.error("Install prompt error:", err);
            }
        }

        // Fallback for desktop/browsers where beforeinstallprompt isn't directly triggered
        setViewMode("desktop_guide");
    };

    const handleDismiss = () => {
        setIsOpen(false);
        try {
            sessionStorage.setItem("pwa_popup_dismissed", "true");
        } catch {}
    };

    const openModalManually = useCallback(() => {
        const standalone =
            window.matchMedia("(display-mode: standalone)").matches ||
            (window.navigator as unknown as { standalone?: boolean }).standalone === true;

        if (standalone) {
            setViewMode("already_installed");
        } else {
            setViewMode("prompt");
        }
        setIsOpen(true);
    }, []);

    useEffect(() => {
        // 1. Register Service Worker
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/sw.js")
                .catch((err) => console.log("SW registration error: ", err));
        }

        // 2. Check if already installed
        const standalone =
            window.matchMedia("(display-mode: standalone)").matches ||
            (window.navigator as unknown as { standalone?: boolean }).standalone === true;
        setIsStandalone(standalone);

        // 3. Detect iOS
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
        setIsIOS(isIosDevice);

        // 4. Capture native browser beforeinstallprompt
        const handleBeforeInstall = (e: Event) => {
            e.preventDefault();
            const promptEvent = e as BeforeInstallPromptEvent;
            setDeferredPrompt(promptEvent);
            (window as unknown as { deferredPwaPrompt?: BeforeInstallPromptEvent }).deferredPwaPrompt = promptEvent;
        };

        // 5. Custom event listener for manual clicks (e.g., from Footer)
        window.addEventListener("beforeinstallprompt", handleBeforeInstall);
        window.addEventListener("open-pwa-install", openModalManually);

        // 6. Automatically show the install popup when someone opens/clicks the link
        if (!standalone) {
            const isDismissed = (() => {
                try {
                    return sessionStorage.getItem("pwa_popup_dismissed") === "true";
                } catch {
                    return false;
                }
            })();

            if (!isDismissed) {
                // Show gentle popup after 2 seconds so the page renders smoothly first
                const timer = setTimeout(() => {
                    setViewMode("prompt");
                    setIsOpen(true);
                }, 2000);

                return () => {
                    clearTimeout(timer);
                    window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
                    window.removeEventListener("open-pwa-install", openModalManually);
                };
            }
        }

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
            window.removeEventListener("open-pwa-install", openModalManually);
        };
    }, [openModalManually]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="w-full max-w-xs sm:max-w-sm rounded-2xl bg-slate-900/95 border border-amber-500/30 p-4 text-white shadow-2xl shadow-black/90 space-y-3 relative backdrop-blur-md"
                    >
                        {/* Top Close Button */}
                        <button
                            onClick={handleDismiss}
                            aria-label="Close install popup"
                            className="absolute top-3.5 right-3.5 p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X size={16} />
                        </button>

                        {/* VIEW 1: Main Install Prompt (Small & Focused) */}
                        {viewMode === "prompt" && (
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 pr-6">
                                    <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-md shadow-amber-500/20">
                                        <div className="h-full w-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                                            <Scale className="h-5 w-5 text-white" />
                                        </div>
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-heading font-bold text-sm text-white truncate">
                                            Suman & Co. Advocates
                                        </h3>
                                        <p className="text-[11px] text-slate-300 truncate">
                                            Install app for 1-tap fast access
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 pt-1">
                                    <button
                                        onClick={handleInstallAction}
                                        className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-2.5 text-xs font-bold text-slate-950 hover:from-amber-400 hover:to-amber-500 active:scale-95 transition-all shadow-md shadow-amber-500/25"
                                    >
                                        <Download size={14} />
                                        Install App
                                    </button>
                                    <button
                                        onClick={handleDismiss}
                                        className="px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                                    >
                                        Later
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* VIEW 2: iOS Safari Instructions */}
                        {viewMode === "ios_guide" && (
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 pr-6">
                                    <Smartphone size={16} className="text-amber-400" />
                                    <h3 className="font-heading font-bold text-xs text-white">
                                        Install on iPhone / iPad
                                    </h3>
                                </div>

                                <div className="space-y-2 bg-white/5 p-3 rounded-xl border border-white/5 text-[11px] text-slate-300">
                                    <div className="flex items-center gap-2">
                                        <span className="h-5 w-5 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                                        <span>Tap <strong className="text-blue-300">Share</strong> <Share size={11} className="inline ml-0.5" /> in Safari.</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="h-5 w-5 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                                        <span>Tap <strong className="text-amber-300">Add to Home Screen</strong> <PlusSquare size={11} className="inline ml-0.5" />.</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleDismiss}
                                    className="w-full rounded-xl bg-amber-500 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors"
                                >
                                    Got it
                                </button>
                            </div>
                        )}

                        {/* VIEW 3: Desktop / General Instructions */}
                        {viewMode === "desktop_guide" && (
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 pr-6">
                                    <Monitor size={16} className="text-amber-400" />
                                    <h3 className="font-heading font-bold text-xs text-white">
                                        How to Install
                                    </h3>
                                </div>

                                <div className="space-y-1.5 bg-white/5 p-3 rounded-xl border border-white/5 text-[11px] text-slate-300 leading-relaxed">
                                    <p>• <strong>Chrome / Edge:</strong> Click the <strong>⊕</strong> install icon in the address bar.</p>
                                    <p>• <strong>Android:</strong> Tap <strong>⋮</strong> menu → <strong>"Install app"</strong>.</p>
                                </div>

                                <button
                                    onClick={handleDismiss}
                                    className="w-full rounded-xl bg-amber-500 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors"
                                >
                                    Got it
                                </button>
                            </div>
                        )}

                        {/* VIEW 4: Already Installed */}
                        {viewMode === "already_installed" && (
                            <div className="space-y-2.5 py-1 text-center">
                                <div className="mx-auto h-9 w-9 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="font-semibold text-xs text-white">Already Installed!</h4>
                                    <p className="text-[11px] text-slate-300 max-w-xs mx-auto">
                                        Suman & Co. is installed on your device. Launch it anytime from your home screen.
                                    </p>
                                </div>
                                <button
                                    onClick={handleDismiss}
                                    className="w-full rounded-xl bg-amber-500 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
