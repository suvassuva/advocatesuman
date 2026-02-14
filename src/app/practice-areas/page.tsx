import { Metadata } from "next";
import { PracticeAreas } from "@/components/landing/PracticeAreas";
import { ServicesVisit } from "@/components/landing/ServicesVisit";
import { PracticeHero } from "@/components/practice-areas/PracticeHero";

export const metadata: Metadata = {
    title: "Practice Areas | Comprehensive Legal Services in Bengaluru",
    description: "Explore our wide range of legal services in Bengaluru, including Criminal Defense, Family Law, Civil Litigation, Property Disputes, and Corporate Law.",
};

export default function PracticeAreasPage() {
    return (
        <main>
            <PracticeHero />
            <PracticeAreas />
            <ServicesVisit />
        </main>
    );
}
