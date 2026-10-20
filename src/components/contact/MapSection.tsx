"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";

export function MapSection() {
    return (
        <section className="py-10 sm:py-16 md:py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-3.5 sm:px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 items-center">
                    {/* Map Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-2/3 h-[240px] sm:h-[360px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-4 sm:border-8 border-white relative"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.970172901691!2d77.6416625759163!3d12.973748214872277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a3f910408d%3A0xe9628006d690a98!2sChinmaya%20Mission%20Hospital%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1739549300000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale contrast-125 transition-all duration-700 hover:grayscale-0"
                        ></iframe>
                    </motion.div>

                    {/* Info Side */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary font-bold tracking-wider uppercase text-[10px] sm:text-xs mb-1 block">Location</span>
                            <h2 className="text-xl sm:text-3xl font-bold font-heading mb-2 text-slate-900">Visit Our Chambers</h2>
                            <p className="text-slate-600 mb-4 text-xs sm:text-sm leading-relaxed">
                                Strategically located in Indiranagar, Bengaluru, easily accessible for clients across the city.
                            </p>

                            <div className="space-y-3">
                                <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm border-l-4 border-l-primary flex items-start gap-2.5">
                                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5">Office Address</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">{CONTACT_DETAILS.ADDRESS}</p>
                                    </div>
                                </div>

                                <a
                                    href="https://maps.google.com/?q=CMH+Road+Indiranagar+Bengaluru"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-primary font-bold text-xs sm:text-sm hover:underline"
                                >
                                    Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
