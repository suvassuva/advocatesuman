"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

interface PostHeaderProps {
    post: BlogPost;
}

export function PostHeader({ post }: PostHeaderProps) {
    return (
        <section className="relative pt-32 pb-16 bg-slate-900 border-b border-slate-800 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[120px]" />
                <div className="absolute top-1/2 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-8 hover:opacity-80 transition-opacity"
                    >
                        <ArrowLeft size={16} />
                        Back to Insights
                    </Link>

                    <div className="mb-6">
                        <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 font-medium border-t border-slate-800 pt-8">
                        <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-primary/20 bg-slate-800">
                                <Image
                                    src="/images/advocate.png"
                                    alt={post.author}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-primary" />
                            {format(new Date(post.date), "MMMM dd, yyyy")}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-primary" />
                            5 min read
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
