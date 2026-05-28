import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — Services à domicile à Callian`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #0f766e 0%, #047857 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 18,
              background: "white",
              color: "#0f766e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
              fontWeight: 800,
            }}
          >
            D
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "0.05em",
            }}
          >
            DOMEA
          </div>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 20,
            maxWidth: 900,
          }}
        >
          Services à domicile à Callian
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Entretien · Grand ménage · Blanchisserie · Organisation
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            background: "white",
            color: "#0f766e",
            padding: "16px 28px",
            borderRadius: 999,
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          -50 % crédit d&apos;impôt immédiat
        </div>
      </div>
    ),
    { ...size },
  );
}
