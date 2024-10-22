import { UnitSystem } from '../enums/UnitSystem'

export const UNIT_PLACEHOLDERS = {
  [UnitSystem.METRIC]: {
    height: 'm',
    weight: 'kg',
    waist: 'cm',
    hip: 'cm',
    neck: 'cm',
  },
  [UnitSystem.IMPERIAL]: {
    height: 'ft',
    weight: 'lbs',
    waist: 'in',
    hip: 'in',
    neck: 'in',
  },
} as const

export type MeasurementField = keyof (typeof UNIT_PLACEHOLDERS)[UnitSystem]

// TODO: I dont use it for now?
