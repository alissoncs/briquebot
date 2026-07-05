import { ImageResponse } from "next/og";

export const alt = "Briquebot.io — Cobre por anúncios no seu grupo de WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #f5f3ff 0%, #ffffff 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#7C3AED",
              color: "white",
              fontSize: 40,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            B
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, color: "#0f172a" }}>
            <span>Briquebot</span>
            <span style={{ color: "#7C3AED" }}>.io</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 66, fontWeight: 800, lineHeight: 1.05, maxWidth: 1000 }}>
            <span style={{ color: "#0f172a" }}>Seu grupo de WhatsApp vale dinheiro.</span>
            <span style={{ color: "#7C3AED" }}>Comece a receber por isso.</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#475569", maxWidth: 940 }}>
            Cobre por anúncio via PIX · aprove com um toque · sem risco de ban.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Pill bg="#25D366" label="WhatsApp" />
          <Pill bg="#32BCAD" label="PIX" />
          <Pill bg="#F59E0B" label="Sem mensalidade" />
        </div>
      </div>
    ),
    { ...size }
  );
}

function Pill({ bg, label }: { bg: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        background: bg,
        color: "white",
        fontSize: 26,
        fontWeight: 700,
        padding: "8px 22px",
        borderRadius: 999,
      }}
    >
      {label}
    </div>
  );
}
