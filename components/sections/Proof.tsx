import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const proofs = [
  {
    icon: "/Certifie.svg",
    label: "Agence agréée IPI",
    desc: "Nos administrateurs et syndics agréés exercent dans le respect du code de déontologie de l'IPI.",
  },
  {
    icon: "/Assurance.svg",
    label: "Assurés AXA",
    desc: "Responsabilité civile professionnelle et cautionnement via AXA Belgium SA.",
  },
  {
    icon: "2003",
    label: "Fondation de l'agence",
    desc: "Plus de deux décennies d'ancrage local et une connaissance concrète des copropriétés.",
  },
  {
    icon: "~80",
    label: "Bâtiments gérés",
    desc: "De Louvain-la-Neuve à Bruxelles, en passant par Wavre, Ottignies, Jodoigne, Namur et Gembloux.",
  },
];

export default function Proof() {
  return (
    <section className="section-padding" id="proof">
      <div className="container-bw">
        <RevealOnScroll>
          <div className="section-header">
            <p className="type-eyebrow">Pourquoi nous faire confiance</p>
            <h2 className="type-h2">Des engagements concrets</h2>
          </div>
        </RevealOnScroll>

        <div className="proof-grid proof-grid-equal">
          {proofs.map((item, i) => (
            <RevealOnScroll key={item.label} delay={i * 100}>
              <div className="proof-card">
                <div className="proof-number">
                  {item.icon.startsWith("/") ? (
                    <Image src={item.icon} alt={item.label} width={48} height={48} />
                  ) : (
                    item.icon
                  )}
                </div>
                <div className="proof-label">{item.label}</div>
                <div className="proof-desc">{item.desc}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
