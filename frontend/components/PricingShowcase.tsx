"use client";

import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe,
  Headset,
  Megaphone,
  Rocket,
  Search,
  Smartphone,
  Sparkles
} from "lucide-react";
import { MotionSection } from "@/components/MotionSection";

type Currency = "INR" | "USD";

type Price = {
  INR: string;
  USD: string;
};

type ServiceItem = {
  name: string;
  price: Price;
};

type ServiceCategory = {
  title: string;
  icon: typeof Globe;
  description: string;
  items: ServiceItem[];
};

type PackagePlan = {
  name: string;
  price: Price;
  description: string;
  features: string[];
  featured?: boolean;
};

const trustPoints = ["Fast Delivery", "Premium Design", "Reliable Support"];

const serviceCategories: ServiceCategory[] = [
  {
    title: "Website Development",
    icon: Globe,
    description: "Startup-ready websites built for performance, trust, and conversion.",
    items: [
      { name: "Basic", price: { INR: "₹4,999", USD: "$79" } },
      { name: "Business", price: { INR: "₹9,999", USD: "$149" } },
      { name: "Premium", price: { INR: "₹19,999", USD: "$299" } },
      { name: "E-Commerce", price: { INR: "₹29,999", USD: "$499" } }
    ]
  },
  {
    title: "App Development",
    icon: Smartphone,
    description: "Mobile apps and startup MVPs built for fast launch and easy iteration.",
    items: [
      { name: "Basic App", price: { INR: "₹19,999", USD: "$299" } },
      { name: "Advanced App", price: { INR: "₹49,999+", USD: "$799+" } }
    ]
  },
  {
    title: "SEO",
    icon: Search,
    description: "Search visibility plans focused on rankings, impressions, and qualified traffic.",
    items: [
      { name: "Basic", price: { INR: "₹3,999/month", USD: "$79/month" } },
      { name: "Advanced", price: { INR: "₹9,999/month", USD: "$149/month" } }
    ]
  },
  {
    title: "Marketing",
    icon: Megaphone,
    description: "Campaign support for social media, paid ads, and lead generation funnels.",
    items: [
      { name: "Social Media", price: { INR: "₹4,999/month", USD: "$99/month" } },
      { name: "Ads Management", price: { INR: "₹3,999/month", USD: "$79/month" } }
    ]
  },
  {
    title: "AI Services",
    icon: Bot,
    description: "Practical automation, chatbots, and custom AI workflows for growing teams.",
    items: [
      { name: "Chatbots", price: { INR: "₹9,999+", USD: "$149+" } },
      { name: "Custom AI", price: { INR: "₹19,999+", USD: "$299+" } }
    ]
  }
];

const packagePlans: PackagePlan[] = [
  {
    name: "Starter",
    price: { INR: "₹9,999", USD: "$149" },
    description: "A lean launch package for small businesses and first-time founders.",
    features: ["Fast loading website", "Responsive design", "Lead capture setup"]
  },
  {
    name: "Growth",
    price: { INR: "₹24,999", USD: "$349" },
    description: "Our most popular package for startups that need strong presentation and growth tools.",
    features: ["Modern UI and premium sections", "WhatsApp and form integration", "SEO-ready structure"],
    featured: true
  },
  {
    name: "Pro",
    price: { INR: "₹49,999", USD: "$699" },
    description: "A deeper engagement for product teams that need more custom capability.",
    features: ["Custom workflows", "Advanced UI motion", "Launch and optimization support"]
  },
  {
    name: "Enterprise",
    price: { INR: "Custom Pricing", USD: "Custom Pricing" },
    description: "Built for larger scopes, multi-role platforms, and long-term digital execution.",
    features: ["Custom roadmap", "Dedicated consultation", "Flexible delivery model"]
  }
];

function PriceValue({ price, currency }: { price: Price; currency: Currency }) {
  return (
    <motion.span
      key={`${currency}-${price[currency]}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="inline-block"
    >
      {price[currency]}
    </motion.span>
  );
}

export function PricingShowcase() {
  const [currency, setCurrency] = React.useState<Currency>("INR");

  return (
    <>
      <MotionSection className="wrapper">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="subtitle">Pricing</p>
            <h1 className="title-xl">Flexible Pricing for Websites, Apps, SEO, and Growth</h1>
            <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
              Choose from clear service pricing or packaged delivery plans. We keep pricing transparent,
              startup-friendly, and focused on fast execution for businesses in India and international
              clients.
            </p>
          </div>

          <div className="inline-flex rounded-2xl border border-line bg-white/5 p-1">
            {(["INR", "USD"] as Currency[]).map((option) => {
              const active = option === currency;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCurrency(option)}
                  className={`relative rounded-xl px-5 py-2 text-sm font-semibold transition ${
                    active ? "text-slate-950" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="currency-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand to-mint"
                      transition={{ type: "spring", stiffness: 360, damping: 28 }}
                    />
                  ) : null}
                  <span className="relative z-10">{option}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {trustPoints.map((point) => (
            <span
              key={point}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-2 text-sm text-slate-200"
            >
              <CheckCircle2 className="h-4 w-4 text-mint" />
              {point}
            </span>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="panel group relative overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow"
              >
                <div className="absolute inset-x-8 top-0 h-24 bg-gradient-to-b from-brand/20 via-mint/10 to-transparent blur-3xl transition duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex rounded-2xl border border-brand/30 bg-brand/10 p-3 text-mint">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-space text-2xl font-semibold">{category.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>

                  <div className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-2xl border border-line bg-black/20 px-4 py-3 transition group-hover:border-white/15"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-semibold text-white">{item.name}</h3>
                          <p className="text-right font-space text-lg font-semibold text-mint">
                            <PriceValue price={item.price} currency={currency} />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary">
                      Get Started
                    </Link>
                    <a
                      href="https://wa.me/916304679550"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="subtitle">Packages</p>
            <h2 className="title-lg">Agency Packages for Faster Delivery</h2>
          </div>
          <p className="hidden max-w-xl text-right text-sm text-slate-300 md:block">
            Pick a package if you want us to scope, design, build, and launch with a tighter delivery
            rhythm.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packagePlans.map((plan) => (
            <article
              key={plan.name}
              className={`panel relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-glow ${
                plan.featured
                  ? "border-mint/60 bg-gradient-to-b from-brand/20 via-panelSoft to-panel shadow-glow"
                  : "hover:border-brand/40"
              }`}
            >
              {plan.featured ? (
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-mint/40 bg-mint/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-mint">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most Popular
                </div>
              ) : null}

              <h3 className="font-space text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{plan.description}</p>
              <p className="mt-5 font-space text-4xl font-semibold text-white">
                <PriceValue price={plan.price} currency={currency} />
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
                <Link href="/contact" className={plan.featured ? "btn-primary" : "btn-ghost"}>
                  Get Started
                </Link>
                <a
                  href="https://wa.me/916304679550"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Book a Call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="panel overflow-hidden bg-gradient-to-br from-brand/15 via-panel to-mint/10">
            <p className="subtitle">Why Teams Choose Us</p>
            <h2 className="title-lg">Get Your Website in 48 Hours</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              We move quickly, keep communication clear, and ship with a business-first mindset. That
              means modern design, conversion-focused structure, and hands-on support instead of
              generic templates.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Fast Delivery", icon: Rocket },
                { label: "Premium Design", icon: Sparkles },
                { label: "Real Support", icon: Headset }
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="rounded-2xl border border-line bg-black/20 p-4">
                    <Icon className="h-5 w-5 text-mint" />
                    <p className="mt-3 font-semibold text-white">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="panel">
            <p className="subtitle">Need Clarity</p>
            <h2 className="font-space text-2xl font-semibold">Custom scope, custom quote</h2>
            <p className="mt-3 text-slate-300">
              Pricing may vary based on requirements, integrations, content readiness, and delivery
              timeline. Tell us what you need, and we will recommend the best-fit scope.
            </p>

            <div className="mt-6 space-y-3">
              <Link href="/contact" className="btn-primary w-full">
                Start Your Project Now
              </Link>
              <a
                href="https://wa.me/916304679550"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost w-full"
              >
                WhatsApp Us
              </a>
            </div>
          </article>
        </div>
      </MotionSection>
    </>
  );
}
