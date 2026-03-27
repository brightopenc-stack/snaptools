import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Free Placeholder Text Generator Online",
  description:
    "Generate Lorem Ipsum placeholder text by paragraphs, sentences, or words with customizable count. Perfect for mockups, wireframes, and design projects. Free online Lorem Ipsum tool.",
  openGraph: {
    title: "Lorem Ipsum Generator — Placeholder Text Online",
    description:
      "Generate customizable Lorem Ipsum placeholder text in paragraphs, sentences, or words.",
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
            name: "SnapTools Lorem Ipsum Generator",
            url: "https://snaptools-seven.vercel.app/tools/lorem-ipsum-generator",
            description:
              "Generate Lorem Ipsum placeholder text by paragraphs, sentences, or words.",
            applicationCategory: "DesignApplication",
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
