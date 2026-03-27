import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strong Password Generator — Create Secure Random Passwords Free",
  description:
    "Generate strong, random, and secure passwords with customizable length and character types. Uses cryptographic randomness. 100% free and private — nothing is stored or sent anywhere.",
  openGraph: {
    title: "Strong Password Generator — Secure & Free",
    description:
      "Create strong, secure passwords with customizable length and character options. Uses cryptographic randomness.",
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
            name: "SnapTools Password Generator",
            url: "https://snaptools-seven.vercel.app/tools/password-generator",
            description:
              "Generate strong, random passwords with customizable length and character types.",
            applicationCategory: "SecurityApplication",
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
