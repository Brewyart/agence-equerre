"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "L'agence", href: "#about" },
  { label: "Biens", href: "#properties" },
  { label: "Notre méthode", href: "#method" },
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

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Aller au contenu</a>
      <header className={`header ${scrolled ? "header-scrolled" : "header-transparent"}`}>
        <div className="header-shell">
          <a className="header-brand" href="#hero" aria-label="Agence de l'Equerre, accueil">
            <Image
              src="/logo-equerre.svg"
              alt=""
              width={42}
              height={42}
              className="header-logo"
              priority
            />
            <span>Agence de<br />l&apos;Equerre</span>
          </a>

          <nav className="header-nav" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href="https://www.agence-equerre.be/syndic_online/"
              target="_blank"
              rel="noopener noreferrer"
              className="header-portal header-cta-desktop"
            >
              Espace copropriétaire
            </a>
            <ThemeToggle />
            <a href="#contact" className="header-cta header-cta-desktop">Nous contacter</a>
            <button
              type="button"
              className={`header-burger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <nav className="mobile-nav open" id="mobile-navigation" aria-label="Navigation mobile">
          <div className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <a key={link.label} href={link.href} onClick={closeMenu}>
                <span>0{index + 1}</span>{link.label}
              </a>
            ))}
          </div>
          <div className="mobile-nav-actions">
            <a href="#contact" className="btn-primary" onClick={closeMenu}>Nous contacter</a>
            <a href="https://www.agence-equerre.be/syndic_online/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Espace copropriétaire
            </a>
          </div>
        </nav>
      ) : null}
    </>
  );
}
