"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scale, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/common/CTAButton";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/practice-areas", label: "Practice Areas" },
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

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-sm border-b"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Scale className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading text-xl font-bold leading-none">
                            Suman & Co.
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            Advocates & Legal Consultants
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <CTAButton size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                        Free Consultation
                    </CTAButton>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-20 left-0 right-0 border-b bg-background px-4 py-8 shadow-lg md:hidden animate-in slide-in-from-top-5">
                    <nav className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <CTAButton className="w-full mt-4" onClick={() => {
                            setIsMobileMenuOpen(false);
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}>
                            Book Consultation
                        </CTAButton>

                        {/* Social Links in Mobile Menu */}
                        <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-border">
                            {SOCIAL_LINKS.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all duration-300 hover:bg-primary hover:text-white"
                                >
                                    <social.icon size={18} />
                                    <span className="sr-only">{social.label}</span>
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
