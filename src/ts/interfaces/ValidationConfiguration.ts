/**
 * Interface representing the configuration for conversion.
 * @interface IConversionConfigurate
 * @property {number} min - The minimum value before conversion.
 * @property {number} max - The maximum value before conversion.
 * @property {boolean} shouldConvert - Flag indicating whether conversion is needed.
 * @property {number} conversionFactor - The factor used for conversion.
 */
export interface IConversionConfigurate {
  min: number
  max: number
  shouldConvert: boolean
  conversionFactor: number
}

/**
 * Interface representing the configuration for range validation.
 * @interface IRangeValidationConfigurate
 * @property {number} value - The value to be validated.
 * @property {number} min - The minimum valid value.
 * @property {number} max - The maximum valid value.
 * @property {string} name - The name of the field being validated.
 * @property {string} unit - The unit of measurement for the value.
 */
export interface IRangeValidationConfigurate {
  value: number
  min: number
  max: number
  name: string
  unit: string
}

/**
 * Interface representing validation limits.
 * @interface IValidationLimits
 * @property {number} min - The minimum valid value.
 * @property {number} max - The maximum valid value.
 */
export interface IValidationLimits {
  min: number
  max: number
}

// 20 rader innan jsdoc
