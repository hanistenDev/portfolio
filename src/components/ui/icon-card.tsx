import type { LucideIcon } from "lucide-react";

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function IconCard({ icon: Icon, title, description }: IconCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-colors duration-300 hover:border-accent/40">
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "var(--glow)" }}
      />
      <div className="relative flex flex-col gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-muted/60 text-accent-soft">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-medium tracking-tight">{title}</h3>
          <p className="text-sm leading-relaxed text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
}
