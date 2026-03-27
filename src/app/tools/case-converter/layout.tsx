import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Case Converter — Transform Text Case Online",
  description: "Convert text between uppercase, lowercase, title case, sentence case, camelCase, snake_case, and kebab-case. Free online tool.",
  openGraph: { title: "Case Converter", description: "Convert text between uppercase, lowercase, title case, camelCase, and more." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
