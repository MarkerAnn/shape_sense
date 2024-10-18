import { InterfaceController } from './interfaces/InterfaceController'
import { UserModel } from './models/UserModel'
import { HealthCalculatorModel } from './models/HealthCalculatorModel'
import { getRouteFromPath } from './enums/Routes'
import { ControllerFactory } from './factories/ControllerFactory'

export class Router {
  private currentController: InterfaceController | null = null
  private controllerFactory: ControllerFactory

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    this.controllerFactory = new ControllerFactory(user, calculator)
  }

  listen(): void {
    window.addEventListener('hashchange', () => {
      const path = window.location.hash.slice(1) // Deletes the # character
      this.navigate(path)
    })

    // Navigate to the current URL or the default route
    const initialPath = window.location.hash.slice(1) || '/'
    this.navigate(initialPath)
  }

  navigate(path: string): void {
    const app = document.getElementById('app')
    if (!app) return

    app.innerHTML = ''

    const route = getRouteFromPath(path)

    if (route !== undefined) {
      try {
        this.currentController = this.controllerFactory.createController(route)
        this.currentController.init(app)
      } catch (error) {
        console.error('Error creating controller:', error)
        app.innerHTML = '<h2>An error occurred</h2>'
      }
    } else {
      app.innerHTML = '<h2>404 Not Found</h2>'
    }
  }
}
