import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-3xl px-6 py-32 sm:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              ← Back to portfolio
            </Link>
            <h1 className="text-3xl font-semibold tracking-tight">Impressum</h1>
          </div>

          <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-foreground">Verantwortlich</span>
              <span>{siteConfig.name}</span>
              <span>{siteConfig.location}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium text-foreground">Kontakt</span>
              <span>{siteConfig.email}</span>
            </div>

            <p>
              Diese Website ist eine persönliche Portfolio-Seite zur Darstellung
              beruflicher Projekte und Erfahrungen im Bereich Application
              Development.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
