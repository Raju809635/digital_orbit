import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { MotionSection } from "@/components/MotionSection";
import { ServiceCard } from "@/components/ServiceCard";
import { portfolioItems } from "@/lib/site-data";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Sofa,
  UserRound,
  UtensilsCrossed
} from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Digital Orbit project examples including portfolio websites, landing pages, and platforms."
};

export default function PortfolioPage() {
  const mobileProjects = portfolioItems.filter((project) => project.category === "Mobile Applications");
  const webProjects = portfolioItems.filter((project) => project.category === "Web Applications");
  const getPrimaryLink = (liveDemo?: string, caseStudy?: string) => liveDemo || caseStudy;

  return (
    <main>
      <MotionSection className="wrapper">
        <p className="subtitle">Portfolio / Projects</p>
        <h1 className="title-xl">Work Built for Real Product Outcomes</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Some projects displayed are demonstration projects built by Digital Orbit to showcase our
          design and development capabilities.
        </p>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <article className="panel">
          <h2 className="font-space text-3xl font-semibold">Our Work</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-line bg-white/5 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-mint">Mobile Applications</p>
              <p className="mt-2 text-slate-200">ORIN - Sample AI Career Mentorship App</p>
            </div>
            <div className="rounded-xl border border-line bg-white/5 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-mint">Web Applications</p>
              <ul className="mt-2 space-y-1 text-slate-200">
                <li>Cyber Security Corporate Website</li>
                <li>College Institution Website</li>
                <li>Hospital Management Website</li>
                <li>Restaurant Business Website</li>
                <li>Portfolio Website (Sample)</li>
              </ul>
            </div>
          </div>
        </article>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <p className="subtitle">Business Solutions We Build</p>
        <h2 className="font-space text-3xl font-semibold">Websites for Real Industries</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          We build modern web applications and mobile apps tailored for startups and businesses.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Furniture Store Websites"
            description="We build modern websites for furniture businesses to showcase products and increase sales."
            features={[
              "Product catalog",
              "Category filtering",
              "Product pages",
              "Enquiry system",
              "WhatsApp integration"
            ]}
            icon={Sofa}
            href="https://furniture-beta-coral.vercel.app"
          />

          <ServiceCard
            title="Hospital / Clinic Websites"
            description="Professional healthcare websites for hospitals and clinics."
            features={[
              "Doctor profiles",
              "Appointment booking",
              "Emergency contact",
              "Patient information pages"
            ]}
            icon={HeartPulse}
          />

          <ServiceCard
            title="Restaurant Websites"
            description="Modern websites for restaurants with menu and ordering features."
            features={[
              "Digital menu",
              "Food gallery",
              "Online ordering / enquiry",
              "Table reservation",
              "Contact integration"
            ]}
            icon={UtensilsCrossed}
          />

          <ServiceCard
            title="College & Educational Websites"
            description="Clean and responsive websites for colleges and institutions."
            features={[
              "Courses & departments",
              "Admission details",
              "Faculty profiles",
              "Events & announcements"
            ]}
            icon={GraduationCap}
          />

          <ServiceCard
            title="Corporate / Startup Websites"
            description="Modern websites for startups and companies to showcase services and products."
            features={[
              "Landing pages",
              "Service sections",
              "Pricing pages",
              "Contact forms",
              "Blog system"
            ]}
            icon={Building2}
          />

          <ServiceCard
            title="Personal Portfolio Websites"
            description="Professional portfolio websites for developers, freelancers, and creators."
            features={["About section", "Skills showcase", "Project gallery", "Contact form"]}
            icon={UserRound}
          />

          <ServiceCard
            title="E-commerce Websites"
            description="Full online store solutions for businesses."
            features={[
              "Product listings",
              "Cart & checkout",
              "Payment integration",
              "Order management"
            ]}
            icon={ShoppingCart}
          />
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <h2 className="font-space text-3xl font-semibold">Mobile Applications</h2>
        <div className="mt-4 grid gap-4">
          {mobileProjects.map((project) => (
            <article
              key={project.title}
              className="panel relative border-mint/40 bg-panelSoft transition hover:border-brand/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-space text-2xl font-semibold">{project.title}</h3>
                {project.subtitle ? (
                  <span className="rounded-full border border-brand/40 bg-brand/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint">
                    {project.subtitle}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <div className="mt-4 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
                <p>
                  <span className="font-semibold text-slate-100">Type:</span> {project.type}
                </p>
                {project.platform ? (
                  <p>
                    <span className="font-semibold text-slate-100">Platform:</span> {project.platform}
                  </p>
                ) : null}
                {project.status ? (
                  <p>
                    <span className="font-semibold text-slate-100">Status:</span> {project.status}
                  </p>
                ) : null}
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-300 marker:text-mint">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-line px-2 py-1 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              {getPrimaryLink(project.liveDemo, project.caseStudy) ? (
                getPrimaryLink(project.liveDemo, project.caseStudy)?.startsWith("http") ? (
                  <a
                    href={getPrimaryLink(project.liveDemo, project.caseStudy)}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 rounded-2xl"
                    aria-label={`Open ${project.title}`}
                  />
                ) : (
                  <Link
                    href={String(getPrimaryLink(project.liveDemo, project.caseStudy))}
                    className="absolute inset-0 rounded-2xl"
                    aria-label={`Open ${project.title}`}
                  />
                )
              ) : null}
              <div className="relative z-10 mt-5 flex flex-wrap gap-3">
                {project.liveDemo ? (
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn-primary">
                    Live Demo
                  </a>
                ) : null}
                {project.caseStudy ? (
                  <Link href={project.caseStudy} className="btn-ghost">
                    View Case Study
                  </Link>
                ) : null}
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost">
                    GitHub
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <h2 className="font-space text-3xl font-semibold">Web Applications</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {webProjects.map((project) => (
            <article key={project.title} className="panel relative transition hover:border-brand/40">
              <h3 className="font-space text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-300 marker:text-mint">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-line px-2 py-1 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              {getPrimaryLink(project.liveDemo, project.caseStudy) ? (
                getPrimaryLink(project.liveDemo, project.caseStudy)?.startsWith("http") ? (
                  <a
                    href={getPrimaryLink(project.liveDemo, project.caseStudy)}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 rounded-2xl"
                    aria-label={`Open ${project.title}`}
                  />
                ) : (
                  <Link
                    href={String(getPrimaryLink(project.liveDemo, project.caseStudy))}
                    className="absolute inset-0 rounded-2xl"
                    aria-label={`Open ${project.title}`}
                  />
                )
              ) : null}
              <div className="relative z-10 mt-5 flex flex-wrap gap-3">
                {project.liveDemo ? (
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn-primary">
                    Live Demo
                  </a>
                ) : null}
                {project.caseStudy ? (
                  <Link href={project.caseStudy} className="btn-ghost">
                    View Case Study
                  </Link>
                ) : null}
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost">
                    GitHub
                  </a>
                ) : null}
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
