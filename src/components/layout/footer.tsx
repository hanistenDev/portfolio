import Link from "next/link";
import { socialLinks, siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 sm:px-8 md:grid-cols-[1fr_auto_auto] md:items-start md:gap-10">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">
            {siteConfig.name}
            <span className="text-accent-soft">.</span>
          </span>
          <span className="text-sm text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-3 md:justify-center">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted md:items-end">
          <Link
            href="/datenschutz"
            className="transition-colors hover:text-foreground"
          >
            Datenschutz
          </Link>
          <Link
            href="/impressum"
            className="transition-colors hover:text-foreground"
          >
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}
