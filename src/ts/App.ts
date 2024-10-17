import { Router } from './Router'
import { UserModel } from './models/UserModel'
import { HealthCalculatorModel } from './models/HealthCalculatorModel'

export class App {
  private router: Router
  private user: UserModel
  private calculator: HealthCalculatorModel

  constructor() {
    this.user = UserModel.getInstance()
    this.calculator = new HealthCalculatorModel(this.user)
    this.router = new Router(this.user, this.calculator)
  }

  start(): void {
    // The router listens for changes in the URL
    this.router.listen()

    // Navigate to the current URL or the default route
    const initialRoute = window.location.hash.slice(1) || '/'
    this.router.navigate(initialRoute)
  }
}
