import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Word & Character Counter — Count Words, Chars, Sentences",
  description: "Count words, characters, sentences, paragraphs, and estimate reading time for any text. Free online tool.",
  openGraph: { title: "Word & Character Counter", description: "Count words, characters, sentences, and estimate reading time." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
