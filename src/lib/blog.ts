import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    coverImage: string;
    content: string;
    author: string;
}

export function getBlogSlugs(): string[] {
    if (!fs.existsSync(BLOG_CONTENT_PATH)) {
        return [];
    }
    return fs.readdirSync(BLOG_CONTENT_PATH).filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
    if (!slug) return null;
    const realSlug = slug.replace(/\.mdx?$/, '');
    const mdxPath = path.join(BLOG_CONTENT_PATH, `${realSlug}.mdx`);
    const mdPath = path.join(BLOG_CONTENT_PATH, `${realSlug}.md`);

    let fullPath = '';
    if (fs.existsSync(mdxPath)) {
        fullPath = mdxPath;
    } else if (fs.existsSync(mdPath)) {
        fullPath = mdPath;
    } else {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        category: data.category || 'General',
        coverImage: data.coverImage || '/images/3.jpg',
        content,
        author: data.author || 'Adv. Suman Suresh',
    };
}

export function getAllPosts(): BlogPost[] {
    const slugs = getBlogSlugs();
    const posts = slugs
        .map((slug) => getBlogPostBySlug(slug))
        .filter((post): post is BlogPost => post !== null)
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getLatestPosts(limit: number = 3): BlogPost[] {
    return getAllPosts().slice(0, limit);
}
