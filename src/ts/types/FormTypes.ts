import { Gender } from '../enums/Gender'
import { UnitSystem } from '../enums/UnitSystem'

// export type BmiFormData = Pick<User, 'unitSystem' | 'height' | 'weight'>

// export type TdeeFormData = Pick<
//   User,
//   'unitSystem' | 'weight' | 'height' | 'age' | 'gender' | 'activityLevel'
// >

// export type WaistHipRatioFormData = Pick<User, 'unitSystem' | 'waist' | 'hip'>

// export type WaistHeightRatioFormData = Pick<
//   User,
//   'unitSystem' | 'waist' | 'height'
// >

// export type BodyFatPercentageFormData = Pick<
//   User,
//   'unitSystem' | 'gender' | 'weight' | 'waist' | 'neck' | 'hip'
// >

// export type LeanBodyMassFormData = Pick<User, 'unitSystem' | 'weight' | 'waist'>

// export type BodyCompositionFormData = {
//   formId: string
//   unitSystem: UnitSystem
//   waist?: number
//   hip?: number
//   height?: number
//   weight?: number
//   gender?: Gender
//   neck?: number
// }

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
  hip: number
  weight: number
}
