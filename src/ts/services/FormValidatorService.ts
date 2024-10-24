import { MeasurementValidator } from '../validators/MeasurementValidator'
import { PersonalInfoValidator } from '../validators/PersonalInfoValidator'
import { GoalValidator } from '../validators/GoalValidator'
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
import { Gender } from '../enums/Gender'
import { IFormValidator } from '../interfaces/InterfaceFormValidator'

export class FormValidatorService implements IFormValidator {
  private measurementValidator: MeasurementValidator
  private personalInfoValidator: PersonalInfoValidator
  private goalValidator: GoalValidator

  constructor() {
    this.measurementValidator = new MeasurementValidator()
    this.personalInfoValidator = new PersonalInfoValidator()
    this.goalValidator = new GoalValidator()
  }

  validateBmiFormData(formData: BmiFormData): void {
    this.personalInfoValidator.validateUnitSystem(formData.unitSystem)
    this.measurementValidator.validateWeight(
      formData.weight,
      formData.unitSystem
    )
    this.measurementValidator.validateHeight(
      formData.height,
      formData.unitSystem
    )
  }

  validateTotalDailyEnergyExpenditureFormData(
    formData: TotalDailyEnergyExpenditureFormData
  ): void {
    this.personalInfoValidator.validateUnitSystem(formData.unitSystem)
    this.personalInfoValidator.validateGender(formData.gender)
    this.measurementValidator.validateWeight(
      formData.weight,
      formData.unitSystem
    )
    this.measurementValidator.validateHeight(
      formData.height,
      formData.unitSystem
    )
    this.personalInfoValidator.validateAge(formData.age)
    this.personalInfoValidator.validateActivityLevel(formData.activityLevel)
  }

  validateWaistToHipRatioFormData(formData: WaistHipRatioFormData): void {
    this.personalInfoValidator.validateUnitSystem(formData.unitSystem)
    this.measurementValidator.validateBodyMeasurement(
      formData.waist,
      'waist',
      formData.unitSystem
    )
    this.measurementValidator.validateBodyMeasurement(
      formData.hip,
      'hip',
      formData.unitSystem
    )
  }

  validateWaistHeightRatioFormData(formData: WaistHeightRatioFormData): void {
    this.personalInfoValidator.validateUnitSystem(formData.unitSystem)
    this.measurementValidator.validateBodyMeasurement(
      formData.waist,
      'waist',
      formData.unitSystem
    )
    this.measurementValidator.validateHeight(
      formData.height,
      formData.unitSystem
    )
  }

  validateBodyFatPercentageFormData(formData: BodyFatPercentageFormData): void {
    this.personalInfoValidator.validateUnitSystem(formData.unitSystem)
    this.personalInfoValidator.validateGender(formData.gender)
    this.measurementValidator.validateWeight(
      formData.weight,
      formData.unitSystem
    )
    this.measurementValidator.validateBodyMeasurement(
      formData.waist,
      'waist',
      formData.unitSystem
    )
    this.measurementValidator.validateBodyMeasurement(
      formData.neck,
      'neck',
      formData.unitSystem
    )
    if (formData.gender === Gender.FEMALE && formData.hip !== undefined) {
      this.measurementValidator.validateBodyMeasurement(
        formData.hip,
        'hip',
        formData.unitSystem
      )
    }
  }

  validateBasalMetabolicRateFormData(
    formData: BasalMetabolicRateFormData
  ): void {
    this.personalInfoValidator.validateUnitSystem(formData.unitSystem)
    this.personalInfoValidator.validateGender(formData.gender)
    this.measurementValidator.validateWeight(
      formData.weight,
      formData.unitSystem
    )
    this.measurementValidator.validateHeight(
      formData.height,
      formData.unitSystem
    )
    this.personalInfoValidator.validateAge(formData.age)
  }

  validateCaloriesForWeightGoalFormData(
    formData: CaloriesForWeightGoalFormData
  ): void {
    this.personalInfoValidator.validateUnitSystem(formData.unitSystem)
    this.personalInfoValidator.validateGender(formData.gender)
    this.measurementValidator.validateWeight(
      formData.weight,
      formData.unitSystem
    )
    this.measurementValidator.validateHeight(
      formData.height,
      formData.unitSystem
    )
    this.personalInfoValidator.validateAge(formData.age)
    this.personalInfoValidator.validateActivityLevel(formData.activityLevel)
    this.goalValidator.validateWeightGoal(
      formData.weightGoal,
      formData.unitSystem
    )
    this.goalValidator.validateWeeksToWeightGoal(formData.weeksToWeightGoal)
  }

  validateEstimateTimeToWeightGoalFormData(
    formData: EstimateTimeToWeightGoalFormData
  ): void {
    this.personalInfoValidator.validateUnitSystem(formData.unitSystem)
    this.personalInfoValidator.validateGender(formData.gender)
    this.personalInfoValidator.validateActivityLevel(formData.activityLevel)
    this.measurementValidator.validateWeight(
      formData.weight,
      formData.unitSystem
    )
    this.measurementValidator.validateHeight(
      formData.height,
      formData.unitSystem
    )
    this.personalInfoValidator.validateAge(formData.age)
    this.goalValidator.validateDailyCalories(formData.dailyCalories)
    this.goalValidator.validateWeightGoal(
      formData.weightGoal,
      formData.unitSystem
    )
  }
}
