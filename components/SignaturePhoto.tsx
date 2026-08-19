import Image from "next/image";

export default function SignaturePhoto() {
  return (
    <section
      aria-label="A table people remember"
      style={{
        position: "relative",
        height: "80vh",
        minHeight: "500px",
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/hero.jpg"
        alt="Abundant charcuterie and grazing table designed for an event"
        fill
        quality={90}
        style={{
          objectFit: "cover",
          objectPosition: "center 30%",
        }}
      />

      {/* Light scrim for text area only */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(14,14,12,0.65) 0%, rgba(14,14,12,0.3) 50%, transparent 100%)",
        }}
      />

      {/* Text — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "4rem",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: 1,
          width: "100%",
          padding: "0 2rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "white",
            marginBottom: "1rem",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          A table people remember.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.0625rem",
            color: "rgba(255,255,255,0.78)",
            letterSpacing: "0.02em",
          }}
        >
          Designed with color, texture and plenty to share.
        </p>
      </div>
    </section>
  );
}
