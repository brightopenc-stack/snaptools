import Link from "next/link";
import AdPlaceholder from "./AdPlaceholder";

interface ToolLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Tools
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg">{description}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          {children}
        </div>
        <AdPlaceholder />
      </div>
    </main>
  );
}
