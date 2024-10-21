import { BaseController } from '../AbstractBaseController'
import { WaistToHipRatioView } from '../../views/BodyCompositionViews/WaistToHipRatioView'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { WaistHipRatioFormData } from '../../types/FormTypes'

export class WaistToHipRatioController extends BaseController {
  protected view: WaistToHipRatioView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new WaistToHipRatioView()
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

  private handleCalculate(formData: WaistHipRatioFormData): void {
    try {
      console.log('handleCalculate called with:', formData)
      this.formValidator.validateWaistToHipRatioFormData(formData)
      this.user.setData(formData)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private updateView(): void {
    const ratio = this.calculator.getWaistToHipRatio()
    console.log('Ratio:', ratio)
    this.view.updateResults(ratio)
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
