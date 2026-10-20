"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, BookOpen, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
    const pathname = usePathname();

    const handleConsultClick = (e: React.MouseEvent) => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            e.preventDefault();
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        {
            label: "Home",
            href: "/",
            icon: Home,
            active: pathname === "/",
        },
        {
            label: "About",
            href: "/about",
            icon: User,
            active: pathname === "/about",
        },
        {
            label: "Services",
            href: "/practice-areas",
            icon: Briefcase,
            active: pathname.startsWith("/practice-areas"),
        },
        {
            label: "Blog",
            href: "/blog",
            icon: BookOpen,
            active: pathname.startsWith("/blog"),
        },
        {
            label: "Consult",
            href: pathname === "/" ? "#contact" : "/contact",
            icon: Calendar,
            onClick: pathname === "/" ? handleConsultClick : undefined,
            highlight: "consult",
        },
    ];

    return (
        <nav
            aria-label="Mobile Navigation"
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 shadow-[0_-8px_30px_rgba(0,0,0,0.4)]"
        >
            <div className="flex items-center justify-around max-w-md mx-auto">
                {navItems.map((item) => {
                    const Icon = item.icon;

                    if (item.highlight === "consult") {
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={item.onClick}
                                className="flex flex-col items-center justify-center py-1 px-2 text-slate-300 hover:text-white transition-colors"
                            >
                                <div className="h-8 w-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 shadow-sm active:scale-95 transition-transform">
                                    <Icon size={16} />
                                </div>
                                <span className="text-[10px] font-medium tracking-tight mt-0.5 text-amber-400">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    }

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center py-1 px-2 transition-colors",
                                item.active ? "text-white" : "text-slate-400 hover:text-slate-200"
                            )}
                        >
                            <div className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center transition-all",
                                item.active ? "bg-white/15 text-white" : "text-slate-400"
                            )}>
                                <Icon size={16} />
                            </div>
                            <span className={cn(
                                "text-[10px] font-medium tracking-tight mt-0.5",
                                item.active ? "text-white font-bold" : "text-slate-400"
                            )}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
