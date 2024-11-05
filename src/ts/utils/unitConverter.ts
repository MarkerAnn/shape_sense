import { UnitSystem } from '../enums/UnitSystem'

/**
 * Constants for unit conversion calculations
 * @constant
 */
const CONVERSION_FACTORS = {
  KG_TO_LBS: 2.20462,
  CM_TO_IN: 0.393701,
} as const

/**
 * Decimal places for number formatting
 * @constant
 */
const DECIMAL_PLACES = {
  WEIGHT: 1,
  PERCENTAGE: 2,
} as const

/**
 * Utility class for converting between metric and imperial units and formatting
 * measurement results
 */
export class UnitConverter {
  /**
   * Converts kilograms to pounds
   */
  public static kgToLbs(kg: number): number {
    return kg * CONVERSION_FACTORS.KG_TO_LBS
  }

  /**
   * Converts centimeters to inches
   */
  public static cmToIn(cm: number): number {
    return cm * CONVERSION_FACTORS.CM_TO_IN
  }

  /**
   * Formats a weight value based on the unit system
   */
  public static formatWeight(weight: number, isImperial: boolean): string {
    if (isImperial) {
      const lbs = weight * CONVERSION_FACTORS.KG_TO_LBS
      return `${lbs.toFixed(DECIMAL_PLACES.WEIGHT)} lbs`
    }
    return `${weight.toFixed(DECIMAL_PLACES.WEIGHT)} kg`
  }

  /**
   * Formats a weight range based on the unit system
   */
  public static formatWeightRange(
    [min, max]: [number, number],
    isImperial: boolean
  ): string {
    if (isImperial) {
      const minLbs = min * CONVERSION_FACTORS.KG_TO_LBS
      const maxLbs = max * CONVERSION_FACTORS.KG_TO_LBS
      return `${minLbs.toFixed(DECIMAL_PLACES.WEIGHT)} - 
        ${maxLbs.toFixed(DECIMAL_PLACES.WEIGHT)} lbs`
    }
    return `${min.toFixed(DECIMAL_PLACES.WEIGHT)} - 
      ${max.toFixed(DECIMAL_PLACES.WEIGHT)} kg`
  }

  /**
   * Formats body fat percentage
   */
  public static formatBodyFat(percentage: number): string {
    return `${percentage.toFixed(DECIMAL_PLACES.PERCENTAGE)}%`
  }

  /**
   * Formats lean body mass based on the unit system
   */
  public static formatLeanMass(mass: number, isImperial: boolean): string {
    if (isImperial) {
      const lbs = mass * CONVERSION_FACTORS.KG_TO_LBS
      return `${lbs.toFixed(DECIMAL_PLACES.WEIGHT)} lbs`
    }
    return `${mass.toFixed(DECIMAL_PLACES.WEIGHT)} kg`
  }

  /**
   * Determines if Imperial system is being used
   */
  public static isImperial(unitSystem: string): boolean {
    return unitSystem.toLowerCase() === UnitSystem.IMPERIAL
  }
}
