import {
  IConversionConfigurate,
  IRangeValidationConfigurate,
} from '../interfaces/ValidationConfiguration'

export abstract class BaseValidator {
  protected validateNumericInput(value: number, fieldName: string): void {
    if (typeof value !== 'number' || isNaN(value) || value <= 0) {
      throw new Error(`Invalid ${fieldName} value`)
    }
  }

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

  protected validateRange(config: IRangeValidationConfigurate): void {
    const { value, min, max, name, unit } = config
    if (value < min || value > max) {
      throw new Error(`${name} must be between ${min} and ${max} ${unit}`)
    }
  }
}
