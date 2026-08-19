"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const eventTypes = [
  {
    label: "Weddings",
    description:
      "From cocktail hour grazing to full reception tables. Styled to complement your florals and venue.",
    image: "/images/event.jpg",
  },
  {
    label: "Private Celebrations",
    description:
      "Birthdays, anniversaries, showers and every gathering worth a beautiful spread.",
    image: "/images/board.jpg",
  },
  {
    label: "Corporate Events",
    description:
      "Elevated presentation for client events, team celebrations and office gatherings.",
    image: "/images/crudite.jpg",
  },
  {
    label: "Special Gatherings",
    description:
      "Holiday parties, holiday tables, intimate dinners, and anything in between.",
    image: "/images/box.jpg",
  },
];

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("in-view"), i * 100);
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
      id="events"
      ref={ref}
      aria-label="Events"
      style={{
        backgroundColor: "var(--color-olive-dark)",
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
            marginBottom: "4rem",
            gap: "2rem",
          }}
          className="events-header"
        >
          <div>
            <p
              className="eyebrow reveal"
              style={{ color: "var(--color-sage-light)", marginBottom: "1rem" }}
            >
              Events
            </p>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 400,
                color: "white",
                fontStyle: "italic",
              }}
            >
              Built around
              <br />
              your celebration.
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.8,
                maxWidth: "380px",
                marginLeft: "auto",
              }}
            >
              Birthdays, weddings, showers, corporate gatherings and everything
              worth gathering around. Tell us what you're planning and The Olive
              Boards will help create a spread that fits the moment.
            </p>
          </div>
        </div>

        {/* Event types — horizontal strips, not cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
          className="events-grid"
        >
          {eventTypes.map((event, i) => (
            <div
              key={event.label}
              className="reveal img-hover"
              style={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: "3/4",
                cursor: "default",
              }}
            >
              <Image
                src={event.image}
                alt={`${event.label} catering by The Olive Boards`}
                fill
                style={{ objectFit: "cover" }}
              />
              {/* Dark scrim */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(14,14,12,0.88) 0%, rgba(14,14,12,0.2) 60%, transparent 100%)",
                }}
              />
              {/* Text */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: "white",
                    marginBottom: "0.5rem",
                  }}
                >
                  {event.label}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                    color: "rgba(255,255,255,0.68)",
                    lineHeight: 1.6,
                  }}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginTop: "3.5rem" }}
        >
          <a
            href="#contact"
            className="btn-primary"
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "white",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "var(--color-olive-dark)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
            }}
          >
            Tell Us About Your Event
          </a>
        </div>
      </div>
    </section>
  );
}
