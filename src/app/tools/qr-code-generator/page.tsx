"use client";

import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import ToolLayout from "@/components/ToolLayout";

export default function QRCodeGenerator() {
  const [text, setText] = useState("https://snaptools.dev");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && text.trim()) {
      QRCode.toCanvas(canvasRef.current, text, {
        width: 280,
        margin: 2,
        color: { dark: "#000000", light: "#ffffff" },
      });
    }
  }, [text]);

  const download = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <ToolLayout
      title="QR Code Generator"
      description="Generate QR codes from any text or URL. Download as PNG instantly."
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Text or URL</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or URL..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="bg-white p-4 rounded-xl inline-block">
            <canvas ref={canvasRef} />
          </div>
          <button
            onClick={download}
            disabled={!text.trim()}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium rounded-xl transition-colors"
          >
            Download PNG
          </button>
        </div>
      </div>
    </ToolLayout>
  );
}
