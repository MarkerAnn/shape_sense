import { BmiCategory } from '../enums/BmiCategory'
export interface IHealthCalculator {
  getBmi(): number
  getBmiType(): BmiCategory
  getHealthRisk(): string
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
