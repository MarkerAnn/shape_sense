import { BaseController } from '../AbstractBaseController'
import { WaistToHeightRatioView } from '../../views/BodyCompositionViews/WaistToHeightRatioView'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { WaistHeightRatioFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'

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

  private handleCalculate(formData: FormData): void {
    try {
      console.log('handleCalculate called with:', formData)
      const data = this.parseFormData(formData)
      this.formValidator.validateWaistHeightRatioFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): WaistHeightRatioFormData {
    const data: WaistHeightRatioFormData = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      waist: parseFloat(formData.get('waist') as string),
      height: parseFloat(formData.get('height') as string),
    }
    return data
  }

  private updateView(): void {
    const waistToHeightRatio = this.calculator.getWaistToHeightRatio()
    this.view.updateResults(waistToHeightRatio)
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
