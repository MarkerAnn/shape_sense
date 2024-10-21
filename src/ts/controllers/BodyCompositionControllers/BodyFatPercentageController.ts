import { BaseController } from '../AbstractBaseController'
import { BodyFatPercentageView } from '../../views/BodyCompositionViews/BodyFatPercentageView'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { BodyFatPercentageFormData } from '../../types/FormTypes'

export class BodyFatPercentageController extends BaseController {
  protected view: BodyFatPercentageView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new BodyFatPercentageView()
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

  private handleCalculate(formData: BodyFatPercentageFormData): void {
    try {
      console.log('handleCalculate called with:', formData)
      this.formValidator.validateBodyFatPercentageFormData(formData)
      this.user.setData(formData)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private updateView(): void {
    const bodyFatPercentage = this.calculator.getBodyFatPercentage()
    console.log('Body fat percentage:', bodyFatPercentage)
    this.view.updateResults(bodyFatPercentage)
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
