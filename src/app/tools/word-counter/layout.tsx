import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Counter & Character Counter — Count Words, Sentences, Reading Time",
  description:
    "Count words, characters (with and without spaces), sentences, paragraphs, and estimate reading time for any text. Free online word counter tool — perfect for essays, blog posts, and social media.",
  openGraph: {
    title: "Word & Character Counter Online",
    description:
      "Count words, characters, sentences, paragraphs, and estimate reading time. Free online tool.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "SnapTools Word & Character Counter",
            url: "https://snaptools-seven.vercel.app/tools/word-counter",
            description:
              "Count words, characters, sentences, paragraphs, and estimate reading time.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            browserRequirements: "Requires a modern web browser",
          }),
        }}
      />
      {children}
    </>
  );
}
