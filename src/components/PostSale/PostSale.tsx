import React from "react";
import content from "../../content/siteContent";
import "./PostSale.css";

export default function PostSale() {
  const p = content.posventa;

  return (
    <section id="posventa" className="section postventa-section">
      <div className="container">
        <header className="postventa-header">
          <h2>{p.titulo}</h2>
          <p className="postventa-desc">{p.descripcion}</p>
        </header>

        <div className="postventa-grid">
          {p.servicios.map((s, i) => (
            <div key={i} className="postventa-card">
              <div className="postventa-card-accent" />
              <div className="postventa-card-content">
                <h3>{s.titulo}</h3>
                <p>{s.detalle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
