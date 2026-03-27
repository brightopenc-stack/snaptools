"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";
import FAQ from "@/components/FAQ";
import type { FAQItem } from "@/components/FAQ";

const faqItems: FAQItem[] = [
  {
    question: "How secure are the generated passwords?",
    answer:
      "Very secure. This tool uses the Web Crypto API (crypto.getRandomValues) for true cryptographic randomness. A 16-character password with all character types has over 100 bits of entropy, making it virtually uncrackable by brute force.",
  },
  {
    question: "Is my generated password stored or sent anywhere?",
    answer:
      "No. Everything runs 100% in your browser. No passwords are ever transmitted to a server, logged, or stored. Once you close or refresh the page, the password is gone.",
  },
  {
    question: "What password length should I use?",
    answer:
      "We recommend at least 16 characters for strong security. For critical accounts (banking, email), use 20+ characters. The strength meter on the tool shows you the estimated security level in real time.",
  },
  {
    question: "Can I generate passwords without special characters?",
    answer:
      "Yes! Use the checkboxes to toggle uppercase letters, lowercase letters, numbers, and symbols on or off. Some websites restrict certain special characters, so you can customize to fit any requirements.",
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

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    let chars = "";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (!chars) {
      setPassword("");
      return;
    }
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    setPassword(Array.from(arr, (v) => chars[v % chars.length]).join(""));
    setCopied(false);
  }, [length, uppercase, lowercase, numbers, symbols]);

  const copy = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const strength = (() => {
    let pool = 0;
    if (uppercase) pool += 26;
    if (lowercase) pool += 26;
    if (numbers) pool += 10;
    if (symbols) pool += 26;
    const entropy = Math.log2(pool || 1) * length;
    if (entropy < 40) return { label: "Weak", color: "text-red-500", bg: "bg-red-500", pct: 25 };
    if (entropy < 60) return { label: "Fair", color: "text-yellow-500", bg: "bg-yellow-500", pct: 50 };
    if (entropy < 80) return { label: "Strong", color: "text-blue-500", bg: "bg-blue-500", pct: 75 };
    return { label: "Very Strong", color: "text-green-500", bg: "bg-green-500", pct: 100 };
  })();

  return (
    <ToolLayout
      title="Password Generator"
      description="Create strong, secure passwords with customizable length and character types."
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
        {/* Output */}
        <div className="relative">
          <input
            type="text"
            readOnly
            value={password}
            placeholder="Click Generate to create a password"
            className="w-full px-4 py-3 pr-20 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 font-mono text-base"
          />
          {password && (
            <button
              onClick={copy}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-sm bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>

        {/* Strength bar */}
        {password && (
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500">Strength</span>
              <span className={strength.color}>{strength.label}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${strength.bg}`}
                style={{ width: `${strength.pct}%` }}
              />
            </div>
          </div>
        )}

        {/* Length */}
        <div>
          <label className="flex justify-between text-sm font-medium mb-2">
            <span>Length</span>
            <span className="text-gray-500">{length}</span>
          </label>
          <input
            type="range"
            min={4}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Uppercase (A-Z)", checked: uppercase, set: setUppercase },
            { label: "Lowercase (a-z)", checked: lowercase, set: setLowercase },
            { label: "Numbers (0-9)", checked: numbers, set: setNumbers },
            { label: "Symbols (!@#...)", checked: symbols, set: setSymbols },
          ].map((opt) => (
            <label
              key={opt.label}
              className="flex items-center gap-2 text-sm cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={opt.checked}
                onChange={(e) => opt.set(e.target.checked)}
                className="rounded accent-blue-600"
              />
              {opt.label}
            </label>
          ))}
        </div>

        <button
          onClick={generate}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
        >
          Generate Password
        </button>
      </div>
    </ToolLayout>
  );
}
