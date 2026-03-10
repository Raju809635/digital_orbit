import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MotionSection } from "@/components/MotionSection";
import { portfolioItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Digital Orbit project examples including portfolio websites, landing pages, and platforms."
};

export default function PortfolioPage() {
  return (
    <main>
      <MotionSection className="wrapper">
        <p className="subtitle">Portfolio / Projects</p>
        <h1 className="title-xl">Work Built for Real Product Outcomes</h1>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="grid gap-4 md:grid-cols-2">
          {portfolioItems.map((project) => (
            <article key={project.title} className="panel">
              <h2 className="font-space text-2xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-line px-2 py-1 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <CTA
        title="Need a similar project?"
        text="We can build a custom website, app, or platform tailored to your product goals."
        buttonText="Request Project Scope"
      />
    </main>
  );
}
