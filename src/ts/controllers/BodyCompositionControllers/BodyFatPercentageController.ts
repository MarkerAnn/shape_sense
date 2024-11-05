// eslint-disable-next-line max-len
import { BodyFatPercentageView } from '../../views/BodyCompositionViews/BodyFatPercentageView'
import { BaseController } from '../AbstractBaseController'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { IFormValidator } from '../../interfaces/InterfaceFormValidator'
import { IBodyFatPercentageFormData } from '../../interfaces/InterfaceForms'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'
// eslint-disable-next-line max-len
import { IFormattedBodyFatPercentageResults } from '../../interfaces/FormattedResults'
import { UnitConverter } from '../../utils/unitConverter'

/**
 * Controller for handling the calculation of Body Fat Percentage.
 * Extends the BaseController to provide specific functionality for this calculation.
 *
 * @class
 * @extends {BaseController}
 */
export class BodyFatPercentageController extends BaseController {
  protected view: BodyFatPercentageView

  /**
   * Creates an instance of BodyFatPercentageController.
   * Initializes the view and binds the unit system value method.
   *
   * @param {UserModel} user - The user model containing user data.
   * @param {HealthCalculatorModel} calculator - The health calculator model.
   * @param {IFormValidator} formValidator - The form validator service.
   */
  constructor(
    user: UserModel,
    calculator: HealthCalculatorModel,
    formValidator: IFormValidator
  ) {
    super(user, calculator, formValidator)
    this.view = new BodyFatPercentageView(this.getUnitSystemValue.bind(this))
  }

  /**
   * @inheritdoc
   */
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

  /**
   * @inheritdoc
   */
  protected getUnitSystemValue(): UnitSystem {
    const unitSelect = document.querySelector(
      'select#unitSystem'
    ) as HTMLSelectElement
    if (unitSelect) {
      return unitSelect.value as UnitSystem
    }
    return UnitSystem.METRIC
  }

  /**
   * @inheritdoc
   */
  protected handleCalculate(formData: FormData): void {
    try {
      const data = this.parseFormData(formData)
      this.formValidator.validateIBodyFatPercentageFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): IBodyFatPercentageFormData {
    const data: IBodyFatPercentageFormData = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      gender: formData.get('gender') as Gender,
      weight: parseFloat(formData.get('weight') as string),
      height: parseFloat(formData.get('height') as string),
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
    const isImperial = UnitConverter.isImperial(this.getUnitSystemValue())

    const formattedResults: IFormattedBodyFatPercentageResults = {
      bodyFatPercentage: UnitConverter.formatBodyFat(bodyFatPercentage),
      leanBodyMass: UnitConverter.formatLeanMass(leanBodyMass, isImperial),
    }
    this.view.updateResults(formattedResults)
  }

  // private formatBodyFatPercentage(value: number): string {
  //   return `${value.toFixed(2)} %`
  // }
  // private formatLeanBodyMass(value: number): string {
  //   return `${value.toFixed(2)} kg`
  // }
}
