import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sumansureshadvocate.com'; // Conceptual production URL

    const routes = [
        '',
        '/about',
        '/practice-areas',
        '/contact',
        '/practice-areas/criminal-defense',
        '/practice-areas/family-law',
        '/practice-areas/civil-litigation',
        '/practice-areas/property-disputes',
        '/practice-areas/corporate-law',
        '/practice-areas/legal-documentation',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
