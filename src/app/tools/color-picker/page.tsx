"use client";

import { useState, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";
import FAQ from "@/components/FAQ";
import type { FAQItem } from "@/components/FAQ";

const faqItems: FAQItem[] = [
  {
    question: "How do I convert HEX to RGB or HSL?",
    answer:
      "Simply enter your HEX color code in the HEX input field or use the color picker. The RGB and HSL values update automatically in real time. You can also enter RGB or HSL values and see the other formats update instantly.",
  },
  {
    question: "What color formats does this tool support?",
    answer:
      "This tool supports HEX (e.g., #3b82f6), RGB (e.g., rgb(59, 130, 246)), and HSL (e.g., hsl(217, 91%, 60%)). All formats are interconvertible and update in real time.",
  },
  {
    question: "Can I copy color values to my clipboard?",
    answer:
      "Yes! Each color format has a \"Copy\" button that copies the value to your clipboard in one click. Use it to quickly paste colors into your CSS, design tool, or code editor.",
  },
  {
    question: "Is this color picker free to use?",
    answer:
      "Absolutely. This color picker and converter is 100% free with no limitations. It runs entirely in your browser with no ads, no signup, and no data collection.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function hexToRgb(hex: string) {
  const m = hex.replace("#", "").match(/.{2}/g);
  if (!m || m.length < 3) return { r: 0, g: 0, b: 0 };
  return { r: parseInt(m[0], 16), g: parseInt(m[1], 16), b: parseInt(m[2], 16) };
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToRgb(h: number, s: number, l: number) {
  h /= 360; s /= 100; l /= 100;
  if (s === 0) { const v = Math.round(l * 255); return { r: v, g: v, b: v }; }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return {
    r: Math.round(hue2rgb(p, q, h + 1/3) * 255),
    g: Math.round(hue2rgb(p, q, h) * 255),
    b: Math.round(hue2rgb(p, q, h - 1/3) * 255),
  };
}

export default function ColorPicker() {
  const [hex, setHex] = useState("#3b82f6");
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hsl, setHsl] = useState({ h: 217, s: 91, l: 60 });
  const [copied, setCopied] = useState("");

  const updateFromHex = (h: string) => {
    setHex(h);
    const { r, g, b } = hexToRgb(h);
    setRgb({ r, g, b });
    setHsl(rgbToHsl(r, g, b));
  };

  const updateFromRgb = (r: number, g: number, b: number) => {
    setRgb({ r, g, b });
    setHex(rgbToHex(r, g, b));
    setHsl(rgbToHsl(r, g, b));
  };

  const updateFromHsl = (h: number, s: number, l: number) => {
    setHsl({ h, s, l });
    const { r, g, b } = hslToRgb(h, s, l);
    setRgb({ r, g, b });
    setHex(rgbToHex(r, g, b));
  };

  const copy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <ToolLayout
      title="Color Picker & Converter"
      description="Pick colors and convert between HEX, RGB, and HSL formats instantly."
      afterContent={
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <FAQ items={faqItems} />
        </>
      }
    >
      <div className="space-y-6">
        {/* Preview */}
        <div className="flex items-center gap-4">
          <div
            className="w-24 h-24 rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-inner"
            style={{ backgroundColor: hex }}
          />
          <input
            type="color"
            value={hex}
            onChange={(e) => updateFromHex(e.target.value)}
            className="w-12 h-12 rounded-lg cursor-pointer border-0 bg-transparent"
          />
        </div>

        {/* HEX */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">HEX</label>
            <button onClick={() => copy(hex, "hex")} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              {copied === "hex" ? "Copied!" : "Copy"}
            </button>
          </div>
          <input
            type="text"
            value={hex}
            onChange={(e) => {
              const v = e.target.value;
              setHex(v);
              if (/^#[0-9a-fA-F]{6}$/.test(v)) updateFromHex(v);
            }}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* RGB */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">RGB</label>
            <button onClick={() => copy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, "rgb")} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              {copied === "rgb" ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {(["r", "g", "b"] as const).map((c) => (
              <div key={c}>
                <label className="text-xs text-gray-500 uppercase">{c}</label>
                <input
                  type="number"
                  min={0}
                  max={255}
                  value={rgb[c]}
                  onChange={(e) => {
                    const val = Math.max(0, Math.min(255, Number(e.target.value)));
                    updateFromRgb(
                      c === "r" ? val : rgb.r,
                      c === "g" ? val : rgb.g,
                      c === "b" ? val : rgb.b
                    );
                  }}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* HSL */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">HSL</label>
            <button onClick={() => copy(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`, "hsl")} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              {copied === "hsl" ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {([
              { key: "h" as const, label: "H", max: 360 },
              { key: "s" as const, label: "S", max: 100 },
              { key: "l" as const, label: "L", max: 100 },
            ]).map(({ key, label, max }) => (
              <div key={key}>
                <label className="text-xs text-gray-500 uppercase">{label}{key !== "h" ? "%" : "°"}</label>
                <input
                  type="number"
                  min={0}
                  max={max}
                  value={hsl[key]}
                  onChange={(e) => {
                    const val = Math.max(0, Math.min(max, Number(e.target.value)));
                    updateFromHsl(
                      key === "h" ? val : hsl.h,
                      key === "s" ? val : hsl.s,
                      key === "l" ? val : hsl.l
                    );
                  }}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
