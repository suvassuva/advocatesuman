import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" });

export const metadata: Metadata = {
    title: {
        default: "Adv. Suman Suresh | Professional Advocate & Legal Consultant in Bengaluru",
        template: "%s | Suman & Co. Legal Services"
    },
    description: "Expert legal services in Bengaluru. Specializing in Criminal Defense, Family Law, Civil Litigation, and Property Disputes. Compassionate, result-oriented advocacy by Adv. Suman Suresh.",
    keywords: ["Advocate in Bengaluru", "Best Lawyer in Bangalore", "Criminal Defense Lawyer Bengaluru", "Family Law Advocate Bangalore", "Divorce Lawyer Bengaluru", "Property Dispute Lawyer", "Civil Litigation Advocate", "Legal Consultant Bengaluru", "Suman Suresh Advocate"],
    authors: [{ name: "Adv. Suman Suresh" }],
    creator: "Suman & Co. Legal Services",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://sumanandco.com", // Conceptual URL
        siteName: "Suman & Co. Legal Services",
        title: "Adv. Suman Suresh | Legal Excellence in Bengaluru",
        description: "Professional legal representation and consultancy services for civil, criminal, and family matters in Bengaluru.",
        images: [
            {
                url: "/images/advocate.png",
                width: 1200,
                height: 630,
                alt: "Adv. Suman Suresh - Legal Consultant",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Adv. Suman Suresh | Legal Excellence in Bengaluru",
        description: "Professional legal representation and consultancy services in Bengaluru.",
        images: ["/images/advocate.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

// ... imports
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { FloatingContact } from "@/components/common/FloatingContact";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { JsonLd } from "@/components/common/JsonLd";
import { CONTACT_DETAILS } from "@/lib/constants";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const legalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Adv. Suman Suresh | Suman & Co. Legal Services",
        "image": "https://sumansureshadvocate.com/images/advocate.png",
        "@id": "https://sumansureshadvocate.com",
        "url": "https://sumansureshadvocate.com",
        "telephone": CONTACT_DETAILS.PHONE_PRIMARY,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "No. 48, 1st Floor, 20th Cross, Chinmaya Mission Hospital Rd",
            "addressLocality": "Bengaluru",
            "postalCode": "560008",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.9784, // Approximate for Indiranagar/CMH Rd
            "longitude": 77.6408
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "10:00",
            "closes": "20:00"
        },
        "priceRange": "$$",
        "serviceType": [
            "Criminal Defense",
            "Family Law",
            "Civil Litigation",
            "Property Dispute Resolution",
            "Corporate Legal Support"
        ]
    };

    return (
        <html lang="en">
            <body className={cn(inter.variable, playfair.variable, "font-sans antialiased")}>
                <JsonLd data={legalServiceSchema} />
                <Navbar />
                {children}
                <Footer />
                <FloatingContact />
                <FloatingWhatsApp />
            </body>
        </html>
    );
}
