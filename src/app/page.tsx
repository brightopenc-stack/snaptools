"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "@/lib/tools";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filtered = tools.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="py-16 sm:py-24 text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Free Online Tools,{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Instantly
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Fast, private, and free. Every tool runs entirely in your browser — no data ever leaves your device.
        </p>
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-base transition"
            />
          </div>
        </div>
      </section>

      {/* Tool Grid */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-3xl mb-3">{tool.icon}</div>
              <h2 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {tool.description}
              </p>
              <span className="mt-3 inline-block text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {tool.category}
              </span>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            No tools found matching &ldquo;{search}&rdquo;
          </p>
        )}
      </section>
    </main>
  );
}
