import { ActivityLevel } from '../enums/ActivityLevel'
import { Gender } from '../enums/Gender'
import { UnitSystem } from '../enums/UnitSystem'

/**
 * Represents a user with various health and fitness attributes.
 *
 * @typedef {Object} User
 * @property {number} [weight] - The weight of the user (optional).
 * @property {number} [height] - The height of the user (optional).
 * @property {UnitSystem} unitSystem - The unit system used by the user.
 * @property {number} [age] - The age of the user (optional).
 * @property {Gender} [gender] - The gender of the user (optional).
 * @property {number} [waist] - The waist measurement of the user (optional).
 * @property {number} [hip] - The hip measurement of the user (optional).
 * @property {number} [neck] - The neck measurement of the user (optional).
 * @property {ActivityLevel} [activityLevel] -
 * The activity level of the user (optional).
 * @property {number} [dailyCalories] -
 * The daily calorie intake of the user (optional).
 * @property {number} [weightGoal] -
 * The weight goal of the user (optional).
 * @property {number} [weeksToWeightGoal] -
 * The number of weeks to achieve the weight goal (optional).
 */
export type User = {
  weight?: number
  height?: number
  unitSystem: UnitSystem
  age?: number
  gender?: Gender
  waist?: number
  hip?: number
  neck?: number
  activityLevel?: ActivityLevel
  dailyCalories?: number
  weightGoal?: number
  weeksToWeightGoal?: number
}
