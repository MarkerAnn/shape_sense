import { Gender } from '../enums/Gender'
import { UnitSystem } from '../enums/UnitSystem'

export interface BmiFormData {
  unitSystem: UnitSystem
  height: number
  weight: number
}

// export interface TdeeFormData {
//   unitSystem: UnitSystem
//   weight: number
//   height: number
//   age: number
// }

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
  waist: number
  neck: number
  hip?: number
  weight: number
}

export interface BasalMetabolicRateFormData {
  unitSystem: UnitSystem
  gender: Gender
  weight: number
  height: number
  age: number
}
