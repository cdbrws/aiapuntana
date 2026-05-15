/**
 * Entity Extractor
 * Extracts entities from text (locations, dates, prices, etc)
 */

import textNormalizer from './textNormalizer.js'

export class EntityExtractor {
  constructor(config = {}) {
    this.config = config
  }

  extract(text) {
    const entities = {
      locations: this.extractLocations(text),
      dates: this.extractDates(text),
      times: this.extractTimes(text),
      prices: this.extractPrices(text),
      zones: this.extractZones(text),
      categories: this.extractCategories(text)
    }

    return entities
  }

  extractLocations(text) {
    // Common San Luis locations
    const locations = [
      'plaza pringles',
      'parque de las naciones',
      'terrazas del portezuelo',
      'centro',
      'villa mercedes',
      'merlo',
      'ayacucho',
      'gobernador dupuy'
    ]

    const found = []
    for (const location of locations) {
      if (text.includes(location)) {
        found.push(location)
      }
    }
    return found
  }

  extractDates(text) {
    const datePatterns = [
      /\b(hoy|mañana|hoy|mañana|pasado mañana)\b/gi,
      /\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})\b/g,
      /\b(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\b/gi,
      /\b(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\b/gi
    ]

    const dates = []
    for (const pattern of datePatterns) {
      const matches = text.match(pattern)
      if (matches) dates.push(...matches)
    }

    return [...new Set(dates)]
  }

  extractTimes(text) {
    const timePatterns = [
      /\b(\d{1,2}:\d{2})\b/g,
      /\b(\d{1,2}(?:hs|h))\b/gi,
      /\b(manana|tarde|noche|mediodia|madrugada)\b/gi,
      /\b(a las|al|desde|hasta)\s+(\d{1,2}(?::\d{2})?)/gi
    ]

    const times = []
    for (const pattern of timePatterns) {
      const matches = text.match(pattern)
      if (matches) times.push(...matches)
    }

    return [...new Set(times)]
  }

  extractPrices(text) {
    const pricePatterns = [
      /\$\s*(\d+(?:[.,]\d{2})?)/g,
      /\b(\d+)\s*(?:pesos|$|usd)/gi,
      /\b(gratis|libre|sin costo|gratuito)\b/gi,
      /\b(barato|caro|seco|poca guita|billetera llorando|platita)\b/gi
    ]

    const prices = []
    for (const pattern of pricePatterns) {
      const matches = text.match(pattern)
      if (matches) prices.push(...matches)
    }

    return [...new Set(prices)]
  }

  extractZones(text) {
    const zones = {
      'centro': ['centro', 'downtown', 'céntro'],
      'norte': ['norte', 'villa mercedes'],
      'sur': ['sur', 'merlo'],
      'este': ['este', 'la punta'],
      'oeste': ['oeste', 'ayacucho']
    }

    const found = []
    for (const [zone, keywords] of Object.entries(zones)) {
      for (const keyword of keywords) {
        if (text.includes(keyword)) {
          found.push(zone)
          break
        }
      }
    }

    return found
  }

  extractCategories(text) {
    const categories = {
      'comida': ['comer', 'hambre', 'pizza', 'lomito', 'café', 'merendar', 'restaurante'],
      'eventos': ['hoy', 'finde', 'tocar', 'show', 'feria', 'agenda', 'concierto'],
      'turismo': ['lugar', 'visitar', 'turismo', 'atracción', 'monumento', 'histórico'],
      'comercios': ['tienda', 'comercio', 'negocio', 'emprendimiento', 'comprar'],
      'planes': ['plan', 'hacer', 'actividad', 'qué hacer', 'diversión']
    }

    const found = []
    const normalized = text.toLowerCase()

    for (const [category, keywords] of Object.entries(categories)) {
      for (const keyword of keywords) {
        if (normalized.includes(keyword)) {
          found.push(category)
          break
        }
      }
    }

    return found
  }

  extractAll(text) {
    return {
      text: text,
      normalized: textNormalizer.normalize(text),
      tokens: textNormalizer.tokenize(text),
      keywords: textNormalizer.extractKeywords(text),
      entities: this.extract(text)
    }
  }
}

export default new EntityExtractor()
