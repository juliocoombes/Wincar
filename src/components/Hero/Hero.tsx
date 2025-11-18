import React from "react";
import content from "../../content/siteContent";
import "./Hero.css";

export default function Hero() {
  const h = content.hero;

  return (
    <header className="hero">
      <div className="container hero-layout">
        {/* COLUMNA IZQUIERDA */}
        <div className="hero-info">
          <h1>{h.titulo}</h1>
          <p className="hero-sub">{h.subtitulo}</p>

          <div className="hero-ctas">
            <a className="btn hero-btn-primary" href={h.ctaPrincipal.href}>
              {h.ctaPrincipal.label}
            </a>

            {h.ctaSecundaria && (
              <a className="btn hero-btn-secondary" href={h.ctaSecundaria.href}>
                {h.ctaSecundaria.label}
              </a>
            )}
          </div>

          <div className="small hero-caption">Subtitulo <code></code></div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="hero-image">
          {h.imagen && <img src={h.imagen} alt="" />}
        </div>
      </div>
    </header>
  );
}
