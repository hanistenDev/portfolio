import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-28 py-20 sm:scroll-mt-24 sm:py-24 lg:py-32", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">{children}</div>
    </section>
  );
}
