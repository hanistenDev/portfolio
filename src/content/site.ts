import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  GitBranch,
  Globe,
  LineChart,
  Sparkles,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const siteConfig = {
  name: "Hanisten",
  role: "Application Developer",
  location: "Zürich, Switzerland",
  email: "hanisten.thivakaran06@gmail.com",
  github: "https://github.com/hanistenDev",
  linkedin: "https://www.linkedin.com/in/hanisten-thivakaran-765043327",
  wistho: "https://wistho.ch",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroTitles = [
  "Application Developer",
  "Full-Stack Developer",
  "Web Experience Builder",
  "UI-focused Engineer",
];

export const socialLinks: { label: string; href: string; icon: IconComponent }[] =
  [
    { label: "GitHub", href: siteConfig.github, icon: GithubIcon },
    { label: "LinkedIn", href: siteConfig.linkedin, icon: LinkedinIcon },
  ];

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    title: "Frontend Development",
    description: "React, Next.js, TypeScript",
    icon: Code2,
  },
  {
    title: "Backend & Data",
    description: "Node.js, MSSQL, MongoDB",
    icon: Database,
  },
  {
    title: "Languages",
    description: "JavaScript, Java, Python, SQL",
    icon: Terminal,
  },
  {
    title: "AI Fundamentals",
    description: "Daily use of LLMs and prompt engineering",
    icon: Sparkles,
  },
];

type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const webProjectHighlights: Highlight[] = [
  {
    title: "Custom Website Development",
    description:
      "Responsive websites for local businesses, built with modern web technologies.",
    icon: Globe,
  },
  {
    title: "Technical Optimization",
    description:
      "Performance tuning, responsive layouts and maintainable frontend implementation.",
    icon: LineChart,
  },
];

type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  focus: string;
  stack: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "UCCP DataVision — Frontend",
    category: "Data tooling",
    description:
      "Frontend interface for a comprehensive data tracking tool. Built with modern React patterns to provide an intuitive experience for real-time data visualization and analytics.",
    focus: "Performance, secure APIs, clean UX",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hanistenDev/uccp-frontend",
      },
    ],
  },
  {
    title: "UCCP DataVision — Backend",
    category: "API & data",
    description:
      "Backend API for the data tracking tool. Handles real-time data processing and authentication, and exposes secure endpoints for the frontend application.",
    focus: "Scalable architecture, secure APIs, real-time processing",
    stack: ["Node.js", "Express", "SQL Server"],
    links: [{ label: "GitHub", href: siteConfig.github }],
  },
  {
    title: "Wistho Website",
    category: "Web development",
    description:
      "A custom-built, fully responsive website for Wistho, presenting the company's services with a modern, user-friendly interface.",
    focus: "Modern design, responsive UX, performance",
    stack: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    links: [{ label: "Visit site", href: siteConfig.wistho }],
  },
];

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["HTML / CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    icon: Database,
    items: ["Node.js", "SQL", "MongoDB", "REST APIs", "Postman"],
  },
  {
    title: "Tooling",
    icon: GitBranch,
    items: ["Git", "GitHub", "VS Code", "Prompt Engineering"],
  },
];
