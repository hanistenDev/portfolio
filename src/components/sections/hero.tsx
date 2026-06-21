"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { heroTitles, siteConfig, socialLinks } from "@/content/site";
import { handleSectionNav } from "@/lib/scroll";

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((value) => (value + 1) % heroTitles.length),
      3200
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="aurora" />
      <div className="grid-fade absolute inset-0 opacity-60" />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-3xl flex-col gap-7"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface-muted/50 px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to junior & full-stack developer roles
          </span>

          <h1 className="text-4xl font-semibold leading-[1.3] tracking-tight sm:text-6xl">
            <span className="block h-[1.3em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={heroTitles[index]}
                  initial={reduceMotion ? false : { y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={reduceMotion ? undefined : { y: "-110%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="block leading-[1.3] text-gradient"
                >
                  {heroTitles[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block leading-[1.15] text-muted">
              building modern web experiences
            </span>
          </h1>

          <p className="inline-flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent-soft" />
            Based in {siteConfig.location}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              onClick={(event) => handleSectionNav(event, "#work")}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              onClick={(event) => handleSectionNav(event, "#contact")}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
            >
              Contact
            </a>

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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
