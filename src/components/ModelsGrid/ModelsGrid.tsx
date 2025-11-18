import { Link } from "react-router-dom";
import { vehiculos, type Vehiculo } from "../../content/vehiculo";
import "./ModelsGrid.css"; 
export default function ModelsGrid() {
  return (
    <section id="modelos" className="section">
      <div className="container">
        <h2>Modelos</h2>

        <div className="grid">
          {vehiculos.map((m: Vehiculo) => (
            <article key={m.id} className="card">
              <Link
                to={`/modelos/${m.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={m.links.imagenes[0] || "/car-placeholder.jpg"}
                  alt={m.nombreComercial}
                />
                <h3>{m.nombreComercial}</h3>
                <p>{m.resumenCorto}</p>
              </Link>

              <div className="meta">
                {/* tomo el precio de la primera versión como “desde” */}
                {m.versiones[0]?.precioLista ? (
                  <span className="badge">
                    Desde: {m.versiones[0].precioLista}
                  </span>
                ) : null}

                {m.links.brochureUrl ? (
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
              </div>

              <ul
                style={{
                  margin: "0 14px 14px 28px",
                  color: "#444",
                }}
              >
                {/* uso algunos bullets de la primera versión como destacados */}
                {m.versiones[0]?.equipamientoClaves
                  .slice(0, 4)
                  .map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
              </ul>
            </article>
          ))}
        </div>

        {/* si más adelante querés KPIs, los podés traer de otro archivo y agregarlos acá */}
      </div>
    </section>
  );
}
