"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200/40 dark:border-white/[0.06] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left text-base font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 ml-4 text-gray-400 dark:text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-4" : "max-h-0"}`}
      >
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="mt-12 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
      <h2 className="text-2xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
      <div className="rounded-2xl p-6 sm:p-8 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/60 dark:border-white/[0.06] shadow-sm">
        {items.map((item, i) => (
          <FAQAccordion key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
