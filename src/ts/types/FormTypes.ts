import { User } from './User'

// BMI form data
export type BmiFormData = Pick<User, 'unitSystem' | 'height' | 'weight'>

// TDEE form data
export type TdeeFormData = Pick<
  User,
  'unitSystem' | 'weight' | 'height' | 'age' | 'gender' | 'activityLevel'
>

// Waist-to-Hip Ratio form data
export type WaistHipRatioFormData = Pick<User, 'unitSystem' | 'waist' | 'hip'>

// Waist-to-Height Ratio form data
export type WaistHeightRatioFormData = Pick<
  User,
  'unitSystem' | 'waist' | 'height'
>

// Body Fat Percentage form data
export type BodyFatPercentageFormData = Pick<
  User,
  'unitSystem' | 'gender' | 'weight' | 'waist' | 'neck' | 'hip'
>

// Lean Body Mass form data
export type LeanBodyMassFormData = Pick<User, 'unitSystem' | 'weight' | 'waist'>
