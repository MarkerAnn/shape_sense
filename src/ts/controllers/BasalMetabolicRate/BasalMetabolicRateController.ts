/* eslint-disable max-len */
import { BaseController } from '../AbstractBaseController'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { BasalMetabolicRateView } from '../../views/BasalMetabolicRateViews/BasalMetabolicRateView'
import { IFormValidator } from '../../interfaces/InterfaceFormValidator'
import { IBasalMetabolicRateFormData } from '../../interfaces/InterfaceForms'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'
import { IFormatBasaMetabolicRateResults } from '../../interfaces/FormattedResults'
/* eslint-enable max-len */

/**
 * Controller for handling the calculation of Basal Metabolic Rate (BMR).
 * Extends the BaseController to provide specific functionality for this calculation.
 *
 * @class
 * @extends {BaseController}
 */
export class BasalMetabolicRateController extends BaseController {
  protected view: BasalMetabolicRateView

  /**
   * Creates an instance of BasalMetabolicRateController.
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
    this.view = new BasalMetabolicRateView(this.getUnitSystemValue.bind(this))
  }

  /**
   * @inheritdoc
   */
  init(container: HTMLElement): void {
    this.view.render(container)
    this.fillFormData(this.user.getData())
    this.bindFormEvents(this.handleCalculate.bind(this))
  }

  /**
   * @inheritdoc
   */
  protected getUnitSystemValue(): UnitSystem {
    const userData = this.user.getData()
    return userData.unitSystem ?? UnitSystem.METRIC
  }

  /**
   * @inheritdoc
   */
  protected handleCalculate(formData: FormData): void {
    try {
      const data = this.parseFormData(formData)
      this.formValidator.validateIBasalMetabolicRateFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): IBasalMetabolicRateFormData {
    const data: IBasalMetabolicRateFormData = {
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
