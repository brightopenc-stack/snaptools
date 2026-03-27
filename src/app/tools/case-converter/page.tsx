"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FAQ from "@/components/FAQ";
import type { FAQItem } from "@/components/FAQ";

const faqItems: FAQItem[] = [
  {
    question: "What text case formats does this tool support?",
    answer:
      "This tool supports UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and kebab-case. Simply paste your text and click the format you need.",
  },
  {
    question: "What is camelCase used for?",
    answer:
      "camelCase is widely used in programming for variable and function names in languages like JavaScript, Java, and TypeScript. It capitalizes the first letter of each word except the first, with no spaces or separators.",
  },
  {
    question: "What is the difference between snake_case and kebab-case?",
    answer:
      "snake_case uses underscores (_) between words and is common in Python and Ruby. kebab-case uses hyphens (-) and is common in URLs, CSS class names, and file names. Both use lowercase letters.",
  },
  {
    question: "Is this case converter free to use?",
    answer:
      "Yes, this tool is completely free with no limits. Convert as much text as you want. It runs in your browser, so your text stays private and is never sent to a server.",
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

const toTitleCase = (s: string) =>
  s.replace(/\w\S*/g, (t) => t[0].toUpperCase() + t.slice(1).toLowerCase());

const toSentenceCase = (s: string) =>
  s
    .toLowerCase()
    .replace(/(^\s*|[.!?]\s+)([a-z])/g, (_, p, c) => p + c.toUpperCase());

const toCamelCase = (s: string) =>
  s
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^[A-Z]/, (c) => c.toLowerCase());

const toSnakeCase = (s: string) =>
  s
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s\-]+/g, "_")
    .toLowerCase();

const toKebabCase = (s: string) =>
  s
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

const converters = [
  { label: "UPPERCASE", fn: (s: string) => s.toUpperCase() },
  { label: "lowercase", fn: (s: string) => s.toLowerCase() },
  { label: "Title Case", fn: toTitleCase },
  { label: "Sentence case", fn: toSentenceCase },
  { label: "camelCase", fn: toCamelCase },
  { label: "snake_case", fn: toSnakeCase },
  { label: "kebab-case", fn: toKebabCase },
];

export default function CaseConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [activeCase, setActiveCase] = useState("");
  const [copied, setCopied] = useState(false);

  const convert = (label: string, fn: (s: string) => string) => {
    setOutput(fn(input));
    setActiveCase(label);
    setCopied(false);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout
      title="Case Converter"
      description="Convert text between uppercase, lowercase, title case, camelCase, snake_case, and more."
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
          <label className="block text-sm font-medium mb-2">Input Text</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste text here..."
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base resize-y"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {converters.map(({ label, fn }) => (
            <button
              key={label}
              onClick={() => convert(label, fn)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeCase === label
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {output && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Output</label>
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
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-base resize-y"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
