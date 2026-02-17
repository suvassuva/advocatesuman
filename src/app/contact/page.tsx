import { Metadata } from "next";
import { ContactForm } from "@/components/landing/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactCards } from "@/components/contact/ContactCards";
import { MapSection } from "@/components/contact/MapSection";

export const metadata: Metadata = {
    title: "Contact Advocate Suman - Bangalore",
    description: "consultation and strategic guidance. Schedule your appointment",
};

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactCards />
            <ContactForm />
            <MapSection />
        </main>
    );
}
