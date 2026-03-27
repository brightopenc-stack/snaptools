"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { tools } from "@/lib/tools";

const categories = ["All", ...Array.from(new Set(tools.map((t) => t.category)))];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return tools.filter((t) => {
      const matchesSearch =
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || t.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="flex-1 relative overflow-hidden">
      {/* Animated gradient orbs background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 dark:bg-blue-500/10 blur-[100px]" />
        <div className="animate-float-delayed absolute -top-20 -right-40 h-[400px] w-[400px] rounded-full bg-violet-500/20 dark:bg-violet-500/10 blur-[100px]" />
        <div className="animate-float absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/15 dark:bg-indigo-500/8 blur-[100px]" />
      </div>

      {/* Hero */}
      <section className="relative py-20 sm:py-32 text-center px-4">
        <div className="animate-slide-up">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
            Free Online Tools,{" "}
            <span className="gradient-text">Instantly</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Fast, private, and free. Every tool runs entirely in your browser — no data ever leaves your device.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 flex items-center justify-center gap-6 sm:gap-10 text-sm sm:text-base text-gray-500 dark:text-gray-400 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
            8 Tools
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
            100% Free
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
            Zero Data Collection
          </span>
        </div>

        {/* Search */}
        <div className="mt-10 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}>
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-0 group-focus-within:opacity-20 blur transition-opacity duration-300" />
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 text-base transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="relative px-4 sm:px-6 max-w-6xl mx-auto -mt-4 mb-8">
        <div className="flex flex-wrap items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Tool Grid */}
      <section className="relative pb-20 sm:pb-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((tool, i) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className={`glass-card group rounded-2xl p-6 block stagger-${Math.min(i + 1, 8)}`}
            >
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {tool.icon}
              </div>
              <h2 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {tool.name}
              </h2>
              <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {tool.description}
              </p>
              <span className="mt-3 inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100/80 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-transparent dark:border-white/5">
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
