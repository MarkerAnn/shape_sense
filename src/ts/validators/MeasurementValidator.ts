import { UnitSystem } from '../enums/UnitSystem'
import { BaseValidator } from './BaseValidator'
import {
  VALIDATION_LIMITS,
  VALIDATION_UNITS,
  CONVERSION_FACTORS,
} from '../constants/ValidationConstants'

export class MeasurementValidator extends BaseValidator {
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
