import { IController } from './interfaces/InterfaceController'
import { UserModel } from './models/UserModel'
import { HealthCalculatorModel } from './models/HealthCalculatorModel'
import { getRouteFromPath } from './enums/Routes'
import { ControllerFactory } from './factories/ControllerFactory'

/**
 * The Router class is responsible for handling client-side routing in the application.
 * It listens for hash changes in the URL and navigates to the appropriate controller
 * based on the current path.
 */
export class Router {
  /**
   * The current controller instance that is active.
   */
  private currentController: IController | null = null

  /**
   * The factory used to create controller instances.
   */
  private controllerFactory: ControllerFactory

  /**
   * Constructs a new Router instance.
   *
   * @param user - The user model used for creating controllers.
   * @param calculator - The health calculator model used for creating controllers.
   */
  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    this.controllerFactory = new ControllerFactory(user, calculator)
  }

  /**
   * Starts listening for hash changes in the URL and navigates to the initial path.
   */
  listen(): void {
    window.addEventListener('hashchange', () => {
      const path = window.location.hash.slice(1)
      this.navigate(path)
    })

    const initialPath = window.location.hash.slice(1) || '/'
    this.navigate(initialPath)
  }

  /**
   * Navigates to the specified path and initializes the corresponding controller.
   *
   * @param path - The path to navigate to.
   */
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
        app.innerHTML = '<h2>An error occurred</h2>'
      }
    } else {
      app.innerHTML = '<h2>404 Not Found</h2>'
    }
  }
}
