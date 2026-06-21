import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
        <span className="h-px w-6 bg-accent-soft/60" />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-balance text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
