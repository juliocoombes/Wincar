// Archivo ÚNICO de contenidos para completar por el cliente.
// Cambiando este archivo se actualiza todo el sitio.
export type Modelo = {
  nombre: string
  slug: string
  resumen: string
  precioDesde?: string
  brochureUrl?: string
  galeria: string[]
  destacados: string[]
}

export type Horarios = {
  ventas: string
  sabados?: string
  domingos?: string
}

export type Sucursal = {
  nombre: string
  direccion: string
  ciudad: string
  telefono: string
  whatsapp: string
  email: string
  mapaEmbedUrl?: string
}

export type SiteContent = {
  marca: string
  logo?: string
  nav: { label: string; href: string }[]
  hero: {
    titulo: string
    subtitulo: string
    ctaPrincipal: { label: string; href: string }
    ctaSecundaria?: { label: string; href: string }
    imagen?: string
    imagenFondo?: string
  }
  modelos: Modelo[]
  posventa: {
    titulo: string
    descripcion: string
    servicios: { titulo: string; detalle: string }[]
  }
  kpis?: { label: string; valor: string }[]
  sucursales: Sucursal[]
  horarios: Horarios
  contacto: {
    telefono: string
    whatsapp: string
    email: string
    direccion: string
    ciudad: string
    formularioDestino?: string // email o endpoint
    politicaPrivacidadUrl?: string
  }
  sociales: {
    instagram?: string
    facebook?: string
    youtube?: string
    tiktok?: string
  }
  seo: {
    titulo: string
    descripcion: string
  }
}

const content: SiteContent = {
  marca: "Wincar Motors",
  logo: "/logo.png", // (opcional) subir a /public
  nav: [
    { label: "Modelos", href: "#modelos" },
    { label: "Posventa", href: "#posventa" },
    { label: "Sucursales", href: "#sucursales" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
    titulo: "WINCAR MOTORS",
    subtitulo: "Concesionaria oficial Hyundai",
    ctaPrincipal: { label: "Solicitar cotización", href: "#contacto" },
    ctaSecundaria: { label: "Ver Modelos", href: "#modelos" },
    imagen: "/hero.jpg", 
    imagenFondo:"./tucson/tucson-1.jpg"
  },
  modelos: [
    {
      nombre: "HB20",
      slug: "hb20",
      resumen: "Otra categoría de auto. Tecnología, seguridad y diseño inteligente.",
      precioDesde: "Consultar",
      brochureUrl: "",
      galeria: [],
      destacados: ["Caja manual o automática", "Airbags y control de estabilidad", "Pantalla multimedia"]
    },
    {
      nombre: "New Tucson",
      slug: "new-tucson",
      resumen: "Elevando los estándares. Nueva forma de conducir.",
      precioDesde: "Consultar",
      brochureUrl: "",
      galeria: [],
      destacados: ["Diseño futurista", "Conectividad", "Asistencias ADAS"]
    },
    {
      nombre: "All‑New Staria",
      slug: "all-new-staria",
      resumen: "Movilidad de nueva generación para la familia o el trabajo.",
      precioDesde: "Consultar",
      brochureUrl: "",
      galeria: [],
      destacados: ["Gran espacio interior", "Confort premium", "Seguridad avanzada"]
    },
    {
      nombre: "New Creta",
      slug: "new-creta",
      resumen: "Imponente por fuera, innovador por dentro.",
      precioDesde: "Consultar",
      brochureUrl: "",
      galeria: [],
      destacados: ["Diseño audaz", "Conectividad BlueLink", "Eficiencia"]
    }
  ],
  posventa: {
    titulo: "Posventa Oficial",
    descripcion: "Contamos con un taller asociado donde podras realizar cualquier servicio relacionado a tu Hyundai ",
    servicios: [
      { titulo: "Repuestos originales de fabrica", detalle: "Contamos con repuestos oficiales de Hyundai." },
      { titulo: "Taller asociado: MM Service Automotor Hyundai ", detalle: " Direccion: Correa 3151, C1429 Cdad. Autónoma de Buenos Aires, Contacto: 114992 2346 " },
    ]
  },
  kpis: [
    { label: "Años de trayectoria", valor: "20+" },
    { label: "Clientes atendidos", valor: "10.000+" },
    { label: "Puntos de atención", valor: "2" }
  ],
  sucursales: [
    {
      nombre: " Wincar Motors",
      direccion: "Avenida Libertador 8400",
      ciudad: "CABA",
      telefono: " 11 4702 7200",
      whatsapp: "+ 54 9 11 2634 7413",
      email: "ldilernia@wincarmotors.com.ar",
      mapaEmbedUrl: ""
    }
  ],
  horarios: {
    ventas: "Lunes a Viernes de 10hrs a 19hrs",
    sabados: "Sabados de 10hrs a 14hrs",
    domingos: "Cerrado"
  },
  contacto: {
    telefono: "11 4702 7200",
    whatsapp: " + 54 9 11 2634 7413",
    email: "ldilernia@wincarmotors.com.ar",
    direccion: "Avenida Libertador 8400",
    ciudad: "CABA ",
    formularioDestino: "info@internationalmotors.net",
    politicaPrivacidadUrl: "#"
  },
  sociales: {
    instagram: "https://www.instagram.com/wincarmotors?igsh=b2ZpM2ptb3VxZDQ1&utm_source=qr",
    
  },
  seo: {
    titulo: "Wincar Motors , Modelos, Posventa y Contacto",
    descripcion: "Conocé HB20, New Tucson, All‑New Staria y New Creta. Servicio de posventa oficial y atención personalizada."
  }
}

export default content
