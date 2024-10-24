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

export interface IFormValidator {
  validateIBmiFormData(formData: IBmiFormData): void
  validateITotalDailyEnergyExpenditureFormData(
    formData: ITotalDailyEnergyExpenditureFormData
  ): void
  validateWaistToHipRatioFormData(formData: IWaistHipRatioFormData): void
  validateIWaistHeightRatioFormData(formData: IWaistHeightRatioFormData): void
  validateIBodyFatPercentageFormData(formData: IBodyFatPercentageFormData): void
  validateIBasalMetabolicRateFormData(
    formData: IBasalMetabolicRateFormData
  ): void
  validateICaloriesForWeightGoalFormData(
    formData: ICaloriesForWeightGoalFormData
  ): void
  validateIEstimateTimeToWeightGoalFormData(
    formData: IEstimateTimeToWeightGoalFormData
  ): void
}
