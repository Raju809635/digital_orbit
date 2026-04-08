import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Website Developer in Hyderabad",
  description:
    "Contact Digital Orbit for website development in Hyderabad, app development in Telangana, affordable websites in India, and startup MVP builds.",
  path: "/contact",
  keywords: ["contact website developer Hyderabad", "contact app development Hyderabad", "affordable websites India contact"]
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
