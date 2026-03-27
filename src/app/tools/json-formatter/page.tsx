"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FAQ from "@/components/FAQ";
import type { FAQItem } from "@/components/FAQ";

const faqItems: FAQItem[] = [
  {
    question: "What does a JSON formatter do?",
    answer:
      "A JSON formatter takes raw or minified JSON data and reformats it with proper indentation and line breaks, making it easy to read and debug. This tool also validates your JSON and catches syntax errors.",
  },
  {
    question: "Is my JSON data safe when using this tool?",
    answer:
      "Yes. All formatting and validation happens entirely in your browser. Your JSON data is never sent to any server or stored anywhere. It's completely private.",
  },
  {
    question: "Can I minify JSON with this tool?",
    answer:
      "Yes! Click the \"Minify\" button to compress your JSON by removing all unnecessary whitespace. This is useful for reducing payload size in APIs and configuration files.",
  },
  {
    question: "What JSON errors does the validator detect?",
    answer:
      "The validator catches all JSON syntax errors including missing commas, unclosed brackets, invalid strings, trailing commas, and other common mistakes. Error messages pinpoint the exact issue.",
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

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
    setCopied(false);
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
    setCopied(false);
  };

  const validate = () => {
    try {
      JSON.parse(input);
      setError("");
      setOutput("✅ Valid JSON");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout
      title="JSON Formatter & Validator"
      description="Pretty-print, minify, and validate JSON with detailed error messages."
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
          <label className="block text-sm font-medium mb-2">Input JSON</label>
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            placeholder='{"key": "value"}'
            rows={8}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-y"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={format}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
          >
            Format
          </button>
          <button
            onClick={minify}
            className="px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium rounded-xl transition-colors"
          >
            Minify
          </button>
          <button
            onClick={validate}
            className="px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium rounded-xl transition-colors"
          >
            Validate
          </button>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm font-mono">
            ❌ {error}
          </div>
        )}

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
              rows={10}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 font-mono text-sm resize-y"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
