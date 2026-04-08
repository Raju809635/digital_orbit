import type { Metadata } from "next";
import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { CTA } from "@/components/CTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Affordable Website India | Fast Websites for Startups and Businesses",
  description:
    "Looking for an affordable website in India? Digital Orbit builds affordable business websites, startup sites, landing pages, and portfolio websites with fast delivery.",
  path: "/affordable-website-india",
  keywords: [
    "affordable website India",
    "affordable website development India",
    "cheap website for business India",
    "startup website India"
  ]
});

export default function AffordableWebsiteIndiaPage() {
  return (
    <main>
      <MotionSection className="wrapper">
        <p className="subtitle">Affordable Website India</p>
        <h1 className="title-xl">Affordable Website Development in India for Startups and Small Businesses</h1>
        <p className="mt-4 max-w-4xl text-slate-300">
          If you are looking for an affordable website in India, the real goal is not just saving
          money. The goal is getting a strong website that looks professional, loads properly on
          mobile, and helps people trust your business. Digital Orbit works with startups,
          entrepreneurs, local businesses, and creators who want exactly that balance: affordable
          website development without weak design, confusing structure, or slow delivery. Whether
          you are starting from scratch or replacing an old site, we focus on building a clean,
          modern website that supports growth.
        </p>
        <p className="mt-3 max-w-4xl text-slate-300">
          Affordable does not mean basic in a bad way. It means smart. It means choosing the right
          features for your current stage, building the essential pages first, and avoiding
          unnecessary complexity that increases cost without improving results. Many businesses in
          Hyderabad, Ghatkesar, Telangana, and across India need a strong first website more than
          they need an oversized system. That is why our process is designed around clarity,
          practical scope, and fast execution.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <WhatsAppButton
            source="affordable-website-india"
            className="btn-primary inline-flex items-center gap-2"
            label="Get an Affordable Website"
          />
          <Link href="/pricing" className="btn-ghost">
            View Pricing
          </Link>
        </div>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <h2 className="title-lg">Who This Is Best For</h2>
        <p className="mt-3 text-slate-300">
          Affordable website development in India is especially useful for businesses that need to
          establish credibility fast. That includes local service businesses, restaurants, clinics,
          institutions, freelancers, creators, and startup founders testing a new offer. It also
          works well for people who want a website before they invest in a full app or platform.
          Your website becomes the base layer for trust, search visibility, and lead generation.
        </p>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-300 marker:text-mint">
          <li>Local business websites with WhatsApp contact flow</li>
          <li>Startup websites for launch and validation</li>
          <li>Landing pages for campaigns and new offers</li>
          <li>Portfolio websites for individuals and creators</li>
          <li>Service-focused websites with SEO-ready structure</li>
          <li>Multi-page sites with pricing, FAQ, and contact sections</li>
        </ul>
        <p className="mt-4 text-slate-300">
          We build these websites so that they are easy to update, easy to understand, and ready for
          future expansion. If you later want to add blog content, an admin panel, a booking flow,
          or more SEO pages, the site should support that growth instead of becoming a bottleneck.
        </p>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <h2 className="title-lg">Why Affordable Websites Still Need Good Strategy</h2>
        <p className="mt-3 text-slate-300">
          Search terms like affordable website India often attract people who have been disappointed
          before by templates, rushed builds, or developers who disappear after delivery. That is
          why we focus on fundamentals that matter: clear messaging, responsive design, proper page
          structure, visible contact points, and fast loading. A site does not need fifty features
          to work. It needs the right ones, arranged in a way that helps people act.
        </p>
        <p className="mt-3 text-slate-300">
          This is also why local context matters. Even when targeting India broadly, many clients
          start by serving a specific city or area such as Hyderabad or Ghatkesar. A website that
          includes location signals, service clarity, and a strong mobile experience performs better
          for both visitors and search engines. We combine that with affordable delivery so you can
          launch sooner and start collecting enquiries instead of waiting too long for a perfect but
          delayed build.
        </p>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <h2 className="title-lg">From Affordable Website to Real Business Growth</h2>
        <p className="mt-3 text-slate-300">
          A good affordable website is not the end goal. It is the start of better visibility, more
          trust, and more opportunities to convert visitors into customers. Once your core website is
          live, you can build on top of it with SEO content, landing pages, local keyword pages,
          startup validation, or app development. That is why many businesses start with a website
          first and then expand into broader digital product work later.
        </p>
        <p className="mt-3 text-slate-300">
          If you want a website that feels premium without becoming expensive, we can help. You can
          also explore our pages for{" "}
          <Link href="/website-development-hyderabad" className="text-mint hover:underline">
            website development in Hyderabad
          </Link>{" "}
          and{" "}
          <Link href="/app-development-hyderabad" className="text-mint hover:underline">
            app development in Hyderabad
          </Link>
          . Tell us your budget, your business type, and your goal, and we will help you choose the
          right scope.
        </p>
      </MotionSection>

      <CTA
        title="Need an Affordable Website in India?"
        text="We can help you launch a clean, modern, lead-focused website without overcomplicating the process."
        buttonText="Start Your Project Now"
      />
    </main>
  );
}
