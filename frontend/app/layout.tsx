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

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
});

export const metadata: Metadata = {
  title: {
    default: "Digital Orbit | Turning Ideas into Digital Products",
    template: "%s | Digital Orbit"
  },
  description:
    "Digital Orbit helps startup founders and businesses build MVPs, startup websites, mobile apps, and digital products quickly.",
  metadataBase: new URL("https://digitalorbit.example.com")
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans`}>
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
