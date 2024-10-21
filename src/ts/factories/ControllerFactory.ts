import { InterfaceController } from '../interfaces/InterfaceController'
import { UserModel } from '../models/UserModel'
import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
import { HomeController } from '../controllers/HomeController'
import { BmiController } from '../controllers/BmiController'
import { WaistToHipRatioController } from '../controllers/BodyCompositionControllers/WaistToHipRatioController'
import { WaistToHeightRatioController } from '../controllers/BodyCompositionControllers/WaistToHeightRatioController'
import { BodyFatPercentageController } from '../controllers/BodyCompositionControllers/BodyFatPercentageController'
//import { BodyCompositionController } from '../controllers/BodyCompositionController'
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
      case RouteEnum.WAIST_TO_HIP:
        return new WaistToHipRatioController(this.user, this.calculator)
      case RouteEnum.WAIST_TO_HEIGHT:
        return new WaistToHeightRatioController(this.user, this.calculator)
      case RouteEnum.BODY_FAT_PERCENTAGE:
        return new BodyFatPercentageController(this.user, this.calculator)
      // case RouteEnum.BODY_COMPOSITION:
      //return new BodyCompositionController(this.user, this.calculator)
      // Add more cases here as I implement more controllers
      default:
        throw new Error('404 Not Found')
    }
  }
}

// #/waist-to-hip det ska stå waist-to-hip Ratio
// #/waist-to-height det ska stå waist-to-height Ratio
// #/body-fat-percentage det ska stå Body Fat Percentage
// #/lean-body-mass det ska stå Lean Body Mass
