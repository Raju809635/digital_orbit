import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { CTA } from "@/components/CTA";
import { faqItems, portfolioItems, services, testimonials } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main>
      <MotionSection className="wrapper pb-8">
        <p className="subtitle">Turning Ideas into Digital Products</p>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="title-xl">Build Your Startup Faster</h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              We help founders turn ideas into real digital products including websites, MVPs, and
              mobile apps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/services" className="btn-ghost">
                View Services
              </Link>
            </div>
          </div>
          <div className="panel">
            <h3 className="font-space text-xl font-semibold">Startup-Ready Delivery</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-line bg-white/5 p-4">
                <p className="font-space text-2xl font-semibold">50+</p>
                <p className="text-sm text-slate-300">Products delivered</p>
              </div>
              <div className="rounded-xl border border-line bg-white/5 p-4">
                <p className="font-space text-2xl font-semibold">3-6w</p>
                <p className="text-sm text-slate-300">Typical MVP timeline</p>
              </div>
              <div className="rounded-xl border border-line bg-white/5 p-4">
                <p className="font-space text-2xl font-semibold">100%</p>
                <p className="text-sm text-slate-300">Founder-focused builds</p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <p className="subtitle">Services Overview</p>
        <h2 className="title-lg">Everything Needed to Launch</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <article key={service.title} className="panel">
              <h3 className="font-space text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="panel">
            <p className="subtitle">Why Choose Digital Orbit</p>
            <h2 className="title-lg">Built for Fast-Moving Founders</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 marker:text-mint">
              <li>Fast planning and execution cycles</li>
              <li>Affordable launch-focused packages</li>
              <li>Clear weekly updates and milestones</li>
              <li>Architecture built for future scaling</li>
            </ul>
          </article>
          <article className="panel">
            <p className="subtitle">Client Benefits</p>
            <h3 className="font-space text-2xl font-semibold">Who We Work With</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 marker:text-mint">
              <li>Startup founders</li>
              <li>Students with startup ideas</li>
              <li>Small businesses and local brands</li>
              <li>Entrepreneurs and creators</li>
            </ul>
          </article>
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <p className="subtitle">Featured Projects</p>
        <h2 className="title-lg">Recent Product Work</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item) => (
            <article key={item.title} className="panel">
              <h3 className="font-space text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {item.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-line px-2 py-1 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="panel">
            <p className="subtitle">Testimonials</p>
            <h3 className="font-space text-2xl font-semibold">What Clients Say</h3>
            <div className="mt-4 space-y-4">
              {testimonials.map((item) => (
                <blockquote key={item.author} className="rounded-xl border border-line bg-white/5 p-4">
                  <p className="text-slate-200">"{item.quote}"</p>
                  <footer className="mt-2 text-sm text-mint">{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </article>
          <article className="panel">
            <p className="subtitle">FAQ</p>
            <h3 className="font-space text-2xl font-semibold">Common Questions</h3>
            <div className="mt-4 space-y-3">
              {faqItems.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-line bg-white/5 p-4">
                  <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                  <p className="mt-2 text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </MotionSection>

      <CTA
        title="Ready to Build Your Digital Product?"
        text="Tell us your idea and we will craft a practical plan to launch quickly."
        buttonText="Start Your Project"
      />
    </main>
  );
}
