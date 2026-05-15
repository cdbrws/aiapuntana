// Core AIA configuration and app profiles
export const aiaConfig = {
  version: '0.1.0',
  appName: 'AIA Core San Luis',
  
  // Supported apps/profiles
  apps: {
    modocrocante: {
      id: 'modocrocante',
      name: 'ModoCrocante',
      description: 'Planes, bares, cafés y experiencias de San Luis',
      tone: 'joven, cercano, puntano, directo y divertido',
      region: 'San Luis Capital',
      defaultLanguage: 'es-AR'
    },
    slxv: {
      id: 'slxv',
      name: 'SLxV',
      description: 'San Luis Experiencias y Viajes',
      tone: 'profesional pero cercano, turístico, informativo',
      region: 'San Luis Provincia',
      defaultLanguage: 'es-AR'
    },
    turismo_san_luis: {
      id: 'turismo_san_luis',
      name: 'Turismo San Luis',
      description: 'Información turística completa de San Luis',
      tone: 'informativo, amable, turístico',
      region: 'San Luis Provincia',
      defaultLanguage: 'es-AR'
    }
  },

  // Intent types
  intents: [
    'buscar_plan',
    'buscar_comida',
    'buscar_evento',
    'buscar_gratis',
    'buscar_barato',
    'buscar_lugar_historico',
    'buscar_para_ninos',
    'buscar_cita',
    'buscar_lluvia',
    'buscar_noche',
    'buscar_cerca',
    'pregunta_slxv',
    'beneficio_negocio',
    'consulta_tuids',
    'fallback'
  ],

  // Knowledge item categories
  categories: {
    lugar: 'Lugares de interés',
    evento: 'Eventos',
    comercio: 'Comercios y negocios',
    gastronomia: 'Gastronomía',
    historia: 'Historia local',
    cultura: 'Cultura y arte',
    naturaleza: 'Naturaleza y outdoor',
    salud: 'Salud y bienestar',
    educacion: 'Educación',
    servicios: 'Servicios',
    emprendimiento: 'Emprendimientos locales',
    agenda: 'Agenda de eventos'
  },

  // Search settings
  search: {
    minScoreThreshold: 0.3,
    maxResults: 5,
    fuzzyMatchDistance: 50,
    useSemanticSearch: false // Preparado para futuro
  },

  // Confidence levels
  confidence: {
    high: 0.8,
    medium: 0.5,
    low: 0.3,
    veryLow: 0.1
  },

  // Supabase configuration (placeholder, se conectará después)
  supabase: {
    url: process.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co',
    anonKey: process.env.VITE_SUPABASE_ANON_KEY || 'placeholder',
    enabled: false // Deshabilitado hasta conectar
  },

  // Feature flags
  features: {
    mocking: true,
    logging: true,
    feedback: true,
    unresolvedTracking: true,
    adminPanel: true,
    semanticSearch: false, // Futuro
    supabaseIntegration: false // Futuro
  }
}

export default aiaConfig
