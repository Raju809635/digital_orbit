import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MotionSection } from "@/components/MotionSection";
import { processSteps } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Our Process - Website Development Hyderabad",
  description:
    "See how Digital Orbit turns ideas into launch-ready websites and apps for clients in Hyderabad, Ghatkesar, Telangana, and across India.",
  path: "/process",
  keywords: ["website development process Hyderabad", "app development workflow Hyderabad", "startup product process"]
});

export default function ProcessPage() {
  return (
    <main>
      <MotionSection className="wrapper">
        <p className="subtitle">Our Process</p>
        <h1 className="title-xl">Simple Workflow, Fast Product Delivery</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Our process is designed to keep product development clear, collaborative, and launch-ready.
        </p>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <article key={step.title} className="panel">
              <p className="text-sm font-semibold uppercase tracking-wide text-mint">Step {index + 1}</p>
              <h2 className="mt-2 font-space text-2xl font-semibold">{step.title}</h2>
              <p className="mt-2 text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <article className="panel border-brand/30 bg-gradient-to-r from-brand/10 to-white/5">
          <p className="subtitle">Process Example</p>
          <h2 className="title-lg">Real Estate Website Demo</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            A recent demo in the real estate space shows how our workflow translates into a premium
            browsing experience. We structured the site around trust, clear property discovery, and
            direct enquiries so visitors can move from interest to conversation quickly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://real-estate-frontend-iota-eosin.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View Real Estate Demo
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </article>
      </MotionSection>

      <CTA
        title="Start with a Product Discussion"
        text="Share your idea and we will break it down into practical launch steps."
        buttonText="Book a Discussion"
      />
    </main>
  );
}
