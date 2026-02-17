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
        <footer className="bg-slate-900 py-12 text-slate-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-white">
                            <Scale className="h-8 w-8 text-primary" />
                            <span className="font-heading text-xl font-bold">Suman & Co.</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            Dedicated to providing the highest standards of legal representation in Bengaluru.
                            We believe in justice, integrity, and client success.
                        </p>
                        <div className="flex items-center gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all duration-300 hover:bg-primary hover:text-white"
                                >
                                    <social.icon size={18} />
                                    <span className="sr-only">{social.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-white">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/practice-areas" className="hover:text-white">Practice Areas</Link></li>
                            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">Practice Areas</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Civil Litigation</li>
                            <li>Criminal Defense</li>
                            <li>Family Law</li>
                            <li>Corporate Law</li>
                            <li>Property Disputes</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-white">Contact Us</h3>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-4 group">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <span className="pt-1.5 leading-relaxed text-slate-300 group-hover:text-white transition-colors">
                                    {CONTACT_DETAILS.ADDRESS}
                                </span>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div className="flex flex-col gap-1.5 pt-1.5">
                                    <a href={`tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`} className="text-slate-300 hover:text-amber-400 transition-colors font-medium">{CONTACT_DETAILS.PHONE_PRIMARY}</a>
                                    <a href={`tel:${CONTACT_DETAILS.PHONE_SECONDARY_RAW}`} className="text-slate-300 hover:text-amber-400 transition-colors font-medium">{CONTACT_DETAILS.PHONE_SECONDARY}</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <a href={`mailto:${CONTACT_DETAILS.EMAIL}`} className="pt-1.5 text-slate-300 hover:text-amber-400 transition-colors font-medium truncate">{CONTACT_DETAILS.EMAIL}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Suman & Co. Advocates. All rights reserved.</p>
                    <p className="mt-2">
                        Disclaimer: The information provided on this website does not constitute legal advice.
                        Consultation is recommended for specific legal matters.
                    </p>
                </div>
            </div>
        </footer>
    );
}
