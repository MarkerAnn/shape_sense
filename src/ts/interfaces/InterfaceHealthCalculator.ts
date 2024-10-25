import { BmiCategory } from '../enums/BmiCategory'
/**
 * Interface representing a health calculator.
 * Provides methods to calculate various health metrics.
 *
 * @interface IHealthCalculator
 */
export interface IHealthCalculator {
  /**
   * Gets the Body Mass Index (BMI).
   * @returns {number} The calculated BMI.
   */
  getBmi(): number

  /**
   * Gets the BMI category.
   * @returns {BmiCategory} The BMI category.
   */
  getBmiType(): BmiCategory

  /**
   * Gets the health risk based on BMI.
   * @returns {string} The health risk.
   */
  getHealthRisk(): string

  /**
   * Gets the BMI Prime.
   * @returns {number} The BMI Prime.
   */
  getBmiPrime(): number

  /**
   * Gets the ideal weight range.
   * @returns {[number, number]} The ideal weight range.
   */
  getIdealWeight(): [number, number]

  /**
   * Gets the waist to hip ratio.
   * @returns {number} The waist to hip ratio.
   */
  getWaistToHipRatio(): number

  /**
   * Gets the waist to height ratio.
   * @returns {number} The waist to height ratio.
   */
  getWaistToHeightRatio(): number

  /**
   * Gets the body fat percentage.
   * @returns {number} The body fat percentage.
   */
  getBodyFatPercentage(): number

  /**
   * Gets the lean body mass.
   * @returns {number} The lean body mass.
   */
  getLeanBodyMass(): number

  /**
   * Gets the Basal Metabolic Rate (BMR) using the Harris-Benedict equation.
   * @returns {number} The BMR calculated using the Harris-Benedict equation.
   */
  getBmrHarrisBenedict(): number

  /**
   * Gets the Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation.
   * @returns {number} The BMR calculated using the Mifflin-St Jeor equation.
   */
  getBmrMifflinStJeor(): number

  /**
   * Gets the Total Daily Energy Expenditure (TDEE) using the Harris-Benedict equation.
   * @returns {number} The TDEE calculated using the Harris-Benedict equation.
   */
  getTdeeHarrisBenedict(): number

  /**
   * Gets the Total Daily Energy Expenditure (TDEE) using the Mifflin-St Jeor equation.
   * @returns {number} The TDEE calculated using the Mifflin-St Jeor equation.
   */
  getTdeeMifflinStJeor(): number

  /**
   * Gets the caloric surplus or deficit based on current intake and expenditure.
   * @returns {number} The caloric surplus or deficit.
   */
  getCaloricSurplusOrDeficit(): number

  /**
   * Gets the estimated weekly weight change based on current caloric intake and expenditure.
   * @returns {number} The estimated weekly weight change.
   */
  getEstimatedWeightChangeWeekly(): number

  /**
   * Gets the estimated monthly weight change based on current caloric intake and expenditure.
   * @returns {number} The estimated monthly weight change.
   */
  getEstimatedWeightChangeMonthly(): number

  /**
   * Gets the estimated time required to reach the weight goal based on current progress.
   * @returns {number} The estimated time to reach the weight goal.
   */
  getEstimateTimeToWeightGoal(): number

  /**
   * Gets the daily caloric intake required to reach the weight goal.
   * @returns {number} The daily calories needed to reach the weight goal.
   */
  getCaloriesForWeightGoal(): number
}

//21 rader innan jsdoc
