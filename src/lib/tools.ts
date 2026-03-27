export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
  category: string;
}

export const tools: Tool[] = [
  {
    name: "QR Code Generator",
    slug: "qr-code-generator",
    description: "Generate QR codes from any text or URL. Download as PNG instantly.",
    icon: "📱",
    category: "Generator",
  },
  {
    name: "Password Generator",
    slug: "password-generator",
    description: "Create strong, secure passwords with customizable length and character types.",
    icon: "🔐",
    category: "Security",
  },
  {
    name: "Word & Character Counter",
    slug: "word-counter",
    description: "Count words, characters, sentences, and estimate reading time for any text.",
    icon: "📝",
    category: "Text",
  },
  {
    name: "Case Converter",
    slug: "case-converter",
    description: "Convert text between uppercase, lowercase, title case, camelCase, snake_case, and more.",
    icon: "🔤",
    category: "Text",
  },
  {
    name: "JSON Formatter & Validator",
    slug: "json-formatter",
    description: "Pretty-print, format, and validate JSON with detailed error messages.",
    icon: "{ }",
    category: "Developer",
  },
  {
    name: "Color Picker & Converter",
    slug: "color-picker",
    description: "Pick colors and convert between HEX, RGB, and HSL formats instantly.",
    icon: "🎨",
    category: "Design",
  },
  {
    name: "Base64 Encode/Decode",
    slug: "base64-encoder",
    description: "Encode text to Base64 or decode Base64 back to readable text.",
    icon: "🔁",
    category: "Developer",
  },
  {
    name: "Lorem Ipsum Generator",
    slug: "lorem-ipsum-generator",
    description: "Generate placeholder text in paragraphs, sentences, or words.",
    icon: "📄",
    category: "Text",
  },
];
