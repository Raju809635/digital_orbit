import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Digital Orbit",
  description:
    "Contact Digital Orbit for website development, app development, affordable websites in India, and startup MVP builds.",
  path: "/contact",
  keywords: ["contact website developer India", "contact app development agency", "affordable websites India contact"]
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
