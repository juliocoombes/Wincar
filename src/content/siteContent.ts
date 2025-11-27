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
    slides: {
      imagen: string            // imagen de fondo del slide
      titulo: string
      subtitulo: string
      ctaPrincipal?: { label: string; href: string }
      ctaSecundaria?: { label: string; href: string }
      imagenLateral?: string    // opcional: imagen a la derecha
    }[]
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
  logo: "/otros/logo.jpg", // (opcional) subir a /public
  nav: [
    { label: "Modelos", href: "#modelos" },
    { label: "Posventa", href: "#posventa" },
    { label: "Sucursales", href: "#sucursales" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
  slides: [
    {
      imagen: "/carrousel/carrousel-3.jpg",
      titulo: "Nuevo HB20",
      subtitulo: "Potencia, seguridad y tecnología.",
      ctaPrincipal: { label: "Descubrir", href: "/modelos/hb20" },
      ctaSecundaria: { label: "Contactanos", href: "#contacto" },
      imagenLateral: "/images/lado1.png"
    },
    {
      imagen: "/carrousel/carrousel-6.jpg",
      titulo: "Hyundai Creta",
      subtitulo: "Conectividad total.",
      ctaPrincipal: { label: "Descubrir", href: "/modelos/creta" },
      imagenLateral: "/images/lado2.png"
    },
    {
      imagen: "/carrousel/carrousel-4.jpg",
      titulo: "HB20s",
      subtitulo: "Elegancia y performance.",
      ctaPrincipal: { label: "Descubrir", href: "#hb20s" }
    },
    {
      imagen: "/carrousel/carrousel-2.jpg",
      titulo: "Tucson Turbo",
      subtitulo: "Elegancia y performance.",
      ctaPrincipal: { label: "Descubrir", href: "/modelos/creta" }
    },
    {
      imagen: "/carrousel/carrousel-1.jpg",
      titulo: "Santa Fe",
      subtitulo: "Elegancia y performance.",
      ctaPrincipal: { label: "Descubrir", href: "/modelos/santa-fe" }
    },
    {
      imagen: "/carrousel/carrousel-5.jpg",
      titulo: "Staria",
      subtitulo: "Elegancia y performance.",
      ctaPrincipal: { label: "Descubrir", href: "#ficha" }
    }
  ]
}
,
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
      email: "info@wincarmotors.com.ar",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.594819773701!2d-58.4654153!3d-34.5384921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6a0e460272d%3A0xe3d3f1c4b34fabe8!2sAv.%20del%20Libertador%208400%2C%20C1429BNQ%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1764252479978!5m2!1ses!2sar",

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
    email: "info@wincarmotors.com.ar",
    direccion: "Avenida Libertador 8400",
    ciudad: "CABA ",
    formularioDestino: "info@wincarmotors.com.ar",
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
