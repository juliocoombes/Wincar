import React from "react";
import content from "../../content/siteContent";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer-v3">
      <div className="footer-container">
        <div className="footer-brand-v3">
          {content.logo && (
            <img src={content.logo} alt={content.marca} className="footer-logo-v3" />
          )}
          <strong>{content.marca}</strong>
          <span className="footer-copy-v3">
            © {new Date().getFullYear()} {content.marca}. Todos los derechos reservados.
          </span>
        </div>

        <div className="footer-links-v3">
          <a href="#modelos">Modelos</a>
          <a href="#posventa">Posventa</a>
          <a href="#sucursales">Sucursales</a>
          <a href="#contacto">Contacto</a>
          {content.contacto.politicaPrivacidadUrl && (
            <a href={content.contacto.politicaPrivacidadUrl}>Privacidad</a>
          )}
        </div>
      </div>
    </footer>
  );
}
