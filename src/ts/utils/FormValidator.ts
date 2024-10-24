import { UnitSystem } from '../enums/UnitSystem'
import { Gender } from '../enums/Gender'
import { ActivityLevel } from '../enums/ActivityLevel'
import {
  BmiFormData,
  WaistHeightRatioFormData,
  WaistHipRatioFormData,
  BodyFatPercentageFormData,
  BasalMetabolicRateFormData,
  TotalDailyEnergyExpenditureFormData,
  CaloriesForWeightGoalFormData,
  EstimateTimeToWeightGoalFormData,
} from '../types/FormTypes'

interface IConversionConfigurate {
  min: number
  max: number
  shouldConvert: boolean
  conversionFactor: number
}

interface IRangeValidationConfigurate {
  value: number
  min: number
  max: number
  name: string
  unit: string
}

export class FormValidator {
  private readonly CONVERSION_FACTORS = {
    POUNDS: 2.20462, // kg till pounds
    FEET: 3.28084, // meter till feet
    INCHES: 1 / 2.54, // cm till inches
  } as const

  private readonly UNITS = {
    METRIC: {
      WEIGHT: 'kg',
      HEIGHT: 'm',
      MEASUREMENT: 'cm',
    },
    IMPERIAL: {
      WEIGHT: 'lbs',
      HEIGHT: 'ft',
      MEASUREMENT: 'inches',
    },
  } as const

  private readonly LIMITS = {
    weight: {
      min: 20, // kg
      max: 500, // kg
    },
    height: {
      min: 0.5, // meter
      max: 2.5, // meter
    },
    age: {
      min: 18,
      max: 120,
    },
    waist: {
      min: 40, // cm
      max: 200, // cm
    },
    hip: {
      min: 50, // cm
      max: 200, // cm
    },
    neck: {
      min: 20, // cm
      max: 80, // cm
    },
    calories: {
      min: 500,
      max: 10000,
    },
    weeksToWeightGoal: {
      min: 1,
      max: 520,
    },
  } as const

  private validateWeight(weight: number, unitSystem: UnitSystem): void {
    this.validateNumericInput(weight, 'Weight')
    const isImperial = unitSystem === UnitSystem.IMPERIAL
    const { min, max } = this.getConvertedLimits({
      min: this.LIMITS.weight.min,
      max: this.LIMITS.weight.max,
      shouldConvert: isImperial,
      conversionFactor: this.CONVERSION_FACTORS.POUNDS,
    })

    this.validateRange({
      value: weight,
      min,
      max,
      name: 'Weight',
      unit: isImperial ? this.UNITS.IMPERIAL.WEIGHT : this.UNITS.METRIC.WEIGHT,
    })
  }

  private validateHeight(height: number, unitSystem: UnitSystem): void {
    this.validateNumericInput(height, 'Height')
    const isImperial = unitSystem === UnitSystem.IMPERIAL
    const { min, max } = this.getConvertedLimits({
      min: this.LIMITS.height.min,
      max: this.LIMITS.height.max,
      shouldConvert: isImperial,
      conversionFactor: this.CONVERSION_FACTORS.FEET,
    })

    this.validateRange({
      value: height,
      min,
      max,
      name: 'Height',
      unit: isImperial ? this.UNITS.IMPERIAL.HEIGHT : this.UNITS.METRIC.HEIGHT,
    })
  }

  private validateBodyMeasurement(
    value: number,
    type: 'waist' | 'hip' | 'neck',
    unitSystem: UnitSystem
  ): void {
    this.validateNumericInput(value, type)
    const isImperial = unitSystem === UnitSystem.IMPERIAL
    const { min, max } = this.getConvertedLimits({
      min: this.LIMITS[type].min,
      max: this.LIMITS[type].max,
      shouldConvert: isImperial,
      conversionFactor: this.CONVERSION_FACTORS.INCHES,
    })

    this.validateRange({
      value,
      min,
      max,
      name: type.charAt(0).toUpperCase() + type.slice(1),
      unit: isImperial
        ? this.UNITS.IMPERIAL.MEASUREMENT
        : this.UNITS.METRIC.MEASUREMENT,
    })
  }

  private validateAge(age: number): void {
    this.validateNumericInput(age, 'Age')
    const limits = this.LIMITS.age
    if (age < limits.min || age > limits.max) {
      throw new Error(
        `Age must be between ${limits.min} and ${limits.max} years`
      )
    }
  }

  private validateWeightGoal(weightGoal: number, unitSystem: UnitSystem): void {
    this.validateNumericInput(weightGoal, 'Weight goal')

    const isImperial = unitSystem === UnitSystem.IMPERIAL
    const { min, max } = this.getConvertedLimits({
      min: this.LIMITS.weight.min,
      max: this.LIMITS.weight.max,
      shouldConvert: isImperial,
      conversionFactor: this.CONVERSION_FACTORS.POUNDS,
    })

    this.validateRange({
      value: weightGoal,
      min,
      max,
      name: 'Weight goal',
      unit: isImperial ? this.UNITS.IMPERIAL.WEIGHT : this.UNITS.METRIC.WEIGHT,
    })
  }

  private validateWeeksToWeightGoal(weeksToWeightGoal: number): void {
    this.validateNumericInput(weeksToWeightGoal, 'Weeks to weight goal')

    this.validateRange({
      value: weeksToWeightGoal,
      min: this.LIMITS.weeksToWeightGoal.min,
      max: this.LIMITS.weeksToWeightGoal.max,
      name: 'Weeks to goal',
      unit: 'weeks',
    })
  }

  private validateDailyCalories(dailyCalories: number): void {
    this.validateNumericInput(dailyCalories, 'Daily calories')

    this.validateRange({
      value: dailyCalories,
      min: this.LIMITS.calories.min,
      max: this.LIMITS.calories.max,
      name: 'Daily calories',
      unit: 'calories',
    })
  }

  private getConvertedLimits(config: IConversionConfigurate): {
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

  private validateRange(config: IRangeValidationConfigurate): void {
    const { value, min, max, name, unit } = config
    if (value < min || value > max) {
      throw new Error(`${name} must be between ${min} and ${max} ${unit}`)
    }
  }

  validateBmiFormData(formData: BmiFormData): void {
    this.validateUnitSystem(formData.unitSystem)
    this.validateWeight(formData.weight, formData.unitSystem)
    this.validateHeight(formData.height, formData.unitSystem)
  }

  validateTotalDailyEnergyExpenditureFormData(
    formData: TotalDailyEnergyExpenditureFormData
  ): void {
    this.validateUnitSystem(formData.unitSystem)
    this.validateGender(formData.gender)
    this.validateWeight(formData.weight, formData.unitSystem)
    this.validateHeight(formData.height, formData.unitSystem)
    this.validateAge(formData.age)
    this.validateActivityLevel(formData.activityLevel)
  }

  validateWaistToHipRatioFormData(formData: WaistHipRatioFormData): void {
    this.validateUnitSystem(formData.unitSystem)
    this.validateBodyMeasurement(formData.waist, 'waist', formData.unitSystem)
    this.validateBodyMeasurement(formData.hip, 'hip', formData.unitSystem)
  }

  validateWaistHeightRatioFormData(formData: WaistHeightRatioFormData): void {
    this.validateUnitSystem(formData.unitSystem)
    this.validateBodyMeasurement(formData.waist, 'waist', formData.unitSystem)
    this.validateHeight(formData.height, formData.unitSystem)
  }

  validateBodyFatPercentageFormData(formData: BodyFatPercentageFormData): void {
    this.validateUnitSystem(formData.unitSystem)
    this.validateGender(formData.gender)
    this.validateWeight(formData.weight, formData.unitSystem)
    this.validateBodyMeasurement(formData.waist, 'waist', formData.unitSystem)
    this.validateBodyMeasurement(formData.neck, 'neck', formData.unitSystem)
    if (formData.gender === Gender.FEMALE && formData.hip !== undefined) {
      this.validateBodyMeasurement(formData.hip, 'hip', formData.unitSystem)
    }
  }

  validateBasalMetabolicRateFormData(
    formData: BasalMetabolicRateFormData
  ): void {
    this.validateUnitSystem(formData.unitSystem)
    this.validateGender(formData.gender)
    this.validateWeight(formData.weight, formData.unitSystem)
    this.validateHeight(formData.height, formData.unitSystem)
    this.validateAge(formData.age)
  }

  validateCaloriesForWeightGoalFormData(
    formData: CaloriesForWeightGoalFormData
  ): void {
    this.validateUnitSystem(formData.unitSystem)
    this.validateGender(formData.gender)
    this.validateWeight(formData.weight, formData.unitSystem)
    this.validateHeight(formData.height, formData.unitSystem)
    this.validateAge(formData.age)
    this.validateActivityLevel(formData.activityLevel)
    this.validateWeightGoal(formData.weightGoal, formData.unitSystem)
    this.validateWeeksToWeightGoal(formData.weeksToWeightGoal)
  }

  validateEstimateTimeToWeightGoalFormData(
    formData: EstimateTimeToWeightGoalFormData
  ): void {
    this.validateUnitSystem(formData.unitSystem)
    this.validateGender(formData.gender)
    this.validateActivityLevel(formData.activityLevel)
    this.validateWeight(formData.weight, formData.unitSystem)
    this.validateHeight(formData.height, formData.unitSystem)
    this.validateAge(formData.age)
    this.validateWeightGoal(formData.weightGoal, formData.unitSystem)
    this.validateDailyCalories(formData.dailyCalories)
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

  private validateActivityLevel(activityLevel: ActivityLevel): void {
    if (!Object.values(ActivityLevel).includes(activityLevel)) {
      throw new Error('Invalid activity level value')
    }
  }

  private validateNumericInput(value: number, fieldName: string): void {
    if (typeof value !== 'number' || isNaN(value) || value <= 0) {
      throw new Error(`Invalid ${fieldName} value`)
    }
  }
}

// TODO: Bryt ut denna
// TODO: Plocka ut interface?
// TODO: UnitSystem som konstanter ovan, importera istället
