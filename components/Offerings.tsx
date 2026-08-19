"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const offerings = [
  {
    id: "01",
    title: "Grazing Tables",
    description:
      "Large event spreads designed for weddings, celebrations, corporate gatherings and special occasions. Built around color, abundance and your setting.",
    image: "/images/event.jpg",
    imageAlt: "Long wedding grazing table with abundant charcuterie and florals",
    aspect: "landscape" as const,
  },
  {
    id: "02",
    title: "Charcuterie Boards",
    description:
      "Hand arranged boards combining cheeses, meats, fruit, crackers, accompaniments and seasonal touches. No two boards the same.",
    image: "/images/board.jpg",
    imageAlt: "Close-up rustic charcuterie board with cheese and prosciutto",
    aspect: "portrait" as const,
  },
  {
    id: "03",
    title: "Individual Boxes",
    description:
      "Personal grazing experiences for gatherings, gifting or smaller occasions. Beautifully packed, ready to enjoy.",
    image: "/images/box.jpg",
    imageAlt: "Individual grazing box with charcuterie, cheese, and fruit",
    aspect: "square" as const,
  },
  {
    id: "04",
    title: "Crudité + Appetizers",
    description:
      "Colorful vegetable arrangements and appetizer presentations made to complement an event or stand beautifully on their own.",
    image: "/images/crudite.jpg",
    imageAlt: "Vibrant colorful crudité platter with hummus and dips",
    aspect: "landscape" as const,
  },
];

export default function Offerings() {
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
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="offerings"
      ref={ref}
      aria-label="Our Offerings"
      style={{
        backgroundColor: "var(--color-cream)",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "end",
            marginBottom: "5rem",
            gap: "2rem",
          }}
          className="offerings-header"
        >
          <div>
            <p className="eyebrow reveal" style={{ marginBottom: "1rem" }}>
              What we create
            </p>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 400,
                color: "var(--color-olive-dark)",
                fontStyle: "italic",
              }}
            >
              From small boards
              <br />
              to full tables.
            </h2>
          </div>
          <div className="reveal reveal-delay-2" style={{ paddingBottom: "0.5rem" }}>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-charcoal-light)",
                lineHeight: 1.8,
                maxWidth: "380px",
                marginLeft: "auto",
              }}
            >
              Every arrangement is built around your occasion and styled by
              hand. Tell us what you're planning and we'll take care of the
              rest.
            </p>
          </div>
        </div>

        {/* Offerings — editorial layout, not cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {offerings.map((item, index) => (
            <OfferingRow key={item.id} item={item} reverse={index % 2 !== 0} />
          ))}
        </div>

        {/* CTA */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: "5rem",
            paddingTop: "3rem",
            borderTop: "1px solid var(--color-linen)",
          }}
        >
          <a href="#contact" className="btn-primary">
            See all offerings
          </a>
        </div>
      </div>
    </section>
  );
}

function OfferingRow({
  item,
  reverse,
}: {
  item: (typeof offerings)[0];
  reverse: boolean;
}) {
  const aspectMap = {
    landscape: "7/5",
    portrait: "4/5",
    square: "1/1",
  };

  return (
    <div
      className="offering-row"
      style={{
        display: "grid",
        gridTemplateColumns: reverse ? "1fr 1.4fr" : "1.4fr 1fr",
        gap: "0",
        alignItems: "stretch",
        minHeight: "420px",
        borderBottom: "1px solid var(--color-linen)",
      }}
    >
      {/* Image */}
      <div
        className={`reveal img-hover ${reverse ? "order-last" : ""}`}
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "320px",
          order: reverse ? 2 : 1,
        }}
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Text */}
      <div
        className="reveal reveal-delay-1"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "3rem 3.5rem",
          order: reverse ? 1 : 2,
          backgroundColor: reverse ? "white" : "var(--color-cream)",
        }}
      >
        <div
          className="offering-number"
          style={{ marginBottom: "1rem" }}
        >
          {item.id}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.875rem",
            fontWeight: 400,
            color: "var(--color-olive-dark)",
            marginBottom: "1rem",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--color-charcoal-light)",
            lineHeight: 1.8,
            maxWidth: "340px",
          }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}
