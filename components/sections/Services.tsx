import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const services = [
  {
    icon: "/Syndic.svg",
    title: "Syndic de copropriété",
    desc: "Gestion technique, comptable, juridique et administrative de votre immeuble. Comptes séparés par bâtiment, décomptes détaillés et permanence 24/7.",
    pill: "Gestion",
  },
  {
    icon: "/Vente.svg",
    title: "Courtage immobilier",
    desc: "Vente de votre bien au juste prix. Estimation, mise en marché, négociation et accompagnement jusqu'à l'acte notarié.",
    pill: "Vente",
  },
  {
    icon: "/Location.svg",
    title: "Location",
    desc: "Recherche de locataires, rédaction du bail, état des lieux. Nous gérons la mise en location de A à Z.",
    pill: "Location",
  },
  {
    icon: "/Gestion.svg",
    title: "Gestion locative",
    desc: "Vous êtes propriétaire mais ne souhaitez pas gérer au quotidien ? Nous prenons le relais : encaissement, suivi technique, relations locataires.",
    pill: "Gestion",
  },
  {
    icon: "/Certifie.svg",
    title: "Expertise immobilière",
    desc: "Une lecture expérimentée des bâtiments, bureaux, commerces et logements, appuyée par une expertise judiciaire certifiée.",
    pill: "Expertise",
  },
  {
    icon: "/Gestion.svg",
    title: "Régie de biens",
    desc: "Administration suivie de votre patrimoine immobilier, coordination des intervenants et relation de proximité avec les occupants.",
    pill: "Régie",
  },
];

export default function Services() {
  return (
    <section className="section-dark section-padding" id="services">
      <div className="dark-radial" />
      <div className="container-bw" style={{ position: "relative", zIndex: 1 }}>
        <RevealOnScroll>
          <div className="section-header">
            <p className="type-eyebrow">Ce que nous faisons</p>
            <h2 className="type-h2">
              Un accompagnement complet pour votre patrimoine
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="cards-grid-2">
            {services.map((s) => (
              <div key={s.title} className="card-white card-white--with-icon">
                <div className="card-white-icon">
                  <Image src={s.icon} alt={s.title} width={40} height={40} />
                </div>
                <h3 className="card-white-title">{s.title}</h3>
                <p className="card-white-desc">{s.desc}</p>
                <span className="card-white-pill">{s.pill}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
