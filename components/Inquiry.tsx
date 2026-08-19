"use client";
import { useState, useRef, useEffect } from "react";

const interestOptions = [
  "Grazing Table",
  "Charcuterie Board",
  "Individual Boxes",
  "Crudité or Appetizers",
  "Custom Event",
  "Not Sure Yet",
];

const eventTypes = [
  "Wedding",
  "Birthday",
  "Baby or Bridal Shower",
  "Corporate Event",
  "Holiday Party",
  "Private Dinner",
  "Other",
];

export default function Inquiry() {
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
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

  const toggleInterest = (val: string) => {
    setInterests((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to a form backend (e.g. Resend, Formspree, or Netlify Forms)
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Event inquiry"
      style={{
        backgroundColor: "var(--color-ivory)",
        padding: "7rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1rem" }}>
            Get in touch
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--color-olive-dark)",
              fontStyle: "italic",
              marginBottom: "1rem",
            }}
          >
            What are we gathering for?
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-charcoal-light)",
              lineHeight: 1.7,
            }}
          >
            Tell us a little about your event and we'll take it from there.
          </p>
        </div>

        {submitted ? (
          <div
            className="reveal"
            style={{
              padding: "3rem",
              backgroundColor: "var(--color-cream)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.75rem",
                fontStyle: "italic",
                color: "var(--color-olive-dark)",
                marginBottom: "1rem",
              }}
            >
              We got it — thank you!
            </p>
            <p style={{ color: "var(--color-charcoal-light)", fontSize: "1rem" }}>
              We'll be in touch soon to start planning your spread.
            </p>
          </div>
        ) : (
          <form
            className="reveal reveal-delay-2"
            onSubmit={handleSubmit}
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: "0" }}
          >
            {/* Row 1: Name + Email */}
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
              <FormField id="name" label="Name" type="text" required placeholder="Your name" />
              <FormField id="email" label="Email" type="email" required placeholder="your@email.com" />
            </div>

            {/* Row 2: Phone + Event Date */}
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
              <FormField id="phone" label="Phone" type="tel" placeholder="(214) 000-0000" />
              <FormField id="event-date" label="Event Date" type="date" />
            </div>

            {/* Row 3: Event Type + Guest Count */}
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
              <div>
                <label
                  htmlFor="event-type"
                  style={labelStyle}
                >
                  Event Type
                </label>
                <select id="event-type" name="event-type" style={inputStyle}>
                  <option value="">Select one</option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <FormField
                id="guest-count"
                label="Estimated Guest Count"
                type="number"
                placeholder="e.g. 50"
              />
            </div>

            {/* Location */}
            <div style={{ marginBottom: "1.5rem" }}>
              <FormField
                id="location"
                label="Event Location / Venue"
                type="text"
                placeholder="City, venue name, or address"
              />
            </div>

            {/* Interests */}
            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ ...labelStyle, marginBottom: "0.875rem" }}>
                What are you interested in?
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.625rem",
                }}
              >
                {interestOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleInterest(opt)}
                    aria-pressed={interests.includes(opt)}
                    style={{
                      padding: "0.5rem 1.125rem",
                      border: `1px solid ${interests.includes(opt) ? "var(--color-olive)" : "var(--color-linen)"}`,
                      backgroundColor: interests.includes(opt)
                        ? "var(--color-olive)"
                        : "transparent",
                      color: interests.includes(opt)
                        ? "white"
                        : "var(--color-charcoal-light)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8125rem",
                      letterSpacing: "0.04em",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: "2rem" }}>
              <label htmlFor="message" style={labelStyle}>
                Tell us about your event
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Share any details — theme, dietary needs, inspiration, questions..."
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "120px",
                }}
              />
            </div>

            <div>
              <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                Send My Inquiry
              </button>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  color: "var(--color-sage)",
                  marginTop: "1rem",
                  textAlign: "center",
                  letterSpacing: "0.02em",
                }}
              >
                {/* PLACEHOLDER — Replace with real contact email */}
                Or email us directly at{" "}
                <a
                  href="mailto:hello@theoliveboards.com"
                  style={{ color: "var(--color-olive)", textDecoration: "none" }}
                >
                  hello@theoliveboards.com
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-charcoal)",
  marginBottom: "0.5rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  color: "var(--color-charcoal)",
  backgroundColor: "white",
  border: "1px solid var(--color-linen)",
  borderRadius: 0,
  padding: "0.875rem 1rem",
  outline: "none",
  appearance: "none",
  transition: "border-color 0.2s ease",
};

function FormField({
  id,
  label,
  type,
  required,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
        {required && (
          <span aria-hidden="true" style={{ color: "var(--color-burgundy)", marginLeft: "3px" }}>
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={(e) => (e.target.style.borderColor = "var(--color-olive)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--color-linen)")}
      />
    </div>
  );
}
