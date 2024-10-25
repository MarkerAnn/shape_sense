/**
 * Interface representing formatted BMI results.
 * @interface IFormattedBmiResults
 * @property {string} bmi - The formatted BMI value.
 * @property {string} category - The BMI category.
 * @property {string} healthRisk - The health risk associated with the BMI.
 * @property {string} idealWeight - The formatted ideal weight range.
 */
export interface IFormattedBmiResults {
  bmi: string
  category: string
  healthRisk: string
  idealWeight: string
}

/**
 * Interface representing formatted TDEE results.
 * @interface IFormattedTdeeResults
 * @property {string} totalDailyEnergyExpenditureHarris -
 * The formatted TDEE using the Harris-Benedict equation.
 * @property {string} totalDailyEnergyExpenditureMifflin -
 * The formatted TDEE using the Mifflin-St Jeor equation.
 */
export interface IFormattedTdeeResults {
  totalDailyEnergyExpenditureHarris: string
  totalDailyEnergyExpenditureMifflin: string
}

/**
 * Interface representing formatted time to weight goal results.
 * @interface IFormattedTimeToWeightGoalResults
 * @property {string} weeksToWeightGoal - The formatted number of weeks to reach the weight goal.
 */
export interface IFormattedTimeToWeightGoalResults {
  weeksToWeightGoal: string
}

/**
 * Interface representing formatted calories needed to reach weight goal results.
 * @interface IFormattedCaloriesForWeightGoalResults
 * @property {string} dailyCalories -
 * The formatted daily caloric intake needed to reach the weight goal.
 */
export interface IFormattedCaloriesForWeightGoalResults {
  dailyCalories: string
}

/**
 * Interface representing formatted body fat percentage results.
 * @interface IFormattedBodyFatPercentageResults
 * @property {string} bodyFatPercentage - The formatted body fat percentage.
 * @property {string} leanBodyMass - The formatted lean body mass.
 */
export interface IFormattedBodyFatPercentageResults {
  bodyFatPercentage: string
  leanBodyMass: string
}

/**
 * Interface representing formatted waist to height ratio results.
 * @interface IFormattedWaistToHeightRatioResults
 * @property {string} waistToHeightRatio - The formatted waist to height ratio.
 */
export interface IFormattedWaistToHeightRatioResults {
  waistToHeightRatio: string
}

/**
 * Interface representing formatted waist to hip ratio results.
 * @interface IFormattedWaistToHipRationResults
 * @property {string} waistToHipRatio - The formatted waist to hip ratio.
 */
export interface IFormattedWaistToHipRationResults {
  waistToHipRatio: string
}

/**
 * Interface representing formatted basal metabolic rate results.
 * @interface IFormatBasaMetabolicRateResults
 * @property {string} basalMetabolicRateHarrisBenedict -
 * The formatted BMR using the Harris-Benedict equation.
 * @property {string} basalMetabolicRateMifflinStJeor -
 * The formatted BMR using the Mifflin-St Jeor equation.
 */
export interface IFormatBasaMetabolicRateResults {
  basalMetabolicRateHarrisBenedict: string
  basalMetabolicRateMifflinStJeor: string
}

// 37 rader
