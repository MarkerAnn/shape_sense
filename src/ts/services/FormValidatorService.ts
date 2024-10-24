import { MeasurementValidator } from '../validators/MeasurementValidator'
import { PersonalInfoValidator } from '../validators/PersonalInfoValidator'
import { GoalValidator } from '../validators/GoalValidator'
import {
  IBmiFormData,
  IWaistHeightRatioFormData,
  IWaistHipRatioFormData,
  IBodyFatPercentageFormData,
  IBasalMetabolicRateFormData,
  ITotalDailyEnergyExpenditureFormData,
  ICaloriesForWeightGoalFormData,
  IEstimateTimeToWeightGoalFormData,
} from '../interfaces/InterfaceForms'
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

  validateIBmiFormData(formData: IBmiFormData): void {
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

  validateITotalDailyEnergyExpenditureFormData(
    formData: ITotalDailyEnergyExpenditureFormData
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

  validateWaistToHipRatioFormData(formData: IWaistHipRatioFormData): void {
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

  validateIWaistHeightRatioFormData(formData: IWaistHeightRatioFormData): void {
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

  validateIBodyFatPercentageFormData(
    formData: IBodyFatPercentageFormData
  ): void {
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

  validateIBasalMetabolicRateFormData(
    formData: IBasalMetabolicRateFormData
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

  validateICaloriesForWeightGoalFormData(
    formData: ICaloriesForWeightGoalFormData
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

  validateIEstimateTimeToWeightGoalFormData(
    formData: IEstimateTimeToWeightGoalFormData
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
