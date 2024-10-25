/* eslint-disable max-len */
import { BaseController } from '../AbstractBaseController'
import { WaistToHipRatioView } from '../../views/BodyCompositionViews/WaistToHipRatioView'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { IFormValidator } from '../../interfaces/InterfaceFormValidator'
import { IWaistHipRatioFormData } from '../../interfaces/InterfaceForms'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedWaistToHipRationResults } from '../../interfaces/FormattedResults'
/* eslint-enable max-len */

/**
 * Controller for handling the calculation of Waist to Hip Ratio.
 * Extends the BaseController to provide specific functionality for this calculation.
 *
 * @class
 * @extends {BaseController}
 */
export class WaistToHipRatioController extends BaseController {
  protected view: WaistToHipRatioView

  /**
   * Creates an instance of WaistToHipRatioController.
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
    this.view = new WaistToHipRatioView(this.getUnitSystemValue.bind(this))
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
      this.formValidator.validateWaistToHipRatioFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): IWaistHipRatioFormData {
    const data: IWaistHipRatioFormData = {
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

// 80 rader
