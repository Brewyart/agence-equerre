import Image from "next/image";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "L'agence", href: "#about" },
  { label: "Biens", href: "#properties" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-bw">
        <div className="footer-topline">
          <p>L&apos;immobilier, une question de confiance qui se construit.</p>
          <a href="#hero" aria-label="Revenir en haut de la page">Haut de page <span aria-hidden="true">↑</span></a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/logo-equerre-ronds.svg" alt="Agence de l'Equerre" width={280} height={210} className="footer-logo" />
            <p>Syndic, courtage, location, gestion locative et expertise depuis Louvain-la-Neuve.</p>
          </div>

          <nav className="footer-nav" aria-label="Navigation de pied de page">
            <span>Navigation</span>
            {footerLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
            <a href="https://www.agence-equerre.be/index.php?page=liens_utiles" target="_blank" rel="noopener noreferrer">Liens utiles <span aria-hidden="true">↗</span></a>
          </nav>

          <div className="footer-contact">
            <span>Nous joindre</span>
            <a href="tel:+3210453669">010 45 36 69</a>
            <a href="mailto:info@agence-equerre.be">info@agence-equerre.be</a>
            <p>Place de l&apos;Équerre 29/102<br />1348 Louvain-la-Neuve</p>
            <a className="footer-portal" href="https://www.agence-equerre.be/syndic_online/" target="_blank" rel="noopener noreferrer">
              Accès MySyndic <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Agence de l&apos;Equerre</p>
          <p>RC professionnelle et cautionnement AXA Belgium SA · Police n° 730.390.160</p>
          <p>Made by <a href="https://brewyart.com" target="_blank" rel="noopener noreferrer">Brewyart Creative Studio</a></p>
        </div>
      </div>
    </footer>
  );
}
