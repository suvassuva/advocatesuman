import Link from "next/link";
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";

const SOCIAL_LINKS = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
    return (
        <footer className="bg-slate-950 pt-8 sm:pt-12 pb-24 sm:pb-28 md:pb-12 text-slate-200 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white">
                            <Scale className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                            <span className="font-heading text-lg sm:text-xl font-bold">Suman & Co.</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            Dedicated to providing the highest standards of legal representation in Bengaluru.
                            We believe in justice, integrity, and client success.
                        </p>
                        <div className="flex items-center gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all duration-300 hover:bg-primary hover:text-white"
                                >
                                    <social.icon size={15} />
                                    <span className="sr-only">{social.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-3 text-sm sm:text-base font-bold text-white uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/practice-areas" className="hover:text-white transition-colors">Practice Areas</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Updates</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h3 className="mb-3 text-sm sm:text-base font-bold text-white uppercase tracking-wider">Practice Areas</h3>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                            <li><Link href="/civil-lawyers-in-bangalore" className="hover:text-white transition-colors">Civil Litigation</Link></li>
                            <li><Link href="/criminal-lawyers-in-bangalore" className="hover:text-white transition-colors">Criminal Defense</Link></li>
                            <li><Link href="/divorce-lawyers-in-bangalore" className="hover:text-white transition-colors">Family Law & Divorce</Link></li>
                            <li><Link href="/corporate-law-firms-in-bangalore" className="hover:text-white transition-colors">Corporate Advisory</Link></li>
                            <li><Link href="/property-dispute-lawyers-in-bangalore" className="hover:text-white transition-colors">Property Disputes</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-3 text-sm sm:text-base font-bold text-white uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                            <li className="flex items-start gap-2.5 group">
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                                    <MapPin className="h-3.5 w-3.5" />
                                </div>
                                <span className="pt-0.5 leading-relaxed text-slate-300 text-xs">
                                    {CONTACT_DETAILS.ADDRESS}
                                </span>
                            </li>
                            <li className="flex items-start gap-2.5 group">
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                                    <Phone className="h-3.5 w-3.5" />
                                </div>
                                <div className="flex flex-col gap-0.5 pt-0.5 text-xs">
                                    <a href={`tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`} className="text-slate-300 hover:text-amber-400 transition-colors font-medium">{CONTACT_DETAILS.PHONE_PRIMARY}</a>
                                    <a href={`tel:${CONTACT_DETAILS.PHONE_SECONDARY_RAW}`} className="text-slate-300 hover:text-amber-400 transition-colors font-medium">{CONTACT_DETAILS.PHONE_SECONDARY}</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2.5 group">
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                                    <Mail className="h-3.5 w-3.5" />
                                </div>
                                <a href={`mailto:${CONTACT_DETAILS.EMAIL}`} className="pt-0.5 text-slate-300 hover:text-amber-400 transition-colors font-medium text-xs break-all">{CONTACT_DETAILS.EMAIL}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-800/80 pt-6 text-center text-xs text-slate-400 space-y-1.5">
                    <p className="font-medium text-slate-300">© {new Date().getFullYear()} Suman & Co. Advocates. All rights reserved.</p>
                    <p className="max-w-2xl mx-auto leading-relaxed text-slate-400 text-[11px] sm:text-xs text-pretty">
                        Disclaimer: The information provided on this website does not constitute legal advice.
                        Consultation is recommended for specific legal matters.
                    </p>
                </div>
            </div>
        </footer>
    );
}
