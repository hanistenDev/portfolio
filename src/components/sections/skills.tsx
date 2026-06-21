import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/content/site";

export function Skills() {
  return (
    <Section id="skills">
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I build with."
          description="Technologies I use regularly across frontend, backend and day-to-day development work."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-surface/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-muted/60 text-accent-soft">
                    <group.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-medium tracking-tight">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-surface-muted/40 px-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
