import { UnitSystem } from '../enums/UnitSystem'

export const UNIT_PLACEHOLDERS = {
  [UnitSystem.METRIC]: {
    height: 'm',
    weight: 'kg',
    waist: 'cm',
    hip: 'cm',
    neck: 'cm',
    age: 'years',
    dailyCalories: 'kcal',
    weighGoal: 'kg',
    weeksToWeightGoal: 'weeks',
  },
  [UnitSystem.IMPERIAL]: {
    height: 'ft',
    weight: 'lbs',
    waist: 'in',
    hip: 'in',
    neck: 'in',
    age: 'years',
    dailyCalories: 'kcal',
    weighGoal: 'lbs',
    weeksToWeightGoal: 'weeks',
  },
} as const

export type MeasurementField = keyof (typeof UNIT_PLACEHOLDERS)[UnitSystem]

// TODO: I dont use it for now?
