import { Metadata } from "next";
import { PracticeAreaDetail } from "@/components/landing/PracticeAreaDetail";

export const metadata: Metadata = {
    title: "Legal Documentation & Drafting Bengaluru | Contracts & Wills",
    description: "Professional drafting services for sale deeds, rent agreements, wills, and commercial contracts in Bengaluru. Ensuring legal precision and protection.",
};

export default function LegalDocumentationPage() {
    return (
        <main className="pt-20">
            <PracticeAreaDetail
                title="Legal Documentation"
                iconName="FileText"
                imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
                description="Meticulous drafting and vetting of various legal instruments and notices."
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
