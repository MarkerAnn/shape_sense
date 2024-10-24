import { UnitSystem } from '../enums/UnitSystem'
import { BaseValidator } from './BaseValidator'
import {
  VALIDATION_LIMITS,
  VALIDATION_UNITS,
  CONVERSION_FACTORS,
} from '../constants/ValidationConstants'

/**
 * Class representing a MeasurementValidator.
 * @extends BaseValidator
 */
export class MeasurementValidator extends BaseValidator {
  /**
   * Validates the weight.
   * @param {number} weight - The weight to validate.
   * @param {UnitSystem} unitSystem - The unit system (IMPERIAL or METRIC).
   * @throws Will throw an error if the weight is not a number or out of range.
   */
  validateWeight(weight: number, unitSystem: UnitSystem): void {
    this.validateNumericInput(weight, 'Weight')
    const isImperial = unitSystem === UnitSystem.IMPERIAL
    const { min, max } = this.getConvertedLimits({
      min: VALIDATION_LIMITS.weight.min,
      max: VALIDATION_LIMITS.weight.max,
      shouldConvert: isImperial,
      conversionFactor: CONVERSION_FACTORS.POUNDS,
    })

    this.validateRange({
      value: weight,
      min,
      max,
      name: 'Weight',
      unit: isImperial
        ? VALIDATION_UNITS.IMPERIAL.WEIGHT
        : VALIDATION_UNITS.METRIC.WEIGHT,
    })
  }

  /**
   * Validates the height.
   * @param {number} height - The height to validate.
   * @param {UnitSystem} unitSystem - The unit system (IMPERIAL or METRIC).
   * @throws Will throw an error if the height is not a number or out of range.
   */
  validateHeight(height: number, unitSystem: UnitSystem): void {
    this.validateNumericInput(height, 'Height')
    const isImperial = unitSystem === UnitSystem.IMPERIAL
    const { min, max } = this.getConvertedLimits({
      min: VALIDATION_LIMITS.height.min,
      max: VALIDATION_LIMITS.height.max,
      shouldConvert: isImperial,
      conversionFactor: CONVERSION_FACTORS.FEET,
    })

    this.validateRange({
      value: height,
      min,
      max,
      name: 'Height',
      unit: isImperial
        ? VALIDATION_UNITS.IMPERIAL.HEIGHT
        : VALIDATION_UNITS.METRIC.HEIGHT,
    })
  }
}
