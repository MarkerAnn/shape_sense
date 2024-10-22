import { BmiView } from '../../views/Bmiview'
import { BmiFormData } from '../../types/FormTypes'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { BaseController } from '../AbstractBaseController'
import { FormValidator } from '../../utils/FormValidator'
import { UnitSystem } from '../../enums/UnitSystem'

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

  private handleCalculate(formData: FormData): void {
    try {
      const data = this.parseFormData(formData)
      this.formValidator.validateBmiFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): BmiFormData {
    return {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      weight: parseFloat(formData.get('weight') as string),
      height: parseFloat(formData.get('height') as string),
    }
  }

  private updateView(): void {
    const bmi = this.calculator.getBmi()
    const bmiType = this.calculator.getBmiType()
    const healthRisk = this.calculator.getHealthRisk()
    const idealWeight = this.calculator.getIdealWeight()

    this.view.updateResults({
      bmi,
      category: bmiType,
      healthRisk,
      idealWeight,
    })
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
