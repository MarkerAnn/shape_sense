import {
  IConversionConfigurate,
  IRangeValidationConfigurate,
} from '../interfaces/ValidationConfiguration'

/**
 * Abstract class representing a base validator.
 */
export abstract class BaseValidator {
  /**
   * Parses a numeric input value, handling both comma and period as decimal separators.
   * @param value - The value to parse, can be number or string
   * @param fieldName - The name of the field being parsed
   * @returns The parsed number
   * @throws Error if the value cannot be parsed to a valid number
   */
  protected parseNumericInput(
    value: number | string,
    fieldName: string
  ): number {
    if (typeof value === 'number') {
      return value
    }

    // Replace comma with period for decimal numbers
    const normalizedValue = value.replace(',', '.')
    const parsedValue = parseFloat(normalizedValue)

    if (isNaN(parsedValue)) {
      throw new Error(`Invalid ${fieldName} value`)
    }

    return parsedValue
  }

  /**
   * Validates that the input is a positive number.
   * @param value - The value to validate
   * @param fieldName - The name of the field being validated
   * @throws Will throw an error if the value is not a positive number
   */
  protected validateNumericInput(
    value: number | string,
    fieldName: string
  ): void {
    const parsedValue = this.parseNumericInput(value, fieldName)

    if (parsedValue <= 0) {
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
