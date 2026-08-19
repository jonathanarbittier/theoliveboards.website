"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("in-view"), i * 120);
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
      id="about"
      ref={ref}
      aria-label="About The Olive Boards"
      style={{
        backgroundColor: "var(--color-ivory)",
        padding: "7rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Text — left */}
        <div>
          <p className="eyebrow reveal" style={{ marginBottom: "1.25rem" }}>
            About
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 400,
              color: "var(--color-olive-dark)",
              fontStyle: "italic",
              marginBottom: "2rem",
            }}
          >
            Food made personal.
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-charcoal-light)",
              lineHeight: 1.85,
              marginBottom: "1.25rem",
            }}
          >
            {/*
              PLACEHOLDER — Replace with the real founding story.
              Example: Founded in Dallas in [year] by [name], The Olive Boards
              started as...
            */}
            The Olive Boards was born from a love of food that brings people
            together. We believe a beautiful spread should feel personal, not
            pretentious — made with real care for the people gathering around
            it.
          </p>
          <p
            className="reveal reveal-delay-3"
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-charcoal-light)",
              lineHeight: 1.85,
              marginBottom: "2.5rem",
            }}
          >
            Every order we take starts with a conversation. We want to
            understand the occasion, the people, the vibe — so that what we
            build feels exactly right for that specific moment.
          </p>

          {/* Values — simple list */}
          <div
            className="reveal reveal-delay-4"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem 2rem",
            }}
          >
            {[
              "Handmade styling",
              "Thoughtful sourcing",
              "Personal service",
              "Custom to your event",
              "Dallas-based",
              "Texas and beyond",
            ].map((val) => (
              <div
                key={val}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-olive)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    color: "var(--color-charcoal-light)",
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image — right, tall */}
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
            alt="The Olive Boards team preparing a charcuterie spread"
            fill
            style={{ objectFit: "cover" }}
          />
          {/*
            PLACEHOLDER — Replace /images/hands.jpg with an actual
            team/founder photo when available.
          */}
          <div
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              backgroundColor: "var(--color-ivory)",
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
              Dallas, TX
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
