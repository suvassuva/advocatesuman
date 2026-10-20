"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/common/CTAButton";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/practice-areas", label: "Practice Areas" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

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
            </div>
        </header>
    );
}
