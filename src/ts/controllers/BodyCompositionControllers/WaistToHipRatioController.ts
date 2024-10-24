import { BaseController } from '../AbstractBaseController'
import { WaistToHipRatioView } from '../../views/BodyCompositionViews/WaistToHipRatioView'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { WaistHipRatioFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedWaistToHipRationResults } from '../../interfaces/FormattedResults'

export class WaistToHipRatioController extends BaseController {
  protected view: WaistToHipRatioView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new WaistToHipRatioView(this.getUnitSystemValue.bind(this))
    this.formValidator = new FormValidator()
  }

  init(container: HTMLElement): void {
    this.view.render(container)
    this.fillFormData(this.user.getData())
    this.bindFormEvents(this.handleCalculate.bind(this))
  }

  protected getUnitSystemValue(): UnitSystem {
    const userData = this.user.getData()
    return userData.unitSystem ?? UnitSystem.METRIC
  }

  protected handleCalculate(formData: FormData): void {
    try {
      const data = this.parseFormData(formData)
      this.formValidator.validateWaistToHipRatioFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  protected parseFormData(formData: FormData): WaistHipRatioFormData {
    const data: WaistHipRatioFormData = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      waist: parseFloat(formData.get('waist') as string),
      hip: parseFloat(formData.get('hip') as string),
    }
    return data
  }

  private updateView(): void {
    const waistToHipRatio = this.calculator.getWaistToHipRatio()

    const formattedResults: IFormattedWaistToHipRationResults = {
      waistToHipRatio: this.formatValue(waistToHipRatio),
    }
    this.view.updateResults(formattedResults)
  }

  private formatValue(value: number): string {
    return value.toFixed(2)
  }
}
