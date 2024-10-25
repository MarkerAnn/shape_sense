import { IHealthCalculator } from '../interfaces/InterfaceHealthCalculator'
import { HealthCalculatorAdapter } from '../adapters/HealthCalculatorAdapter'
import { UserModel } from './UserModel'

import { BmiCategory } from '../enums/BmiCategory'

/**
 * Class representing the HealthCalculatorModel.
 * Implements the IHealthCalculator interface and provides methods
 * to calculate various health metrics.
 *
 * @class
 * @implements {IHealthCalculator}
 */
export class HealthCalculatorModel implements IHealthCalculator {
  private calculator: IHealthCalculator

  /**
   * Creates an instance of HealthCalculatorModel.
   * Initializes the calculator with a HealthCalculatorAdapter.
   *
   * @param {UserModel} userModel - The user model containing user data.
   */
  constructor(userModel: UserModel) {
    this.calculator = new HealthCalculatorAdapter(userModel)
  }

  /**
   * Gets the Body Mass Index (BMI).
   * @returns {number} The calculated BMI.
   */
  getBmi(): number {
    return this.calculator.getBmi()
  }

  /**
   * Gets the BMI category.
   * @returns {BmiCategory} The BMI category.
   */
  getBmiType(): BmiCategory {
    return this.calculator.getBmiType()
  }

  /**
   * Gets the health risk based on BMI.
   * @returns {string} The health risk.
   */
  getHealthRisk(): string {
    return this.calculator.getHealthRisk()
  }

  /**
   * Gets the BMI Prime.
   * @returns {number} The BMI Prime.
   */
  getBmiPrime(): number {
    return this.calculator.getBmiPrime()
  }

  /**
   * Gets the ideal weight range.
   * @returns {[number, number]} The ideal weight range.
   */
  getIdealWeight(): [number, number] {
    return this.calculator.getIdealWeight()
  }

  /**
   * Gets the body fat percentage.
   * @returns {number} The body fat percentage.
   */
  getBodyFatPercentage(): number {
    return this.calculator.getBodyFatPercentage()
  }

  /**
   * Gets the waist to hip ratio.
   * @returns {number} The waist to hip ratio.
   */
  getWaistToHipRatio(): number {
    return this.calculator.getWaistToHipRatio()
  }

  /**
   * Gets the waist to height ratio.
   * @returns {number} The waist to height ratio.
   */
  getWaistToHeightRatio(): number {
    return this.calculator.getWaistToHeightRatio()
  }

  /**
   * Gets the lean body mass.
   * @returns {number} The lean body mass.
   */
  getLeanBodyMass(): number {
    return this.calculator.getLeanBodyMass()
  }

  /**
   * Gets the Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation.
   * @returns {number} The BMR calculated using the Mifflin-St Jeor equation.
   */
  getBmrMifflinStJeor(): number {
    return this.calculator.getBmrMifflinStJeor()
  }

  /**
   * Gets the Basal Metabolic Rate (BMR) using the Harris-Benedict equation.
   * @returns {number} The BMR calculated using the Harris-Benedict equation.
   */
  getBmrHarrisBenedict(): number {
    return this.calculator.getBmrHarrisBenedict()
  }

  /**
   * Gets the Total Daily Energy Expenditure (TDEE) using the Mifflin-St Jeor equation.
   * @returns {number} The TDEE calculated using the Mifflin-St Jeor equation.
   */
  getTdeeMifflinStJeor(): number {
    return this.calculator.getTdeeMifflinStJeor()
  }

  /**
   * Gets the Total Daily Energy Expenditure (TDEE) using the Harris-Benedict equation.
   * @returns {number} The TDEE calculated using the Harris-Benedict equation.
   */
  getTdeeHarrisBenedict(): number {
    return this.calculator.getTdeeHarrisBenedict()
  }

  // Calorie
  /**
   * Gets the caloric surplus or deficit based on current intake and expenditure.
   * @returns {number} The caloric surplus or deficit.
   */
  getCaloricSurplusOrDeficit(): number {
    return this.calculator.getCaloricSurplusOrDeficit()
  }

  /**
   * Gets the estimated weekly weight change based on current caloric intake and expenditure.
   * @returns {number} The estimated weekly weight change.
   */
  getEstimatedWeightChangeWeekly(): number {
    return this.calculator.getEstimatedWeightChangeWeekly()
  }

  /**
   * Gets the estimated monthly weight change based on current caloric intake and expenditure.
   * @returns {number} The estimated monthly weight change.
   */
  getEstimatedWeightChangeMonthly(): number {
    return this.calculator.getEstimatedWeightChangeMonthly()
  }

  /**
   * Gets the daily caloric intake required to reach the weight goal.
   * @returns {number} The daily calories needed to reach the weight goal.
   */
  getCaloriesForWeightGoal(): number {
    return this.calculator.getCaloriesForWeightGoal()
  }

  /**
   * Gets the estimated time required to reach the weight goal based on current progress.
   * @returns {number} The estimated time to reach the weight goal.
   */
  getEstimateTimeToWeightGoal(): number {
    return this.calculator.getEstimateTimeToWeightGoal()
  }
}
