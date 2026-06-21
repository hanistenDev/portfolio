"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { handleSectionNav } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full border border-transparent px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled &&
            "border-border bg-background/70 shadow-[0_8px_40px_-24px_var(--glow)] backdrop-blur-xl"
        )}
      >
        <a
          href="#top"
          onClick={(event) => handleSectionNav(event, "#top", () => setOpen(false))}
          className="text-sm font-semibold tracking-tight"
          aria-label="Back to top"
        >
          {siteConfig.name}
          <span className="text-accent-soft">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleSectionNav(event, link.href)}
              className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(event) => handleSectionNav(event, "#contact", () => setOpen(false))}
            className="hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="absolute top-20 w-[calc(100%-2rem)] max-w-5xl rounded-3xl border border-border bg-background/95 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) =>
                  handleSectionNav(event, link.href, () => setOpen(false))
                }
                className="rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(event) =>
                handleSectionNav(event, "#contact", () => setOpen(false))
              }
              className="mt-1 rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
            >
              Get in touch
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
