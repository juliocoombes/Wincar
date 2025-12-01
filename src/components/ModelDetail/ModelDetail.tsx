import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import "./ModelDetail.css";
import { getVehiculoById, type DetalleVehiculo } from "../../content/vehiculo";

export default function ModelDetail() {
  const { id } = useParams<{ id: string }>();
  const vehiculo: DetalleVehiculo | undefined = id ? getVehiculoById(id) : undefined;

  if (!vehiculo) {
    return (
      <section className="section">
        <div className="container">
          <p>Modelo no encontrado.</p>
          <Link to="/">Volver</Link>
        </div>
      </section>
    );
  }

  // 🔵 Estado de color seleccionado
  const coloresExteriores = vehiculo.colores?.exteriores ?? [];
  const [colorSeleccionado, setColorSeleccionado] = useState(
    coloresExteriores[0] ?? null
  );

  return (
    <section className="section">
      <div className="container">

        {/* HEADER */}
        <div className="modeldetail-header">
          <div className="modeldetail-info">
            <h1>{vehiculo.nombre}</h1>

            {vehiculo.presentacion && (
              <p className="modeldetail-eslogan">{vehiculo.presentacion}</p>
            )}

            <div className="modeldetail-actions">
              <Link to="/" className="badge">
                ← Volver a modelos
              </Link>

              {vehiculo.links?.brochureUrl && (
                <a
                  className="badge"
                  href={vehiculo.links.brochureUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ficha técnica PDF
                </a>
              )}

              {vehiculo.links?.videoUrl && (
                <a
                  className="badge"
                  href={vehiculo.links.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver video
                </a>
              )}
            </div>
          </div>

          {vehiculo.links?.imagenes?.[0] && (
            <div className="modeldetail-mainimg">
              <img
                src={vehiculo.links.imagenes[0]}
                alt={vehiculo.nombre}
              />
            </div>
          )}
        </div>

        {/* SEGURIDAD / CONECTIVIDAD / RENDIMIENTO */}
        <section className="modeldetail-grid-wide">
          <div className="card">
            <h2>Seguridad</h2>
            {vehiculo.seguridad?.length > 0 && (
              <ul className="modeldetail-list">
                {vehiculo.seguridad.map((item, i) => (
                  <li key={i}>
                    <strong>{item.nombre}:</strong> {item.descripcion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="card">
            <h2>Conectividad</h2>
            {vehiculo.conectividad?.length > 0 && (
              <ul className="modeldetail-list">
                {vehiculo.conectividad.map((item, i) => (
                  <li key={i}>
                    <strong>{item.nombre}:</strong> {item.descripcion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="card card-rendimiento">
            <div className="card-rendimiento-text">
              <h2>Rendimiento</h2>

              {vehiculo.rendimiento?.length > 0 && (
                <ul className="modeldetail-list">
                  {vehiculo.rendimiento.map((item, i) => (
                    <li key={i}>
                      <strong>{item.nombre}:</strong> {item.descripcion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {vehiculo.links?.imagenes?.[1] && (
              <div className="card-rendimiento-img">
                <img
                  src={vehiculo.links.imagenes[1]}
                  alt={`${vehiculo.nombre} rendimiento`}
                />
              </div>
            )}
          </div>
        </section>

        {/* COLORES / GARANTÍA */}
        <section className="modeldetail-grid-wide">
          
          {/* 🔵 NUEVO SISTEMA DE COLORES */}
          <div className="card colores-card">
            <h2>Colores exteriores</h2>

            {coloresExteriores.length > 0 ? (
              <>
                {/* Nombre del color actual */}
                <p className="color-nombre">
                  {colorSeleccionado?.nombre ?? coloresExteriores[0].nombre}
                </p>

                {/* Swatches con imágenes */}
                <div className="color-swatches">
                  {coloresExteriores.map((color, i) => {
                    const isSelected =
                      (colorSeleccionado?.nombre ?? coloresExteriores[0].nombre) ===
                      color.nombre;

                    return (
                      <button
                        key={i}
                        type="button"
                        className={`swatch ${isSelected ? "selected" : ""}`}
                        onClick={() => setColorSeleccionado(color)}
                      >
                        <img src={color.imagen} alt={color.nombre} />
                        {isSelected && <span className="check">✔</span>}
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <p>No hay información de colores exteriores.</p>
            )}

            {/* Interiores */}
            {vehiculo.colores?.interiores?.length > 0 && (
              <p className="color-interiores">
                <strong>Interiores:</strong>{" "}
                {vehiculo.colores.interiores.join(", ")}
              </p>
            )}
          </div>

          {/* GARANTÍA */}
          <div className="card">
            <h2>Garantía</h2>
            {vehiculo.garantia?.garantia && (
              <p>
                <strong>Garantía:</strong> {vehiculo.garantia.garantia}
              </p>
            )}
            {vehiculo.garantia?.servicio && (
              <p>
                <strong>Servicio:</strong> {vehiculo.garantia.servicio}
              </p>
            )}
          </div>
        </section>

        {/* GALERÍA */}
        {vehiculo.links?.imagenes && vehiculo.links.imagenes.length > 1 && (
          <section className="modeldetail-gallery">
            <h2>Galería</h2>

            <div className="modeldetail-gallery-grid">
              {vehiculo.links.imagenes.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${vehiculo.nombre} ${i + 1}`}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
