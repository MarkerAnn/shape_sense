import { FormFieldName, FormSelectors } from '../types/FormFieldTypes'

export const FORM_FIELDS: Record<string, FormFieldName> = {
  weight: 'weight',
  height: 'height',
  age: 'age',
  waist: 'waist',
  hip: 'hip',
  neck: 'neck',
  weightGoal: 'weightGoal',
  weeksToWeightGoal: 'weeksToWeightGoal',
  dailyCalories: 'dailyCalories',
  unitSystem: 'unitSystem',
  gender: 'gender',
  activityLevel: 'activityLevel',
} as const

export type FormField = keyof typeof FORM_FIELDS

export const FORM_SELECTORS: FormSelectors = {
  inputs: {
    weight: `#${FORM_FIELDS.weight}`,
    height: `#${FORM_FIELDS.height}`,
    age: `#${FORM_FIELDS.age}`,
    waist: `#${FORM_FIELDS.waist}`,
    hip: `#${FORM_FIELDS.hip}`,
    neck: `#${FORM_FIELDS.neck}`,
    weightGoal: `#${FORM_FIELDS.weightGoal}`,
    weeksToWeightGoal: `#${FORM_FIELDS.weeksToWeightGoal}`,
    dailyCalories: `#${FORM_FIELDS.dailyCalories}`,
  },
  selects: {
    unitSystem: `#${FORM_FIELDS.unitSystem}`,
    gender: `#${FORM_FIELDS.gender}`,
    activityLevel: `#${FORM_FIELDS.activityLevel}`,
  },
  common: {
    form: 'form',
    resultTable: '.resultTable',
    errorMessage: '.errorMessage',
    inputGroup: '.inputGroup',
  },
} as const

export const UNIT_PLACEHOLDERS = {
  metric: {
    [FORM_FIELDS.height]: 'm',
    [FORM_FIELDS.weight]: 'kg',
    [FORM_FIELDS.waist]: 'cm',
    [FORM_FIELDS.hip]: 'cm',
    [FORM_FIELDS.neck]: 'cm',
  },
  imperial: {
    [FORM_FIELDS.height]: 'ft',
    [FORM_FIELDS.weight]: 'lbs',
    [FORM_FIELDS.waist]: 'in',
    [FORM_FIELDS.hip]: 'in',
    [FORM_FIELDS.neck]: 'in',
  },
} as const

export const CALCULATOR_ROUTES = {
  HOME: '/',
  BMI: '/bmi',
  BMR: '/bmr',
  TDEE: '/tdee',
  WAIST_TO_HIP: '/waist-to-hip',
  WAIST_TO_HEIGHT: '/waist-to-height',
  BODY_FAT: '/body-fat-percentage',
  CALORIE_GOAL: '/calorie-goal',
  WEIGHT_GOAL: '/weight-goal',
} as const

// TODO: Ta bort routes?
