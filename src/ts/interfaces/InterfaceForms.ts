import { ActivityLevel } from '../enums/ActivityLevel'
import { Gender } from '../enums/Gender'
import { UnitSystem } from '../enums/UnitSystem'

/**
 * Base interface representing common form data.
 * @interface IBaseFormData
 * @property {UnitSystem} unitSystem - The unit system (IMPERIAL or METRIC).
 */
interface IBaseFormData {
  unitSystem: UnitSystem
}

/**
 * Interface representing the form data for BMI calculation.
 * @interface IBmiFormData
 * @extends {IBaseFormData}
 * @property {number} height - The height of the user.
 * @property {number} weight - The weight of the user.
 */
export interface IBmiFormData extends IBaseFormData {
  height: number
  weight: number
}

/**
 * Interface representing the form data for Total Daily Energy Expenditure (TDEE) calculation.
 * @interface ITotalDailyEnergyExpenditureFormData
 * @extends {IBaseFormData}
 * @property {Gender} gender - The gender of the user.
 * @property {ActivityLevel} activityLevel - The activity level of the user.
 * @property {number} weight - The weight of the user.
 * @property {number} height - The height of the user.
 * @property {number} age - The age of the user.
 */
export interface ITotalDailyEnergyExpenditureFormData extends IBaseFormData {
  gender: Gender
  activityLevel: ActivityLevel
  weight: number
  height: number
  age: number
}

/**
 * Interface representing the form data for Waist to Hip Ratio calculation.
 * @interface IWaistHipRatioFormData
 * @extends {IBaseFormData}
 * @property {number} waist - The waist circumference of the user.
 * @property {number} hip - The hip circumference of the user.
 */
export interface IWaistHipRatioFormData extends IBaseFormData {
  waist: number
  hip: number
}

/**
 * Interface representing the form data for Waist to Height Ratio calculation.
 * @interface IWaistHeightRatioFormData
 * @extends {IBaseFormData}
 * @property {number} waist - The waist circumference of the user.
 * @property {number} height - The height of the user.
 */
export interface IWaistHeightRatioFormData extends IBaseFormData {
  waist: number
  height: number
}

/**
 * Interface representing the form data for Body Fat Percentage calculation.
 * @interface IBodyFatPercentageFormData
 * @extends {IBaseFormData}
 * @property {Gender} gender - The gender of the user.
 * @property {number} waist - The waist circumference of the user.
 * @property {number} neck - The neck circumference of the user.
 * @property {number} [hip] - The hip circumference of the user (optional).
 * @property {number} weight - The weight of the user.
 */
export interface IBodyFatPercentageFormData extends IBaseFormData {
  gender: Gender
  waist: number
  neck: number
  hip?: number
  height: number
}

/**
 * Interface representing the form data for Basal Metabolic Rate (BMR) calculation.
 * @interface IBasalMetabolicRateFormData
 * @extends {IBaseFormData}
 * @property {Gender} gender - The gender of the user.
 * @property {number} weight - The weight of the user.
 * @property {number} height - The height of the user.
 * @property {number} age - The age of the user.
 */
export interface IBasalMetabolicRateFormData extends IBaseFormData {
  gender: Gender
  weight: number
  height: number
  age: number
}

/**
 * Interface representing the form data for calculating calories needed to reach a weight goal.
 * @interface ICaloriesForWeightGoalFormData
 * @extends {IBaseFormData}
 * @property {number} weight - The current weight of the user.
 * @property {number} height - The height of the user.
 * @property {number} weightGoal - The target weight of the user.
 * @property {number} weeksToWeightGoal - The number of weeks to reach the weight goal.
 * @property {number} age - The age of the user.
 * @property {Gender} gender - The gender of the user.
 * @property {ActivityLevel} activityLevel - The activity level of the user.
 */
export interface ICaloriesForWeightGoalFormData extends IBaseFormData {
  weight: number
  height: number
  weightGoal: number
  weeksToWeightGoal: number
  age: number
  gender: Gender
  activityLevel: ActivityLevel
}

/**
 * Interface representing the form data for estimating the time to reach a weight goal.
 * @interface IEstimateTimeToWeightGoalFormData
 * @extends {IBaseFormData}
 * @property {number} weight - The current weight of the user.
 * @property {number} height - The height of the user.
 * @property {number} dailyCalories - The daily caloric intake of the user.
 * @property {number} weightGoal - The target weight of the user.
 * @property {number} age - The age of the user.
 * @property {Gender} gender - The gender of the user.
 * @property {ActivityLevel} activityLevel - The activity level of the user.
 */
export interface IEstimateTimeToWeightGoalFormData extends IBaseFormData {
  weight: number
  height: number
  dailyCalories: number
  weightGoal: number
  age: number
  gender: Gender
  activityLevel: ActivityLevel
}
