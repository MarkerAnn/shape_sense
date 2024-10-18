// src/adapters/HealthCalculatorAdapter.ts
import { HealthCalculatorFactory } from 'body-measurements'
import { InterfaceHealthCalculator } from '../interfaces/InterfaceHealthCalculator'
import { UserModel } from '../models/UserModel'
import { UnitSystem } from '../enums/UnitSystem'
import { Gender } from '../enums/Gender'
import { ActivityLevel } from '../enums/ActivityLevel'
import { BmiCategory } from '../enums/BmiCategory'
import { BmiCategoryConverter } from '../utils/BmiCategoryConverter'
import { getHealthRisk } from '../enums/HealthRisk'

export class HealthCalculatorAdapter implements InterfaceHealthCalculator {
  private calculator: ReturnType<
    typeof HealthCalculatorFactory.createHealthCalculator
  >

  constructor(private userModel: UserModel) {
    this.calculator = this.createCalculator()
  }

  private createCalculator() {
    const userData = this.userModel.getData()
    return HealthCalculatorFactory.createHealthCalculator({
      unitSystem: userData.unitSystem as UnitSystem,
      weight: userData.weight ?? 70,
      height: userData.height ?? 1.75,
      age: userData.age,
      gender: userData.gender as Gender,
      waist: userData.waist,
      hip: userData.hip,
      neck: userData.neck,
      activityLevel: userData.activityLevel as ActivityLevel,
      dailyCalories: userData.dailyCalories,
      weightGoal: userData.weightGoal,
      weeksToWeightGoal: userData.weeksToWeightGoal,
    })
  }

  getBmi(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getBmi()
  }

  getBmiType(): BmiCategory {
    this.calculator = this.createCalculator()
    const bmiTypeString = this.calculator.getBmiType()

    return BmiCategoryConverter.fromString(bmiTypeString)
  }

  getHealthRisk(): string {
    const healthRisk = getHealthRisk(this.getBmiType())
    return healthRisk
  }

  getBmiPrime(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getBmiPrime()
  }

  getIdealWeight(): [number, number] {
    this.calculator = this.createCalculator()
    return this.calculator.getIdealWeight()
  }

  getBodyFatPercentage(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getBodyFatPercentage()
  }

  getWaistToHipRatio(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getWaistToHipRatio()
  }

  getWaistToHeightRatio(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getWaistToHeightRatio()
  }

  getLeanBodyMass(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getLeanBodyMass()
  }

  getBmrMifflinStJeor(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getBmrMifflinStJeor()
  }

  getBmrHarrisBenedict(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getBmrHarrisBenedict()
  }

  getTdeeMifflinStJeor(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getTdeeMifflinStJeor()
  }

  getTdeeHarrisBenedict(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getTdeeHarrisBenedict()
  }

  getCaloricSurplusOrDeficit(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getCaloricSurplusOrDeficit()
  }

  getEstimatedWeightChangeWeekly(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getEstimatedWeightChangeWeekly()
  }

  getEstimatedWeightChangeMonthly(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getEstimatedWeightChangeMonthly()
  }

  getEstimateTimeToWeightGoal(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getEstimateTimeToWeightGoal()
  }

  getCaloriesForWeightGoal(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getCaloriesForWeightGoal()
  }
}
