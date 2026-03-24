import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { CTA } from "@/components/CTA";
import { faqItems, services, testimonials } from "@/lib/site-data";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Rocket,
  Sparkles,
  Zap
} from "lucide-react";

const featuredProof = [
  {
    title: "Restaurant Website",
    clientType: "Local business",
    problem: "Needed a mobile-friendly site that turns visitors into orders and enquiries.",
    result: "Built a fast menu-focused experience with direct WhatsApp contact.",
    bullets: ["Mobile optimized", "WhatsApp integration", "Clear menu-to-contact flow"],
    link: "https://restaurants-nu.vercel.app"
  },
  {
    title: "College Website",
    clientType: "Educational institution",
    problem: "Needed a clean way to present admissions, departments, and campus highlights.",
    result: "Structured content for students and parents with simple navigation.",
    bullets: ["Admission-ready layout", "Department pages", "Responsive information flow"],
    link: "https://samskruti.vercel.app"
  },
  {
    title: "Hospital Website",
    clientType: "Healthcare business",
    problem: "Needed a trustworthy website for patients to find services and contact details fast.",
    result: "Delivered a professional healthcare layout built around clarity and trust.",
    bullets: ["Doctor/service sections", "Patient-first layout", "Emergency contact visibility"],
    link: "https://hospital-one-drab.vercel.app"
  }
];

export default function HomePage() {
  return (
    <main>
      <MotionSection className="wrapper pb-8">
        <a
          href="https://wa.me/916304679550"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-panelSoft/95 px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:scale-[1.01]"
        >
          <MessageCircle className="h-4 w-4 text-mint" />
          WhatsApp Us
        </a>
        <p className="subtitle">Digital Orbit Growth Websites</p>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-semibold text-mint">
              <Sparkles className="h-4 w-4" />
              Get your website in 48 hours
            </div>
            <h1 className="title-xl">
              We Build Websites That Bring You Clients
              <span className="mt-2 block text-mint">Not Just Designs - We Create Growth Machines</span>
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              From idea to website to real customers. We help startups and businesses grow online
              with conversion-focused websites, MVPs, and mobile apps.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full border border-line bg-white/5 px-3 py-2">Fast delivery</span>
              <span className="rounded-full border border-line bg-white/5 px-3 py-2">Affordable pricing</span>
              <span className="rounded-full border border-line bg-white/5 px-3 py-2">Real support</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                <Rocket className="mr-2 h-4 w-4" />
                Get My Website
              </Link>
              <a
                href="https://wa.me/916304679550"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="panel overflow-hidden border-brand/30 bg-gradient-to-br from-panelSoft to-panel">
            <div className="grid gap-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-mint">Why people choose us</p>
                  <h3 className="mt-2 font-space text-2xl font-semibold">From idea to customers</h3>
                </div>
                <div className="rounded-2xl border border-brand/30 bg-brand/10 p-3">
                  <Zap className="h-5 w-5 text-mint" />
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-white/5 p-4">
                <p className="text-sm text-slate-300">What we help with</p>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-mint" />
                    Idea -> Website -> Real customers
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-mint" />
                    Startup websites, MVPs, and business landing pages
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-mint" />
                    Affordable builds for founders, students, and local brands
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-line bg-white/5 p-4">
                  <p className="font-space text-2xl font-semibold">48h</p>
                  <p className="text-sm text-slate-300">Fast-start delivery option</p>
                </div>
                <div className="rounded-xl border border-line bg-white/5 p-4">
                  <p className="font-space text-2xl font-semibold">3</p>
                  <p className="text-sm text-slate-300">Slots left this week</p>
                </div>
                <div className="rounded-xl border border-line bg-white/5 p-4">
                  <p className="font-space text-2xl font-semibold">1:1</p>
                  <p className="text-sm text-slate-300">Support from real developers</p>
                </div>
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
        <p className="subtitle">Trust Building</p>
        <h2 className="title-lg">Why Choose Digital Orbit?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="panel">
            <h2 className="title-lg">Built for Fast-Moving Founders</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 marker:text-mint">
              <li>Fast planning and execution cycles</li>
              <li>Affordable launch-focused packages</li>
              <li>Clear weekly updates and milestones</li>
              <li>Architecture built for future scaling</li>
              <li>Student-friendly startup support and real human communication</li>
            </ul>
          </article>
          <article className="panel">
            <h3 className="font-space text-2xl font-semibold">Why clients trust the team</h3>
            <p className="mt-3 text-slate-300">
              We are a team of passionate developers helping startups go online affordably. Our goal
              is simple: launch something strong enough to win trust and start conversations fast.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 marker:text-mint">
              <li>Startup founders and early-stage teams</li>
              <li>Students with startup ideas</li>
              <li>Small businesses and local brands</li>
              <li>Entrepreneurs and creators</li>
            </ul>
          </article>
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="subtitle">Portfolio Proof</p>
            <h2 className="title-lg">Work That Builds Trust</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Visitors trust websites faster when they can see real examples. These demo builds show
              the level of structure, polish, and clarity we bring to client work.
            </p>
          </div>
          <Link href="/portfolio" className="btn-ghost">
            Explore More Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featuredProof.map((item) => (
            <article
              key={item.title}
              className="panel flex h-full flex-col justify-between transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-glow"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-mint">{item.clientType}</p>
                <h3 className="mt-2 font-space text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm text-slate-400">Problem</p>
                <p className="mt-1 text-slate-300">{item.problem}</p>
                <p className="mt-4 text-sm text-slate-400">Solution</p>
                <p className="mt-1 text-slate-300">{item.result}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-mint" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={item.link} target="_blank" rel="noreferrer" className="btn-primary">
                  View Live
                </a>
                <Link href="/contact" className="btn-ghost">
                  Get Similar Website
                </Link>
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="panel border-brand/30 bg-gradient-to-r from-brand/10 to-white/5">
          <p className="subtitle">Idea To Launch</p>
          <h2 className="title-lg">Have an Idea but No Website?</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            We help you launch MVPs, portfolio websites, startup websites, and business landing pages
            without making the process complicated.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {["MVP", "Portfolio", "Startup website", "Business landing page"].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-white/5 p-4">
                <p className="font-space text-lg font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
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
        title="Ready to turn visitors into customers?"
        text="Tell us about your business and we will help you launch a website that looks strong and converts better."
        buttonText="Get My Website"
      />
    </main>
  );
}
