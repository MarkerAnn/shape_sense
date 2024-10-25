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

/**
 * Service class for validating various forms related to health and fitness calculations.
 * Implements the IFormValidator interface.
 *
 * @class FormValidatorService
 * @implements {IFormValidator}
 */
export class FormValidatorService implements IFormValidator {
  private measurementValidator: MeasurementValidator
  private personalInfoValidator: PersonalInfoValidator
  private goalValidator: GoalValidator

  /**
   * Creates an instance of FormValidatorService.
   * Initializes the validators for measurements, personal information, and goals.
   */
  constructor() {
    this.measurementValidator = new MeasurementValidator()
    this.personalInfoValidator = new PersonalInfoValidator()
    this.goalValidator = new GoalValidator()
  }

  /**
   * Validates the data for the BMI form.
   * @param {IBmiFormData} formData - The data from the BMI form.
   * @throws Will throw an error if any of the form data is invalid.
   */
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

  /**
   * Validates the data for the Total Daily Energy Expenditure form.
   * @param {ITotalDailyEnergyExpenditureFormData} formData -
   * The data from the Total Daily Energy Expenditure form.
   * @throws Will throw an error if any of the form data is invalid.
   */
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

  /**
   * Validates the data for the Waist to Hip Ratio form.
   * @param {IWaistHipRatioFormData} formData - The data from the Waist to Hip Ratio form.
   * @throws Will throw an error if any of the form data is invalid.
   */
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

  /**
   * Validates the data for the Waist to Height Ratio form.
   * @param {IWaistHeightRatioFormData} formData - The data from the Waist to Height Ratio form.
   * @throws Will throw an error if any of the form data is invalid.
   */
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

  /**
   * Validates the data for the Body Fat Percentage form.
   * @param {IBodyFatPercentageFormData} formData - The data from the Body Fat Percentage form.
   * @throws Will throw an error if any of the form data is invalid.
   */
  validateIBodyFatPercentageFormData(
    formData: IBodyFatPercentageFormData
  ): void {
    this.personalInfoValidator.validateUnitSystem(formData.unitSystem)
    this.personalInfoValidator.validateGender(formData.gender)
    this.measurementValidator.validateHeight(
      formData.height,
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

  /**
   * Validates the data for the Basal Metabolic Rate form.
   * @param {IBasalMetabolicRateFormData} formData - The data from the Basal Metabolic Rate form.
   * @throws Will throw an error if any of the form data is invalid.
   */
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

  /**
   * Validates the data for the Calories Needed to Reach Weight Goal form.
   * @param {ICaloriesForWeightGoalFormData} formData - The data from the
   * Calories Needed to Reach Weight Goal form.
   * @throws Will throw an error if any of the form data is invalid.
   */
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

  /**
   * Validates the data for the Estimated Time to Reach Weight Goal form.
   * @param {IEstimateTimeToWeightGoalFormData} formData - The data from
   * the Estimated Time to Reach Weight Goal form.
   * @throws Will throw an error if any of the form data is invalid.
   */
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
