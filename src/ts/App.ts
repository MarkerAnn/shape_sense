import { Router } from './Router'

export class App {
  private router: Router

  constructor() {
    // Create a new Router instance
    this.router = new Router()
  }

  start(): void {
    // The router listens for changes in the URL
    this.router.listen()

    // Navigate to the current URL or the default route
    const initialRoute = window.location.hash.slice(1) || '/'
    this.router.navigate(initialRoute)
  }
}
