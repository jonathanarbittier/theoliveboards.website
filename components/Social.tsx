"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const socialImages = [
  { src: "/images/hero.jpg", alt: "Grazing table overhead" },
  { src: "/images/board.jpg", alt: "Charcuterie board" },
  { src: "/images/box.jpg", alt: "Individual grazing box" },
  { src: "/images/crudite.jpg", alt: "Crudité platter" },
  { src: "/images/hands.jpg", alt: "Preparing a board" },
  { src: "/images/event.jpg", alt: "Event grazing table" },
];

export default function Social() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("in-view"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Instagram feed"
      style={{
        backgroundColor: "var(--color-cream)",
        padding: "6rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p className="eyebrow reveal" style={{ marginBottom: "1rem" }}>
            @theoliveboards
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              color: "var(--color-olive-dark)",
              fontStyle: "italic",
              marginBottom: "0",
            }}
          >
            From our table to your feed.
          </h2>
        </div>

        {/* Image grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "4px",
          }}
          className="social-grid"
        >
          {socialImages.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/theoliveboards"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View on Instagram: ${img.alt}`}
              className="reveal img-hover"
              style={{
                display: "block",
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
                backgroundColor: "var(--color-linen)",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                style={{ objectFit: "cover" }}
              />
            </a>
          ))}
        </div>

        {/* Follow link */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginTop: "2.5rem" }}
        >
          <a
            href="https://instagram.com/theoliveboards"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Follow @theoliveboards
          </a>
        </div>
      </div>
    </section>
  );
}
