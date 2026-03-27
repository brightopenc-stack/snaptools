import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free QR Code Generator — Create & Download QR Codes Online",
  description:
    "Generate QR codes from any text, URL, or link instantly. Download as high-quality PNG for free. No signup required — runs 100% in your browser with full privacy.",
  openGraph: {
    title: "Free QR Code Generator — Create & Download QR Codes Online",
    description:
      "Generate QR codes from any text or URL. Download as PNG instantly. Free, fast, and private.",
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
            name: "SnapTools QR Code Generator",
            url: "https://snaptools-seven.vercel.app/tools/qr-code-generator",
            description:
              "Generate QR codes from any text or URL instantly. Download as PNG for free.",
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
