import { Link } from "react-router-dom";
import { vehiculos, type DetalleVehiculo } from "../../content/vehiculo";
import "./ModelsGrid.css";

export default function ModelsGrid() {
  return (
    <section id="modelos" className="section">
      <div className="container">
        <h2>Modelos</h2>

        <div className="grid">
          {vehiculos.map((m: DetalleVehiculo) => {
            const mainImg =
              m.links?.imagenes && m.links.imagenes.length > 0
                ? m.links.imagenes[0]
                : "/car-placeholder.jpg";

            const resumen =
              m.presentacion && m.presentacion.length > 120
                ? m.presentacion.slice(0, 120) + "..."
                : m.presentacion;

            return (
              <article key={m.id} className="card">
                <Link
                  to={`/modelos/${m.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img src={mainImg} alt={m.nombre} />

                  <h3>{m.nombre}</h3>

                  
                </Link>

                <div className="meta">
                  {m.links?.brochureUrl ? (
                    <a
                      className="badge"
                      href={m.links.brochureUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      Ficha técnica
                    </a>
                  ) : null}

                  {m.links?.videoUrl ? (
                    <a
                      className="badge"
                      href={m.links.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      Ver video
                    </a>
                  ) : null}
                </div>

                <ul
                  style={{
                    margin: "0 14px 14px 28px",
                    color: "#444"
                  }}
                >
                  {/* Si querés bullets, podés usar rendimiento o seguridad, ej.:

                  m.rendimiento.slice(0, 3).map((r, i) => (
                    <li key={i}>{r.nombre}</li>
                  ))

                  */}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
