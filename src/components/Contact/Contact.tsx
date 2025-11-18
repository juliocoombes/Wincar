import React, { useState } from "react";
import content from "../../content/siteContent";
import "./Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      if (
        content.contacto.formularioDestino &&
        content.contacto.formularioDestino.includes("@")
      ) {
        const mailto =
          `mailto:${content.contacto.formularioDestino}` +
          `?subject=Cotización&body=` +
          encodeURIComponent(
            `Nombre: ${form.nombre}\nEmail: ${form.email}\nTeléfono: ${form.telefono}\nMensaje: ${form.mensaje}`
          );
        window.location.href = mailto;
      } else {
        alert(
          "Configurar endpoint en contacto.formularioDestino para envío real."
        );
      }
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <div className="contact-layout">
          {/* COLUMNA IZQUIERDA: INFO */}
          <div className="contact-info">
            <h2>Contacto</h2>

            <p>
              Tel:{" "}
              <a href={`tel:${content.contacto.telefono}`}>
                {content.contacto.telefono}
              </a>{" "}
              · WhatsApp:{" "}
              <a
                href={`https://wa.me/${content.contacto.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                {content.contacto.whatsapp}
              </a>
            </p>

            <p>
              Email:{" "}
              <a href={`mailto:${content.contacto.email}`}>
                {content.contacto.email}
              </a>
            </p>

            <p>
              {content.contacto.direccion} – {content.contacto.ciudad}
            </p>

            <p className="small">
              Horarios Ventas: {content.horarios.ventas} · Posventa:{" "}
              {content.horarios.ventas}
            </p>

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

          {/* COLUMNA DERECHA: FORM */}
          <div className="contact-card">
            {sent ? (
              <div className="contact-thanks">
                <h3>¡Gracias!</h3>
                <p>Nos pondremos en contacto a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="contact-form">
                <input
                  required
                  placeholder="Nombre"
                  value={form.nombre}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, nombre: e.target.value }))
                  }
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
                <input
                  placeholder="Teléfono"
                  value={form.telefono}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, telefono: e.target.value }))
                  }
                />
                <textarea
                  rows={4}
                  placeholder="Mensaje"
                  value={form.mensaje}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, mensaje: e.target.value }))
                  }
                />
                <button className="btn contact-btn" disabled={loading}>
                  {loading ? "Enviando..." : "Solicitar cotización"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
