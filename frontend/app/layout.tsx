import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { buildMetadata, localBusinessJsonLd, siteUrl } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Digital Orbit - Website Development and App Development India",
    description:
      "Digital Orbit builds affordable websites in India, startup MVPs, mobile apps, and business websites that help founders and local brands grow online.",
    keywords: [
      "affordable website development India",
      "website development for local business",
      "startup app development India"
    ]
  }),
  title: {
    default: "Digital Orbit - Website Development and App Development India",
    template: "%s | Digital Orbit"
  },
  metadataBase: new URL(siteUrl)
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Suspense fallback={null}>
          <GoogleAnalytics measurementId="G-23EYKDKRQY" />
        </Suspense>
        <NavBar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
