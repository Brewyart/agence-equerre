"use client";

import { type FormEvent, useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section-padding" id="contact">
      <div className="container-bw">
        <RevealOnScroll>
          <div className="section-header">
            <p className="type-eyebrow">Contact</p>
            <h2 className="type-h2">Rencontrons-nous</h2>
            <p className="type-lead">
              Passez au bureau, appelez-nous ou envoyez un message. Nous
              répondons dans les 24 heures.
            </p>
          </div>
        </RevealOnScroll>

        <div className="contact-grid">
          <RevealOnScroll>
            {submitted ? (
              <div
                className="contact-form"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div>
                  <p
                    className="type-h3"
                    style={{ marginBottom: "var(--space-md)" }}
                  >
                    Merci pour votre message
                  </p>
                  <p style={{ color: "var(--color-text-sub)" }}>
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nom" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="prenom" className="form-label">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tel" className="form-label">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="service" className="form-label">
                    Votre demande concerne
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="form-input form-select"
                    required
                  >
                    <option value="">— Choisir un service —</option>
                    <option value="syndic">Syndic</option>
                    <option value="vendre">Vendre</option>
                    <option value="louer">Louer</option>
                    <option value="acheter">Acheter</option>
                    <option value="gestion">Gestion de mon bien</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="message" className="form-label">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                    Envoyer
                  </button>
                </div>
              </form>
            )}
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="contact-info">
              <div className="contact-block">
                <h3>Siège social</h3>
                <p>
                  Place de l&apos;Équerre 29
                  <br />
                  1348 Louvain-la-Neuve
                </p>
              </div>

              <div className="contact-block-row">
                <div className="contact-block">
                  <h3>Bureau secondaire</h3>
                  <p>
                    Rue du Traité de Rome 8
                    <br />
                    1348 Louvain-la-Neuve
                  </p>
                </div>
                <div className="contact-block">
                  <h3>Antenne côte belge</h3>
                  <p>
                    Krommedijk 57
                    <br />
                    8301 Knokke-Heist
                  </p>
                </div>
              </div>

              <div className="contact-block-row">
                <div className="contact-block">
                  <h3>Téléphone</h3>
                  <a href="tel:+3210453669">010/45 36 69</a>
                </div>
                <div className="contact-block">
                  <h3>Fax</h3>
                  <p>010/39 02 03</p>
                </div>
              </div>

              <div className="contact-block">
                <h3>Email</h3>
                <a href="mailto:info@agence-equerre.be">
                  info@agence-equerre.be
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
