import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Color Picker & Converter — HEX RGB HSL Converter",
  description: "Pick colors and convert between HEX, RGB, and HSL formats instantly. Visual color preview. Free online tool.",
  openGraph: { title: "Color Picker & Converter", description: "Pick colors and convert between HEX, RGB, and HSL formats." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
