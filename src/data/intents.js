/**
 * Intent Definitions
 * Complete definitions and metadata for each intent
 */

export const intents = {
  buscar_plan: {
    id: 'buscar_plan',
    name: 'Buscar Plan',
    description: 'Usuario busca algo para hacer o alguna actividad',
    category: 'planes',
    priority: 10,
    expectations: [
      { type: 'entity', name: 'location', optional: true },
      { type: 'entity', name: 'date', optional: true },
      { type: 'entity', name: 'category', optional: true }
    ],
    responses: [
      'Te dejo los mejores planes para hoy',
      'Acá van cosas copadas para hacer',
      'Estas son mis recomendaciones'
    ]
  },
  buscar_comida: {
    id: 'buscar_comida',
    name: 'Buscar Comida',
    description: 'Usuario busca dónde comer',
    category: 'gastronomia',
    priority: 9,
    expectations: [
      { type: 'entity', name: 'location', optional: true },
      { type: 'entity', name: 'category', optional: true },
      { type: 'entity', name: 'price', optional: true }
    ],
    responses: [
      'Estos son los mejores lugares para comer',
      'Te dejo opciones de comida',
      'Acá tenés donde comer bien'
    ]
  },
  buscar_evento: {
    id: 'buscar_evento',
    name: 'Buscar Evento',
    description: 'Usuario busca eventos, shows o festivales',
    category: 'evento',
    priority: 8,
    expectations: [
      { type: 'entity', name: 'date', optional: true },
      { type: 'entity', name: 'category', optional: true }
    ],
    responses: [
      'Estos son los eventos del momento',
      'Acá va lo que pasa hoy',
      'Te muestro la agenda'
    ]
  },
  buscar_gratis: {
    id: 'buscar_gratis',
    name: 'Buscar Gratis',
    description: 'Usuario busca opciones sin costo',
    category: 'planes',
    priority: 8,
    responses: [
      'Acá van cosas gratis para disfrutar',
      'Planes sin gastar un peso',
      'Lo mejor sin pagar'
    ]
  },
  buscar_barato: {
    id: 'buscar_barato',
    name: 'Buscar Barato',
    description: 'Usuario busca opciones económicas',
    category: 'planes',
    priority: 7,
    responses: [
      'Opciones económicas para vos',
      'Esto no quema el bolsillo',
      'Cosas baratas y buenas'
    ]
  },
  buscar_lugar_historico: {
    id: 'buscar_lugar_historico',
    name: 'Buscar Lugar Histórico',
    description: 'Usuario busca historia, patrimonio y cultura',
    category: 'historia',
    priority: 7,
    responses: [
      'Te muestro lugares con historia',
      'Esto es importante para la provincia',
      'Patrimonio cultural puntano'
    ]
  },
  buscar_para_ninos: {
    id: 'buscar_para_ninos',
    name: 'Buscar para Niños',
    description: 'Usuario busca actividades familiares',
    category: 'planes',
    priority: 8,
    responses: [
      'Lugares seguros para los chicos',
      'Actividades en familia',
      'Diversión para los nenes'
    ]
  },
  buscar_cita: {
    id: 'buscar_cita',
    name: 'Buscar Cita',
    description: 'Usuario busca planes para salir en pareja',
    category: 'planes',
    priority: 7,
    responses: [
      'Planes románticos para ustedes',
      'Esto es perfecto para una cita',
      'Momentos especiales a dos'
    ]
  },
  buscar_lluvia: {
    id: 'buscar_lluvia',
    name: 'Buscar Plan Lluvia',
    description: 'Usuario busca actividades para días nublados',
    category: 'planes',
    priority: 6,
    responses: [
      'Planes para días nublados',
      'Adentro o cubierto',
      'A resguardo del clima'
    ]
  },
  buscar_noche: {
    id: 'buscar_noche',
    name: 'Buscar Noche',
    description: 'Usuario busca actividades nocturnas',
    category: 'planes',
    priority: 7,
    responses: [
      'Opciones para la noche',
      'Para trasnochadores',
      'Diversión nocturna'
    ]
  },
  buscar_cerca: {
    id: 'buscar_cerca',
    name: 'Buscar Cerca',
    description: 'Usuario busca algo próximo a su ubicación',
    category: 'planes',
    priority: 6,
    responses: [
      'Lugares cercanos a vos',
      'Lo más próximo',
      'Sin viajar lejos'
    ]
  },
  fallback: {
    id: 'fallback',
    name: 'Fallback',
    description: 'Intención no detectada claramente',
    category: 'general',
    priority: 1,
    responses: [
      'No entendí bien, ¿podés reformular?',
      'Contame un poco más',
      'Ayudame a entender mejor'
    ]
  }
}

export default intents
