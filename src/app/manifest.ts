import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Advocate Suman & Co. Legal Services",
        short_name: "Suman & Co.",
        description: "Professional Advocate & Legal Consultant in Bengaluru. Expert legal counsel and representation.",
        start_url: "/",
        display: "standalone",
        background_color: "#020617",
        theme_color: "#0f172a",
        orientation: "portrait",
        icons: [
            {
                src: "/icon.svg",
                sizes: "any",
                type: "image/svg+xml",
                purpose: "any",
            },
            {
                src: "/icon.svg",
                sizes: "any",
                type: "image/svg+xml",
                purpose: "maskable",
            },
        ],
    };
}
