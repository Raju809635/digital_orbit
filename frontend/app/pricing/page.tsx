import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PricingShowcase } from "@/components/PricingShowcase";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Website Development Pricing in Hyderabad and India",
  description:
    "Explore Digital Orbit pricing for websites, app development, SEO, AI services, and startup packages in Hyderabad, Ghatkesar, Telangana, India, and for international clients.",
  path: "/pricing",
  keywords: [
    "website development pricing Hyderabad",
    "app development pricing Hyderabad",
    "affordable website India",
    "website developer in Hyderabad pricing"
  ]
});

export default function PricingPage() {
  return (
    <main>
      <PricingShowcase />

      <CTA
        title="Need a custom scope for your business?"
        text="Tell us your requirements and we will recommend the right plan, timeline, and delivery path."
        buttonText="Request Custom Quote"
      />
    </main>
  );
}
