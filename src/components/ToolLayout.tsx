import Link from "next/link";
import AdPlaceholder from "./AdPlaceholder";

interface ToolLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  afterContent?: React.ReactNode;
}

export default function ToolLayout({ title, description, children, afterContent }: ToolLayoutProps) {
  return (
    <main className="flex-1 relative">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8 animate-slide-up">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-5 group"
          >
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Tools
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-lg">{description}</p>
        </div>
        <div className="relative rounded-2xl p-6 sm:p-8 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/60 dark:border-white/[0.06] shadow-sm animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "backwards" }}>
          {/* Gradient border glow on hover */}
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 opacity-0 transition-opacity duration-500" />
          {children}
        </div>
        {afterContent}
        <AdPlaceholder />
      </div>
    </main>
  );
}
