"use client";

import { type FormEvent, useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Contact() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = `${data.get("prenom") ?? ""} ${data.get("nom") ?? ""}`.trim();
    const subject = `Demande ${data.get("service") ?? "immobilière"} — ${name}`;
    const body = [
      `Nom : ${name}`,
      `Téléphone : ${data.get("tel") ?? ""}`,
      `Email : ${data.get("email") ?? ""}`,
      `Service : ${data.get("service") ?? ""}`,
      "",
      `${data.get("message") ?? ""}`,
    ].join("\n");

    setPrepared(true);
    window.location.href = `mailto:info@agence-equerre.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container-bw">
        <RevealOnScroll>
          <div className="section-header contact-heading">
            <p className="type-eyebrow">Contact</p>
            <h2 className="type-h2">Parlons de votre projet</h2>
            <p className="type-lead">
              Syndic, vente, location, gestion ou expertise : transmettez-nous
              votre demande et nous vous orienterons vers le bon interlocuteur.
            </p>
          </div>
        </RevealOnScroll>

        <div className="contact-grid">
          <RevealOnScroll>
            <form className="contact-form" onSubmit={handleSubmit} aria-describedby="form-note">
              <div className="form-group">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input type="text" id="nom" name="nom" className="form-input" autoComplete="family-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="prenom" className="form-label">Prénom</label>
                <input type="text" id="prenom" name="prenom" className="form-input" autoComplete="given-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="tel" className="form-label">Téléphone</label>
                <input type="tel" id="tel" name="tel" className="form-input" autoComplete="tel" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" id="email" name="email" className="form-input" autoComplete="email" required />
              </div>
              <div className="form-group full-width">
                <label htmlFor="service" className="form-label">Votre demande concerne</label>
                <select id="service" name="service" className="form-input form-select" required defaultValue="">
                  <option value="" disabled>Choisir un service</option>
                  <option value="de syndic">Syndic de copropriété</option>
                  <option value="de vente">Vente d&apos;un bien</option>
                  <option value="de location">Location d&apos;un bien</option>
                  <option value="de recherche">Recherche d&apos;un bien</option>
                  <option value="de gestion locative">Gestion locative</option>
                  <option value="d'expertise">Expertise immobilière</option>
                  <option value="immobilière">Autre</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message" className="form-label">Votre message</label>
                <textarea id="message" name="message" className="form-input form-textarea" required />
              </div>
              <div className="form-submit full-width">
                <button type="submit" className="btn-primary">Préparer l&apos;e-mail <span aria-hidden="true">→</span></button>
                <p id="form-note" className="form-note" aria-live="polite">
                  {prepared
                    ? "Votre messagerie va s'ouvrir avec le message prérempli."
                    : "Le formulaire ouvre votre messagerie et n'enregistre aucune donnée sur ce site."}
                </p>
              </div>
            </form>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <aside className="contact-info" aria-label="Coordonnées de l'agence">
              <div className="contact-callout">
                <span className="type-eyebrow">Contact direct</span>
                <a href="tel:+3210453669">010 45 36 69</a>
                <a href="mailto:info@agence-equerre.be">info@agence-equerre.be</a>
                <span className="contact-fax">Fax · 010 39 02 03</span>
                <p>Une permanence téléphonique est assurée 24h/24 pour les urgences liées aux copropriétés gérées.</p>
              </div>

              <address className="contact-addresses">
                <a href="https://www.google.com/maps/search/?api=1&query=Place+de+l%27Equerre+29%2F102+1348+Louvain-la-Neuve" target="_blank" rel="noopener noreferrer">
                  <span>Siège social</span>
                  Place de l&apos;Équerre 29/102<br />1348 Louvain-la-Neuve <b aria-hidden="true">↗</b>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Rue+du+Trait%C3%A9+de+Rome+8%2F003+1348+Louvain-la-Neuve" target="_blank" rel="noopener noreferrer">
                  <span>Bureau secondaire</span>
                  Rue du Traité de Rome 8/003<br />1348 Louvain-la-Neuve <b aria-hidden="true">↗</b>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Krommedijk+57+8301+Knokke-Heist" target="_blank" rel="noopener noreferrer">
                  <span>Antenne côte belge</span>
                  Krommedijk 57<br />8301 Knokke-Heist <b aria-hidden="true">↗</b>
                </a>
              </address>
            </aside>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
