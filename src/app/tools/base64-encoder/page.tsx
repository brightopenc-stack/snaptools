"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FAQ from "@/components/FAQ";
import type { FAQItem } from "@/components/FAQ";

const faqItems: FAQItem[] = [
  {
    question: "What is Base64 encoding?",
    answer:
      "Base64 is a method of encoding binary data into ASCII text. It's commonly used to embed images in HTML/CSS, transmit data in URLs, encode email attachments, and store binary data in JSON or XML formats.",
  },
  {
    question: "Does this tool support Unicode characters?",
    answer:
      "Yes! This Base64 encoder fully supports Unicode text including emojis, accented characters, Chinese/Japanese/Korean characters, and all other UTF-8 encoded text.",
  },
  {
    question: "Is Base64 encoding the same as encryption?",
    answer:
      "No. Base64 is an encoding scheme, not encryption. It converts data to a different representation but provides no security. Anyone can decode Base64 strings. For security, use proper encryption tools.",
  },
  {
    question: "Is my data private when using this tool?",
    answer:
      "Yes. All encoding and decoding happens locally in your browser. No data is ever sent to a server. Your text stays completely private on your device.",
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

export default function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const process = () => {
    setError("");
    setCopied(false);
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
    } catch {
      setError(mode === "encode" ? "Failed to encode text." : "Invalid Base64 string.");
      setOutput("");
    }
  };

  const swap = () => {
    setInput(output);
    setOutput("");
    setMode((m) => (m === "encode" ? "decode" : "encode"));
    setError("");
    setCopied(false);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout
      title="Base64 Encode/Decode"
      description="Encode text to Base64 or decode Base64 back to readable text."
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
        {/* Mode toggle */}
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
          {(["encode", "decode"] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setError(""); setOutput(""); setCopied(false); }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                mode === m
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {m === "encode" ? "Encode" : "Decode"}
            </button>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {mode === "encode" ? "Plain Text" : "Base64 String"}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."}
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-y"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={process}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
          >
            {mode === "encode" ? "Encode" : "Decode"}
          </button>
          {output && (
            <button
              onClick={swap}
              className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors text-sm"
            >
              ↕ Swap
            </button>
          )}
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
            ❌ {error}
          </div>
        )}

        {output && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">
                {mode === "encode" ? "Base64 Output" : "Decoded Text"}
              </label>
              <button
                onClick={copy}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <textarea
              readOnly
              value={output}
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 font-mono text-sm resize-y"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
