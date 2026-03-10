import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MotionSection } from "@/components/MotionSection";
import { processSteps } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Process",
  description: "Understand Digital Orbit's four-step workflow from idea to launch."
};

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

      <CTA
        title="Start with a Product Discussion"
        text="Share your idea and we will break it down into practical launch steps."
        buttonText="Book a Discussion"
      />
    </main>
  );
}
