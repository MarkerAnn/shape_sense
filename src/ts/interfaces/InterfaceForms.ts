import { ActivityLevel } from '../enums/ActivityLevel'
import { Gender } from '../enums/Gender'
import { UnitSystem } from '../enums/UnitSystem'

interface IBaseFormData {
  unitSystem: UnitSystem
}

export interface IBmiFormData extends IBaseFormData {
  height: number
  weight: number
}

export interface ITotalDailyEnergyExpenditureFormData extends IBaseFormData {
  gender: Gender
  activityLevel: ActivityLevel
  weight: number
  height: number
  age: number
}

export interface IWaistHipRatioFormData extends IBaseFormData {
  waist: number
  hip: number
}

export interface IWaistHeightRatioFormData extends IBaseFormData {
  waist: number
  height: number
}

export interface IBodyFatPercentageFormData extends IBaseFormData {
  gender: Gender
  waist: number
  neck: number
  hip?: number
  weight: number
}

export interface IBasalMetabolicRateFormData extends IBaseFormData {
  gender: Gender
  weight: number
  height: number
  age: number
}

export interface ICaloriesForWeightGoalFormData extends IBaseFormData {
  weight: number
  height: number
  weightGoal: number
  weeksToWeightGoal: number
  age: number
  gender: Gender
  activityLevel: ActivityLevel
}

export interface IEstimateTimeToWeightGoalFormData extends IBaseFormData {
  weight: number
  height: number
  dailyCalories: number
  weightGoal: number
  age: number
  gender: Gender
  activityLevel: ActivityLevel
}
