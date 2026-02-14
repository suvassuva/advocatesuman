import { Metadata } from "next";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { PracticeAreas } from "@/components/landing/PracticeAreas";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { ServicesVisit } from "@/components/landing/ServicesVisit";
import { ContactForm } from "@/components/landing/ContactForm";
import { StatsSection } from "@/components/landing/StatsSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TrustBanner } from "@/components/landing/TrustBanner";
import { GoogleReviews } from "@/components/landing/GoogleReviews";

export const metadata: Metadata = {
    title: "Adv. Suman Suresh | Professional Advocate & Legal Consultant in Bengaluru",
    description: "Expert legal representation in Bengaluru. Specializing in Criminal Defense, Family Law, Civil Litigation, and Property Disputes. Compassionate, result-oriented advocacy by Adv. Suman Suresh.",
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <StatsSection />
            <TrustBanner />
            <About />
            <PracticeAreas />
            <ProcessSection />
            <WhyChooseUs />
            <ServicesVisit />
            <GoogleReviews />
            <ContactForm />
        </main>
    );
}
