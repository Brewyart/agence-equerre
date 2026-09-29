import Image, { getImageProps } from "next/image";

export default function Hero() {
  const common = {
    alt: "Immeubles résidentiels à Louvain-la-Neuve",
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: "/Hero-image.jpg",
    width: 2000,
    height: 1500,
    quality: 75,
  });
  const {
    props: { srcSet: mobile, ...imageProps },
  } = getImageProps({
    ...common,
    src: "/Hero-image-mobile.jpg",
    width: 800,
    height: 1200,
    quality: 75,
  });

  return (
    <section className="hero-fullwidth" id="hero">
      <picture className="hero-picture">
        <source media="(min-width: 721px)" srcSet={desktop} />
        <source media="(max-width: 720px)" srcSet={mobile} />
        {/* getImageProps conserve l'optimisation Next.js dans ce picture responsive. */}
        <img
          {...imageProps}
          alt={common.alt}
          className="hero-image"
          fetchPriority="high"
        />
      </picture>

      <div className="hero-overlay" />

      <div className="hero-logo-zone">
        <Image
          src="/logo-equerre-ronds-hero.svg"
          alt=""
          width={430}
          height={323}
          className="hero-logo-svg"
        />
      </div>

      <div className="hero-container">
        <div className="hero-content-right">
          <p className="type-eyebrow hero-eyebrow">
            Syndic · Courtage · Régie de biens
          </p>
          <h1 className="hero-title-fw">
            Votre immobilier, géré avec rigueur et proximité.
          </h1>
          <p className="hero-lead-fw">
            Depuis 2003, notre agence familiale accompagne copropriétaires et
            propriétaires depuis Louvain-la-Neuve. Syndic, vente, location et
            gestion : une équipe engagée, au plus près de vos biens.
          </p>
          <div className="hero-actions-fw">
            <a href="#contact" className="btn-primary">
              Parler de votre projet
            </a>
            <a href="#services" className="btn-secondary btn-secondary-hero">
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>

      <div className="hero-trust" aria-label="Nos engagements clés">
        <div><strong>Depuis 2003</strong><span>Ancrage local</span></div>
        <div><strong>Environ 80</strong><span>Bâtiments gérés</span></div>
        <div><strong>24h/24</strong><span>Permanence syndic</span></div>
      </div>
    </section>
  );
}
