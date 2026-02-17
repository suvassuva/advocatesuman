import { Metadata } from "next";
import { PracticeAreaDetail } from "@/components/landing/PracticeAreaDetail";

export const metadata: Metadata = {
    title: "Property and Dispute Experts - Civil Lawyers in Bangalore",
    description: "lawyer for property, recovery & dispute cases. Book your legal",
};

export default function PropertyDisputesPage() {
    return (
        <main className="pt-20">
            <PracticeAreaDetail
                title="Lawyer"
                iconName="Building2"
                imageUrl="/images/1.jpg"
                description="Expert legal advisory for real estate conflicts and title verifications."
                detailedContent="Property law in India is complex, involving multiple statutes and local regulations. Adv. Suman Suresh specializes in resolving property conflicts, ranging from title disputes to illegal encroachments. We provide legal opinions on property titles, assist in registration processes, and represent clients in suits for partition, possession, and declaration of ownership."
                keyPoints={[
                    "Suit for Partition & Possession",
                    "Title Verification & Legal Opinions",
                    "Resolution of Encroachments & Trespass",
                    "RERA Complaints & Builder Disputes",
                    "Succession & Inheritance Claims"
                ]}
                process={[
                    "Comprehensive scrutiny of property documents/links.",
                    "Search at the Sub-Registrar's office for encumbrances.",
                    "Preparation and service of legal notices.",
                    "Filing of civil suits and seeking interim stay orders.",
                    "Expertise in trial and argument on property laws."
                ]}
            />
        </main>
    );
}
