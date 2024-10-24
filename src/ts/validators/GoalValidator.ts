import {
  VALIDATION_LIMITS,
  CONVERSION_FACTORS,
  VALIDATION_UNITS,
} from '../constants/ValidationConstants'
import { UnitSystem } from '../enums/UnitSystem'
import { BaseValidator } from './BaseValidator'

export class GoalValidator extends BaseValidator {
  validateWeightGoal(weightGoal: number, unitSystem: UnitSystem): void {
    this.validateNumericInput(weightGoal, 'Weight goal')
    const isImperial = unitSystem === UnitSystem.IMPERIAL
    const { min, max } = this.getConvertedLimits({
      min: VALIDATION_LIMITS.weight.min,
      max: VALIDATION_LIMITS.weight.max,
      shouldConvert: isImperial,
      conversionFactor: CONVERSION_FACTORS.POUNDS,
    })

    this.validateRange({
      value: weightGoal,
      min,
      max,
      name: 'Weight goal',
      unit: isImperial
        ? VALIDATION_UNITS.IMPERIAL.WEIGHT
        : VALIDATION_UNITS.METRIC.WEIGHT,
    })
  }

  validateWeeksToWeightGoal(weeksToWeightGoal: number): void {
    this.validateNumericInput(weeksToWeightGoal, 'Weeks to weight goal')
    this.validateRange({
      value: weeksToWeightGoal,
      min: VALIDATION_LIMITS.weeksToWeightGoal.min,
      max: VALIDATION_LIMITS.weeksToWeightGoal.max,
      name: 'Weeks to goal',
      unit: 'weeks',
    })
  }

  validateDailyCalories(dailyCalories: number): void {
    this.validateNumericInput(dailyCalories, 'Daily calories')
    this.validateRange({
      value: dailyCalories,
      min: VALIDATION_LIMITS.calories.min,
      max: VALIDATION_LIMITS.calories.max,
      name: 'Daily calories',
      unit: 'calories',
    })
  }
}
