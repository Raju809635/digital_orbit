import Link from "next/link";

const seoLinks = [
  { href: "/website-development-hyderabad", label: "Website Development Hyderabad" },
  { href: "/app-development-hyderabad", label: "App Development Hyderabad" },
  { href: "/affordable-website-india", label: "Affordable Website India" }
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line py-10">
      <div className="mx-auto grid w-[min(1120px,92%)] gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-space text-xl font-semibold text-white">Digital Orbit</p>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            Website developer in Hyderabad helping startups and businesses in Ghatkesar, Telangana,
            and across India with affordable websites, MVPs, and app development.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-mint">SEO Links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            {seoLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-[min(1120px,92%)] flex-wrap items-center justify-between gap-2 border-t border-line pt-6 text-sm text-slate-400">
        <p>Copyright 2026 Digital Orbit. All rights reserved.</p>
        <p>Hyderabad, Ghatkesar, Telangana, India</p>
      </div>
    </footer>
  );
}
