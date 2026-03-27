import type { MetadataRoute } from "next";

const BASE_URL = "https://snaptools-seven.vercel.app";

const tools = [
  "qr-code-generator",
  "password-generator",
  "json-formatter",
  "color-picker",
  "base64-encoder",
  "word-counter",
  "case-converter",
  "lorem-ipsum-generator",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const toolEntries: MetadataRoute.Sitemap = tools.map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: new Date("2026-03-27"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-03-27"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...toolEntries,
  ];
}
