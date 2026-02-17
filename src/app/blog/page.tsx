import { Metadata } from "next";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
    title: "Blog & Legal Insights | Advocate Suman Suresh",
    description: "Stay informed with the latest legal updates, expert opinions, and practical advice from Adv. Suman Suresh, covering Civil, Criminal, and Family Law in Bengaluru.",
};

export default function BlogListingPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <BlogHeader
                title="Legal Insights & Perspectives"
                description="Expert analysis and practical guidance on the most relevant legal matters affecting individuals and businesses in Bengaluru."
            />

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <BlogList />
                </div>
            </section>
        </main>
    );
}
