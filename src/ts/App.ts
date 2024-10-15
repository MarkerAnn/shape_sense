import { Router } from './Router'
import { NavigationComponent } from './NavigationComponent'
import { HomeController } from './controllers/HomeController'
import { BmiController } from './controllers/BmiController'
import { BmrController } from './controllers/BmrController'
import { TdeeController } from './controllers/TdeeController'
import { BodyCompositionController } from './controllers/BodyCompositionController'
import { CalorieCalculationController } from './controllers/CalorieCalculationController'
import { HealthCalculatorModel } from './models/HealthCalculatorModel'
import { RouteEnum } from './utils/Routes'
import { HomeView } from './views/HomeView'
import { BmiView } from './views/BmiView'
import { BmrView } from './views/BmrView'
import { TdeeView } from './views/TdeeView'
import { BodyCompositionView } from './views/BodyCompositionView'
import { CalorieCalculationView } from './views/CalorieCalculationView'
import { Controller } from './controllers/AbstractController'
import { View } from './views/AbstractView'

export class App {
  private router: Router
  private model: HealthCalculatorModel
  private navigation: NavigationComponent
  private currentController: Controller<View> | null = null

  constructor() {
    this.router = new Router()
    this.model = new HealthCalculatorModel({
      weight: 70,
      height: 1.75,
      age: 30,
      gender: 'male',
      unitSystem: 'metric',
    })
    this.navigation = new NavigationComponent(this.handleNavigation.bind(this))
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    this.router.addRoute(RouteEnum.HOME, () => this.showHomeController())
    this.router.addRoute(RouteEnum.BMI, () => this.showBmiController())
    this.router.addRoute(RouteEnum.BMR, () => this.showBmrController())
    this.router.addRoute(RouteEnum.TDEE, () => this.showTdeeController())
    this.router.addRoute(RouteEnum.BODY_COMPOSITION, () =>
      this.showBodyCompositionController()
    )
    this.router.addRoute(RouteEnum.CALORIE_CALCULATION, () =>
      this.showCalorieCalculationController()
    )
  }

  private showHomeController(): void {
    this.showController(
      new HomeController(
        this.model,
        new HomeView(),
        this.handleNavigation.bind(this)
      )
    )
  }

  private showBmiController(): void {
    this.showController(new BmiController(this.model, new BmiView()))
  }

  private showBmrController(): void {
    this.showController(new BmrController(this.model, new BmrView()))
  }

  private showTdeeController(): void {
    this.showController(new TdeeController(this.model, new TdeeView()))
  }

  private showBodyCompositionController(): void {
    this.showController(
      new BodyCompositionController(this.model, new BodyCompositionView())
    )
  }

  private showCalorieCalculationController(): void {
    this.showController(
      new CalorieCalculationController(this.model, new CalorieCalculationView())
    )
  }

  private showController(controller: Controller<View>): void {
    if (this.currentController) {
      this.currentController.unmount()
    }
    this.currentController = controller
    controller.mount()
  }

  private handleNavigation(route: RouteEnum): void {
    this.router.navigateTo(route)
    this.navigation.updateActiveLink(route)
  }

  start(): void {
    const initialRoute = this.router.getCurrentRoute()
    if (initialRoute !== undefined) {
      this.handleNavigation(initialRoute)
    } else {
      this.handleNavigation(RouteEnum.HOME)
    }
  }
}
