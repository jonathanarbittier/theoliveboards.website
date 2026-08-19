"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/hero.jpg",
    alt: "Overhead view of an abundant charcuterie and grazing table",
    span: 2,
  },
  {
    src: "/images/board.jpg",
    alt: "Close-up rustic charcuterie board with cheese and cured meats",
    span: 1,
  },
  {
    src: "/images/hands.jpg",
    alt: "Hands carefully arranging a charcuterie board",
    span: 1,
  },
  {
    src: "/images/box.jpg",
    alt: "Individual grazing box with charcuterie, cheese, fruit and honey",
    span: 1,
  },
  {
    src: "/images/event.jpg",
    alt: "Long wedding grazing table with abundant food and florals",
    span: 2,
  },
  {
    src: "/images/crudite.jpg",
    alt: "Vibrant colorful crudité platter with hummus and dips",
    span: 1,
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
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
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : 0)),
    []
  );
  const next = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : 0)),
    []
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        aria-label="Photo Gallery"
        style={{
          backgroundColor: "var(--color-ivory)",
          padding: "7rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "3.5rem" }}>
            <p className="eyebrow reveal" style={{ marginBottom: "1rem" }}>
              Gallery
            </p>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--color-olive-dark)",
                fontStyle: "italic",
              }}
            >
              From our table to yours.
            </h2>
          </div>

          {/* Masonry-style grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridAutoRows: "240px",
              gap: "8px",
            }}
            className="gallery-grid"
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="reveal img-hover"
                style={{
                  gridColumn: img.span > 1 ? `span ${img.span}` : "span 1",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundColor: "var(--color-linen)",
                }}
                onClick={() => setLightboxIndex(i)}
                role="button"
                aria-label={`View image: ${img.alt}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(46,58,34,0)",
                    transition: "background-color 0.3s ease",
                  }}
                  className="gallery-hover-overlay"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(14,14,12,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={closeLightbox}
        >
          {/* Image container */}
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "88dvh",
              width: "800px",
              height: "600px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Close */}
          <button
            aria-label="Close image viewer"
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>

          {/* Prev */}
          <button
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: "absolute",
              left: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              fontSize: "1.25rem",
              cursor: "pointer",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ←
          </button>

          {/* Next */}
          <button
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: "absolute",
              right: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              fontSize: "1.25rem",
              cursor: "pointer",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            →
          </button>

          {/* Counter */}
          <p
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
            }}
          >
            {lightboxIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </>
  );
}
