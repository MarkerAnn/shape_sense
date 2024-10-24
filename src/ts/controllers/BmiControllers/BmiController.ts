import { BmiView } from '../../views/BmiViews/Bmiview'
import { BmiFormData } from '../../types/FormTypes'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { BaseController } from '../AbstractBaseController'
import { FormValidator } from '../../utils/FormValidator'
import { UnitSystem } from '../../enums/UnitSystem'
import { FormattedBmiResults } from '../../interfaces/FormattedResults'

export class BmiController extends BaseController {
  protected view: BmiView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new BmiView(this.getUnitSystemValue.bind(this))
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
      this.formValidator.validateBmiFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  protected getUniSystemValue(): UnitSystem {
    const userData = this.user.getData()
    return userData.unitSystem ?? UnitSystem.METRIC
  }

  private parseFormData(formData: FormData): BmiFormData {
    return {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      weight: parseFloat(formData.get('weight') as string),
      height: parseFloat(formData.get('height') as string),
    }
  }
  // TODO: ändra ovanstående? konsekvent med de andra controllers

  private updateView(): void {
    const bmi = this.calculator.getBmi()
    const bmiType = this.calculator.getBmiType()
    const healthRisk = this.calculator.getHealthRisk()
    const idealWeight = this.calculator.getIdealWeight()

    const formattedResults: FormattedBmiResults = {
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
