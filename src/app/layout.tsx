import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hanisten.dev"),
  title: {
    default: "Hanisten — Application Developer",
    template: "%s — Hanisten",
  },
  description:
    "Application developer based in Zürich building modern, user-centered web applications. Practical experience from Sunrise, UCCP DataVision and Wistho.",
  keywords: [
    "Application Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Zürich",
  ],
  openGraph: {
    title: "Hanisten — Application Developer",
    description:
      "Application developer based in Zürich building modern, user-centered web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
