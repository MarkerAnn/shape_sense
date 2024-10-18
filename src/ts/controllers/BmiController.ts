import { BmiView } from '../views/Bmiview'
import { BmiFormData } from '../types/FormTypes'
import { UserModel } from '../models/UserModel'
import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
import { InterfaceController } from '../interfaces/InterfaceController'

export class BmiController implements InterfaceController {
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
    this.fillFormWithUserData()
    console.log(this.user.getData(), 'init')
    this.view.bindCalculateEvent(this.handleCalculate.bind(this))
    this.view.bindResetEvent(this.handleReset.bind(this))
  }

  private fillFormWithUserData(): void {
    const userData = this.user.getData()
    console.log(userData, 'construktor')
    this.view.fillForm(userData)
  }

  private handleCalculate(formData: BmiFormData): void {
    try {
      this.validateFormData(formData)
      this.user.updateData(formData)
      this.updateView()
      console.log(this.user.getData(), 'handleCalculate')
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
    const idealWeight = this.calculator.getIdealWeight()
    this.view.updateResults(bmi, bmiType, healthRisk, idealWeight)
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
