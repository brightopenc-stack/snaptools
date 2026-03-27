"use client";

import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import ToolLayout from "@/components/ToolLayout";
import FAQ from "@/components/FAQ";
import type { FAQItem } from "@/components/FAQ";

const faqItems: FAQItem[] = [
  {
    question: "Is this QR code generator completely free?",
    answer:
      "Yes! This QR code generator is 100% free with no limits. There's no signup, no watermark, and no hidden fees. Generate as many QR codes as you need.",
  },
  {
    question: "Can I download the QR code as an image?",
    answer:
      "Absolutely. Click the \"Download PNG\" button to save your QR code as a high-quality PNG image that you can use in print materials, websites, presentations, or anywhere else.",
  },
  {
    question: "What can I encode in a QR code?",
    answer:
      "You can encode any text, URL, email address, phone number, Wi-Fi credentials, or any other string of characters. QR codes support up to about 4,000 characters of text.",
  },
  {
    question: "Is my data safe when generating QR codes?",
    answer:
      "Yes. This tool runs entirely in your browser — no data is ever sent to a server. Your text and generated QR codes stay on your device, ensuring complete privacy.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function QRCodeGenerator() {
  const [text, setText] = useState("https://snaptools.dev");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && text.trim()) {
      QRCode.toCanvas(canvasRef.current, text, {
        width: 280,
        margin: 2,
        color: { dark: "#000000", light: "#ffffff" },
      });
    }
  }, [text]);

  const download = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <ToolLayout
      title="QR Code Generator"
      description="Generate QR codes from any text or URL. Download as PNG instantly."
      afterContent={
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <FAQ items={faqItems} />
        </>
      }
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Text or URL</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or URL..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="bg-white p-4 rounded-xl inline-block">
            <canvas ref={canvasRef} />
          </div>
          <button
            onClick={download}
            disabled={!text.trim()}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium rounded-xl transition-colors"
          >
            Download PNG
          </button>
        </div>
      </div>
    </ToolLayout>
  );
}
