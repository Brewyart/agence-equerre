import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero hero-fullwidth" id="hero">
      <Image
        src="/Hero-image.jpg"
        alt="Immeubles résidentiels modernes à Louvain-la-Neuve"
        fill
        priority
        style={{ objectFit: "cover" }}
        sizes="100vw"
      />

      <div className="hero-overlay" />

      {/* Logo dans le ciel, centré sur la moitié gauche */}
      <div className="hero-logo-zone">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-equerre-ronds-hero.svg"
          alt="Agence de l'Equerre"
          className="hero-logo-svg"
        />
      </div>

      {/* Contenu dans un container centré, aligné à droite */}
      <div className="hero-container">
        <div className="hero-content-right">
          <p className="type-eyebrow hero-eyebrow">
            Syndic · Courtage · Gestion locative
          </p>
          <h1 className="hero-title-fw">
            L&apos;agence de l&apos;Equerre,
            <br />
            le partenaire immobilier
            <br />
            à votre mesure.
          </h1>
          <p className="hero-lead-fw">
            Depuis 2003, l&apos;Agence de l&apos;Equerre accompagne copropriétaires et
            propriétaires à Louvain-la-Neuve et dans toute la région. Syndic,
            vente, location, gestion — une seule équipe, un seul interlocuteur.
          </p>
          <div className="hero-actions-fw">
            <a href="#contact" className="btn-primary">
              Demander un devis
            </a>
            <a href="#services" className="btn-secondary btn-secondary-hero">
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
