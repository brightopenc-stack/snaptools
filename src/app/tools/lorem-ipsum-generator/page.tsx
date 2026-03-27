"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FAQ from "@/components/FAQ";
import type { FAQItem } from "@/components/FAQ";

const faqItems: FAQItem[] = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is placeholder text used in the printing, typesetting, and design industries since the 1500s. It provides a natural-looking block of text for mockups and layouts without the distraction of meaningful content.",
  },
  {
    question: "Can I generate a specific number of words or paragraphs?",
    answer:
      "Yes! Use the mode toggle to switch between paragraphs, sentences, or words, then adjust the count slider to generate exactly the amount of placeholder text you need.",
  },
  {
    question: "Is this Lorem Ipsum generator free?",
    answer:
      "Completely free with no limits. Generate as much placeholder text as you need for your designs, wireframes, or development projects. No signup or account required.",
  },
  {
    question: "Can I copy the generated text?",
    answer:
      "Yes. Click the \"Copy\" button above the output to copy all generated Lorem Ipsum text to your clipboard instantly. Then paste it into your design tool, code editor, or document.",
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

const LOREM_WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(" ");

function generateWords(count: number): string {
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(LOREM_WORDS[i % LOREM_WORDS.length]);
  }
  return result.join(" ");
}

function generateSentence(): string {
  const len = 8 + Math.floor(Math.random() * 12);
  const words: string[] = [];
  for (let i = 0; i < len; i++) {
    words.push(LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]);
  }
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(" ") + ".";
}

function generateParagraph(): string {
  const count = 4 + Math.floor(Math.random() * 4);
  return Array.from({ length: count }, generateSentence).join(" ");
}

export default function LoremIpsumGenerator() {
  const [mode, setMode] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setCopied(false);
    if (mode === "paragraphs") {
      setOutput(Array.from({ length: count }, generateParagraph).join("\n\n"));
    } else if (mode === "sentences") {
      setOutput(Array.from({ length: count }, generateSentence).join(" "));
    } else {
      setOutput(generateWords(count));
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout
      title="Lorem Ipsum Generator"
      description="Generate placeholder text in paragraphs, sentences, or words."
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
        {/* Mode */}
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
          {(["paragraphs", "sentences", "words"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                mode === m
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Count */}
        <div>
          <label className="flex justify-between text-sm font-medium mb-2">
            <span>Count</span>
            <span className="text-gray-500">{count}</span>
          </label>
          <input
            type="range"
            min={1}
            max={mode === "words" ? 200 : mode === "sentences" ? 20 : 10}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        <button
          onClick={generate}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
        >
          Generate
        </button>

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
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-base resize-y"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
