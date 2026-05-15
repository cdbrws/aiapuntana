export class Router {
  constructor() {
    this.routes = {}
  }

  register(path, handler) {
    this.routes[path] = handler
  }

  navigate(path) {
    const handler = this.routes[path]
    if (handler) {
      handler()
      window.history.pushState({}, '', path)
    } else {
      this.routes['/']?.()
    }
  }

  link(path) {
    this.navigate(path)
  }
}

// Global router instance
export const router = new Router()
