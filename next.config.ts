import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/practice-areas/civil-litigation',
        destination: '/civil-lawyers-in-bangalore',
        permanent: true,
      },
      {
        source: '/practice-areas/criminal-defense',
        destination: '/criminal-lawyers-in-bangalore',
        permanent: true,
      },
      {
        source: '/practice-areas/family-law',
        destination: '/divorce-lawyers-in-bangalore',
        permanent: true,
      },
      {
        source: '/practice-areas/property-disputes',
        destination: '/property-dispute-lawyers-in-bangalore',
        permanent: true,
      },
      {
        source: '/practice-areas/corporate-law',
        destination: '/corporate-law-firms-in-bangalore',
        permanent: true,
      },
      {
        source: '/practice-areas/legal-documentation',
        destination: '/legal-consultants-in-bangalore',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
