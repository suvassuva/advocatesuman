import { Metadata } from "next";
import { PracticeAreas } from "@/components/landing/PracticeAreas";
import { ServicesVisit } from "@/components/landing/ServicesVisit";
import { PracticeHero } from "@/components/practice-areas/PracticeHero";

export const metadata: Metadata = {
    title: "Advocate Suman - Practice Areas in Bangalore",
    description: "Explore the practice areas of Advocate Suman in Bangalore covering civil, criminal, corporate and family law matters. Schedule a consultation today.",
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
