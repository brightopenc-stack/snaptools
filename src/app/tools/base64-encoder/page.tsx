"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

export default function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const process = () => {
    setError("");
    setCopied(false);
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
    } catch {
      setError(mode === "encode" ? "Failed to encode text." : "Invalid Base64 string.");
      setOutput("");
    }
  };

  const swap = () => {
    setInput(output);
    setOutput("");
    setMode((m) => (m === "encode" ? "decode" : "encode"));
    setError("");
    setCopied(false);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout
      title="Base64 Encode/Decode"
      description="Encode text to Base64 or decode Base64 back to readable text."
    >
      <div className="space-y-6">
        {/* Mode toggle */}
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
          {(["encode", "decode"] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setError(""); setOutput(""); setCopied(false); }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                mode === m
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {m === "encode" ? "Encode" : "Decode"}
            </button>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {mode === "encode" ? "Plain Text" : "Base64 String"}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."}
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-y"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={process}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
          >
            {mode === "encode" ? "Encode" : "Decode"}
          </button>
          {output && (
            <button
              onClick={swap}
              className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors text-sm"
            >
              ↕ Swap
            </button>
          )}
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
            ❌ {error}
          </div>
        )}

        {output && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">
                {mode === "encode" ? "Base64 Output" : "Decoded Text"}
              </label>
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
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 font-mono text-sm resize-y"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
