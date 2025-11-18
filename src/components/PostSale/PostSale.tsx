import React from 'react'
import content from '../../content/siteContent'

export default function PostSale(){
  const p = content.posventa
  return (
    <section id="posventa" className="section" style={{background:'#fff'}}>
      <div className="container">
        <h2>{p.titulo}</h2>
        <p style={{maxWidth:760}}>{p.descripcion}</p>
        <div className="grid" style={{marginTop:12}}>
          {p.servicios.map((s,i)=>(
            <div key={i} className="card">
              <div style={{padding:'14px 14px 0'}}>
                <h3 style={{marginBottom:6}}>{s.titulo}</h3>
                <p>{s.detalle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
