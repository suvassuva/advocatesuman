"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scale, Facebook, Twitter, Linkedin, Instagram, Phone, MessageSquare, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/common/CTAButton";
import { CONTACT_DETAILS } from "@/lib/constants";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/practice-areas", label: "Practice Areas" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
                isScrolled
                    ? "bg-slate-950/95 backdrop-blur-md shadow-md border-b border-white/10"
                    : "bg-slate-950/60 backdrop-blur-sm border-b border-white/5"
            )}
        >
            <div className="container mx-auto flex h-14 sm:h-20 items-center justify-between px-3.5 sm:px-6 max-w-7xl">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm border border-primary/40">
                        <Scale className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="font-heading text-base sm:text-xl font-bold leading-none tracking-tight text-white truncate">
                            Suman & Co.
                        </span>
                        <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-slate-300 font-medium truncate mt-0.5">
                            Advocates & Legal Consultants
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <CTAButton
                        size="sm"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Free Consultation
                    </CTAButton>
                </nav>

                {/* Mobile Toggle */}
                <button
                    aria-label="Toggle navigation menu"
                    className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile App-Style Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="fixed inset-x-0 top-14 bottom-0 bg-slate-950/98 backdrop-blur-2xl border-t border-white/10 p-5 shadow-2xl md:hidden overflow-y-auto animate-in slide-in-from-top-2 flex flex-col justify-between">
                    <nav className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-base font-semibold text-white py-3 px-3 rounded-xl hover:bg-white/10 transition-colors border-b border-white/5"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="mt-4 grid grid-cols-2 gap-2.5">
                            <a
                                href={`tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`}
                                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 py-3 text-xs font-bold"
                            >
                                <Phone size={14} />
                                Direct Call
                            </a>
                            <a
                                href={`https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] py-3 text-xs font-bold"
                            >
                                <MessageSquare size={14} />
                                WhatsApp
                            </a>
                        </div>

                        <CTAButton
                            className="w-full mt-3 py-3"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Book Consultation
                        </CTAButton>

                        <button
                            type="button"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                window.dispatchEvent(new CustomEvent("open-pwa-install"));
                            }}
                            className="flex items-center justify-center gap-2 w-full mt-2.5 py-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 font-bold text-xs hover:bg-amber-500/20 active:scale-95 transition-all"
                        >
                            <Download size={14} />
                            Install Suman & Co. App
                        </button>
                    </nav>

                    {/* Social Links in Mobile Menu */}
                    <div className="flex items-center justify-center gap-5 pt-6 pb-2 border-t border-white/10">
                        {SOCIAL_LINKS.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all duration-300 hover:bg-primary hover:text-white"
                            >
                                <social.icon size={16} />
                                <span className="sr-only">{social.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
