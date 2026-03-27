import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <span>⚡</span>
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                SnapTools
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Free online tools that run entirely in your browser. No data ever leaves your device.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Popular Tools
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tools/qr-code-generator" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  QR Code Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/password-generator" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Password Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/json-formatter" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  JSON Formatter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              More Tools
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tools/word-counter" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Word Counter
                </Link>
              </li>
              <li>
                <Link href="/tools/color-picker" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Color Picker
                </Link>
              </li>
              <li>
                <Link href="/tools/base64-encoder" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Base64 Encoder
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 SnapTools. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
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
