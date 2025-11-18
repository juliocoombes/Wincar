import React from "react";
import content from "../../content/siteContent";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contacto" className="contact-full">
      <div className="contact-inner">
        {/* TEXTO */}
        <div className="contact-text">
          <h2>Contacto</h2>
          <p className="contact-subtitle">
            Estamos para ayudarte con tu consulta.
          </p>

          <div className="contact-pills">
            <a
              className="contact-pill"
              href={`tel:${content.contacto.telefono}`}
            >
              <span className="pill-label">Llamar</span>
              <span className="pill-value">{content.contacto.telefono}</span>
            </a>

            <a
              className="contact-pill"
              href={`https://wa.me/${content.contacto.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="pill-label">WhatsApp</span>
              <span className="pill-value">{content.contacto.whatsapp}</span>
            </a>

            <a
              className="contact-pill"
              href={`mailto:${content.contacto.email}`}
            >
              <span className="pill-label">Email</span>
              <span className="pill-value">{content.contacto.email}</span>
            </a>
          </div>

          <div className="contact-extra">
            <p>
              {content.contacto.direccion} – {content.contacto.ciudad}
            </p>
            <p className="small">
              Horarios Ventas: {content.horarios.ventas} · Posventa:{" "}
              {content.horarios.sabados ?? content.horarios.ventas}
            </p>
          </div>

          <div className="small contact-social">
            {content.sociales.instagram && (
              <a href={content.sociales.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            )}{" "}
            {content.sociales.facebook && (
              <a href={content.sociales.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            )}{" "}
            {content.sociales.youtube && (
              <a href={content.sociales.youtube} target="_blank" rel="noreferrer">
                YouTube
              </a>
            )}{" "}
            {content.sociales.tiktok && (
              <a href={content.sociales.tiktok} target="_blank" rel="noreferrer">
                TikTok
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
