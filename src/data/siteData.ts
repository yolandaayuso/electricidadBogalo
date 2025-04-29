import { 
  Bolt, 
  Sun, 
  Droplets, 
  Antenna, 
  Car, 
  Wrench, 
  Radar
} from 'lucide-react';

export const services = [
  {
    id: "electricas",
    title: "Instalaciones Eléctricas",
    shortDesc: "Instalaciones eléctricas profesionales para residencias, comercios e industrias.",
    description: "Realizamos todo tipo de instalaciones eléctricas en residencias, comercios e industria con los más altos estándares de calidad y seguridad. Ofrecemos soluciones personalizadas para cada cliente, cumpliendo con todas las normativas vigentes. Incluimos gestión de boletines eléctricos y altas en industria.",
    benefits: [
      "Diseño personalizado según necesidades",
      "Instalación profesional y eficiente",
      "Materiales de alta calidad y durabilidad",
      "Cumplimiento estricto de normativas eléctricas",
      "Certificaciones y boletines oficiales",
    ],
    icon: Bolt,
    link: "/servicios#electricas",
    image: "images/servicio1.3.png"
  },
  {
    id: "solares",
    title: "Instalaciones Solares",
    shortDesc: "Instalaciones solares fotovoltaicas personalizadas con estudio técnico previo.",
    description: "Diseñamos e instalamos sistemas solares fotovoltaicos personalizados para maximizar el ahorro energético y aprovechar la energía renovable. Realizamos un estudio técnico previo para ofrecer la mejor solución adaptada a cada caso, calculando la instalación óptima.",
    benefits: [
      "Estudio técnico personalizado",
      "Instalación por técnicos especializados",
        "Mantenimiento preventivo y correctivo"
    ],
    icon: Sun,
    link: "/servicios#solares",
    image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    id: "bombas",
    title: "Bombas de Riego Solar",
    shortDesc: "Sistemas de bombeo solar con monitorización móvil y cálculo de caudal para un riego eficiente.",
    description: "Instalamos sistemas de bombeo solar para riego agrícola, integrando monitorización remota y programación desde el móvil para un control total desde cualquier lugar. Realizamos aforos y cálculos de caudal precisos para dimensionar la instalación según las necesidades de cada cultivo, optimizando recursos, reduciendo costes energéticos y garantizando autonomía en zonas sin acceso a la red.",
    benefits: [
      "Ahorro significativo en costes energéticos",
      "Autonomía en zonas sin red eléctrica",
      "Monitorización y control remoto desde tú móvil",
      "Programación de riegos automática y personalizada",
      "Alertas y notificaciones en tiempo real",
      "Aforos y cálculo preciso de caudales",
      "Dimensionamiento óptimo del sistema",
      "Mantenimiento reducido"
    ],
    icon: Droplets,
    link: "/servicios#bombas",
    image: "images/servicio3.png"
  },
  {
    id: "antenas",
    title: "Antenas y Videoporteros",
    shortDesc: "Instalación y mantenimiento de antenas de TV y sistemas de videoportero.",
    description: "Ofrecemos servicio integral de instalación y mantenimiento de antenas de televisión y sistemas de videoportero, tanto para viviendas particulares como para comunidades. Trabajamos con las mejores marcas del mercado para garantizar una recepción perfecta y sistemas de comunicación fiables.",
    benefits: [
      "Instalación profesional",
      "Mejor recepción de señal de TV",
      "Sistemas de videoportero de última generación",
      "Compatibilidad con smartphones",
      "Servicio técnico rápido y eficaz",
      "Soluciones para particulares y comunidades"
    ],
    icon: Antenna,
    link: "/servicios#antenas",
    image: "images/servicio4.png"
  },
  {
    id: "cargadores",
    title: "Cargadores para Vehículos Eléctricos",
    shortDesc: "Puntos de recarga para vehículos eléctricos en hogares y empresas.",
    description: "Instalamos puntos de recarga para vehículos eléctricos tanto en hogares como en empresas, adaptados a las necesidades específicas de cada cliente. Nos encargamos de todo el proceso, desde el estudio inicial hasta la instalación y puesta en marcha, cumpliendo con todas las normativas vigentes.",
    benefits: [
      "Adaptación a cualquier tipo de vehículo eléctrico",
      "Gestión inteligente de la carga",
      "Optimización de la potencia contratada",
      "Control mediante app móvil"
    ],
    icon: Car,
    link: "/servicios#cargadores",
    image: "images/servicio5.png"
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento Industrial y Fotovoltaico",
    shortDesc: "Servicio de mantenimiento preventivo y correctivo para instalaciones.",
    description: "Realizamos mantenimiento preventivo y correctivo tanto en instalaciones industriales como en sistemas fotovoltaicos. Nuestro servicio garantiza el óptimo funcionamiento de las instalaciones, previniendo averías y maximizando la vida útil de los equipos.",
    benefits: [
      "Planes de mantenimiento personalizados",
      "Rápida respuesta ante incidencias",
      "Revisiones periódicas programadas",
      "Optimización del rendimiento",
      "Prolongación de la vida útil de equipos",
      "Informes detallados de cada intervención"
    ],
    icon: Wrench,
    link: "/servicios#mantenimiento",
    image: "images/servicio6.png"  },
  {
    id: "deteccion",
    title: "Detección de Fallos y Fugas Eléctricas",
    shortDesc: "Localización de fallos y fugas eléctricas mediante radar.",
    description: "Utilizamos tecnología avanzada de radar para la detección precisa de fallos y fugas eléctricas, así como para el trazado y determinación de la profundidad del cableado. Este servicio permite solucionar problemas de forma rápida y eficaz, minimizando obras y molestias.",
    benefits: [
      "Detección precisa sin obras invasivas",
      "Reducción de tiempos de reparación",
      "Ahorro en costes de intervención",
      "Identificación exacta de la ubicación del problema",
      "Minimización de daños colaterales",
      "Equipos de última generación"
    ],
    icon: Radar,
    link: "/servicios#deteccion",
    image: "images/servicio7.png",
    
  }
];

export const projects = [
  {
    id: "deteccion-averia-cable-subterraneo",
    title: "Detección y reparación de avería en línea subterránea",
    shortDesc: "Localización por radar y reparación de cableado subterráneo en finca.",
    description: "El cliente tenía una bomba de agua inoperativa debido a una avería en la línea eléctrica subterránea. Mediante radar de penetración de suelo detectamos el trazado del cable, determinamos la profundidad y el punto exacto del daño, donde el cable estaba en mal estado, y procedimos a su sustitución y restauración del servicio.",
    client: "Finca Peñahelada",
    location: "Torre de Juan Abad, Ciudad Real",
    coordinates: { lat: 38.6768, lon: -3.0004 },
    date: "Abril 2025",
    services: [
      "Detección de averías",
      "Radar de penetración de suelo",
      "Reparación de cableado subterráneo"
    ],
    image: "images/peñahela3.jpeg",
    gallery: [
    "images/peñahela1.mp4",
    "images/peñahela2.jpeg",
    "images/peñahela3.jpeg",
    "images/peñahela4.jpeg",
    ]
  },  
  {
    id: "bombeo-solar-santacruz",
    title: "Instalación de bombeo solar en Santa Cruz de los Cañamos",
    shortDesc: "Dos sistemas de bombeo solar con 15 paneles de 555 Wp para bombas de 5,5 CV y 4 CV con variadores trifásicos.",
    description: `Proyecto realizado en abril de 2025 en Santa Cruz de los Cañamos (Ciudad Real) para cliente particular. Incluye:
    - Sistema A: 15 paneles solares de 555 Wp y bomba de 5,5 CV, gestionado por variador trifásico.
    - Sistema B: 15 paneles solares de 555 Wp y bomba de 4 CV, con variador trifásico.
    - Diseño e integración del inversor trifásico adaptado a cada potencia de bomba.
    - Configuración de monitorización remota y ajustes automáticos según disponibilidad solar`,
    client: "Particular",
    location: "Santa Cruz de los Cañamos, Ciudad Real",
    coordinates: { lat: 38.6863, lon: -2.7775 },
    date: "Abril 2025",
    services: [
      "Instalación de bombeo solar",
      "Monitorización remota",
    ],
    image: "images/stacruz.jpeg",
    gallery: [
      "images/stacruz1.jpeg",
      "images/stacruz.jpeg"

    ]
  },  
  {
    id: "instalacion-solar-6kw",
    title: "Instalación solar  para autoconsumo",
    shortDesc: "Sistema de autoconsumo solar para vivienda unifamiliar.",
    description: "Instalación de un sistema fotovoltaico de 7 placas solares para autoconsumo en vivienda unifamiliar en Villanueva de los Infantes. El sistema incluye  paneles solares de alta eficiencia, inversor. Permite un ahorro energético de hasta el 70% en la factura eléctrica.",
    client: "Vivienda Unifamiliar",
    location: "Villanueva de los Infantes, Ciudad Real",
    coordinates: { lat: 38.7326, lon: -3.0127 },
    date: "Marzo 2025",
    services: ["Instalación solar", "Autoconsumo"],
    image:      "images/proy2.1.jpg",
    gallery: [
      "images/proy2.1.jpg",
      "images/PlacasSolares.mp4"

    ]
  },
  {
    id: "tunelM30",
    title: "Instalación eléctrica en Túnel Avda. de Ilustración",
    shortDesc: "Instalación eléctrica completa en túnel Avda. de Ilustración, en Madrid.",
    description: "En el túnel de la Avenida de la Ilustración en Madrid realizamos un completo proyecto de instalación eléctrica que abarcó desde el montaje de bandejas portacables para un soporte seguro del tendido hasta el despliegue de conductores RZ1-K 1 kV en secciones de 5×6 mm² y 5×10 mm², así como RZ1-K (AS+) 1 kV de 5×10 mm², garantizando la máxima fiabilidad y protección. Asimismo, llevamos a cabo el conexionado y organización interna de los cuadros eléctricos para facilitar futuras ampliaciones y mantenimientos, y culminamos con la instalación y puesta en marcha de proyectores LED de alta eficiencia, mejorando significativamente la visibilidad y reduciendo el consumo energético a lo largo de todo el tramo. Este trabajo demuestra nuestra capacidad para ofrecer soluciones robustas, seguras y adaptadas a infraestructuras urbanas complejas.",
    client: "IMESAPI S.A",
    location: "Madrid, Madrid",
    coordinates: { lat: 40.4774, lon: -3.7038 },
    date: "Febrero 2025",
    services: ["Instalación eléctrica"],
    image:      "images/proy1.jpeg",
    gallery: [
      "images/proy1.jpeg",

    ]
  },
  {
    id: "instalacion-electrica-comercio",
    title: "Instalación eléctrica en local comercial",
    shortDesc: "Instalación completa en tienda de moda con iluminación LED.",
    description: "Instalación eléctrica completa en un local comercial dedicado al comercio de productos textiles. El proyecto incluyó el diseño y la instalación de un sistema de iluminación LED eficiente, adaptado a las diferentes zonas de la tienda (escaparates, probadores, zona de venta), así como la instalación de sistemas de seguridad. También se gestióno el boletín eléctrico y su alta en industria",
    client: "KIK-Ciudad Real",
    location: "Ciudad Real, Ciudad Real",
    coordinates: { lat: 38.9848, lon: -3.9275 },
    date: "Enero 2025",
    services: ["Instalación eléctrica", "Iluminación comercial"],
    image:      "images/proy4.jpeg",
    gallery: [
      "images/proy4.jpeg",

    ]
  },
  {
    id: "mantenimiento-industrial-fabrica",
    title: "Mantenimiento en planta fotovoltaica",
    shortDesc: "Servicio integral de mantenimiento fotovoltaico.",
    description: "Mantenimiento fotovoltaico en una planta solar en Martos, donde se hizo un estudio de las placas solares que estaban en mal funcionamiento y deterioridadas, y se realizó su cambio",
    client: "Eficiencia Global",
    location: "Martos, Jaén",
    coordinates: { lat: 37.7212, lon: -3.9725 },
    date: "Enero 2025",
    services: ["Mantenimiento industrial", "Asistencia 24h"],
    image: "images/proy6.jpeg",
    gallery: [
      "images/proy6.mp4",
      "images/proy6.jpeg"
    ]
  },
  {
    id: "instalacion-fotovoltaica-tomelloso",
    title: "Instalación media tensión y centro de transformación para planta fotovoltaica",
    shortDesc: "Línea de MT, centro de seccionamiento y transformación para planta fotovoltaica.",
    description: "Ejecución de la instalación de una línea de media tensión, instalación de un centro de seccionamiento y un centro de transformación para alimentar una planta fotovoltaica, incluyendo las obras civiles y la coordinación con la compañía eléctrica.",
    client: "IMESAPI S.A",
    location: "Tomelloso, Ciudad Real",
    coordinates: { lat: 39.1524, lon: -3.0178 },
    date: "Diciembre 2024",
    services: [
      "Línea de media tensión",
      "Centro de transformación",
      "Instalación fotovoltaica"
    ],
    image: "images/carlosTrabajando.jpg",
    gallery: [
      "images/tomelloso5.mp4",
      "images/tomelloso1.jpeg",
      "images/tomelloso2.jpeg",
      "images/tomelloso3.jpeg",
      "images/tomelloso4.jpeg",
      
    ]
  
  },
  {
    id: "bombeo-solar-pozo-serna",
    title: "Instalación de sistema de bombeo solar en pozo",
    shortDesc: "Bombeo solar para bomba de 2 CV a 90 m de profundidad con monitorización remota.",
    description: `Instalación de un sistema de bombeo solar para una bomba de 2 CV situada a 90 m de profundidad, alimentado por 7 paneles solares de 580 Wp. El conjunto está gestionado por un variador trifásico de 1,5 kW a 230 V y equipado con una pantalla táctil de 6 pulgadas. A través de esta pantalla o de forma remota vía VPN se pueden:
    - Monitorizar parámetros en tiempo real (frecuencia, potencia, presión) con registros cada segundo.
    - Visualizar gráficas de las últimas 2 horas y estadísticas cada 5 minutos; generar informes diarios, semanales y mensuales.
    - Programar riego secuencial de forma intuitiva, adaptando los ciclos automáticamente según la energía solar disponible.
    - Configurar hasta 99 programas de riego y controlar hasta 17 sectores (incluye agitadora, abonadora y grupo electrógeno).
    - Establecer programaciones diarias, semanales o personalizadas por el usuario, totalmente adaptables a las necesidades del cultivo.`,
    client: "Particular",
    location: "El Pozo de la Serna, Ciudad Real",
    coordinates: { lat: 38.7536, lon: -2.9156 },
    date: "Diciembre 2024",
    services: [
      "Instalación de bombeo solar",
      "Variador trifásico",
      "Monitorización remota"
    ],
    image:       "images/antonioPozo3.jpeg",
    gallery: [
     "images/antonioPozo1.jpeg",
     "images/antonioPozo2.jpeg",
     "images/antonioPozo3.jpeg"
    ]
  },
  {
    id: "cargador-vehiculo-comunidad",
    title: "Instalación de cargador en vivienda unifamiliar",
    shortDesc: "Punto de recarga para vehículos eléctricos en cochera de casa unifamiliar.",
    description: "Instalación de 1 puntos de recarga para vehículos eléctricos en la cochera de una casa unifamiliar en Villanueva de los Infantes. El sistema incluye gestión inteligente de cargas para optimizar la potencia contratada, control de carga mediante app.",
    client: "Vivienda unifamiliar Vva de los Infantes",
    location: "Villanueva de los infantes, Ciudad Real",
    coordinates: { lat: 38.7326, lon: -3.0127 },
    date: "Noviembre 2024",
    services: ["Cargadores para vehículos eléctricos", "Gestión inteligente"],
    image:       "images/p4.jpeg",
    gallery: [
      "images/p4.jpeg",
    ]
  },
  
  {
    id: "reforma-electrica-pasteleria-villanueva-infantes",
    title: "Reforma eléctrica en pastelería",
    shortDesc: "Instalación eléctrica integral con iluminación LED en local comercial.",
    description: "Proyecto ejecutado en pleno centro de Villanueva de los Infantes (Ciudad Real). Se realizó la reforma completa de la instalación eléctrica para una pastelería y panadería, renovando canalizaciones y tendido de nuevo cableado apto para zonas de alimentación; instalando cuadro eléctrico con protecciones diferenciales y magnetotérmicas; suministrando y montando luminarias LED de alta eficiencia.",
    client: "Pastelería y Panadería local",
    location: "Villanueva de los Infantes, Ciudad Real",
    coordinates: { lat: 38.7326, lon: -3.0127 },
    date: "Mayo 2024",
    services: [
      "Instalación eléctrica",
      "Iluminación comercial",
    ],
    image: "images/pasteleria.jpeg",
    gallery: [
      "images/pasteleria2.jpeg",
      "images/pasteleria3.jpeg",
      "images/pasteleria.jpeg",
    ]
  },  
  {
    id: "bombeo-solar-30-paneles",
    title: "Instalación de 30 paneles para bombeo solar",
    shortDesc: "Sistema de bombeo solar con 30 paneles de 656W.",
    description: "Instalación de 30 paneles solares de 656W para sistema de bombeo solar en una finca agrícola de 25 hectáreas en Almagro. El sistema está diseñado para extraer agua de un pozo a 80 metros de profundidad y permite el riego de toda la finca sin necesidad de conexión a la red eléctrica.",
    client: "Particular",
    location: "Alcubillas, Ciudad Real",
    coordinates: { lat: 38.7034, lon: -3.0356 },
    date: "Abril 2024",
    services: ["Bombeo solar", "Riego agrícola"],
    image:      "images/proy3.jpeg",
    gallery: [
      "images/proy3.jpeg",

    ]
  },
];
export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  client: string;
  location: string;
  coordinates: { lat: number; lon: number };
  date: string;
  services: string[];
  image: string;
  gallery: string[];
}
export const getUniqueLocations = () => {
  // Using a Map to ensure unique locations by coordinates
  const uniqueLocationsMap = new Map();

  projects.forEach(project => {
    const key = `${project.coordinates.lat}-${project.coordinates.lon}`;
    
    if (!uniqueLocationsMap.has(key)) {
      uniqueLocationsMap.set(key, {
        location: project.location,
        coordinates: project.coordinates,
        projects: [project]
      });
    } else {
      uniqueLocationsMap.get(key).projects.push(project);
    }
  });

  return Array.from(uniqueLocationsMap.values());
};
export const testimonials = [
  {
    name: "Antonio García",
    role: "Propietario de vivienda",
    content: "Instalaron placas solares en mi casa y ha sido una de las mejores inversiones. El ahorro es increíble y el servicio fue impecable desde el primer momento. Muy profesionales y atentos.",
    rating: 5
  },
  {
    name: "Cooperativa El Olivar",
    role: "Cliente de bombeo solar",
    content: "El sistema de bombeo solar que nos instalaron funciona perfectamente. Hemos eliminado por completo la dependencia del gasóleo y ahora nuestro riego es mucho más económico y sostenible.",
    rating: 5
  },
  {
    name: "María Sánchez",
    role: "Gerente de Fashion Store",
    content: "Realizaron la instalación eléctrica de nuestra tienda con un diseño de iluminación espectacular. Han sabido entender perfectamente nuestras necesidades y el resultado ha sido mejor de lo esperado.",
    rating: 5
  },
  {
    name: "Comunidad Edificio Central",
    role: "Cliente corporativo",
    content: "La instalación de los puntos de recarga para vehículos eléctricos ha sido todo un éxito en nuestra comunidad. El sistema funciona perfectamente y la aplicación de gestión es muy intuitiva.",
    rating: 4
  },
  {
    name: "Juan Rodríguez",
    role: "Director de fábrica",
    content: "Llevan el mantenimiento eléctrico de nuestra fábrica y estamos muy satisfechos. Su respuesta ante incidencias es inmediata y el mantenimiento preventivo ha reducido notablemente las paradas de producción.",
    rating: 5
  }
];

export const faqs = [
  {
    question: "¿Ofrecen servicio eléctrico de urgencia 24 horas?",
    answer: "Sí, disponemos de servicio de emergencias eléctricas 24 horas, 365 días al año. Nuestro equipo de técnicos cualificados está siempre preparado para atender cualquier urgencia eléctrica, con un tiempo medio de respuesta inferior a 1 hora en Ciudad Real y alrededores. Garantizamos una solución rápida y profesional para restablecer su suministro eléctrico o resolver averías urgentes.",
    icon: "service"
  },
  {
    question: "¿En qué zonas trabajan o prestan servicio?",
    answer: "Nuestra sede principal está en Villanueva de los Infantes, Ciudad Real, pero operamos en toda España. Tenemos una presencia especialmente fuerte en Castilla-La Mancha, donde ofrecemos respuesta inmediata. Para proyectos en otras comunidades, realizamos un estudio previo detallado y proporcionamos un presupuesto que incluye los costes de desplazamiento, garantizando siempre la máxima calidad en nuestro servicio.",
    icon: "location"
  },
  {
    question: "¿Qué incluye una instalación solar para autoconsumo?",
    answer: "Nuestras instalaciones solares para autoconsumo son llave en mano e incluyen: estudio técnico personalizado, diseño optimizado según consumo, paneles solares de alta eficiencia, inversor de última generación, estructura de montaje, protecciones eléctricas, cableado, sistema de monitorización, tramitación administrativa completa, legalización de la instalación y configuración del sistema. Además, ofrecemos mantenimiento preventivo y garantía integral del sistema.",
    icon: "solar"
  },
  {
    question: "¿Pueden emitir boletines eléctricos para legalizar una instalación?",
    answer: "Sí, como empresa instaladora autorizada, emitimos certificados y boletines eléctricos oficiales para todo tipo de instalaciones. Nos encargamos de toda la tramitación necesaria ante la administración, incluyendo la gestión con la compañía eléctrica y la obtención de permisos. Garantizamos que todas las instalaciones cumplan con la normativa vigente (REBT).",
    icon: "certification"
  },
  {
    question: "¿Qué mantenimiento necesitan las placas solares?",
    answer: "Las instalaciones solares requieren un mantenimiento mínimo pero esencial: limpieza periódica de los paneles (1-2 veces al año), revisión anual de conexiones y componentes, verificación del rendimiento mediante monitorización, y comprobación de las protecciones eléctricas. Ofrecemos planes de mantenimiento preventivo que incluyen estas tareas y garantizan el máximo rendimiento de su instalación.",
    icon: "maintenance"
  },
  {
    question: "¿Qué es una bomba de riego solar y qué ventajas tiene?",
    answer: "Una bomba de riego solar es un sistema que utiliza energía solar fotovoltaica para extraer agua de pozos o sondeos. Sus principales ventajas son: ahorro significativo en costes energéticos, independencia de la red eléctrica, funcionamiento sostenible, mínimo mantenimiento y larga vida útil. Es ideal para agricultura, especialmente en zonas sin acceso a red eléctrica.",
    icon: "solar"
  },
  {
    question: "¿Puedo instalar un cargador para coche eléctrico en mi casa?",
    answer: "Sí, instalamos puntos de recarga domésticos adaptados a cualquier vehículo eléctrico. El proceso incluye: estudio de la potencia disponible, elección del tipo de cargador más adecuado, instalación certificada, configuración y pruebas. Además, gestionamos las posibles subvenciones disponibles y ofrecemos soluciones de gestión inteligente de la carga para optimizar el consumo.",
    icon: "car"
  },
  {
    question: "¿Qué diferencia hay entre instalaciones residenciales, comerciales e industriales?",
    answer: "Las instalaciones varían en complejidad, potencia y requisitos específicos. Las residenciales se centran en seguridad y confort doméstico. Las comerciales requieren sistemas más robustos, iluminación específica y mayor potencia. Las industriales son las más complejas, con requisitos de alta potencia, sistemas de control avanzados y normativas específicas. Tenemos experiencia en los tres sectores.",
    icon: "building"
  }
];

export const blogPosts = [
  {
    id: "fallo-placas-solares-en-apagon",
    title: "¿Por qué algunas instalaciones solares no funcionaron durante el apagón?",
    summary: "Muchas instalaciones solares dejaron de generar electricidad durante el último apagón. Te explicamos por qué ocurre esto, qué soluciones existen y cómo preparar tu sistema para emergencias.",
    content: `
    <p style="text-align: justify;">
      A raíz del apagón que afectó a distintas zonas de España ayer, numerosos usuarios se sorprendieron al comprobar que sus placas solares <strong>dejaron de funcionar justo cuando más las necesitaban</strong>. Aunque parezca contradictorio, este comportamiento es completamente normal en instalaciones conectadas a la red eléctrica convencional.
    </p>
  
    <h2 style="font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 1rem;">🔌 ¿Por qué ocurre esto?</h2>
    <p style="text-align: justify;">
      Las instalaciones solares <strong>de autoconsumo conectadas a red (on-grid)</strong> están obligadas a detener su producción automáticamente cuando se interrumpe el suministro de la red. Esta desconexión, exigida por el <strong>Reglamento de Baja Tensión</strong>, tiene un objetivo prioritario: proteger vidas humanas y evitar riesgos eléctricos.
    </p>
  
    <div style="background-color: #f0f4f8; padding: 1rem; border-radius: 8px; margin: 2rem 0;">
      <h3 style="font-size: 1.1rem; margin-bottom: 0.75rem;">⚠️ ¿Qué es el efecto isla?</h3>
      <p style="text-align: justify;">
        El <strong>efecto isla</strong> sucede cuando, tras un apagón general, una instalación continúa generando electricidad en su zona local. Esto puede poner en grave peligro a los técnicos que trabajan suponiendo que no existe corriente, además de provocar daños en la infraestructura eléctrica cuando el suministro general se restablece. Por eso, toda generación conectada a red debe desconectarse automáticamente.
      </p>
    </div>
  
    <h2 style="font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 1rem;">🛠️ ¿Cómo evitar quedarte sin energía en un apagón?</h2>
    <p style="text-align: justify;">
      Si quieres que tu instalación solar siga funcionando durante cortes de suministro, necesitas un sistema preparado para emergencias. Estos son los elementos esenciales:
    </p>
    <ul style="margin-top: 1rem; text-align: justify; list-style-type: none;">
      <li>✅ <strong>Inversor híbrido con función backup:</strong> alimenta automáticamente las cargas prioritarias (frigorífico, iluminación, comunicaciones...).</li>
      <li>🔋 <strong>Banco de baterías:</strong> almacena la energía solar para disponer de electricidad incluso de noche o en largas interrupciones.</li>
      <li>⚡ <strong>Cuadro de respaldo:</strong> separa los circuitos esenciales del resto de la instalación para maximizar la autonomía.</li>
      <li>🔄 <strong>Sistema de conmutación automática:</strong> detecta el apagón y aísla tu hogar de la red en segundos.</li>
    </ul>
  
    <h2 style="font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 1rem;">🏠 ¿Cómo se comporta cada tipo de instalación?</h2>
    <table style="width:100%; border-collapse: collapse; margin-top: 1rem;">
      <thead style="background-color: #0077b6; color: #ffffff;">
        <tr>
          <th style="padding: 0.75rem; border: 1px solid #ccc;">Tipo de instalación</th>
          <th style="padding: 0.75rem; border: 1px solid #ccc;">¿Funciona en apagón?</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 0.75rem; border: 1px solid #ccc;">Autoconsumo on-grid (sin baterías)</td>
          <td style="padding: 0.75rem; border: 1px solid #ccc; text-align: center;">❌ No</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem; border: 1px solid #ccc;">Autoconsumo híbrido (con backup y baterías)</td>
          <td style="padding: 0.75rem; border: 1px solid #ccc; text-align: center;">✅ Sí, en circuitos críticos</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 0.75rem; border: 1px solid #ccc;">Instalación aislada (off-grid)</td>
          <td style="padding: 0.75rem; border: 1px solid #ccc; text-align: center;">✅ Sí</td>
        </tr>
      </tbody>
    </table>
  
    <h2 style="font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 1rem;">💡 ¿Qué te recomendamos?</h2>
    <p style="text-align: justify;">
      Desde Electricidad Bógalo, te recomendamos:
    </p>
    <ul style="margin-top: 1rem; text-align: justify; list-style-type: none;">
      <li>🔍 Verificar si tu inversor admite la función backup y la ampliación con baterías.</li>
      <li>🔋 Incorporar un sistema de almacenamiento que garantice autonomía ante cualquier corte de red.</li>
      <li>🛠️ Realizar un diseño personalizado que priorice las cargas más importantes de tu hogar o negocio.</li>
    </ul>
  
    <p style="margin-top: 1.5rem; text-align: justify;">
      En <strong>Electricidad Bógalo</strong> no solo instalamos paneles solares: diseñamos <strong>soluciones energéticas inteligentes</strong> que te permiten ser realmente independiente y proteger a tu familia y tu negocio, incluso en situaciones de emergencia.
    </p>
  
    <div style="background-color: #fff7e6; padding: 2rem; border-radius: 12px; text-align: center; margin-top: 2rem;">
      <h3 style="font-size: 1.5rem; color: #d97706; margin-bottom: 1rem;">🌞 No esperes al próximo apagón</h3>
      <p style="font-size: 1rem; color: #555;">Convierte tu instalación solar en un verdadero refugio energético. ¡La tranquilidad empieza hoy!</p>
      <p style="margin-top: 1rem;">
        <a href="/contacto" style="display: inline-block; background-color: #0077b6; color: #fff; padding: 0.8rem 2rem; border-radius: 8px; margin-top: 1rem; text-decoration: none;">Solicitar asesoramiento</a>
      </p>
    </div>
  `
,  
    author: "Equipo Electricidad Bógalo",
    date: "29/04/2025",
    image: "/images/POST1.png",
    tags: ["Autoconsumo", "Apagón", "Inversor híbrido", "Baterías", "Energía solar"]
  }
  
,
  {
    id: "ventajas-bombeo-solar",
    title: "Ventajas del bombeo solar en la agricultura y ganadería",
    summary: "El bombeo solar representa una solución eficiente, autónoma y sostenible para el riego y el abastecimiento de agua en explotaciones rurales.",
    content: `
     <article>
  <h1 style="font-size: 1.75rem; margin-bottom: 1rem;">🌞 Ventajas del bombeo solar en agricultura y ganadería</h1>

  <p style="text-align: justify;">
    El bombeo solar es una solución eficiente, autónoma y sostenible para el suministro de agua en explotaciones agrícolas, ganaderas y zonas rurales. Permite extraer agua utilizando únicamente la energía del sol, sin necesidad de conexión a la red eléctrica ni consumo de combustibles fósiles.
  </p>

  <h2 style="font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 1rem;">🔧 ¿Cómo funciona el bombeo solar?</h2>
  <p style="text-align: justify;">
    Un sistema de bombeo solar combina paneles solares con una bomba de agua, que puede ser sumergible o de superficie. La energía generada impulsa el agua desde pozos, depósitos o fuentes naturales, adaptándose a las necesidades específicas de caudal y altura.
  </p>

  <div style="background-color: #f0f4f8; padding: 1rem; border-radius: 8px; margin: 2rem 0;">
    <h3 style="font-size: 1.1rem; margin-bottom: 0.75rem;">⚙️ ¿Qué componentes incluye un sistema de bombeo solar?</h3>
    <ul style="margin-top: 1rem; text-align: justify; list-style-type: none;">
      <li>✅ <strong>Paneles solares:</strong> captan la energía del sol para alimentar el sistema.</li>
      <li>🔋 <strong>Controlador de bombeo:</strong> gestiona la potencia y protege la bomba.</li>
      <li>🚰 <strong>Bomba de agua:</strong> extrae y transporta el agua hacia el punto de consumo.</li>
      <li>📱 <strong>Pantallas de monitorización y control:</strong> permiten supervisar el sistema y gestionar el riego de forma remota desde el móvil.</li>
    </ul>
  </div>

  <h2 style="font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 1rem;">💡 Beneficios principales del bombeo solar</h2>
  <ul style="margin-top: 1rem; text-align: justify; list-style-type: none;">
    <li>💸 <strong>Ahorro de costes:</strong> sin facturas eléctricas ni gastos de combustible.</li>
    <li>🌿 <strong>Energía limpia y renovable:</strong> compromiso con el medio ambiente.</li>
    <li>🔋 <strong>Autonomía total:</strong> funcionamiento independiente en zonas aisladas.</li>
    <li>📱 <strong>Control a distancia:</strong> programa y supervisa el riego desde tu smartphone.</li>
    <li>🛠️ <strong>Mantenimiento reducido:</strong> equipos robustos y de larga duración.</li>
  </ul>

  <h2 style="font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 1rem;">🚜 Aplicaciones habituales</h2>
  <p style="text-align: justify;">
    El bombeo solar se utiliza en sistemas de riego agrícola (por goteo o aspersión), llenado de depósitos, abastecimiento de bebederos ganaderos y suministro de agua para explotaciones rurales.
  </p>
  <p style="text-align: justify;">
    Gracias a los sistemas de control inteligentes, es posible automatizar los horarios de riego, adaptar los consumos a las condiciones climáticas y optimizar el uso del agua, todo gestionado cómodamente desde tu móvil o tablet.
  </p>

  <div style="background-color: #fff7e6; padding: 2rem; border-radius: 12px; text-align: center; margin-top: 2rem;">
    <h3 style="font-size: 1.5rem; color: #d97706; margin-bottom: 1rem;">🌞 Saca el máximo partido al sol</h3>
    <p style="font-size: 1rem; color: #555;">En <strong>Electricidad Bógalo</strong> diseñamos sistemas de bombeo solar personalizados, con monitorización inteligente y control remoto para que riegues de forma eficiente y sin complicaciones.</p>
    <p style="margin-top: 1rem;">
      <a href="/contacto" style="display: inline-block; background-color: #0077b6; color: #fff; padding: 0.8rem 2rem; border-radius: 8px; margin-top: 1rem; text-decoration: none;">Solicitar asesoramiento</a>
    </p>
  </div>
</article>
    `,
    author: "Equipo Electricidad Bógalo",
    date: "27/04/2025",
    image: "/images/POST2.png",
        tags: ["Bombeo solar", "Agricultura", "Energía renovable"]
  }
  ,
  {
    id: "ahorro-energetico-con-led",
    title: "Cómo las luces LED pueden ayudarte a ahorrar energía y dinero",
    summary: "Descubre por qué cambiar a iluminación LED es una de las formas más efectivas de reducir el consumo eléctrico en hogares y negocios.",
    content: `
     <article>
  <h1 style="font-size: 1.75rem; margin-bottom: 1rem;">💡 Cómo ahorrar energía y dinero con iluminación LED</h1>

  <p style="text-align: justify;">
    Cambiar a iluminación LED es una de las decisiones más sencillas y efectivas para reducir el consumo eléctrico y ahorrar en las facturas de luz, tanto en hogares como en negocios. Además, contribuye a un entorno más sostenible.
  </p>

  <h2 style="font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 1rem;">🔎 ¿Qué es una bombilla LED?</h2>
  <p style="text-align: justify;">
    Una bombilla LED (diodo emisor de luz) transforma la electricidad en luz mediante un semiconductor, eliminando la necesidad de filamentos o gases. Esto se traduce en mayor eficiencia, menor consumo y una vida útil mucho más larga.
  </p>

  <div style="background-color: #f0f4f8; padding: 1rem; border-radius: 8px; margin: 2rem 0;">
    <h3 style="font-size: 1.1rem; margin-bottom: 0.75rem;">⚙️ Características principales de las luces LED</h3>
    <ul style="margin-top: 1rem; text-align: justify; list-style-type: none;">
      <li>✅ <strong>Alta eficiencia:</strong> ahorro de hasta un 80% respecto a bombillas tradicionales.</li>
      <li>🔋 <strong>Larga duración:</strong> entre 15.000 y 50.000 horas de vida útil.</li>
      <li>💨 <strong>Menor emisión de calor:</strong> mejora el confort térmico en interiores.</li>
      <li>⚡ <strong>Encendido instantáneo:</strong> sin tiempos de espera ni parpadeos.</li>
      <li>📱 <strong>Integración inteligente:</strong> compatibles con sistemas de domótica para controlar intensidad y color.</li>
    </ul>
  </div>

  <h2 style="font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 1rem;">🏠 ¿Dónde aprovechar la iluminación LED?</h2>
  <p style="text-align: justify;">
    Las bombillas LED son ideales para viviendas, oficinas, locales comerciales, almacenes e industrias. Mejoran la eficiencia energética y permiten un diseño de iluminación más flexible y decorativo.
  </p>

  <div style="background-color: #fff7e6; padding: 2rem; border-radius: 12px; text-align: center; margin-top: 2rem;">
    <h3 style="font-size: 1.5rem; color: #d97706; margin-bottom: 1rem;">💡 Moderniza tu iluminación</h3>
    <p style="font-size: 1rem; color: #555;">En <strong>Electricidad Bógalo</strong> te asesoramos en la transición a sistemas LED personalizados para maximizar tu ahorro y mejorar el confort de tus espacios.</p>
    <p style="margin-top: 1rem;">
      <a href="/contacto" style="display: inline-block; background-color: #0077b6; color: #fff; padding: 0.8rem 2rem; border-radius: 8px; margin-top: 1rem; text-decoration: none;">Solicitar asesoramiento</a>
    </p>
  </div>
</article>

    `,
    author: "Equipo Electricidad Bógalo",
    date: "20/04/2025",
    image: "/images/POST3.png",
        tags: ["LED", "Ahorro energético", "Iluminación eficiente"]
  }
  
];
