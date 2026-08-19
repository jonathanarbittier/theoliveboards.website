"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Our Offerings", href: "#offerings" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          backgroundColor: scrolled ? "var(--color-ivory)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--color-linen)" : "1px solid transparent",
          paddingTop: scrolled ? "0" : "0",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "1.1rem 2rem",
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="flex flex-col leading-tight no-underline"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.125rem",
                fontWeight: 400,
                color: scrolled ? "var(--color-olive-dark)" : "white",
                letterSpacing: "0.03em",
                transition: "color 0.3s ease",
              }}
            >
              The Olive Boards
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: scrolled ? "var(--color-sage)" : "rgba(255,255,255,0.65)",
                transition: "color 0.3s ease",
                marginTop: "1px",
              }}
            >
              Dallas, Texas
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={scrolled ? "nav-link" : "nav-link nav-link-light"}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-block btn-primary"
              style={{ padding: "0.6rem 1.5rem" }}
            >
              Plan Your Spread
            </a>

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col justify-center items-center gap-1.5 p-1 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "22px",
                    height: "1.5px",
                    backgroundColor: scrolled ? "var(--color-charcoal)" : "white",
                    transition: "all 0.25s ease",
                    transform:
                      menuOpen
                        ? i === 0
                          ? "translateY(5px) rotate(45deg)"
                          : i === 2
                          ? "translateY(-5px) rotate(-45deg)"
                          : "scaleX(0)"
                        : "none",
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col"
        style={{
          backgroundColor: "var(--color-olive-dark)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className="flex flex-col h-full justify-center items-start"
          style={{ padding: "0 2.5rem" }}
        >
          <div className="flex flex-col gap-8">
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "var(--color-sage-light)",
                textDecoration: "none",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              The Olive Boards
            </a>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.25rem",
                  fontWeight: 400,
                  color: "white",
                  textDecoration: "none",
                  lineHeight: 1.1,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-tan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary"
              style={{ marginTop: "1rem", width: "fit-content" }}
            >
              Plan Your Spread
            </a>
          </div>
          <p
            style={{
              position: "absolute",
              bottom: "2.5rem",
              left: "2.5rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-sage)",
            }}
          >
            Dallas, Texas + Beyond
          </p>
        </div>
      </div>
    </>
  );
}
