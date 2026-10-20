"use client";

import { PremiumSlider } from "@/components/common/PremiumSlider";
import { CTAButton } from "@/components/common/CTAButton";
import { Home, Briefcase } from "lucide-react";

export function ServicesVisit() {
    return (
        <section className="py-10 sm:py-16 md:py-20 bg-primary/5 overflow-hidden">
            <div className="container mx-auto px-3.5 sm:px-6 max-w-6xl">
                <div className="rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-8 md:p-12 shadow-lg border border-primary/10 relative overflow-hidden">
                    <div className="grid gap-6 md:grid-cols-2 md:items-center relative z-10">
                        <div>
                            <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary">
                                Personalized Service
                            </div>
                            <h2 className="mb-2 sm:mb-3 font-heading text-xl sm:text-3xl md:text-4xl font-bold text-foreground">
                                Flexible Consultation Options
                            </h2>
                            <p className="mb-5 sm:mb-8 text-xs sm:text-base text-muted-foreground leading-relaxed">
                                We understand that legal matters can be urgent and sensitive.
                                Choose a consultation mode that suits your comfort and schedule.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <div className="flex-1 rounded-xl sm:rounded-2xl border bg-slate-50 p-4 hover:border-primary/50 transition-colors flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <Briefcase className="h-5 w-5 text-primary shrink-0" />
                                            <h3 className="font-bold text-sm sm:text-base">Office Visit</h3>
                                        </div>
                                        <p className="text-[11px] sm:text-xs text-muted-foreground mb-4 leading-relaxed text-pretty">
                                            Visit our chambers for a comprehensive case review with our legal team.
                                        </p>
                                    </div>
                                    <CTAButton
                                        variant="outline"
                                        size="sm"
                                        className="w-full text-xs py-2 h-auto"
                                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Schedule Visit
                                    </CTAButton>
                                </div>

                                <div className="flex-1 rounded-xl sm:rounded-2xl border bg-slate-50 p-4 hover:border-primary/50 transition-colors flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <Home className="h-5 w-5 text-primary shrink-0" />
                                            <h3 className="font-bold text-sm sm:text-base">Home Consultation</h3>
                                        </div>
                                        <p className="text-[11px] sm:text-xs text-muted-foreground mb-4 leading-relaxed text-pretty">
                                            Senior citizens and differently-abled clients can request a home legal visit.
                                        </p>
                                    </div>
                                    <CTAButton
                                        variant="outline"
                                        size="sm"
                                        className="w-full text-xs py-2 h-auto"
                                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Request Home Visit
                                    </CTAButton>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block h-full min-h-[350px] rounded-2xl overflow-hidden relative shadow-lg">
                            <PremiumSlider
                                images={[
                                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200",
                                    "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=1200",
                                    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200"
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
