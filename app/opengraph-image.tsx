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
          background: "#0b1912",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#00d068",
              color: "#061209",
              fontSize: 40,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            B
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, color: "#edfaf2" }}>
            <span>Briquebot</span>
            <span style={{ color: "#00d068" }}>.io</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 66, fontWeight: 800, lineHeight: 1.05, maxWidth: 1000 }}>
            <span style={{ color: "#edfaf2" }}>Seu grupo de WhatsApp vale dinheiro.</span>
            <span style={{ color: "#00d068" }}>Comece a receber por isso.</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#6b9e7b", maxWidth: 940 }}>
            Cobre por anúncio via PIX · aprove com um toque · sem risco de ban.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Pill bg="#25D366" fg="#061209" label="WhatsApp" />
          <Pill bg="#00d068" fg="#061209" label="PIX" />
          <Pill bg="#ffd100" fg="#0b1912" label="Sem mensalidade" />
        </div>
      </div>
    ),
    { ...size }
  );
}

function Pill({ bg, fg, label }: { bg: string; fg: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        background: bg,
        color: fg,
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
