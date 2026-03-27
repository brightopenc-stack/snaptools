import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Picker & Converter — HEX to RGB to HSL Free Online Tool",
  description:
    "Pick any color and instantly convert between HEX, RGB, and HSL formats. Visual color preview with one-click copy. Free online color converter for designers and developers.",
  openGraph: {
    title: "Color Picker & Converter — HEX RGB HSL",
    description:
      "Pick colors and convert between HEX, RGB, and HSL formats instantly. Free visual color tool.",
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
            name: "SnapTools Color Picker & Converter",
            url: "https://snaptools-seven.vercel.app/tools/color-picker",
            description:
              "Pick colors and convert between HEX, RGB, and HSL formats with visual preview.",
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
