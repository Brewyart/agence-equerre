"use client";

import { useRef } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const properties = [
  {
    image: "/Immo.png",
    title: "Appartement à Louvain-la-Neuve",
    type: "Vente",
  },
  {
    image: "/Immo.png",
    title: "Maison à Wavre",
    type: "Vente",
  },
  {
    image: "/Immo.png",
    title: "Studio à Ottignies",
    type: "Location",
  },
  {
    image: "/Immo.png",
    title: "Duplex à Louvain-la-Neuve",
    type: "Vente",
  },
  {
    image: "/Immo.png",
    title: "Commerce à Bruxelles",
    type: "Location",
  },
];

export default function Properties() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(direction: number) {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.querySelector(".property-card")?.clientWidth ?? 400;
    trackRef.current.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  }

  return (
    <section className="section-padding section-light" id="properties">
      <div className="container-bw">
        <RevealOnScroll>
          <div className="properties-header">
            <div>
              <p className="type-eyebrow" style={{ color: "var(--color-accent)", marginBottom: "var(--space-md)" }}>
                Acheter ou louer
              </p>
              <h2 className="type-h2">
                Trouvez votre prochain bien en Brabant wallon
              </h2>
            </div>
            <div className="carousel-controls">
              <button className="carousel-btn" onClick={() => scrollCarousel(-1)} aria-label="Précédent">
                ←
              </button>
              <button className="carousel-btn" onClick={() => scrollCarousel(1)} aria-label="Suivant">
                →
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="carousel-wrapper">
            <div className="carousel-track" ref={trackRef}>
              {properties.map((p, i) => (
                <div key={i} className="property-card">
                  <div className="property-image">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 620px) 84vw, 400px"
                    />
                    <span className="property-pill">{p.type}</span>
                  </div>
                  <div className="property-info">
                    <h3 className="property-title">{p.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="properties-actions" style={{ marginTop: "var(--space-xl)" }}>
            <a href="https://www.agence-equerre.be/index.php?page=ventes" className="btn-primary" target="_blank" rel="noopener noreferrer">
              Voir les biens en vente
            </a>
            <a href="https://www.agence-equerre.be/index.php?page=locations" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              Voir les biens en location
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
