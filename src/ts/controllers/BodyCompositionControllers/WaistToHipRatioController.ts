import { BaseController } from '../AbstractBaseController'
import { WaistToHipRatioView } from '../../views/BodyCompositionViews/WaistToHipRatioView'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { WaistHipRatioFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'

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

  private handleCalculate(formData: FormData): void {
    try {
      console.log('handleCalculate called with:', formData)
      const data = this.parseFormData(formData)
      this.formValidator.validateWaistToHipRatioFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): WaistHipRatioFormData {
    const data: WaistHipRatioFormData = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      waist: parseFloat(formData.get('waist') as string),
      hip: parseFloat(formData.get('hip') as string),
    }
    return data
  }

  private updateView(): void {
    const waistToHipRatio = this.calculator.getWaistToHipRatio()
    console.log('Ratio:', waistToHipRatio)
    this.view.updateResults(waistToHipRatio)
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
