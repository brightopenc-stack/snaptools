import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Placeholder Text Generator",
  description: "Generate Lorem Ipsum placeholder text in paragraphs, sentences, or words. Customizable count. Free online tool.",
  openGraph: { title: "Lorem Ipsum Generator", description: "Generate placeholder text in paragraphs, sentences, or words." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
