"use client";

import { useState } from "react";

const links = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#people" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="wordmark" href="#top" aria-label="Luma home">
          luma<span>.</span>
        </a>
        <nav
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="mobile-nav-actions">
            <a href="#contact">Log in</a>
            <a className="button button-primary" href="#courses">
              Start learning
            </a>
          </div>
        </nav>
        <div className="desktop-actions">
          <a href="#contact">Log in</a>
          <a className="button button-primary nav-cta" href="#courses">
            Start learning
          </a>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
