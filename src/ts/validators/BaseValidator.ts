import {
  IConversionConfigurate,
  IRangeValidationConfigurate,
} from '../interfaces/ValidationConfiguration'

/**
 * Abstract class representing a base validator.
 */
export abstract class BaseValidator {
  /**
   * Validates that the input is a positive number.
   * @param value - The value to validate
   * @param fieldName - The name of the field being validated
   * @throws Will throw an error if the value is not a positive number
   */
  protected validateNumericInput(value: number, fieldName: string): void {
    if (value <= 0) {
      throw new Error(`Invalid ${fieldName} value`)
    }
  }

  /**
   * Converts the validation limits based on the provided configuration.
   * @param {IConversionConfigurate} config - The conversion configuration.
   * @returns {{min: number, max: number}} The converted limits.
   */
  protected getConvertedLimits(config: IConversionConfigurate): {
    min: number
    max: number
  } {
    const { min, max, shouldConvert, conversionFactor } = config
    if (!shouldConvert) {
      return { min, max }
    }
    return {
      min: Math.round(min * conversionFactor),
      max: Math.round(max * conversionFactor),
    }
  }

  /**
   * Validates that a value is within a specified range.
   * @param {IRangeValidationConfigurate} config - The range validation configuration.
   * @throws Will throw an error if the value is not within the specified range.
   */
  protected validateRange(config: IRangeValidationConfigurate): void {
    const { value, min, max, name, unit } = config
    if (value < min || value > max) {
      throw new Error(`${name} must be between ${min} and ${max} ${unit}`)
    }
  }
}
