import { useParams, Link } from "react-router-dom";
import "./ModelDetail.css"; // 👈 NUEVO
import { getVehiculoById, type Vehiculo } from "../../content/vehiculo";

export default function ModelDetail() {
  const { id } = useParams<{ id: string }>();
  const vehiculo: Vehiculo | undefined = id ? getVehiculoById(id) : undefined;

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

  const seguridadFlags: string[] = [];
  if (vehiculo.seguridad.abs_ebd) seguridadFlags.push("ABS con EBD");
  if (vehiculo.seguridad.esc_tcs) seguridadFlags.push("Control de estabilidad y tracción (ESC/TCS)");
  if (vehiculo.seguridad.hac) seguridadFlags.push("Asistente de arranque en pendiente (HAC)");
  if (vehiculo.seguridad.ess) seguridadFlags.push("Luz de frenado de emergencia (ESS)");
  if (vehiculo.seguridad.camaraRetroceso) seguridadFlags.push("Cámara de retroceso");
  if (vehiculo.seguridad.isofix) seguridadFlags.push("Anclajes ISOFIX");

  const confortFlags: string[] = [];
  if (vehiculo.confort.accesoSinLlave) confortFlags.push("Acceso sin llave");
  if (vehiculo.confort.botonStartStop) confortFlags.push("Botón Start/Stop");

  return (
    <section className="section">
      <div className="container">

        {/* HEADER */}
        <div className="modeldetail-header">
          
          <div className="modeldetail-info">
            <h1>{vehiculo.nombreComercial}</h1>

            {vehiculo.eslogan && (
              <p className="modeldetail-eslogan">{vehiculo.eslogan}</p>
            )}

            <p className="modeldetail-resumen">{vehiculo.resumenCorto}</p>

            <div className="modeldetail-actions">
              <Link to="/" className="badge">← Volver a modelos</Link>

              {vehiculo.links.brochureUrl && (
                <a className="badge" href={vehiculo.links.brochureUrl} target="_blank" rel="noreferrer">
                  Ficha técnica PDF
                </a>
              )}

              {vehiculo.links.videoUrl && (
                <a className="badge" href={vehiculo.links.videoUrl} target="_blank" rel="noreferrer">
                  Ver video
                </a>
              )}
            </div>
          </div>

          {vehiculo.links.imagenes?.[0] && (
            <div className="modeldetail-mainimg">
              <img
                src={vehiculo.links.imagenes[0]}
                alt={vehiculo.nombreComercial}
              />
            </div>
          )}
        </div>

        {/* VERSIONES */}
        <section className="modeldetail-grid">
          <h2>Versiones</h2>

          {vehiculo.versiones.map((v, idx) => (
            <article key={idx} className="card">
              <h3>{v.nombre}</h3>

              <p><strong>Transmisión:</strong> {v.transmision}</p>

              {v.precioLista && (
                <p><strong>Precio lista:</strong> {v.precioLista}</p>
              )}

              {v.equipamientoClaves?.length > 0 && (
                <ul className="modeldetail-list">
                  {v.equipamientoClaves.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>

        {/* MOTOR + DIMENSIONES */}
        <section className="modeldetail-grid-wide">
          <div className="card">
            <h2>Motor</h2>
            <p><strong>Denominación:</strong> {vehiculo.motor.denominacion}</p>
            {vehiculo.motor.cilindrada_cc && <p><strong>Cilindrada:</strong> {vehiculo.motor.cilindrada_cc} cc</p>}
            {vehiculo.motor.potencia_cv_rpm && <p><strong>Potencia:</strong> {vehiculo.motor.potencia_cv_rpm}</p>}
            {vehiculo.motor.torque_nm_rpm && <p><strong>Torque:</strong> {vehiculo.motor.torque_nm_rpm}</p>}
            {vehiculo.motor.combustible && <p><strong>Combustible:</strong> {vehiculo.motor.combustible}</p>}
            {vehiculo.motor.traccion && <p><strong>Tracción:</strong> {vehiculo.motor.traccion}</p>}
            {vehiculo.motor.normaEmisiones && <p><strong>Norma emisiones:</strong> {vehiculo.motor.normaEmisiones}</p>}
          </div>

          <div className="card">
            <h2>Dimensiones</h2>
            {vehiculo.dimensiones.largo_mm && <p><strong>Largo:</strong> {vehiculo.dimensiones.largo_mm} mm</p>}
            {vehiculo.dimensiones.ancho_mm && <p><strong>Ancho:</strong> {vehiculo.dimensiones.ancho_mm} mm</p>}
            {vehiculo.dimensiones.alto_mm && <p><strong>Alto:</strong> {vehiculo.dimensiones.alto_mm} mm</p>}
            {vehiculo.dimensiones.distanciaEntreEjes_mm && <p><strong>Entre ejes:</strong> {vehiculo.dimensiones.distanciaEntreEjes_mm} mm</p>}
            {vehiculo.dimensiones.despeje_mm && <p><strong>Despeje:</strong> {vehiculo.dimensiones.despeje_mm} mm</p>}
            {vehiculo.dimensiones.baul_l && <p><strong>Baúl:</strong> {vehiculo.dimensiones.baul_l} L</p>}
            {vehiculo.dimensiones.tanque_l && <p><strong>Tanque:</strong> {vehiculo.dimensiones.tanque_l} L</p>}
            {vehiculo.dimensiones.peso_kg && <p><strong>Peso:</strong> {vehiculo.dimensiones.peso_kg} kg</p>}
            {vehiculo.dimensiones.neumaticos && <p><strong>Neumáticos:</strong> {vehiculo.dimensiones.neumaticos}</p>}
            {vehiculo.dimensiones.llantas && <p><strong>Llantas:</strong> {vehiculo.dimensiones.llantas}</p>}
          </div>
        </section>

        {/* SEGURIDAD / CONFORT / MULTIMEDIA */}
        <section className="modeldetail-grid-wide">
          <div className="card">
            <h2>Seguridad</h2>

            {vehiculo.seguridad.airbags && (
              <p><strong>Airbags:</strong> {vehiculo.seguridad.airbags}</p>
            )}

            {vehiculo.seguridad.sensoresEstacionamiento && (
              <p><strong>Sensores:</strong> {vehiculo.seguridad.sensoresEstacionamiento}</p>
            )}

            {(seguridadFlags.length > 0 || vehiculo.seguridad.otras?.length) && (
              <ul className="modeldetail-list">
                {seguridadFlags.map((s, i) => <li key={i}>{s}</li>)}
                {vehiculo.seguridad.otras?.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            )}
          </div>

          <div className="card">
            <h2>Confort y tecnología</h2>

            {vehiculo.confort.climatizacion && <p><strong>Climatización:</strong> {vehiculo.confort.climatizacion}</p>}
            {vehiculo.confort.direccion && <p><strong>Dirección:</strong> {vehiculo.confort.direccion}</p>}
            {vehiculo.confort.levantavidrios && <p><strong>Levantavidrios:</strong> {vehiculo.confort.levantavidrios}</p>}
            {vehiculo.confort.espejos && <p><strong>Espejos:</strong> {vehiculo.confort.espejos}</p>}
            {vehiculo.confort.tapizados && <p><strong>Tapizados:</strong> {vehiculo.confort.tapizados}</p>}
            {vehiculo.confort.volante && <p><strong>Volante:</strong> {vehiculo.confort.volante}</p>}

            {(confortFlags.length > 0 || vehiculo.confort.otras?.length) && (
              <ul className="modeldetail-list">
                {confortFlags.map((c, i) => <li key={i}>{c}</li>)}
                {vehiculo.confort.otras?.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            )}
          </div>

          <div className="card">
            <h2>Multimedia</h2>

            {vehiculo.multimedia.pantalla && <p><strong>Pantalla:</strong> {vehiculo.multimedia.pantalla}</p>}
            {vehiculo.multimedia.conectividad && <p><strong>Conectividad:</strong> {vehiculo.multimedia.conectividad.join(", ")}</p>}
            {typeof vehiculo.multimedia.parlantes === "number" && <p><strong>Parlantes:</strong> {vehiculo.multimedia.parlantes}</p>}
            {vehiculo.multimedia.puertos && <p><strong>Puertos:</strong> {vehiculo.multimedia.puertos.join(", ")}</p>}
            {vehiculo.multimedia.camara && <p><strong>Cámara:</strong> {vehiculo.multimedia.camara}</p>}
          </div>
        </section>

        {/* COLORES / GARANTÍA */}
        <section className="modeldetail-grid-wide">
          <div className="card">
            <h2>Colores</h2>
            <p><strong>Exteriores:</strong> {vehiculo.colores.exteriores.join(", ")}</p>

            {vehiculo.colores.interiores && (
              <p><strong>Interiores:</strong> {vehiculo.colores.interiores.join(", ")}</p>
            )}
          </div>

          <div className="card">
            <h2>Garantía y origen</h2>
            {vehiculo.garantia.garantia && <p><strong>Garantía:</strong> {vehiculo.garantia.garantia}</p>}
            {vehiculo.garantia.origen && <p><strong>Origen:</strong> {vehiculo.garantia.origen}</p>}
            {vehiculo.garantia.servicio && <p><strong>Servicio:</strong> {vehiculo.garantia.servicio}</p>}
          </div>
        </section>

        {/* GALERÍA */}
        {vehiculo.links.imagenes.length > 1 && (
          <section className="modeldetail-gallery">
            <h2>Galería</h2>

            <div className="modeldetail-gallery-grid">
              {vehiculo.links.imagenes.map((img, i) => (
                <img key={i} src={img} alt={`${vehiculo.nombreComercial} ${i + 1}`} />
              ))}
            </div>
          </section>
        )}

      </div>
    </section>
  );
}
