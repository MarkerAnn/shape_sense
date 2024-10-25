/* eslint-disable max-len */
import { BaseController } from '../AbstractBaseController'
import { WaistToHeightRatioView } from '../../views/BodyCompositionViews/WaistToHeightRatioView'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { IFormValidator } from '../../interfaces/InterfaceFormValidator'
import { IWaistHeightRatioFormData } from '../../interfaces/InterfaceForms'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedWaistToHeightRatioResults } from '../../interfaces/FormattedResults'
/* eslint-enable max-len */

/**
 * Controller for handling the calculation of Waist to Height Ratio.
 * Extends the BaseController to provide specific functionality for this calculation.
 *
 * @class
 * @extends {BaseController}
 */
export class WaistToHeightRatioController extends BaseController {
  protected view: WaistToHeightRatioView

  /**
   * Creates an instance of WaistToHeightRatioController.
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
    this.view = new WaistToHeightRatioView(this.getUnitSystemValue.bind(this))
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
      this.formValidator.validateIWaistHeightRatioFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): IWaistHeightRatioFormData {
    const data: IWaistHeightRatioFormData = {
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
