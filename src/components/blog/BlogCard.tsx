"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ArrowUpRight, Calendar, User, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
        >
            <Link href={`/blog/${post.slug}`} className="relative block h-64 overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {post.category}
                    </span>
                </div>
            </Link>

            <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center gap-4 text-[10px] text-slate-400 font-semibold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-primary" />
                        {format(new Date(post.date), "MMMM dd, yyyy")}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <User size={12} className="text-primary" />
                        {post.author}
                    </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary font-bold text-sm flex items-center gap-2 group/btn"
                    >
                        Read Full Article
                        <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
