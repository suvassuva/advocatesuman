import { Metadata } from "next";
import { PracticeAreaDetail } from "@/components/landing/PracticeAreaDetail";

export const metadata: Metadata = {
    title: "Civil Lawyers in Bangalore",
    description: "Expert legal representation for civil disputes, including contracts, property, and personal injury matters in Bangalore.",
};

export default function CivilLitigationPage() {
    return (
        <main className="pt-20">
            <PracticeAreaDetail
                title="Civil Litigation"
                iconName="Gavel"
                imageUrl="/images/3.jpg"
                description="Expert legal representation for disputes involving contracts, property, personal injury, and other civil matters. We are dedicated to protecting your interests and achieving the best possible outcome."
                detailedContent="Civil litigation involves legal disputes between two or more parties that seek money damages or specific performance rather than criminal sanctions. Adv. Suman Suresh provides comprehensive representation in diverse civil matters, ensuring your rights are protected through rigorous analysis and ethical practice. Whether it's a breach of contract or an injunction suit, our approach is focused on delivering results through thorough preparation and persuasive arguments in court."
                keyPoints={[
                    "Breach of Contract & Specific Performance",
                    "Money Recovery Suits & Summary Suits",
                    "Injunctions & Declaration Suits",
                    "Consumer Protection Matters",
                    "Rent Control & Eviction Proceedings"
                ]}
                process={[
                    "In-depth case analysis and evidence gathering.",
                    "Issuing legal notices and pre-litigation mediation.",
                    "Drafting comprehensive pleadings and filings.",
                    "Strategic representation during trial and cross-examination.",
                    "Execution of decrees and post-judgment support."
                ]}
            />
        </main>
    );
}
