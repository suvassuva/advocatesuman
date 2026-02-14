import { Metadata } from "next";
import { PracticeAreaDetail } from "@/components/landing/PracticeAreaDetail";

export const metadata: Metadata = {
    title: "Family Law & Divorce Advocate Bengaluru | Compassionate Care",
    description: "Sensitive legal solutions for divorce, child custody, alimony, and matrimonial disputes in Bengaluru. Expert guidance for family legal matters.",
};

export default function FamilyLawPage() {
    return (
        <main className="pt-20">
            <PracticeAreaDetail
                title="Family Law"
                iconName="Users"
                imageUrl="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200"
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
