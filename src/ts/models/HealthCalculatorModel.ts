import { InterfaceHealthCalculator } from '../interfaces/InterfaceHealthCalculator'
import { HealthCalculatorAdapter } from '../adapters/HealthCalculatorAdapter'
import { UserModel } from './UserModel'
import { getHealthRisk } from '../enums/HealthRisk'
import { BmiCategory } from '../enums/BmiCategory'

export class HealthCalculatorModel implements InterfaceHealthCalculator {
  private calculator: InterfaceHealthCalculator

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
    const healthRisk = getHealthRisk(this.getBmiType())
    return healthRisk
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
