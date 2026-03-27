import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SnapTools — Free Online Tools That Work Instantly",
    template: "%s | SnapTools",
  },
  description:
    "Free, fast, privacy-friendly online tools. QR codes, password generator, JSON formatter, color picker, and more — all running in your browser.",
  keywords: [
    "online tools",
    "free tools",
    "QR code generator",
    "password generator",
    "JSON formatter",
    "color picker",
    "base64",
    "word counter",
  ],
  metadataBase: new URL("https://snaptools.dev"),
  openGraph: {
    title: "SnapTools — Free Online Tools That Work Instantly",
    description:
      "Free, fast, privacy-friendly online tools running entirely in your browser.",
    type: "website",
    siteName: "SnapTools",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapTools — Free Online Tools That Work Instantly",
    description:
      "Free, fast, privacy-friendly online tools running entirely in your browser.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
