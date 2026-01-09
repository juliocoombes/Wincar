// Template de información ESPECÍFICA por vehículo
// Copiá este archivo para cada modelo (ej.: hb20s.ts, tucson.ts) y completá los campos.
// Si un dato no aplica, dejalo en "" o [] según corresponda.

export type Version = {
  nombre: string; // ej.: Comfort Plus MT / Platinum Safety AT
  transmision: string; // ej.: Manual 6 vel / Automática 6 vel
  precioLista?: string; // opcional, referencial
  equipamientoClaves: string[]; // bullets cortos por versión
};

export type Motor = {
  denominacion: string; // ej.: Gamma 1.6 16V DOHC D-CVVT
  cilindrada_cc?: number; // ej.: 1591
  potencia_cv_rpm?: string; // ej.: "123 @ 6.300 rpm"
  torque_nm_rpm?: string; // ej.: "152 @ 4.850 rpm"
  combustible?: string; // ej.: Nafta
  traccion?: string; // ej.: Delantera
};

export type Dimensiones = {
  largo_mm?: number;
  ancho_mm?: number;
  alto_mm?: number;
  distanciaEntreEjes_mm?: number;
  despeje_mm?: number;
  baul_l?: number;
  tanque_l?: number;
  peso_kg?: number;
  neumaticos?: string; // ej.: 185/60 R15
  llantas?: string; // ej.: Aleación 15"
};

export type SeguridadYADAS = {
  airbags?: string; // ej.: 6 (frontales, laterales y de cortina)
  abs_ebd?: boolean;
  esc_tcs?: boolean;
  hac?: boolean; // asistente de arranque en pendientes
  ess?: boolean; // luz de frenado de emergencia
  camaraRetroceso?: boolean;
  sensoresEstacionamiento?: string; // ej.: traseros / delanteros y traseros
  isofix?: boolean;
  otras?: string[];
};

export type ConfortYTecnologia = {
  accesoSinLlave?: boolean;
  botonStartStop?: boolean;
  climatizacion?: string; // ej.: Aire acondicionado / Climatizador automático
  direccion?: string; // ej.: Asistida eléctricamente
  levantavidrios?: string; // ej.: 4 eléctricos con one touch
  espejos?: string; // ej.: Eléctricos con luz de giro
  tapizados?: string; // ej.: Tela / Cuero sintético
  volante?: string; // ej.: Regulable en altura/profundidad, multifunción
  otras?: string[];
};

export type Multimedia = {
  pantalla?: string; // ej.: 8"
  conectividad?: string[]; // ej.: ["Apple CarPlay", "Android Auto", "Bluetooth", "USB"]
  parlantes?: number;
  puertos?: string[]; // ej.: ["USB delantera", "USB trasera", "12V"]
  camara?: string; // ej.: Cámara de retroceso con líneas auxiliares
};

export type Colores = {
  exteriores: string[]; // ej.: Blanco Atlas, Plata Brisk, Gris Silk, Negro Onix, etc.
  interiores?: string[]; // ej.: Negro/tela
};

export type GarantiaYOrigen = {
  garantia?: string; // ej.: 3 años o 100.000 km
  servicio?: string; // Planes de mantenimiento / intervalos
};

export type LinksYMedios = {
  brochureUrl?: string; // PDF oficial
  imagenes: string[]; // rutas a /public o URLs
  videoUrl?: string; // YouTube u otro
};

export type ColorExterior = {
  nombre: string;
  imagen: string; // ruta al PNG/JPG del cuadradito de color
};

export interface DetalleVehiculo {
  id: string;

  nombre: string;
  presentacion: string;

  seguridad: Array<{
    nombre: string;
    descripcion: string;
  }>;

  conectividad: Array<{
    nombre: string;
    descripcion: string;
  }>;

  rendimiento: Array<{
    nombre: string;
    descripcion: string;
  }>;

  colores?: {
    exteriores: ColorExterior[];
    interiores?: string[];
  };

  garantia?: {
    garantia: string;
    servicio: string;
  };

  links?: {
    brochureUrl?: string;
    imagenes?: string[];
    videoUrl?: string;
  };
}

// ===================
// HB20 HATCH
// ===================
const hb20: DetalleVehiculo = {
  id: "hb20",
  nombre: "HB20",

  presentacion:
    "Lo cotidiano puede transformarse en extraordinario con el HB20 Hatchback. Sentí su espíritu deportivo, su avanzada tecnología y el nivel de seguridad que marca el camino hacia el futuro.",

  seguridad: [
    {
      nombre: "Airbags",
      descripcion:
        "6 airbags. 2 frontales, 2 laterales y 2 de cortina que brindan máxima seguridad para todos los ocupantes."
    },
    {
      nombre: "Asistente de punto ciego (BCA)",
      descripcion:
        "Sistema de sensores que detecta vehículos fuera de tu vista lateral y te alerta para evitar colisiones"
    },
    {
      nombre:
        "Asistente y mantenimiento de carril (LKA) y Asistente de centrado de carril (LFA)",
      descripcion:
        "Sistema LKA que corrige suavemente la dirección si el vehículo se desvía sin señalizar. El sistema LFA mantiene el vehículo centrado dentro del carril de forma continua."
    },
    {
      nombre: "Alerta y frenado autónomo (FCA)",
      descripcion:
        "Sistema que detecta riesgo inminente de colision con vehículos, peatones o ciclistas y emite una alerta y si no detecta una reacción, frena automáticamente para evitar o reducir el impacto."
    }
  ],

  conectividad: [
    {
      nombre: "Pantalla táctil de 8\"",
      descripcion:
        " La pantalla táctil de infoentretenimiento de 8” está ubicada estratégicamente para ofrecer al conductor y al acompañante un acceso cómodo y sencillo a la navegación y a las funciones de conectividad. Compatible con Android Auto y AppleCarPlay"
    },
    {
      nombre: "Bluetooth y USB",
      descripcion:
        "Conectividad completa para llamadas, música y carga de dispositivos. Incluye cargador inalambrico"
    },
    {
      nombre: "Cámara de retroceso",
      descripcion:
        "Proporciona asistencia visual al estacionar o maniobrar en espacios reducidos."
    }
  ],

  rendimiento: [
    {
      nombre: "Motor 1.6L",
      descripcion:
        "123 CV de potencia y torque de 152 Nm, con excelente equilibrio entre respuesta y consumo. Version manual y automática con caja de 6 velocidades."
    },
    {
      nombre: "Levas de cambio al volante",
      descripcion:
        "Las levas de cambio al volante te permiten tener una experiencia deportiva y tecnológica mientras manejas."
    },
    {
      nombre: "Control de velocidad crucero",
      descripcion:
        " El control de velocidad crucero con limitador permite mantener una velocidad constante sin usar el acelerador y fijar un límite máximo para evitar exceder la velocidad deseada."
    }
  ],

 colores: {
  exteriores: [
    {
      nombre: "Magnetic Gray Metallic",
      imagen: "/colores/M2F_Magnetic_Gray_Metallic.jpg"
    },
    {
      nombre: "Abyss Black Pearl",
      imagen: "/colores/A2B_AbyssBlack_Black_Pearl.jpg"
    },
    {
      nombre: "Pebble Blue Pearl",
      imagen: "/colores/PB2_Pebble_Blue_Pearl.jpg"
    },
    {
      nombre: "Typhoon Silver Metallic",
      imagen: "/colores/T2X_Typhoon_Silver_Metallic.jpg"
    },
    {
      nombre: "White Cream Pearl",
      imagen: "/colores/WW2_WhiteCream_White_Pearl.jpg"
    },
    {
      nombre: "Creamy White Matte",
      imagen: "/colores/WWM_Creamy_White_Matte.jpg"
    },
    {
      nombre: "Earthy Brass Matte",
      imagen: "/colores/YBM_Earthy_Brass_Matte.jpg"
    }
  ],

  interiores: ["Negro/Tela"]
},


  garantia: {
    garantia: "3 años o 100.000 km",
    servicio: "Mantenimiento cada 10.000 km o 12 meses"
  },

  links: {
    brochureUrl:
      "https://www.hyundai.com.ar/publicfiles/datasheets/hb20fichatecnica-final_compressed_1732281228.pdf",
    imagenes: [
      "/hb20h/hb20h-4.webp",
      "/hb20h/hb20h-1.webp",
      "/hb20h/hb20h-3.webp",
      "/hb20h/hb20h-2.webp",
      "/hb20h/hb20h-5.webp"
    ],
    videoUrl: "https://www.youtube.com/watch?v=23hJMspQP4s"
  }
};

// HB20S
const hb20s: DetalleVehiculo = {
  id: "hb20s",

  nombre: "HB20s",
  presentacion:
    "Elegancia, innovación y confianza en cada kilómetro. El HB20S Sedán 2025 redefine tu manera de conducir con estilo y la seguridad que necesitás.",

  seguridad: [
    {
      nombre: "Control de estabilidad (ESP)",
      descripcion:
        "El Control de Estabilidad (ESP) ayuda a mantener el control del vehículo en maniobras bruscas o curvas, ajustando automáticamente frenos y potencia para evitar derrapes."
    },
    {
      nombre: "Asistente de Tráfico Cruzado con Anticolisión (RCCA)",
      descripcion:
        "Sistema que detecta objetos que se aproximan por los laterales al retroceder, enviando alertas al conductor y frenando automáticamente si no detecta reacción"
    },
    {
      nombre: "Asistente de frenado en pendientes (HAC)",
      descripcion:
        "El Asistente de Frenado en Pendientes (HAC) evita que el vehículo retroceda al soltar el freno en una subida, manteniendo la presión de frenado por unos segundos para un arranque seguro."
    },
    {
      nombre: "Freno con ABS con EBD",
      descripcion:
        "Mejora la capacidad de frenado en situaciones de emergencia. El sistema EBD distribuye la fuerza de frenado entre las ruedas, evitando el bloqueo y optimizando la distancia de detencion."
    }
  ],

  conectividad: [
    {
      nombre: "Cluster totalmente digital",
      descripcion:
        "Los graficos en el grupo digital se adaptan a la nueva tecnología moderna"
    },
    {
      nombre: "Llave inteligente",
      descripcion:
        "Podras disfrutar de la comodidad de desbloquear el vehiculo a distancia, sin necesidad de colocar la llave"
    },
    {
      nombre: "Cargador inalámbrico",
      descripcion:
        "Cuenta con una bandeja para cargador inalámbrico de alta velocidad. Además, posee una función de enfriamiento que evita el sobrecalentamiento del teléfono"
    },
    {
      nombre: "Control de velocidad crucero",
      descripcion:
        " El control de velocidad crucero con limitador permite mantener una velocidad constante sin usar el acelerador y fijar un límite máximo para evitar exceder la velocidad deseada.\n"
    }
  ],

  rendimiento: [
    {
      nombre: "Motor 1.6L",
      descripcion:
        "123 CV de potencia y torque de 155 Nm, con excelente equilibrio entre respuesta y consumo. Version manual y automática con caja de 6 velocidades."
    },
    {
      nombre: "Levas de cambio al volante",
      descripcion:
        "Las levas de cambio al volante te permiten tener una experiencia deportiva y tecnológica mientras manejas."
    }
  ],
colores: {
  exteriores: [
    {
      nombre: "Magnetic Gray Metallic",
      imagen: "/colores/M2F_Magnetic_Gray_Metallic.jpg"
    },
    {
      nombre: "Abyss Black Pearl",
      imagen: "/colores/A2B_AbyssBlack_Black_Pearl.jpg"
    },
    {
      nombre: "Pebble Blue Pearl",
      imagen: "/colores/PB2_Pebble_Blue_Pearl.jpg"
    },
    {
      nombre: "Typhoon Silver Metallic",
      imagen: "/colores/T2X_Typhoon_Silver_Metallic.jpg"
    },
    {
      nombre: "White Cream Pearl",
      imagen: "/colores/WW2_WhiteCream_White_Pearl.jpg"
    },
    {
      nombre: "Creamy White Matte",
      imagen: "/colores/WWM_Creamy_White_Matte.jpg"
    },
    {
      nombre: "Earthy Brass Matte",
      imagen: "/colores/YBM_Earthy_Brass_Matte.jpg"
    }
  ],

  interiores: ["Negro/Tela"]
}
,
   garantia: {
    garantia: "3 años o 100.000 km",
    servicio: "Mantenimiento cada 10.000 km o 12 meses"
  },

  links: {
    brochureUrl:
      "https://www.hyundai.com.ar/publicfiles/datasheets/hb20sfichatecnica-final_compressed_1732281228.pdf",
    imagenes: [
      "/hb20/hb20-1.webp",
      "/hb20/hb20-2.webp",
      "/hb20/hb20-3.webp",
      "/hb20/hb20-4.webp"
    ],
    videoUrl: "https://www.youtube.com/watch?v=FaVtVAIRu_Q"
  }
};

// NUEVA CRETA
const creta: DetalleVehiculo = {
  id: "creta",

  nombre: "Nueva Creta",
  presentacion:
    "La Nueva Creta impone su estilo entre las SUV compactas, con un diseño audaz, innovación tecnológica, máximo confort y la seguridad que te acompañan en cada viaje.",

  seguridad: [
    {
      nombre: "Indicador de atención al conductor (DAW)",
      descripcion:
        "El indicador de atención al conductor monitorea los patrones de manejo, detectando signos de fatiga o distracción y emitiendo una alerta que recomienda tomar un descanso para mantener una conducción segura"
    },
    {
      nombre: "Control de crucero inteligente (SCC)",
      descripcion:
        "Una función que mantiene una distancia segura con el vehiculo de adelante, ajustando automáticamente la velocidad"
    },
    {
      nombre: "Asistente de luces altas (HBA)",
      descripcion:
        "El Asistente de luces altas (HBA) detecta vehículos que se aproximan en la dirección contraria o circulando por delante, ajustando automáticamente la intensidad de las luces, evitando deslumbramientos y mejorando la visibilidad"
    },
    {
      nombre: "Programa electrónico de estabilidad (ESP)",
      descripcion:
        "Esta funcion ayuda a mantener el control del vehiculo, aplicando freno selectivo y ajustando la potencia del motor ante maniobras bruscas o superficies resbaladizas"
    }
  ],

  conectividad: [
    {
      nombre: "Central multimedia integrada al panel de instrumentos",
      descripcion:
        "Panel instrumentos digital y a color de 10.25” integrado a la central multimedia, de igual tamaño, compatible con Apple CarPlay y Android Auto"
    },
    {
      nombre: "Aire acondicionado automatico digital de dos zonas",
      descripcion:
        "Disfruta el confort de un clima perfecto con control digital e independiente para el conductor y pasajero delantero"
    },
    {
      nombre: "Volante con comandos interactivos",
      descripcion:
        "Permite controlar la central multimedia, la información del panel y configurar el piloto automatico adaptativo sin generar distracciones"
    },
    {
      nombre: "Sistema de audio premium",
      descripcion:
        "Sistema de audio envolvente con altavoces de alta fidelidad, diseñado para ofrecer una experiencia sonora de máxima calidad a todos los pasajeros"
    }
  ],

  rendimiento: [
    {
      nombre: "Motor Smartstream G 1.5",
      descripcion:
        "Equilibra al máximo potencia y eficiencia. Respuesta ágil mediante un bajo consumo, haciéndola ideal para el uso cotidiano"
    },
    {
      nombre: "Dirección asistida eléctricamente",
      descripcion:
        "Confort y precisión en cada trayecto: la dirección adapta su asistencia a la velocidad, brindando maniobras suaves en ciudad y firmeza en ruta."
    },
    {
      nombre: "Suspensión reforzada",
      descripcion:
        "Estabilidad y máximo confort en todo tipo de caminos. "
    }
  ],
 colores: {
  exteriores: [
    {
      nombre: "Magnetic Gray Metallic",
      imagen: "/colores/M2F_Magnetic_Gray_Metallic.jpg"
    },
    {
      nombre: "Abyss Black Pearl",
      imagen: "/colores/A2B_AbyssBlack_Black_Pearl.jpg"
    },
    {
      nombre: "Pebble Blue Pearl",
      imagen: "/colores/PB2_Pebble_Blue_Pearl.jpg"
    },
    {
      nombre: "Typhoon Silver Metallic",
      imagen: "/colores/T2X_Typhoon_Silver_Metallic.jpg"
    },
    {
      nombre: "White Cream Pearl",
      imagen: "/colores/WW2_WhiteCream_White_Pearl.jpg"
    },
    {
      nombre: "Creamy White Matte",
      imagen: "/colores/WWM_Creamy_White_Matte.jpg"
    },
    {
      nombre: "Earthy Brass Matte",
      imagen: "/colores/YBM_Earthy_Brass_Matte.jpg"
    }
  ],

  interiores: ["Negro/Tela"]
}
,
   garantia: {
    garantia: "3 años o 100.000 km",
    servicio: "Mantenimiento cada 10.000 km o 12 meses"
  },

  links: {
    brochureUrl:
      "https://www.hyundai.com.ar/publicfiles/datasheets/fichatecnicaall-newcreta_1736781247.pdf",
    imagenes: [
      "/creta/creta-1.webp",
      "/creta/creta-2.webp",
      "/creta/creta-3.webp",
      "/creta/creta-4.webp",
      "/creta/creta-5.webp",
      "/creta/creta-6.webp",
      "/creta/creta-7.webp"
    ],
    videoUrl: "https://www.youtube.com/watch?v=6q1Qaq6ZqLk"
  }
};

// NUEVA TUCSON
const tucson: DetalleVehiculo = {
  id: "tucson",

  nombre: "Nueva Tucson",
  presentacion:
    "La Nueva Tucson inaugura una nueva era de conducción. Supera lo convencional y redefine su segmento con un diseno imponente, interior amplio y versátil, y la tecnología que siempre esperaste",

  seguridad: [
    {
      nombre:
        "Control de crucero inteligente con stop & go (SCC)",
      descripcion:
        "El Control de crucero inteligente con stop & go (SCC) ayuda a mantener la distancia con el vehiculo delantero y conducir a una distancia establecida por el conductor. Se detiene automáticamente cuando el vehiculo delantero se detiene y arranca automáticamente cuando el vehiculo delantero sale."
    },
    {
      nombre: "Sistema de control de estabilidad",
      descripcion:
        "El Sistema de control de estabilidad actúa ante fuertes vientos cruzados, corrigiendo la trayectoria para mantener la dirección y asegurar la estabilidad del vehiculo."
    },
    {
      nombre: "Sensores de estacionamiento",
      descripcion:
        "Sensores ultrasónicos delanteros y traseros que detectan objetos, emitiendo sonidos para indicar distancia y evitar colisiones"
    },
    {
      nombre: "Asistente de colision frontal (FCA)",
      descripcion:
        "Este sistema alerta al conductor si el vehículo de adelante esta reduciendo de manera brusca la velocidad o si existe la posibilidad de una colisión frontal, activando los frenos en caso de colisión inminente. También frena automáticamente ante el riesgo de un impacto inminente con vehículos o ciclistas mientras se realiza un giro a la izquierda"
    }
  ],

  conectividad: [
    {
      nombre: "Panel digital de 12,3”",
      descripcion:
        "Panel de instrumentos digital de 12,3” que muestra información esencial sobre velocidad y conducción de manera clara y centrada."
    },
    {
      nombre: "Pantalla tactil de 12,3”",
      descripcion:
        "Te permite acceder fácilmente a todas las funciones de conectividad y al sistema de información y entretenimiento. Compatible con Apple CarPlay y Android Auto, te permiten acceder a aplicaciones, música y teléfono."
    },
    {
      nombre: "Reconocimiento dactilar",
      descripcion:
        "Este sistema permite encender el motor y pantallas multimedia. Además, permite guardar configuraciones predeterminadas para diferentes usuarios "
    },
    {
      nombre: "Portón trasero con apertura eléctrica",
      descripcion:
        "El portón trasero se abre automáticamente cuando se detecta la llave inteligente. También se puede ajustar la altura de elevación con diferentes configuraciones."
    }
  ],

  rendimiento: [
    {
      nombre: "Motor Smartstream G 2.0",
      descripcion:
        " Diseñado para entregar un equilibrio entre rendimiento eficiente y suavidad en la conducción. Se combina con una transmisión automática de 6 velocidades y tracción delantera."
    },
    {
      nombre: "Suspension electrónica (ECS)",
      descripcion:
        " El sistema ECS ajusta la fuerza en cada rueda para reducir deslizamientos y movimientos verticales, mejorando el control al volante, lo que permie una conducción mas estable."
    },
    {
      nombre: "Modos de conduccion",
      descripcion:
        "Permite seleccionar distintos modos de conducción de acuerdo a las necesidades. Elige entre Normal, Eco o Sport. Cada modo ofrece diferentes parámetros de aceleración, puntos de cambio y eficiencia de combustible"
    }
  ],
 colores: {
  exteriores: [
    {
      nombre: "Magnetic Gray Metallic",
      imagen: "/colores/M2F_Magnetic_Gray_Metallic.jpg"
    },
    {
      nombre: "Abyss Black Pearl",
      imagen: "/colores/A2B_AbyssBlack_Black_Pearl.jpg"
    },
    {
      nombre: "Pebble Blue Pearl",
      imagen: "/colores/PB2_Pebble_Blue_Pearl.jpg"
    },
    {
      nombre: "Typhoon Silver Metallic",
      imagen: "/colores/T2X_Typhoon_Silver_Metallic.jpg"
    },
    {
      nombre: "White Cream Pearl",
      imagen: "/colores/WW2_WhiteCream_White_Pearl.jpg"
    },
    {
      nombre: "Creamy White Matte",
      imagen: "/colores/WWM_Creamy_White_Matte.jpg"
    },
    {
      nombre: "Earthy Brass Matte",
      imagen: "/colores/YBM_Earthy_Brass_Matte.jpg"
    }
  ],

  interiores: ["Negro/Tela"]
}
,
   garantia: {
    garantia: "3 años o 100.000 km",
    servicio: "Mantenimiento cada 10.000 km o 12 meses"
  },

  links: {
    brochureUrl:
      "https://www.hyundai.com.ec/static/media/nuevo-tucson-ficha-tecnica.8ea68457.pdf",
    imagenes: [
      "/tucson/tucson-1.webp",
      "/tucson/tucson-2.webp",
      "/tucson/tucson-3.webp",
      "/tucson/tucson-4.webp",
      "/tucson/tucson-5.webp",
      "/tucson/tucson-6.webp",
      "/tucson/tucson-7.webp",
      "/tucson/tucson-8.webp"
    ],
    videoUrl: "https://www.youtube.com/watch?v=Dmgn7zpVsms"
  }
};

// NUEVA SANTA FE
const santaFe: DetalleVehiculo = {
  id: "santafe",

  nombre: "Santa Fe",
  presentacion:
    "Descubrí el mundo a tu ritmo con la Nueva Santa Fe. Siempre lista para la aventura, ofrece interior amplio, tecnología inteligente y comodidad para vos y tu equipo en cualquier camino.",

  seguridad: [
    {
      nombre: "Monitor de visor de punto ciego",
      descripcion:
        "Esta función permite ver las vistas laterales de ambos lados en la pantalla digital. Se activa automáticamente mediante el uso del indicador de giro.”"
    },
    {
      nombre: "Control de crucero inteligente (SCC)",
      descripcion:
        "Una función que mantiene una distancia segura con el vehiculo de adelante, ajustando automáticamente la velocidad"
    },
    {
      nombre: "Alerta de apertura de puertas seguro (SEW)",
      descripcion:
        "El Alerta de Apertura de Puertas Segura (SEW) avisa al conductor si intenta abrir una puerta cuando hay tráfico cercano, ayudando a evitar accidentes con ciclistas, peatones o vehículos."
    },
    {
      nombre: "Asistente de colision frontal (FCA)",
      descripcion:
        "Este sistema alerta al conductor si el vehículo de adelante esta reduciendo de manera brusca la velocidad o si existe la posibilidad de una colisión frontal, activando los frenos en caso de colisión inminente. También frena automáticamente ante el riesgo de un impacto inminente con vehículos o ciclistas mientras se realiza un giro a la izquierda"
    }
  ],

  conectividad: [
    {
      nombre: "Volante con palanca de cambios integrada",
      descripcion:
        "Control total al alcance de tu mano: las levas en el volante y la palanca de cambios en la columna liberan la consola y mejoran la comodidad del interior.."
    },
    {
      nombre: "7 plazas. 3 filas. Comodidad maxima",
      descripcion:
        "Pensada para brindar una comodiad maxima."
    },
    {
      nombre: "Pantalla curva panoramica",
      descripcion:
        " La pantalla curva panorámica integra dos sistemas con tecnología innovadora: una sistema de información y entretenimiento de 12,3” y un panel digital de instrumentos de 12,3” con servicios de Apple CarPlay y Android Auto."
    },
    {
      nombre: "Portón trasero con apertura eléctrica",
      descripcion:
        "El portón trasero se abre automáticamente cuando se detecta la llave inteligente. También se puede ajustar la altura de elevación con diferentes configuraciones. Espacio de carga de 725 litros.”"
    }
  ],

  rendimiento: [
    {
      nombre: " MOTOR 2.5 TURBO GDI Nafta",
      descripcion:
        "Gracias al turbo y a la alimentación directa, entrega una respuesta potente desde bajos-medios, ideal para prestaciones dinámicas, sin sacrificar refinamiento.\nSu diseño está pensado para combinar potencia y versatilidad: uso urbano, ruta e incluso versiones con tracción integral."
    },
    {
      nombre: "Traccion",
      descripcion:
        "Delantera / 4WD Electrónico (Torque on Demand)."
    },
    {
      nombre: "Caja",
      descripcion:
        "Caja automática de 8 velocidades y doble embrague DCT"
    }
    
  ],colores: {
  exteriores: [
    {
      nombre: "Magnetic Gray Metallic",
      imagen: "/colores/M2F_Magnetic_Gray_Metallic.jpg"
    },
    {
      nombre: "Abyss Black Pearl",
      imagen: "/colores/A2B_AbyssBlack_Black_Pearl.jpg"
    },
    {
      nombre: "Pebble Blue Pearl",
      imagen: "/colores/PB2_Pebble_Blue_Pearl.jpg"
    },
    {
      nombre: "Typhoon Silver Metallic",
      imagen: "/colores/T2X_Typhoon_Silver_Metallic.jpg"
    },
    {
      nombre: "White Cream Pearl",
      imagen: "/colores/WW2_WhiteCream_White_Pearl.jpg"
    },
    {
      nombre: "Creamy White Matte",
      imagen: "/colores/WWM_Creamy_White_Matte.jpg"
    },
    {
      nombre: "Earthy Brass Matte",
      imagen: "/colores/YBM_Earthy_Brass_Matte.jpg"
    }
  ],

  interiores: ["Negro/Tela"]
}
,
   garantia: {
    garantia: "3 años o 100.000 km",
    servicio: "Mantenimiento cada 10.000 km o 12 meses"
  },

  links: {
    brochureUrl:
      "https://www.hyundai.com.ar/publicfiles/datasheets/ficha-tecnica-nueva-santa-fe_1756483893.pdf",
    imagenes: [
      "/santafe/santafe-3.webp",
      "/santafe/santafe-1.webp",
      "/santafe/santafe-2.webp",
      "/santafe/santafe-4.webp",
      "/santafe/santafe-5.webp",
      "/santafe/santafe-6.webp",
      "/santafe/santafe-7.webp"
    ],
    videoUrl: "https://www.youtube.com/watch?v=CYK0ONs8PNY"
  }
};

// NUEVA STARIA
const staria: DetalleVehiculo = {
  id: "staria",

  nombre: "Staria",
  presentacion:
    "En la Nueva Staria, las posibilidades no tienen fronteras. Viví una experiencia de comodidad, versatilidad y seguridad líderes en su clase, mientras Hyundai impulsa el futuro de la movilidad MPV.",

  seguridad: [
    {
      nombre: "Monitor de visor de punto ciego (BVM)",
      descripcion:
        "Esta función permite ver las vistas laterales de ambos lados en la pantalla digital. Se activa automáticamente mediante el uso del indicador de giro.”"
    },
    {
      nombre: "Asistencia de seguimiento de carril (LFA)",
      descripcion:
        "Cuando esta activado permite mantener el vehiculo centrado en su carril a velocidades entre 0 y 180km/h."
    },
    {
      nombre: "Asistencia de conducción en carretera (HDA)",
      descripcion:
        "Cuando el control de crucero inteligente o la asistencia de seguimiento de carril están activos, mantiene el vehiculo centrado en su carril y viajando a una distancia segura detrás del automóvil delantero."
    },
    {
      nombre: "Asistente de colision frontal (FCA)",
      descripcion:
        "Este sistema alerta al conductor si el vehículo de adelante esta reduciendo de manera brusca la velocidad o si existe la posibilidad de una colisión frontal, activando los frenos en caso de colisión inminente."
    }
  ],

  conectividad: [
    {
      nombre: "Cluster totalmente digital",
      descripcion:
        "Los graficos varian de estética de acuerdo al modo de conducción seleccionado (Normal, Sport o ECO."
    },
    {
      nombre: "Cargador inalambrico",
      descripcion:
        "La bandeja del cargador inalámbrico de alta velocidad cuenta con una función de enfriamiento que evita el sobrecalentamiento del teléfono celular para mayor seguridad."
    },
    {
      nombre: "BOSE premium sound",
      descripcion:
        "Su sistema de sonido BOSE ofrece un rendimiento estelar con parlantes de alto rendimiento y un subwoofer ajustado que brinda un alto realismo de sonido."
    },
    {
      nombre: "Puerta corrediza electrica",
      descripcion:
        "No se requieren manos ni presionar botones. La puerta detecta su presencia y se abre automáticamente detectando la llave inteligente.”"
    }
  ],

  rendimiento: [
    {
      nombre: " MOTOR 2.2 Diesel",
      descripcion:
        "Tiene una potencia máxima de 177cv y caja de cambios automatica."
    },
    {
      nombre: "Caja de cambios accionable con boton",
      descripcion:
        "Botones fáciles e intuitivos que mejoran la apariencia limpia del interior y ahorran espacio en la cabina"
    },
    {
      nombre: "Modos de conduccion",
      descripcion:
        "Permite seleccionar distintos modos de conducción de acuerdo a las necesidades. Elige entre Normal, Eco o Sport. Cada modo ofrece diferentes parámetros de aceleración, puntos de cambio y eficiencia de combustible"
    }
  ],
 colores: {
  exteriores: [
    {
      nombre: "Magnetic Gray Metallic",
      imagen: "/colores/M2F_Magnetic_Gray_Metallic.jpg"
    },
    {
      nombre: "Abyss Black Pearl",
      imagen: "/colores/A2B_AbyssBlack_Black_Pearl.jpg"
    },
    {
      nombre: "Pebble Blue Pearl",
      imagen: "/colores/PB2_Pebble_Blue_Pearl.jpg"
    },
    {
      nombre: "Typhoon Silver Metallic",
      imagen: "/colores/T2X_Typhoon_Silver_Metallic.jpg"
    },
    {
      nombre: "White Cream Pearl",
      imagen: "/colores/WW2_WhiteCream_White_Pearl.jpg"
    },
    {
      nombre: "Creamy White Matte",
      imagen: "/colores/WWM_Creamy_White_Matte.jpg"
    },
    {
      nombre: "Earthy Brass Matte",
      imagen: "/colores/YBM_Earthy_Brass_Matte.jpg"
    }
  ],

  interiores: ["Negro/Tela"]
}
,
   garantia: {
    garantia: "3 años o 100.000 km",
    servicio: "Mantenimiento cada 10.000 km o 12 meses"
  },

  links: {
    brochureUrl:
      "https://cdn.motor1.com/pdf-files/ficha-tecnica-hyundai-staria-4wd-2022.pdf",
    imagenes: [
      "/staria/staria-1.webp",
      "/staria/staria-2.webp",
      "/staria/staria-3.webp",
      "/staria/staria-4.webp",
      "/staria/staria-5.webp",
      "/staria/staria-6.webp"
    ],
    videoUrl: "https://www.youtube.com/watch?v=staria_video_demo"
  }
};

// ARRAY GENERAL
const vehiculos: DetalleVehiculo[] = [hb20, hb20s, creta, tucson, santaFe, staria];

export { hb20, hb20s, creta, tucson, santaFe, staria, vehiculos };

export function getVehiculoById(id: string) {
  return vehiculos.find(v => v.id === id);
}
