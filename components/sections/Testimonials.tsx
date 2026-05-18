import RevealOnScroll from "@/components/ui/RevealOnScroll";

const testimonials = [
  {
    quote: "Témoignage à compléter.",
    author: "Nom du copropriétaire",
    role: "Résidence / Fonction",
  },
  {
    quote: "Témoignage à compléter.",
    author: "Nom du copropriétaire",
    role: "Résidence / Fonction",
  },
  {
    quote: "Témoignage à compléter.",
    author: "Nom du copropriétaire",
    role: "Résidence / Fonction",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding" id="testimonials">
      <div className="container-bw">
        <RevealOnScroll>
          <div className="section-header">
            <p className="type-eyebrow">Ce qu&apos;ils en disent</p>
            <h2 className="type-h2">La parole à nos copropriétaires</h2>
          </div>
        </RevealOnScroll>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="testimonial-card">
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">{t.author}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
