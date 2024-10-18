import { InterfaceController } from '../interfaces/InterfaceController'
import { UserModel } from '../models/UserModel'
import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
import { HomeController } from '../controllers/HomeController'
import { BmiController } from '../controllers/BmiController'
import { BodyCompositionController } from '../controllers/BodyCompositionController'
import { RouteEnum } from '../enums/Routes'

export class ControllerFactory {
  constructor(
    private user: UserModel,
    private calculator: HealthCalculatorModel
  ) {}

  createController(route: RouteEnum): InterfaceController {
    switch (route) {
      case RouteEnum.HOME:
        return new HomeController()
      case RouteEnum.BMI:
        return new BmiController(this.user, this.calculator)
      case RouteEnum.BODY_COMPOSITION:
        return new BodyCompositionController(this.user, this.calculator)
      // Add more cases here as I implement more controllers
      default:
        throw new Error('404 Not Found')
    }
  }
}
