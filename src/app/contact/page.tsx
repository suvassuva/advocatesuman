import { Metadata } from "next";
import { ContactForm } from "@/components/landing/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactCards } from "@/components/contact/ContactCards";
import { MapSection } from "@/components/contact/MapSection";

export const metadata: Metadata = {
    title: "Contact Us | Schedule a Consultation in Bengaluru",
    description: "Get in touch with Adv. Suman Suresh for professional legal advice and representation in Bengaluru. Office and home consultation options available.",
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
