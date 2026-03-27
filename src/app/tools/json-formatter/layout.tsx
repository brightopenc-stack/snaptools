import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "JSON Formatter & Validator — Pretty Print JSON Online",
  description: "Format, minify, and validate JSON with detailed error messages. Free online JSON tool that runs in your browser.",
  openGraph: { title: "JSON Formatter & Validator", description: "Pretty-print, minify, and validate JSON with error messages." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
