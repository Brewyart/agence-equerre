"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Vente", href: "https://www.agence-equerre.be/index.php?page=ventes", external: true },
  { label: "Location", href: "https://www.agence-equerre.be/index.php?page=locations", external: true },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "MySyndic", href: "https://www.agence-equerre.be/syndic_online/", external: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : "header-transparent"}`}>
        <Image
          src="/logo-equerre.svg"
          alt="Agence de l'Equerre"
          width={140}
          height={50}
          className="header-logo"
          priority
        />

        <nav className="header-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ThemeToggle />
          <a href="#contact" className="header-cta header-cta-desktop">
            Demander un devis
          </a>
          <button
            className={`header-burger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary" onClick={closeMenu}>
          Demander un devis
        </a>
      </div>
    </>
  );
}
