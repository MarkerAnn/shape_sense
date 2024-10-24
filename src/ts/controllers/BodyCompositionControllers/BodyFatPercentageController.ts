// eslint-disable-next-line max-len
import { BodyFatPercentageView } from '../../views/BodyCompositionViews/BodyFatPercentageView'
import { BaseController } from '../AbstractBaseController'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { BodyFatPercentageFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'
// eslint-disable-next-line max-len
import { IFormattedBodyFatPercentageResults } from '../../interfaces/FormattedResults'

export class BodyFatPercentageController extends BaseController {
  protected view: BodyFatPercentageView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new BodyFatPercentageView(this.getUnitSystemValue.bind(this))
    this.formValidator = new FormValidator()
  }

  init(container: HTMLElement): void {
    this.view.render(container)

    this.view.bindGenderChange(this.handleGenderChange.bind(this))

    const userData = this.user.getData()
    this.fillFormData(userData)

    if (userData.gender) {
      this.handleGenderChange(userData.gender)
    } else {
      this.view.toggleHipInputVisibility(false)
    }

    this.bindFormEvents(this.handleCalculate.bind(this))
  }

  private handleGenderChange(gender: Gender): void {
    const isFemale = gender === Gender.FEMALE
    this.view.toggleHipInputVisibility(isFemale)

    if (!isFemale) {
      this.view.clearHipInput()
    }
  }

  protected getUnitSystemValue(): UnitSystem {
    const userData = this.user.getData()
    return userData.unitSystem ?? UnitSystem.METRIC
  }

  protected handleCalculate(formData: FormData): void {
    try {
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

    const formattedResults: IFormattedBodyFatPercentageResults = {
      bodyFatPercentage: this.formatBodyFatPercentage(bodyFatPercentage),
      leanBodyMass: this.formatLeanBodyMass(leanBodyMass),
    }
    this.view.updateResults(formattedResults)
  }

  private formatBodyFatPercentage(value: number): string {
    return `${value.toFixed(2)} %`
  }
  private formatLeanBodyMass(value: number): string {
    return `${value.toFixed(2)} kg`
  }
}
