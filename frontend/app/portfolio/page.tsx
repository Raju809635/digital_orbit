import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MotionSection } from "@/components/MotionSection";
import { ServiceCard } from "@/components/ServiceCard";
import { buildMetadata } from "@/lib/seo";
import {
  Building2,
  Code2,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Rocket,
  ShoppingCart,
  Sofa,
  UserRound,
  UtensilsCrossed
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio and Website Examples",
  description:
    "Explore Digital Orbit website examples for restaurants, hospitals, colleges, startups, and businesses across India.",
  path: "/portfolio",
  keywords: ["website portfolio India", "business website examples", "affordable websites India examples"]
});

export default function PortfolioPage() {
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
            href="https://hospital-one-drab.vercel.app"
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
            href="https://restaurants-nu.vercel.app"
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
            href="https://samskruti.vercel.app"
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
        <p className="subtitle">Product Development</p>
        <h2 className="font-space text-3xl font-semibold">MVPs and Basic Apps for Ideas</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Have an idea? We can build an MVP, a basic app, or a web application to validate and launch fast.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Startup MVP Development"
            description="Launch a first version quickly to validate your idea with real users."
            features={["Scope planning", "Core features only", "Fast iterations", "Launch-ready build"]}
            icon={Rocket}
          />
          <ServiceCard
            title="Basic Apps for Ideas"
            description="Simple mobile or web apps to test workflows and solve a specific problem."
            features={["Clean UI", "Core flows", "Auth (optional)", "Deployment support"]}
            icon={Lightbulb}
          />
          <ServiceCard
            title="Web and Mobile Applications"
            description="Modern apps built with scalable architecture for future growth."
            features={["API integration", "Admin dashboard (optional)", "Performance focused", "Maintainable codebase"]}
            icon={Code2}
          />
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
