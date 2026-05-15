// Text normalization and preprocessing
export const textNormalizer = {
  // Normalize user input for processing
  normalize(text) {
    if (!text) return ''
    
    return text
      .toLowerCase()
      .trim()
      .replace(/[¿?¡!]+$/, '') // Remove trailing punctuation
      .replace(/\s+/g, ' ') // Normalize spaces
      .replace(/á/g, 'a')
      .replace(/é/g, 'e')
      .replace(/í/g, 'i')
      .replace(/ó/g, 'o')
      .replace(/ú/g, 'u')
  },

  // Extract key tokens from text
  tokenize(text) {
    const normalized = this.normalize(text)
    return normalized.split(/\s+/).filter(token => token.length > 0)
  },

  // Remove common stop words
  removeStopwords(tokens) {
    const stopwords = [
      'el', 'la', 'de', 'que', 'y', 'a', 'en', 'un', 'una', 'por', 'con', 'para',
      'es', 'al', 'lo', 'como', 'más', 'o', 'pero', 'sus', 'le', 'ya', 'o',
      'este', 'eso', 'esos', 'esta', 'estas', 'este', 'estos', 'aquello',
      'me', 'te', 'se', 'nos', 'os', 'les', 'mi', 'tu', 'su', 'nuestro',
      'si', 'no', 'qué', 'dónde', 'cuándo', 'cómo', 'cuál', 'cuáles'
    ]
    return tokens.filter(token => !stopwords.includes(token))
  },

  // Extract meaningful words (keywords)
  extractKeywords(text) {
    const tokens = this.tokenize(text)
    return this.removeStopwords(tokens)
  },

  // Detect question vs statement
  isQuestion(text) {
    return text.includes('?') || text.startsWith('qué ') || text.startsWith('dónde ') ||
           text.startsWith('cuándo ') || text.startsWith('cómo ') || text.startsWith('cuál ')
  },

  // Detect urgency
  detectUrgency(text) {
    const urgentWords = ['ahora', 'urgente', 'rápido', 'ya', 'inmediato', 'hoy', 'esta noche']
    return urgentWords.some(word => text.includes(word))
  }
}

export default textNormalizer
