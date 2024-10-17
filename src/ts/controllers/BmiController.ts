import { BmiView } from '../views/Bmiview'
import { BmiFormData } from '../types/FormTypes'
import { UserModel } from '../models/UserModel'
import { HealthCalculatorModel } from '../models/HealthCalculatorModel'

export class BmiController {
  private view: BmiView
  private user: UserModel
  private calculator: HealthCalculatorModel

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    this.user = user
    this.calculator = calculator
    this.view = new BmiView()
  }

  init(container: HTMLElement): void {
    this.view.render(container)
    this.view.bindCalculateEvent(this.handleCalculate.bind(this))
    this.view.bindResetEvent(this.handleReset.bind(this))
  }

  private handleCalculate(formData: BmiFormData): void {
    try {
      this.validateFormData(formData)
      this.user.updateData(formData)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.view.showError((error as Error).message)
    }
  }

  private validateFormData(formData: BmiFormData): void {
    if (isNaN(formData.height) || formData.height <= 0) {
      throw new Error('Invalid height value')
    }
    if (isNaN(formData.weight) || formData.weight <= 0) {
      throw new Error('Invalid weight value')
    }
  }

  private updateView(): void {
    const bmi = this.calculator.getBmi()
    const bmiType = this.calculator.getBmiType()
    const healthRisk = this.calculator.getHealthRisk()
    this.view.updateResults(bmi, bmiType, healthRisk)
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
