"use client";

import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
  source?: string;
};

const whatsappUrl = "https://wa.me/916304679550";

export function WhatsAppButton({
  className = "",
  label = "WhatsApp Us",
  source = "global"
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent("whatsapp_click", { source })}
      className={className}
    >
      <MessageCircle className="h-4 w-4 text-mint" />
      {label}
    </a>
  );
}
