import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const leadership = [
  {
    name: "Eric Sterkendries",
    role: "Fondateur · Syndic et courtier agréé I.P.I. 505.694 · Expert judiciaire certifié",
  },
  {
    name: "Antoine Sterkendries",
    role: "Associé · Syndic et courtier agréé I.P.I. 510.831 · Comptable de formation",
  },
];

const team = [
  { name: "Clarence Van Brandt", role: "Syndic et courtier agréé I.P.I. 517.851" },
  { name: "Luca Di Marco", role: "Syndic agréé I.P.I. 518.504" },
  { name: "Shaony Sneessens", role: "Syndic et courtier agréé I.P.I. 519.871" },
  { name: "Olivia Lemaire", role: "Responsable du secrétariat" },
  { name: "Séverine Mathier", role: "Secrétaire" },
  { name: "Amaury Deprez", role: "Conseiller immobilier" },
  { name: "Charles Otu", role: "Building maintenance" },
  { name: "Da Costa Maria Aparecida", role: "Building maintenance" },
];

export default function About() {
  return (
    <section className="section-padding" id="about">
      <div className="container-bw">
        <RevealOnScroll>
          <div className="section-header">
            <p className="type-eyebrow">Qui sommes-nous</p>
            <h2 className="type-h2">
              Une agence familiale, deux générations d&apos;expertise
            </h2>
          </div>
        </RevealOnScroll>

        <div className="about-grid">
          <RevealOnScroll>
            <div className="about-image">
              <Image
                src="/team-agence.jpg"
                alt="L'équipe de l'Agence de l'Equerre autour de plans architecturaux"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 980px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div>
              <p className="type-lead" style={{ marginBottom: "var(--space-lg)" }}>
                Fondée en 2003 par Eric Sterkendries, l&apos;Agence de l&apos;Equerre est
                une affaire de famille. Rejoint par son fils Antoine en 2014, le
                bureau réunit aujourd&apos;hui une équipe de 10 personnes — syndics,
                courtiers, gestionnaires et personnel de terrain.
              </p>
              <p
                className="type-body"
                style={{
                  color: "var(--color-text-sub)",
                  maxWidth: "65ch",
                  marginBottom: "var(--space-lg)",
                }}
              >
                Eric et Antoine sont tous deux maîtres de stage-formateurs
                reconnus par l&apos;IPI et l&apos;IFAPME. Ils forment la prochaine
                génération de professionnels de l&apos;immobilier.
              </p>

              <div className="team-cards">
                {leadership.map((m) => (
                  <div key={m.name} className="team-card team-card-lead">
                    <div className="team-card-name">{m.name}</div>
                    <div className="team-card-role">{m.role}</div>
                  </div>
                ))}
              </div>

              <div className="team-roster">
                {team.map((m) => (
                  <div key={m.name} className="team-roster-item">
                    <span className="team-roster-name">{m.name}</span>
                    <span className="team-roster-role">{m.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
