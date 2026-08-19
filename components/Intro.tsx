"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("in-view");
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="intro"
      ref={ref}
      aria-label="Introduction"
      style={{
        backgroundColor: "var(--color-ivory)",
        padding: "6rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="intro-grid"
      >
        {/* Image — left, portrait */}
        <div
          className="reveal img-hover"
          style={{
            position: "relative",
            aspectRatio: "4/5",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/hands.jpg"
            alt="Hands carefully arranging a charcuterie board"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          {/* Caption label */}
          <div
            style={{
              position: "absolute",
              bottom: "1.25rem",
              left: "1.25rem",
              backgroundColor: "white",
              padding: "0.4rem 0.75rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-charcoal-light)",
              }}
            >
              Made by hand
            </span>
          </div>
        </div>

        {/* Text — right */}
        <div style={{ paddingLeft: "2rem" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1.25rem" }}>
            The Olive Boards
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--color-olive-dark)",
              marginBottom: "1.5rem",
              fontStyle: "italic",
            }}
          >
            Made to gather around.
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-charcoal-light)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            Every Olive Boards spread is personal. From intimate boxes to full
            grazing tables, each arrangement is styled by hand using
            thoughtfully selected ingredients and designed around the occasion.
          </p>
          <p
            className="reveal reveal-delay-3"
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-charcoal-light)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            We work with you to understand the moment — the mood, the people,
            the setting — and build something that feels exactly right.
          </p>
          <a
            href="#offerings"
            className="reveal reveal-delay-4"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--color-olive)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-olive)",
              paddingBottom: "2px",
            }}
          >
            See what we create →
          </a>
        </div>
      </div>
    </section>
  );
}
