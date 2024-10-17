import { BmiController } from './controllers/BmiController'
import { HomeController } from './controllers/HomeController'
import { UserModel } from './models/UserModel'
import { HealthCalculatorModel } from './models/HealthCalculatorModel'

export class Router {
  private currentController: HomeController | BmiController | null = null
  private user: UserModel
  private calculator: HealthCalculatorModel

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    this.user = user
    this.calculator = calculator
  }

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
        this.currentController = new BmiController(this.user, this.calculator)
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
