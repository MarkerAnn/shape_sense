export const INCH_TO_CM_CONVERSION_FACTOR = 2.54

export const CONVERSION_FACTORS = {
  POUNDS: 2.20462,
  FEET: 3.28084,
  INCHES: 1 / INCH_TO_CM_CONVERSION_FACTOR,
} as const

export const VALIDATION_UNITS = {
  METRIC: {
    WEIGHT: 'kg',
    HEIGHT: 'm',
    MEASUREMENT: 'cm',
  },
  IMPERIAL: {
    WEIGHT: 'lbs',
    HEIGHT: 'ft',
    MEASUREMENT: 'inches',
  },
} as const

export const VALIDATION_LIMITS = {
  weight: {
    min: 20,
    max: 500,
  },
  height: {
    min: 0.5,
    max: 2.5,
  },
  age: {
    min: 18,
    max: 120,
  },
  waist: {
    min: 40,
    max: 200,
  },
  hip: {
    min: 50,
    max: 200,
  },
  neck: {
    min: 20,
    max: 80,
  },
  calories: {
    min: 500,
    max: 10000,
  },
  weeksToWeightGoal: {
    min: 1,
    max: 520,
  },
} as const
