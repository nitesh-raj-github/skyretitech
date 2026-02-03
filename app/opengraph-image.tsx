import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b0b0b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Skyreti
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Designing digital products that institutions can trust.
        </div>
      </div>
    ),
    size
  );
}