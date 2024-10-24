import { UnitSystem } from '../enums/UnitSystem'
import { BaseValidator } from './BaseValidator'
import {
  VALIDATION_LIMITS,
  VALIDATION_UNITS,
  CONVERSION_FACTORS,
} from '../constants/ValidationConstants'

/**
 * MeasurementValidator class for validating weight, height, and body measurements.
 * Extends the BaseValidator class.
 *
 * @extends {BaseValidator}
 */
export class MeasurementValidator extends BaseValidator {
  /**
   * Validates weight based on the provided unit system.
   *
   * @param {number} weight - The weight value to validate.
   * @param {UnitSystem} unitSystem - The unit system (IMPERIAL or METRIC) used for validation.
   * @throws {Error} Throws an error if the weight is not a valid number or is out of range.
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
   * Validates height based on the provided unit system.
   *
   * @param {number} height - The height value to validate.
   * @param {UnitSystem} unitSystem - The unit system (IMPERIAL or METRIC) used for validation.
   * @throws {Error} Throws an error if the height is not a valid number or is out of range.
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

  /**
   * Validates a body measurement (e.g., waist, hip, neck) based on the provided unit system.
   *
   * @param {number} value - The measurement value to validate.
   * @param {'waist' | 'hip' | 'neck'} type - The type of body measurement.
   * @param {UnitSystem} unitSystem - The unit system (IMPERIAL or METRIC) used for validation.
   * @throws {Error} Throws an error if the measurement is not a valid number or is out of range.
   */
  validateBodyMeasurement(
    value: number,
    type: 'waist' | 'hip' | 'neck',
    unitSystem: UnitSystem
  ): void {
    this.validateNumericInput(value, type)
    const isImperial = unitSystem === UnitSystem.IMPERIAL
    const { min, max } = this.getConvertedLimits({
      min: VALIDATION_LIMITS[type].min,
      max: VALIDATION_LIMITS[type].max,
      shouldConvert: isImperial,
      conversionFactor: CONVERSION_FACTORS.INCHES,
    })

    this.validateRange({
      value,
      min,
      max,
      name: type.charAt(0).toUpperCase() + type.slice(1),
      unit: isImperial
        ? VALIDATION_UNITS.IMPERIAL.MEASUREMENT
        : VALIDATION_UNITS.METRIC.MEASUREMENT,
    })
  }
}
