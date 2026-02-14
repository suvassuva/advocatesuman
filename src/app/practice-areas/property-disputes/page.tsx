import { Metadata } from "next";
import { PracticeAreaDetail } from "@/components/landing/PracticeAreaDetail";

export const metadata: Metadata = {
    title: "Property & Real Estate Lawyer Bengaluru | Title & Disputes",
    description: "Expert resolution for property disputes, land acquisition, title verification, and real estate litigation in Bengaluru. Protecting your assets and rights.",
};

export default function PropertyDisputesPage() {
    return (
        <main className="pt-20">
            <PracticeAreaDetail
                title="Property Disputes"
                iconName="Building2"
                imageUrl="https://images.unsplash.com/photo-1460317442991-0ec239397148?auto=format&fit=crop&q=80&w=1200"
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
