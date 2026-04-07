import type { Metadata } from "next";

export const siteUrl = "https://digital-orbit.in";
export const siteName = "Digital Orbit";

export const defaultKeywords = [
  "website development",
  "app development",
  "affordable websites India",
  "website development India",
  "startup website development",
  "mvp development",
  "mobile app development India",
  "digital product development",
  "business website design",
  "local business website India"
];

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: MetadataInput): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description
    }
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Digital Orbit",
  url: siteUrl,
  image: `${siteUrl}/icon.png`,
  description:
    "Digital Orbit builds startup websites, MVPs, mobile apps, and affordable business websites in India.",
  email: "rbomma074@gmail.com",
  telephone: "+91-6304679550",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN"
  },
  areaServed: "India",
  priceRange: "₹₹",
  sameAs: [
    "https://www.instagram.com/digitall_orbit?igsh=cnNndzUzMjVvMWJz",
    "https://www.linkedin.com/company/digitalorbit2k26"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "rbomma074@gmail.com",
    telephone: "+91-6304679550",
    areaServed: "IN",
    availableLanguage: ["English"]
  },
  keywords: defaultKeywords.join(", ")
};
