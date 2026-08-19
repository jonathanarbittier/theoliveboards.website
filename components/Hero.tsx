"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr",
        position: "relative",
        backgroundColor: "var(--color-charcoal)",
      }}
    >
      {/* Full-bleed background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="The Olive Boards — abundant charcuterie and grazing table"
          fill
          priority
          quality={90}
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
        {/* Gradient overlay — darkens left and bottom for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(22,22,20,0.72) 0%, rgba(22,22,20,0.4) 55%, rgba(22,22,20,0.08) 100%), linear-gradient(to top, rgba(22,22,20,0.5) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          padding: "0 2rem 5rem",
          minHeight: "100vh",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          {/* Location eyebrow */}
          <p
            className="eyebrow"
            style={{ color: "var(--color-tan)", marginBottom: "1.5rem" }}
          >
            Dallas, Texas + Beyond
          </p>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              fontWeight: 400,
              color: "white",
              lineHeight: 1.08,
              marginBottom: "1.5rem",
              fontStyle: "italic",
            }}
          >
            Good food should bring people together.
          </h1>

          {/* Supporting text */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "420px",
            }}
          >
            The Olive Boards creates handcrafted charcuterie, grazing tables
            and appetizer spreads for celebrations across Dallas and beyond.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary">
              Plan Your Spread
            </a>
            <a
              href="#gallery"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.82)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.35)",
                paddingBottom: "2px",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.82)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              }}
            >
              Explore Our Work →
            </a>
          </div>
        </div>
      </div>

      {/* TOB hashtag mark — subtle bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "2rem",
          zIndex: 1,
          fontFamily: "var(--font-sans)",
          fontSize: "0.65rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        #TOB
      </div>
    </section>
  );
}
