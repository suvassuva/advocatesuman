import { Metadata } from "next";
import { PracticeAreaDetail } from "@/components/landing/PracticeAreaDetail";

export const metadata: Metadata = {
    title: "Best Family Law Advocate - Divorce Lawyers in Bangalore",
    description: "services for mutual & contested cases. Consult trusted divorce",
};

export default function FamilyLawPage() {
    return (
        <main className="pt-20">
            <PracticeAreaDetail
                title="Divorce Lawyer"
                iconName="Users"
                imageUrl="/images/5.jpg"
                description="Compassionate resolution for sensitive family and matrimonial matters."
                detailedContent="Family disputes require not just legal expertise, but also a balanced and sensitive approach. Adv. Suman Suresh provides comprehensive legal solutions for matrimonial issues, including divorce, child custody, and maintenance. We strive to achieve resolutions that protect the interests of our clients and their children, whether through strategic litigation or mediation and settlement."
                keyPoints={[
                    "Mutual Consent & Contested Divorce",
                    "Child Dependency & Custody Disputes",
                    "Maintenance for Spouses, Children, and Parents",
                    "Domestic Violence & Dowry Prohibition Cases",
                    "Restitution of Conjugal Rights"
                ]}
                process={[
                    "Sensitive consultation to understand family dynamics.",
                    "Attempting mediation and counseling where possible.",
                    "Drafting and filing of petitions in Family Courts.",
                    "Dedicated representation during hearings and evidence.",
                    "Ensuring compliance with court orders and settlements."
                ]}
            />
        </main>
    );
}
