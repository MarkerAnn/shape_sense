import { BaseController } from '../AbstractBaseController'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { BasalMetabolicRateView } from '../../views/BasalMetabolicRateViews/BasalMetabolicRateView'
import { FormValidator } from '../../utils/FormValidator'
import { BasalMetabolicRateFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'

export class BasalMetabolicRateController extends BaseController {
  protected view: BasalMetabolicRateView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new BasalMetabolicRateView()
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
    return data
  }

  private updateView(): void {
    const basalMetabolicRateHarrisBenedict =
      this.calculator.getBmrHarrisBenedict()
    const basalMetabolicRateMifflinStJeor =
      this.calculator.getBmrMifflinStJeor()
    this.view.updateResults({
      basalMetabolicRateHarrisBenedict,
      basalMetabolicRateMifflinStJeor,
    })
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
