"use client";

import { PremiumSlider } from "@/components/common/PremiumSlider";
import { CTAButton } from "@/components/common/CTAButton";
import { Home, Briefcase } from "lucide-react";

export function ServicesVisit() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="rounded-3xl bg-white p-8 md:p-12 shadow-xl border border-primary/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

                    <div className="grid gap-8 md:grid-cols-2 md:items-center relative z-10">
                        <div>
                            <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl text-foreground">
                                Flexible Consultation Options
                            </h2>
                            <p className="mb-8 text-lg text-muted-foreground">
                                We understand that legal matters can be urgent and sensitive.
                                Choose a consultation mode that suits your comfort and schedule.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 rounded-xl border bg-slate-50 p-6 hover:border-primary/50 transition-colors">
                                    <Briefcase className="mb-3 h-8 w-8 text-primary" />
                                    <h3 className="font-bold text-lg mb-1">Office Visit</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Visit our chambers for a comprehensive case review with our team.
                                    </p>
                                    <CTAButton variant="outline" size="sm" className="w-full" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Schedule Visit</CTAButton>
                                </div>

                                <div className="flex-1 rounded-xl border bg-slate-50 p-6 hover:border-primary/50 transition-colors">
                                    <Home className="mb-3 h-8 w-8 text-primary" />
                                    <h3 className="font-bold text-lg mb-1">Home Consultation</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Senior citizens and differently-abled clients can request a home visit.
                                    </p>
                                    <CTAButton variant="outline" size="sm" className="w-full" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Request Home Visit</CTAButton>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block h-full min-h-[400px] rounded-2xl overflow-hidden relative shadow-2xl">
                            <PremiumSlider
                                images={[
                                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200",
                                    "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=1200",
                                    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200"
                                ]}
                                showDots={false}
                                interval={6500}
                                overlayClassName="bg-slate-900/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
