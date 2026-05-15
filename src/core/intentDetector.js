// Intent detection engine
import { textNormalizer } from './textNormalizer.js'
import { intentKeywords } from '../data/keywords.js'

export const intentDetector = {
  // Detect intent from user query
  detectIntent(text) {
    const normalized = textNormalizer.normalize(text)
    const keywords = textNormalizer.extractKeywords(text)
    
    let bestIntent = 'fallback'
    let bestScore = 0
    const detectedIntents = {}

    // Score each intent based on keyword matches
    for (const [intent, keywordList] of Object.entries(intentKeywords)) {
      let score = 0
      
      for (const keyword of keywordList) {
        if (normalized.includes(keyword)) {
          score += 1
        }
      }

      // Bonus for multiple keyword matches
      const matchCount = keywords.filter(k => keywordList.includes(k)).length
      score += matchCount * 0.5

      detectedIntents[intent] = score

      if (score > bestScore) {
        bestScore = score
        bestIntent = intent
      }
    }

    return {
      intent: bestIntent,
      confidence: Math.min(bestScore / 3, 1), // Normalize to 0-1
      allIntents: detectedIntents,
      keywords: keywords
    }
  },

  // Get intent details
  getIntentDetails(intent) {
    const details = {
      buscar_plan: {
        name: 'Buscar Plan',
        description: 'Usuario busca algo para hacer',
        expectations: ['lugares', 'actividades', 'planes']
      },
      buscar_comida: {
        name: 'Buscar Comida',
        description: 'Usuario busca dónde comer',
        expectations: ['restaurantes', 'bares', 'cafés', 'comida rápida']
      },
      buscar_evento: {
        name: 'Buscar Evento',
        description: 'Usuario busca eventos o shows',
        expectations: ['conciertos', 'ferias', 'festivales', 'eventos culturales']
      },
      buscar_gratis: {
        name: 'Buscar Gratis',
        description: 'Usuario busca opciones sin costo',
        expectations: ['lugares gratuitos', 'actividades gratis']
      },
      buscar_barato: {
        name: 'Buscar Barato',
        description: 'Usuario busca opciones económicas',
        expectations: ['precios bajos', 'promociones', 'ofertas']
      },
      buscar_lugar_historico: {
        name: 'Buscar Lugar Histórico',
        description: 'Usuario busca historia y patrimonio',
        expectations: ['sitios históricos', 'museos', 'monumentos']
      },
      buscar_para_ninos: {
        name: 'Buscar para Niños',
        description: 'Usuario busca actividades familiares',
        expectations: ['parques', 'actividades infantiles', 'lugares seguros']
      },
      buscar_cita: {
        name: 'Buscar Cita',
        description: 'Usuario busca lugar para salir en pareja',
        expectations: ['restaurantes románticos', 'bares acogedores', 'paseos']
      },
      buscar_lluvia: {
        name: 'Buscar Plan Lluvia',
        description: 'Usuario busca actividades para días nublados',
        expectations: ['lugares cubiertos', 'cines', 'cafés', 'galerías']
      },
      buscar_noche: {
        name: 'Buscar Noche',
        description: 'Usuario busca actividades nocturnas',
        expectations: ['bares', 'boliches', 'peñas', 'shows nocturnos']
      },
      buscar_cerca: {
        name: 'Buscar Cerca',
        description: 'Usuario busca algo próximo a su ubicación',
        expectations: ['lugares cercanos', 'proximidad']
      },
      fallback: {
        name: 'Fallback',
        description: 'Intención no detectada claramente',
        expectations: []
      }
    }
    
    return details[intent] || details.fallback
  }
}

export default intentDetector
