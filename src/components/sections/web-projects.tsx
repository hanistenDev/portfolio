import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { IconCard } from "@/components/ui/icon-card";
import { webProjectHighlights } from "@/content/site";

export function WebProjects() {
  return (
    <Section id="experience">
      <div className="flex flex-col gap-8">
        <Reveal className="flex max-w-2xl flex-col gap-4">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            <span className="h-px w-6 bg-accent-soft/60" />
            Additional Web Projects
          </span>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Practical frontend experience beyond the apprenticeship.
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Alongside my apprenticeship, I have worked on selected web projects
            for local businesses. These projects helped me gain practical
            experience in responsive frontend development, user experience,
            performance optimization and reliable implementation.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {webProjectHighlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <IconCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
