import { BmiCategory } from '../enums/BmiCategory'
export interface InterfaceHealthCalculator {
  getBmi(): number
  getBmiType(): BmiCategory
  getBmiPrime(): number
  getIdealWeight(): [number, number]
  getWaistToHipRatio(): number
  getWaistToHeightRatio(): number
  getBodyFatPercentage(): number
  getLeanBodyMass(): number
  getBmrHarrisBenedict(): number
  getBmrMifflinStJeor(): number
  getTdeeHarrisBenedict(): number
  getTdeeMifflinStJeor(): number
  getCaloricSurplusOrDeficit(): number
  getEstimatedWeightChangeWeekly(): number
  getEstimatedWeightChangeMonthly(): number
  getEstimateTimeToWeightGoal(): number
  getCaloriesForWeightGoal(): number
}
