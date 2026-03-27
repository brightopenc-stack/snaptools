"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const sentences = trimmed ? (trimmed.match(/[.!?]+/g) || []).length || (trimmed.length > 0 ? 1 : 0) : 0;
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(Boolean).length : 0;
    const readingTime = Math.max(1, Math.ceil(words / 200));
    return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime };
  }, [text]);

  const statItems = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.chars },
    { label: "No Spaces", value: stats.charsNoSpaces },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Reading Time", value: `${stats.readingTime} min` },
  ];

  return (
    <ToolLayout
      title="Word & Character Counter"
      description="Count words, characters, sentences, and estimate reading time for any text."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {statItems.map((s) => (
            <div
              key={s.label}
              className="text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {s.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here..."
          rows={12}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base resize-y"
        />

        <button
          onClick={() => setText("")}
          className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700 rounded-xl transition-colors"
        >
          Clear
        </button>
      </div>
    </ToolLayout>
  );
}
