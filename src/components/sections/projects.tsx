import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/content/site";

export function Projects() {
  return (
    <Section id="work" className="bg-surface/30">
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Selected work"
          title="Real projects, shipped end to end."
          description="A focused selection of applications I've designed and built — from frontend interfaces to the APIs and data behind them."
        />

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <article className="group relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-7 transition-colors duration-300 hover:border-accent/40 sm:p-9">
                <div
                  className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--glow)" }}
                />
                <div className="relative grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-10">
                  <span className="font-mono text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent-soft">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>

                    <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                      {project.description}
                    </p>

                    <p className="text-sm text-foreground/80">
                      <span className="text-muted">Focus — </span>
                      {project.focus}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-1">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-soft"
                        >
                          {link.label}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
