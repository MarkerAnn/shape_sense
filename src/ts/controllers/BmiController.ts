import { BmiView } from '../views/Bmiview'
import { BmiFormData } from '../types/FormTypes'
import { UserModel } from '../models/UserModel'
import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
import { BaseController } from './AbstractBaseController'
import { FormValidator } from '../utils/FormValidator'

export class BmiController extends BaseController {
  protected view: BmiView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new BmiView()
    this.formValidator = new FormValidator()
  }

  init(container: HTMLElement): void {
    this.view.render(container)
    this.fillFormWithUserData()
    this.view.bindCalculateEvent(this.handleCalculate.bind(this))
    this.view.bindResetEvent(this.handleReset.bind(this))
  }

  protected fillFormWithUserData(): void {
    const userData = this.user.getData()
    this.view.fillForm(userData)
  }

  private handleCalculate(formData: BmiFormData): void {
    try {
      this.formValidator.validateBmiFormData(formData)
      this.user.setData(formData)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  // TODO: Delete this if using the FormValidator class
  // private validateFormData(formData: BmiFormData): void {
  //   this.validateNumericInput(formData.height, 'height')
  //   this.validateNumericInput(formData.weight, 'weight')
  // }

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
