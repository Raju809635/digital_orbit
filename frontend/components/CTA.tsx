import Link from "next/link";

type CTAProps = {
  title: string;
  text: string;
  buttonText: string;
  href?: string;
};

export function CTA({ title, text, buttonText, href = "/contact" }: CTAProps) {
  return (
    <section className="wrapper pt-4">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand/30 bg-gradient-to-r from-brand/20 to-amber-300/20 p-6">
        <div>
          <h3 className="font-space text-2xl font-semibold">{title}</h3>
          <p className="mt-2 max-w-2xl text-slate-200">{text}</p>
        </div>
        <Link href={href} className="btn-primary">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
