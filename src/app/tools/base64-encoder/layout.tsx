import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Base64 Encode/Decode — Online Base64 Tool",
  description: "Encode text to Base64 or decode Base64 back to readable text. Supports Unicode. Free online tool.",
  openGraph: { title: "Base64 Encode/Decode", description: "Encode text to Base64 or decode Base64 back to readable text." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
