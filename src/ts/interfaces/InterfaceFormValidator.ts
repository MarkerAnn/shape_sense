import {
  IBmiFormData,
  ITotalDailyEnergyExpenditureFormData,
  IWaistHipRatioFormData,
  IWaistHeightRatioFormData,
  IBodyFatPercentageFormData,
  IBasalMetabolicRateFormData,
  ICaloriesForWeightGoalFormData,
  IEstimateTimeToWeightGoalFormData,
} from './InterfaceForms'

/**
 * Interface representing a form validator.
 * Provides methods to validate various forms related to health and fitness calculations.
 *
 * @interface IFormValidator
 */
export interface IFormValidator {
  /**
   * Validates the data for the BMI form.
   * @param {IBmiFormData} formData - The data from the BMI form.
   * @throws Will throw an error if any of the form data is invalid.
   */
  validateIBmiFormData(formData: IBmiFormData): void

  /**
   * Validates the data for the Total Daily Energy Expenditure form.
   * @param {ITotalDailyEnergyExpenditureFormData} formData - The data from the
   * Total Daily Energy Expenditure form.
   * @throws Will throw an error if any of the form data is invalid.
   */
  validateITotalDailyEnergyExpenditureFormData(
    formData: ITotalDailyEnergyExpenditureFormData
  ): void

  /**
   * Validates the data for the Waist to Hip Ratio form.
   * @param {IWaistHipRatioFormData} formData - The data from the Waist to Hip Ratio form.
   * @throws Will throw an error if any of the form data is invalid.
   */
  validateWaistToHipRatioFormData(formData: IWaistHipRatioFormData): void

  /**
   * Validates the data for the Waist to Height Ratio form.
   * @param {IWaistHeightRatioFormData} formData - The data from the Waist to Height Ratio form.
   * @throws Will throw an error if any of the form data is invalid.
   */
  validateIWaistHeightRatioFormData(formData: IWaistHeightRatioFormData): void

  /**
   * Validates the data for the Body Fat Percentage form.
   * @param {IBodyFatPercentageFormData} formData - The data from the Body Fat Percentage form.
   * @throws Will throw an error if any of the form data is invalid.
   */
  validateIBodyFatPercentageFormData(formData: IBodyFatPercentageFormData): void

  /**
   * Validates the data for the Basal Metabolic Rate form.
   * @param {IBasalMetabolicRateFormData} formData - The data from the Basal Metabolic Rate form.
   * @throws Will throw an error if any of the form data is invalid.
   */
  validateIBasalMetabolicRateFormData(
    formData: IBasalMetabolicRateFormData
  ): void

  /**
   * Validates the data for the Calories Needed to Reach Weight Goal form.
   * @param {ICaloriesForWeightGoalFormData} formData - The data from the
   * Calories Needed to Reach Weight Goal form.
   * @throws Will throw an error if any of the form data is invalid.
   */
  validateICaloriesForWeightGoalFormData(
    formData: ICaloriesForWeightGoalFormData
  ): void

  /**
   * Validates the data for the Estimated Time to Reach Weight Goal form.
   * @param {IEstimateTimeToWeightGoalFormData} formData - The data from the
   * Estimated Time to Reach Weight Goal form.
   * @throws Will throw an error if any of the form data is invalid.
   */
  validateIEstimateTimeToWeightGoalFormData(
    formData: IEstimateTimeToWeightGoalFormData
  ): void
}
