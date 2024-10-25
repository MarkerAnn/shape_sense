import { BmiView } from '../../views/BmiViews/Bmiview'
import { IBmiFormData } from '../../interfaces/InterfaceForms'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { BaseController } from '../AbstractBaseController'
import { IFormValidator } from '../../interfaces/InterfaceFormValidator'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedBmiResults } from '../../interfaces/FormattedResults'

/**
 * Controller for handling the calculation of Body Mass Index (BMI).
 * Extends the BaseController to provide specific functionality for this calculation.
 *
 * @class
 * @extends {BaseController}
 */
export class BmiController extends BaseController {
  protected view: BmiView

  /**
   * Creates an instance of BmiController.
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
    this.view = new BmiView(this.getUnitSystemValue.bind(this))
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
      this.formValidator.validateIBmiFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): IBmiFormData {
    const data: IBmiFormData = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      weight: parseFloat(formData.get('weight') as string),
      height: parseFloat(formData.get('height') as string),
    }

    return data
  }

  private updateView(): void {
    const bmi = this.calculator.getBmi()
    const bmiType = this.calculator.getBmiType()
    const healthRisk = this.calculator.getHealthRisk()
    const idealWeight = this.calculator.getIdealWeight()

    const formattedResults: IFormattedBmiResults = {
      bmi: this.formatValue(bmi),
      category: bmiType,
      healthRisk: healthRisk,
      idealWeight: this.formatIdealWeight(idealWeight),
    }
    this.view.updateResults(formattedResults)
  }

  private formatValue(value: number): string {
    return value.toFixed(1)
  }

  private formatIdealWeight([min, max]: [number, number]): string {
    return `${this.formatValue(min)} - ${this.formatValue(max)} kg`
  }
}
