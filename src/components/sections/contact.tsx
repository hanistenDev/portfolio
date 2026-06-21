"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, socialLinks } from "@/content/site";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <Section id="contact" className="bg-surface/30">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something."
            description="Open to junior software developer and full-stack developer roles. The quickest way to reach me is below."
          />

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <p className="inline-flex items-center gap-3 text-sm text-muted">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-muted/60 text-accent-soft">
                <MapPin className="h-4 w-4" />
              </span>
              {siteConfig.location}
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-3xl border border-border bg-surface/50 p-6 sm:p-8"
          >
            <Field label="Name">
              <input
                required
                type="text"
                value={form.name}
                disabled={status === "sending"}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60 disabled:opacity-60"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                disabled={status === "sending"}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60 disabled:opacity-60"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={4}
                value={form.message}
                disabled={status === "sending"}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me a little about the role or opportunity."
                className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60 disabled:opacity-60"
              />
            </Field>

            {status === "success" ? (
              <p className="text-sm text-emerald-400">
                Message sent. I&apos;ll get back to you soon.
              </p>
            ) : null}

            {status === "error" ? (
              <p className="text-sm text-red-400">{errorMessage}</p>
            ) : null}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-foreground/90">{label}</span>
      {children}
    </label>
  );
}
