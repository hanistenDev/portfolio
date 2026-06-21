import type { MouseEvent } from "react";

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 96;
  const top =
    element.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top, behavior: "smooth" });
}

export function handleSectionNav(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavigate?: () => void
) {
  if (!href.startsWith("#")) return;

  event.preventDefault();
  const id = href.slice(1);
  scrollToSection(id);
  onNavigate?.();
}
