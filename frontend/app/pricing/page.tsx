import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MotionSection } from "@/components/MotionSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pricing - Affordable Websites India",
  description:
    "View Digital Orbit pricing for affordable websites in India, startup MVPs, landing pages, and full digital product development.",
  path: "/pricing",
  keywords: ["affordable websites India", "website development pricing India", "startup website cost India"]
});

const plans = [
  {
    name: "Starter",
    price: "Rs. 1999",
    description: "Basic portfolio or landing page.",
    features: ["Single page website", "Modern responsive design", "Basic SEO setup"]
  },
  {
    name: "Startup",
    price: "Rs. 3999",
    description: "Startup website or MVP prototype.",
    features: ["Multi-page startup website", "MVP wireframe/prototype", "Tech consultation"],
    featured: true
  },
  {
    name: "Business",
    price: "Rs. 9999+",
    description: "Full product development.",
    features: ["Custom product architecture", "Backend API development", "Launch support"]
  }
];

export default function PricingPage() {
  return (
    <main>
      <MotionSection className="wrapper">
        <p className="subtitle">Pricing</p>
        <h1 className="title-xl">Simple Packages for Every Stage</h1>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`panel ${plan.featured ? "border-mint/60 bg-panelSoft shadow-glow" : ""}`}
            >
              <h2 className="font-space text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-2 text-4xl font-semibold text-white">{plan.price}</p>
              <p className="mt-2 text-slate-300">{plan.description}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 marker:text-mint">
                {plan.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <article className="panel">
          <h2 className="font-space text-2xl font-semibold">Need a Custom Quote?</h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Share your product idea, expected timeline, and budget. We will provide a tailored quote
            based on your goals.
          </p>
        </article>
      </MotionSection>

      <CTA
        title="Let's plan your budget smartly"
        text="Get a custom quote with scope and timeline clarity."
        buttonText="Request Custom Quote"
      />
    </main>
  );
}
