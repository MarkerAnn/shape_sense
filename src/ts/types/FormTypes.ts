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
