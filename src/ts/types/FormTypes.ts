import { ActivityLevel } from '../enums/ActivityLevel'
import { Gender } from '../enums/Gender'
import { UnitSystem } from '../enums/UnitSystem'

interface BaseFormData {
  unitSystem: UnitSystem
}

export interface BmiFormData extends BaseFormData {
  height: number
  weight: number
}

export interface TotalDailyEnergyExpenditureFormData extends BaseFormData {
  gender: Gender
  activityLevel: ActivityLevel
  weight: number
  height: number
  age: number
}

export interface WaistHipRatioFormData extends BaseFormData {
  waist: number
  hip: number
}

export interface WaistHeightRatioFormData extends BaseFormData {
  waist: number
  height: number
}

export interface BodyFatPercentageFormData extends BaseFormData {
  gender: Gender
  waist: number
  neck: number
  hip?: number
  weight: number
}

export interface BasalMetabolicRateFormData extends BaseFormData {
  gender: Gender
  weight: number
  height: number
  age: number
}

export interface CaloriesForWeightGoalFormData extends BaseFormData {
  weight: number
  height: number
  weightGoal: number
  weeksToWeightGoal: number
  age: number
  gender: Gender
  activityLevel: ActivityLevel
}

export interface EstimateTimeToWeightGoalFormData extends BaseFormData {
  weight: number
  height: number
  dailyCalories: number
  weightGoal: number
  age: number
  gender: Gender
  activityLevel: ActivityLevel
}
