import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto relative bg-gray-50/50 dark:bg-gray-950/50">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <span>⚡</span>
              <span className="gradient-text">SnapTools</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Free online tools that run entirely in your browser. No data ever leaves your device.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              Popular Tools
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tools/qr-code-generator" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  QR Code Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/password-generator" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  Password Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/json-formatter" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  JSON Formatter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              More Tools
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tools/word-counter" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  Word Counter
                </Link>
              </li>
              <li>
                <Link href="/tools/color-picker" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  Color Picker
                </Link>
              </li>
              <li>
                <Link href="/tools/base64-encoder" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  Base64 Encoder
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200/50 dark:border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © 2026 SnapTools. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400 dark:text-gray-500">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span className="cursor-default">Privacy</span>
            <span className="cursor-default">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
