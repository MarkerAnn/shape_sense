/**
 * Conversion factor from inches to centimeters.
 *
 * @constant {number}
 */
export const INCH_TO_CM_CONVERSION_FACTOR = 2.54

/**
 * Object containing various conversion factors.
 *
 * @constant {Object}
 * @property {number} POUNDS - Conversion factor from kilograms to pounds.
 * @property {number} FEET - Conversion factor from meters to feet.
 * @property {number} INCHES - Conversion factor from centimeters to inches.
 */
export const CONVERSION_FACTORS = {
  POUNDS: 2.20462,
  FEET: 3.28084,
  INCHES: 1 / INCH_TO_CM_CONVERSION_FACTOR,
} as const

/**
 * Object containing units for validation in both metric and imperial systems.
 *
 * @constant {Object}
 * @property {Object} METRIC - Units for the metric system.
 * @property {string} METRIC.WEIGHT - Weight unit in the metric system.
 * @property {string} METRIC.HEIGHT - Height unit in the metric system.
 * @property {string} METRIC.MEASUREMENT - General measurement unit in the metric system.
 * @property {Object} IMPERIAL - Units for the imperial system.
 * @property {string} IMPERIAL.WEIGHT - Weight unit in the imperial system.
 * @property {string} IMPERIAL.HEIGHT - Height unit in the imperial system.
 * @property {string} IMPERIAL.MEASUREMENT - General measurement unit in the imperial system.
 */
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

/**
 * Object containing validation limits for various measurements.
 *
 * @constant {Object}
 * @property {Object} weight - Validation limits for weight.
 * @property {number} weight.min - Minimum valid weight.
 * @property {number} weight.max - Maximum valid weight.
 * @property {Object} height - Validation limits for height.
 * @property {number} height.min - Minimum valid height.
 * @property {number} height.max - Maximum valid height.
 * @property {Object} age - Validation limits for age.
 * @property {number} age.min - Minimum valid age.
 * @property {number} age.max - Maximum valid age.
 * @property {Object} waist - Validation limits for waist circumference.
 * @property {number} waist.min - Minimum valid waist circumference.
 * @property {number} waist.max - Maximum valid waist circumference.
 */
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

// 60 rader
