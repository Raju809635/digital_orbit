"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Rocket, Sparkles, Zap } from "lucide-react";

const heroPoints = [
  "Idea to website to real customers",
  "Startup websites, MVPs, and landing pages",
  "Affordable builds with real developer support"
];

const floatingCards = [
  { title: "Fast-start", value: "48h", text: "Quick launch option" },
  { title: "This week", value: "3", text: "Active build slots left" },
  { title: "Support", value: "1:1", text: "Direct communication" }
];

export function HomeHero() {
  return (
    <section className="wrapper pb-8">
      <a
        href="https://wa.me/916304679550"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-panelSoft/95 px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:scale-[1.01]"
      >
        <MessageCircle className="h-4 w-4 text-mint" />
        WhatsApp Us
      </a>

      <div className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(129,140,248,0.22),transparent_28%),linear-gradient(135deg,#0b1221_0%,#121f38_45%,#0b1221_100%)] px-6 py-10 shadow-glow md:px-10 md:py-12">
        <motion.div
          className="absolute -left-16 top-8 h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl"
          animate={{ x: [0, 18, -10, 0], y: [0, 16, -6, 0], scale: [1, 1.08, 0.98, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-16 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl"
          animate={{ x: [0, -20, 10, 0], y: [0, -14, 8, 0], scale: [1, 0.95, 1.07, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl"
          animate={{ x: [0, 24, -8, 0], y: [0, -10, 12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-semibold text-mint"
            >
              <Sparkles className="h-4 w-4" />
              Get your website in 48 hours
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="subtitle"
            >
              Digital Orbit Growth Websites
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="title-xl max-w-3xl"
            >
              We Build Websites That Bring You Clients
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Not Just Designs - We Create Growth Machines
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="mt-4 max-w-2xl text-lg text-slate-200/90"
            >
              From idea to website to real customers. We help startups and businesses grow online
              with conversion-focused websites, MVPs, and mobile apps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 flex flex-wrap gap-3 text-sm text-slate-100"
            >
              {["Fast delivery", "Affordable pricing", "Real support"].map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/6 px-3 py-2 backdrop-blur-sm">
                  {chip}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link href="/contact" className="btn-primary">
                <Rocket className="mr-2 h-4 w-4" />
                Get My Website
              </Link>
              <a
                href="https://wa.me/916304679550"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost border-white/15 bg-white/8 backdrop-blur-sm"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="relative"
          >
            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-mint">Why people choose us</p>
                    <h3 className="mt-2 font-space text-2xl font-semibold text-white">From idea to customers</h3>
                  </div>
                  <div className="rounded-2xl border border-brand/30 bg-brand/10 p-3">
                    <Zap className="h-5 w-5 text-mint" />
                  </div>
                </div>

                <div className="grid gap-3">
                  {heroPoints.map((point) => (
                    <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/10 px-4 py-3 text-sm text-slate-100/90">
                      <CheckCircle2 className="h-4 w-4 text-mint" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {floatingCards.map((card) => (
                    <motion.div
                      key={card.title}
                      className="rounded-2xl border border-white/10 bg-white/6 p-4"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                    >
                      <p className="text-xs uppercase tracking-wide text-slate-300">{card.title}</p>
                      <p className="mt-2 font-space text-2xl font-semibold text-white">{card.value}</p>
                      <p className="mt-1 text-xs text-slate-300">{card.text}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.25rem] border border-white/8 bg-black/15 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-200">Growth preview</p>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Live-ready flow
                    </span>
                  </div>
                  <div className="grid grid-cols-4 items-end gap-3">
                    {[42, 68, 54, 80].map((height, index) => (
                      <motion.div
                        key={height}
                        className={`rounded-t-2xl ${index % 2 === 0 ? "bg-gradient-to-t from-cyan-400 to-sky-300" : "bg-gradient-to-t from-indigo-500 to-violet-300"}`}
                        initial={{ height: 0 }}
                        animate={{ height }}
                        transition={{ duration: 0.8, delay: 0.25 + index * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -right-4 top-12 hidden rounded-2xl border border-cyan-300/20 bg-slate-950/70 px-4 py-3 shadow-glow backdrop-blur-md md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs uppercase tracking-wide text-slate-400">Conversion</p>
              <p className="mt-1 font-space text-xl font-semibold text-white">Better first impression</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 left-6 hidden rounded-2xl border border-indigo-300/20 bg-slate-950/70 px-4 py-3 shadow-glow backdrop-blur-md md:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs uppercase tracking-wide text-slate-400">Support</p>
              <p className="mt-1 font-space text-xl font-semibold text-white">Real humans, not bots</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

