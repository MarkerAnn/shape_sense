import { BaseController } from '../AbstractBaseController'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { BasalMetabolicRateView } from '../../views/BasalMetabolicRateViews/BasalMetabolicRateView'
import { IFormValidator } from '../../interfaces/InterfaceFormValidator'
import { BasalMetabolicRateFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'
import { IFormatBasaMetabolicRateResults } from '../../interfaces/FormattedResults'

export class BasalMetabolicRateController extends BaseController {
  protected view: BasalMetabolicRateView

  constructor(
    user: UserModel,
    calculator: HealthCalculatorModel,
    formValidator: IFormValidator
  ) {
    super(user, calculator, formValidator)
    this.view = new BasalMetabolicRateView(this.getUnitSystemValue.bind(this))
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
      this.formValidator.validateBasalMetabolicRateFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): BasalMetabolicRateFormData {
    const data: BasalMetabolicRateFormData = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      gender: formData.get('gender') as Gender,
      weight: parseFloat(formData.get('weight') as string),
      height: parseFloat(formData.get('height') as string),
      age: parseFloat(formData.get('age') as string),
    }

    if (!Object.values(Gender).includes(data.gender)) {
      throw new Error('Invalid gender value')
    }

    return data
  }

  private updateView(): void {
    const basalMetabolicRateHarrisBenedict =
      this.calculator.getBmrHarrisBenedict()
    const basalMetabolicRateMifflinStJeor =
      this.calculator.getBmrMifflinStJeor()

    const formattedResults: IFormatBasaMetabolicRateResults = {
      basalMetabolicRateHarrisBenedict: this.formatValue(
        basalMetabolicRateHarrisBenedict
      ),
      basalMetabolicRateMifflinStJeor: this.formatValue(
        basalMetabolicRateMifflinStJeor
      ),
    }
    this.view.updateResults(formattedResults)
  }

  private formatValue(value: number): string {
    return `${value.toFixed(0)} kcal/day`
  }
}
