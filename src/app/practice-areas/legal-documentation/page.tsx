import { Metadata } from "next";
import { PracticeAreaDetail } from "@/components/landing/PracticeAreaDetail";

export const metadata: Metadata = {
    title: "Bangalore",
    description: "services in Bangalore including agreements, contracts and legal",
};

export default function LegalDocumentationPage() {
    return (
        <main className="pt-20">
            <PracticeAreaDetail
                title="Legal Documentation" // Updated title
                iconName="FileText" // Kept original iconName as it was not explicitly removed
                imageUrl="/images/6.jpg" // Updated image path and prop name
                description="Meticulous drafting and review of legal documents, including wills, power of attorney, trust deeds, rental agreements, and partnership deeds, ensuring full legal compliance and protection." // Updated description
                detailedContent="Precision in legal documentation is the first line of defense against future litigation. Adv. Suman Suresh specializes in the meticulous drafting and vetting of various legal instruments, including wills, gift deeds, powers of attorney, and service agreements. We ensure that every document is legally sound, reflects the client's intent accurately, and complies with the latest statutory requirements."
                keyPoints={[
                    "Wills, Trusts & Probate Petitions",
                    "Gift Deeds & Release Deeds",
                    "Power of Attorney (General & Special)",
                    "Rental & Lease Agreements",
                    "Issuance of Legal Notices & Replies"
                ]}
                process={[
                    "Detailed discussion to capture client requirements.",
                    "Research on specific legal provisions and precedents.",
                    "Preparation of the first draft for client review.",
                    "Refining the draft based on feedback.",
                    "Assistance in execution and registration where required."
                ]}
            />
        </main>
    );
}
