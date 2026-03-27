"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/60 dark:bg-gray-950/60 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/[0.06]">
      {/* Subtle gradient line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="text-2xl">⚡</span>
          <span className="gradient-text">SnapTools</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hidden sm:block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            All Tools
          </Link>
          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
