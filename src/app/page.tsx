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
    title: "Advocate Suman - Highly Experienced Lawyers Bangalore",
    description: "providing trusted legal guidance and strong representation. Book",
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
