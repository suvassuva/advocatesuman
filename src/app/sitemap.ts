import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://advocatesuman.in';

    const routes = [
        '',
        '/about',
        '/practice-areas',
        '/contact',
        '/criminal-lawyers-in-bangalore',
        '/divorce-lawyers-in-bangalore',
        '/civil-lawyers-in-bangalore',
        '/property-dispute-lawyers-in-bangalore',
        '/corporate-law-firms-in-bangalore',
        '/legal-consultants-in-bangalore',
        '/blog',
        '/blog/property-title-verification',
        '/blog/understanding-civil-litigation',
        '/blog/mutual-consent-divorce',
        
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
