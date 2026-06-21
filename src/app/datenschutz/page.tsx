import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
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
            <h1 className="text-3xl font-semibold tracking-tight">Datenschutz</h1>
          </div>

          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted">
            <p>
              Diese Website dient der persönlichen Präsentation von{" "}
              {siteConfig.name} als Application Developer. Beim Besuch der Seite
              werden technisch notwendige Daten verarbeitet, die für den Betrieb
              der Website erforderlich sind.
            </p>
            <p>
              Wenn du das Kontaktformular nutzt, werden die von dir eingegebenen
              Angaben (Name, E-Mail-Adresse und Nachricht) ausschliesslich zur
              Bearbeitung deiner Anfrage verwendet.
            </p>
            <p>
              Für den Versand von Kontaktanfragen wird EmailJS eingesetzt. Die
              Übermittlung erfolgt nur, wenn du das Formular aktiv absendest.
            </p>
            <p>
              Bei Fragen zum Datenschutz kannst du mich über das Kontaktformular
              auf dieser Website erreichen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
