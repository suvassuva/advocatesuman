import { Metadata } from "next";
import { PracticeAreaDetail } from "@/components/landing/PracticeAreaDetail";

export const metadata: Metadata = {
    title: "Corporate Lawyer in Bangalore",
    description: "Legal advisory for startups, SMEs, and companies in Bangalore, specializing in registration, contracts, and compliance.",
};

export default function CorporateLawPage() {
    return (
        <main className="pt-20">
            <PracticeAreaDetail
                title="Corporate Law"
                iconName="Building2"
                imageUrl="/images/4.jpg"
                description="Comprehensive legal services for businesses, including company formation, contract drafting, compliance, and corporate governance. We help your business navigate the legal complexities of the corporate world."
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
