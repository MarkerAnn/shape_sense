import { BaseController } from '../AbstractBaseController'
import { WaistToHeightRatioView } from '../../views/BodyCompositionViews/WaistToHeightRatioView'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { WaistHeightRatioFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedWaistToHeightRatioResults } from '../../interfaces/FormattedResults'

export class WaistToHeightRatioController extends BaseController {
  protected view: WaistToHeightRatioView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new WaistToHeightRatioView(this.getUnitSystemValue.bind(this))
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

    const formattedData: IFormattedWaistToHeightRatioResults = {
      waistToHeightRatio: this.formatValue(waistToHeightRatio),
    }
    this.view.updateResults(formattedData)
  }

  private formatValue(value: number): string {
    return value.toFixed(2)
  }
}
