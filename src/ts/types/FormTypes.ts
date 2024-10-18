import { User } from './User'

export type BmiFormData = Pick<User, 'unitSystem' | 'height' | 'weight'>

export type TdeeFormData = Pick<
  User,
  'unitSystem' | 'weight' | 'height' | 'age' | 'gender' | 'activityLevel'
>

export type WaistHipRatioFormData = Pick<User, 'unitSystem' | 'waist' | 'hip'>

export type WaistHeightRatioFormData = Pick<
  User,
  'unitSystem' | 'waist' | 'height'
>

export type BodyFatPercentageFormData = Pick<
  User,
  'unitSystem' | 'gender' | 'weight' | 'waist' | 'neck' | 'hip'
>

export type LeanBodyMassFormData = Pick<User, 'unitSystem' | 'weight' | 'waist'>
