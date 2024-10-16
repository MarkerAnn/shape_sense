//import { BmiController } from './controllers/BmiController'
import { HomeController } from './controllers/HomeController'

export class Router {
  private currentController: HomeController | null = null

  listen(): void {
    window.addEventListener('hashchange', () => {
      const route = window.location.hash.slice(1) // Deletes the # character
      this.navigate(route)
    })

    // Navigate to the current URL or the default route
    const initialRoute = window.location.hash.slice(1) || '/'
    this.navigate(initialRoute)
  }

  navigate(route: string): void {
    const app = document.getElementById('app')
    if (!app) return

    app.innerHTML = ''

    switch (route) {
      case '/':
        this.currentController = new HomeController()
        break
      case '/bmi':
        //this.currentController = new BmiController()
        break
      // Add more routes here
      default:
        app.innerHTML = '<h2>404 Not Found</h2>'
        return
    }

    if (this.currentController) {
      this.currentController.init(app)
    }
  }
}
