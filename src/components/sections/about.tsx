import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { IconCard } from "@/components/ui/icon-card";
import { capabilities } from "@/content/site";

const experience = [
  {
    org: "Sunrise",
    role: "Application Development Apprenticeship",
    note: "Practical software development in a professional engineering environment.",
  },
  {
    org: "Wistho",
    role: "Co-founder & Web Developer",
    note: "Planning, designing and building responsive websites for local businesses.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
              <span className="h-px w-6 bg-accent-soft/60" />
              About
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A developer focused on clean, user-centered software.
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Through my apprenticeship at Sunrise and selected web projects,
              I&apos;ve gained hands-on experience building modern,
              user-centered applications. My approach blends clean code practices
              with purposeful design and pragmatic problem-solving.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-3">
            {experience.map((item) => (
              <div
                key={item.org}
                className="flex flex-col gap-1 rounded-2xl border border-border bg-surface/40 p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium tracking-tight">{item.role}</span>
                  <span className="text-sm leading-relaxed text-muted">
                    {item.note}
                  </span>
                </div>
                <span className="shrink-0 text-sm font-medium text-accent-soft">
                  {item.org}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
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
