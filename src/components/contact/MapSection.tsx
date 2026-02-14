"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function MapSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Map Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-2/3 h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group relative"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.970172901691!2d77.6416625759163!3d12.973748214872277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a3f910408d%3A0xe9628006d690a98!2sChinmaya%20Mission%20Hospital%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1739549300000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none border-2 border-primary/20 rounded-3xl" />
                    </motion.div>

                    {/* Info Side */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Visit Our Office</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Our primary office is strategically located in the heart of Bengaluru, making it easily accessible for our clients across the city.
                            </p>

                            <div className="space-y-4">
                                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm border-l-4 border-l-primary">
                                    <h4 className="font-bold text-slate-900 mb-1">Office Location</h4>
                                    <p className="text-sm text-slate-600">No. 48, 1st Floor, 20th Cross, CMH Road, Bengaluru 560008</p>
                                </div>

                                <a
                                    href="https://maps.google.com/?q=CMH+Road+Indiranagar+Bengaluru"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                                >
                                    Get Navigation <ExternalLink className="h-4 w-4" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
