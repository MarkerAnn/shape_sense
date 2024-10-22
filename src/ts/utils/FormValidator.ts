import { UnitSystem } from '../enums/UnitSystem'
import { Gender } from '../enums/Gender'
// import { ActivityLevel } from '../enums/ActivityLevel'
import {
  BmiFormData,
  WaistHeightRatioFormData,
  WaistHipRatioFormData,
  BodyFatPercentageFormData,
  BasalMetabolicRateFormData,
} from '../types/FormTypes'

export class FormValidator {
  validateBmiFormData(formData: BmiFormData): void {
    this.validateUnitSystem(formData.unitSystem)
    this.validateNumericInput(formData.height, 'height')
    this.validateNumericInput(formData.weight, 'weight')
  }

  // validateTdeeFormData(formData: TdeeFormData): void {
  //   this.validateUnitSystem(formData.unitSystem)
  //   this.validateGender(formData.gender)
  //   this.validateNumericInput(formData.weight, 'weight')
  //   this.validateNumericInput(formData.height, 'height')
  //   this.validateNumericInput(formData.age, 'age')
  //   this.validateActivityLevel(formData.activityLevel)
  // }

  validateWaistToHipRatioFormData(data: WaistHipRatioFormData): void {
    this.validateUnitSystem(data.unitSystem)
    this.validateNumericInput(data.waist, 'waist')
    this.validateNumericInput(data.hip, 'hip')
  }

  validateWaistHeightRatioFormData(data: WaistHeightRatioFormData): void {
    this.validateUnitSystem(data.unitSystem)
    this.validateNumericInput(data.waist, 'waist')
    this.validateNumericInput(data.height, 'height')
  }

  validateBodyFatPercentageFormData(data: BodyFatPercentageFormData): void {
    this.validateUnitSystem(data.unitSystem)
    this.validateGender(data.gender)
    this.validateNumericInput(data.weight, 'weight')
    this.validateNumericInput(data.waist, 'waist')
    this.validateNumericInput(data.neck, 'neck')
    if (data.gender === Gender.FEMALE && data.hip !== undefined) {
      this.validateNumericInput(data.hip, 'hip')
    }
  }

  validateBasalMetabolicRateFormData(data: BasalMetabolicRateFormData): void {
    this.validateUnitSystem(data.unitSystem)
    this.validateGender(data.gender)
    this.validateNumericInput(data.weight, 'weight')
    this.validateNumericInput(data.height, 'height')
    this.validateNumericInput(data.age, 'age')
  }

  private validateUnitSystem(unitSystem: UnitSystem): void {
    if (!Object.values(UnitSystem).includes(unitSystem)) {
      throw new Error('Invalid unit system value')
    }
  }

  private validateGender(gender: Gender): void {
    if (!Object.values(Gender).includes(gender)) {
      throw new Error('Invalid gender value')
    }
  }

  // private validateActivityLevel(activityLevel: ActivityLevel): void {
  //   if (!Object.values(ActivityLevel).includes(activityLevel)) {
  //     throw new Error('Invalid activity level value')
  //   }
  // }

  private validateNumericInput(value: number, fieldName: string): void {
    if (typeof value !== 'number' || isNaN(value) || value <= 0) {
      throw new Error(`Invalid ${fieldName} value`)
    }
  }
}
