import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Converter — Transform Text to Uppercase, Lowercase, Title Case & More",
  description:
    "Convert text between uppercase, lowercase, title case, sentence case, camelCase, snake_case, and kebab-case instantly. Free online case converter for developers, writers, and students.",
  openGraph: {
    title: "Case Converter — Transform Text Case Online",
    description:
      "Convert text between uppercase, lowercase, title case, camelCase, snake_case, and more.",
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
            name: "SnapTools Case Converter",
            url: "https://snaptools-seven.vercel.app/tools/case-converter",
            description:
              "Convert text between uppercase, lowercase, title case, camelCase, snake_case, and kebab-case.",
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
