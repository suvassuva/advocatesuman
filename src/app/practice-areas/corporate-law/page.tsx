import { Metadata } from "next";
import { PracticeAreaDetail } from "@/components/landing/PracticeAreaDetail";

export const metadata: Metadata = {
    title: "Corporate Law Consultant Bengaluru | Business Legal Support",
    description: "Comprehensive legal advisory for startups and corporations in Bengaluru. Specializing in contracts, compliance, labor laws, and commercial disputes.",
};

export default function CorporateLawPage() {
    return (
        <main className="pt-20">
            <PracticeAreaDetail
                title="Corporate Law"
                iconName="Scale"
                imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                description="Specialized legal advisory for startups, SMEs, and corporate entities."
                detailedContent="Navigating the legal landscape of business requires foresight and specialized knowledge. Adv. Suman Suresh offers a range of corporate legal services designed to support businesses at every stage—from incorporation to complex contract management. We focus on ensuring compliance with Indian corporate laws while providing strategic advice to mitigate risks and protect commercial interests."
                keyPoints={[
                    "Entity Incorporation & MSME Registration",
                    "Drafting & Vetting of Commercial Contracts",
                    "Employment & HR Legal Compliance",
                    "Intellectual Property (Trademark) Registration",
                    "Corporate Litigation & Arbitration"
                ]}
                process={[
                    "Initial assessment of business legal requirements.",
                    "Drafting of customized legal documents and agreements.",
                    "Guidance on statutory compliance and filings.",
                    "Representation in commercial disputes and tribunals.",
                    "Ongoing legal support for business expansion."
                ]}
            />
        </main>
    );
}
