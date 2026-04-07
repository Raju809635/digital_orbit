import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Digital Orbit - Website Development and App Development India";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 15% 20%, rgba(34,211,238,0.28), transparent 28%), radial-gradient(circle at 82% 18%, rgba(99,102,241,0.28), transparent 24%), linear-gradient(135deg, #08101d 0%, #13223c 55%, #08101d 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px"
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #22d3ee, #5eead4)"
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700 }}>Digital Orbit</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "860px" }}>
          <div style={{ fontSize: 70, lineHeight: 1.05, fontWeight: 700 }}>
            Affordable Website Development and App Development in India
          </div>
          <div style={{ fontSize: 30, color: "#cbd5e1" }}>
            Startup websites, MVPs, mobile apps, and business websites built to help brands grow online.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: 24,
            color: "#dbeafe"
          }}
        >
          <div>Website Development</div>
          <div>App Development</div>
          <div>Affordable Websites India</div>
        </div>
      </div>
    ),
    size
  );
}
