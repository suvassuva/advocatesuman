import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug, getAllPosts } from "@/lib/blog";
import { PostHeader } from "@/components/blog/PostHeader";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { CONTACT_DETAILS } from "@/lib/constants";

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

            <section className="py-8 sm:py-16">
                <div className="container mx-auto px-3.5 sm:px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">

                        {/* Main Content */}
                        <article className="lg:col-span-8">
                            <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-10 shadow-lg border border-slate-100">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="prose prose-sm sm:prose-base md:prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-balance prose-p:text-pretty prose-p:leading-relaxed prose-li:text-pretty prose-a:text-primary hover:prose-a:opacity-80 transition-all prose-img:rounded-xl">
                                <ReactMarkdown>{post.content}</ReactMarkdown>
                            </div>

                            {/* Author Box */}
                            <div className="mt-10 sm:mt-14 p-4 sm:p-7 bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0">
                                    <Image src="/images/advocate.png" alt="Adv. Suman Suresh" fill className="object-cover" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 mb-1">Adv. Suman Suresh</h4>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-pretty">
                                        Adv. Suman Suresh is a dedicated legal professional in Bengaluru with expertise in handling complex civil, criminal, and family law matters.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-6 sm:space-y-8">
                            {/* Consultation Card */}
                            <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-white relative overflow-hidden group">
                                <h4 className="text-lg sm:text-xl font-bold font-heading mb-2 relative z-10">Need Legal Help?</h4>
                                <p className="text-slate-400 text-xs sm:text-sm mb-5 relative z-10 leading-relaxed">
                                    Schedule a confidential consultation with Adv. Suman Suresh today and get professional guidance.
                                </p>
                                <div className="space-y-3 relative z-10">
                                    <Link
                                        href="/contact"
                                        className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs sm:text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 shadow-md active:scale-95"
                                    >
                                        <Calendar className="mr-2 h-4 w-4" />
                                        Book Consultation
                                    </Link>
                                    <a
                                        href={`tel:${CONTACT_DETAILS.PHONE_PRIMARY_RAW}`}
                                        className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-slate-700 bg-white/5 px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-95"
                                    >
                                        <Phone className="mr-2 h-4 w-4" />
                                        Call Directly
                                    </a>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="h-5 w-1 bg-primary rounded-full" />
                                    Recent Insights
                                </h4>
                                <div className="space-y-4">
                                    {recentPosts.map((recent) => (
                                        <Link key={recent.slug} href={`/blog/${recent.slug}`} className="group flex items-start gap-3">
                                            <div className="relative h-14 w-16 rounded-xl overflow-hidden shrink-0">
                                                <Image src={recent.coverImage} alt={recent.title} fill className="object-cover transition-transform group-hover:scale-105" />
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                                    {recent.title}
                                                </h5>
                                                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1 block">
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
