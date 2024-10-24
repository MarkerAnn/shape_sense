import { Router } from './Router'
import { UserModel } from './models/UserModel'
import { HealthCalculatorModel } from './models/HealthCalculatorModel'
import { HeaderManager } from './utils/HeaderManager'

/**
 * The `App` class initializes the main components of the Health Calculator Application,
 * including the router, user model, and health calculator model. It also manages the
 * application startup process.
 */
export class App {
  private router: Router
  private user: UserModel
  private calculator: HealthCalculatorModel

  constructor() {
    this.user = new UserModel()
    this.calculator = new HealthCalculatorModel(this.user)
    this.router = new Router(this.user, this.calculator)
    new HeaderManager()
  }

  start(): void {
    // The router listens for changes in the URL
    this.router.listen()

    // Navigate to the current URL or the default route
    const initialRoute = window.location.hash.slice(1) || '/'
    this.router.navigate(initialRoute)
  }
}
