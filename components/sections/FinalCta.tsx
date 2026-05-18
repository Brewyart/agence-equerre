import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function FinalCta() {
  return (
    <section className="final-cta section-padding">
      <div className="dark-radial" />
      <div className="container-bw" style={{ position: "relative" }}>
        <RevealOnScroll>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 className="type-h2" style={{ marginBottom: "var(--space-md)" }}>
              Un projet immobilier&nbsp;? Parlons-en.
            </h2>
            <p className="type-lead" style={{ marginBottom: "var(--space-xl)" }}>
              Que vous soyez copropriétaire, propriétaire ou à la recherche
              d&apos;un bien, notre équipe est disponible pour répondre à vos
              questions.
            </p>
            <a href="#contact" className="btn-primary">
              Prendre contact
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
