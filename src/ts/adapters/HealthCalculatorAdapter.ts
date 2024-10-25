/* eslint-disable max-len */
import { IHealthCalculator } from '../interfaces/InterfaceHealthCalculator'
import { HealthCalculatorFactory } from 'body-measurements'
import { UserModel } from '../models/UserModel'
import { UnitSystem } from '../enums/UnitSystem'
import { Gender } from '../enums/Gender'
import { ActivityLevel } from '../enums/ActivityLevel'
import { BmiCategory } from '../enums/BmiCategory'
import { getHealthRisk } from '../enums/HealthRisk'
/* eslint-enable max-len */

/**
 * Adapter class for the HealthCalculator.
 * Implements the IHealthCalculator interface and adapts
 * the HealthCalculator to work with the UserModel.
 *
 * @class
 * @implements {IHealthCalculator}
 */
export class HealthCalculatorAdapter implements IHealthCalculator {
  private calculator: ReturnType<
    typeof HealthCalculatorFactory.createHealthCalculator
  >

  /**
   * Creates an instance of HealthCalculatorAdapter.
   * Initializes the calculator with the provided user model.
   *
   * @param {UserModel} user - The user model containing user data.
   */
  constructor(private userModel: UserModel) {
    this.calculator = this.createCalculator()
  }

  /**
   * Creates a new instance of HealthCalculator with the current user data.
   *
   * @private
   * @returns {HealthCalculator} The created HealthCalculator instance.
   */
  private createCalculator() {
    const userData = this.userModel.getData()
    return HealthCalculatorFactory.createHealthCalculator({
      unitSystem: userData.unitSystem as UnitSystem,
      weight: userData.weight,
      height: userData.height,
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

  /**
   * @inheritdoc
   */
  getBmi(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getBmi()
  }

  /**
   * @inheritdoc
   */
  getBmiType(): BmiCategory {
    this.calculator = this.createCalculator()
    const bmiTypeString = this.calculator.getBmiType()

    return this.convertBmiCategoryFromString(bmiTypeString)
  }

  /**
   * Converts a string to a BmiCategory enum value.
   *
   * @private
   * @param {string} bmiType - The BMI type as a string.
   * @returns {BmiCategory} The BMI type as an enum value.
   */
  private convertBmiCategoryFromString(bmiType: string): BmiCategory {
    const normalizedType = bmiType.toLowerCase().trim()
    for (const [key, value] of Object.entries(BmiCategory)) {
      if (value.toLowerCase() === normalizedType) {
        return BmiCategory[key as keyof typeof BmiCategory]
      }
    }
    throw new Error(`Invalid BMI category: ${bmiType}`)
  }

  /**
   * @inheritdoc
   */
  getHealthRisk(): string {
    const healthRisk = getHealthRisk(this.getBmiType())
    return healthRisk
  }

  /**
   * @inheritdoc
   */
  getBmiPrime(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getBmiPrime()
  }

  /**
   * @inheritdoc
   */
  getIdealWeight(): [number, number] {
    this.calculator = this.createCalculator()
    return this.calculator.getIdealWeight()
  }

  /**
   * @inheritdoc
   */
  getBodyFatPercentage(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getBodyFatPercentage()
  }

  /**
   * @inheritdoc
   */
  getWaistToHipRatio(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getWaistToHipRatio()
  }

  /**
   * @inheritdoc
   */
  getWaistToHeightRatio(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getWaistToHeightRatio()
  }

  /**
   * @inheritdoc
   */
  getLeanBodyMass(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getLeanBodyMass()
  }

  /**
   * @inheritdoc
   */
  getBmrMifflinStJeor(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getBmrMifflinStJeor()
  }

  /**
   * @inheritdoc
   */
  getBmrHarrisBenedict(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getBmrHarrisBenedict()
  }

  /**
   * @inheritdoc
   */
  getTdeeMifflinStJeor(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getTdeeMifflinStJeor()
  }

  /**
   * @inheritdoc
   */
  getTdeeHarrisBenedict(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getTdeeHarrisBenedict()
  }

  /**
   * @inheritdoc
   */
  getCaloricSurplusOrDeficit(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getCaloricSurplusOrDeficit()
  }

  /**
   * @inheritdoc
   */
  getEstimatedWeightChangeWeekly(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getEstimatedWeightChangeWeekly()
  }

  /**
   * @inheritdoc
   */
  getEstimatedWeightChangeMonthly(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getEstimatedWeightChangeMonthly()
  }

  /**
   * @inheritdoc
   */
  getEstimateTimeToWeightGoal(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getEstimateTimeToWeightGoal()
  }

  /**
   * @inheritdoc
   */
  getCaloriesForWeightGoal(): number {
    this.calculator = this.createCalculator()
    return this.calculator.getCaloriesForWeightGoal()
  }
}
