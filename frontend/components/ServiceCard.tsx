import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  href?: string;
};

export function ServiceCard({ title, description, features, icon: Icon, href }: ServiceCardProps) {
  const inner = (
    <div className="panel group relative h-full transition hover:-translate-y-0.5 hover:scale-[1.01] hover:border-brand/40 hover:shadow-glow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="rounded-xl border border-line bg-white/5 p-3">
            <Icon className="h-5 w-5 text-mint" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-space text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{description}</p>
          </div>
        </div>
        {href ? (
          <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-mint" aria-hidden="true" />
        ) : null}
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300 marker:text-mint">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );

  if (!href) return inner;
  if (href.startsWith("/")) return <Link href={href}>{inner}</Link>;

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  );
}
