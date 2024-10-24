import { InterfaceController } from '../interfaces/InterfaceController'
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

export class ControllerFactory {
  private readonly formValidator: IFormValidator

  constructor(
    private readonly user: UserModel,
    private readonly calculator: HealthCalculatorModel
  ) {
    this.formValidator = new FormValidatorService()
  }

  createController(route: AllRouteType): InterfaceController {
    switch (route) {
      case 'HOME':
        return this.createHomeController()
      case 'BMI':
        return this.createBmiController()
      case 'WAIST_TO_HIP':
        return this.createWaistToHipController()
      case 'WAIST_TO_HEIGHT':
        return this.createWaistToHeightController()
      case 'BODY_FAT':
        return this.createBodyFatController()
      case 'BMR':
        return this.createBmrController()
      case 'TDEE':
        return this.createTdeeController()
      case 'WEIGHT_GOAL':
        return this.createWeightGoalController()
      case 'CALORIE_GOAL':
        return this.createCalorieGoalController()
      default:
        throw new Error(`No controller found for route: ${route}`)
    }
  }

  private createHomeController(): InterfaceController {
    return new HomeController()
  }

  private createBmiController(): InterfaceController {
    return new BmiController(this.user, this.calculator, this.formValidator)
  }

  private createWaistToHipController(): InterfaceController {
    return new WaistToHipRatioController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createWaistToHeightController(): InterfaceController {
    return new WaistToHeightRatioController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createBodyFatController(): InterfaceController {
    return new BodyFatPercentageController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createBmrController(): InterfaceController {
    return new BasalMetabolicRateController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createTdeeController(): InterfaceController {
    return new TotalDailyEnergyExpenditureController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createWeightGoalController(): InterfaceController {
    return new EstimateTimeToWeightGoalController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  private createCalorieGoalController(): InterfaceController {
    return new CaloriesForWeightGoalController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }
}
