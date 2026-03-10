"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-[min(1120px,92%)] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold md:text-base">
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-brand to-mint shadow-glow" />
          Digital Orbit
        </Link>

        <button
          className="rounded-lg border border-line px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav
          className={`absolute right-[4%] top-[72px] w-[min(320px,92vw)] rounded-xl border border-line bg-[#0f1728] p-3 md:static md:w-auto md:border-0 md:bg-transparent md:p-0 ${open ? "block" : "hidden"} md:block`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                      active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
