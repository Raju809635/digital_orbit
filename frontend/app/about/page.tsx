import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MotionSection } from "@/components/MotionSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Digital Orbit - Website Developer in Hyderabad",
  description:
    "Learn how Digital Orbit helps businesses in Hyderabad, Ghatkesar, and Telangana with website development, app development, and MVP builds.",
  path: "/about",
  keywords: ["about digital orbit", "website developer Hyderabad", "web design team Telangana"]
});

export default function AboutPage() {
  return (
    <main>
      <MotionSection className="wrapper">
        <p className="subtitle">About Digital Orbit</p>
        <h1 className="title-xl">Technology Team for Startup Builders</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Digital Orbit is a digital development team focused on helping innovators build
          technology products quickly and affordably.
        </p>
        <p className="mt-3 max-w-3xl text-slate-300">
          We work with startups, entrepreneurs, and creators to transform ideas into working
          digital platforms.
        </p>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="panel">
            <h2 className="title-lg">Focus Areas</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 marker:text-mint">
              <li>Startup MVP development</li>
              <li>Product prototyping</li>
              <li>Website development</li>
              <li>Digital product consulting</li>
            </ul>
          </article>
          <article className="panel">
            <h2 className="title-lg">Mission</h2>
            <p className="mt-3 text-slate-300">
              To empower innovators by making technology development accessible and fast.
            </p>
          </article>
        </div>
      </MotionSection>

      <CTA
        title="Bring Your Idea to Life"
        text="Talk to Digital Orbit and get a launch strategy for your digital product."
        buttonText="Contact Us"
      />
    </main>
  );
}
