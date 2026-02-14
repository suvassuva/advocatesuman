import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { ParallaxDivider } from "@/components/common/ParallaxDivider";
import { About } from "@/components/landing/About";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { ProfessionalJourney } from "@/components/about/ProfessionalJourney";
import { PracticeAreasExpertise } from "@/components/about/PracticeAreasExpertise";
import { QualificationsAndMemberships } from "@/components/about/QualificationsAndMemberships";
import { PhilosophyAndApproach } from "@/components/about/PhilosophyAndApproach";
import { NotableAchievements } from "@/components/about/NotableAchievements";
import { ReadyToDiscuss } from "@/components/about/ReadyToDiscuss";

export const metadata: Metadata = {
    title: "About Adv. Suman Suresh | Legal Expert in Bengaluru",
    description: "Learn more about Adv. Suman Suresh, a dedicated legal professional in Bengaluru with expertise in handling complex civil, criminal, and family law matters.",
};

export default function AboutPage() {
    return (
        <main className="bg-white">
            <AboutHero />
            <About />
            <ParallaxDivider imageUrl="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" />
            <ProfessionalJourney />
            <PracticeAreasExpertise />
            <QualificationsAndMemberships />
            <ParallaxDivider imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" />
            <PhilosophyAndApproach />
            <NotableAchievements />
            <WhyChooseUs />
            <ReadyToDiscuss />
        </main>
    );
}
