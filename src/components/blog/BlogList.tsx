import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "./BlogCard";

export function BlogList() {
    const posts = getAllPosts();

    if (posts.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-slate-500 italic">No blog posts found. Check back soon!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
            ))}
        </div>
    );
}
