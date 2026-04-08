import type { Metadata } from "next";

export const siteUrl = "https://digital-orbit.in";
export const siteName = "Digital Orbit";

export const defaultKeywords = [
  "website developer in Hyderabad",
  "web design Hyderabad",
  "app development Hyderabad",
  "affordable website India",
  "website development Hyderabad",
  "website development Ghatkesar",
  "website development Telangana",
  "startup website development India",
  "mobile app development Hyderabad",
  "business website development India"
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
  serviceType: "Website Development Company",
  url: siteUrl,
  image: siteUrl,
  description:
    "Digital Orbit is a website development company serving Hyderabad, Ghatkesar, Telangana, and India with affordable websites, MVPs, and app development.",
  email: "rbomma074@gmail.com",
  telephone: "+91-6304679550",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ghatkesar",
    addressRegion: "Telangana",
    addressCountry: "IN"
  },
  areaServed: ["Hyderabad", "Ghatkesar", "Telangana", "India"],
  priceRange: "Rs. 1999 - Rs. 9999+",
  sameAs: [
    "https://www.instagram.com/digitall_orbit?igsh=cnNndzUzMjVvMWJz",
    "https://www.linkedin.com/company/digitalorbit2k26"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "rbomma074@gmail.com",
    telephone: "+91-6304679550",
    areaServed: ["Hyderabad", "Ghatkesar", "Telangana", "India"],
    availableLanguage: ["English"]
  },
  keywords: defaultKeywords.join(", ")
};
