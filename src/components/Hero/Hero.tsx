import React, { useEffect, useState } from "react";
import content from "../../content/siteContent";
import "./Hero.css";

export default function Hero() {
  const slides = content.hero.slides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[index];

  return (
    <header
      className="hero"
      style={{ backgroundImage: `url(${current.imagen})` }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-layout">
        {/* Texto */}
        <div className="hero-info">
          <h1>{current.titulo}</h1>
          <p className="hero-sub">{current.subtitulo}</p>

          <div className="hero-ctas">
            {current.ctaPrincipal && (
              <a className="btn hero-btn-primary" href={current.ctaPrincipal.href}>
                {current.ctaPrincipal.label}
              </a>
            )}

            {current.ctaSecundaria && (
              <a className="btn hero-btn-secondary" href={current.ctaSecundaria.href}>
                {current.ctaSecundaria.label}
              </a>
            )}
          </div>
        </div>

        {/* Imagen lateral */}
        <div className="hero-image">
          {current.imagenLateral && <img src={current.imagenLateral} alt="" />}
        </div>
      </div>

      {/* Dots + arrows */}
      <div className="hero-carousel-controls">
        <button className="hero-arrow" onClick={() => setIndex((index - 1 + slides.length) % slides.length)}>‹</button>

        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={"hero-dot" + (i === index ? " active" : "")}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button className="hero-arrow" onClick={() => setIndex((index + 1) % slides.length)}>›</button>
      </div>
    </header>
  );
}
