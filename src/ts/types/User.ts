import { ActivityLevel } from '../enums/ActivityLevel'
import { Gender } from '../enums/Gender'
import { UnitSystem } from '../enums/UnitSystem'

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
