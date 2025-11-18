import React from "react";
import content from "../../content/siteContent";
import "./Branches.css";

export default function Sucursales() {
  return (
    <section id="sucursales" className="section sucursales-section">
      <div className="container">
        <h2>Sucursales</h2>

        <div className="sucursales-grid">
          {content.sucursales.map((s, i) => (
            <div key={i} className="sucursal-card">
              <div className="sucursal-card-body">
                <h3>{s.nombre}</h3>

                <p className="sucursal-direccion">
                  {s.direccion} – {s.ciudad}
                </p>

                <p className="small sucursal-contacto">
                  Tel: <a href={`tel:${s.telefono}`}>{s.telefono}</a> · WhatsApp:{" "}
                  <a
                    href={`https://wa.me/${s.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.whatsapp}
                  </a>
                </p>

                <p className="small sucursal-contacto">
                  Email:{" "}
                  <a href={`mailto:${s.email}`}>
                    {s.email}
                  </a>
                </p>
              </div>

              {s.mapaEmbedUrl ? (
                <div className="sucursal-mapa-wrapper">
                  <iframe
                    src={s.mapaEmbedUrl}
                    loading="lazy"
                    title={`Mapa ${s.nombre}`}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
