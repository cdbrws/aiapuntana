/**
 * Intent Keywords Database
 * Maps intents to relevant keywords for detection
 */

export const intentKeywords = {
  buscar_plan: [
    'plan', 'hacer', 'actividad', 'entretener', 'divertir', 'qué hacer',
    'cosa', 'propuesta', 'idea', 'salir', 'ir', 'andar', 'onda'
  ],
  buscar_comida: [
    'comer', 'hambre', 'pizza', 'lomito', 'milanesa', 'choripán', 'café',
    'merendar', 'desayuno', 'almuerzo', 'cena', 'restaurante', 'bar', 'comida',
    'asado', 'parrilla', 'burger', 'sándwich', 'empanadas', 'pastas', 'fideos'
  ],
  buscar_evento: [
    'evento', 'finde', 'hoy', 'tocar', 'show', 'concierto', 'banda', 'música',
    'feria', 'festival', 'agenda', 'que pasa', 'que hay', 'programa', 'función'
  ],
  buscar_gratis: [
    'gratis', 'gratuito', 'libre', 'sin costo', 'sin pagar', 'plata', 'billetera',
    'pobre', 'muerto', 'quemado', 'sin dinero', 'economía'
  ],
  buscar_barato: [
    'barato', 'económico', 'oferta', 'promoción', 'descuento', 'precio',
    'costo', 'valor', 'poca guita', 'seco', 'billetera llorando'
  ],
  buscar_lugar_historico: [
    'historia', 'histórico', 'monumento', 'patrimonio', 'antiguo', 'tradición',
    'museo', 'sitio histórico', 'cultura', 'legado', 'pasado'
  ],
  buscar_para_ninos: [
    'niños', 'chicos', 'hijos', 'familia', 'infantil', 'jugar', 'parque',
    'juegos', 'seguro', 'pequeño', 'nenes', 'maternidad'
  ],
  buscar_cita: [
    'pareja', 'cita', 'romantico', 'romance', 'enamorado', 'acompañar',
    'salida', 'novia', 'novio', 'parejita', 'amor', 'especial'
  ],
  buscar_lluvia: [
    'lluvia', 'nublado', 'clima', 'frio', 'adentro', 'cubierto', 'techo',
    'cerrado', 'intemperie', 'mal tiempo', 'inverno'
  ],
  buscar_noche: [
    'noche', 'nocturno', 'boliche', 'bar', 'pena', 'tarde', 'madrugada',
    'noctambulo', 'trasnochar', 'bailar'
  ],
  buscar_cerca: [
    'cerca', 'proximidad', 'cercano', 'acá', 'aqui', 'next', 'por ahi',
    'zona', 'barrio', 'centro', 'norte', 'sur'
  ],
  fallback: [
    'hola', 'ayuda', 'info', 'información', 'consulta', 'pregunta'
  ]
}

// Category keywords for content classification
export const categoryKeywords = {
  gastronomia: [
    'comer', 'comida', 'restaurante', 'bar', 'café', 'pizza', 'milanesa',
    'asado', 'parrilla', 'hamburguesa', 'empanada', 'pasta', 'bebida'
  ],
  lugar: [
    'lugar', 'sitio', 'punto', 'pasaje', 'calle', 'avenida', 'parque',
    'plaza', 'monumento', 'atracción', 'rincón', 'esquina'
  ],
  evento: [
    'evento', 'feria', 'festival', 'concierto', 'show', 'función', 'programa',
    'actividad', 'convocatoria', 'encuentro', 'jornada'
  ],
  comercio: [
    'comercio', 'tienda', 'negocio', 'empresa', 'emprendimiento', 'local',
    'establecimiento', 'compra', 'venta'
  ],
  historia: [
    'historia', 'histórico', 'patrimonio', 'monumento', 'tradición', 'cultura',
    'legado', 'pasado', 'antiguo', 'museo'
  ],
  cultura: [
    'cultura', 'arte', 'museo', 'galería', 'teatro', 'cine', 'música',
    'literatura', 'artista', 'obra'
  ],
  naturaleza: [
    'naturaleza', 'parque', 'montaña', 'río', 'flora', 'fauna', 'paisaje',
    'outdoor', 'trekking', 'camping', 'senderismo'
  ],
  salud: [
    'salud', 'médico', 'hospital', 'farmacia', 'doctor', 'clínica',
    'bienestar', 'ejercicio', 'deporte', 'gimnasia'
  ],
  educacion: [
    'educación', 'escuela', 'universidad', 'taller', 'curso', 'capacitación',
    'aprendizaje', 'formación', 'instituto'
  ],
  servicios: [
    'servicio', 'ayuda', 'asistencia', 'información', 'trámite', 'gestión',
    'consulta', 'asesoramiento'
  ],
  emprendimiento: [
    'emprendimiento', 'emprendedor', 'startup', 'negocio', 'proyecto',
    'innovación', 'idea', 'microempresa'
  ]
}

export default { intentKeywords, categoryKeywords }
