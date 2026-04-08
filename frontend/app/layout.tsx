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
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
    title: "Best Website Developer in Hyderabad | Affordable and Fast",
    description:
      "Digital Orbit is a website developer in Hyderabad building affordable websites, MVPs, and app solutions for businesses in Ghatkesar, Telangana, and across India. Start your project on WhatsApp.",
    keywords: [
      "website developer in Hyderabad",
      "web design Hyderabad",
      "app development Hyderabad",
      "affordable website India"
    ]
  }),
  title: {
    default: "Best Website Developer in Hyderabad | Digital Orbit",
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
        <WhatsAppButton
          source="floating_button"
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-panelSoft/95 px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:scale-[1.01]"
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
