// Template de información ESPECÍFICA por vehículo
// Copiá este archivo para cada modelo (ej.: hb20s.ts, tucson.ts) y completá los campos.
// Si un dato no aplica, dejalo en "" o [] según corresponda.

export type Version = {
  nombre: string // ej.: Comfort Plus MT / Platinum Safety AT
  transmision: string // ej.: Manual 6 vel / Automática 6 vel
  precioLista?: string // opcional, referencial
  equipamientoClaves: string[] // bullets cortos por versión
}

export type Motor = {
  denominacion: string // ej.: Gamma 1.6 16V DOHC D-CVVT
  cilindrada_cc?: number // ej.: 1591
  potencia_cv_rpm?: string // ej.: "123 @ 6.300 rpm"
  torque_nm_rpm?: string // ej.: "152 @ 4.850 rpm"
  combustible?: string // ej.: Nafta
  traccion?: string // ej.: Delantera
  normaEmisiones?: string // opcional
}

export type Dimensiones = {
  largo_mm?: number
  ancho_mm?: number
  alto_mm?: number
  distanciaEntreEjes_mm?: number
  despeje_mm?: number
  baul_l?: number
  tanque_l?: number
  peso_kg?: number
  neumaticos?: string // ej.: 185/60 R15
  llantas?: string // ej.: Aleación 15"
}

export type SeguridadYADAS = {
  airbags?: string // ej.: 6 (frontales, laterales y de cortina)
  abs_ebd?: boolean
  esc_tcs?: boolean
  hac?: boolean // asistente de arranque en pendientes
  ess?: boolean // luz de frenado de emergencia
  camaraRetroceso?: boolean
  sensoresEstacionamiento?: string // ej.: traseros / delanteros y traseros
  isofix?: boolean
  otras?: string[]
}

export type ConfortYTecnologia = {
  accesoSinLlave?: boolean
  botonStartStop?: boolean
  climatizacion?: string // ej.: Aire acondicionado / Climatizador automático
  direccion?: string // ej.: Asistida eléctricamente
  levantavidrios?: string // ej.: 4 eléctricos con one touch
  espejos?: string // ej.: Eléctricos con luz de giro
  tapizados?: string // ej.: Tela / Cuero sintético
  volante?: string // ej.: Regulable en altura/profundidad, multifunción
  otras?: string[]
}

export type Multimedia = {
  pantalla?: string // ej.: 8"
  conectividad?: string[] // ej.: ["Apple CarPlay", "Android Auto", "Bluetooth", "USB"]
  parlantes?: number
  puertos?: string[] // ej.: ["USB delantera", "USB trasera", "12V"]
  camara?: string // ej.: Cámara de retroceso con líneas auxiliares
}

export type Colores = {
  exteriores: string[] // ej.: Blanco Atlas, Plata Brisk, Gris Silk, Negro Onix, etc.
  interiores?: string[] // ej.: Negro/tela
}

export type GarantiaYOrigen = {
  garantia?: string // ej.: 3 años o 100.000 km
  origen?: string // ej.: Brasil
  servicio?: string // Planes de mantenimiento / intervalos
}

export type LinksYMedios = {
  brochureUrl?: string // PDF oficial
  imagenes: string[] // rutas a /public o URLs
  videoUrl?: string // YouTube u otro
}

export type Vehiculo = {
  id: string // slug único, ej.: "hb20s"
  nombreComercial: string // ej.: HB20S
  eslogan?: string // frase corta de marketing
  resumenCorto: string // 1–2 líneas intro
  versiones: Version[]
  motor: Motor
  dimensiones: Dimensiones
  seguridad: SeguridadYADAS
  confort: ConfortYTecnologia
  multimedia: Multimedia
  colores: Colores
  garantia: GarantiaYOrigen
  links: LinksYMedios
}

// ===================
// EJEMPLO A COMPLETAR
// ===================
// HB20 HATCH
const hb20: Vehiculo = {
  id: "hb20",
  nombreComercial: "HB20",
  eslogan: "Lo cotidiano puede volverse extraordinario.",
  resumenCorto:
    "Hatchback del segmento B ideal para todos los días, con espíritu deportivo, gran conectividad y un completo paquete de seguridad para uso urbano y periurbano.",

  versiones: [
    {
      nombre: "Comfort Plus MT",
      transmision: "Manual 6 vel",
      precioLista: "Consultar",
      equipamientoClaves: [
        "Motor 1.6 123 CV",
        "Control de estabilidad y tracción",
        "Pantalla táctil 8\" con Android Auto/Apple CarPlay"
      ]
    },
    {
      nombre: "Platinum Safety AT",
      transmision: "Automática 6 vel",
      precioLista: "Consultar",
      equipamientoClaves: [
        "6 airbags",
        "Cámara de retroceso con guías",
        "Control de velocidad crucero con limitador"
      ]
    }
  ],

  motor: {
    denominacion: "Gamma 1.6 16V DOHC D-CVVT",
    cilindrada_cc: 1591,
    potencia_cv_rpm: "123 @ 6.300 rpm",
    torque_nm_rpm: "152 @ 4.850 rpm",
    combustible: "Nafta",
    traccion: "Delantera",
    normaEmisiones: "Euro 5 aprox."
  },

  dimensiones: {
    largo_mm: 4015,
    ancho_mm: 1720,
    alto_mm: 1470,
    distanciaEntreEjes_mm: 2530,
    despeje_mm: 160,
    baul_l: 300,
    tanque_l: 50,
    peso_kg: 1056,
    neumaticos: "185/60 R15",
    llantas: "Aleación 15\""
  },

  seguridad: {
    airbags: "6 (frontales, laterales y de cortina)",
    abs_ebd: true,
    esc_tcs: true,
    hac: true,
    ess: true,
    camaraRetroceso: true,
    sensoresEstacionamiento: "Traseros",
    isofix: true,
    otras: [
      "Control de estabilidad (ESP)",
      "Control de tracción (TCS)",
      "Asistente de arranque en pendiente (HAC)",
      "Monitor de presión de neumáticos",
      "Alerta y frenado autónomo (FCA)",
      "Asistente de mantenimiento y centrado de carril (LKA/LFA)",
      "Asistente de punto ciego (BCA)"
    ]
  },

  confort: {
    accesoSinLlave: true,
    botonStartStop: true,
    climatizacion: "Aire acondicionado manual",
    direccion: "Asistida eléctricamente (MDPS)",
    levantavidrios: "4 eléctricos (one-touch conductor)",
    espejos: "Eléctricos con luz de giro",
    tapizados: "Tela bicolor",
    volante: "Regulable en altura y profundidad, multifunción",
    otras: [
      "Control de velocidad crucero con limitador",
      "Asiento trasero rebatible 60/40",
      "Computadora de a bordo",
      "Cargador inalámbrico de smartphone (según versión)"
    ]
  },

  multimedia: {
    pantalla: "8\" táctil",
    conectividad: ["Apple CarPlay", "Android Auto", "Bluetooth", "USB"],
    parlantes: 4,
    puertos: ["USB delantero", "Toma 12V"],
    camara: "Retroceso"
  },

  colores: {
    exteriores: ["Blanco", "Plata", "Gris", "Negro"],
    interiores: ["Negro/Tela"]
  },

  garantia: {
    garantia: "Consultar según mercado (3 a 5 años / 100.000 km aprox.)",
    origen: "Brasil",
    servicio: "Mantenimiento cada 10.000 km o 12 meses"
  },

 links: {
  brochureUrl:
    "https://www.hyundai.com.ar/publicfiles/datasheets/hb20fichatecnica-final_compressed_1732281228.pdf",
  imagenes: [
    "/hb20h/hb20h-2.jpg",
    "/hb20h/hb20h-1.jpg",
    "/hb20h/hb20h-3.jpg",
    "/hb20h/hb20h-4.jpeg",
    "/hb20h/hb20h-5.jpg"
  ],
  videoUrl: "https://www.youtube.com/watch?v=cjVO54CSy4E"
}

};

// NUEVA CRETA
const creta: Vehiculo = {
  id: "creta",
  nombreComercial: "Nueva Creta",
  eslogan: "Diseño audaz, innovación y confort en cada viaje.",
  resumenCorto:
    "SUV compacta del segmento B-SUV, con diseño moderno, motor eficiente 1.5 Smartstream, alto nivel de seguridad activa y conectividad avanzada, pensada para familias jóvenes y uso mixto ciudad/ruta.",

  versiones: [
    {
      nombre: "Premium IVT",
      transmision: "Automática IVT 8 marchas simuladas",
      precioLista: "Consultar",
      equipamientoClaves: [
        "Motor Smartstream G 1.5 115 CV",
        "Paquete Hyundai SmartSense (FCA, LKA, SCC*)",
        "Pantallas dobles 10,25\" integradas (*según versión/mercado)"
      ]
    },
    {
      nombre: "Safety IVT",
      transmision: "Automática IVT",
      precioLista: "Consultar",
      equipamientoClaves: [
        "6 airbags",
        "Cámara de retroceso",
        "Climatizador automático digital de dos zonas"
      ]
    }
  ],

  motor: {
    denominacion: "Smartstream G 1.5 16V DOHC D-CVVT",
    cilindrada_cc: 1497,
    potencia_cv_rpm: "115 @ 6.300 rpm",
    torque_nm_rpm: "144 @ 4.500 rpm",
    combustible: "Nafta",
    traccion: "Delantera",
    normaEmisiones: "Euro 6 aprox."
  },

  dimensiones: {
    largo_mm: 4300,
    ancho_mm: 1790,
    alto_mm: 1635,
    distanciaEntreEjes_mm: 2610,
    despeje_mm: 190,
    baul_l: 422,
    tanque_l: 50,
    peso_kg: 1270,
    neumaticos: "215/60 R17",
    llantas: "Aleación bitono 17\""
  },

  seguridad: {
    airbags: "6 (frontales, laterales y de cortina)",
    abs_ebd: true,
    esc_tcs: true,
    hac: true,
    ess: true,
    camaraRetroceso: true,
    sensoresEstacionamiento: "Traseros",
    isofix: true,
    otras: [
      "Programa electrónico de estabilidad (ESP)",
      "Asistente de arranque en pendientes (HAC)",
      "Asistente de colisión frontal (FCA)",
      "Control de crucero inteligente (SCC)",
      "Asistente de luces altas (HBA)",
      "Indicador de atención al conductor (DAW)"
    ]
  },

  confort: {
    accesoSinLlave: true,
    botonStartStop: true,
    climatizacion: "Climatizador automático digital de dos zonas",
    direccion: "Asistida eléctricamente (MDPS)",
    levantavidrios: "4 eléctricos (one-touch delante)",
    espejos: "Eléctricos y rebatibles con luz de giro",
    tapizados: "Tela de alta calidad o cuero sintético (según versión)",
    volante: "Regulable en altura y profundidad, multifunción",
    otras: [
      "Control de velocidad crucero",
      "Asiento trasero rebatible 60/40",
      "Apoyabrazos central",
      "Cargador inalámbrico de smartphone"
    ]
  },

  multimedia: {
    pantalla: "10,25\" táctil + clúster digital 10,25\"",
    conectividad: ["Apple CarPlay", "Android Auto", "Bluetooth", "USB"],
    parlantes: 6,
    puertos: ["USB delanteros", "USB traseros", "Toma 12V"],
    camara: "Retroceso"
  },

  colores: {
    exteriores: ["Blanco", "Plata", "Gris", "Azul", "Negro"],
    interiores: ["Negro/Tela", "Negro/Cuero sintético"]
  },

  garantia: {
    garantia: "Consultar según mercado (3 a 5 años / 100.000 km aprox.)",
    origen: "Corea / Brasil (según mercado)",
    servicio: "Mantenimiento cada 10.000 km o 12 meses"
  },

 links: {
  brochureUrl:
    "https://www.hyundai.com.ar/publicfiles/datasheets/fichatecnicaall-newcreta_1736781247.pdf",
  imagenes: [
    "/creta/creta-1.jpg",
    "/creta/creta-2.jpg",
    "/creta/creta-3.jpg",
    "/creta/creta-4.jpg",
    "/creta/creta-5.jpg",
    "/creta/creta-6.jpg",
    "/creta/creta-7.jpg"
  ],
  videoUrl: "https://www.youtube.com/watch?v=creta_video_demo"
}
};

// NUEVA TUCSON
const tucson: Vehiculo = {
  id: "tucson",
  nombreComercial: "Nueva Tucson",
  eslogan: "Tecnología superior y estilo impactante.",
  resumenCorto:
    "SUV del segmento C con diseño imponente, amplio interior y avanzada tecnología de seguridad y conectividad. Ideal para familias que buscan confort, seguridad y prestaciones para viajes largos.",

  versiones: [
    {
      nombre: "GL 2.0 AT 4x2",
      transmision: "Automática 6 vel",
      precioLista: "Consultar",
      equipamientoClaves: [
        "Motor Smartstream G 2.0 154 CV",
        "Control de estabilidad y múltiples ADAS",
        "Pantalla táctil 8–12,3\" con cámara de retroceso"
      ]
    },
    {
      nombre: "Limited Safety 2.0 AT 4x4",
      transmision: "Automática 6 vel",
      precioLista: "Consultar",
      equipamientoClaves: [
        "Tracción 4x4 (según versión)",
        "Asistente de colisión frontal (FCA) y punto ciego (BCA)",
        "Sensores de estacionamiento delanteros y traseros"
      ]
    }
  ],

  motor: {
    denominacion: "Smartstream G 2.0 MPI",
    cilindrada_cc: 1999,
    potencia_cv_rpm: "154 @ 6.200 rpm",
    torque_nm_rpm: "192 @ 4.500 rpm",
    combustible: "Nafta",
    traccion: "Delantera (4WD según versión/mercado)",
    normaEmisiones: "Euro 6 aprox."
  },

  dimensiones: {
    largo_mm: 4630,
    ancho_mm: 1865,
    alto_mm: 1665,
    distanciaEntreEjes_mm: 2755,
    despeje_mm: 170,
    baul_l: 539,
    tanque_l: 54,
    peso_kg: 1500,
    neumaticos: "235/55 R18",
    llantas: "Aleación 18\" bitono"
  },

  seguridad: {
    airbags: "6 (frontales, laterales y de cortina)",
    abs_ebd: true,
    esc_tcs: true,
    hac: true,
    ess: true,
    camaraRetroceso: true,
    sensoresEstacionamiento: "Delanteros y traseros",
    isofix: true,
    otras: [
      "Programa electrónico de estabilidad (ESP)",
      "Asistente de colisión frontal (FCA)",
      "Asistente de mantenimiento y seguimiento de carril (LKA/LFA)",
      "Asistente de anticolisión trasera en punto ciego (BCA/RCCA)",
      "Asistente de descenso en pendientes (DBC)",
      "Monitor de presión de neumáticos (TPMS)"
    ]
  },

  confort: {
    accesoSinLlave: true,
    botonStartStop: true,
    climatizacion: "Climatizador automático bi-zona",
    direccion: "Asistida eléctricamente",
    levantavidrios: "4 eléctricos (one-touch delante)",
    espejos: "Eléctricos, rebatibles, con luz de giro",
    tapizados: "Tela o cuero (según versión)",
    volante: "Regulable en altura y profundidad, multifunción",
    otras: [
      "Control de velocidad crucero",
      "Modos de conducción (Normal/Eco/Sport)",
      "Asientos delanteros calefaccionados (según versión)",
      "Apoyabrazos central y múltiples portaobjetos"
    ]
  },

  multimedia: {
    pantalla: "8\" o 12,3\" (según versión)",
    conectividad: ["Apple CarPlay", "Android Auto", "Bluetooth", "USB"],
    parlantes: 6,
    puertos: ["USB delanteros", "USB traseros", "Toma 12V"],
    camara: "Retroceso"
  },

  colores: {
    exteriores: ["Blanco", "Plata", "Gris", "Azul", "Rojo", "Negro"],
    interiores: ["Negro/Tela", "Negro/Cuero"]
  },

  garantia: {
    garantia: "Consultar según mercado (3 a 5 años / 100.000 km aprox.)",
    origen: "Corea / otros orígenes según país",
    servicio: "Mantenimiento cada 10.000 km o 12 meses"
  },

  links: {
  brochureUrl:
    "https://www.hyundai.com.ec/static/media/nuevo-tucson-ficha-tecnica.8ea68457.pdf",
  imagenes: [
    "/tucson/tucson-1.jpg",
    "/tucson/tucson-2.jpg",
    "/tucson/tucson-3.jpg",
    "/tucson/tucson-4.jpg",
    "/tucson/tucson-5.jpg",
    "/tucson/tucson-6.jpg",
    "/tucson/tucson-7.jpg",
    "/tucson/tucson-8.jpg"
  ],
  videoUrl: "https://www.youtube.com/watch?v=tucson_video_demo"
}

};

// NUEVA SANTA FE
const santaFe: Vehiculo = {
  id: "santa-fe",
  nombreComercial: "Nueva Santa Fe",
  eslogan: "Descubrí el mundo a tu ritmo.",
  resumenCorto:
    "SUV grande de 7 plazas que combina diseño robusto, enorme espacio interior y tecnología inteligente. Pensada para familias que viajan mucho, con alto nivel de confort, seguridad ADAS y gran capacidad de carga (hasta ~725 L).",

  versiones: [
    {
      nombre: "2.5 T-GDI 4WD",
      transmision: "Automática DCT 8 vel",
      precioLista: "Consultar",
      equipamientoClaves: [
        "Motor 2.5 Turbo GDI 281 CV",
        "Tracción 4WD con modos Terrain",
        "Pantalla curva panorámica 12,3\" + 12,3\""
      ]
    },
    {
      nombre: "2.5 T-GDI 4WD Full Safety",
      transmision: "Automática DCT 8 vel",
      precioLista: "Consultar",
      equipamientoClaves: [
        "Paquete completo Hyundai SmartSense",
        "Cámaras 360° y monitor de punto ciego (BVM)",
        "7 plazas con máximo confort y techo solar panorámico"
      ]
    }
  ],

  motor: {
    denominacion: "2.5 Turbo GDI Nafta",
    cilindrada_cc: 2500,
    potencia_cv_rpm: "281 @ 5.700 rpm (aprox.)",
    torque_nm_rpm: "430 @ 1.700–4.000 rpm (aprox. 43 kgm)",
    combustible: "Nafta",
    traccion: "Delantera / 4WD Electrónico (Torque on Demand)",
    normaEmisiones: "Euro 6 aprox."
  },

  dimensiones: {
    largo_mm: 4830,
    ancho_mm: 1900,
    alto_mm: 1770,
    distanciaEntreEjes_mm: 2815,
    despeje_mm: 177,
    baul_l: 725,
    tanque_l: 67,
    peso_kg: 1910,
    neumaticos: "255/45 R20",
    llantas: "Aleación 20\""
  },

  seguridad: {
    airbags:
      "Múltiples (frontales, laterales y de cortina para todas las filas)",
    abs_ebd: true,
    esc_tcs: true,
    hac: true,
    ess: true,
    camaraRetroceso: true,
    sensoresEstacionamiento: "Delanteros y traseros",
    isofix: true,
    otras: [
      "Programa electrónico de estabilidad (ESP)",
      "Asistente de colisión frontal (FCA con giro a la izquierda)",
      "Control de crucero inteligente (SCC)",
      "Monitor de punto ciego (BVM) y BCA",
      "Alerta de apertura de puertas segura (SEW)",
      "Detector de fatiga y alerta de ocupantes traseros",
      "Cámara 360° y cámara de visión trasera en movimiento",
      "Downhill Brake Control (DBC) y Hill Start Assist (HAC)"
    ]
  },

  confort: {
    accesoSinLlave: true,
    botonStartStop: true,
    climatizacion: "Climatizador automático bi-zona con salidas 2ª y 3ª fila",
    direccion: "Asistida eléctricamente",
    levantavidrios: "4 eléctricos (auto up/down)",
    espejos:
      "Eléctricos, rebatibles, calefaccionados con repetidor de giro integrado",
    tapizados: "Cuero",
    volante: "Tapizado en cuero, calefaccionado, regulable en altura y profundidad",
    otras: [
      "7 plazas con 3 filas de asientos",
      "Asientos delanteros eléctricos, calefaccionados y ventilados",
      "Asientos 2ª fila desplazables y plegables remotamente",
      "Doble techo solar panorámico",
      "Portón trasero con apertura eléctrica y altura regulable",
      "Reconocimiento dactilar para arranque/configuración",
      "Modos de conducción y Terrain Mode"
    ]
  },

  multimedia: {
    pantalla: "Pantalla curva panorámica 12,3\" + 12,3\"",
    conectividad: ["Apple CarPlay", "Android Auto", "Bluetooth", "USB"],
    parlantes: 12,
    puertos: [
      "USB delanteros",
      "USB en 2ª fila",
      "USB en 3ª fila",
      "Toma 12V"
    ],
    camara: "360°"
  },

  colores: {
    exteriores: ["Blanco", "Plata", "Gris", "Verde", "Azul", "Negro"],
    interiores: ["Negro/Cuero", "Beige/Cuero (según mercado)"]
  },

  garantia: {
    garantia: "Consultar según mercado (3 a 5 años / 100.000 km aprox.)",
    origen: "Corea",
    servicio: "Mantenimiento cada 10.000 km o 12 meses"
  },

 links: {
  brochureUrl:
    "https://www.hyundai.com.ar/publicfiles/datasheets/ficha-tecnica-nueva-santa-fe_1756483893.pdf",
  imagenes: [
    "/santafe/santafe-3.jpg",
    "/santafe/santafe-1.jpg",
    "/santafe/santafe-2.jpg",
    
    "/santafe/santafe-4.jpg",
    "/santafe/santafe-5.jpg",
    "/santafe/santafe-6.jpg",
    "/santafe/santafe-7.jpg"
  ],
  videoUrl: "https://www.youtube.com/watch?v=santafe_video_demo"
}

};

// NUEVA STARIA
const staria: Vehiculo = {
  id: "staria",
  nombreComercial: "Nueva Staria",
  eslogan: "Comodidad y versatilidad sin fronteras.",
  resumenCorto:
    "MPV de gran tamaño pensada para familias numerosas y uso profesional premium. Interior configurable, altísimo nivel de seguridad y ayudas a la conducción, más un motor 2.2 diésel eficiente para largos recorridos.",

  versiones: [
    {
      nombre: "2.2 CRDi 2WD AT",
      transmision: "Automática 8 vel",
      precioLista: "Consultar",
      equipamientoClaves: [
        "Motor 2.2 CRDi 177 CV",
        "Hasta 11 plazas (según configuración)",
        "Monitor de visor de punto ciego (BVM) y múltiples ADAS"
      ]
    },
    {
      nombre: "2.2 CRDi 4WD AT Luxury",
      transmision: "Automática 8 vel",
      precioLista: "Consultar",
      equipamientoClaves: [
        "Tracción 4WD con reparto inteligente",
        "Puertas laterales corredizas eléctricas",
        "Sistema de sonido BOSE premium"
      ]
    }
  ],

  motor: {
    denominacion: "2.2 CRDi VGT Diesel",
    cilindrada_cc: 2199,
    potencia_cv_rpm: "177 @ 3.800 rpm",
    torque_nm_rpm: "430 @ 1.500–2.500 rpm (44 kgm)",
    combustible: "Diésel",
    traccion: "Delantera / 4WD electrónico (según versión)",
    normaEmisiones: "Euro 6 aprox."
  },

  dimensiones: {
    largo_mm: 5253,
    ancho_mm: 1997,
    alto_mm: 1990,
    distanciaEntreEjes_mm: 3273,
    despeje_mm: 186,
    baul_l: 1024,
    tanque_l: 75,
    peso_kg: 2231,
    neumaticos: "235/55 R18",
    llantas: "Aleación 18\""
  },

  seguridad: {
    airbags:
      "Múltiples (frontales, laterales y de cortina para filas delanteras y traseras)",
    abs_ebd: true,
    esc_tcs: true,
    hac: true,
    ess: true,
    camaraRetroceso: true,
    sensoresEstacionamiento: "Delanteros y traseros",
    isofix: true,
    otras: [
      "Programa electrónico de estabilidad (ESP)",
      "Asistente de colisión frontal (FCA)",
      "Monitor de visor de punto ciego (BVM)",
      "Asistencia de seguimiento de carril (LFA)",
      "Asistencia de conducción en carretera (HDA)",
      "Control de crucero inteligente (SCC)",
      "Asistente de arranque en pendiente (HAC)"
    ]
  },

  confort: {
    accesoSinLlave: true,
    botonStartStop: true,
    climatizacion: "Climatizador automático con salidas para todas las filas",
    direccion: "Asistida eléctricamente",
    levantavidrios: "4 eléctricos",
    espejos: "Eléctricos, rebatibles, con luz de giro",
    tapizados: "Tela o cuero (según versión)",
    volante: "Regulable en altura y profundidad, multifunción",
    otras: [
      "Puertas laterales corredizas eléctricas",
      "Puerta trasera con apertura asistida",
      "Configuraciones de 7 a 11 plazas (según mercado)",
      "Caja de cambios accionable por botón",
      "Modos de conducción (Normal/Eco/Sport)"
    ]
  },

  multimedia: {
    pantalla: "Pantalla multimedia 8–10,25\" (según versión)",
    conectividad: ["Apple CarPlay", "Android Auto", "Bluetooth", "USB"],
    parlantes: 8,
    puertos: ["USB delanteros", "USB en filas traseras", "Toma 12V"],
    camara: "Retroceso"
  },

  colores: {
    exteriores: ["Blanco", "Plata", "Gris", "Negro"],
    interiores: ["Negro/Tela", "Negro/Cuero (según versión)"]
  },

  garantia: {
    garantia: "Consultar según mercado (3 a 5 años / 100.000 km aprox.)",
    origen: "Corea",
    servicio: "Mantenimiento cada 10.000 km o 12 meses"
  },

  links: {
    brochureUrl:
      "https://cdn.motor1.com/pdf-files/ficha-tecnica-hyundai-staria-4wd-2022.pdf",
    imagenes: [
      "/hb20/hb20-1.jpg",
      "/Hb20/hb20-2.jpg",
      "/hb20/hb20-3.jpg",
      "/hb20/hb20-4.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=staria_video_demo"
  }
};

// ARRAY GENERAL (por si te sirve agruparlos)
const vehiculos: Vehiculo[] = [hb20, creta, tucson, santaFe, staria];

export { hb20, creta, tucson, santaFe, staria, vehiculos };

export function getVehiculoById(id: string) {
  return vehiculos.find(v => v.id === id);
}


