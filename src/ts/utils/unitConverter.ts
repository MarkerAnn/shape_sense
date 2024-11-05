/**
 * Utility class for converting between metric and imperial units and formatting measurement results
 */
export class UnitConverter {
  // Conversion factors
  private static readonly KG_TO_LBS = 2.20462
  private static readonly CM_TO_IN = 0.393701

  /**
   * Converts kilograms to pounds
   */
  public static kgToLbs(kg: number): number {
    return kg * this.KG_TO_LBS
  }

  /**
   * Converts centimeters to inches
   */
  public static cmToIn(cm: number): number {
    return cm * this.CM_TO_IN
  }

  /**
   * Formats a weight value based on the unit system
   */
  public static formatWeight(weight: number, isImperial: boolean): string {
    if (isImperial) {
      return `${(weight * this.KG_TO_LBS).toFixed(1)} lbs`
    }
    return `${weight.toFixed(1)} kg`
  }

  /**
   * Formats a weight range based on the unit system
   */
  public static formatWeightRange(
    [min, max]: [number, number],
    isImperial: boolean
  ): string {
    if (isImperial) {
      return `${(min * this.KG_TO_LBS).toFixed(1)} - ${(max * this.KG_TO_LBS).toFixed(1)} lbs`
    }
    return `${min.toFixed(1)} - ${max.toFixed(1)} kg`
  }

  /**
   * Formats body fat percentage
   */
  public static formatBodyFat(percentage: number): string {
    return `${percentage.toFixed(2)}%`
  }

  /**
   * Formats lean body mass based on the unit system
   */
  public static formatLeanMass(mass: number, isImperial: boolean): string {
    if (isImperial) {
      return `${(mass * this.KG_TO_LBS).toFixed(1)} lbs`
    }
    return `${mass.toFixed(1)} kg`
  }

  /**
   * Determines if Imperial system is being used
   */
  public static isImperial(unitSystem: string): boolean {
    return unitSystem.toLowerCase() === 'imperial'
  }
}
