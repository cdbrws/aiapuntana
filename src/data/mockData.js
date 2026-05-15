/**
 * Mock Data for Development
 * Sample knowledge items for testing
 */

export const mockPlaces = [
  {
    id: 'p1',
    title: 'Plaza Pringles',
    description: 'La plaza más importante de San Luis, punto de encuentro de la ciudad',
    category: 'lugar',
    location: 'Centro',
    tags: ['histórico', 'cultural', 'centro', 'paseo', 'free'],
    rating: 4.5,
    price: 'gratis',
    image: null,
    verified: true
  },
  {
    id: 'p2',
    title: 'Parque de las Naciones',
    description: 'Parque importante con monumentos y espacios verdes para pasear',
    category: 'lugar',
    location: 'Centro-Norte',
    tags: ['naturaleza', 'familia', 'paseo', 'free'],
    rating: 4.2,
    price: 'gratis',
    image: null,
    verified: true
  },
  {
    id: 'p3',
    title: 'Terrazas del Portezuelo',
    description: 'Lugar con vistas panorámicas de San Luis, ideal para fotos y atardeceres',
    category: 'lugar',
    location: 'Sur',
    tags: ['vistas', 'fotografía', 'naturaleza', 'free'],
    rating: 4.7,
    price: 'gratis',
    image: null,
    verified: true
  },
  {
    id: 'p4',
    title: 'Iglesia Catedral Metropolitana',
    description: 'Iglesia histórica del centro de San Luis, monumento importante',
    category: 'historia',
    location: 'Centro',
    tags: ['histórico', 'cultural', 'religioso', 'free'],
    rating: 4.1,
    price: 'gratis',
    image: null,
    verified: true
  },
  {
    id: 'p5',
    title: 'Museo Provincial',
    description: 'Museo con arte local y patrimonio cultural de San Luis',
    category: 'cultura',
    location: 'Centro',
    tags: ['museo', 'arte', 'cultura', 'historia'],
    rating: 4.0,
    price: '$100',
    image: null,
    verified: true
  }
]

export const mockFoods = [
  {
    id: 'f1',
    title: 'La Churrería de Don Joaquín',
    description: 'Churros y café. Tradición puntana desde hace años',
    category: 'gastronomia',
    location: 'Centro',
    tags: ['café', 'churros', 'desayuno', 'barato'],
    rating: 4.6,
    price: '$$',
    openNow: true,
    image: null,
    verified: true
  },
  {
    id: 'f2',
    title: 'Pizzería Napolitana',
    description: 'Pizzas al molde y a la piedra. Excelente masa y frescos ingredientes',
    category: 'gastronomia',
    location: 'Centro',
    tags: ['pizza', 'italiana', 'almuerzo', 'cena'],
    rating: 4.4,
    price: '$$',
    openNow: true,
    image: null,
    verified: true
  },
  {
    id: 'f3',
    title: 'Asado del Puestero',
    description: 'Parrilla con carne de la mejor calidad. Especialista en asados',
    category: 'gastronomia',
    location: 'Norte',
    tags: ['asado', 'parrilla', 'carne', 'almuerzo'],
    rating: 4.5,
    price: '$$$',
    openNow: true,
    image: null,
    verified: true
  },
  {
    id: 'f4',
    title: 'Helado de Tía Rosa',
    description: 'Helados artesanales. Sabores tradicionales puntanos',
    category: 'gastronomia',
    location: 'Centro',
    tags: ['helado', 'postre', 'dulce', 'barato', 'free'],
    rating: 4.7,
    price: '$',
    openNow: true,
    image: null,
    verified: true
  }
]

export const mockEvents = [
  {
    id: 'e1',
    title: 'Festival de Música Local',
    description: 'Encuentro anual de bandas y artistas locales',
    category: 'evento',
    date: '2026-06-15',
    time: '19:00',
    location: 'Plaza Pringles',
    tags: ['música', 'festival', 'bandas', 'local', 'free'],
    price: 'gratis',
    image: null,
    verified: true
  },
  {
    id: 'e2',
    title: 'Feria del Emprendedor',
    description: 'Muestra de emprendimientos locales y negocios',
    category: 'evento',
    date: '2026-06-20',
    time: '14:00',
    location: 'Parque de las Naciones',
    tags: ['emprendimiento', 'comercio', 'feria', 'free'],
    price: 'gratis',
    image: null,
    verified: true
  }
]

export const mockKnowledge = [
  ...mockPlaces,
  ...mockFoods,
  ...mockEvents
]

export default {
  mockPlaces,
  mockFoods,
  mockEvents,
  mockKnowledge
}
