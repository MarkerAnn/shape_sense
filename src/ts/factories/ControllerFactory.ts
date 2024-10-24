/* eslint-disable max-len */
import { IController } from '../interfaces/InterfaceController'
import { UserModel } from '../models/UserModel'
import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
import { HomeController } from '../controllers/HomeController'
import { BmiController } from '../controllers/BmiControllers/BmiController'
import { WaistToHipRatioController } from '../controllers/BodyCompositionControllers/WaistToHipRatioController'
import { WaistToHeightRatioController } from '../controllers/BodyCompositionControllers/WaistToHeightRatioController'
import { BodyFatPercentageController } from '../controllers/BodyCompositionControllers/BodyFatPercentageController'
import { TotalDailyEnergyExpenditureController } from '../controllers/TotalDailyEnergyExpenditureControllers/TotalDailyEnergyExpenditureController'
import { BasalMetabolicRateController } from '../controllers/BasalMetabolicRate/BasalMetabolicRateController'
import { EstimateTimeToWeightGoalController } from '../controllers/GoalCalculatorControllers/EstimateTimeToWeightGoalController'
import { CaloriesForWeightGoalController } from '../controllers/GoalCalculatorControllers/CaloriesForWeightGoalController'
import { FormValidatorService } from '../services/FormValidatorService'
import { IFormValidator } from '../interfaces/InterfaceFormValidator'
import { AllRouteType } from '../constants/RoutesConstants'
/* eslint-enable max-len */

export class ControllerFactory {
  private readonly formValidator: IFormValidator

  constructor(
    private readonly user: UserModel,
    private readonly calculator: HealthCalculatorModel
  ) {
    this.formValidator = new FormValidatorService()
  }

  createController(route: AllRouteType): IController {
    const controllerMap: { [key in AllRouteType]: () => IController } = {
      HOME: () => this.createHomeController(),
      BMI: () => this.createBmiController(),
      WAIST_TO_HIP: () => this.createWaistToHipController(),
      WAIST_TO_HEIGHT: () => this.createWaistToHeightController(),
      BODY_FAT: () => this.createBodyFatController(),
      BMR: () => this.createBmrController(),
      TDEE: () => this.createTdeeController(),
      WEIGHT_GOAL: () => this.createWeightGoalController(),
      CALORIE_GOAL: () => this.createCalorieGoalController(),
    }

    const controllerCreator = controllerMap[route]

    if (!controllerCreator) {
      throw new Error(`No controller found for route: ${route}`)
    }

    return controllerCreator()
  }

  private createHomeController(): IController {
    return new HomeController()
  }

  private createBmiController(): IController {
    return new BmiController(this.user, this.calculator, this.formValidator)
  }

  private createWaistToHipController(): IController {
    return new WaistToHipRatioController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createWaistToHeightController(): IController {
    return new WaistToHeightRatioController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createBodyFatController(): IController {
    return new BodyFatPercentageController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createBmrController(): IController {
    return new BasalMetabolicRateController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createTdeeController(): IController {
    return new TotalDailyEnergyExpenditureController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createWeightGoalController(): IController {
    return new EstimateTimeToWeightGoalController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createCalorieGoalController(): IController {
    return new CaloriesForWeightGoalController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }
}
