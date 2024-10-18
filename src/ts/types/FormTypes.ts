import { UnitSystem } from '../enums/UnitSystem'
import { Gender } from '../enums/Gender'
import { ActivityLevel } from '../enums/ActivityLevel'

export interface BmiFormData {
  unitSystem: UnitSystem
  height: number
  weight: number
}

export interface TdeeFormData {
  unitSystem: UnitSystem
  weight: number
  height: number
  age: number
  gender: Gender
  activityLevel: ActivityLevel
}

export interface WaistHipRatioFormData {
  unitSystem: UnitSystem
  waist: number
  hip: number
}

export interface WaistHeightRatioFormData {
  unitSystem: UnitSystem
  waist: number
  height: number
}

export interface BodyFatPercentageFormData {
  unitSystem: UnitSystem
  gender: Gender
  weight: number
  waist: number
  neck: number
  hip?: number
}

export interface LeanBodyMassFormData {
  unitSystem: UnitSystem
  weight: number
  waist: number
}
