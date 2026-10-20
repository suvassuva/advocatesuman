"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

interface PostHeaderProps {
    post: BlogPost;
}

export function PostHeader({ post }: PostHeaderProps) {
    return (
        <section className="relative pt-20 sm:pt-28 pb-8 sm:pb-14 bg-slate-900 border-b border-slate-800 overflow-hidden">
            <div className="container relative z-10 mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 hover:opacity-80 transition-opacity"
                    >
                        <ArrowLeft size={14} />
                        Back to Insights
                    </Link>

                    <div className="mb-3">
                        <span className="bg-amber-400/15 text-amber-400 border border-amber-400/30 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-xl sm:text-3xl md:text-5xl font-bold font-heading text-white mb-4 leading-tight tracking-tight text-balance">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium border-t border-slate-800/80 pt-4">
                        <div className="flex items-center gap-2">
                            <div className="relative h-7 w-7 rounded-full overflow-hidden border border-primary/20 bg-slate-800 shrink-0">
                                <Image
                                    src="/images/advocate.png"
                                    alt={post.author}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-slate-200">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-primary" />
                            {format(new Date(post.date), "MMM dd, yyyy")}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock size={13} className="text-primary" />
                            5 min read
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
