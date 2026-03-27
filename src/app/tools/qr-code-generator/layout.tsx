import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "QR Code Generator — Free Online QR Code Maker",
  description: "Generate QR codes from any text or URL instantly. Download as PNG. Free, fast, and private — runs entirely in your browser.",
  openGraph: { title: "QR Code Generator", description: "Generate QR codes from any text or URL. Download as PNG instantly." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
