import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const catalogues = [
  {
    eyebrow: "Acheter",
    title: "Biens à vendre",
    description:
      "Appartements, maisons, emplacements et biens d'investissement sélectionnés par notre équipe.",
    href: "https://www.agence-equerre.be/index.php?page=ventes",
    cta: "Voir les ventes",
  },
  {
    eyebrow: "Louer",
    title: "Biens à louer",
    description:
      "Des biens disponibles à Louvain-la-Neuve et dans les villes où notre agence est active.",
    href: "https://www.agence-equerre.be/index.php?page=locations",
    cta: "Voir les locations",
  },
];

export default function Properties() {
  return (
    <section className="properties-section section-padding" id="properties">
      <div className="container-bw">
        <RevealOnScroll>
          <div className="properties-intro">
            <div>
              <p className="type-eyebrow">Acheter ou louer</p>
              <h2 className="type-h2">Trouvez votre prochain lieu de vie</h2>
            </div>
            <p className="type-lead">
              Nos annonces restent synchronisées sur le catalogue immobilier de
              l&apos;agence. Consultez les disponibilités ou confiez-nous une
              recherche personnalisée.
            </p>
          </div>
        </RevealOnScroll>

        <div className="property-gateway">
          <RevealOnScroll className="property-visual-wrap">
            <div className="property-visual">
              <Image
                src="/Immo.png"
                alt="Quartier résidentiel et commerces à Louvain-la-Neuve"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 980px) 100vw, 50vw"
              />
              <div className="property-visual-label">
                <span>Une recherche sur mesure ?</span>
                <a href="#contact">Dites-nous ce que vous cherchez <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </RevealOnScroll>

          <div className="catalogue-cards">
            {catalogues.map((catalogue, index) => (
              <RevealOnScroll key={catalogue.title} delay={index * 100}>
                <a
                  className="catalogue-card"
                  href={catalogue.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="type-eyebrow">{catalogue.eyebrow}</span>
                  <h3>{catalogue.title}</h3>
                  <p>{catalogue.description}</p>
                  <span className="catalogue-link">
                    {catalogue.cta} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
