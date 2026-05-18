import RevealOnScroll from "@/components/ui/RevealOnScroll";

const steps = [
  {
    num: "01",
    title: "Prise de contact",
    desc: "Nous analysons la situation de votre immeuble et vos attentes. Chaque copropriété est différente — nous adaptons notre approche.",
  },
  {
    num: "02",
    title: "Mise en place",
    desc: "Ouverture de comptes bancaires séparés (fonds de roulement et fonds de réserves), prise en charge administrative et technique.",
  },
  {
    num: "03",
    title: "Gestion au quotidien",
    desc: "Suivi des travaux, coordination des entreprises, décomptes détaillés pour chaque copropriétaire. Permanence téléphonique 24/7.",
  },
  {
    num: "04",
    title: "Transparence et reporting",
    desc: "Assemblées générales préparées, comptes clairs, documentation accessible. Vous savez où va chaque euro.",
  },
];

export default function Method() {
  return (
    <section className="section-dark section-padding method-section" id="method">
      <div className="dark-radial" />
      <div className="container-bw" style={{ position: "relative", zIndex: 1 }}>
        <div className="method-layout">
          <RevealOnScroll>
            <div className="method-header">
              <p className="type-eyebrow" style={{ marginBottom: "var(--space-md)" }}>
                Comment ça fonctionne
              </p>
              <h2 className="type-h2">
                Votre copropriété en bonnes mains
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="method-steps-list">
              {steps.map((step) => (
                <div key={step.num} className="card-white method-card">
                  <div className="method-num">{step.num}</div>
                  <div>
                    <div className="method-title">{step.title}</div>
                    <div className="method-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
