import { Metadata } from "next";
import { PracticeAreaDetail } from "@/components/landing/PracticeAreaDetail";

export const metadata: Metadata = {
    title: "Criminal Defense Lawyer Bengaluru | Bail & Trial Excellence",
    description: "Strategic criminal defense for bail applications, NDPS cases, and trials in Bengaluru. Protecting your constitutional rights with rigorous advocacy.",
};

export default function CriminalDefensePage() {
    return (
        <main className="pt-20">
            <PracticeAreaDetail
                title="Criminal Defense"
                iconName="ShieldAlert"
                imageUrl="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&q=80&w=1200"
                description="Robust legal defense to protect your liberty and ensure a fair trial."
                detailedContent="When facing criminal charges, the stakes are exceptionally high. Adv. Suman Suresh offers a robust defense strategy for various criminal matters under the BNS (formerly IPC) and other special laws. Our practice focuses on protecting the constitutional rights of the accused, providing meticulous representation from the stage of FIR to the final trial and appeals. We specialize in handling complex bail matters, white-collar crimes, and specialized criminal litigation."
                keyPoints={[
                    "Anticipatory & Regular Bail Petitions",
                    "Defense in Private Complaints & FIR Quashing",
                    "Trial Advocacy & Cross-Examination",
                    "NDPS, POCSO & Special Acts Representation",
                    "Criminal Appeals & Revisions"
                ]}
                process={[
                    "Confidential case review and legal strategy formulation.",
                    "Active assistance during police investigation and interrogation.",
                    "Filing of bail applications and stay petitions.",
                    "Rigorous defense during trial and evidence presentation.",
                    "Handling of appeals in higher courts if necessary."
                ]}
            />
        </main>
    );
}
