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
              href={`https://wa.me/5491126347413`} 
              target="_blank"
              rel="noreferrer"
            >
              <span className="pill-label">WhatsApp</span>
              <span className="pill-value">{content.contacto.whatsapp}</span>
            </a>

            <a
  className="contact-pill"
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${content.contacto.email}`}
  target="_blank"
  rel="noopener noreferrer"
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
              Horarios Ventas: {content.horarios.ventas} · 
              
            </p>
          </div>

 <div className="small contact-social">
  {content.sociales.instagram && (
    <a
      href={content.sociales.instagram}
      target="_blank"
      rel="noreferrer"
      className="social-icon"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="icon"
      >
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 
        0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 
        0 3 1.34 3 3v10c0 1.66-1.34 3-3 
        3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 
        3-3h10zm-5 3a5 5 0 100 10 5 5 
        0 000-10zm0 2a3 3 0 110 6 3 3 
        0 010-6zm4.75-.75a1 1 0 110 2 1 1 0 
        010-2z"/>
      </svg>
    </a>
  )}
</div>


        </div>
      </div>
    </section>
  );
}
