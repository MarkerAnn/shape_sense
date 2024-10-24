import { BaseValidator } from './BaseValidator'
import { VALIDATION_LIMITS } from '../constants/ValidationConstants'
import { Gender } from '../enums/Gender'
import { ActivityLevel } from '../enums/ActivityLevel'
import { UnitSystem } from '../enums/UnitSystem'

/**
 * Class representing a validator for personal information.
 * Extends the BaseValidator class to provide specific validation methods.
 */
export class PersonalInfoValidator extends BaseValidator {
  /**
   * Validates the age input.
   * Ensures the age is a numeric value and within the defined limits.
   *
   * @param age - The age to validate.
   * @throws Will throw an error if the age is not within the valid range.
   */
  validateAge(age: number): void {
    this.validateNumericInput(age, 'Age')
    const limits = VALIDATION_LIMITS.age
    if (age < limits.min || age > limits.max) {
      throw new Error(
        `Age must be between ${limits.min} and ${limits.max} years`
      )
    }
  }

  /**
   * Validates the gender input.
   * Ensures the gender is one of the predefined values.
   *
   * @param gender - The gender to validate.
   * @throws Will throw an error if the gender value is invalid.
   */
  validateGender(gender: Gender): void {
    if (!Object.values(Gender).includes(gender)) {
      throw new Error('Invalid gender value')
    }
  }

  /**
   * Validates the activity level input.
   * Ensures the activity level is one of the predefined values.
   *
   * @param activityLevel - The activity level to validate.
   * @throws Will throw an error if the activity level value is invalid.
   */
  validateActivityLevel(activityLevel: ActivityLevel): void {
    if (!Object.values(ActivityLevel).includes(activityLevel)) {
      throw new Error('Invalid activity level value')
    }
  }

  /**
   * Validates the unit system input.
   * Ensures the unit system is one of the predefined values.
   *
   * @param unitSystem - The unit system to validate.
   * @throws Will throw an error if the unit system value is invalid.
   */
  validateUnitSystem(unitSystem: UnitSystem): void {
    if (!Object.values(UnitSystem).includes(unitSystem)) {
      throw new Error('Invalid unit system value')
    }
  }
}
