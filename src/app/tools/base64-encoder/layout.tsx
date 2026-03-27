import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encode & Decode Online — Free Base64 Converter Tool",
  description:
    "Encode text to Base64 or decode Base64 strings back to readable text instantly. Supports full Unicode. Free online Base64 converter — no data leaves your browser.",
  openGraph: {
    title: "Base64 Encode & Decode Online",
    description:
      "Encode text to Base64 or decode Base64 back to readable text. Supports Unicode. Free tool.",
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
            name: "SnapTools Base64 Encoder/Decoder",
            url: "https://snaptools-seven.vercel.app/tools/base64-encoder",
            description:
              "Encode text to Base64 or decode Base64 strings back to readable text. Supports Unicode.",
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
