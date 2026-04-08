"use client";

import { FormEvent, useMemo, useState } from "react";
import { MotionSection } from "@/components/MotionSection";
import { trackEvent } from "@/lib/gtag";

type FormState = {
  name: string;
  email: string;
  businessType: string;
  projectIdea: string;
  budget: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  businessType: "",
  projectIdea: "",
  budget: ""
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const apiBase = useMemo(() => process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000", []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          sourcePage: window.location.pathname
        })
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(data?.message || "Unable to submit form");
      }

      setStatus("Thanks. Your message was sent successfully.");
      trackEvent("form_submit", {
        form_name: "contact_form",
        business_type: form.businessType,
        budget: form.budget
      });
      setForm(initialState);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Submission failed. Please try again or contact us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <MotionSection className="wrapper">
        <p className="subtitle">Contact</p>
        <h1 className="title-xl">Let's Build Your Idea</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Share your project details and we will get back with a practical execution plan.
        </p>
      </MotionSection>

      <MotionSection className="wrapper py-6">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="panel">
            <h2 className="font-space text-2xl font-semibold">Contact Form</h2>
            <form className="mt-4 space-y-4" onSubmit={onSubmit}>
              <label className="block text-sm font-semibold text-slate-200">
                Name
                <input
                  className="mt-1 w-full rounded-lg border border-line bg-black/20 px-3 py-2"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  required
                />
              </label>

              <label className="block text-sm font-semibold text-slate-200">
                Email
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-line bg-black/20 px-3 py-2"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  required
                />
              </label>

              <label className="block text-sm font-semibold text-slate-200">
                Business Type
                <input
                  className="mt-1 w-full rounded-lg border border-line bg-black/20 px-3 py-2"
                  value={form.businessType}
                  onChange={(event) => setForm((prev) => ({ ...prev, businessType: event.target.value }))}
                  placeholder="Startup, clinic, restaurant, portfolio, etc."
                  required
                />
              </label>

              <label className="block text-sm font-semibold text-slate-200">
                Project Idea
                <textarea
                  className="mt-1 min-h-28 w-full rounded-lg border border-line bg-black/20 px-3 py-2"
                  value={form.projectIdea}
                  onChange={(event) => setForm((prev) => ({ ...prev, projectIdea: event.target.value }))}
                  required
                />
              </label>

              <label className="block text-sm font-semibold text-slate-200">
                Budget
                <select
                  className="mt-1 w-full rounded-lg border border-line bg-black/20 px-3 py-2"
                  value={form.budget}
                  onChange={(event) => setForm((prev) => ({ ...prev, budget: event.target.value }))}
                  required
                >
                  <option value="">Select budget</option>
                  <option value="Rs. 1999 - Rs. 3999">Rs. 1999 - Rs. 3999</option>
                  <option value="Rs. 4000 - Rs. 9999">Rs. 4000 - Rs. 9999</option>
                  <option value="Rs. 10000+">Rs. 10000+</option>
                </select>
              </label>

              <button disabled={submitting} className="btn-primary w-full">
                {submitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
            {status ? (
              <p className={`mt-3 text-sm ${status.startsWith("Thanks") ? "text-mint" : "text-amber-300"}`}>{status}</p>
            ) : null}
          </article>

          <article className="panel">
            <h2 className="font-space text-2xl font-semibold">Direct Contacts</h2>
            <div className="mt-4 space-y-3 text-slate-300">
              <p>
                Email:{" "}
                <a href="mailto:rbomma074@gmail.com" className="text-mint underline-offset-4 hover:underline">
                  rbomma074@gmail.com
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/916304679550"
                  className="text-mint underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/digitall_orbit?igsh=cnNndzUzMjVvMWJz"
                  className="text-mint underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  @digitall_orbit
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/company/digitalorbit2k26"
                  className="text-mint underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  digitalorbit2k26
                </a>
              </p>
              <p>Response Time: Usually within 24 hours.</p>
            </div>
          </article>
        </div>
      </MotionSection>
    </main>
  );
}
