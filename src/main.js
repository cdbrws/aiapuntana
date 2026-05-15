import { Router } from './utils/router.js'
import { Home } from './pages/Home.js'
import { Chat } from './pages/Chat.js'
import { Admin } from './pages/Admin.js'

// Initialize router
const router = new Router()
const app = document.getElementById('app')

// Register routes
router.register('/', () => {
  app.innerHTML = ''
  app.appendChild(Home())
})

router.register('/chat', () => {
  app.innerHTML = ''
  app.appendChild(Chat())
})

router.register('/admin', () => {
  app.innerHTML = ''
  app.appendChild(Admin())
})

// Load initial route
router.navigate(window.location.pathname || '/')

// Handle browser back/forward
window.addEventListener('popstate', () => {
  router.navigate(window.location.pathname)
})
