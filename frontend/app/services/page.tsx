import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MotionSection } from "@/components/MotionSection";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Discover Digital Orbit services for MVPs, websites, mobile apps, and consulting."
};

export default function ServicesPage() {
  return (
    <main>
      <MotionSection className="wrapper">
        <p className="subtitle">Services</p>
        <h1 className="title-xl">Modern Digital Product Services</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Flexible development services for startup founders, businesses, and creators.
        </p>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="panel">
              <h2 className="font-space text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <CTA
        title="Need a custom service mix?"
        text="We can combine MVP, website, and product consulting into one execution plan."
        buttonText="Get Service Plan"
      />
    </main>
  );
}
