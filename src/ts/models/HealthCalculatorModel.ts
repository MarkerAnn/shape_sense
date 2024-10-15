import { HealthCalculatorFactory } from 'body-measurements'

export class HealthCalculatorModel {
  private calculator: ReturnType<
    typeof HealthCalculatorFactory.createHealthCalculator
  >

  constructor(
    userData: Parameters<
      typeof HealthCalculatorFactory.createHealthCalculator
    >[0]
  ) {
    this.calculator = HealthCalculatorFactory.createHealthCalculator(userData)
  }

  // BMI
  getBmi(): number {
    return this.calculator.getBmi()
  }

  getBmiType(): string {
    return this.calculator.getBmiType()
  }

  getBmiPrime(): number {
    return this.calculator.getBmiPrime()
  }

  getIdealWeight(): [number, number] {
    return this.calculator.getIdealWeight()
  }

  // Body composition
  get getBodyFatPercentage(): number {
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
