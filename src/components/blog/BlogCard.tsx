"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
        >
            <Link href={`/blog/${post.slug}`} className="relative block h-40 sm:h-52 overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                    <span className="bg-primary/95 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {post.category}
                    </span>
                </div>
            </Link>

            <div className="flex-1 p-3.5 sm:p-5 flex flex-col">
                <div className="flex items-center gap-3 text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-2">
                    <span className="flex items-center gap-1">
                        <Calendar size={11} className="text-primary" />
                        {format(new Date(post.date), "MMM dd, yyyy")}
                    </span>
                    <span className="flex items-center gap-1">
                        <User size={11} className="text-primary" />
                        {post.author}
                    </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors line-clamp-2 leading-snug min-h-[38px] sm:min-h-[44px] text-balance">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2 min-h-[32px] sm:min-h-[36px] text-pretty">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary font-bold text-xs flex items-center gap-1.5 group/btn"
                    >
                        Read Article
                        <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
