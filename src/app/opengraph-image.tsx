import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SnapTools — Free Online Tools That Work Instantly";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0a0a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
            }}
          >
            ⚡
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            SnapTools
          </div>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#a5b4fc",
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Free Online Tools That Work Instantly
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "800px",
          }}
        >
          {[
            "QR Codes",
            "Passwords",
            "JSON",
            "Colors",
            "Base64",
            "Words",
            "Case",
            "Lorem Ipsum",
          ].map((tool) => (
            <div
              key={tool}
              style={{
                padding: "10px 20px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#e0e7ff",
                fontSize: "18px",
              }}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
