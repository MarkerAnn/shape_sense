import {
  BmiFormData,
  TotalDailyEnergyExpenditureFormData,
  WaistHipRatioFormData,
  WaistHeightRatioFormData,
  BodyFatPercentageFormData,
  BasalMetabolicRateFormData,
  CaloriesForWeightGoalFormData,
  EstimateTimeToWeightGoalFormData,
} from '../types/FormTypes'

export interface IFormValidator {
  validateBmiFormData(formData: BmiFormData): void
  validateTotalDailyEnergyExpenditureFormData(
    formData: TotalDailyEnergyExpenditureFormData
  ): void
  validateWaistToHipRatioFormData(formData: WaistHipRatioFormData): void
  validateWaistHeightRatioFormData(formData: WaistHeightRatioFormData): void
  validateBodyFatPercentageFormData(formData: BodyFatPercentageFormData): void
  validateBasalMetabolicRateFormData(formData: BasalMetabolicRateFormData): void
  validateCaloriesForWeightGoalFormData(
    formData: CaloriesForWeightGoalFormData
  ): void
  validateEstimateTimeToWeightGoalFormData(
    formData: EstimateTimeToWeightGoalFormData
  ): void
}
