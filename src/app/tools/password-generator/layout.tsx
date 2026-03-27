import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Password Generator — Create Strong Secure Passwords",
  description: "Generate strong, random passwords with customizable length and character types. Uses cryptographic randomness. Free and private.",
  openGraph: { title: "Password Generator", description: "Create strong, secure passwords with customizable options." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
