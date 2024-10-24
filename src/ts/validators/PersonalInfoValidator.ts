import { BaseValidator } from './BaseValidator'
import { VALIDATION_LIMITS } from '../constants/ValidationConstants'
import { Gender } from '../enums/Gender'
import { ActivityLevel } from '../enums/ActivityLevel'
import { UnitSystem } from '../enums/UnitSystem'

export class PersonalInfoValidator extends BaseValidator {
  validateAge(age: number): void {
    this.validateNumericInput(age, 'Age')
    const limits = VALIDATION_LIMITS.age
    if (age < limits.min || age > limits.max) {
      throw new Error(
        `Age must be between ${limits.min} and ${limits.max} years`
      )
    }
  }

  validateGender(gender: Gender): void {
    if (!Object.values(Gender).includes(gender)) {
      throw new Error('Invalid gender value')
    }
  }

  validateActivityLevel(activityLevel: ActivityLevel): void {
    if (!Object.values(ActivityLevel).includes(activityLevel)) {
      throw new Error('Invalid activity level value')
    }
  }

  validateUnitSystem(unitSystem: UnitSystem): void {
    if (!Object.values(UnitSystem).includes(unitSystem)) {
      throw new Error('Invalid unit system value')
    }
  }
}
