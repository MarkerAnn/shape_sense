import { BaseController } from '../AbstractBaseController'
import { BodyFatPercentageView } from '../../views/BodyCompositionViews/BodyFatPercentageView'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { BodyFatPercentageFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'

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

  private handleCalculate(formData: FormData): void {
    try {
      console.log('handleCalculate called with:', formData)
      const data = this.parseFormData(formData)
      this.formValidator.validateBodyFatPercentageFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): BodyFatPercentageFormData {
    const data: BodyFatPercentageFormData = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      gender: formData.get('gender') as Gender,
      weight: parseFloat(formData.get('weight') as string),
      waist: parseFloat(formData.get('waist') as string),
      neck: parseFloat(formData.get('neck') as string),
    }

    if (data.gender === Gender.FEMALE) {
      const hipValue = formData.get('hip')
      if (hipValue) {
        data.hip = parseFloat(hipValue as string)
      } else {
        throw new Error('Hip measurement is required for females.')
      }
    }

    return data
  }

  private updateView(): void {
    const bodyFatPercentage = this.calculator.getBodyFatPercentage()
    const leanBodyMass = this.calculator.getLeanBodyMass()
    this.view.updateResults({ bodyFatPercentage, leanBodyMass })
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
