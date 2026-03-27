import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator — Pretty Print, Minify & Validate JSON Online",
  description:
    "Format, pretty-print, minify, and validate JSON data online with detailed error messages. Free JSON beautifier tool that runs entirely in your browser — no data leaves your device.",
  openGraph: {
    title: "JSON Formatter & Validator — Pretty Print JSON Online",
    description:
      "Pretty-print, minify, and validate JSON with detailed error messages. Free online tool.",
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
            name: "SnapTools JSON Formatter & Validator",
            url: "https://snaptools-seven.vercel.app/tools/json-formatter",
            description:
              "Format, pretty-print, minify, and validate JSON data with error messages.",
            applicationCategory: "DeveloperApplication",
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
