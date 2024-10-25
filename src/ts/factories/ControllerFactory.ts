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

/**
 * Factory class for creating controllers based on the provided route.
 *
 * @class ControllerFactory
 */
export class ControllerFactory {
  private readonly formValidator: IFormValidator

  /**
   * Creates an instance of ControllerFactory.
   * Initializes the form validator service.
   *
   * @param {UserModel} user - The user model containing user data.
   * @param {HealthCalculatorModel} calculator - The health calculator model.
   */
  constructor(
    private readonly user: UserModel,
    private readonly calculator: HealthCalculatorModel
  ) {
    this.formValidator = new FormValidatorService()
  }

  /**
   * Creates a controller based on the provided route.
   *
   * @param {AllRouteType} route - The route for which to create the controller.
   * @returns {IController} The created controller.
   * @throws Will throw an error if no controller is found for the provided route.
   */
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

  /**
   * Creates an instance of HomeController.
   *
   * @private
   * @returns {IController} The created HomeController instance.
   */
  private createHomeController(): IController {
    return new HomeController()
  }

  /**
   * Creates an instance of BmiController.
   *
   * @private
   * @returns {IController} The created BmiController instance.
   */
  private createBmiController(): IController {
    return new BmiController(this.user, this.calculator, this.formValidator)
  }

  /**
   * Creates an instance of WaistToHipRatioController.
   *
   * @private
   * @returns {IController} The created WaistToHipRatioController instance.
   */
  private createWaistToHipController(): IController {
    return new WaistToHipRatioController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  /**
   * Creates an instance of WaistToHeightRatioController.
   *
   * @private
   * @returns {IController} The created WaistToHeightRatioController instance.
   */
  private createWaistToHeightController(): IController {
    return new WaistToHeightRatioController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  /**
   * Creates an instance of BodyFatPercentageController.
   *
   * @private
   * @returns {IController} The created BodyFatPercentageController instance.
   */
  private createBodyFatController(): IController {
    return new BodyFatPercentageController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  /**
   * Creates an instance of BasalMetabolicRateController.
   *
   * @private
   * @returns {IController} The created BasalMetabolicRateController instance.
   */
  private createBmrController(): IController {
    return new BasalMetabolicRateController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  /**
   * Creates an instance of TotalDailyEnergyExpenditureController.
   *
   * @private
   * @returns {IController} The created TotalDailyEnergyExpenditureController instance.
   */
  private createTdeeController(): IController {
    return new TotalDailyEnergyExpenditureController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  /**
   * Creates an instance of EstimateTimeToWeightGoalController.
   *
   * @private
   * @returns {IController} The created EstimateTimeToWeightGoalController instance.
   */
  private createWeightGoalController(): IController {
    return new EstimateTimeToWeightGoalController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }

  /**
   * Creates an instance of CaloriesForWeightGoalController.
   *
   * @private
   * @returns {IController} The created CaloriesForWeightGoalController instance.
   */
  private createCalorieGoalController(): IController {
    return new CaloriesForWeightGoalController(
      this.user,
      this.calculator,
      this.formValidator
    )
  }
}

// 114 rader
