import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug, getAllPosts } from "@/lib/blog";
import { PostHeader } from "@/components/blog/PostHeader";
import { CTAButton } from "@/components/common/CTAButton";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

interface PostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Adv. Suman Suresh Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: PostPageProps) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const recentPosts = getAllPosts().filter(p => p.slug !== post.slug).slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            <PostHeader post={post} />

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">

                        {/* Main Content */}
                        <article className="lg:col-span-8">
                            <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl border border-slate-100">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:opacity-80 transition-all prose-img:rounded-2xl">
                                <ReactMarkdown>{post.content}</ReactMarkdown>
                            </div>

                            {/* Author Box */}
                            <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center gap-8">
                                <div className="relative h-24 w-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg shrink-0">
                                    <Image src="/images/advocate.png" alt="Adv. Suman Suresh" fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-heading text-slate-900 mb-2">Adv. Suman Suresh</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Adv. Suman Suresh is a dedicated legal professional in Bengaluru with expertise in handling complex civil, criminal, and family law matters. He is committed to providing justice and strategic legal solutions to his clients.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            {/* Consultation Card */}
                            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
                                <h4 className="text-2xl font-bold font-heading mb-4 relative z-10">Need Legal Help?</h4>
                                <p className="text-slate-400 text-sm mb-8 relative z-10">
                                    Schedule a confidential consultation with Adv. Suman Suresh today and get professional guidance for your legal matter.
                                </p>
                                <div className="space-y-4 relative z-10">
                                    <Link
                                        href="/contact"
                                        className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    >
                                        <Calendar className="mr-2 h-4 w-4" />
                                        Book Consultation
                                    </Link>
                                    <a
                                        href="tel:+919876543210"
                                        className="inline-flex h-10 w-full items-center justify-center rounded-md border border-slate-700 bg-transparent px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    >
                                        <Phone className="mr-2 h-4 w-4" />
                                        Call Now
                                    </a>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div>
                                <h4 className="text-xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="h-8 w-1 bg-primary rounded-full" />
                                    Recent Insights
                                </h4>
                                <div className="space-y-6">
                                    {recentPosts.map((recent) => (
                                        <Link key={recent.slug} href={`/blog/${recent.slug}`} className="group flex items-start gap-4">
                                            <div className="relative h-20 w-24 rounded-xl overflow-hidden shrink-0">
                                                <Image src={recent.coverImage} alt={recent.title} fill className="object-cover transition-transform group-hover:scale-110" />
                                            </div>
                                            <div>
                                                <h5 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                                    {recent.title}
                                                </h5>
                                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2 block">
                                                    {format(new Date(recent.date), "MMM dd, yyyy")}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>
        </main>
    );
}
