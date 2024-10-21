import { BaseController } from '../AbstractBaseController'
import { WaistToHeightRatioView } from '../../views/BodyCompositionViews/WaistToHeightRatioView'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { WaistHeightRatioFormData } from '../../types/FormTypes'

export class WaistToHeightRatioController extends BaseController {
  protected view: WaistToHeightRatioView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new WaistToHeightRatioView()
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

  private handleCalculate(formData: WaistHeightRatioFormData): void {
    try {
      console.log('handleCalculate called with:', formData)
      this.formValidator.validateWaistHeightRatioFormData(formData)
      this.user.setData(formData)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private updateView(): void {
    const ratio = this.calculator.getWaistToHeightRatio()
    console.log('Ratio:', ratio)
    this.view.updateResults(ratio)
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
