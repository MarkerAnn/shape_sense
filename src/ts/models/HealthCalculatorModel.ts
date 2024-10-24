import { IHealthCalculator } from '../interfaces/InterfaceHealthCalculator'
import { HealthCalculatorAdapter } from '../adapters/HealthCalculatorAdapter'
import { UserModel } from './UserModel'

import { BmiCategory } from '../enums/BmiCategory'

export class HealthCalculatorModel implements IHealthCalculator {
  private calculator: IHealthCalculator

  constructor(userModel: UserModel) {
    this.calculator = new HealthCalculatorAdapter(userModel)
  }

  // BMI
  getBmi(): number {
    return this.calculator.getBmi()
  }

  getBmiType(): BmiCategory {
    return this.calculator.getBmiType()
  }

  getHealthRisk(): string {
    return this.calculator.getHealthRisk()
  }

  getBmiPrime(): number {
    return this.calculator.getBmiPrime()
  }

  getIdealWeight(): [number, number] {
    return this.calculator.getIdealWeight()
  }

  // Body composition
  getBodyFatPercentage(): number {
    return this.calculator.getBodyFatPercentage()
  }

  getWaistToHipRatio(): number {
    return this.calculator.getWaistToHipRatio()
  }

  getWaistToHeightRatio(): number {
    return this.calculator.getWaistToHeightRatio()
  }

  getLeanBodyMass(): number {
    return this.calculator.getLeanBodyMass()
  }

  // BMR
  getBmrMifflinStJeor(): number {
    return this.calculator.getBmrMifflinStJeor()
  }

  getBmrHarrisBenedict(): number {
    return this.calculator.getBmrHarrisBenedict()
  }

  // TDEE
  getTdeeMifflinStJeor(): number {
    return this.calculator.getTdeeMifflinStJeor()
  }

  getTdeeHarrisBenedict(): number {
    return this.calculator.getTdeeHarrisBenedict()
  }

  // Calorie
  getCaloricSurplusOrDeficit(): number {
    return this.calculator.getCaloricSurplusOrDeficit()
  }

  getEstimatedWeightChangeWeekly(): number {
    return this.calculator.getEstimatedWeightChangeWeekly()
  }

  getEstimatedWeightChangeMonthly(): number {
    return this.calculator.getEstimatedWeightChangeMonthly()
  }

  getCaloriesForWeightGoal(): number {
    return this.calculator.getCaloriesForWeightGoal()
  }

  getEstimateTimeToWeightGoal(): number {
    return this.calculator.getEstimateTimeToWeightGoal()
  }
}
